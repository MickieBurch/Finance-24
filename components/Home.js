import React from "react";
import '../index.css';

export default function Home() {
    return (
        <div className="landing-page-container bg-image"> {/* This holds the background in the css */}
           <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center"> {/* Center the content horizontally */}
                        <h1 className="intro-header">
                            Where ideas become tangible.
                        </h1>
                        <div className="button-container">
                            <button>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
