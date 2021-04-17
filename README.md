# Pomdoro Web App
## Overview

What's a Pomodoro? Using the Pomodoro method, you break your workday into 25-minute chunks separated by five-minute breaks. These intervals are referred to as Pomodoro

This is how our app will look like:

![pomodoro-image](https://imgur.com/kEV9rTZ.png)


### Demo
You can test the application from [here.](https://pomodoropomo.netlify.app/)


### Libraries
In our first part, we’ll be looking into the layout of our web application, we will use the help of a library called Bootstrap.
Bootstrap can help you create web apps and websites very quickly as you will only have to call classes on an HTML file instead of worrying about styling in your CSS file. 
Other libraries we will be using are Font Awesome and dateFNS that will help with our icons and buttons and with our time calculations.

To start using the libraries just add this block of code inside your HTML file's \<head> tag to get started with bootstrap and Font Awesome.

```HTML
<!-- Bootstrap-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

<!-- Font Awesome -->
<script src="https://kit.fontawesome.com/996973c893.js"></script>
```

And for dateFNS add this CDN link to the bottom of your HTML code, right above the \<body> tag
```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.min.js"></script>
```


## Front-End
### Layout
To understand our layout, first, we have the main container \<div>

```HTML
<div class="container">
...
</div>
```

Then we have the 6 divs inside the main container
* Heading
* Main Timer
* Finished Message
* Inputs
* Buttons
* Sessions List

![layout-image](https://imgur.com/mPy5lQa.png)

For the heading, we will simply use the heading tag \<h3>

```HTML
<!-- Heading -->
<h1 class="text-center my-5 heading">Pomodoro</h1>
```

For our main timer, we will be using bootstrap's grid system row and col to align our timer inside our timer container. There's nothing written inside it because we will be adding the initial values of the timer via javascript.

```HTML
      <!-- Main Timer -->
      <div class="container timer">
        <div class="row">
          <div class="col-5">
            <h4 id="minutes"></h4>
          </div>
          <div class="col-2">
            <h4>:</h4>
          </div>
          <div class="col-5">
            <h4 id="seconds"></h4>
          </div>
        </div>
      </div>
```

Whenever a session finishes we want the user to be notified, here a message will pop up when a session ends and it's time for a break or when a break session ends. This is also empty because we will be using Javascript to add the message.

```HTML
      <!-- Finished Message -->
      <div class="my-5">
        <h3 id="done" class="text-center"></h3>
      </div>
```

Now for the inputs, we have three inputs, task name, work time, break time, and aligning them we use bootstrap’s flexbox system,



Input tags are used for user input and are given unique IDs in their attributes

```HTML
      <!-- User Input Timer -->
      <div class="inputs container my-5 d-block justify-content-center">
        <div class="work-name d-flex justify-content-center my-4">

          <div class="d-block justify-content-center text-center">
            <h5>Task Name</h5>
            <input id ="taskname" type="text" name=taskname placeholder = "Enter task name">
          </div>
          
          
        </div>
        <div class="timers d-flex justify-content-center">
          <div class = "d-block justify-content-center text-center"> 
            <h5>Work Duration</h3>
            <input id= "worktime" type="text" name="worktime" placeholder="Enter Work Time" value=25>
          </div>
          
          <div class="d-block justify-content-center text-center">
            <h5>Break Duration</h3>
            <input id= "breaktime" type="text" name="breaktime" placeholder="Enter Break Time" value=5>
          </div>
          
        </div>

      </div>
```


Now we have four buttons, however, initially, we will have only two buttons visible.
* Start Button
* Pause Button
* Resume Button
* Reset Button

Pause and resume buttons are hidden initially using bootstraps ‘d-none’ class.
Also, we're using the \<i> tag for the icons and calling 'fas fa-play fa-2x' class using the Font Awesome library.

```HTML
      <!-- Buttons-->
      <div class="conatiner d-flex justify-content-center my-5">
        <button id ="start-button" class="btn">
          <i class="start-button fas fa-play fa-2x"></i>
        </button>
        <button id ="pause-button" class="btn d-none">
          <i class="pause-button fas fa-pause fa-2x"></i>
        </button>
        <button id ="resume-button" class="btn d-none">
          <i class="resume-button fas fa-play-circle fa-2x"></i>
        </button>
        <button id ="reset-button" class="btn" >
          <i class="fas fa-redo-alt fa-2x"></i>
        </button>
        
      </div>
```

Lastly, we have our sessions list that we will add once a user clicks the reset button and stores the task name and the time it took for it to be completed.

![sessions-image](https://imgur.com/L22Mpn9.png)
```html
      <!-- Sessions List -->
      <div id = "sessions" class="my-5">
        <h2 class= "text-center">Sessions List</h2>
        <ul id = "sessions-list" class="list-group todos mx-auto">
          <!-- list of sessions will be appended here -->
        </ul>
      </div>
```

Our layout is done and it will look like this in HTML, 
```HTML
    <div class="container">




      <!-- Heading -->
      <h1 class="text-center my-5 heading">Pomodoro</h1>

      <!-- Main Timer -->
      <div class="container timer">
        <div class="row">
          <div class="col-5">
            <h4 id="minutes"></h4>
          </div>
          <div class="col-2">
            <h4>:</h4>
          </div>
          <div class="col-5">
            <h4 id="seconds"></h4>
          </div>
        </div>
      </div>

      <!-- Finished Message -->
      <div class="my-5">
        <h3 id="done" class="text-center"></h3>
      </div>

      <!-- User Input Timer -->
      <div class="inputs container my-5 d-block justify-content-center">
        <div class="work-name d-flex justify-content-center my-4">

          <div class="d-block justify-content-center text-center">
            <h5>Task Name</h5>
            <input id ="taskname" type="text" name=taskname placeholder = "Enter task name">
          </div>
          
          
        </div>
        <div class="timers d-flex justify-content-center">
          <div class = "d-block justify-content-center text-center"> 
            <h5>Work Duration</h3>
            <input id= "worktime" type="text" name="worktime" placeholder="Enter Work Time" value=25>
          </div>
          
          <div class="d-block justify-content-center text-center">
            <h5>Break Duration</h3>
            <input id= "breaktime" type="text" name="breaktime" placeholder="Enter Break Time" value=5>
          </div>
          
        </div>

      </div>

      <!-- Buttons-->
      <div class="conatiner d-flex justify-content-center my-5">
        <button id ="start-button" class="btn">
          <i class="start-button fas fa-play fa-2x"></i>
        </button>
        <button id ="pause-button" class="btn d-none">
          <i class="pause-button fas fa-pause fa-2x"></i>
        </button>
        <button id ="resume-button" class="btn d-none">
          <i class="resume-button fas fa-play-circle fa-2x"></i>
        </button>
        <button id ="reset-button" class="btn" >
          <i class="fas fa-redo-alt fa-2x"></i>
        </button>
        
      </div>

      <!-- Sessions List -->
      <div id = "sessions" class="my-5">
        <h2 class= "text-center">Sessions List</h2>
        <ul id = "sessions-list" class="list-group todos mx-auto">
          <!-- list of sessions will be appended here -->
        </ul>
      </div>



    </div>

```


With some tweaks in CSS using these styling
```CSS

body {
  background: grey;
  
}

.timer {

  display: flex;
  justify-content: center;
  align-items: center;
  
  text-align: center;

  border: 20px solid white;
  border-radius: 10rem;

  width: 20rem;
  height: 20rem;
}

.timer h4{
  font-size: 4rem;
}

.row {
  width: 100%;
}


.show_message {
  display: block;

}



```

We have our final layout and will look like this.

![layout-image](https://imgur.com/LlzT63T.png)



## Back-End
Our front-end part of the application is done, now for the second part we will be using Javascript for the back-end. Here is where you start manipulating the DOM.

Connect your javascript file using this block of code right above the <body> tag.
```Javascript
<script src="main.js"></script>
```


A good practice for any developer is to organize your code, I’ve already organized my code into functions and event listeners.

![organized-image](https://imgur.com/aHif7yv.png)

Let's get Started

Our very first function is the *setInitialTime()* function that basically sets the timer to 0:00 on load.
To do this we will use the most common method for DOM manipulation that is query selection, it can be done using:
* *document.querySelector*
* *document.getElementById*
* *document.getElementsByClassName*
* *document.querySelectorAll*


Over here we’ll use *document.getElementById* and call the elements ID and the *innerHTML* property that returns the HTML content of the element. 

```JAVASCSRIPT
document.getElementByID(“minutes”).innerHTML
```
We will simply assign our minutes and seconds element to our already declared sessions_seconds and session_minutes variable.

```Javascript
let session_seconds = "00";
let session_minutes = 00;

function setInitialTime() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}
```

We need this function to execute every time the page loads, so the best place for this is in our \<body> tag and use onload event on its attribute.

```HTML
<body onload="setInitialTime()">
```


Now every time our page loads the timer will be 0:00 like this
![timer-image](https://imgur.com/woeqfPX.png)

Our second function is the main function for our timer which is the *start_work()* function

To get started firstly we need to gather all our inputs using *document.getElementById* and *.value* which returns the content inside the input box. And then simply assign them to our timer again using *getElementById* and *.innerHTML*

```Javascript
function start_work() {


  taskName = document.getElementById("taskname").value;
  const workTime = document.getElementById('worktime').value;
  const breakTime = document.getElementById('breaktime').value;

  session_minutes = workTime-1;
  session_seconds = 59;
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
```


Now to execute our timer we will be using a JS method called *setInterval()*
The *setInterval()* method calls a function or evaluates an expression at specified intervals (in milliseconds). The *setInterval()* method will continue calling the function until *clearInterval()* is called,

```Javascript
  // Intervals for minutes and seconds
  minutes_interval = setInterval(minutesTimer, 60000);
  seconds_interval = setInterval(secondsTimer, 1000);
```


We’ve put them in a variable because we need to stop this interval using *clearInterval()* which we will define what interval to stop and where.

Now to execute these *setInterval()* methods we need two functions
One function will decrement our minutes in the timer, meaning every 60 seconds it will be decreased by one, 
The second function will decrement our seconds in the timer, meaning every 1 second it will be decreased by one, however, upon reaching 0 it will reassign session_seconds to 60 again and continue the interval from 60 to 0. This specific process will repeat until the minutes timer also hits 0.

Hence we will be using a nested if condition.

Our first function for minutes,
```Javascript
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }
```

The second function for seconds,

```Javascript
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

    // nested if condition here

  }
```

Once both minutes and seconds timer hits zero we will call clearInterval to stop the timer. And pop up a message similarly using getElementById and .innerHTML and start our next timer which is the break timer.

```Javascript
    if (session_seconds <= 0) {

      if (session_minutes <= 0) {
        // stop all intervals when both seconds and minutes are 0
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // pop up message to take break
        document.getElementById("done").innerHTML = "Session Done, Take a Break!";
        document.getElementById("done").classList.add("show_message");

        
        //start break timer
        start_break(breakTime);
      }

      // reset seconds to 60 whenever it reaches 0
      session_seconds = 60;
    }
```

Now on to our third main function is the break timer which executes once the work timer hits zero. Since it has the same working we will be copy-pasting the *start_work()* function and making a few changes like removing the query selection of the inputs and popping a different message and adding the *start_work()* function upon timer hitting zero. Adding the *start_work()* upon timer hitting zero will allow both functions to execute each other in an infinite loop until the reset button is pressed.

Both our functions will look similar and will look like this.

```Javascript
function start_work() {


  taskName = document.getElementById("taskname").value;
  const workTime = document.getElementById('worktime').value;
  const breakTime = document.getElementById('breaktime').value;

  session_minutes = workTime-1;
  session_seconds = 59;
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  // Intervals for minutes and seconds
  minutes_interval = setInterval(minutesTimer, 60000);
  seconds_interval = setInterval(secondsTimer, 1000);

  // functions for the intervals
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }

  
  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

 
    if (session_seconds <= 0) {

      if (session_minutes <= 0) {
        // stop all intervals when both seconds and minutes are 0
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        // pop up message to take break
        document.getElementById("done").innerHTML = "Session Done, Take a Break!";
        document.getElementById("done").classList.add("show_message");

        
        //start break timer
        start_break(breakTime);
      }

      // reset seconds to 60 whenever it reaches 0
      session_seconds = 60;
    }
  }
}

function start_break(breakTime) {
  

  
  session_minutes = breakTime-1;
  session_seconds = 59;

  
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

  
  minutes_interval = setInterval(minutesTimer, 60000);
  seconds_interval = setInterval(secondsTimer, 1000);

 
  function minutesTimer() {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;
  }


  function secondsTimer() {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;

  
    if (session_seconds <= 0) {
      if (session_minutes <= 0) {
        
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        
        document.getElementById("done").innerHTML = "Break Finished! Continue Working now!";
        document.getElementById("done").classList.add("show_message");

        // start work timer
        start_work()
      }

      // reset seconds to 60 whenever it reaches 0
      session_seconds = 60;
    }
  }
}

```

Our last three functions
The reset function stops the intervals and assigns the timer to zero, this will be executed upon hitting the reset button.

```Javascript
function reset(){
  //stopping all intervals
  clearInterval(minutes_interval)
  clearInterval(seconds_interval)

  // setting the initial values of the clock (same as setInitialTime())
  let session_seconds = "00";
  let session_minutes = 00;
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;

}

```

*startTime* and *stopTime* returns the current date and time using the Date object. We will execute this upon hitting the start button and reset button respectively.

```Javascript
//start the counter for total time
function startTime(){

  const dateNow = new Date();
  return dateNow
}

//stop the counter total time
function stopTime(){
  const dateNow = new Date()
  return dateNow

}

```


Now we can move to our button executions, 

When a user clicks on a button we want some action to happen. For this, we will be using a method called *addEventListener()*
This method executes a callback function upon a specific event of that element.
Over here our element is the button, our event is ‘click’ and our callback function will be shown later.
This is a basic template of how an event listener is used on a button
```Javascript
document.getElementById("myBtn").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});
```

We will be using four event listeners as we have four buttons and perform different actions upon the event ‘click’
![events-image](https://imgur.com/ee80veY.png)

The first event listener is the for the start button, it executes our main *start_work()*  function which also executes the *start_break()* function and is repeated until the reset button is pressed.

Now using the property *.classlist* we can add and remove classes from an element, here we will be adding and removing the d-none class that will make our buttons appear and reappear, once the start button is pressed, the pause button appears and the start button disappears.
```Javascript
// On click of the play button, execute the start_work() timer
document.getElementById("start-button").addEventListener("click", () => {
  start_work();
  start = startTime()
  
  //remove the play button, add pause button
  document.getElementById("start-button").classList.add("d-none")
  document.getElementById("pause-button").classList.remove("d-none")
});

```

The second event listener is for the pause button which pauses our timer and disappears the pause button and pops up the resume button. To pause the timer we’re using *clearIntervals*

```Javascript
// Pause the timer
document.getElementById("pause-button").addEventListener("click", () =>{
  clearInterval(minutes_interval)
  clearInterval(seconds_interval)

  //remove pause button, reappear resume button
  document.getElementById("pause-button").classList.add("d-none")
  document.getElementById("resume-button").classList.remove("d-none")
  
} )
```

Our third event listener resumes the timer using the same method used in *start_work()* and *start_break()* functions and reappears the pause button and similarly removes the resume and start button.

```Javascript
// When timer is paused, resume the timer
document.getElementById("resume-button").addEventListener("click", () => {
  
  minutes_interval = setInterval(()=> {
    session_minutes = session_minutes - 1;
    document.getElementById("minutes").innerHTML = session_minutes;}, 
    60000);

  seconds_interval = setInterval(() => {
    session_seconds = session_seconds - 1;
    document.getElementById("seconds").innerHTML = session_seconds;
  }, 1000);


  //reappear pause button, remove resume and start button 
  document.getElementById("pause-button").classList.remove("d-none")
  document.getElementById("resume-button").classList.add("d-none")
  document.getElementById("start-button").classList.add("d-none")
})
```

Now for our last part of our web app, we’re implementing the reset event listener.

Upon reset button click, we’re calling the *reset()* function, calling the current date and time upon the reset button’s click, and then using the *datefns* library we’re calling its *distanceIntoWords()* method that returns the difference between two date/time in words. E.g *in two minutes*, *in 30 minutes.*

```Javascript
document.getElementById("reset-button").addEventListener("click", () => {
  reset();
  stopp = stopTime()
  totalTime = dateFns.distanceInWords(start, stopp, {addSuffix: true})
```

Now we want to append this total time into our session list so we use the querySelector method to call the unordered list \<ul> from our HTML and append it inside it using template literal (\` ... `)

```Javascript
  const completedSessionList = document.querySelector('#sessions-list')
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">${taskName} was completed ${totalTime}</li>`;

  completedSessionList.innerHTML += html;
```

Now for the remaining part, we’re removing the pop-up message and for the buttons, we’re making the play button reappear, remove the pause button, and remove the resume button. And that will completely reset our timer.

```Javascript
  //remove the 'take break, continue work' messages
  document.getElementById("done").innerHTML = "";
  document.getElementById("done").classList.remove("show_message");

  // make the play button reappear, remove pause button, remove resume button
  document.getElementById("start-button").classList.remove("d-none")
  document.getElementById("pause-button").classList.add("d-none")
  document.getElementById("resume-button").classList.add("d-none")
```



---
### Source Code

You can download the full source code from [here.](https://codeload.github.com/asadnmalik/pomodoro/zip/refs/heads/main)

---
## Copyright, Author
*Copyright 2021*, Asad Naveed Malik, *All rights reserved.*
