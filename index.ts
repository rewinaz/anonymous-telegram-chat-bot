import { Bot } from "grammy";
import * as dotenv from "dotenv";
import { UserType } from "./typings";
import { matchMeHandler } from "./controllers/matchMe";
import { leaveChatHandler } from "./controllers/leave";
import { startHandler } from "./controllers/start";
import { messageHandler } from "./controllers/message";

dotenv.config();

// Initializing Bot
const TOKEN: string = process.env.BOT_TOKEN!;
const bot = new Bot(TOKEN);

// Global Users Container
const users: UserType[] = [];

bot.command("start", (ctx) => {
  startHandler(ctx, users, bot);
});

bot.command("matchme", (ctx) => {
  matchMeHandler(ctx, users, bot);
});

bot.command("leave", (ctx) => {
  leaveChatHandler(ctx, users, bot);
});

bot.on("message", (ctx) => {
  messageHandler(ctx, users, bot);
});

bot.start();
