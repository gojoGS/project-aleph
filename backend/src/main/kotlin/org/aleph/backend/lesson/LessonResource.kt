package org.aleph.backend.lesson

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
class LessonResource @Autowired constructor(
    private val lessonService: LessonService
) {
    @PostMapping("/{moduleId}/lesson")
    fun create(@Valid @RequestBody createLessonRequest: CreateLessonRequest, @PathVariable moduleId: Long): ResponseEntity<Lesson> {
        val savedLessonEntity = lessonService.create(moduleId, createLessonRequest.title, createLessonRequest.description)
        return ResponseEntity.status(HttpStatus.CREATED).body(savedLessonEntity)
    }


    @GetMapping("/lesson")
    fun get(): ResponseEntity<List<Lesson>> {
        return ResponseEntity.ok(lessonService.get())
    }

    @GetMapping("/lesson/{id}")
    fun getById(@PathVariable id: Long): ResponseEntity<Lesson> {
        return ResponseEntity.ok(lessonService.getById(id))
    }

    @GetMapping("/{moduleId}/lesson")
    fun get(@PathVariable moduleId: Long): ResponseEntity<List<Lesson>> {
        return ResponseEntity.ok(lessonService.get(moduleId))
    }

    @PutMapping("/lesson/{id}")
    fun update(@PathVariable id: Long, @Valid @RequestBody lessonBase: LessonBase): ResponseEntity<Lesson> {
        val updatedLessonEntity = lessonService.update(id, lessonBase)
        return ResponseEntity.ok(updatedLessonEntity)
    }

    @DeleteMapping("/lesson/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun delete(@PathVariable id: Long) {
        lessonService.delete(id)
    }
}

data class CreateLessonRequest(
    @field:NotBlank @field:Size(max = 255) val title: String,
    @field:NotBlank @field:Size(max = 255) val description: String,
)
