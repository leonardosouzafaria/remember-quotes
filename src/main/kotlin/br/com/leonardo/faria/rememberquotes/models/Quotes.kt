package br.com.leonardo.faria.rememberquotes.models

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class Quotes(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long,
    val author: String,
    val quote: String,
    val book: String,
)