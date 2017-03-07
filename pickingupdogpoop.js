$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements
	/*function used in several places to show slide info*/
	var showInfo = function () {
		$('.circle,.square').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
	}

	$(".circle, .square").on("click", function (e) {
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
		var circle_clicked = $(this),
			text = circle_clicked.data("text"); //looks for the data-text attribute and stores its value

			var circle_clicked = $(this), // capture the circle that was clicked on into a variable
			text = circle_clicked.data("text"),
			popUp = circle_clicked.closest('.photo-container').find(".info_slides"),
			popUp_text = popUp.find(".info_popIn");
			popUp_text.text(text);
			popUp.addClass("active");

		$("#popIn").text(text);

		$("#slide").addClass("active");
	});

	$(".btn_close").on("click", function (e) {
		e.preventDefault();
		//$("#slide").removeClass("active");
		var close_button_clicked = $(this),
		popUp = close_button_clicked.closest(".info_slides");
		popUp.removeClass("active"); 
	});

});
