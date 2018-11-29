'use strict';

import React, { Component } from "react";
import { connect } from "react-redux";
import StarItem from './StarItem';
import { noRecordFound, spinnerLoader } from '../common/index';

class Stars extends Component {

    constructor(props) {
        super(props);
    }

    renderStars(stars, filter) {
        return stars
            .filter(star => {
                return !filter ||
                    (star.name && star.name.toLowerCase().includes(filter)) ||
                    (star.description && star.description.toLowerCase().includes(filter));
            })
            .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
            .map(repo => <StarItem key={repo.id} repo={repo} />);
    }

    render() {
        let { isLoading, isSuccess, stars } = this.props.stars;
        let { filter } = this.props;

        return (
            <ul className="list-unstyled">
                {isLoading && spinnerLoader()}
                {isSuccess && stars.length > 0 ? this.renderStars(stars, filter.toLowerCase()) : noRecordFound()}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(Stars);
