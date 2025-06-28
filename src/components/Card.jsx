import React from 'react'
import Button from './Button'

export default function Card({ Apitask, ontoggle, onDelete, addTask}) {
    return (
        <div className='flex text-center items-center mb-4 justify-between w-full'>
            <div className='text-2xl bg-gray-100 text-black capitalize max-w-fit'>
               <h3 className="text-3xl font-bold text- mb-4"> {Apitask.id}. {Apitask.title} </h3> 
            </div>
            <div className="line-through bg-gray-zinc shadow-lg rounded-lg px-4 gap-4 flex">
                <Button 
                variant="primary" 
                size="lg"
                onClick={()=>ontoggle(Apitask.id)}
                aria-label="on toggle"
                > complete </Button>

                <Button 
                variant="danger"
                size="lg"
                onClick={()=>onDelete(Apitask.id)}
                aria-label="Delete task"> Delete </Button>
                
            </div>
        </div>
    )
}