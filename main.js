// Load default data
getDataBasedOnTimePeriod(0);

function getDataBasedOnTimePeriod(TIME_PERIOD) {
  // read data from json file
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      // Set titles
      document.getElementById("js-work-heading").innerText = data[0].title;
      document.getElementById("js-play-heading").innerText = data[1].title;
      document.getElementById("js-study-heading").innerText = data[2].title;
      document.getElementById("js-exercise-heading").innerText = data[3].title;
      document.getElementById("js-social-heading").innerText = data[4].title;
      document.getElementById("js-selfcare-heading").innerText = data[5].title;
      if (TIME_PERIOD === 0) {
        // daily current
        document.getElementById("js-work-current-period").innerText =
          data[0].timeframes.daily.current;
        document.getElementById("js-play-current-period").innerText =
          data[1].timeframes.daily.current;
        document.getElementById("js-study-current-period").innerText =
          data[2].timeframes.daily.current;
        document.getElementById("js-exercise-current-period").innerText =
          data[3].timeframes.daily.current;
        document.getElementById("js-social-current-period").innerText =
          data[4].timeframes.daily.current;
        document.getElementById("js-selfcare-current-period").innerText =
          data[5].timeframes.daily.current;

        // daily previous
        document.getElementById("js-work-previous-period").innerText =
          data[0].timeframes.daily.previous;
        document.getElementById("js-play-previous-period").innerText =
          data[1].timeframes.daily.previous;
        document.getElementById("js-study-previous-period").innerText =
          data[2].timeframes.daily.previous;
        document.getElementById("js-exercise-previous-period").innerText =
          data[3].timeframes.daily.previous;
        document.getElementById("js-social-previous-period").innerText =
          data[4].timeframes.daily.previous;
        document.getElementById("js-selfcare-previous-period").innerText =
          data[5].timeframes.daily.previous;
        // 3. mark the current button as active
        // 4. remove the active class from the other button
      } else if (TIME_PERIOD === 1) {
        // 2. read data for weekly
        // 3. mark the current button as active
        // 4. remove the active class from the other button
      } else if (TIME_PERIOD === 2) {
        // 2. read data for monthly
        // 3. mark the current button as active
        // 4. remove the active class from the other button
      }
    });
}
