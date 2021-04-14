# Project Overview

**PROJECT NAME:** Project 1 - Portfolio

**PROJECT AUTHOR:** Ben Norrichs

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Incomplete
|Day 1| Wireframes / Priority Matrix / Timeline | Incomplete
|Day 1| HTML / CSS rough | Incomplete
|Day 2| Google sheet API / data flow | Incomplete
|Day 2| Work with styling | Incomplete
|Day 3| Implement dynamic elements|Incomplete
|Day 3| Revise | Incomplete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description 
This a portfolio site. It will present myself to the world and will showcase some of my work.  There will be a few sections including:
- About 
  - biographical , educational, and professional info
- Projects
  - simple thumbnail presentation of past work, including coding projects and touching on prior career accomplishments (management and design/build work)
  - thumbnails link to more in-depth presentations and downloadable content
- Skills
	- tech stack w/ nifty icons?
- Contact

Aesthetically, I want to keep things crisp, clean, and very fast.
I would prefer it to mostly be vanilla HTML / CSS,  w/ some fun elements in js.  I'm more interested in pushing the boundaries w/ great CSS than utilizing something slick provided by a framework.  

I have some older personal projects that could be good showcases if some work is put into them, so I'd rather spend time on that than a particularly complicated portfolio site.

## Google Sheet
Using Google sheet to serve project data

[gSheet Link](https://docs.google.com/spreadsheets/d/12QSq3K8sjpmME3fQOrl1ET2wad5jJ-gZFdQ8707MDew/edit?usp=sharing) 

## Portfolio I want to Emulate

Search and compare at least 3 profile web sites.  Record your findings in the table below and include some aspect of the site that you would like to incorporate into your own site.


Examples I like | Notes         |
|----------------------------|-----------------------|
|[chippd.github.io](https://chippd.github.io/)  | nice scrollable flow.  tools section          |
|[findmathew.com](http://findmatthew.com/)    | organization and transitions in the project section |
|[caferati.me](https://caferati.me/) | nice interactivity |
|[adhamdannaway.com](https://www.adhamdannaway.com/) | nice clean design |
|[noellelaureano.com](https://www.noellelaureano.com/#projects) |simplicity|
|[dev.jesentanadi.com](https://dev.jesentanadi.com/) | very simple and clean line based design|
|[scottdemeo.dev](https://scottdemeo.dev/)|very text based design.  simple, clean|

Portfolio Designs to avoid... (no offense to the designers)
https://builtbysilo.com/portfolio/

---

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://drive.google.com/file/d/1l2PsRfR_J_BxNDYHg4hvwoXwHR2-R8zJ/view?usp=sharing)
- [Tablet](https://drive.google.com/file/d/1YH2OgcOxvswRh_BPXCJnDVrJho0thrrB/view?usp=sharing)
- [Desktop](https://drive.google.com/file/d/1BWDiYQ4s1Z4ovXpjv7GiCR9CzRl0-j_e/view?usp=sharing)


## Time/Priority Matrix 

[link to gSheet](https://docs.google.com/spreadsheets/d/12QSq3K8sjpmME3fQOrl1ET2wad5jJ-gZFdQ8707MDew/edit#gid=1751921927)
![Image of Matrix](https://docs.google.com/spreadsheets/d/e/2PACX-1vTd_GjGcSuXeJZpy0v-4b6Ki8dp6rj5X8Z2bjot0U7sNsbgm1QNFqJb3HMZU44CeR3fwIeCZcP0634M/pubchart?oid=1015964824&format=image)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

 - Use semantic markup for HTML and CSS, adhering to best practices.
 - Use CSS GRID to create a multi-column layout
 - Use Flexbox for content
 - Must be mobile mobile first, then tablet and desktop responsive
 - Must pull in projects via API call from google sheet
 - Be deployed and accessible online either via Github Pages or Surge.

#### PostMVP 

- Anything else that is not MVP

## Functional Components

#### MVP
|Item|Time - 22.5|Priority|
|-----|------|-----|
|Code layout|2|9|
|Build web component for project thumb|2|2|
|build nav bar functionality|3|4|
|build out project data handling|2|8|
|build form submission|2|9|
|write biographical copy|1|7|
|write project copy|2.5|7|
|generate project graphics|1|9|
|implement swipe-carousel (something off-the shelf?)|3|2|
|build project landing pages|2|4|

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Hover | L | 1hr | -hr | hr |
| Interactive Banner | M | 4hr | hr |
| Materialize | H | 4hr | -hr | hr |
| Bootstrap | H | 4hr | hr |
| Make own icon | L | 4hr | hr |
| Total | H | 20hrs| hrs |

## Additional Libraries
 I would like to code an initial version of this without relying on additional libraries.
 jQuery makes sense at this time, but I want to figure out my own HTML/css, and mostly vanilla JS

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
- Project slider
  - I don't want to use a slider implementation that I didn't implement.  
  - Resolution, using css native scrolling and snap scrolling features.
  - Will implement js function to make infinite scroll possible

- Vertical scroll snap issues
  - I can't figure out why yet, but scroll snapping isn't working for me vertically.  I have example scratch files where it works...
    - Resolution:  changed container height from 100% to 100vh...

  - it looks like 100vh in chrome dev tools doesn't account for the application cruft at the top of the browser on an actual mobile device.  Meaning a view sized to take exactly 100% of the vertical viewport gets cut off on mobile...
    - Potential solution: use JS to get the global variable window.innerHeight, and set this to a css variable like --vh, and use that instead of vh
    - [css tricks writeup of solution](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
    - trying that method by manually creating a custom vh breaks scroll snap...
    - fixed it by fixing calc() syntax.   Implemented javascript setting of variable on page render.  works.  committed
  - It should be noted that the scroll behavior in devtools is not great when using a mouse scroll wheel, but is fine using click-drag, and is similar deployed to actual mobile.  scroll wheel usage on mobile isn't a targeted use case, so I won't work on resolving this




#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
