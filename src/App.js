import React, { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
// import About from './component/About';
import Navebar from './component/Navebar';
import TextForm from './component/TextForm';



// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">TextUtils</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/">About</a>
//               </li>
//             </ul>
//             </div>
//             <div>
//             <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// 2) component use
// function App() {
//   return (
//       <Navebar/>
//   );
// }

//3) prop use 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - dark Mode";

      // to keep changing title ---------------
      // setInterval(() => {
      // document.title="TextUtils is great";
      // }, 2000);  
      // setInterval(() => {
      //   document.title="TextUtils download now";
      //   }, 1500);

      // -------------------------------      
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - light Mode"
    }
  }
  return (
    <>
      {/* <Navebar/> */}
      <Navebar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter the text to analyze below:" mode={mode} showAlert={showAlert} />
      {/* <div className="container">
        <Router>
          <Navebar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below:" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>

      </div> */}
    </>
  );
}

export default App;
