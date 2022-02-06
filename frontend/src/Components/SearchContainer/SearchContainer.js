import React from 'react';

// CSS
import "../SearchContainer/SearchContainer.css"

// Components
import AddPick from './AddPick/AddPick';
import AddVideo from "./AddVideo/AddVideo"

// Page de la barre search publication
function SearchContainer() {

    // JSX
    return <div>
        {/* Barre container */}
        <ul className='profileScreenTele'>

            {/* Component ajouter img */}
            <AddPick></AddPick>

            {/* Component ajouter video */}
            <AddVideo></AddVideo>

        </ul>
    </div>;
}

export default SearchContainer;
