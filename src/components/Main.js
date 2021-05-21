import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form'
import HornedData from './HornedData.json';

class Main extends React.Component {

    submitForm = (event) => {

        let hornsNumber = event.target.value;
        let data = HornedData
        let filterdBeast
        if (hornsNumber) {
            filterdBeast = data.filter(item => {

                if (item.horns == hornsNumber) {
                    return item;
                }
            })

        } else {
            filterdBeast = data;
        }
        this.props.gitFilterdBeast(filterdBeast);
    };

    render() {

        return (


            <div>
                 <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Filter By number Of Hornes</Form.Label>
                        <Form.Control as="select" onChange={this.submitForm}>
                            <option value=''>All</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                            <option value='100'>Wow</option>
                        </Form.Control>

                    </Form.Group>
                </Form>

                { this.props.hornedDataToMain.map(item => {

                    return (


                        <HornedBeast

                            title={item.title}
                            image_url={item.image_url}
                            description={item.description}
                            popUpTheCard={this.props.popUpTheCard}

                        />

                    )
                })
                }
            </div>




        )
    }
}

export default Main;