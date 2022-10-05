import { Bot } from "grammy";
import * as dotenv from "dotenv";
dotenv.config();

const TOKEN: string = process.env.BOT_TOKEN!;

const bot = new Bot(TOKEN);
//TODO: Handles commands, such as /start.
bot.command("start", async (ctx) => {
  // TODO: Make Telegram clients automatically show a reply interface to the user.
  // await ctx.reply("Hi! I can only read messages that explicitly reply to me!", {
  // reply_markup: { force_reply: true },
  //   });
});

//TODO: Matches the message text against a string or a regular expression.
bot.hears("listen", (ctx) => {
  const message = ctx.message!;
  console.log("Listen :: ", message.text);
});

// TODO: The easiest way to listen for messages is via
bot.on("message", async (ctx) => {
  const message = ctx.message;
  // TODO: Send a text message to user
  // Optionally, you can pass an options object.
  //   await bot.api.sendMessage(ctx.chat.id, message.text! + "🙋‍♂️");
  // TODO: to get info about the bot
  //   const me = await bot.api.getMe();
  // TODO: Replying to message
  //   await ctx.reply("pong", {
  //     // `reply_to_message_id` specifies the actual reply feature.
  //     reply_to_message_id: ctx.msg.message_id,
  //   });

  //   TODO: Formatting TEXT WITH MARKDOWN
  //   await bot.api.sendMessage(
  //     ctx.chat.id,
  //     "*Hi\\!* _Welcome_ to [grammY](https://grammy.dev)\\.",
  //     { parse_mode: "MarkdownV2" }
  //   );

  //   TODO: Formatting TEXT WITH HTML
  //   await bot.api.sendMessage(
  //     ctx.chat.id,
  //     '<b>Hi!</b> <i>Welcome</i> to <a href="https://grammy.dev">grammY</a>.',
  //     { parse_mode: "HTML" }
  //   );
});

bot.start();
