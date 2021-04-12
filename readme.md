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
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
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

Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [denisechandler.com](http://www.denisechandler.com/)| landing page animation
|[jkeohan.com](http://jkeohan.com/) | mouseover on a project triggers animations |
| [mattfarley.ca](http://mattfarley.ca/) |  layout of the projects

Examples I like | Notes         |
|----------------------------|-----------------------|
| [chippd.github.io](https://chippd.github.io/)  | nice scrollable flow.  tools section          |
| [findmathew.com](http://findmatthew.com/)    | organization and transitions in the project section |
| [caferati.me](https://caferati.me/) | nice interactivity |
|[adhamdannaway.com](https://www.adhamdannaway.com/) | nice clean design |
|[noellelaureano.com](https://www.noellelaureano.com/#projects) |simplicity|
|[dev.jesentanadi.com](https://dev.jesentanadi.com/) | very simple and clean line based design|
|[scottdemeo.dev](https://scottdemeo.dev/)|very text based design.  simple, clean|

Portfolio Designs to avoid... (no offense to the designers)
https://builtbysilo.com/portfolio/

---

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile](https://i.imgur.com/P3iBEZf.jpg)
- Tablet
- [Desktop](https://i.imgur.com/xpOWo0E.jpg)

Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/)


## Time/Priority Matrix 

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

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 1hr | hr |
| Project Previews | H | 3hr | hr |
| Regular Nav | H | 1hr | hr |  
| Adding Form | H | 1.5hr|  hr | 
| Other sections and flex| M | 3hr | hr|
| Working with API | H | 3hrs|  hr | 
| Responsive | H | 3hr | hr | hr |
| Social Media Icons | L | 1hr |  hr |
| Total | H | 15.5hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Hover | L | 3hr | -hr | hr |
| Banner letters wiggle | L | 1hr | hr |
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
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
