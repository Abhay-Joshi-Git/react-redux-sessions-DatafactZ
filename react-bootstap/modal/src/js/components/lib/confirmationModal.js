import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ConfimModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.cancel}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.title || 'Confirmation Dialog'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        bsStyle='primary'
                        onClick={this.props.cancel}
                    >
                        Cancel
                    </Button>
                    <Button bsStyle='warning'
                        onClick={this.props.execute}
                    >
                        Yes!
                    </Button>
                </Modal.Footer>

            </Modal>
        )
    }
}
