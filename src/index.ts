
import fs from 'fs';
import chalk from 'chalk'
import shell from 'shelljs'
import inquirer from 'inquirer'
import trainingQuestions from './utils/trainingQuestions'
import commitQuestions from './utils/commitQustions'
import data from './data'
import TrainingData from './types/TrainingData'
import CommitData from './types/CommitData'


if (!shell.which('git')) {
  chalk.red("no git program found.")
  shell.exit(1);
}

inquirer.registerPrompt('recursive', require('inquirer-recursive'));

console.log(chalk.green("Hello guy 🦄, The program has just started"))

async function init(){
  const commitData: CommitData = await inquirer.prompt(commitQuestions)
  const trainingData: TrainingData = await inquirer.prompt(trainingQuestions)

  if(trainingData) {
    const result: TrainingData[] = [...data, trainingData ]
    console.log(chalk.green(`The new data is now available with ${result.length} results`))
    fs.writeFileSync("./src/data.ts", `export default ${JSON.stringify(result, null, 2)}`) 
  }

  if(commitData.commit) {
    if (shell.exec('git commit -am "Auto-commit"').code !== 0 || shell.exec("npm run test")) {
      shell.echo('Error: Git commit failed');
      shell.exit(1);
    }

    shell.exec("git push")
  }
}

init()
