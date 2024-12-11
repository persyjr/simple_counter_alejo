import React from 'react';

function SimpleCounter({ digitFour, digitThree, digitTwo, digitOne }) {//estoy decostruyendo mis props directamente
    return (
        <div className="bigCounter d-flex justify-content-center w-100">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{digitFour % 10}</div>
            <div className="three">{digitThree % 10}</div>
            <div className="two">{digitTwo % 10}</div>
            <div className="one">{digitOne % 10}</div>
        </div>
    );
}

export default SimpleCounter