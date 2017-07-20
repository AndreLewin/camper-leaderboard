import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import { Grid, Row, Col } from 'react-bootstrap';


function UserList(props) {
    const users = props.users;
    const listItems = users.map(function(user, index) {
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{user.username}   <!-- TODO Add picture --></td>
                <td>{user.recent}</td>
                <td>{user.alltime}</td>
            </tr>
        );
    });

    return <tbody>{listItems}</tbody>;
}

class Leaderboard extends React.Component {
    constructor() {
        super();
        this.state = {
            json: [],
        };
    }

    componentDidMount() {
        const urlTop100last30days = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
        <!-- TODO fetch all time score -->
        // Note: The JSON is already sorted on points. The app will only present and have no sorting logic.
        fetch(urlTop100last30days).then(res => res.json()).then(value => this.setState({json: value}));
    };

    render() {
        // console.log(this.state.json); // null for the first rendering: no data or fetching not finished
        <!-- TODO Switch button -->
        return  (
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Camper Name</th>
                        <th>Points in past 30 days</th>
                        <th>All time points</th>
                    </tr>
                    </thead>
                    <UserList users={this.state.json} />
                </table>
            </div>
        );
    }
}


function App() {
    return (
        <div>
            <h1 className="title">Camper Leaderboard</h1>
            <Leaderboard />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);