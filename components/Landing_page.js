import React from "react";
import '../index.css';
import { Link } from "react-router-dom";
import Navigation from "./nav";

export default function LandingPage() {
  return (
    <div className="landing-page-container bg-image">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="intro-header">
              Where your goals become reality
            </h1>
            <div className="button-container">
              <Link to="/signup">Start Now!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
