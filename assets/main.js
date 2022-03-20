//logging current date format:

const m = moment();
console.log(m.toString())

console.log(m.format("dddd, MMMM Do, YYYY - hh:mm a"))


//displaying current date
$(document).ready(function() {
    $("#currentDay").text( moment().format('dddd, MMMM Do, YYYY') );
});

