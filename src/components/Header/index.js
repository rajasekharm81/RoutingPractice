import {Link} from 'react-router-dom'

import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-main-container">
        <div className="logo">
          <img
            className="logoImage"
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
            alt="wave"
          />
          <h1>Wave</h1>
        </div>
        <ul className="HeaderMenu">
          <li>
            <Link to="/">
              <button className="headerButton" type="button">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className="headerButton" type="button">
                About
              </button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className="headerButton" type="button">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default Header
