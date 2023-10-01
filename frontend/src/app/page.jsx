'use client'
import Card from '@/components/Card'
import { useEffect, useState } from 'react'
import { getAllTasks } from '@/api/taskApi.api'

export default function Home () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const response = await getAllTasks()
      setTasks(response)
    }
    getTasks()
  }, [])

  return (
    <main>
      <h1>Hola Mundo</h1>
      {
        tasks.map(task => <Card key={task.id} task={task} />)
      }
    </main>
  )
}
