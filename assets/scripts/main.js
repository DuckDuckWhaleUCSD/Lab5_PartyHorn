// main.js

audio = document.getElementById('horn-sound');
number = document.getElementById('volume-number');
slider = document.getElementById('volume-slider');
volume_image = document.getElementById('volume-image');
sound_image = document.getElementById('sound-image');
air_radio = document.getElementById('radio-air-horn');
car_radio = document.getElementById('radio-car-horn');
paty_radio = document.getElementById('radio-party-horn');

// takes a string in the form of 0-100 as integer
function update_volume(value) {
	num = Number(value);
	audio.volume = num / 100;
	number.value = value;
	slider.value = value;
	volume_image.src = "assets/media/icons/volume-level-" + Math.min(Math.ceil(num / 33).toString(), 3) + ".svg";
}

number.addEventListener('input', function() {
	update_volume(number.value);
});

slider.addEventListener('input', function() {
	update_volume(slider.value);
});

air_radio.addEventListener('input', function() {
	audio.src = 'assets/media/audio/air-horn.mp3';
	sound_image.src = 'assets/media/images/air-horn.svg'
});

car_radio.addEventListener('input', function() {
	audio.src = 'assets/media/audio/car-horn.mp3';
	sound_image.src = 'assets/media/images/car.svg'
});

paty_radio.addEventListener('change', function() {
	audio.src = 'assets/media/audio/party-horn.mp3';
	sound_image.src = 'assets/media/images/party-horn.svg'
});
