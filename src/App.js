import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { sampleText } from './sampleText'
import marked from 'marked'
export default class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount(){
    
    const text = localStorage.getItem('text')
    if(text){
      this.setState({text})
    }
    else{
      
      this.setState({text: sampleText})
    }
    
  }

  componentDidUpdate(){
    localStorage.setItem('text',this.state.text)
  }

  handleChange = (e) =>{
    const text = e.target.value
    this.setState({text})
  }
  renderText = (text) => {
    const __html = marked(text,{markdownString: true})
    return {__html}
  }

  
  
  render() {
    
    return (
      <div className="container">
        <div className='row'>

          <div className='col-sm-6 mt-5'>
            <textarea className='form-control' rows='35' value={this.state.text} onChange={this.handleChange}></textarea>
          </div>
        
          <div className='col-sm-6 mt-5'>
            
            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}></div>
          </div> 
        
        </div>
      </div>
    )
  }
}
