import React from 'react'
import { useState, useEffect } from 'react'
import Button from './Button'

export default function SwitchTheme() {
    const [dark, setDark] = useState(()=>{
        const theme = localStorage.getItem('theme')
        return theme === 'dark'
    })

    useEffect(()=>{
        const root = window.document.documentElement
        if (dark){
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }else{
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')

        }
    }, [dark])

    const toggletheme = ()=>{
        setDark(!dark)
    }
    return (
        <div>
            <Button 
                onClick={()=>toggletheme()}>
                {dark ? '🌙 Dark' : '☀️ Light'}
            </Button>
        </div>
    )
}