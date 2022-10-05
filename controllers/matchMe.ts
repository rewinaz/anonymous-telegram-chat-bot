import { Bot, CommandContext, Context } from "grammy";
import { UserType } from "../typings";

export const matchMeHandler = async (
  ctx: CommandContext<Context>,
  users: UserType[],
  bot: Bot
) => {
  const chatId = ctx.chat.id;

  bot.api.sendMessage(chatId, "We Are Finding a Match For You Please Wait!");
  if (!users.find((user) => user.chatId === chatId)) {
    const user: UserType = {
      chatId: chatId,
      matchedTo: null,
    };
    users.push(user);
  }
  if (
    users.length > 1 &&
    users.findIndex((user) => user.chatId === chatId && user.matchedTo === null)
  ) {
    const index = users.findIndex(
      (user) => user.chatId === chatId && user.matchedTo === null
    );
    //   Finding match
    let randomId: number = Math.floor(Math.random() * users.length);

    while (randomId === index) {
      randomId = Math.floor(Math.random() * users.length);
    }

    const randomUser: UserType = users[randomId!];
    // Updating User
    users.splice(index, 1, {
      chatId: chatId,
      matchedTo: randomUser.chatId,
    });
    bot.api.sendMessage(
      chatId,
      "We Have Found a Match for you you can chat now."
    );
    users.splice(randomId, 1, {
      chatId: randomUser.chatId,
      matchedTo: chatId,
    });
    bot.api.sendMessage(
      randomUser.chatId,
      "We Have Found a Match for you you can chat now."
    );
  } else {
    bot.api.sendMessage(chatId, "There is No available Match at this time!!!");
  }
};
