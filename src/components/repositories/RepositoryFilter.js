'use strict';

import React from 'react';
import { InputText } from 'primereact/components/inputtext/InputText';

class RepositoryFilter extends React.Component {
    render() {
        return (
            <div className="border-bottom">
                <InputText
                    type="text" className="form-control width-full js-autosearch-field"
                    placeholder={this.props.placeholder}
                    onKeyUp={({ target: { value } }) => this.props.onUpdate(value)}
                />
            </div>
        );
    }
}
export default RepositoryFilter;