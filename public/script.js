//Create a new log entry
  function createLogEntry(){ 
    //user input values - retrieve variables
    //change all variables to constants
    const titleInput = document.getElementById("title");
    const dateInput=document.getElementById("date");
    const intensityInput=document.getElementById("intensity");
    const distanceInput=document.getElementById("distance");
    const caloriesInput=document.getElementById("calories");
    const ratingInput=document.getElementById("rating-text");
    const selfieInput=document.getElementById("selfie");

    //get selected values from tracking section
      const title = titleInput.value;
      const intensity = intensityInput.value;
      const distance = distanceInput.value;
      const calories = caloriesInput.value;
      const rating = ratingInput.value;

      //create a new log entry with provided data 
    const logEntry=document.createElement("div");
    logEntry.className = 'log-entry';

    const logContent = document.createElement("div");
    logContent.classList.add("log-content");
    logEntry.appendChild(logInfo);

    const logDate=document.createElement("p");
    const currentDate = newDate().toISOString().split("T")[0];
    logDate.textContent = dateInput.value || currentDate;
    logEntry.appendChild(logDate);

    const titleElement=document.createElement("h4");
    titleElement.textContent= title;
    logEntry.appendChild(titleElement);

    const intensityElement=document.createElement("p");
    intensityElement.textContent= "Intensity:" + intensity;
    logEntry.appendChild(intensityElement);
    
  //Create string for Distance name, value, measurement
    const distanceElement=document.createElement("p");
    distanceElement.textContent= "Distance:" + distance + "km";
    logEntry.appendChild(distanceElement);

  //Create string for Calories name, value, measurement name
    const caloriesElement=document.createElement("p");
    caloriesElement.textContent= "Calories:" + calories + "kCal";
    logEntry.appendChild(caloriesElement);

    const ratingElement=document.createElement("p");
    ratingElement.textContent= "Rating:" + rating;
    logEntry.appendChild(ratingElement);

    //Process and Display selfie
    //update as image progress section by creating new img element
    //
   const reader = new FileReader();
   reader.onload = function(event){
    const selfieElement = document.createElement("img");
      selfieElement.src = event.target.result;
      selfieElement.alt = "Selfie";
      logEntry.appendChild(selfieElement)
   };
   reader.readAsDataURL(selfieInput.files[0]);

   const logContainer = document.getElementById("log-container");
   logContainer.appendChild(logEntry);
  
    //removed event listeners for nav links as already done in html
    //CALCULATE averages for the previous week and current week.
    //Clear input fields

    titleInput.value=" ";
    intensityInput.value="select";
    distanceInput.value=" ";
    caloriesInput.value=" ";
    ratingInput.value=" ";
    selfieInput.value=" ";

    //create log message to console indicating whether the run was completed indoors or outdoors when the user presses outdoor run vs indoor run
  const indoorRun = document.getElementById("indoorRun");
  indoorRun.addEventListener("click", function(){
  });

//get popup box element
const intensityBoxContent = document.querySelector(".intensity-box-content");
const distanceBoxContent = document.querySelector(".distance-box-content");
const caloriesBoxContent = document.querySelector(".calories-box-content");

//Add event listener for view tracking button - Intensity: 
const viewTrackingButton = document.getElementById("toggle-intensity");
viewTrackingButton.addEventListener("click", function(){
  //show Intensity overlay popup
  const intensityOverlay = document.getElementById("intensity-overlay");
  intensityOverlay.classList.remove("hidden");
});

//Initially, hide the content inside 'intensity-popup'. when the user clicks on the "toggle intensity" button, it will toggle the visibility of the content by adding/removing hidden class
const toggleIntensityButton=document.getElementById("toggle-intensity");
const intensityOverlay = document.getElementById(".intensity-overlay");

const closeIntensityButton = document.getElementById("close-intensity");
//add event listener to close button inside intensity popup
closeIntensityButton.addEventListener("click", function(){
//hide intesntiy overlay
const intensityOverlay = document.getElementById("intensity-overlay");
intensityOverlay.classList.add("hidden");
});

intensityBoxContent.addEventListener("click", function(){
  popup-intensity.classList('active');
});

function toggleIntensityButton(){
  const overlay = document.getElementById("intensity-overlay");
  overlay.classList.toggle("hidden");
}

function hidePopup(){
  popupIntensity.classlist.remove("active");
}

//call toggleintensityContent() function when the button is clicked
const viewIntensityButton = document.getElementById("toggle-intensity");
viewIntensityButton.addEventListener("click", toggleIntensityContent);

//submit create log button and output from tracking section to log section
document.getElementById("create-log").addEventListener("click",createLogEntry);

document.addEventListener("DOMContentLoaded",function(){
  const viewTrackingButton = document.getElementById("toggle-intensity");
  viewTrackingButton.addEventListener("click",function(){
    //show intensity overlay popup
  const intensityOverlay = document.getElementById("intensity-overlay");
    intensityOverlay.classList.remove("hidden");
  })
});
//submit create log button and output from tracking section to log section
//event handler for create log button
document.getElementById("create-log").addEventListener("click", function(event){
  event.preventDefault();
  //prevent form from being submitted
  createLogEntry();
});