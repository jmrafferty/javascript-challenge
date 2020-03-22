// Get a reference to the table body
var tbody = d3.select("tbody");
var tableData = data;
// Console.log the UFO data from data.js
console.log(data);


// // Use d3 to update each cell's text with
// // UFO report values
data.forEach(function(ufoReport) {
// console.log(ufoReport);
var row = tbody.append("tr");
Object.entries(ufoReport).forEach(function([key, value]) {
//console.log(key, value);

//Append a cell to the row for each value
//in the UFO report object
var cell = row.append("td");
cell.text(value);
});
});

data.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {

    var cell = row.append("td");
    cell.text(value);
  });
});




document.getElementById("filter-btn").addEventListener("click", displayData);



function displayData(){
    
 
  

  $("#ufo-table").find("tbody").empty();
  let date_filter = $("#datetime").val();
  let city_filter = $("#City").val();
  let state_filter = $("#State").val();
  let country_filter  = $("#Country").val();
  let shape_filter = $("#Shape").val();
  let user_typed = {};
 
 // let result 
  

  function filterDate(){
    result = data.filter(word => word.datetime == date_filter);

  }
  function filterCity(){
    result = data.filter(word => word.City == city_filter);

  }
  function filterState(){
    result = data.filter(word => word.State == state_filter);

  }

  function filterCountry(){
    result = data.filter(word => word.Country == country_filter);

  }

  function filterShape(){
    result = data.filter(word => word.Shape == shape_filter);

  }


if (date_filter != '' ){
    //filterDate()
    let result = data.filter(word => word.datetime == date_filter);
    result.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
    
        var cell = row.append("td");
        cell.text(value);
      });
    });
   
}





/*
if (city_filter != '' ){
  let result = data.filter(word => word.City == city_filter);
  result.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
  
      var cell = row.append("td");
      cell.text(value);
    });
  });
 
}

if (state_filter != '' ){
  let result = data.filter(word => word.State == state_filter);
  result.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
  
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

if (country_filter != '' ){
  let result = data.filter(word => word.Country == country_filter);
  result.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
  
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

if (shape_filter != '' ){
  let result = data.filter(word => word.Shape == shape_filter);
  result.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
  
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
*/
  
   // let result = data.filter(word => word.state == state_filter && word.city == city_filter && );
    
   
    
    
}


/* Using multiple `input` tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`
  */
