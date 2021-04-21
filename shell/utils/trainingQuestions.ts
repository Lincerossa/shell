import TrainingQuestion from '../types/TrainingQuestion'

const trainingQuestions: TrainingQuestion[] = [
  {
    type: "input",
    name: "username",
    validate: function (value:string) {
      if ((/.+/).test(value)) { return true; }
    return 'name is required';
    }
  },
  {
    type: "input",
    name: "date",
    validate: function (value:string) {
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
        type: 'number',
        name: 'reps',
        validate: function (value: string) {
          var digitsOnly = /\d+/;
          if (digitsOnly.test(value)) { return true; }
          return 'Invalid! Must be a number';
        }
      },
      {
        type: 'number',
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
]

export default trainingQuestions