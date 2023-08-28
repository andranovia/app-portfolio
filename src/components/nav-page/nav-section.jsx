import  { Component } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredItem: null,
    };
  }

  handleItemHover = (index) => {
    this.setState({ hoveredItem: index });
  };

  render() {
    const { hoveredItem } = this.state;

    return (
      <div className="n-wrapper" id="Navbar">
        <div className="n-left">
          {/* Content for the left side */}
        </div>

        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li
                onMouseEnter={() => this.handleItemHover(0)}
                onMouseLeave={() => this.handleItemHover(null)}
                className={hoveredItem === 0 ? "hovered" : ""}
              >
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li
                onMouseEnter={() => this.handleItemHover(1)}
                onMouseLeave={() => this.handleItemHover(null)}
                className={hoveredItem === 1 ? "hovered" : ""}
              >
                <Link to="services" spy={true} smooth={true}>
                  About
                </Link>
              </li>
              <li
                onMouseEnter={() => this.handleItemHover(2)}
                onMouseLeave={() => this.handleItemHover(null)}
                className={hoveredItem === 2 ? "hovered" : ""}
              >
                <Link to="works" spy={true} smooth={true}>
                  Experience
                </Link>
              </li>
              <li
                onMouseEnter={() => this.handleItemHover(3)}
                onMouseLeave={() => this.handleItemHover(null)}
                className={hoveredItem === 3 ? "hovered" : ""}
              >
                <Link to="portfolio" smooth={true}>
                  Services
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default Navbar;
