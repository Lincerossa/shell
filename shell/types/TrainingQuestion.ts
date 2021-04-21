

type TrainingQuestion = {
  type: string,
  name: string,
  message?: string
  validate?: (a: string) => string | boolean
  prompts?: TrainingQuestion[]
}

export default TrainingQuestion