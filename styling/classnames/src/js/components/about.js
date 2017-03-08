import React from 'react';
import classNames from 'classnames';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }

    render() {
        return (
            <div className={this.getContainerClassName()}>
                this is about styling!!

                <input type='checkbox'
                    checked={this.state.active}
                    onChange={this.onActiveChange}
                />
            </div>
        )
    }

    onActiveChange = (event) => {
        this.setState({
            active: event.target.checked
        })
    }

    getContainerClassName() {
        return classNames('container-color', {
          'active': this.state.active,
          'inactive': !this.state.active
        });
    }
}
