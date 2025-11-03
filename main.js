// Load default data
getDataBasedOnTimePeriod(0);

const activitiesMap = {
  work: 0,
  play: 1,
  study: 2,
  exercise: 3,
  social: 4,
  selfcare: 5,
};

const timeFrameMap = ["daily", "weekly", "monthly"];

function updateAllActivities(activity, current, previous) {
  document.getElementById(`js-${activity}-current-period`).innerText = current;
  document.getElementById(`js-${activity}-previous-period`).innerText =
    previous;
}

function setActiveTimeFrame(activePeriod) {
  const timePeriodList = document.querySelectorAll("[id*=js-button]");
  timePeriodList.forEach((timePeriod) => {
    timePeriod.classList.remove("active");
  });
  document.getElementById(`js-button-${activePeriod}`).classList.add("active");
}

function getDataBasedOnTimePeriod(TIME_PERIOD) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // Set titles
      Object.keys(activitiesMap).forEach((activity, index) => {
        document.getElementById(`js-${activity}-heading`).innerText =
          data[index].title;
      });
      // Daily timeframe
      if (TIME_PERIOD === 0) {
        Object.keys(activitiesMap).forEach((activity, index) => {
          updateAllActivities(
            activity,
            data[index].timeframes.daily.current,
            data[index].timeframes.daily.previous
          );
        });
        setActiveTimeFrame(timeFrameMap[0]);
      } // Weekly timeframe
      else if (TIME_PERIOD === 1) {
        Object.keys(activitiesMap).forEach((activity, index) => {
          updateAllActivities(
            activity,
            data[index].timeframes.weekly.current,
            data[index].timeframes.weekly.previous
          );
        });
        setActiveTimeFrame(timeFrameMap[1]);
      } // Monthly timeframe
      else if (TIME_PERIOD === 2) {
        Object.keys(activitiesMap).forEach((activity, index) => {
          updateAllActivities(
            activity,
            data[index].timeframes.monthly.current,
            data[index].timeframes.monthly.previous
          );
        });
        setActiveTimeFrame(timeFrameMap[2]);
      }
    })
    .catch((error) => console.error("Error loading data: " + error));
}
