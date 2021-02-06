"use strict";

let audio = document.getElementById('horn-sound');
let number = document.getElementById('volume-number');
let slider = document.getElementById('volume-slider');
let volume_image = document.getElementById('volume-image');
let sound_image = document.getElementById('sound-image');
let air_radio = document.getElementById('radio-air-horn');
let car_radio = document.getElementById('radio-car-horn');
let paty_radio = document.getElementById('radio-party-horn');
let honk_button = document.getElementById('honk-btn');

// takes a string in the form of 0-100 as integer
function update_volume(value) {
	let num = Number(value);
	audio.volume = num / 100;
	number.value = value;
	slider.value = value;
	volume_image.src = "assets/media/icons/volume-level-" + Math.min(Math.ceil(num / 33).toString(), 3) + ".svg";
	honk_button.disabled = num === 0;
}

number.addEventListener('input', function(_event) {
	update_volume(number.value);
});

slider.addEventListener('input', function(_event) {
	update_volume(slider.value);
});

air_radio.addEventListener('input', function(_event) {
	audio.src = 'assets/media/audio/air-horn.mp3';
	sound_image.src = 'assets/media/images/air-horn.svg'
});

car_radio.addEventListener('input', function(_event) {
	audio.src = 'assets/media/audio/car-horn.mp3';
	sound_image.src = 'assets/media/images/car.svg'
});

paty_radio.addEventListener('change', function(_event) {
	audio.src = 'assets/media/audio/party-horn.mp3';
	sound_image.src = 'assets/media/images/party-horn.svg'
});

honk_button.addEventListener('click', function(event) {
	event.preventDefault();
	audio.play();
})
