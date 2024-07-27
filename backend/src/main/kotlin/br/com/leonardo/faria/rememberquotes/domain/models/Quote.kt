package br.com.leonardo.faria.rememberquotes.domain.models

import br.com.leonardo.faria.rememberquotes.domain.models.Book
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne

@Entity
data class Quote(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long,
    @Column(columnDefinition = "TEXT")
    val quote: String,
    @ManyToOne
    @JoinColumn(name = "book_id", referencedColumnName = "id")
    val book: Book,
)