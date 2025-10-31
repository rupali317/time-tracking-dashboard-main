function LoadDefaultData() {
  getDataBasedOnTimePeriod(0);
}

function getDataBasedOnTimePeriod(TIME_PERIOD) {
  if (TIME_PERIOD === 0) {
    console.log("day has been selected");
  } else if (TIME_PERIOD === 1) {
    console.log("week has been selected");
  } else if (TIME_PERIOD === 2) {
    console.log("month has been selected");
  }
}

LoadDefaultData();
