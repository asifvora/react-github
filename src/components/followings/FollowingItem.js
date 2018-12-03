import React from 'react';

export default function FollowingItem({ following }) {
    return (
        <div className="ui-g border-bottom">
            <div className="ui-g-1 follow-items">
                <li>
                    <span style={{ display: 'inline-block' }}>
                        <img
                            src={following.avatar_url}
                            className="avatar img-rounded img-responsive"
                            alt="User Avatar" width={50} height={50}
                        />
                    </span>
                </li>

            </div>
            <div className="ui-g-11 follow-items" >
                <span className="f4 link-gray-dark">{following.name}</span>
                <span><a href={following.html_url} style={{ color: '#0366d6' }} target="_blank" title={following.login}>{following.login}</a></span>
            </div>
        </div>
    );
}