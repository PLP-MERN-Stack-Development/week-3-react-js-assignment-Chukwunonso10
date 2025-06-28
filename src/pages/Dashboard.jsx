import React from 'react'
import Card from '../components/Card'
import useLocalStorageTasks  from '../utils/hooks'
import API from '../Service/api'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TaskManager from '../components/TaskManager'
import Button from '../components/Button'


export default function Dashboard() {
    const [Apitasks, setApitask] = useState([])
    const [completed, setCompleted] = useState(false)
    const [Count, setCount] = useState(0)

    const Load = async () => {
        const res = await API.get('/todos')
        setApitask(res.data)
    }

    //useEffect(() => { Load()}, [])

    const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar />
          
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
            
            <div className="flex items-center gap-4 my-4">
              <button
                onClick={() => setCount((count) => count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-bold">{Count}</span>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>

            <div className="text-gray-500 bg-gray-100 w-90 dark:text-gray-400 mt-4">
                <TaskManager 
                tasks={tasks}
                ontoggle={toggleTask}
                onDelete={deleteTask}
                addTask={addTask}/>
              {/* Implement your TaskManager component here */}
            </div>
          </div>
        </div>
            <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">API Data</h2>
                <p className="text-sm text-center "><Button onClick={Load} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Fetch and display data from an API here
                    </Button></p>
                {!Apitasks.length ? (<p className="text-2xl font-bold text-center mb-4">No Task to Display</p>) : (
                    Apitasks.map(Apitask => (
                    <Card
                    className="text-gray-500 rounded-3xl grid md:grid-cols-2 lg:grid-cols-3 gap-4 dark:text-gray-400"
                    key={Apitask.id}
                    Apitask={Apitask}
                    ontoggle={toggleTask}
                    onDelete={deleteTask}
                    addtask={addTask}/>
                    ))
                   
                )}
                
            </div>
            </main>
            <Footer />
        </div>
    )
}