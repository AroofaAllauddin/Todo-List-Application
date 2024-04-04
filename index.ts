#! /usr/bin/env node
import inquirer from "inquirer";

let todoList =[];
let conditions = true;

console.log("\n \t Welcome to Aroofa Allauddin - Todo-list Application\n");

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in todo-List Successfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore    
}
console.log("Your updated Todo-list:" ,todoList);

