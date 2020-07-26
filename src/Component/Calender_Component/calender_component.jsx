import * as React from 'react';
import * as ReactDOM from 'react-dom';
import moment from 'moment/moment.js';
import './calander_component.scss';

import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.data = [];

        this.props.dates.map((item, index) => {
            let startDatefromdata = item.start_time;
            let endDatefromdata = item.end_time;
            let startdatemodified = Datasplit(startDatefromdata);
            let enddatemodified = Datasplit(endDatefromdata);
            let obj = {};
            obj['StartTime'] = startdatemodified;
            obj['EndTime'] = enddatemodified;
            obj['Subject'] = this.props.user;
            obj['Id'] = index;

            this.data.push(obj);

            console.log(startdatemodified, enddatemodified);

            function Datasplit(sedata) {
                let startDateTime = sedata.split(" ");
                let startTime = startDateTime[startDateTime.length - 1];
                startDateTime.pop();
                let startDate = startDateTime.join(' ');
                let momentObject = moment(startTime, "hh:mm A");
                let dateObject = new Date(startDate);
                let date = dateObject.getDate();
                let month = dateObject.getMonth();
                let year = dateObject.getFullYear();
                let hours = parseInt(momentObject.format("HH"));
                let minutes = parseInt(momentObject.format("mm"));
                let splittedstartdate = new Date(year, month, date, hours, minutes);
                return splittedstartdate;
            }
        });


    }
    render() {
        return <ScheduleComponent height='550px' selectedDate={new Date(2020, 2, 1)} eventSettings={{ dataSource: this.data }}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>;
    }
}

export default Calender;