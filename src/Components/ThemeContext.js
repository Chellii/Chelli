import React, { createContext, useState, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        console.log("is dark mode 1 ",!isDarkMode)
        setIsDarkMode(prevMode => !prevMode)
    }

    useEffect(() => {
        const body = document.querySelector('body')
        if (body) {
            if (isDarkMode)
                body.classList.add('dark-theme')
            else
                body.classList.remove('dark-theme')
        }
    }, [isDarkMode])

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext