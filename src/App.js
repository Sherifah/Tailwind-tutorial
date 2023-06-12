import React from "react";
import SideBar from "./Components/SideBar";
import Recipes from "./Components/Recipes";
import TopNavBar from "./Components/TopNavBar";


const App = () => {
    return (
        <div className="App text-gray-600">
           <SideBar />
           <main className="main px-16 py-6 ">
                <TopNavBar />
                <Recipes />
            </main> 
        </div>
    )
}

export default App;
