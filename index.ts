import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

 //Counditional Statement
 if (asnwer.operator === "Addition"){
  console.log(asnwer.firstNumber + asnwer.secondNumber);
   }else if(asnwer.operator === "Subtraction"){
    console.log(asnwer.firstNumber - asnwer.secondNumber);
    }else if(asnwer.operator === "Multiplication"){
      console.log(asnwer.firstNumber * asnwer.secondNumber);
    }else if (asnwer.operator === "Division"){
      console.log(asnwer.firstNumber / asnwer.secondNumber);
    }else {
    console.log("plase selec valid operator");
    }
   


