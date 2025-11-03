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
  const timePeriodList = document.querySelectorAll("[id^=js-button]");
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
      const timeFrameValues = Object.values(timeFrameMap);
      // Set titles
      activityList.forEach((activity, index) => {
        document.getElementById(`js-${activity}-heading`).textContent =
          data[index].title;
      });
      activityList.forEach((activity, index) => {
        updateAllActivities(
          activity,
          data[index].timeframes[timeFrameKeys[TIME_PERIOD]].current,
          data[index].timeframes[timeFrameKeys[TIME_PERIOD]].previous,
          timeFrameValues[TIME_PERIOD]
        );
      });
      setActiveTimeFrame(timeFrameKeys[TIME_PERIOD]);
    })
    .catch((error) => {
      console.error("Error loading data: " + error);
      alert("Error loading data on the dashboard");
    });
}
