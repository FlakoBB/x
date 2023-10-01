const BASE_URL = 'http://localhost:8000/tasks/api/v1/tasks/'

export const getAllTasks = async () => {
  try {
    const response = await fetch(BASE_URL)
    return response.json()
  } catch (err) {
    console.log(err)
  }
}
