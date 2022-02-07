import { Navigate } from "react-router-dom";

// Components
import Aside from "../../Components/Aside/Aside";
import Search from "../../Components/Search/Search";
import ButtonAside from "../../Components/ButtonAside/ButtonAside";
import SearchContainer from "../../Components/SearchContainer/SearchContainer";

// Components
import ProfileScreenItem from "../../Components/ProfileScreenItem/ProfileScreenItem";

// CSS
import "../ProfileScreen/ProfileScreen.css";

// ===== Page principal accueil =====
function ProfileScreen() {

    // Si token j'affiche la page profil 
    if (localStorage.bearer) {
        return (
            <div>
                {/* Component Button Aside */}
                <ButtonAside />

                {/* Component Aside */}
                <div id="open" className="aside_form">
                    <Aside />
                </div>

                {/* Components Search */}
                <div>
                    <Search />
                </div>

                {/* Component Search container */}
                <div className="container">
                    <SearchContainer />
                </div>

                {/*  Partie dynamique messages postés  */}
                <ProfileScreenItem></ProfileScreenItem>
            </div>
        );

        // Sinon pas token return page accueil
    } else {
        return <Navigate to="/" />;
    }

}
export default ProfileScreen;
