import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from "fs";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const src = "./mona.png"; //add img url you want to make variation not wrong one because it is not free api request every time you call api your credit are loss one score 🙂🙂

const response = await openai.createImageVariation(
  fs.createReadStream(`./img/${src}`),
  1,
  "1024x1024"
);
image_url = response.data.data[0].url;
console.log(image_url);

const imgResult = await fetch(Rurl);
const blob = await imgResult.blob();
const buffer = Buffer.from(await blob.arrayBuffer());
writeFileSync(`./img/${Date.now()}.png`, buffer);
