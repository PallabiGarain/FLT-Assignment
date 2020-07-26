import React, { useState } from 'react';

import Modal from 'react-modal';
import './data.scss';
import Modal_component from './Modal_component/modal_component';
import Calender from './Calender_Component/calender_component';

import Datetime from 'react-datetime';

function Showdata({ real_name, tz, activity_periods, index }) {

    const [modalisOpen, setModalisOpen] = useState(false);
    const [showCalender, setShowCalender] = useState(false);
    return (
        <>
            <tr className='table-row-data' onClick={() => setModalisOpen(true)}>
                <td className='name_style_index'> {index}</td>
                <td className='name_style'> {real_name}</td>
                <td className='name_style'> {tz}</td>
            </tr>

            <Modal isOpen={modalisOpen} ariaHideApp={false}>
                <button className='cross' onClick={() => setModalisOpen(false)}>X</button>
                {activity_periods.map((item, index) =>
                    <Modal_component key={index} start_time={item.start_time} end_time={item.end_time}></Modal_component>
                )}
                <div className="button-wrapper">
                    <button className='open' onClick={() => setShowCalender(true)}>Show Calender</button>
                    <button className='close' onClick={() => setShowCalender(false)}>Close Calender</button>
                </div>

                {showCalender ?
                    <Calender user={real_name} dates={activity_periods} ></Calender>
                    : ''}
            </Modal>

        </>
    )
}

export default Showdata;