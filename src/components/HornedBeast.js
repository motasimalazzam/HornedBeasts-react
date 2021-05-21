import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {

    constructor(props) {

        super(props);
        this.state = {

            numberOfVotes: 0
        }
    }

    increaseNumberOfVotes = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1
        })
    }

    render() {

        return (

            <div>

                {/* <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.title} title={this.props.title} onClick={this.increaseNumberOfVotes} />
                <p>😻:{this.state.numberOfVotes}</p>
                <p>{this.props.description}</p> */}

                

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgUrl} alt={this.props.title} title={this.props.title}  />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                         <Button variant="primary" onClick={this.increaseNumberOfVotes}>Do you love me? 😻{this.state.numberOfVotes}</Button> 
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default HornedBeast;