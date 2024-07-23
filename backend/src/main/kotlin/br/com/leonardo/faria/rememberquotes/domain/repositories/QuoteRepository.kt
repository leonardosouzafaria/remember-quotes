package br.com.leonardo.faria.rememberquotes.domain.repositories

import br.com.leonardo.faria.rememberquotes.domain.models.Quote
import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "quotes", path = "quotes")
interface QuoteRepository: CrudRepository<Quote, Long> {
}