import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
  showSubmitError: false,
  isRegistered: false,
  registerName: () => {},
  updateError: () => {},
})

export default RegisterContext
