package org.aleph.backend.lesson

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

@RestController
@RequestMapping("/lesson", produces = ["application/json"], consumes = ["application/json"])
class LessonController @Autowired constructor(
    private val lessonService: LessonService
) {
    @PostMapping
    fun create(@Valid @RequestBody createLessonRequest: CreateLessonRequest): ResponseEntity<Lesson> {
        val savedLessonEntity = lessonService.create(createLessonRequest.title, createLessonRequest.description)
        return ResponseEntity.status(HttpStatus.CREATED).body(savedLessonEntity)
    }

    @GetMapping
    fun get(): ResponseEntity<List<Lesson>> {
        return ResponseEntity.ok(lessonService.get())
    }

    @GetMapping("/{id}")
    fun getById(@PathVariable id: Long): ResponseEntity<Lesson> {
        return ResponseEntity.ok(lessonService.getById(id))
    }

    @PutMapping("/{id}")
    fun update(@PathVariable id: Long, @Valid @RequestBody lesson: LessonBase): ResponseEntity<Lesson> {
        val updatedLessonEntity = lessonService.update(id, lesson)
        return ResponseEntity.ok(updatedLessonEntity)
    }

    @DeleteMapping("/{idea}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun delete(@PathVariable idea: Long) {
        lessonService.delete(idea)
    }
}

data class CreateLessonRequest(
    @NotBlank @Size(max = 255) val title: String,
    @NotBlank @Size(max = 255) val description: String,
)
