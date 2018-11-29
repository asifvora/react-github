import React from 'react';

export default function FollowerItem({ follower }) {
    return (
        <div className="ui-g border-bottom">
            <div className="ui-g-1" >
                <li className="border-bottom">
                    <span style={{ display: 'inline-block' }}>
                        <img
                            src={follower.avatar_url}
                            className="avatar img-rounded img-responsive"
                            alt="User Avatar" width={50} height={50}
                        />
                    </span>
                </li>

            </div>
            <div className="ui-g-11" style={{ float: 'left', marginTop: '30px' }}>
                <span className="f4 link-gray-dark">{follower.name}</span>
                <span>{follower.login}</span>
            </div>
        </div>
    );
}
