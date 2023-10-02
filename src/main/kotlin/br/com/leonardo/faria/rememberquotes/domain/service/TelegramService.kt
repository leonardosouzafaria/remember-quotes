package br.com.leonardo.faria.rememberquotes.domain.service

import org.springframework.core.env.Environment
import org.springframework.core.env.get
import org.springframework.stereotype.Service
import org.telegram.telegrambots.bots.TelegramLongPollingBot
import org.telegram.telegrambots.meta.api.methods.ParseMode
import org.telegram.telegrambots.meta.api.methods.send.SendMessage
import org.telegram.telegrambots.meta.api.objects.Update
import org.telegram.telegrambots.meta.exceptions.TelegramApiException

@Service
class TelegramService(
    private var environment: Environment
): TelegramLongPollingBot() {

    override fun getBotToken(): String {
        return environment["telegram.bot.token"]!!
    }

    override fun getBotUsername(): String {
        return "Remember Quotes"
    }

    override fun onUpdateReceived(update: Update) {

    }

    fun sendMessage(message: String) {

        val id = environment["telegram.chatid"]!!

        val sendMessage = SendMessage
            .builder()
            .text(message)
            .parseMode(ParseMode.MARKDOWNV2)
            .chatId(id)
            .build()

        try {
            execute(sendMessage)
        } catch (ex: TelegramApiException) {
            //TODO COLOCAR LOG
            println(ex)
        }
    }
}