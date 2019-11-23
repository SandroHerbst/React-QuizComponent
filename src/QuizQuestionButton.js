import React, {Component} from 'react'

class QuizQuestionButton extends Component {
    handleClick() {
        this.props.clickHandler(this.props.button_text)
    }
    render() {
        return (
            <li class='list-group-item m-2'><button className='btn btn-primary' onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>
        )
    }
}

export default QuizQuestionButton