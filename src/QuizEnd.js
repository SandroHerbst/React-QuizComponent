import React, {Component} from 'react'

class QuizEnd extends Component {
    handleResetClick() {
        this.props.resetClickHandler()
    }
    render() {
        return (
            <div>
                <h1 className='display-2'>Thanks for playing!</h1>
                <a href='' className='btn btn-primary' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
            </div>
        )
    }
}

export default QuizEnd