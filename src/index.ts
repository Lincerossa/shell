
import fs from 'fs';
import chalk from 'chalk'
import inquirer from 'inquirer'
import questions from './utils/questions'
import data from './data'
import TrainingData from './types/TrainingData'

inquirer.registerPrompt('recursive', require('inquirer-recursive'));

console.log(chalk.green("Hello guy 🦄, The program has just started"))

async function init(){
  const trainingData : TrainingData = await inquirer.prompt(questions)

  if(trainingData) {
    const result: TrainingData[] = [...data, trainingData ]
    console.log(chalk.green(`The new data is now available with ${result.length} results`))
    fs.writeFileSync("./src/data.ts", `export default ${JSON.stringify(result, null, 2)}`) 
  }
}

init()
