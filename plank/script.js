const days = {
    1:  20,  2:   20,   3: 30,  4: 30,   5:  40,  6: -1,
    7:  45,  8:   45,   9: 60, 10: 60,  11:  60, 12: 90,  13: -1,
    14: 90,  15:  90, 16: 120, 17: 120, 18: 150, 19: -1,
    20: 150, 21: 150, 22: 180, 23: 180, 24: 210, 25: 210, 26: -1,
    27: 240, 28: 240, 29: 250, 30: 300
};

const DEFAULT_START_DATE = "2021-04-12";

var startDate = moment(window.location.hash.replace('#', ''));
if (!startDate.isValid()) {
    startDate = moment(DEFAULT_START_DATE);
}

var current_day = moment().diff(startDate, 'days') + 1;

var duration = days[current_day];

if (duration == undefined) {
    $('.container').hide();
    $('#take-a-rest').hide();
    $('#wrong-date').show();
}

$('#current_day').html(current_day);
$('#current_duration').html(duration);
if (duration == -1) {
    $('.container').hide();
    $('#take-a-rest').show();
}