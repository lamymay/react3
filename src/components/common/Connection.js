import React from 'react';

class Connection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            control: "http://",
            host: "127.0.0.1",
            port: 80,
            prefixUrl: this.state.control + this.state.host + this.state.port
        }
    }

    //{
    //     control: "http://",
    //     host: "127.0.0.1",
    //     port: 80,
    //     prefixUrl: this.state.control + this.state.host + this.state.port
    //
    // }

    render() {
        return (<div>

            <h1>欢迎|Connection</h1>

        </div>)
    }
}

export default Connection;
