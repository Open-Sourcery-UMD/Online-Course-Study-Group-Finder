import React, { useState, useEffect } from 'react';
import './StartPage.css'
import {Link} from "react-router-dom";
import supabase from '../supabase-client';

const StartPage = () => {
    return (
        <div className='StartPage'>
            </header> 
            <div>
                <Link to="/home">
                    <button>Get Started!</button>
                </Link>
            </div>
        </div>  
    );
}

export default StartPage;
