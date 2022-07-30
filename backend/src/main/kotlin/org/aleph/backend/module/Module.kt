package org.aleph.backend.module

import com.fasterxml.jackson.annotation.JsonIgnore
import org.aleph.backend.exception.CustomEntityNotFoundException
import org.aleph.backend.lesson.Lesson
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service
import javax.persistence.*
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@MappedSuperclass
open class ModuleBase(
    @field:NotBlank @field:Size(max = 255) var title: String,
    @field:NotBlank @field:Size(max = 255) var description: String
) {
    constructor(): this("", "")
}

@Entity
@Table(name = "module")
class Module(
    @GeneratedValue(strategy = GenerationType.IDENTITY) @Id var id: Long?,
): ModuleBase() {
    constructor(): this(null)

    @OneToMany(cascade = [(CascadeType.ALL)], fetch = FetchType.LAZY, mappedBy = "module")
    private val _lessons = mutableListOf<Lesson>()

    val lessons get() = _lessons.toList()
}

@Repository
interface ModuleRepository: JpaRepository<Module, Long>

interface ModuleService {
    fun create(title: String, description: String): Module
    fun get(): List<Module>
    fun getById(id: Long): Module
    fun update(id: Long, moduleBase: ModuleBase): Module
    fun delete(id: Long)
}

class ModuleNotFoundException(id: Long): CustomEntityNotFoundException("Couldn't find module with id: $id")

@Service
class ModuleServiceImpl @Autowired constructor(
    private val moduleRepository: ModuleRepository
) : ModuleService {
    override fun create(title: String, description: String): Module {
        val newModule = Module().apply {
            this.title = title
            this.description = description
        }

        return moduleRepository.save(newModule)
    }

    override fun get(): List<Module> {
        return moduleRepository.findAll();
    }

    override fun getById(id: Long): Module {
        return moduleRepository.findByIdOrNull(id) ?: throw ModuleNotFoundException(id)
    }

    override fun update(id: Long, moduleBase: ModuleBase): Module {
        val module = getById(id)

        return moduleRepository.save(
            module.also {
                it.title = moduleBase.title
                it.description = moduleBase.description
            }
        )
    }

    override fun delete(id: Long) {
        if(moduleRepository.existsById(id)) {
            moduleRepository.deleteById(id)
        }
    }
}
