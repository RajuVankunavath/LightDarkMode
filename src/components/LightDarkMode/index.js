import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  onClickButton = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  render() {
    const {mode} = this.state
    const modeClassName = mode ? 'dark-mode' : 'light-mode'
    const buttonText = mode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            className="button-cotainer"
            type="button"
            onClick={this.onClickButton}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
