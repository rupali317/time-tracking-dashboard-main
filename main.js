// Load default data
getDataBasedOnTimePeriod(0);

const activities = {
  work: 0,
  play: 1,
  study: 2,
  exercise: 3,
  social: 4,
  selfcare: 5,
};

function getDataBasedOnTimePeriod(TIME_PERIOD) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // Set titles
      Object.keys(activities).forEach((activity, index) => {
        document.getElementById(`js-${activity}-heading`).innerText =
          data[index].title;
      });

      if (TIME_PERIOD === 0) {
        // Daily current
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

        // Daily previous
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

        // Mark the current button as active
        document.getElementById("js-button-daily").classList.add("active");

        // Remove the active class from the other button
        document.getElementById("js-button-weekly").classList.remove("active");
        document.getElementById("js-button-monthly").classList.remove("active");
      } else if (TIME_PERIOD === 1) {
        // Weekly current
        document.getElementById("js-work-current-period").innerText =
          data[0].timeframes.weekly.current;
        document.getElementById("js-play-current-period").innerText =
          data[1].timeframes.weekly.current;
        document.getElementById("js-study-current-period").innerText =
          data[2].timeframes.weekly.current;
        document.getElementById("js-exercise-current-period").innerText =
          data[3].timeframes.weekly.current;
        document.getElementById("js-social-current-period").innerText =
          data[4].timeframes.weekly.current;
        document.getElementById("js-selfcare-current-period").innerText =
          data[5].timeframes.weekly.current;

        // Weekly previous
        document.getElementById("js-work-previous-period").innerText =
          data[0].timeframes.weekly.previous;
        document.getElementById("js-play-previous-period").innerText =
          data[1].timeframes.weekly.previous;
        document.getElementById("js-study-previous-period").innerText =
          data[2].timeframes.weekly.previous;
        document.getElementById("js-exercise-previous-period").innerText =
          data[3].timeframes.weekly.previous;
        document.getElementById("js-social-previous-period").innerText =
          data[4].timeframes.weekly.previous;
        document.getElementById("js-selfcare-previous-period").innerText =
          data[5].timeframes.weekly.previous;

        // Mark the current button as active
        document.getElementById("js-button-weekly").classList.add("active");

        // Remove the active class from the other button
        document.getElementById("js-button-daily").classList.remove("active");
        document.getElementById("js-button-monthly").classList.remove("active");
      } else if (TIME_PERIOD === 2) {
        // Monthly current
        document.getElementById("js-work-current-period").innerText =
          data[0].timeframes.monthly.current;
        document.getElementById("js-play-current-period").innerText =
          data[1].timeframes.monthly.current;
        document.getElementById("js-study-current-period").innerText =
          data[2].timeframes.monthly.current;
        document.getElementById("js-exercise-current-period").innerText =
          data[3].timeframes.monthly.current;
        document.getElementById("js-social-current-period").innerText =
          data[4].timeframes.monthly.current;
        document.getElementById("js-selfcare-current-period").innerText =
          data[5].timeframes.monthly.current;

        // Monthly previous
        document.getElementById("js-work-previous-period").innerText =
          data[0].timeframes.monthly.previous;
        document.getElementById("js-play-previous-period").innerText =
          data[1].timeframes.monthly.previous;
        document.getElementById("js-study-previous-period").innerText =
          data[2].timeframes.monthly.previous;
        document.getElementById("js-exercise-previous-period").innerText =
          data[3].timeframes.monthly.previous;
        document.getElementById("js-social-previous-period").innerText =
          data[4].timeframes.monthly.previous;
        document.getElementById("js-selfcare-previous-period").innerText =
          data[5].timeframes.monthly.previous;

        // Mark the current button as active
        document.getElementById("js-button-monthly").classList.add("active");

        // Remove the active class from the other button
        document.getElementById("js-button-daily").classList.remove("active");
        document.getElementById("js-button-weekly").classList.remove("active");
      }
    });
}
