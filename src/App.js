import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
      advice: ''
    }

    componentDidMount(){
      this.fetchAdvice()
    }

    fetchAdvice = () => {
      axios.get(`https://api.adviceslip.com/advice`)
      .then((res)=>{
        const {advice} = res.data.slip;
        this.setState({advice})
      })
      .catch((err) => {console.log(err);})
    }
    
    render(){

      const {advice} = this.state;

      return (
        <div className='container'>
            <div className='card'>
                <div className='heading'>
                    <h2>{advice}</h2>
                </div>
                <button className='button' onClick={this.fetchAdvice}>
                    <span>Give me a advice</span>
                </button>
            </div>
        </div>
      )
    }
}

export default App;
