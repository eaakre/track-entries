// Divs for checkboxes of each athlete
const boys110 = document.getElementById("boys-110");
const boys300 = document.getElementById("boys-300");
const girls100 = document.getElementById("girls-100");
const girls300 = document.getElementById("girls-300");
const boysLj = document.getElementById("boys-lj");
const boysTj = document.getElementById("boys-tj");
const girlsLj = document.getElementById("girls-lj");
const girlsTj = document.getElementById("girls-tj");

// Divs to display selected athletes
const boys110Hurdles = document.getElementById("boys-110-div");
const boys300Hurdles = document.getElementById("boys-300-div");
const girls100Hurdles = document.getElementById("girls-100-div");
const girls300Hurdles = document.getElementById("girls-300-div");
const boysLongJump = document.getElementById("boys-lj-div");
const boysTripleJump = document.getElementById("boys-tj-div");
const girlsLongJump = document.getElementById("girls-lj-div");
const girlsTripleJump = document.getElementById("girls-tj-div");

// Lists of selected athletes
const boys110List = [];
const boys300List = [];
const girls100List = [];
const girls300List = [];
const boysLjList = [];
const boysTjList = [];
const girlsLjList = [];
const girlsTjList = [];

// Unordered list divs for each event
const b110 = document.createElement('div')
const b300 = document.createElement('div')
const g100 = document.createElement('div')
const g300 = document.createElement('div')
const blj = document.createElement('div')
const btj = document.createElement('div')
const glj = document.createElement('div')
const gtj = document.createElement('div')

// Create checkboxes for each athlete in roster
function athleteCheckbox(roster, eventList) {
    const newDiv = document.createElement('div');
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "column";
    for (i=0; i<roster.length; i++) {
        const subDiv = document.createElement('div');
        const newAthlete = roster[i]
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
            }
        })
        newDiv.appendChild(subDiv);
    }
    return newDiv
}

// Takes lists of selected athletes and displays them
function getAthletes(list, div) {
    for (i=0; i<list.length; i++) {
        const entry = document.createElement('p');
        console.log(list[i])
        entry.innerHTML = list[i]
        div.appendChild(entry)
    }
    return div;
}

// onClick function to call the getAthletes function for each list
function getList() {
    boys110Hurdles.appendChild(getAthletes(boys110List, b110))
    boys300Hurdles.appendChild(getAthletes(boys300List, b300))
    girls100Hurdles.appendChild(getAthletes(girls100List, g100))
    girls300Hurdles.appendChild(getAthletes(girls300List, g300))
    boysLongJump.appendChild(getAthletes(boysLjList, blj))
    boysTripleJump.appendChild(getAthletes(boysTjList, btj))
    girlsLongJump.appendChild(getAthletes(girlsLjList, glj))
    girlsTripleJump.appendChild(getAthletes(girlsTjList, gtj))
}


boys110.appendChild(athleteCheckbox(hurdlers.boys, boys110List));
boys300.appendChild(athleteCheckbox(hurdlers.boys, boys300List));
girls100.appendChild(athleteCheckbox(hurdlers.girls, girls100List));
girls300.appendChild(athleteCheckbox(hurdlers.girls, girls300List));
boysLj.appendChild(athleteCheckbox(jumpers.boys, boysLjList));
boysTj.appendChild(athleteCheckbox(jumpers.boys, boysTjList));
girlsLj.appendChild(athleteCheckbox(jumpers.girls, girlsLjList));
girlsTj.appendChild(athleteCheckbox(jumpers.girls, girlsTjList));

