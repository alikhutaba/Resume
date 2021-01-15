import React from "react";
import "./Project.css";

export default function Project(props) {
    const { name, details, projectLink, pic } = props;

    return (
        <div className="row project">
            <div className="col-sm-4 project-detials">
                <h5>{name}</h5>

                {details.map((value, indx) => (
                    <p key={indx}>{value}</p>
                ))}

                <button style={projectLink === undefined ? { display: "none" } : { display: "block" }} onClick={() => window.open(projectLink, '_blank', 'noopener,noreferrer')} type="button" className="btn btn-outline-danger">Website</button>

            </div>

            <div className="col-sm-8 project-pic">

                {projectLink === undefined ? (

                    <div className="image">

                        <img src={pic} alt="sorting project" className="project-img"></img>

                        <div className="overlay">
                            <div className="text"></div>
                        </div>
                    </div>

                ) : projectLink !== undefined ? (

                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        <div className="image">

                            <img src={pic} alt={name} className="project-img"></img>

                            <div className="overlay">
                                <div className="text">Website</div>
                            </div>
                        </div>
                    </a>

                ) : null}
            </div>

        </div >
    );
}
