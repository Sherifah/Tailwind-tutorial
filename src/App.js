import React from "react";
import SideBar from "./Components/SideBar";
import Recipes from "./Components/Recipes";
import TopNavBar from "./Components/TopNavBar";


const App = () => {
    return (
        <div className="App text-gray-600 font-body grid md:grid-cols-3">
            <div className="md:col-span-1 md:flex md:justify-end">
                <SideBar />
            </div>
           
           <main className="main px-16 py-6 bg-gray-100 md:col-span-2">
                <TopNavBar />
                <Recipes />
            </main> 
        </div>
    )
}

export default App;
