// from data.js

var tbody = d3.select("tbody");

var tableData = data;


// Loop Through `data` and console.log each UFO report object
data.forEach(function(ufoReport) {
console.log(ufoReport);
});
    
// Use d3 to append one table row `tr` for each UFO report object
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
});
    
// Use `Object.entries` to console.log each UFO report value
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    
    Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
});
});
    
// Use d3 to append 1 cell per UFO report value
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    
    Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);

// Append a cell to the row for each value in the UFO report object
var cell = row.append("td");
});
});
    
// Use d3 to update each cell's text with UFO report values
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);

// Append a cell to the row for each value in the UFO report object
var cell = row.append("td");
    cell.text(value);
    });
});
