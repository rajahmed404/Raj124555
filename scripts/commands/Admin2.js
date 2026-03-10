const moment = require("moment-timezone");
const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
  name: "Admin",
  version: "1.0.0",
  permission: 0,
  credits: "Joy",
  description: "Shows admin's personal information",
  prefix: true,
  category: "info",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": ""
  }
};

module.exports.run = async function ({ api, event }) {
  const currentTime = moment.tz("Asia/Dhaka").format("DD MMM YYYY, hh:mm:ss A");
  const imageUrl = "https://graph.facebook.com/61556784100954/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  const imgPath = __dirname + "/cache/admin_avatar.png";

  const infoText = `
╭╼|━━━━━━━━━━━━━━|╾╮
👑 𝗔𝗱𝗺𝗶𝗻: 𝗥𝗮𝗷 𝗔𝗵𝗺𝗲𝗱
🌐 𝗡𝗮𝗺𝗲: 𝗥𝗮𝗷 𝗔𝗵𝗺𝗲𝗱
🕋 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻: 𝐈𝐬𝐥𝐚𝐦 | 🚹 𝗚𝗲𝗻𝗱𝗲𝗿: 𝘔𝘢𝘭𝘦
🎂 𝗔𝗴𝗲: 𝟭𝟲+ | 🎓 𝗪𝗼𝗿𝗸: 𝘚𝘵𝘶𝘥𝘦𝘯𝘵
🏠 𝗙𝗿𝗼𝗺: 𝗕𝗮𝗿𝗶𝘀𝗵𝗮𝗹, 𝗗𝗵𝗮𝗸𝗮
📍 𝗖𝘂𝗿𝗿𝗲𝗻𝘁: 𝗕𝗮𝗿𝗶𝘀𝗵𝗮𝗹
💘 𝗦𝘁𝗮𝘁𝘂𝘀: 𝙎𝙞𝙣𝙜𝙡𝙚
📧 𝗘𝗺𝗮𝗶𝗹: 𝗿𝗮𝗷𝗮𝗵𝗺𝗲𝗱@gmail.com
📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽: +8801313186145
✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺: t.me/*****
🔗 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: fb.com/61556784100954
⏰ 𝗧𝗶𝗺𝗲: ${currentTime}
╰╼|━━━━━━━━━━━━━━|╾╯`;

  const callback = () => {
    api.sendMessage({
      body: infoText,
      attachment: fs.createReadStream(imgPath)
    }, event.threadID, () => fs.unlinkSync(imgPath));
  };

  request(encodeURI(imageUrl))
    .pipe(fs.createWriteStream(imgPath))
    .on("close", callback);
};