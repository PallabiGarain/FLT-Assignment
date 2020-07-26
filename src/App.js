import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Data from './Data/User_data';

import Showdata from './Component/Show_data'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userdata: Data.members
    }
  }
  render() {
    return (
      <div>
        <div className='table-title'>User Data</div>
        <table>
          <thead className='table-heading'>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userdata.map(({ id, ...otherprops }, index) =>
              <Showdata key={id} {...otherprops} index={index + 1}></Showdata>
            )}
          </tbody>
        </table>
      </div>

    );
  }
}


export default App;
