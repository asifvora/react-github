'use strict';

import React, { Component } from "react";
import { Card } from "primereact/components/card/Card";
import { Button } from "primereact/components/button/Button";
import { InputText } from "primereact/components/inputtext/InputText";

class Home extends Component {

    constructor() {
        super();
        this.state = {
            username: null,
            error: null
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        let {username}=this.state;
        if(username){
            this.props.history.push(`/github/${username}`);
        }else{
            this.setState({error:'Username is required.'})
        }
    }

    render() {
        let {error}=this.state;

        return (
            <form className="container home">
                <Card title="Github account" style={{width: '360px', left: '100px', top: '200px'}}
                      className="ui-card-shadow">
                    <div className="ui-inputgroup">
                        <span className="ui-inputgroup-addon"><i className="fa fa-user"></i></span>
                        <InputText placeholder="Username" onChange={(e) => this.setState({value: e.target.value,error:null})}/>
                        <Button label="Go" icon="fa-check" onClick={this.handleClick}/>
                    </div>
                </Card>
            </form>
        );
    }
}
export default Home;