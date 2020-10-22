/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

//  import resume from '../resume.json';
const resume = require("../resume.json");
let entries = Object.entries(resume).slice(1, -1);

const { BotkitConversation } = require("botkit");

module.exports = function (controller) {
  if (controller.adapter.name === "Web Adapter") {
    console.log("Loading sample web features...");

    // controller.ready(() => {
    // });

    // controller.hears(".*", "message", async (bot, message) => {
    //   await bot.reply(message, "I heard: " + message.text);
    // });

    // controller.on("event", async (bot, message) => {
    //   await bot.reply(message, "I received an event of type " + message.type);
    // });

    controller.hears("resume", "message", async (bot, message) => {
      await bot.reply(message, {
        text: "Here is my resume...",
        resume: entries,
      });
    });

    controller.hears("basics", "message", async (bot, message) => {
      await bot.reply(message, {
        text: "Here are some basics about me...",
        basics: Object.entries(resume.basics),
      });
    });
    // controller.hears("profiles", "message", async (bot, message) => {
    //   await bot.reply(message, {
    //     text: "Some of my online profiles",
    //     //  profiles: Object.entries(resume.basics.profiles)
    //     profiles: [
    //       {
    //         title: "LinkedIn",
    //         payload: "https://www.linkedin.com/in/nahuel-gorosito-a2a41524/",
    //       },
    //     ],
    //   });
    // });

    controller.hears(new RegExp("quick"), "message", async (bot, message) => {
      await bot.reply(message, {
        text: "Here are some quick replies",
        // quick_replies: entries.map(entry => entry[0])
        quick_replies: [
          {
            title: "Name",
            payload: "Nahuel Gorosito",
          },
          {
            title: "Title",
            payload: "Fullstack Developer",
          },
          {
            title: "Where did you grow up?",
            payload: "Queens, New York",
          },
          {
            title: "Email",
            payload: "ngorositodev@gmail.com",
          },
        ],
      });
    });
  }
};
