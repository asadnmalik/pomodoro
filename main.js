let session_seconds = "00";
let session_minutes = 00;




function setInitialTime() {
  document.getElementById("minutes").innerHTML = session_minutes;
  document.getElementById("seconds").innerHTML = session_seconds;
}


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

// On click of the play button, execute the start_work() timer
document.getElementById("start-button").addEventListener("click", () => {
  start_work();
  start = startTime()
  
  //remove the play button
  document.getElementById("start-button").classList.add("d-none")
});


//reset everything on button and stop the total timer counter and append the work name in session list including the total time. 
document.getElementById("reset-button").addEventListener("click", () => {
  reset();
  stopp = stopTime()
  totalTime = dateFns.distanceInWords(start, stopp, {addSuffix: true})

  const completedSessionList = document.querySelector('#sessions-list')
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">${taskName} was completed ${totalTime}</li>`;

  completedSessionList.innerHTML += html;

  //remove the 'take break, continue work' messages
  document.getElementById("done").innerHTML = "";
  document.getElementById("done").classList.remove("show_message");

  // make the play button reappear
  document.getElementById("start-button").classList.remove("d-none")



  
});