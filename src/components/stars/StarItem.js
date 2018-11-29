import React from 'react';
import moment from 'moment';

export default function StarItem({ repo }) {
    const timeUpdated = moment(repo.pushed_at).fromNow();
    return (
        <li className="border-bottom" style={{ paddingBottom: '50px', paddingTop: '5px' }}>
            <h3><a href={repo.html_url} style={{ color: '#0366d6' }}>{repo.name}</a></h3>
            <p className="text-gray">{repo.description}</p>
            <div className="pull-left">
                <strong>{repo.language}</strong>
                <strong><i class="fa fa-star"></i> {repo.stargazers_count}</strong>
                <strong><i class="fa fa-code-fork" /> {repo.forks_count}</strong>
                <time style={{ paddingLeft: '20px' }}>Updated {timeUpdated}</time>
            </div>
        </li>
    );
}