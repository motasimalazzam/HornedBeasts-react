import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import HornedData from './components/HornedData.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      HornedData : HornedData,
      showCard : false,
      selectedCard : {},
    }
  }


  handleClose = () => {
    this.setState({
      showCard: false
    });
  }

  popUpTheCard = (title) => {
    let selectedCard = HornedData.find(card => {
      if(card.title ===  title){
        return card;
      }
    })

    this.setState({
      showCard:true,
      selectedCard: selectedCard
    })
  }


  render(){

    return(
      
      <div>

        <Header />

        <Main 
        hornedDataToMain={this.state.HornedData}
        popUpTheCard={this.popUpTheCard}
        />

        <SelectedBeast 
        HornedData={this.HornedData}
        selectedCard={this.state.selectedCard}
         showPic={this.state.showCard} 
         closePic={this.handleClose}/>

        <Footer/>

      </div>

    )
  }
}

export default App;