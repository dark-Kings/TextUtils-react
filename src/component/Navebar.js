

import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


// 1) components

// export default function Navebar() {
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

//             <form className="d-flex navbar-nav me-auto mb-2 mb-lg-0" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }

//2) props

export default function Navebar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
                <a className="nav-link" href="#">{props.about}</a>
              </li>
            </ul>

            {/* <form className="d-flex navbar-nav me-auto mb-2 mb-lg-0" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success my-1 mx-2" type="submit">Search</button>
              </form> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}   me-auto`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label mx-4" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navebar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
}

Navebar.defaultProps = {
  title: "set title here",
  about: "About text here",
  mode: "light"
}

