import React from 'react';
import welcome from '../../images/marginalia-welcome.png';


export default function Welcome() {
    return (
        <div className="welcome">
            <h1>Welcome to [aI pi eI]</h1>
            <h2>Immersive IPA learning blah blah</h2>
            <img src={welcome} alt="person waving" />
            <p>
                Some text about what the app does. 
                ajsklj andak ajskl akslna aksnda ajksjl.
                To begin, create a new user accout, log in,
                or test with a demo account. 
                Let the learning begin!
            </p>
        </div>
    );
}