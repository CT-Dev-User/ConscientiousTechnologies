import React from 'react';
import './techpopup.css';

const CustomPopup = ({ logos, onClose, position }) => {
    return (
        <div className="custom-popup" style={{ top: position.top, left: position.left }}>
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="logos">
                    {logos.map((logo, index) => (
                        <div key={index} className='logo-item'>
                            <img src={logo.logo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomPopup;
