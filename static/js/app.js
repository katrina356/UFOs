// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Start function to build our table
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    data.forEach((dataRow) => {
        // create variable to append a row to the table body. <tr> will be used for each object in HTML
        let row = tbody.append("tr");
            // create function to loop through each field in the dataRow and add each value as a table cell (td)
            Object.values(dataRow).forEach((val) => {
                let cell = row.append("td");
                cell.text(val);
            });
    });
};

// start new function called handleClick
function handleClick() {
    //select the 1st element that matches datetime, chaining .property tells js to grab and hold in the date variable
    let date = d3.select("#datetime").property("value");
    // set default filter. tableData is our original file so if no date is picked then all data will be returned
    let filteredData = tableData;
    // Check to see if a date was entered and filter the data using that date
    if (date) {
        //this applies the filter to the data to the date variable created above
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //Rebuild the table using the filtered data
    // @Note:  If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
};
// Selector string #filter-btn is a unique id to a button element in the HTML called filter-btn, this links our code directly to the filter button
// .on(click, handleClick) tells d3 to execute our handleClick function
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

