import React , {Component} from 'react';
import Content from './Components/Content/Content';
import Article from './Components/Article/Article';
import Card from './Card/index'
import Form from './Components/Builder/index';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

class App extends Component {

  state = {
    tips:[' Mine Coffee',' Wander Into Young Designer Stores',' Drink Beer with the Monks',' Find the Yard of Lost Toys'],
    wordsList:[
      {
          eng: 'between',
          rus: 'между'
      },
      {
          eng: 'high',
          rus: 'высокий'
      },
      {
          eng: 'really',
          rus: 'действительно'
      },
      {
          eng: 'something',
          rus: 'что-нибудь'
      },
      {
          eng: 'most',
          rus: 'большинство'
      },
      {
          eng: 'another',
          rus: 'другой'
      },
      {
          eng: 'much',
          rus: 'много'
      },
      {
          eng: 'family',
          rus: 'семья'
      },
      {
          eng: 'own',
          rus: 'личный'
      },
      {
          eng: 'out',
          rus: 'из/вне'
      },
      {
          eng: 'leave',
          rus: 'покидать'
      },
  ]
  }

  handlerAddWord(values){
      console.log(values)
      const currArr = this.state.wordsList
      currArr.push(values)

      this.setState({ wordsList: currArr })

  }

  render(){
    const { wordsList} = this.state
  return (
    <>
    <Header firstOption="Home" secondOption="Learn" thirdOption="Add Word"/>
    <Article  />
    <Content>
    <div style={{display: 'flex', flexWrap:'wrap' , width: '900px'}}>
        { wordsList.map(({eng , rus}, index) => <Card key={index} rus={rus} eng={eng}/>) }
      </div>
    </Content>
    <Form  addElement={this.handlerAddWord.bind(this)}/>
    <Footer 
        author='@Nazarkon' 
        urlForLinked="https://www.linkedin.com/in/nazar-montsibovych-1a683517b/"
        firstOption="To top"
        />
    </>
  );
}
}

export default App;