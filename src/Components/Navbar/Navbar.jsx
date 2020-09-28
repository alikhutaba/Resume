import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const ScreenWidthChange = 850;
class Navbar extends React.Component {
  state = { isClose: true };

  componentDidMount() {
    document.addEventListener("scroll", this.handleScrollEvent);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScrollEvent);
  }

  handleScrollEvent() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset >= window.innerHeight) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  handleSetActive(id) {
    if (
      window.innerWidth > ScreenWidthChange &&
      id === "nav-Main" &&
      !this.state.isClose
    ) {
      this.setState({ isClose: !this.state.isClose });
    }
  }

  handleSetInactive(id) {
    if (
      window.innerWidth > ScreenWidthChange &&
      id === "nav-Main" &&
      this.state.isClose
    ) {
      this.setState({ isClose: !this.state.isClose });
    }
  }

  handleUserClick = (e) => {
    if (window.innerWidth <= ScreenWidthChange) {
      this.setState({ isClose: !this.state.isClose });
    }
  };

  toggleHamburgerIconClass = (e) => {
    this.setState({ isClose: !this.state.isClose });
  };

  render() {
    return (
      <div id="navbar" className="navbar">
        {/* -----------------------hamburger icon----------------------------- */}
        <div className="hamburger-menu">
          <div
            id="hamburger-icon"
            className={this.state.isClose ? "" : "open"}
            onClick={this.toggleHamburgerIconClass}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* -------------------------Main------------------------------ */}
        <nav
          className="nav-menu"
          style={
            this.state.isClose ? { display: "none" } : { display: "block" }
          }
        >
          <div id="nav-Main">
            <Link
              activeClass="active"
              to="Main"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={() => this.handleSetActive("nav-Main")}
              onSetInactive={() => this.handleSetInactive("nav-Main")}
            ></Link>
          </div>

          {/* -------------------------menu------------------------------ */}

          <Link
            activeClass="active"
            to="Profile"
            spy={true}
            smooth={true}
            duration={500}
            onClick={this.handleUserClick}
          >
            <div className="nav-item">
              <div className="title">Profile </div>
            </div>
          </Link>

          <Link
            activeClass="active"
            to="Experiences"
            spy={true}
            smooth={true}
            duration={500}
            onClick={this.handleUserClick}
          >
            <div className="nav-item">
              <div className="title">Experiences</div>
            </div>
          </Link>

          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            duration={500}
            onClick={this.handleUserClick}
          >
            <div className="nav-item">
              <div className="title">Skills</div>
            </div>
          </Link>

          <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            duration={500}
            onClick={this.handleUserClick}
          >
            <div className="nav-item">
              <div className="title">Projects</div>
            </div>
          </Link>

          <Link
            activeClass="active"
            to="Volunteer"
            spy={true}
            smooth={true}
            duration={500}
            onClick={this.handleUserClick}
          >
            <div className="nav-item">
              <div className="title">Volunteer</div>
            </div>
          </Link>

          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={this.handleUserClick}
          >
            <div className="nav-item">
              <div className="title">Contact</div>
            </div>
          </Link>
        </nav>
        {/* ------------------------------------------------------- */}
      </div>
    );
  }
}
export default Navbar;
