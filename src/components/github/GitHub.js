'use strict';

import React, { Component } from "react";
import { TabView, TabPanel } from 'primereact/components/tabview/TabView';
import { Profile } from '../profile';

class GitHub extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { username } = this.props.match.params

        return (
            <div className="container">
                <div className="content-wrapper" style={{ padding: '3em 11em 1em 11em' }}>
                    <div className="ui-g">
                        <div className="ui-g-3">
                            <Profile username={username} />
                        </div>
                        <div className="ui-g-9">
                            <TabView>
                                <TabPanel header="Repositories">
                                    {/* <RepositoryFilter onUpdate={this.handleRepoFilterUpdate} placeholder="Search repositories…" />
                                    <Repositories filter={repoFilter} username={username} /> */}
                                </TabPanel>
                                <TabPanel header="Stars" >
                                    {/* <RepositoryFilter onUpdate={this.handleStarFilterUpdate} placeholder="Search starred repositories…" />
                                    <Stars filter={starFilter} username={username} /> */}
                                </TabPanel>
                                <TabPanel header="Followers">
                                    {/* <Followers username={username} /> */}
                                </TabPanel>
                                <TabPanel header="Following">
                                    {/* <Following username={username} /> */}
                                </TabPanel>
                            </TabView>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GitHub;