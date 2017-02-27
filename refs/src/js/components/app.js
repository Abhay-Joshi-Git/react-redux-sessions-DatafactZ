import React from "react";

export default class App extends React.Component {
    render() {
        return (
            <div className='comp-container' ref={node => this.appContainer = node}>
                <div className='comp-content'>
                    App content
                    <div className='imp-content'>
                        Some important content
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.appContainer.scrollTop = this.appContainer.scrollHeight;
    }

}

// import ScrollableContainer from './scrollableContainer.js';
//
// export default class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ScrollableContainer ref={node => this.ScrollContainer = node}>
//                     <div className='comp-content'>
//                         App content
//                         <div className='imp-content'>
//                             Some important content
//                         </div>
//                     </div>
//                 </ScrollableContainer>
//             </div>
//         );
//     }
//
//     componentDidMount() {
//         console.log(this.ScrollContainer);
//         this.ScrollContainer.scrollDown();
//     }
//
// }
