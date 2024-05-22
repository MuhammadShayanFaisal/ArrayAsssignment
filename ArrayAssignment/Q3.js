import inquirer from "inquirer";
const friend = await inquirer.prompt([
    { message: "Enter a name", type: "string", name: "fr" }
]);
switch (friend.fr) {
    case "Ali":
        console.log("You enters name Ali, which is my known friend");
        break;
    case "Usman":
        console.log("You enters name Usman, which is my known friend");
        break;
    default:
        console.log("Not my known friend");
}
