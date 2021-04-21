type Exercise = {
  name: string,
  reps: string,
  kg: string,
  notes?: string
}

type TrainingData = {
  username: string,
  date: string,
  notes: string,
  exercises: Exercise[]
}

export default TrainingData