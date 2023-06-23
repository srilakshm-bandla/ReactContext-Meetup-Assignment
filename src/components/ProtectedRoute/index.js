import {Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const {topicsList} = props

  return <Route {...topicsList} />
}

export default ProtectedRoute
