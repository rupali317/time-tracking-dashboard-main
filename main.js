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

function updateAllActivities(activity, current, previous) {
  document.getElementById(`js-${activity}-current-period`).innerText = current;
  document.getElementById(`js-${activity}-previous-period`).innerText =
    previous;
}

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
        // Daily timeframe
        Object.keys(activities).forEach((activity, index) => {
          updateAllActivities(
            activity,
            data[index].timeframes.daily.current,
            data[index].timeframes.daily.previous
          );
        });

        // Mark the current button as active
        document.getElementById("js-button-daily").classList.add("active");

        // Remove the active class from the other button
        document.getElementById("js-button-weekly").classList.remove("active");
        document.getElementById("js-button-monthly").classList.remove("active");
      } else if (TIME_PERIOD === 1) {
        // Weekly timeframe
        Object.keys(activities).forEach((activity, index) => {
          updateAllActivities(
            activity,
            data[index].timeframes.weekly.current,
            data[index].timeframes.weekly.previous
          );
        });

        // Mark the current button as active
        document.getElementById("js-button-weekly").classList.add("active");

        // Remove the active class from the other button
        document.getElementById("js-button-daily").classList.remove("active");
        document.getElementById("js-button-monthly").classList.remove("active");
      } else if (TIME_PERIOD === 2) {
        // Monthly timeframe
        Object.keys(activities).forEach((activity, index) => {
          updateAllActivities(
            activity,
            data[index].timeframes.monthly.current,
            data[index].timeframes.monthly.previous
          );
        });

        // Mark the current button as active
        document.getElementById("js-button-monthly").classList.add("active");

        // Remove the active class from the other button
        document.getElementById("js-button-daily").classList.remove("active");
        document.getElementById("js-button-weekly").classList.remove("active");
      }
    });
}
