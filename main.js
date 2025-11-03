// Load default data
getDataBasedOnTimePeriod(0);

const activityList = [
  "work",
  "play",
  "study",
  "exercise",
  "social",
  "selfcare",
];

const timeFrameMap = {
  daily: "Yesterday",
  weekly: "Last Week",
  monthly: "Last Month",
};

function updateAllActivities(activity, current, previous, timeFrameLabel) {
  document.getElementById(`js-${activity}-current-period`).textContent =
    current;
  document.getElementById(`js-${activity}-previous-period-value`).textContent =
    previous;
  document.getElementById(`js-${activity}-previous-period-label`).textContent =
    timeFrameLabel;
}

function setActiveTimeFrame(activePeriod) {
  const timePeriodList = document.querySelectorAll("[id*=js-button]");
  timePeriodList.forEach((timePeriod) => {
    timePeriod.classList.remove("active");
    timePeriod.ariaPressed = false;
  });
  const currentActivePeriod = document.getElementById(
    `js-button-${activePeriod}`
  );
  currentActivePeriod.classList.add("active");
  currentActivePeriod.ariaPressed = true;
}

function getDataBasedOnTimePeriod(TIME_PERIOD) {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const timeFrameKeys = Object.keys(timeFrameMap);
      // Set titles
      activityList.forEach((activity, index) => {
        document.getElementById(`js-${activity}-heading`).textContent =
          data[index].title;
      });
      // Daily timeframe
      if (TIME_PERIOD === 0) {
        activityList.forEach((activity, index) => {
          updateAllActivities(
            activity,
            data[index].timeframes.daily.current,
            data[index].timeframes.daily.previous,
            timeFrameMap.daily
          );
        });
        setActiveTimeFrame(timeFrameKeys[0]);
      } // Weekly timeframe
      else if (TIME_PERIOD === 1) {
        activityList.forEach((activity, index) => {
          updateAllActivities(
            activity,
            data[index].timeframes.weekly.current,
            data[index].timeframes.weekly.previous,
            timeFrameMap.weekly
          );
        });
        setActiveTimeFrame(timeFrameKeys[1]);
      } // Monthly timeframe
      else if (TIME_PERIOD === 2) {
        activityList.forEach((activity, index) => {
          updateAllActivities(
            activity,
            data[index].timeframes.monthly.current,
            data[index].timeframes.monthly.previous,
            timeFrameMap.monthly
          );
        });
        setActiveTimeFrame(timeFrameKeys[2]);
      }
    })
    .catch((error) => {
      console.error("Error loading data: " + error);
      alert("Error loading data on the dashboard");
    });
}
