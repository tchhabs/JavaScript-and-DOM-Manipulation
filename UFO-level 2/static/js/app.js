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

var filters = {}
//reference to the button
var button = d3.select("#filter-btn");
var form =  d3.select("#datetime");
button.on("click", runEnter)
form.on("submit", runEnter);


function runEnter() {
    d3.event.preventDefault();
    var dates = d3.select("#datetime").property("value");
    var cities = d3.select("#city").property("value");
    var shapes = d3.select("#shape").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");

    if (dates){
        filters["datetime"]= dates
    } else {
        delete filters["datetime"]
    }
    if (cities){
        filters["city"]= cities
    } else {
        delete filters["city"]
    }
    if (shapes){
        filters["shape"]= shapes
    } else {
        delete filters["shape"]
    }
    if (state){
        filters["state"]= state
    } else {
        delete filters["state"]
    }
    if (country){
        filters["country"]= country
    } else {
        delete filters["country"]
    }
console.log(filters);

    var filterData = tableData

    tbody.html("")
    Object.entries(filters).forEach(([key, value]) => {
        filterData = filterData.filter(row => row[key]=== value)
    })

    console.log(filterData);

    filterData.forEach((ufoSightings) => {
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    }); 
}