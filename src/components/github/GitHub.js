'use strict';

import { TabView, TabPanel } from 'primereact/components/tabview/TabView';
import React, { Component } from "react";
import { connect } from "react-redux";
import {
    getUserData,
    getOrgs,
    getFollowers,
    getFollowings,
    getRepositories,
    getStarts
} from '../../actions/GitHub';
import { Profile } from '../profile';
import { Repositories, RepositoryFilter } from '../repositories';
import { Stars } from '../stars';
import { Followers } from '../followers';
import { Followings } from '../followings';

class GitHub extends Component {

    constructor(props) {
        super(props);
        this.state = { repoFilter: '', starFilter: '' };
        this.handleRepoFilterUpdate = this.handleRepoFilterUpdate.bind(this);
        this.handleStarFilterUpdate = this.handleStarFilterUpdate.bind(this);
    }

    componentDidMount() {
        let { dispatch, match: { params: { username } } } = this.props;
        dispatch(getUserData(username));
        dispatch(getOrgs(username));
        dispatch(getFollowers(username));
        dispatch(getFollowings(username));
        dispatch(getRepositories(username));
        dispatch(getStarts(username));
    }

    handleRepoFilterUpdate(repoFilter) {
        this.setState({ repoFilter })
    }

    handleStarFilterUpdate(starFilter) {
        this.setState({ starFilter })
    }

    render() {
        let { repoFilter, starFilter } = this.state;

        return (
            <div className="container">
                <div className="content-wrapper" style={{ padding: '3em 11em 1em 11em' }}>
                    <div className="ui-g">
                        <div className="ui-g-3 profile-side">
                            <Profile />
                        </div>
                        <div className="ui-g-9 details-side">
                            <TabView>
                                <TabPanel header="Repositories">
                                    <RepositoryFilter onUpdate={this.handleRepoFilterUpdate} placeholder="Search repositories…" />
                                    <Repositories filter={repoFilter} />
                                </TabPanel>
                                <TabPanel header="Stars" >
                                    <RepositoryFilter onUpdate={this.handleStarFilterUpdate} placeholder="Search starred repositories…" />
                                    <Stars filter={starFilter} />
                                </TabPanel>
                                <TabPanel header="Followers">
                                    <Followers />
                                </TabPanel>
                                <TabPanel header="Following">
                                    <Followings />
                                </TabPanel>
                            </TabView>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(GitHub);