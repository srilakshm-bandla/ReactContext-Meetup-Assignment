import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import {AppContainer, LogoImage, MeetupContainer} from './styledComponents'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import RegisterContext from './components/context/RegisterContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',

    isRegistered: false,
    showSubmitError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showSubmitError: true})
  }

  render() {
    const {name, topic, isRegistered, showSubmitError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showSubmitError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <AppContainer>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />

          <MeetupContainer>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route component={NotFound} />
            </Switch>
          </MeetupContainer>
        </AppContainer>
      </RegisterContext.Provider>
    )
  }
}
export default App
