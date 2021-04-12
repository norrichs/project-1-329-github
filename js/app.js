

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
		console.log(`project ${index}`,project.description)
		
		// const $projectCard = $("<div>");
		// $projectCard.text(project.description);
		// console.log($projectCard)

		const $projectCard = $(`
			<div class="placeholder-project-card">
				<div class="project-thumbnail">
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

	////////////////////////////////////////
	////////////////////////////////////////
})

