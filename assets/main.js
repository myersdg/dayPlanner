//defining variables

currentDate = moment().format(
    'dddd, MMMM Do, YYYY'
);

var time = moment().format('H');

var timeView = moment().format('h')

var mainRow = $(".container");

//THEN the current day is displayed at the top of the calendar

//displaying current date
$(document).ready(function() {
    $("#currentDay").text(currentDate)
});

//THEN I am presented with time blocks for standard business hours

//THEN each time block is color-coded to indicate whether it is in the past, present, or future

//THEN I can enter an event

//THEN the text for that event is saved in local storage

//THEN the saved event persists

