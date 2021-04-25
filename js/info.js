let elementIDs = ["#tweets-parsed", "#characters-parsed", "#summaries-made"];

(function ($) {
  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
    ","
  );
  let intervals = [];
  intervals.push(
    setInterval(() => {
      for (let elementID of elementIDs) {
        let element = $(elementID);
        let val =
          parseInt(element.attr("data-number")) +
          (elementID == "#characters-parsed" ? 10 * 5 : 10);
        element.attr("data-number", val);
        element.animateNumber(
          {
            number: val,
            numberStep: comma_separator_number_step,
          },
          3500
        );
      }
    }, 3500)
  );

  //   watch for submission of user-input
  let userInputHandler = () => {
    let inputsParsed = $("#inputs-parsed");
    let summariesMade = $("#summaries-made");

    let inputsParsedVal = inputsParsed.attr("data-number") + 10;
    inputsParsed.attr("data-number", inputsParsedVal);
    inputsParsed.animateNumber(
      {
        number: inputsParsedVal,
        numberStep: comma_separator_number_step,
      },
      1000
    );

    let summariesMadeVal = summariesMade.attr("data-number") + 10;
    summariesMade.attr("data-number", summariesMadeVal);
    summariesMade.animateNumber(
      {
        number: summariesMadeVal,
        numberStep: comma_separator_number_step,
      },
      1000
    );
  };

  let tweetHandler = () => {};

  window.addEventListener("unload", () => {
    intervals.forEach((interval) => {
      clearInterval(interval);
    });
  });
})(jQuery);
