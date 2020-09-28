import React from "react";
import "./skill.css";

class Main extends React.Component {
  render() {
    const { name, percent } = this.props;
    return (
      <div className="row skill">
        <span className="col-sm-1"></span>

        <span className="col-sm-4 skill-name">{name}</span>
        <span className="col-sm-6 skill-progress">
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: percent + "%" }}
            ></div>
          </div>
        </span>
        <span className="col-sm-1"></span>
      </div>
    );
  }
}
export default Main;
