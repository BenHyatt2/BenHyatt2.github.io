$("#user-input").load("demo.html");

// get all tweets
let tweets = [
  {
    title: "Vaccines",
    summary:
      "Vaccine Eligibility for 16+ Americans and 200 Million shots. Greenhouse gas emissions cut in half for U.S. by 2030.",
    tweet: `We’re wrapping up another busy week, where we:

- Opened vaccine eligibility to every American 16+
- Hit our goal of 200 million shots
- Announced a new goal to cut U.S. greenhouse gas emissions at least in half by 2030
- Hosted a historic climate summit with world leaders`,
  },
  {
    title: "Plan",
    summary:
      "Rescue plan successfully dealt with crisis. New American Jobs Plan to rebuild infrastructure and allow many Americans to work.",
    tweet: `The American Rescue Plan helped us deal with the immediate crises of the moment.
 
Now, it’s time to rebuild.
 
The American Jobs Plan will make historic investments in our future and put millions of Americans to work rebuilding our nation’s infrastructure.`,
  },
];

function createTweetCard(tweet, idx) {
  let html = `<div
      class="${
        idx == 0 ? "bg-dark" : idx == 3 ? "bg-primary" : "bg-light"
      } mr-md-3 mb-5 pt-3 px-3 pt-md-5 px-md-3 text-center text-white overflow-hidden tweet-card"
      style="width: 45%"
    >
      <div class="my-3 py-3">
        <h2 class="display-5 ${
          idx == 0 || idx == 3 ? "text-white" : "text-dark"
        }">${tweet.title}</h2>
        <p class="${idx == 0 || idx == 3 ? "text-white" : "text-dark lead"}">
          ${tweet.summary}
        </p>
        <span
          class="icon-angle-down ${
            idx == 0 || idx == 3 ? "text-white" : "text-dark"
          }"
          style="font-size: 2rem; cursor: pointer"
        ></span>
      </div>
      <div
        class="${
          idx == 1 || idx == 2 ? "bg-dark" : idx < 4 ? "bg-light" : "bg-white"
        } box-shadow mx-auto p-4 d-flex align-items-center justify-content-center"
        style="width: 80%; height: 500px; border-radius: 21px 21px 0 0; color: ${
          idx == 1 || idx == 2 ? "white" : "black"
        }"
      >${tweet.tweet}</div>
    </div>`;
  return html;
}

console.log(tweets);
// tweets.forEach((tweet) => {
for (let i = 0; i < 6; i++) {
  let tweet = tweets[0];
  let tweetCard = createTweetCard(tweet, i);
  $(".tweet-container").append(tweetCard);
}
