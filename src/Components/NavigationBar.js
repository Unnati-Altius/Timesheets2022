import React from 'react'
import '../Styles/Navigation.css'

export default function NavigationBar() {
  return (
    <div>
      <nav className ="color-nav navbar navbar-expand-lg ">
        <div className ="container-fluid">
          <a className ="navbar-brand" style={{color: 'white'}} href="#">Admin Dashboard</a>
          <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className ="navbar-toggler-icon"></span>
          </button>
          <div className ="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className ="nav-text navbar-nav me-auto mb-2 mb-lg-0">
              <li className ="nav-item">
                <a className ="nav-link active" style={{color: "rgb(6, 69, 69)"}} aria-current="page" href="#">Contractors</a>
              </li>
              <li className ="nav-item">
                <a className ="nav-link" href="#">Field1</a>
              </li>
              <li className ="nav-item">
                <a className ="nav-link" href="#">Field2</a>
              </li>
              <li className ="nav-item">
                <a className ="nav-link" href="#">Field3</a>
              </li>
              <li className ="nav-item">
                <a className ="nav-link" href="#">Field4</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

