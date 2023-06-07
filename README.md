# jeli2782-tracker
##Jeli2782: Asessment 3 Submission for DECO2017

###RunMate is a single-page tracking web application that enables users to monitor their running performance and habits, as well as reflect on their past runs. I designed and coded this throughout semester 2, covering both front-end and back-end aspects. 

I chose to design my project around Fitness, as running is one of my personal hobbies and something I have always been fascinated in my progress of. My goals for this project was to enable users to have a place to monitor their progress in the intensity, distance and energy burned on their runs. This also would motivate users to continue their journey within health and fitness by viewing their improvements over time. There are also personal elements to the web application, such as personal reflects and post-run pictures the user can upload - all so that the application feels like it is monitering their personal progress.

### Main features: 
**Introduction:** 
    - Introduction into RunMate, what it does.
    - Introduction into the different categories it tracks progress in: Intensity of workout, Distance covered per run, Calories Burned.

**Tracking:**
    - Fill out forms around Intensity of workout, Distance covered per run, Calories Burned.
    - Personalise tracking and use of RunMate by allowing users to create titles, reflect on their run in a journal-style space and upload pictures/selfies of themselves after their run or the space they ran.
**View Run Logs:**
    - Reflect on and monitor progress by clicking on and viewing past runs and the Intensity of workout, Distance covered per run, Calories Burned, reflections and pictures etc. 
    - Swipe through run history in a carousel swipe-through style
**View Progress:**
    - View progress of individual categories: 
        -  Intensity of workout, over time
        -  Distance covered per run, over time
        - Calories Burned, over time


### Installation:

To set up the project locally, follow these steps: 

#### Requirements: 
- Visual Studio Code (or editor of choice)
- have GIT installed on your system
- have node.js and npm installed on your system

#### Steps: 
1. open a terminal 
2. clone the repository using the following command: https://github.com/JJSLI/DROP-DOWN-MENU-FITLER/tree/31cfd52f58c4c45defc94e7ebc3e32fff506e608#jeli2782-tracker
3. Navigate to project directory: 
     cd jeli2782-tracker
4. Install project dependencies by running the following command: 
    npm install
5. Start the dev server by running the following command: 
    npm start
6. Open your web browser of choice and visit: "http://localhost:8888" to access the application.

#### Usage: 
**1. Navigation** 
- Use the navigation bar at the top of the page to fast-forward to different sections on the webpage.
**2. Track my Run**
- In the 'Track my Run' section, fill out the forms below: 
    - Choose whether your run was indoors or outdoors by clicking on the corresponding image button ("Indoor Run" or "Outdoor Run").
    - Provide a title for your run in the 'Name your Run' text input field
    - Choose the intensity, distance and calories of the run from the menu forms. 
    - Share your thoughts on your recent run in the textarea labelled "Enter your thoughts"
    - Upload Selfie: You have an optional button to "Upload a post-run Selfie" and select an image file from your device. Any .jpg image will work, regardless of size. 
**3. Create Log**
- After providing all the necessary form information, click the "Create Log" button to generate a log entry for your run. 
    - The log entry will appear in the "Run Logs" Section below, displaying details such as date, title, intensity, distance, calories and rating. If you uplaoded a selfie, it will also be displayed inside the log entry. 
**4. Progress Tracking**
- In the 'Track my Progress' section, you can track your progress in terms of intensity, distance and calories. 
    - Click on corresponding "view intensity", "view distance" or "view calories" button to view the data for the previous week and current week in a popup window.

#### Implementation: 

Here are the significant changes I have made throughout the development process: 

- Removed popups as they are uncessescary for displaying and updating popup content
- Update JS code to log info in section 1 and populate popups in section 2 with appropriate values
- decided not to use averages of previous week and current week as I received  feedback that it would be too advanced as a chart representation, and confusing for users to interpert: 
`    let currentWeek={
      intensitySum:0,
      distanceSum:0,
      caloriesSum:0,
      count:0,
    };
    let previousWeek={
      intensitySum:0,
      distanceSum:0,
      caloriesSum:0,
      count:0,
    };' 

#### Iterations and Changes:

My initial code was done on Replit, as I found it easier to edit my code and see my changes as I went. Here is the link to the replit so you can view my past changes before I moved to VSCode: https://replit.com/@Jsli/DROP-DOWN-MENU-FITLER

Changes were made on DROP-DOWN-MENU-FILTER file in replit and merged into jeli-tracker on vscode using: clone the "jeli-tracker" repository to your local machine 

Throughout the Semester I received plenty of helfpul feedback from my tutor regarding my mockup and website that I would have to code: 
Feedback and changes to implement:

- No location API to search run needed
- Remove Search button → Record my run progress.
- User is able to enter tracking information from a run they have just completed.
- User should be able to view from a favourites folder their past runs
- MORE TRACKING, LESS SEARCHING - the mockup did not follow the assessment criteria of being a tracking application.
- Suggestion: Run history should be dated.

#### Functions and Learnings: 

- Learned to use the 'FileReader' object to read contents of a file selected by the user and display it as an image in the log entry
`const reader = new FileReader();
   reader.onload = function(event){
    const selfieElement = document.createElement("img");
      selfieElement.src = event.target.result;
      selfieElement.alt = "Selfie";
      logEntry.appendChild(selfieElement)
   };
   reader.readAsDataURL(selfieInput.files[0]);

   const logContainer = document.getElementById("log-container");
   logContainer.appendChild(logEntry);`

- Learned to calculate the translateX value based on the carousel item width and current slide index. 
- learned to apply css transformation using javascript to move elements across the page horizontally
const carouselWidth = carouselItems[0].offsetWidth;
// calculate translateX value to move the carousel horizontally
const translateX = currentSlide * -carouselWidth;
// apply translateX transformation to carousel section
carouselSection2.style.transform = 'translateX(${translateX}px)';`
 
 - learned to create buttons to slide the carousel in my logs section in conjunction with flex-nowrap to avoid spilling over the page: 
 `slideCarouselSection2(direction)'

 - learned to use event handlers to call for functions when a button is clicked. this was especially useful for updating logs from filled forms in the tracking section to the logs and progress sections. 

 `//Add event listener for view tracking button - Intensity: 
const viewTrackingButton = document.getElementById("toggle-intensity");
viewTrackingButton.addEventListener("click", function(){
  //show Intensity overlay popup
  const intensityOverlay = document.getElementById("intensity-overlay");
  intensityOverlay.classList.remove("hidden");`


Using the Date Picker:
- Learned to use a date picker library and how to include corresponding css and javascript files to html for styles and functionality.
- html was modified so that users could not only see today's date, but also have the ability to edit it to create a log entry from a previous date.
- Javascript initialisation code inserted to initialise the date picker library and attach it to the date input field. 


- modify the code to use the current date as the log date. 
- learned to create a new 'date' object representing the current date and time - converted to a string format
- learned to use the logical OR (||) operator to check if dateInput.value has a value.

' const logDate=document.createElement("p");
    const currentDate = newDate().toISOString().split("T")[0];
    logDate.textContent = dateInput.value || currentDate;
    logEntry.appendChild(logDate);'

  #### References

**Indoor Run:**

Image by <a href="[https://www.freepik.com/free-vector/social-distance-gym-new-normal_8968631.htm#query=indoor vs outdoor running vector&position=39&from_view=search&track=ais](https://www.freepik.com/free-vector/social-distance-gym-new-normal_8968631.htm#query=indoor%20vs%20outdoor%20running%20vector&position=39&from_view=search&track=ais)">Freepik</a>

**Outdoor Run:** 

Image by <a href="[https://www.freepik.com/free-vector/runners-with-medical-masks_8356217.htm#query=indoor vs outdoor running vector&position=1&from_view=search&track=ais](https://www.freepik.com/free-vector/runners-with-medical-masks_8356217.htm#query=indoor%20vs%20outdoor%20running%20vector&position=1&from_view=search&track=ais)">Freepik</a>