import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import HomeScreen from "./Screens/HomeScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import AccountScreen from "./Screens/AccountScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import PersoProfileScreen from "./Screens/PersoProfileScreen";


function App() {

    // Ajoute la date du jour
    let jour = new Date().toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });

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
                        <Route path="/ProfileScreen" element={<ProfileScreen></ProfileScreen>}></Route>
                        <Route path="/PersoProfileScreen" element={<PersoProfileScreen></PersoProfileScreen>}></Route>
                    </Routes>
                </main>

                <footer>
                    <div className="piedPage">
                        <h2>Tout droits réservé GROUPOMANIA ®-2022-</h2>
                    </div>
                    <div className='profileScreenDate'>
                        {jour}
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
