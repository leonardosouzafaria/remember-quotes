package br.com.leonardo.faria.rememberquotes.repositories

import br.com.leonardo.faria.rememberquotes.models.Quotes
import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "quotes", path = "quotes")
interface QuoteRepository: CrudRepository<Quotes, Long> {
}