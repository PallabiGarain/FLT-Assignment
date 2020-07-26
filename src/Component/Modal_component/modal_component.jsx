
import React, { useState } from 'react';
import Datetime from 'react-datetime';

import './model.component.scss'

function Modal_component({ start_time, end_time }) {
    const startdate = Date.parse(start_time);
    return (
        <>
            <div className="date-show-wrapper">
                <div className='start-date'>
                    <label className='startlabel'>Start Date:</label>
                    <div className='start-time'>{start_time}</div>
                </div>
                <div className='end-date'>
                    <label className='endlabel'>End Date:</label>
                    <div className='end-time'>{end_time}</div>
                </div>
                <br></br>
            </div>
        </>

    )
}

export default Modal_component;