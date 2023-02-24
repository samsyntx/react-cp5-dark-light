import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDark: false,
  }

  changeThemeButton = () => {
    this.setState(prevState =>
      prevState.isDark === true ? {isDark: false} : {isDark: true},
    )
  }

  render() {
    const {isDark} = this.state

    let bgTheme = ''
    let headingTheme = ''
    let buttonStyle = ''
    let buttonContent = ''

    if (isDark === false) {
      bgTheme = `common-background-theme dark-bg-theme`
      headingTheme = `common-theme-heading`
      buttonStyle = `common-button-style dark-button-style`
      buttonContent = `Light Mode`
    } else {
      bgTheme = `common-background-theme light-bg-theme`
      headingTheme = `common-theme-heading light-heading-theme`
      buttonStyle = `common-button-style light-button-style`
      buttonContent = `Dark Mode`
    }

    return (
      <div className="main-bg-container">
        <div className={bgTheme}>
          <h1 className={headingTheme}>Click to Change Mode</h1>
          <button
            onClick={this.changeThemeButton}
            type="button"
            className={buttonStyle}
          >
            {buttonContent}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
