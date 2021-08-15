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
}
