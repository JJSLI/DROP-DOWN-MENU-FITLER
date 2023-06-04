//Create a new log entry
function createLogEntry(){
    //user input values - retrieve variables
    //change all variables to constants
    const titleInput =
      document.getElementById("title").value;
    const intensityInput=document.getElementById("intensity");
    const distanceInput=document.getElementById("distance");
    const caloriesInput=document.getElementById("calories");
    const ratingInput=document.getElementById("rating-text");
    const selfieInput=document.getElementById('selfie');
    //get selected values from tracking section
    const title=titleInput.value;
    const intensity=intensityInput.value;
    const distance=distanceInput.value;
    const calories=caloriesInput.value;
    const rating=ratingInput.value;
    const date=dateInput.value;


  //Create a new log entry in a box named log-entry with title, intensity, distance, calories, date, rating and photo if chose to upload

  const logEntry=document.createElement('div');
    logEntry.className='log-entry';

    const dateElement=document.createElement('p');
    dateElement.textContent= 'Date:' + date;
    logEntry.appendChild(dateElement);

    document.addEventListener("DOMContentLoaded", function(){
      var dateField = document.getElementById("date");
      new DatePicker(dateField,{
        minDate: new Date(new Date().setMonth(new Date().getMonth() - 1))
      });
    });

    const titleElement=document.createElement('h4');
    titleElement.textContent='title' + title;
    logEntry.appendChild(titleElement);

    const intensityElement=document.createElement('p');
    intensityElement.textContent= 'Intensity:' + intensity;
    logEntry.appendChild(intensityElement);
    
  //Create string for Distance name, value, measurement
    const distanceElement=document.createElement('p');
    distanceElement.textContent= 'Distance:' + distance + 'km';
    logEntry.appendChild(distanceElement);

  //Create string for Calories name, value, measurement name
    const caloriesElement=document.createElement('p');
    caloriesElement.textContent= 'Calories:' + calories + 'kCal';
    logEntry.appendChild(caloriesElement);

    const ratingElement=document.createElement('p');
    ratingElement.textContent= 'Rating:' + rating;
    logEntry.appendChild(ratingElement);

    //Display selfie
    const reader=new FileReader();
    reader.onload=function(event){
      const selfieElement=document.createElement('img');
      selfieElement.src=event.target.result;
      selfieElement.alt='Post-run Selfie!'
//append selfieElement to logEntry using appendChild() method.
    logEntry.appendChild(selfieElement);
    };
  //read data url of file input using 'readAsDataURL() - converting file into data url representation.
    reader.readAsDataURL(selfieInput.files[0]);
//append logEntry element to logContainer element using appendChild() method. Adding logEntry and selfieElement to logContainer
    const logContainer=document.getElementById('log-container');
    logContainer.appendChild(logEntry);

    //removed event listeners for nav links as already done in html
  
    //CALCULATE averages for the previous week and current week.
  
    //Clear input fields

    titleInput.value='';
    dateInput.value='select';
    distanceInput.value='';
    caloriesInput.value='';
    ratingInput.value='';
    selfieInput.value='';


 
  }

  function calculateAverages(){
    //retreive all log entries
    const logEntries=document.getElementsByClassName('log-entry');

    //Initialise variables for the current week / previous week
    let currentWeek={
      intensitySum:0,
      distanceSum:0,
      caloriesSum:0,
      ratingSum:0,
      count:0,
    };
    let previousWeek={
      intensitySum:0,
      distanceSum:0,
      caloriesSum:0,
      ratingSum:0,
      count:0,
    };
  
//retrieve current date
const currentDate = new Date();
//for loop to iterate through each log entry in 'logs' section
for (let i=0; i < logEntries.length;i++){
  const logEntry = logEntries[i];
  const logDate = new Date(logEntry.dataset.logDate);

  //calculate difference between log dates and current date
const diffDays = Math.floor((currentDate - logDate)/(1000*60*60*24));

//Update the corresponding week object based on the difference in days
if (diffDays <=7){
  const intensity = parseInt(logEntry.querySelector('.intensity').textContent.split(' : ')[1]);
  const distance = parseInt(logEntry.querySelector('.distance').textContent.split(' : ')[1]);
  const calories = parseInt(logEntry.querySelector('.calories').textContent.split(' : ')[1]);

  currentWeek.intensitySum+=intensity;
  currentWeek.distanceSum+=distance;
  currentWeek.caloriesSum+=calories;
  currentWeek.count++;

} else if (diffDays>7 && diffDays <=14){
  const intensity = parseInt(logEntry.querySelector('.intensity').textContent.split(' : ')[1]);
  const distance = parseInt(logEntry.querySelector('.distance').textContent.split(' : ')[1]);
  const calories = parseInt(logEntry.querySelector('.calories').textContent.split(' : ')[1]);

  previousWeek.intensitySum+=intensity;
  previousWeek.distanceSum+=distance;
  previousWeek.caloriesSum+=calories;
  previousWeek.count++;
  }
}

//calculate averages for the current week and previous week
const currentWeekIntensityAverage = currentWeek.count > 0 ? currentWeek.intensitySum / currentWeek.count :0;
const currentWeekDistanceAverage = currentWeek.count > 0 ? currentWeek.intensitySum / currentWeek.count :0;
const currentWeekCaloriesAverage = currentWeek.count > 0 ? currentWeek.intensitySum / currentWeek.count :0;

const previousWeekIntensityAverage = currentWeek.count > 0 ? previousWeek.intensitySum / previoustWeek.count :0;
const previousWeekDistanceAverage = currentWeek.count > 0 ? previousWeek.intensitySum / previousWeek.count :0;
const previousWeekCaloriesAverage = currentWeek.count > 0 ? previousWeek.intensitySum / previousWeek.count :0;

//update averages in progression section

document.getElementById('intensity-average').textContext = currentWeekIntensityAverage.toFixed(2);
document.getElementById('intensity-previous').textContext = previousWeekIntensityAverage.toFixed(2);

document.getElementById('distance-average').textContext = currentWeekDistanceAverage.toFixed(2);
document.getElementById('distance-previous').textContext = previousWeekDistanceAverage.toFixed(2);

document.getElementById('calories-average').textContext = currentWeekCaloriesAverage.toFixed(2);
document.getElementById('calories-previous').textContext = previousWeekCaloriesAverage.toFixed(2);
  }

//create event handler

     //create event handler for the create log button
     document.getElementById ('create-log').addEventListener('click',function(event));
    //prevent form submission
     event.preventDefault();
     createLogEntry();

//calculate averages function is called when the page is loaded to displau intiial average values
window.onload = function (){
  calculateAverages();
}
  //setting global variable and initialising the current slide index
  let currentSlide = 0;
  
  function slideCarousel(direction){
    const carousel = document.querySelector(".carousel");
    const carouselItems=carousel.querySelectorAll(".carousel-itemactive");
    const totalSlides = carouselItems.length;
    
  //if statements to control left and right arrows. If left button is pressed, currentSlide would become currentSlide - slide. If right button is pressed, currentSlide would become currentSlide + slide.
    
    if (direction ==='left'){
  currentSlide--;
      if (current< 0){
        currentSlide=totalSlides - 1;
      }
    } else if (direction==='right'){
    currentSlide++;
    if (currentSlide === totalSlides){
      currentSlide = 0;
    }
  }

  //get width of carousel item-active
  const carouselWidth = carouselItems[0].offsetWidth;
  // calculate translateX value to move the carousel horizontally
  const translateX = currentSlide * -carouselWidth;
  // apply translateX transformation to carousel section
  carousel.style.transform = 'translateX(${translateX}px)';
}

  
  viewIntensityBtn.addEventListener("click", () => {intensityPopup.style.display = "block";
  });
