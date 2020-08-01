import React, { Component } from "react";
import Films from "../Films";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css";

class App extends Component {
    onSubmit = () => {};
    handleSubmit = () => {};

    render() {
        return (
            <Router>
                <div>
                    <p className="films-analysis-service">
                        Films Analysis Service
                    </p>

                    <form id="input-form" onSubmit={this.handleSubmit}>
                        <textarea id="input-box">kill me</textarea>
                        <input></input>
                    </form>

                    {/* 
                    TODO Navigate to the Films component, passing in the director name that was entered into the director name input box.
                    This must be implemented as a Form. 
                    The id of the form must be "input-form".
                    The id of the director name input box must be "input-box".
                    Note we use <div> below for display purposes only.
                    */}
                    <div className="director-name-input-box">
                        <span className="enter-director-name">
                            Enter director name
                        </span>
                    </div>
                    <div onClick={this.onSubmit} className="submit-button">
                        <span className="submit-button-text">SUBMIT</span>
                    </div>
                    <Route exact path="/films" component={Films} />
                </div>
            </Router>
        );
    }
}

export default App;