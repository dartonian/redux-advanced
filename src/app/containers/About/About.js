import React, {Component, PropTypes} from 'react';

export default class About extends Component {
    static propTypes = {

    };

    render() {

        const {
            requestSend
        } = this.props;

        return (
            <div>
                <h1>Hello world about!</h1>
            </div>
        );
    }
}
