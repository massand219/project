$(document).ready(function(){
var images = $('#carousel img');

var i = 0;

function showNextLooped() {
	images.eq(i).fadeOut();
	i = (i+1) % images.length;
	console.log("interval" + i);
	images.eq(i).fadeIn();

}

var interval = setInterval(showNextLooped, 2000);

function showPrevious() {
	clearInterval(interval);

	images.eq(i).hide();

	i = (i <= 0) ? images.length - 1 : i - 1 ;
	console.log("prev" + i);
	images.eq(i).show();

	interval = setInterval(showNextLooped, 2000);
	}
$('#prev').click(showPrevious);

function showNext() {
	images.eq(i).hide();
	i++;
	if (i >= images.length) {
		i = 0
	}
	images.eq(i).show();
}
$('#next').click(showNext);


});