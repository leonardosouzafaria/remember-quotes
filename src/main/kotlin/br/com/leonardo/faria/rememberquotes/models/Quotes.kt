package br.com.leonardo.faria.rememberquotes.models

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.ManyToMany
import jakarta.persistence.ManyToOne

@Entity
data class Quotes(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long,
    val quote: String,
    @ManyToOne
    val book: Book,
)