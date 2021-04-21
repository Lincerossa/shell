

type Question = {
  type: string,
  name: string,
  message?: string
  validate?: (a: string) => string | boolean
  prompts?: Question[]
}

export default Question