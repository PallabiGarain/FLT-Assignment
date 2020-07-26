import React from 'react';

class show_data_new extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <>
                <tr>
                    <td className='name_style'> {this.props.real_name}</td>
                    <td className='name_style'> {this.props.tz}</td>
                </tr>

            </>

        );
    }
}

export default show_data_new;