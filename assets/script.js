// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let today = dayjs();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  let saveBtn = $(".saveBtn");
  saveBtn.on("click", function (e) {
    let eventParent = $(this).parent();
    let timeBlockEventId = eventParent.attr("id");
    let eventLog = eventParent.children("textarea").val();
    console.log(eventParent);
    console.log(eventLog);
    console.log(timeBlockEventId);

    localStorage.setItem(timeBlockEventId, eventLog);
    // console.log(eventLog);
  });

  for (let i = 9; i < 18; i++) {
    const lsItem = localStorage.getItem(i);
    console.log(lsItem, i);
    let timeBockId = i;
    $(`#${timeBockId}`).children("textarea").val(lsItem);

    // if (lsItem != null) {
    //   $("document").on("load", function () {
    //     $(`${timeBockId}`).children("textarea").val(lsItem);
    //   });
    // }
  }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  let currentHour = today.hour();
  console.log(currentHour);
  let timeBlock = $(".time-block");

  // console.log(timeBlock);

  for (let i = 0; i < timeBlock.length; i++) {
    if (timeBlock[i].id > currentHour) {
      timeBlock[i].classList.add("future");
    } else if (timeBlock[i].id == currentHour) {
      timeBlock[i].classList.add("present");
    } else {
      timeBlock[i].classList.add("past");
    }
  }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // let [insert variable from object] = JSON.parse(localStorage.getItem("some thing")) || [];
  // scoreRecording.push(scoreTracker);
  // localStorage.setItem("scoreInput", JSON.stringify(scoreRecording));

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(today.format("h:mma dddd, MMMM D"));
});
