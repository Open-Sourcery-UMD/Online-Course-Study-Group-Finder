import React from 'react';
import './StartPage.css'
import {Link} from "react-router-dom";

const StartPage = () => {

    return (
        <div className='StartPage'>

            <Link to="/home">
                <button>Get Started!</button>
            </Link>

        </div>
    );
}

export default StartPage;