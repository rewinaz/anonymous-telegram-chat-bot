import { Bot, CommandContext, Context } from "grammy";
import { UserType } from "../typings";

export const leaveChatHandler = (
  ctx: CommandContext<Context>,
  users: UserType[],
  bot: Bot
) => {
  const index = users.findIndex(
    (user) => user.chatId === ctx.chat.id && user.matchedTo != null
  );
  if (index >= 0) {
    const matchedUserIndex = users.findIndex(
      (user) => user.chatId === users[index].matchedTo && user.matchedTo != null
    );

    const matchedUser = users[matchedUserIndex];

    // REMOVING THE NON - LEAVING USER matchedTo ID
    users[matchedUserIndex] = {chatId: matchedUser.chatId,matchedTo:null}
    bot.api.sendMessage(
      matchedUser.chatId,
      "Your Match Left. Find another match."
    );

    // REMOVING THE LEAVING USER
    users.splice(index, 1);
    bot.api.sendMessage(
      ctx.chat.id,
      "Your leave was success. Find another match."
    );
  } else {
    bot.api.sendMessage(ctx.chat.id, "You are not in any chat. Find match.");
  }
};
