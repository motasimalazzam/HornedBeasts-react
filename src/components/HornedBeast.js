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

    popUpTheCard=()=>{
        this.props.popUpTheCard(this.props.title)
    }

    render() {

        return (

            <div style={{display:'inline-block'}}>

                {/* <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.title} title={this.props.title} onClick={this.increaseNumberOfVotes} />
                <p>😻:{this.state.numberOfVotes}</p>
                <p>{this.props.description}</p> */}

                

                <Card onClick={this.popUpTheCard} style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title} style={{ height: '18rem'}} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Card.Text></Card.Text>
                         <Button variant="primary" onClick={this.increaseNumberOfVotes} >Do you love me? 😻{this.state.numberOfVotes}</Button> 
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default HornedBeast;