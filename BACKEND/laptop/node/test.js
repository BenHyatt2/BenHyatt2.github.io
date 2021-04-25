//const yaytext = process.argv[2].substring(1,process.argv[2].length-1);

var yaytext = process.argv.join(" ").substring(67,process.argv.join(" ").length-1);
//console.log(yaytext);

const OpenAI = require('openai-api');

const OPENAI_API_KEY = "***";

const openai = new OpenAI(OPENAI_API_KEY);

(async () => {
    const gptResponse = await openai.complete({
        engine: 'davinci',
        prompt: "" + yaytext + " tl;dr:",
        temperature:0.3,
min_tokens:250,  
max_tokens:280,
  top_p:1,
  frequency_penalty:0,
  presence_penalty:0,
  stop:["\n"]
    });
    console.log(gptResponse.data.choices[0].text);
})();
