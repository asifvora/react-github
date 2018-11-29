'use strict';

import React from 'react';
import moment from 'moment';

export default function RepositoryItem({ repository }) {
    const timeUpdated = moment(repository.pushed_at).fromNow();
    return (
        <li className="border-bottom" style={{ paddingBottom: '50px', paddingTop: '5px' }}>
            <h3><a href={repository.html_url} target="_blank" style={{ color: '#0366d6' }}>{repository.name}</a></h3>
            <p className="text-gray .py-1">{repository.description}</p>
            <div className="pull-left f6 text-gray mt-2">
                <span>{repository.language}</span>
                <strong><i className="fa fa-star"></i>{repository.stargazers_count}</strong>
                <strong><i className="fa fa-code-fork" /> {repository.forks_count}</strong>
                <time style={{ paddingLeft: '20px' }}>Updated {timeUpdated}</time>
            </div>
        </li>
    );
}