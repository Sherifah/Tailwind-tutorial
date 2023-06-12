import React from "react";
import SideBar from "./Components/SideBar";
import Recipes from "./Components/Recipes";
import TopNavBar from "./Components/TopNavBar";


const App = () => {
    return (
        <div className="App text-gray-600 font-body">
           <SideBar />
           <main className="main px-16 py-6 bg-gray-100 ">
                <TopNavBar />
                <Recipes />
            </main> 
        </div>
    )
}

export default App;
