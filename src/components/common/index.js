'use strict';

import React from "react";

export function spinnerLoader() {
    return (
        <center>
            <div>
                <h1>Loading...</h1>
            </div>
        </center>
    )
}

export function noRecordFound(msg = 'No data available.') {
    return (
        <center>
            <div >
                <h1>{msg}</h1>
            </div>
        </center>
    )
}
