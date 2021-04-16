const gSheetWebURL =
	"https://docs.google.com/spreadsheets/d/e/2PACX-1vTd_GjGcSuXeJZpy0v-4b6Ki8dp6rj5X8Z2bjot0U7sNsbgm1QNFqJb3HMZU44CeR3fwIeCZcP0634M/pubhtml?gid=0&single=true";

const gSheetJsonURL =
	"https://spreadsheets.google.com/feeds/list/12QSq3K8sjpmME3fQOrl1ET2wad5jJ-gZFdQ8707MDew/1/public/full?alt=json";

// const $gSheet = $.getJSON(url[gSheetJsonURL])

$.ajax(gSheetJsonURL).then((data) => {
	// console.log(data)
	// Map over the data, generate a simpler dataset
	const projects = data.feed.entry.map((item) => {
		return {
			description: item.gsx$description.$t,
			giturl: item.gsx$giturl.$t,
			image: item.gsx$image.$t,
			liveurl: item.gsx$liveurl.$t,
			project: item.gsx$project.$t,
		};
	});
	// console.log(projects)

	////////////////////////////////////////
	// Code to render the project
	////////////////////////////////////////

	const $slider = $("#projects .slider");

	projects.forEach((project, index) => {
		// console.log(`project ${index}`,project.description, project.image, project.liveURL, project.project)
		// const $projectCard = $("<div>");
		// $projectCard.text(project.description);
		// console.log($projectCard)
		// TODO MAKE THIS ACCESSIBLE
		const $projectCard = $(`
			<div class="project-card">
				<div class="project-thumbnail" style="background-image: url(${project.image})">
					<aside>
						<h2>${project.project}</h2>
						<p class="project-text">${project.description}</p>
					</aside>
				</div>
				<div class="button-group">
					<form action="${project.liveurl}">
						<button>view</button>
					</form>
					<form action="${project.giturl}">
						<button type="submit">git</button>
					</form>
				</div>
			</div>
			`);
		$slider.append($projectCard);
	});
	// Scrolls slider window to computed center
	centerSlider();
	getDeviceVH();

	/////////////////////////////////////////////////////////////////////
	// Infinite Scroll
	/////////////////////////////////////////////////////////////////////

	//	setup an event listener that responds to horizontal scroll events in the slider by appending or prepending
	//	project cards for an infinite-scroll behavior

	// GET slider container
	//const $sliderDiv = $("#projects div.slider")
	// 	EVENT - scroll release

	// 		GET scroll position
	// 		IF scroll position is left of center
	// 			GRAB last card
	// 			PREPEND slider -> last card
	// 		ELSE IF scroll position is right of center
	// 			GRAB first card
	// 			APPEND slider -> first card
	// 	END EVENT
	let lastScrollLeft = 0;
	$slider.scroll(function (event) {
		var sl = $(this).scrollLeft();
		if (sl > lastScrollLeft) {
			console.log("left scroll");
		} else {
			console.log("right scroll");
		}
		lastScrollLeft = sl;
	});

	// TODO: check for potential issues
	// 		below code throws LOTS of events, and with scroll snap the last event quite possibly will be opposite
	// 		of the user's intentional scroll movement
	//		Maybe just use absolute scroll position relative to the center.
	var lastScrollTop = 0;
	$(window).scroll(function (event) {
		var st = $(this).scrollTop();
		if (st > lastScrollTop) {
			// downscroll code
		} else {
			// upscroll code
		}
		lastScrollTop = st;
	});

	//////////////////////////////////////////////////////////////
	//  Scroll buttons
	//////////////////////////////////////////////////////////////

	//  Listen for slider button click event
	const $sliderButtons = $(".slider-button");
	$sliderButtons.on("click", (e) => {
		const scrollUnit = $(".project-card").eq(0)[0].scrollWidth;
		if ($(e.target).hasClass("button-r")) {
			console.log("right button");
			$(".slider")[0].scrollLeft += scrollUnit;
		} else if ($(e.target).hasClass("button-l")) {
			console.log("left button");
			$(".slider")[0].scrollLeft -= scrollUnit;
		} else {
			console.log("error determining direction");
		}
	});

	////////////////////////////////////////
	// End Then
	////////////////////////////////////////
});

// EXPAND AND CONTRACT HEADER NAV MENU
const $navBurger = $("#hamburger");

$navBurger.on("click", (e) => {
	console.log("clicked");
	console.log(e);
	console.log($("header nav").hasClass("hidden-nav"));
	const $headerNav = $("header nav");
	const $wrapper = $(".wrapper");
	if ($headerNav.hasClass("hidden-nav")) {
		$headerNav.removeClass("hidden-nav").addClass("visible-nav");
		$wrapper
			.removeClass("wrapper-hidden-nav")
			.addClass("wrapper-visible-nav");
	} else {
		$wrapper
			.removeClass("wrapper-visible-nav")
			.addClass("wrapper-hidden-nav");
		$headerNav.removeClass("visible-nav").addClass("hidden-nav");
	}
});

// Function necessary to account for different vh implementation accross devices.  Set vh to actual window
//		Thanks to: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
const getDeviceVH = () => {
	// Get the actual viewport height and convert to vh unit
	const vh = window.innerHeight * 0.01;
	// set custom css property for use by document
	document.documentElement.style.setProperty("--vh", `${vh}px`);
	console.log("custom viewport height set");
};

const centerSlider = () => {
	console.log("center the slider?");
	const $slider = $(".slider");
	console.log($slider);
	$slider[0].scrollLeft = ($slider[0].scrollWidth / 7) * 3;
};
