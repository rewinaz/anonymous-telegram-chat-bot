import { Bot, CommandContext, Context, Keyboard } from "grammy";
import { UserType } from "../typings";

export const startHandler = (
  context: CommandContext<Context>,
  users: UserType[],
  bot: Bot
) => {
  bot.api.sendMessage(context.chat.id, "Welcome To Random Chat Bot.", {
    reply_markup: {
      one_time_keyboard: true,
      resize_keyboard: true,
      keyboard: [[{ text: "/matchme" }], [{ text: "/leave" }]],
      input_field_placeholder: "Please Select Action",
    },
  });
};
