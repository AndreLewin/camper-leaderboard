import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { Grid, Row, Col } from 'react-bootstrap';

/*
class Input extends React.Component {
    render() {
        return (
            <FormGroup>
                <label htmlFor="markdownInputTextArea">Markdown input:</label>
                <FormControl componentClass="textarea" id="markdownInputTextArea" className="inputField" placeholder="Write your markdown text here"/>
            </FormGroup>
        );
    }
}

class Output extends React.Component {
    render() {
        return (
            <div>
                <p>Preview:</p>
                <p dangerouslySetInnerHTML={{__html:this.props.markdown}} />
            </div>
        );
    }
}
*/


class Leaderboard extends React.Component {
    constructor() {
        super();
        this.state = {
            json: [],
        };
    }

    componentDidMount() {
        const urlTop100last30days = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
        fetch(urlTop100last30days).then(res => res.json()).then(value => this.setState({json: value}));
    };

    render() {
        console.log(this.state.json); // null for the first rendering: no data or fetching not finished

        return  (
            <Grid className="Leaderboard">
                <Row className="rowFlex">
                    <Col xs={3} className="well colFlex">
                        /* Rank */
                    </Col>
                    <Col xs={3} className="well colFlex">
                        /* Camper Name */
                    </Col>
                    <Col xs={3} className="well colFlex">
                        /* Points in the last 30 days */
                    </Col>
                    <Col xs={3} className="well colFlex">
                        /* All time points */
                    </Col>
                </Row>
            </Grid>
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