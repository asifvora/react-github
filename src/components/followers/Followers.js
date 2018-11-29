'use strict';

import React, { Component } from "react";
import { connect } from "react-redux";
import FollowerItem from './FollowerItem';
import { noRecordFound, spinnerLoader } from '../common/index';

class Followers extends Component {

    constructor(props) {
        super(props);
    }

    renderFollowers(followers) {
        return followers
            .map(follower => <FollowerItem key={follower.id} follower={follower} />);
    }

    render() {
        let { isLoading, isSuccess, followers = [] } = this.props.followers;

        return (
            <ul className="list-unstyled">
                {isLoading && spinnerLoader()}
                {isSuccess && followers.length > 0 ? this.renderFollowers(followers) : !isLoading && noRecordFound()}
            </ul>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(Followers);