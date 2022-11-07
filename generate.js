import {Configuration, OpenAIApi} from 'openai';
import {writeFileSync} from 'fs';

const configuration = new Configuration({
  apiKey: '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'
});

const openai = new OpenAIApi(configuration);

const prompt = 'a white siamese cat'

const response = await openai.createImage({
  prompt,
  n: 1,
  size: "1024x1024",
  user:"elonmusk123"
});
const Rurl = response.data.data[0].url;
console.log(Rurl);

const imgResult = await fetch(Rurl);
const blob = await imgResult.blob();
const buffer = Buffer.from( await blob.arrayBuffer() )
writeFileSync(`./img/${Date.now()}.png`, buffer);