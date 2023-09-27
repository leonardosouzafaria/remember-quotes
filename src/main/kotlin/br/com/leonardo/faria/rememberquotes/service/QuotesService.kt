package br.com.leonardo.faria.rememberquotes.service

import br.com.leonardo.faria.rememberquotes.repositories.QuoteRepository
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service

@Service
class QuotesService(
    private val quoteRepository: QuoteRepository
) {

    // @Scheduled(cron = "0 0/5 * * * ?")
    @Scheduled(cron = "0 0 8 * * ?")
    fun startSelectDailyQuote() {
        val allQuotes = quoteRepository.findAll()
        val dailyQuote = allQuotes.toList().random()
        println(dailyQuote.quote)
    }

}