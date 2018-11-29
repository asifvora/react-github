'use strict';

import React, { Component } from "react";
import { Card } from "primereact/components/card/Card";
import { Button } from "primereact/components/button/Button";
import { InputText } from "primereact/components/inputtext/InputText";
import { withRouter } from "react-router-dom";
class Home extends Component {

    constructor() {
        super();
        this.state = {
            username: null,
            error: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let { username } = this.state;
        if (username) {
            this.props.history.push(`/github/${username}`);
        } else {
            this.setState({ error: 'Username is required.' })
        }
    }

    render() {
        let { error } = this.state;

        return (
            <form className="container home">
                <Card title="Github account" className="ui-card-shadow">
                    <div className="ui-inputgroup">
                        {/* <span className="ui-inputgroup-addon"><i className="fa fa-user"></i></span> */}
                        <InputText
                            ref="username"
                            placeholder="Username"
                            onChange={(e) => this.setState({ username: e.target.value, error: null })}
                        />
                        <Button label="Go" icon="fa fa-check" onClick={this.handleClick} />
                    </div>
                    <p className="error">{error && error}</p>
                </Card>
            </form>
        );
    }
}
export default withRouter(Home);