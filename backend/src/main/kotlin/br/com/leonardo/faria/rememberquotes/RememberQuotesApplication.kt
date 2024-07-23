package br.com.leonardo.faria.rememberquotes

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.scheduling.annotation.EnableScheduling

@SpringBootApplication
@EnableScheduling
class RememberQuotesApplication

fun main(args: Array<String>) {
	runApplication<RememberQuotesApplication>(*args)
}
