import React from 'react';
import { useLocation } from 'react-router-dom';

function Contact() {
    const location = useLocation();
    const item = location.state?.item;

    return (
        <div className="container">
            {item && (
                <div>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            )}
        </div>
    );
}

export default Contact;