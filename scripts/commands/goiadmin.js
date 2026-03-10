module.exports.config = {
  name: "goiadmin",
  version: "1.0.1",
  permission: 0,
  credits: "Joy Ahmed",
  description: "Don't mention admin without reason",
  prefix: true,
  category: "user",
  usages: "tag",
  cooldowns: 5,
};

const adminUIDs = [ 
  "61556784100954", 
  "61556784100954", 
];

module.exports.handleEvent = function({ api, event }) {
  const mentionIDs = Object.keys(event.mentions || {});
  const isMentioningAdmin = mentionIDs.some(id => adminUIDs.includes(id));

  if (!isMentioningAdmin || adminUIDs.includes(event.senderID)) return;

  const msgList = [
    "╭╼|━━━━━━━━━━━━━━|╾╮\n⛔ 𝙈𝙖𝙣𝙩𝙞𝙤𝙣 𝙙𝙞𝙨𝙤 𝙠𝙚𝙣 𝙗𝙖𝙟𝙖𝙧 𝙡𝙖𝙜𝙘𝙝𝙚 😡\n╰╼|━━━━━━━━━━━━━━|╾╯",
    "╭╼|━━━━━━━━━━━━━━|╾╮\n🥀 রাজ বস এখন বিজি! পরে কথা বলো।\n╰╼|━━━━━━━━━━━━━━|╾╯",
    "╭╼|━━━━━━━━━━━━━━|╾╮\n😾 এত মেনশন না দিয়ে ইনবক্সে গিয়ে রাজ বসের সাথে চিপায় যাও! 💌\n╰╼|━━━━━━━━━━━━━━|╾╯",
    "╭╼|━━━━━━━━━━━━━━|╾╮\n🤐 মেনশন কইরা লাভ নাই, প্রেম পাইবা না 🙃\n╰╼|━━━━━━━━━━━━━━|╾╯",
    "╭╼|━━━━━━━━━━━━━━|╾╮\n💔 রাজ এখন ভাঙা হৃদয়ে গান শুনতেছে, disturb কইরো না 😭\n╰╼|━━━━━━━━━━━━━━|╾╯",
    "╭╼|━━━━━━━━━━━━━━|╾╮\n💋 এত মেনশন না দিয়ে পারলে রাজ কে একটা বউ দে বাল পাকনা! 😽\n╰╼|━━━━━━━━━━━━━━|╾╯",
  ];

  const randomMsg = msgList[Math.floor(Math.random() * msgList.length)];
  return api.sendMessage(randomMsg, event.threadID, event.messageID);
};

module.exports.run = function() {};