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

let cachedData = null;
const timeFrameKeys = Object.keys(timeFrameMap);
const timeFrameValues = Object.values(timeFrameMap);

document.addEventListener(
  "DOMContentLoaded",
  () => getDataBasedOnTimePeriod(0) // Load default data
);

const timePeriodList = document.querySelectorAll("[id^=js-button]");
timePeriodList.forEach((timePeriod, index) =>
  timePeriod.addEventListener("click", () => getDataBasedOnTimePeriod(index))
);

async function loadData() {
  if (cachedData) return cachedData;
  try {
    const response = await fetch("data.json");
    cachedData = await response.json();
    return cachedData;
  } catch (error) {
    console.error("Failed to load data", error);
    throw error;
  }
}

function updateAllActivities(activity, current, previous, timeFrameLabel) {
  document.getElementById(`js-${activity}-current-period`).textContent =
    current;
  document.getElementById(`js-${activity}-previous-period-value`).textContent =
    previous;
  document.getElementById(`js-${activity}-previous-period-label`).textContent =
    timeFrameLabel;
}

function setActiveTimeFrame(activePeriod) {
  timePeriodList.forEach((timePeriod) => {
    timePeriod.classList.remove("active");
    timePeriod.ariaPressed = "false";
  });
  const currentActivePeriod = document.getElementById(
    `js-button-${activePeriod}`
  );
  currentActivePeriod.classList.add("active");
  currentActivePeriod.ariaPressed = "true";
}

async function getDataBasedOnTimePeriod(TIME_PERIOD) {
  const data = await loadData();
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
}
