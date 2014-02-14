$(document).foundation({
  orbit: {
      animation: 'fade', // Sets the type of animation used for transitioning between slides, can also be 'fade'
      timer_speed: 10000, // Sets the amount of time in milliseconds before transitioning a slide
      pause_on_hover: true, // Pauses on the current slide while hovering
      resume_on_mouseout: true, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
      animation_speed: 600, // Sets the amount of time in milliseconds the transition between slides will last
      stack_on_small: false,
      navigation_arrows: true,
      slide_number: false,
      slide_number_text: 'of',
      container_class: 'orbit-container',
      stack_on_small_class: 'orbit-stack-on-small',
      next_class: 'orbit-next', // Class name given to the next button
      prev_class: 'orbit-prev', // Class name given to the previous button
      timer_container_class: 'orbit-timer', // Class name given to the timer
      timer_paused_class: 'paused', // Class name given to the paused button
      timer_progress_class: 'orbit-progress', // Class name given to the progress bar
      slides_container_class: 'orbit-slides-container', // Class name given to the 
      bullets_container_class: 'orbit-bullets',
      slide_selector: 'li', // Default is '*' which selects all children under the container
      bullets_active_class: 'active', // Class name given to the active bullet
      slide_number_class: 'orbit-slide-number', // Class name given to the slide number
      caption_class: 'orbit-caption', // Class name given to the caption
      active_slide_class: 'active', // Class name given to the active slide
      orbit_transition_class: 'orbit-transitioning',
      bullets: false, // Does the slider have bullets visible?
      circular: true, // Should the slider go to the first slide after showing the last?
      timer: true, // Does the slider have a timer visible?
      variable_height: false, // Does the slider have variable height content?
      swipe: true
  }
});

var wrapper = $('.wrappper'),docheight = $(document).height();	
wrapper.height = docheight;

 // Accordion animation
$(".accordion").on("click", "dd", function () {
 	$("div.active").stop().slideUp("normal");
 	$(this).find(".content").stop().slideToggle("normal");
 });

// Scroll To Top
$(function () {

	  $(".go-top").hide();
	  $(window).scroll(function () {
	    if ($(this).scrollTop() > 400) {
	      $('.go-top').fadeIn(200);
	    } else {
	      $('.go-top').fadeOut(200);
	    }
	  });
	  $('.go-top').click(function () {
	    $('html,body').animate({
	      scrollTop: 0
	    }, 1000);
	    return false;
  });
}); // end back-to-top

console.log($('#secondary-slider'));

$("#secondary-slider").on("ready.fndtn.orbit", function(event) {
  console.info("ready");
});
$("#secondary-slider").on("before-slide-change.fndtn.orbit", function(event) {
  console.info("before slide change");
});
$("#secondary-slider").on("after-slide-change.fndtn.orbit", function(event, orbit) {
  console.info("after slide change");
  console.info("slide " + orbit.slide_number + " of " + orbit.total_slides);
});
$("#secondary-slider").on("timer-started.fndtn.orbit", function(event, orbit) {
  console.info("timer started");
});
$("#secondary-slider").on("timer-stopped.fndtn.orbit", function(event, orbit) {
  console.info("timer stopped");
});
