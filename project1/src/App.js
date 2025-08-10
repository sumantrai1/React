// import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
// import React, {useState} from "react";

function App() {

  // const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    
 <Navbar title="TextUtils" aboutText= "About us"  />

 <div className="container my-3">
     <TextForm heading="Enter the text to analyze"/>
     {/* <About/> */}
 </div>



    </>
  )
}

export default App
