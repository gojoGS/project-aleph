package org.aleph.backend.lesson

import org.aleph.backend.exception.CustomEntityNotFoundException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service
import java.time.LocalDate
import javax.persistence.*
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull
import javax.validation.constraints.Size

@MappedSuperclass
open class LessonBase(
    @field:NotBlank @field:Size(max = 255) var title: String,
    @field:NotBlank @field:Size(max = 255) var description: String
) {
    constructor(): this("", "")
}

@Entity
@Table(name = "lesson")
class Lesson(
    @GeneratedValue(strategy = GenerationType.IDENTITY) @Id var id: Long?,
    @field:NotNull @Basic var dateCreated: LocalDate?,
    @field:NotNull @Basic var dateLastUpdated: LocalDate?,
): LessonBase() {
    constructor(): this(null, null, null)
}

@Repository
interface LessonRepository: JpaRepository<Lesson, Long>

interface LessonService {
    fun create(title: String, description: String): Lesson
    fun get(): List<Lesson>
    fun getById(id: Long): Lesson
    fun update(id: Long, lessonBase: LessonBase): Lesson
    fun delete(id: Long)
}

class LessonNotFoundException(id: Long): CustomEntityNotFoundException("Couldn't find lesson with id: $id")

@Service
class LessonServiceImpl @Autowired constructor(
    private val lessonRepository: LessonRepository
): LessonService {
    override fun create(title: String, description: String): Lesson {
        val newLesson: Lesson = Lesson().apply {
            this.title = title
            this.description = description
            this.dateCreated = LocalDate.now()
            this.dateLastUpdated = LocalDate.now()
        }

        return lessonRepository.save(newLesson)
    }

    override fun get(): List<Lesson> {
        return lessonRepository.findAll()
    }

    override fun getById(id: Long): Lesson {
        return lessonRepository.findByIdOrNull(id) ?: throw LessonNotFoundException(id)
    }

    override fun update(id: Long, lessonBase: LessonBase): Lesson {
        val lesson = lessonRepository.findByIdOrNull(id) ?: throw LessonNotFoundException(id)

        return lessonRepository.save(
            lesson.also {
                it.id = id
                it.title = lessonBase.title
                it.description = lessonBase.description
                it.dateLastUpdated = LocalDate.now()
            }
        )
    }

    override fun delete(id: Long) {
        if (lessonRepository.existsById(id)) {
            lessonRepository.deleteById(id)
        }
    }
}

