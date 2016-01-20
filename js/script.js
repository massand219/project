$(document).ready(function(){
var images = $('#carousel img');

var i = 0;

setInterval(function() {
	images.eq(i).fadeOut();
	i = (i+1) % images.length;
	images.eq(i).fadeIn();

}, 2000);

function showPrevious() {
	images.eq(i).hide();

	i = (i < 0) ? 0 : i - 1 ;
	images.eq(i).show();
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