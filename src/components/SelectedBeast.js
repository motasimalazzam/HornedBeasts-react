import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

class SelectedBeast extends React.Component {

    render() {
        return (
            <div>

                <Modal show={this.props.showPic} onHide={this.props.closePic}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.selectedCard.title}</Modal.Title>
                    </Modal.Header>
                    <Card.Img variant="top" src={this.props.selectedCard.image_url} alt={this.props.selectedCard.title} title={this.props.selectedCard.title}  />
                    <Modal.Body>{this.props.selectedCard.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closePic}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default SelectedBeast;
