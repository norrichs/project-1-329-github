const gSheetWebURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTd_GjGcSuXeJZpy0v-4b6Ki8dp6rj5X8Z2bjot0U7sNsbgm1QNFqJb3HMZU44CeR3fwIeCZcP0634M/pubhtml?gid=0&single=true"

const gSheetJsonURL = "https://spreadsheets.google.com/feeds/list/12QSq3K8sjpmME3fQOrl1ET2wad5jJ-gZFdQ8707MDew/1/public/full?alt=json"

// const $gSheet = $.getJSON(url[gSheetJsonURL])

$.ajax(gSheetJsonURL)
.then((data) =>{
	
	console.log(data)
	// Map over the data, generate a simpler dataset
    const projects = data.feed.entry.map((item) => {
        return {
			description: item.gsx$description.$t,
			giturl: item.gsx$giturl.$t,
			image: item.gsx$image.$t,
			liveurl: item.gsx$liveurl.$t,
			project: item.gsx$project.$t

		}
    })
    console.log(projects)

	////////////////////////////////////////
	// Code to render the project
	////////////////////////////////////////

	const $slider = $("#projects .slider")

	projects.forEach((project, index) =>{
		console.log(`project ${index}`,project.description, project.image, project.liveURL, project.project)
		// const $projectCard = $("<div>");
		// $projectCard.text(project.description);
		// console.log($projectCard)
		// TODO MAKE THIS ACCESSIBLE
		const $projectCard = $(`
			<div class="project-card">
				<div class="project-thumbnail" style="background-image: url(${project.image})">
					<h2>${project.project}</h2>
					<p class="project-text">${project.description}</p>
				</div>
				<div class="button-group">
					<button>view</button>
					<button>git</button>
				</div>
			</div>
			`);
		$slider.append($projectCard)
	})
	// Scrolls slider window to computed center
	centerSlider()
	////////////////////////////////////////
	// End Then
	////////////////////////////////////////
})


// EXPAND AND CONTRACT HEADER NAV MENU 
const $navBurger = $("#hamburger")

$navBurger.on('click',(e) => {
	console.log('clicked')
	console.log(e)
	console.log($("header nav").hasClass("hidden-nav"))
	const $headerNav = $("header nav")
	const $wrapper   = $(".wrapper")
	if($headerNav.hasClass("hidden-nav")) { 
		$headerNav.removeClass("hidden-nav").addClass("visible-nav")
		$wrapper.removeClass("wrapper-hidden-nav").addClass("wrapper-visible-nav")
	}else{
		$wrapper.removeClass("wrapper-visible-nav").addClass("wrapper-hidden-nav")
		$headerNav.removeClass("visible-nav").addClass("hidden-nav")
	}
})

/*
Infinite Scroll
GET slider container
	EVENT - scroll release
		GET scroll position
		IF scroll position is left of center
			GRAB last card
			PREPEND slider -> last card
		ELSE IF scroll position is right of center
			GRAB first card
			APPEND slider -> first card
	END EVENT
*/

const centerSlider = () => {
	console.log('center the slider?')
	const $slider = $(".slider")
	console.log($slider)
	$slider[0].scrollLeft = $slider[0].scrollWidth / 7 * 3;
}