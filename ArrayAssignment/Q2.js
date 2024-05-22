import inquirer from "inquirer";
const query = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "Firstnumber" }
]);
let num = 10;
if (query.Firstnumber == num)
    console.log("Your number is equal to the dynamic number value");
else if (query.Firstnumber < num)
    console.log("Your number is less than the dynamic number value");
else
    console.log("Your number is greater than the dynamic number value");
