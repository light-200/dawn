const fetch = require("node-fetch");
let Fdata = "";
const StartTimer = 90;
let counter = StartTimer;
const url =
  "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  Fdata = data;
};

const getText = () => {
  return ` COVID UPDATES (source: ${Fdata.sourceUrl})

🔸 **Active cases** = ${Fdata.activeCases}    |   **new active cases** = ${Fdata.activeCasesNew}\n
🔸 **Recovered** = ${Fdata.recovered}   |   **new recovered** = ${Fdata.recoveredNew}\n
🔸 **Deaths** = ${Fdata.deaths}  💮|   **new deaths** = ${Fdata.activeCasesNew} 💮\n
Updates in ${counter}s`;
};

const updateCounter = async (message) => {
  let inverval = 5;

  message.edit(getText());
  counter -= inverval;
  if (counter <= 0) {
    await fetchData();
    counter = StartTimer;
  }

  setTimeout(() => {
    updateCounter(message);
  }, 1000 * inverval);
};

exports.CoronaUpdates = async (client) => {
  await fetchData();
  const guild = client.guilds.cache.get("810505347127181352");
  const channel = guild.channels.cache.get("840628300610273291");

  const message = await channel.send(getText());

  updateCounter(message);
};
