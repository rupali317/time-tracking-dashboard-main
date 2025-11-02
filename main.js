// Load default data
getDataBasedOnTimePeriod(0);

function getDataBasedOnTimePeriod(TIME_PERIOD) {
  // read data from json file
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      // Set titles
      document.getElementById("js-work-heading").innerText = "Work";
      document.getElementById("js-play-heading").innerText = "Play";
      document.getElementById("js-study-heading").innerText = "Study";
      document.getElementById("js-exercise-heading").innerText = "Exercise";
      document.getElementById("js-social-heading").innerText = "Social";
      document.getElementById("js-selfcare-heading").innerText = "Self Care";
      if (TIME_PERIOD === 0) {
        // 2. read data for daily
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
