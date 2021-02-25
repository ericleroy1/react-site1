import React from 'react';
import Button from './Button';
import './UnitSection.css';
import '../App.css';

function UnitSection() {
    return (
        <div className='unit-container'>
            {/* <video src= ***** autoPlay loop muted /> */}
            <h1>Exciting Destinations</h1>
            <p>Get out there and see the world</p>
            <div className='unit-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    Let's Go
                    </Button>
            </div>
        </div>
    )
}

export default UnitSection
