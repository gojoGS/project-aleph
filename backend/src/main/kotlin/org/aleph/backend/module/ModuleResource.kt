package org.aleph.backend.module

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@RestController
@CrossOrigin(originPatterns = ["*"], maxAge = 3600, allowCredentials = "true")
@RequestMapping("/module", produces = ["application/json"])
class ModuleResource @Autowired constructor(
    private val moduleService: ModuleService
) {
    @PostMapping
    fun create(@Valid @RequestBody createLessonRequest: CreateModuleRequest): ResponseEntity<Module> {
        val savedModuleEntity = moduleService.create(createLessonRequest.title, createLessonRequest.description)
        return ResponseEntity.status(HttpStatus.CREATED).body(savedModuleEntity)
    }

    @GetMapping
    fun get(): ResponseEntity<List<Module>> {
        return ResponseEntity.ok(moduleService.get())
    }

    @GetMapping("/{id}")
    fun getById(@PathVariable id: Long): ResponseEntity<Module> {
        return ResponseEntity.ok(moduleService.getById(id))
    }

    @PutMapping("/{id}")
    fun update(@PathVariable id: Long, @Valid @RequestBody moduleBase: ModuleBase): ResponseEntity<Module> {
        val updatedModuleEntity = moduleService.update(id, moduleBase)
        return ResponseEntity.ok(updatedModuleEntity)
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun delete(@PathVariable id: Long) {
        moduleService.delete(id)
    }
}

data class CreateModuleRequest(
    @field:NotBlank @field:Size(max = 255) val title: String,
    @field:NotBlank @field:Size(max = 255) val description: String,
)
