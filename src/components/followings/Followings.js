'use strict';

import React, { Component } from "react";
import { connect } from "react-redux";
import FollowingItem from './FollowingItem';
import { noRecordFound, spinnerLoader } from '../common/index';

class Followings extends Component {

    constructor(props) {
        super(props);
    }

    renderFollowing(following) {
        return following
            .map(followingUser => <FollowingItem key={followingUser.id} following={followingUser} />);
    }

    render() {
        let { isLoading, isSuccess, followings = [] } = this.props.followings;

        return (
            <ul className="list-unstyled">
                {isLoading && spinnerLoader()}
                {isSuccess && followings.length > 0 ? this.renderFollowing(following) : !isLoading && noRecordFound()}
            </ul>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(Followings);