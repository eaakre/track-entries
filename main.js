// Divs for checkboxes of each athlete
const boys110 = document.getElementById("boys-110");
const boys300 = document.getElementById("boys-300");
const girls100 = document.getElementById("girls-100");
const girls300 = document.getElementById("girls-300");
const boysLj = document.getElementById("boys-lj");
const boysTj = document.getElementById("boys-tj");
const girlsLj = document.getElementById("girls-lj");
const girlsTj = document.getElementById("girls-tj");

const boys100 = document.getElementById("boys-100");
const boys200 = document.getElementById("boys-200");
const boys400s = document.getElementById("boys-400s");
const boys4x1 =document.getElementById("boys-4x1");
const boys4x2 =document.getElementById("boys-4x2");
const boys4x4s =document.getElementById("boys-4x4s");

const boys400d = document.getElementById("boys-400d");
const boys800 = document.getElementById("boys-800");
const boys1600 = document.getElementById("boys-1600");
const boys3200 = document.getElementById("boys-3200");
const boys4x4d =document.getElementById("boys-4x4d");
const boys4x8 =document.getElementById("boys-4x8");

const girls400d = document.getElementById("girls-400d");
const girls800 = document.getElementById("girls-800");
const girls1600 = document.getElementById("girls-1600");
const girls3200 = document.getElementById("girls-3200");
const girls4x4d =document.getElementById("girls-4x4d");
const girls4x8 =document.getElementById("girls-4x8");


// Divs to display selected athletes
const boys110Hurdles = document.getElementById("boys-110-div");
const boys300Hurdles = document.getElementById("boys-300-div");
const girls100Hurdles = document.getElementById("girls-100-div");
const girls300Hurdles = document.getElementById("girls-300-div");
const boysLongJump = document.getElementById("boys-lj-div");
const boysTripleJump = document.getElementById("boys-tj-div");
const girlsLongJump = document.getElementById("girls-lj-div");
const girlsTripleJump = document.getElementById("girls-tj-div");

const boys100dash = document.getElementById('boys-100-div');
const boys200dash = document.getElementById('boys-200-div');
const boys400sdash = document.getElementById('boys-400s-div');
const boys4x1relay = document.getElementById('boys-4x1-div');
const boys4x2relay = document.getElementById('boys-4x2-div');
const boys4x4srelay = document.getElementById('boys-4x4s-div');

const boys400ddash = document.getElementById('boys-400d-div');
const boys800run = document.getElementById('boys-800-div');
const boys1600run = document.getElementById('boys-1600-div');
const boys3200run = document.getElementById('boys-3200-div');
const boys4400drelay = document.getElementById('boys-4x4d-div');
const boys4800relay = document.getElementById('boys-4x8-div');


// Lists of selected athletes
const boys110List = [];
const boys300List = [];
const girls100List = [];
const girls300List = [];
const boysLjList = [];
const boysTjList = [];
const girlsLjList = [];
const girlsTjList = [];

const boys100List = [];
const boys200List = [];
const boys400sList = [];
const boys4100List = [];
const boys4200List = [];
const boys4400sList = [];

const boys400dList = [];
const boys800List = [];
const boys1600List = [];
const boys3200List = [];
const boys4400dList = [];
const boys4800dList = [];

// Unordered list divs for each event
const b110 = document.createElement('div');
const b300 = document.createElement('div');
const g100 = document.createElement('div');
const g300 = document.createElement('div');
const blj = document.createElement('div');
const btj = document.createElement('div');
const glj = document.createElement('div');
const gtj = document.createElement('div');
const aakreDiv = [b110, b300, g100, g300, blj, btj, glj, gtj];

const b100 = document.createElement('div');
const b200 = document.createElement('div');
const b400s = document.createElement('div');
const b4100 = document.createElement('div');
const b4200 = document.createElement('div');
const b4400s = document.createElement('div');
const mickDiv = [b100, b200, b400s, b4100, b4200, b4400s];

const b400d = document.createElement('div');
const b800 = document.createElement('div');
const b1600 = document.createElement('div');
const b3200 = document.createElement('div');
const b4400d = document.createElement('div');
const b4800 = document.createElement('div');
const g400d = document.createElement('div');
const g800 = document.createElement('div');
const g1600 = document.createElement('div');
const g3200 = document.createElement('div');
const g4400d = document.createElement('div');
const g4800 = document.createElement('div');
const amundDiv = [b400d, b800, b1600, b3200, b4400d, b4800, g400d, g800, g1600, g3200, g4400d, g4800];

// Create checkboxes for each athlete in roster
function athleteCheckbox(roster, eventList, validity) {
    const newDiv = document.createElement('div');
    
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "column";
    for (i=0; i<roster.length; i++) {
        const newAthlete = roster[i]
        const eventType = validity
        if (newAthlete[eventType]) {
            const subDiv = document.createElement('div');
            const athlete = document.createElement('input');
            athlete.type = "checkbox";
            athlete.id = i;
            athlete.value = ` ${newAthlete.first} ${newAthlete.last}`
            subDiv.appendChild(athlete)

            const newText = document.createElement('span');
            newText.innerHTML = athlete.value;
            subDiv.appendChild(newText)
        
            athlete.addEventListener( "change", () => {
                if (athlete.checked) {
                    eventList.push(athlete.value)
                } else {
                    for (i=0; i<eventList.length; i++) {
                        if (eventList[i] === athlete.value) {
                            eventList.splice(i, 1)
                        }
                    }
                }
            })
            newDiv.appendChild(subDiv);
        } 
    }
    return newDiv
}

// Takes lists of selected athletes and displays them
function getAthletes(list, div) {
    for (i=0; i<list.length; i++) {
        const entry = document.createElement('p');
        entry.innerHTML = list[i]
        div.appendChild(entry)
    }
    return div;
}

// onClick function to call the getAthletes function for each list
function getList(coachDiv) {

    coachDiv.forEach(element => {
        element.innerHTML = ''
    });
    switch (coachDiv) {
        case aakreDiv:
            boys110Hurdles.appendChild(getAthletes(boys110List, b110))
            boys300Hurdles.appendChild(getAthletes(boys300List, b300))
            girls100Hurdles.appendChild(getAthletes(girls100List, g100))
            girls300Hurdles.appendChild(getAthletes(girls300List, g300))
            boysLongJump.appendChild(getAthletes(boysLjList, blj))
            boysTripleJump.appendChild(getAthletes(boysTjList, btj))
            girlsLongJump.appendChild(getAthletes(girlsLjList, glj))
            girlsTripleJump.appendChild(getAthletes(girlsTjList, gtj))
            break;
        case mickDiv:
            boys100dash.appendChild(getAthletes(boys100List, b100)) 
            boys200dash.appendChild(getAthletes(boys200List, b200)) 
            boys400sdash.appendChild(getAthletes(boys400sList, b400s)) 
            boys4x1relay.appendChild(getAthletes(boys4100List, b4100)) 
            boys4x2relay.appendChild(getAthletes(boys4200List, b4200)) 
            boys4x4srelay.appendChild(getAthletes(boys4400List, b4400)) 
            break;
        case amundDiv:
            boys400ddash.appendChild(getAthletes(boys100List, b100)) 
            boys800run.appendChild(getAthletes(boys200List, b200)) 
            boys1600run.appendChild(getAthletes(boys400sList, b400s)) 
            boys3200run.appendChild(getAthletes(boys3200List, boys3200))
            boys4x4drelay.appendChild(getAthletes(boys4400List, b4400)) 
            boys4x8relay.appendChild(getAthletes(boys4800List, b4200)) 
            break;
    }
    
}