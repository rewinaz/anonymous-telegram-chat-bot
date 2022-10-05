import { Bot, Context, Filter } from "grammy";
import { UserType } from "../typings";

export const messageHandler = async (
  ctx: Filter<Context, "message">,
  users: UserType[],
  bot: Bot
) => {
  const sender = users.find(
    (user) => user.chatId === ctx.chat.id && user.matchedTo != null
  );
  if (sender) {
    bot.api.sendMessage(sender.matchedTo!, ctx.message.text!);
  } else {
    bot.api.sendMessage(
      ctx.chat.id,
      "You have to first match with a stranger."
    );
  }
};
