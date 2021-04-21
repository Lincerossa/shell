import shell from 'shelljs'
import chalk from 'chalk'
import inquirer from 'inquirer'
inquirer.registerPrompt('recursive', require('inquirer-recursive'));


console.log(chalk.green("Hello guy 🦄, The program has just started"))

async function init(){
  const data = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      validate: function (value) {
        if ((/.+/).test(value)) { return true; }
      return 'name is required';
      }
    },
    {
      type: "input",
      name: "date",
      validate: function (value) {
        if ((/.+/).test(value)) { return true; }
        return 'name is required';
      }
    },
    {
      type: "input",
      name: "notes",
    },
    {
      type: 'recursive',
      message: 'Add a new exercise?',
      name: 'exercises',
      prompts: [
        {
          type: 'input',
          name: 'name',
          validate: function (value:string) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
          }
        },
        {
          type: 'input',
          name: 'reps',
          validate: function (value: string) {
            var digitsOnly = /\d+/;
            if (digitsOnly.test(value)) { return true; }
            return 'Invalid! Must be a number';
          }
        },
        {
          type: 'input',
          name: 'kg',
          validate: function (value: string) {
            var digitsOnly = /\d+/;
            if (digitsOnly.test(value)) { return true; }
            return 'Invalid! Must be a number';
          }
        },
        {
          type: 'input',
          name: 'notes',
          message: 'Do you have notes',
        },
      ]
    },
  ])

  console.log("asd", data)
}

init()
