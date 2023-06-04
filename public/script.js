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

    const titleElement=document.create=Element('h4');
    titleElement.textContent='title' + title;
    logEntry.appendChild(titleElement);
    
  //Create string for Distance name, value, measurement
    const distanceElement=document.createElement('p');
    intensityElement.textContent= 'Distance:' + intensity + 'km';
    logEntry.appendChild(distanceElement);

  //Create string for Calories name, value, measurement name
    const caloriesElement=document.createElement('p');
    intensityElement.textContent= 'Calories:' + calories + 'kCal';
    logEntry.appendChild(intensityElement);

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
      ratingSum:0;
    };
    let previousWeek={
      intensitySum:0,
      distanceSum:0,
      caloriesSum:0,
      ratingSum:0;
    }
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

  slideCarousel('left');
  //Removed popups as they are uncessescary for displaying and updating popup content
  //Update JS code to log info in section 1 and populate popups in section 2 with appropriate values
  function openPopup(index){
    const carouselItems = document.querySelectorAll('.carousel-itemactive');

  
  //log output from section 1 into console
  const item = carouselItems[index-1];
    
  console.log('Popup Title:', item.querySelector('h2').textContext);
  console.log('Intensity:',item.dataset.intensity);
  console.log('Distance:',item.dataset.distance);
  console.log('Calories:',item.dataset.calories);
  console.log('Rating:',item.dataset.rating);
  }
  
  //update popup content in section 2
  
  const popupTitle = document.getElementById('popup-title');
  const popupSubtitle = document.getElementById('popup-subtitle');
  const popupIntensity = document.getElementById('popup-intensity');
  const popupDistance = document.getElementById('popup-distance');
  const popupCalories = document.getElementById('popup-calories');
  const popupRating = document.getElementById('popup-rating');
  
  popupTitle.textContent = item.querySelector('h2').textContent;
  popupSubtitle.textContent = 'Subtitle with Date = ${getCurrentDate()}';
  popupIntensity.textContent = item.dataset.intensity;
  popupDistance.textContent = item.dataset.distance;
  popupCalories.textContent = item.dataset.calories;
  popupRating.textContent = item.dataset.rating;
  
  //display popup
  popup.style.display="block";
  
  //close popup
  function closePopup(){
    const popup = document.getElementById('popup');
    popup.style.display = "none";
  }
  
  //retreive current date in format YYYY-MM-DD
  function getCurrentDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month=(date.getMonth()+1).toString().padStart(2,'0');
    const day = date.getDate().toString().padStart(2,'0');
    return '${year}-${month}-${day}';
  }
  
  
  //Buttons and Popups - References
  
  const viewIntensityBtn=document.getElementById("view-intensity-btn");
  const viewDistanceBtn = document.getElementById("view-distance-btn");
  const viewCaloriesBtn = document.getElementById("view-calories-btn");
  
  const intensityPopup = document.getElementById("intensity-popup");
  const distancePopup = document.getElementById("distance-popup")
  const caloriesPopup = document.getElementById("calories-popup")
  
  viewIntensityBtn.addEventListener("click", () => {intensityPopup.style.display = "block";
  });
  
  viewDistanceBtn.addEventListener("click", () => {distancePopup.style.display = "block";
  });
  
  viewCaloriesBtn.addEventListener("click", () => {caloriesPopup.style.display = "block";
  });
  
  //Popups closed when clicked outside of content
  
  document.addEventListener("click",(event) => {
  if (
    !event.target.matches("#view-intensity-btn")&&
  !event.target.matches("#view-distance-btn")&&
  !event.target.matches("#view-calories-btn")
  ) {
    intensityPopup.style.display = "none";
  distancePopup.style.display = "none";
  caloriesPopup.style.display = "none";
  }

   //create event handler for the create log button
   document.getElementById ('create-log').addEventListener('click',function(event){
    createLogEntry();
  });

  });
  
