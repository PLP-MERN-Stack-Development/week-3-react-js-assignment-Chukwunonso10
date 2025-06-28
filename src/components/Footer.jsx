import Button from "./Button"
import {Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
                <div className="flex max-w-7xl mx-auto gap-8 py-6 px-4 sm:px-6 lg:px-8">
                    
                        <Link to="/Dashboard">Dashbaord</Link>
                        <Link to="/Home">Homepage</Link>
                        <Link to="/tasks">Tasks</Link>
                <p className="text-center text-gray-500 dark:text-gray-400">
                 © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
                </p>
                </div>
            </footer> 
        </div>
    )
}