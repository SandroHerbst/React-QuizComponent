import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    constructor(props) {
      super(props)
      this.state = {incorrectAnswer: false}
    }
    handleClick(buttonText) {
      if (buttonText === this.props.quiz_question.answer) {
        this.setState({incorrectAnswer: false})
        this.props.showNextQuestionHandler()
      } else {
      this.setState({incorrectAnswer: true})
      }
    }
    render() {
      return (
        <main>
          <section>
            <h1 className='display-5 m-5'>{this.props.quiz_question.instruction_text}</h1>
          </section>
          <section className="buttons">
            <ul className='list-group'>
              {this.props.quiz_question.answer_options.map((answer_option,index) =>{
                return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)}/>
              })}
            </ul>
          </section>
          {this.state.incorrectAnswer ? <p className='alert alert-danger mt-4'>Sorry, that´s not right</p> : <p></p>}
        </main> 
      )       
    }
}

export default QuizQuestion
