'use strict';

import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { isSuccess, user } = this.props.user;
        let { organizations = [] } = this.props.organizations;

        return (
            <div>
                {isSuccess && user && <div className="user border-bottom">
                    <img
                        src={user.avatar_url} width="230" height="230"
                        className="img-rounded img-responsive"
                        alt="User Avatar" />
                    <h1 className="vcard-names">
                        <span className="p-name vcard-fullname d-block overflow-hidden">{user.name}</span>
                        <span className="p-nickname vcard-username d-block">{user.login}</span>
                    </h1>
                    <div className="p-note user-profile-bio">
                        <div>{user.bio}</div>
                    </div>
                </div>
                }
                {organizations && organizations.length > 0 && <div className="border-top py-3 clearfix border-bottom">
                    <h2 className="mb-1 h4">Organizations</h2>
                    {organizations.map(org => (
                        <img
                            key={org.id}
                            src={org.avatar_url}
                            alt="Organization Avatar"
                            data-tip={org.login} height={35} width={35} className="avatar"
                        />
                    ))}
                </div>
                }
                {isSuccess && user && <div className="border-bottom">
                    <span>
                        <small>Repositories</small>
                        <h2>{user.public_repos}</h2>
                        <small>Followers</small>
                        <h2>{user.followers}</h2>
                        <small>Following</small>
                        <h2>{user.following}</h2>
                    </span>
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(Profile);
