import React from 'react';
import { Link } from "react-router-dom";

// funcctional components

function HomePage() {
    return (
    <div className="jumbotron">
        <h1>Gu gu gaga </h1>
        <p>React and Flux</p>
        <Link to="about" className="btn btn-primary">
            About
        </Link>
    </div>
    );
}

export default HomePage;
