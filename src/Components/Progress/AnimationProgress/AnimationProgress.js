import React from "react";
import "./AnimationProgress.css";


export default function AnimationProgress() {
    return (
        <div className="progress animation-progress" style={{ height: "25px" }}>
            <div className="progress-bar animation-progress-bar">
                <div className="progress-text"> Self Learning - 100%</div>
            </div>
        </div>
    );
}
