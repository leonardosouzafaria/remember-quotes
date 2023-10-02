package br.com.leonardo.faria.rememberquotes.domain.service

import br.com.leonardo.faria.rememberquotes.domain.models.Quote
import br.com.leonardo.faria.rememberquotes.domain.repositories.QuoteRepository
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service

@Service
class QuoteService(
    private val quoteRepository: QuoteRepository,
    private val telegramService: TelegramService
) {

//     @Scheduled(cron = "* * * * * ?")
    @Scheduled(cron = "0 0 8 * * ?")
    fun startSelectDailyQuote() {
        val allQuotes = quoteRepository.findAll()
        val dailyQuote = allQuotes.toList().random()
        telegramService.sendMessage(buildQuoteMessage(dailyQuote))
        println(dailyQuote.quote)
    }

    private fun buildQuoteMessage(quote: Quote): String {
        return MESSAGE_TEMPLATE.format(
            quote.book,
            quote.quote,
            quote.author
        )
    }

    companion object{
        const val MESSAGE_TEMPLATE = "\uD83D\uDCDA *CITAÇÃO DO DIA*  \n" +
                "\uD83E\uDDE0 *RELEMBRE TRECHOS DE LIVROS*\n" +
                "\n" +
                "_*%s*_\n" +
                "_%s_\n" +
                "_%s_"
    }
}