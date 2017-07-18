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


function Leaderboard() {
    return (
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
    )
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