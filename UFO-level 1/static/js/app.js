// from data.js
var tableData = data;

var tbody = d3.select("#ufo-table").select("tbody");
tbody.html("")
tableData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

//reference to the button
var button = d3.select("#filter-btn");
var form =  d3.select("#datetime");
button.on("click", runEnter)
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    var filterData = tableData
    if (date){
        filterData = filterData.filter(row => row.datetime === date);
        console.log(filterData);
    }
    tbody.html("")
    filterData.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    }); 
}

