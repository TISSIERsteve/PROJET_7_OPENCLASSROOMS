import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

// Screen
import HomeScreen from './Screens/HomeScreen'

// CSS
import "./App.css"


function App() {
    return (
        <div className='grid-container'>
            <Router>
                {/* Header */}
                <header>
                    <nav>
                        <Link to="/">Accueil</Link>
                    </nav>
                </header>

                {/* Main */}
                <main>
                    <Routes>
                        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
                    </Routes>
                </main>

                {/* Footer */}
                <footer>
                    <div>
                        <h2>Footer</h2>
                    </div>
                </footer>
            </Router>
        </div>
    )
}

export default App
