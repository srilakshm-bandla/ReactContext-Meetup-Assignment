import {Link} from 'react-router-dom'

import RegisterContext from '../context/RegisterContext'

import {
  HomeContainer,
  Heading,
  Paragraph,
  Button,
  ImageContainer,
  Image,
  Name,
  Topic,
} from '../../styledComponents'

const Home = props => {
  const clickToRegisterPage = () => {
    const {history} = props
    history.replace('/register')
  }
  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        console.log(isRegistered)
        console.log(name)
        return (
          <div>
            {isRegistered === true ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topic}</Topic>

                <ImageContainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </ImageContainer>
              </HomeContainer>
            ) : (
              <HomeContainer>
                <Heading>Welcome to MeetUp</Heading>
                <Paragraph>Please register for the topic</Paragraph>
                <Link to="/register">
                  <Button onClick={clickToRegisterPage}>Register</Button>
                </Link>
                <ImageContainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </ImageContainer>
              </HomeContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
