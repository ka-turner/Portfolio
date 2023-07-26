/**********************************************************************
 * If adding a new project to the Project List on the homepage, do 
 * the following:
 * 
 * Create a new variable for the project-n-header
 * 
 * In getArrowTarget:
 * Create a new variable for the arrow-project-n
 * Add an else if statement for the new header & arrow
 * 
 * In showInfo:
 * Create a new variable for the project-n-info
 * Add an else if statement to show or hide the info
 * 
 * Add an event listener for changeArrow and showInfo
 * 
 **********************************************************************/

let project1Header = document.getElementById('project-1-header');
let project2Header = document.getElementById('project-2-header');
let project3Header = document.getElementById('project-3-header');

let arrowTarget = '';

let getArrowTarget = function(event) {
    let arrow1 = document.getElementById('arrow-project-1');
    let arrow2 = document.getElementById('arrow-project-2');
    let arrow3 = document.getElementById('arrow-project-3');

    if (event.target.getAttribute("id") === "project-1-header") {
        arrowTarget = arrow1;
    } else if (event.target.getAttribute("id") === "project-2-header") {
        arrowTarget = arrow2;
    } else if (event.target.getAttribute("id") === "project-3-header") {
        arrowTarget = arrow3;
    } else if (event.target.getAttribute("id") === "arrow-project-1") {
        arrowTarget = arrow1;
    } else if (event.target.getAttribute("id") === "arrow-project-2") {
        arrowTarget = arrow2;
    } else if (event.target.getAttribute("id") === "arrow-project-3") {
        arrowTarget = arrow3;
    }

    return arrowTarget;
}


let changeArrow = function(event) { 

    arrowTarget = getArrowTarget(event);

    if (arrowTarget.getAttribute("data-state") === "closed") {
        arrowTarget.style.transform = "rotate(45deg)";
        arrowTarget.setAttribute("data-state", "open");
    } else {
        arrowTarget.style.transform = "rotate(-45deg)";
        arrowTarget.setAttribute("data-state", "closed");
    }
    
}


let showInfo = function(event) {

    arrowTarget = getArrowTarget(event);

    let project1Info = document.getElementById('project-1-info');
    let project2Info = document.getElementById('project-2-info');
    let project3Info = document.getElementById('project-3-info');

    if ((arrowTarget.getAttribute("id") === "arrow-project-1") && arrowTarget.getAttribute("data-state") === "open") {
        project1Info.style.display = 'flex';
    } else if ((arrowTarget.getAttribute("id") === "arrow-project-1") && arrowTarget.getAttribute("data-state") === "closed") {
        project1Info.style.display = 'none';
    } else if ((arrowTarget.getAttribute("id") === "arrow-project-2") && arrowTarget.getAttribute("data-state") === "open") {
        project2Info.style.display = 'flex';
    } else if ((arrowTarget.getAttribute("id") === "arrow-project-2") && arrowTarget.getAttribute("data-state") === "closed") {
        project2Info.style.display = 'none';
    } else if ((arrowTarget.getAttribute("id") === "arrow-project-3") && arrowTarget.getAttribute("data-state") === "open") {
        project3Info.style.display = 'flex';
    } else if ((arrowTarget.getAttribute("id") === "arrow-project-3") && arrowTarget.getAttribute("data-state") === "closed") {
        project3Info.style.display = 'none';
    }
}

project1Header.addEventListener('click', changeArrow);
project1Header.addEventListener('click', showInfo);
project2Header.addEventListener('click', changeArrow);
project2Header.addEventListener('click', showInfo);
project3Header.addEventListener('click', changeArrow);
project3Header.addEventListener('click', showInfo);