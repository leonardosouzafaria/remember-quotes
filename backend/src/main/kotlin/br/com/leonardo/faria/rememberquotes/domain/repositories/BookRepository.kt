package br.com.leonardo.faria.rememberquotes.domain.repositories

import br.com.leonardo.faria.rememberquotes.domain.models.Book
import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "books", path = "books")
interface BookRepository: CrudRepository<Book, Long> {
}