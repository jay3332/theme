const d = require('js-cord');
const c = new d.Client();
c.listen("message", async(message) => {
  if (message.author.id==='679867543066116169') {
    if (message.content.includes("😂") || message.content.includes("joy")) {
      await message.delete()
    }
  }
}).login(process.env.TOKEN);
