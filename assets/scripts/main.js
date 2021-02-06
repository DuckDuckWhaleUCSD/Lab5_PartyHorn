// main.js

audio = document.getElementById('horn-sound');
number = document.getElementById('volume-number');
slider = document.getElementById('volume-slider');
volume_image = document.getElementById('volume-image');

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
