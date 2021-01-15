import React from "react";
import "./Card.css";
import { GrLocation } from "react-icons/gr";
import YouTube from 'react-youtube';

export default function Card(props) {

    const { title, subTitle, date, location, details, detailsType, myVideoId } = props;

    return (

        <div className="row card-row">
            <div className="col-sm-4">
                <h4 className="card-name">{title}</h4>
                <p className="card-date">{date}</p>
                <div className="card-location">
                    <GrLocation></GrLocation> {location}
                </div>
            </div>

            <div className="col-sm-8">
                <div className="card-details">
                    <h6 className="card-details-title">{subTitle}</h6>

                    {detailsType === "p" ? (
                        details.map((value, indx) => (
                            <p key={indx} className="par-details">{value}</p>
                        ))
                    ) : detailsType === "li" ? (

                        <ul className="list">
                            {details.map((value, indx) => (
                                <li key={indx}>{value}</li>
                            ))}
                        </ul>

                    ) : null}

                    <div style={myVideoId === "" ? { display: "none" } : {}}>
                        <YouTube className="youtubeVideo" videoId={myVideoId} opts={{ width: '100%' }}></YouTube>
                    </div>
                </div>
            </div>
        </div>
    );
}
