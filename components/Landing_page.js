import React from "react";
import '../index.css';
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page-container bg-image">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="intro-header">
            Finances Elevated, Goals Conquered.
            </h1>
            <div className="button-container">
              <Link to="/Home" className="linkButton">Learn More!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
