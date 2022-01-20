import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import AccountScreen from "./Screens/AccountScreen";


function App() {
    return (
        <Router>
            <div className="grid-container">
                <header>
                    <div className="entete">
                        <h1>GROUPOMANIA</h1>
                    </div>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/RegistrationScreen" element={<RegistrationScreen />} />
                        <Route path="/AccountScreen" element={<AccountScreen />}></Route>
                    </Routes>
                </main>

                <footer>
                    <div className="entete">
                        <h2>Tout droits réservé GROUPOMANIA ®-2022-</h2>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
