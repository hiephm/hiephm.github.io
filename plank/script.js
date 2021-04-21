const days = {
    1:  20,  2:   20,   3: 30,  4: 30,   5:  40,  6: -1,
    7:  45,  8:   45,   9: 60, 10: 60,  11:  60, 12: 90,  13: -1,
    14: 90,  15:  90, 16: 120, 17: 120, 18: 150, 19: -1,
    20: 150, 21: 150, 22: 180, 23: 180, 24: 210, 25: 210, 26: -1,
    27: 240, 28: 240, 29: 250, 30: 300
};

const AUDIO_PREPARE = 'https://file01.fpt.ai/public/tts/plank/00_prepare.mp3';
const AUDIO_COMPLETE = 'https://file01.fpt.ai/public/tts/plank/completed.mp3';
const AUDIO_COUNTDOWN = {
    10: 'https://file01.fpt.ai/public/tts/plank/01_10s_countdown.mp3',
    30: 'https://file01.fpt.ai/public/tts/plank/02_30s.mp3',
    60: 'https://file01.fpt.ai/public/tts/plank/03_60s.mp3',
    90: 'https://file01.fpt.ai/public/tts/plank/04_90s.mp3',
    120: 'https://file01.fpt.ai/public/tts/plank/05_120s.mp3',
    150: 'https://file01.fpt.ai/public/tts/plank/06_150s.mp3',
    180: 'https://file01.fpt.ai/public/tts/plank/07_180s.mp3',
    210: 'https://file01.fpt.ai/public/tts/plank/08_210s.mp3',
    240: 'https://file01.fpt.ai/public/tts/plank/09_240s.mp3',
    270: 'https://file01.fpt.ai/public/tts/plank/10_270s.mp3',
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