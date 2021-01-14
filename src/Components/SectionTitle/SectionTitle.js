import React from "react";
import "./SectionTitle.css";

export default function SectionTitle(props) {
    const { title, quotes, quotesAuthor } = props;
    return (
        <div>
            <h1 className="section-title">{title}</h1>
            <div className="quotes">
                <h5 className="quotes">
                    {quotes}
                </h5>
                <h6 className="quotes">{quotesAuthor}</h6>
            </div>
            <hr></hr>
        </div>
    );
}
