exports.checkReact = (message) => {
  // this is for message reaction is suggestions and introduction
  if (message.channel.id === "834768678935330826") {
    message.react("✅");
    message.react("❎");
  } else if (message.channel.id === "834450134594617406") {
    message.react("827860251495759872");
  }

  // this is for message reaction in every channel
  if (message.content.toLowerCase().includes(" love")) {
    message.react("827860267509481473");
    message.react("827860251495759872");
  }
  if (message.content.toLowerCase().includes("peace")) {
    message.react("💫");
    message.react("💕");
  }
  if (message.content.toLowerCase().includes("good night")) {
    message.react("🌙");
    message.react("💫");
  }
  if (
    message.content.toLowerCase() == "hii" ||
    message.content.toLowerCase() == "heya" ||
    message.content.toLowerCase() == "heyy" ||
    message.content.toLowerCase() == "hello"
  ) {
    message.react("826048940033441822");
    message.react("826048940033441822");
  }
  if (message.content.toLowerCase().includes("tony kakkar")) {
    message.react("🥱");
    message.react("🤮");
    message.react("🚮");
  } else if (message.content.toLowerCase().includes(" king")) {
    message.react("🥀");
  }
};
