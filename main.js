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
const timePeriodList = document.querySelectorAll("[id^=js-button]");

document.addEventListener("DOMContentLoaded", () => {
  initializeEventListeners();
  getDataBasedOnTimePeriod(0); // Load default data
});

function initializeEventListeners() {
  timePeriodList.forEach((timePeriod, index) =>
    timePeriod.addEventListener("click", () => getDataBasedOnTimePeriod(index))
  );
}

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
  const currentPeriodElement = document.getElementById(
    `js-${activity}-current-period`
  );
  const previousPeriodValueElement = document.getElementById(
    `js-${activity}-previous-period-value`
  );
  const previousPeriodLabelElement = document.getElementById(
    `js-${activity}-previous-period-label`
  );
  if (currentPeriodElement) {
    currentPeriodElement.textContent = current;
  }
  if (previousPeriodValueElement) {
    previousPeriodValueElement.textContent = previous;
  }
  if (previousPeriodLabelElement) {
    previousPeriodLabelElement.textContent = timeFrameLabel;
  }
}

function setActiveTimeFrame(activePeriod) {
  const timePeriodList = document.querySelectorAll("[id^=js-button]");
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
  try {
    const data = await loadData();
    // Set titles
    activityList.forEach((activity, index) => {
      const headingElement = document.getElementById(`js-${activity}-heading`);
      if (headingElement) {
        headingElement.textContent = data[index].title;
      }
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
  } catch (error) {
    console.error("Failed to update dashboard", error);
    updateErrorOnDashboard(
      "Unable to load time tracking data. Please refresh the page."
    );
  }
}

function updateErrorOnDashboard(MESSAGE) {
  const errorContainer = document.createElement("div");
  errorContainer.textContent = MESSAGE;
  errorContainer.className = "error-container";
  document.body.append(errorContainer);
}
