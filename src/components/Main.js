import React from 'react';
import HornedBeast from './HornedBeast';



class Main extends React.Component {

   

    render() {

        return (


            <div>
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