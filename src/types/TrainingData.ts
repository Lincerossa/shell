type Exercise = {
  name: string,
  reps: number,
  kg: number,
  notes?: string
}

type TrainingData = {
  username: string,
  date: string,
  notes: string,
  exercises: Exercise[]
}

export default TrainingData