import React from "react";

export default class ScrollableContainer extends React.Component {
    render() {
        return (
            <div className='comp-container' ref={node => this.appContainer = node}>
                {this.props.children}
            </div>
        )
    }

    scrollDown() {
        this.appContainer.scrollTop = this.appContainer.scrollHeight;
    }
}
