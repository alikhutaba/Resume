import React from "react";
import "./Language.css";

export default function Language(props) {
    const { name, percent, level } = props;
    return (
        <div className="col-sm-4">
            <div className="row language">
                <span className="col-sm-1"></span>
                <span className="col-sm-3 language-name">{name}</span>
                <span className="col-sm-7 language-progress-div">
                    <div className="progress language-progress ">
                        <div className="progress-bar" style={{ width: percent + "%" }}>
                            {level}
                        </div>
                    </div>
                </span>
                <span className="col-sm-1"></span>
            </div>
        </div>
    );
}
