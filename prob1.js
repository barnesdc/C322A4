var name;
var totalSalary = 0;
var numEmployees = 0;
var average = 0;
var minSalary = 13;
var maxSalary = 100;

var table = "<table border='1' width='15%'><caption>Company Employees</caption>";
var row1  = "<tr><th>Employee's Name: </th>";
var row2  = "<tr><th>Employee's Salary: </th>";



while (name = window.prompt("Enter in account holder's name: ")){
    numEmployees++;

    do{
        salary  = window.prompt("Enter in " + name + "'s salary: ");

    }while(isNaN(salary) || salary < minSalary || salary > maxSalary);

    totalSalary += parseInt(salary);
    average = totalSalary / numEmployees;
    row1 += "<td>" + name + "</td>";
    row2 += "<td>" + salary + "</td>";
}
    row1 += "</tr>";
    row2 += "</tr>";

    table += row1 + row2 + "</table>";

document.writeln(table);
document.writeln("<br>" + "There is/are " + numEmployees + " employee(s) in our company with a total company salary of " + totalSalary);
document.writeln("<br>" + "The average is " + average.toFixed(1));


