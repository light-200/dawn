const msg = "text for the day"
const reply = "bruhhh idk anything !!!"

exports.replyText = (message) => {
    // this is for message reaction in every channel
    if (message.content.toLowerCase().includes(msg)) {
      message.reply(reply).then(() => console.log(`Replied to message "${message.content}"`))
      .catch(console.error);
    }
};