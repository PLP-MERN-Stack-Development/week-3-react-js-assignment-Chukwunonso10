import  { Link } from 'react-router-dom'
import Button from './Button'
import SwitchTheme from './themeSwitcher'

export default function Navbar() {

    return (
         <header className="bg-white dark:bg-gray-800 shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
                    <div className='flex gap-24 underline'>
                       <SwitchTheme />
                        <Button variant='secondary'>
                            <Link to="/Dashboard">Dashbaord</Link>
                        </Button>

                        <Button variant='secondary'>
                            <Link to="/Home">Homepage</Link>
                        </Button>

                        <Button variant='secondary'>
                            <Link to="/tasks">Tasks</Link>
                        </Button>  
                    </div>
                    <h1 className="text-3xl font-bold text-center">
                        PLP Task Manager
                    </h1>
                </div>
        </header>






    )
}