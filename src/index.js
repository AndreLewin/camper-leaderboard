import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import { Grid, Row, Col } from 'react-bootstrap';

const urlTop100last30days = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
const urlTop100alltime = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";


function SwitchButton(props) {
    return (
        <button onClick={props.onClick}>
            Switch to {props.allTime ? "last 30 days ranking" : "all time ranking"}
        </button>
    );
}

function UserList(props) {
    const users = props.users;
    const listItems = users.map(function(user, index) {
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td><img src={user.img} className="profilePicture" alt="Profile of this user"/>   {user.username}</td>
                <td>{user.recent}</td>
                <td>{user.alltime}</td>
            </tr>
        );
    });

    return <tbody>{listItems}</tbody>;
}

// TODO : Separate container from presentation
class Leaderboard extends React.Component {
    constructor() {
        super();
        this.state = {
            allTime: false,
            json: [],
        };

    }

    componentDidMount() {
        // Note: The JSON is already sorted on points. The app will only present and have no sorting logic.
        fetch(urlTop100last30days).then(res => res.json()).then(value => this.setState({allTime: false, json: value}));
    };


    // If click on a trigger, change the value of this.state.json and this.state.allTime
    handleClick() {
        console.log(this.state.allTime + " dans handleClick, il devient l'inverse");
        if (this.state.allTime) {
            fetch(urlTop100last30days).then(res => res.json()).then(value => this.setState({allTime: false, json: value}));
        } else {
            fetch(urlTop100alltime).then(res => res.json()).then(value => this.setState({allTime: true, json: value}));
        }
    }


    render() {
        // console.log(this.state.json); // null for the first rendering: no data or fetching not finished
        /* TODO Transform SwitchButton to underlined category headers */
        return  (
            <div className="container">
                <SwitchButton allTime={this.state.allTime} onClick={() => this.handleClick()}/>
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