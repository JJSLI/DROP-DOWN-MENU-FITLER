//INSERT 1-2

//Create a new log entry
function createLogEntry(){
    //user input values - retrieve
    var titleInput =
      document.getElementById("title").value;
    var intensityInput=document.getElementById("intensity").value;
    var distanceInput=document.getElementById("distance").value;
    var caloriesInput=document.getElementById("calories").value;
    var ratingInput=document.getElementById("rating-text").value;
  }
  
  //INSERT 14-108
  
  //Event Listener for submit button
  
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click",submitSearch);
  
  //Event listeners for nav links
  const navLinks=document.querySelectorAll("nav ul li a");
  navLinks.forEach((link)=> {link.addEventListener("click",(event) => {
    event.preventDefault();
    const targetSectionId = link.getAttribute("href");
    const targetSection = document.querySelector(targetSectionId);
    
    targetSection.scrollIntoView({
      behavior: "smooth"});
    });
  });
  
  
  //Learned to make the arrows in carousel section 2 functional with slide/ease in-out tool
  
  //setting global variable and initialising the current slide index
  let currentSlide = 0;
  
  function slideCarousel(direction){
    const carousel = document.querySelector(".carousel");
    const carouselItems=carousel.querySelectorAll(".carousel-itemactive");
    const totalSlides = carouselItems.length;
    
  //if statements to control left and right arrows. If left button is pressed, currentSlide would become currentSlide - slide. If right button is pressed, currentSlide would become currentSlide + slide.
  
    
    if (direction ==='left'){
  currentSlide--;
      if (current< 0)
      {currentSlide=totalSlides - 1}
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
  
  slideCarousel('left');
  
  //Update JS code to log info in section 1 and populate popups in section 2 with appropriate values
  function openPopup(index){
    const carouselItems = document.querySelectorAll('.carousel-itemactive');
    const popup = document.getElementById('popup');
  
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
  !event.target.matches(""#view-calories-btn")
  ) {
    intensityPopup.style.display = "none";
  distancePopup.style.display = "none";
  caloriesPopup.style.display = "none";
  }
  });
  
