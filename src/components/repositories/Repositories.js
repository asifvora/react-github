'use strict';

import React, { Component } from "react";
import { connect } from "react-redux";
import RepositoryItem from './RepositoryItem';
import { noRecordFound, spinnerLoader } from '../common/index';

class Repositories extends Component {

    constructor(props) {
        super(props);
    }

    renderRepositories(repositories, filter) {
        return repositories
            .filter(repository => {
                return !filter ||
                    (repository.name && repository.name.toLowerCase().includes(filter)) ||
                    (repository.description && repository.description.toLowerCase().includes(filter));
            })
            .sort((a, b) => Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
            .map(repository => <RepositoryItem key={repository.id} repository={repository} />);
    }

    render() {
        let { isLoading, isSuccess, repositories = [] } = this.props.repositories;
        let { filter } = this.props;

        return (
            <ul className="list-unstyled">
                {isLoading && spinnerLoader()}
                {isSuccess && repositories.length > 0 ? this.renderRepositories(repositories, filter.toLowerCase()) : noRecordFound()}
            </ul>
        );
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(Repositories);
