import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";

// Components
import AddPickItem from "./Components/SearchContainer/AddPick/AddPickItem";
import AddVideoItem from "./Components/SearchContainer/AddVideo/AddVideoItem";

// Screens
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import AccountScreen from "./Screens/AccountScreen/AccountScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import PersoProfileScreen from "./Screens/PersoProfileScreen/PersoProfileScreen";

function App() {
    Axios.defaults.headers.common.Authorization = localStorage.bearer;

    // Ajoute la date du jour
    let jour = new Date().toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
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
                        <Route
                            path="/RegistrationScreen"
                            element={<RegistrationScreen />}
                        />
                        <Route path="/AccountScreen" element={<AccountScreen />} />
                        <Route path="/ProfileScreen" element={<ProfileScreen />} />
                        <Route
                            path="/PersoProfileScreen"
                            element={<PersoProfileScreen />}
                        />
                        <Route path="/AddPickItem" element={<AddPickItem />} />
                        <Route path="/AddVideoItem" element={<AddVideoItem />} />
                    </Routes>
                </main>

                <footer>
                    <div className="piedPage">
                        <h2>Tout droits réservé GROUPOMANIA ®-2022-</h2>
                    </div>

                    {/* Heure */}
                    <div className="profileScreenDate">
                        {jour}
                    </div>
                </footer>
            </div>
        </Router>
    );
}
export default App;
