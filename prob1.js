/*
Name:
Project/Assignment: Assignment 4
    -Repeatedly prompts for an employee’s name and then for their salary
    -The maximum and minimum salaries are the values of the variables
    minSalary (currently set to 13) and maxSalary (set to 100).
    -The user exits the loop by clicking Cancel when prompted for an employee’s name.
    -The program constructs a table in which each employee-salary pair entered occurs as a column.
    -The program also keeps track of the number of employees and their total salary, from which the average salary is calculated.

Input:
    -name
    -salary

Output:
    -table of all names and their associated salaries

Process:
    -while loop to run until canceled
    -concatenate table rows with a related cell (whether name or salary)
    -input validation for salary (e.g isNaN)
    -number of digits after decimal = 1 (e.g toFixed(1)
 */


// initialize variables to be ussed
var name;
var totalSalary = 0;
var numEmployees = 0;
var average = 0;
var minSalary = 13;
var maxSalary = 100;


// create the start of the table
var table = "<table border='1' width='15%'><caption>Company Employees</caption>";
var row1  = "<tr><th>Employee's Name: </th>";
var row2  = "<tr><th>Employee's Salary: </th>";


// runs as long as user does not select cancel
// do window prompt while salary is incorrect format, input validation
while (name = window.prompt("Enter in account holder's name: ")){
    numEmployees++;

    do{
        var salary  = window.prompt("Enter in " + name + "'s salary: \n" +
                                    "Salary must be within range of 13-100!");

    }while(isNaN(salary) || salary < minSalary || salary > maxSalary);


    totalSalary += parseInt(salary);        // convert salary to integer and add to total
    average = totalSalary / numEmployees;   // obtain average from total salary and number of employees
    row1 += "<td>" + name + "</td>";        // add name to cell in table, close cell
    row2 += "<td>" + salary + "</td>";      // add salary to cell in table, closs cell
}
    row1 += "</tr>";                        //close row
    row2 += "</tr>";

    table += row1 + row2 + "</table>";      // add rows to table, close cell

// print table
// print number of employees, total salary, and average salary.
document.writeln(table);
document.writeln("<br>" + "There is/are " + numEmployees + " employee(s) in our company with a total company salary of " + totalSalary);
document.writeln("<br>" + "The average salary is " + average.toFixed(1));


