import RegisterContext from '../context/RegisterContext'

import {
  RegisterContainer,
  RegisterLogoImage,
  RegisterImage,
  JoinContainer,
  JoinHeading,
  Label,
  Input,
  Button,
  Select,
  ErrorMessage,
} from '../../styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        registerName,
        showSubmitError,
        updateError,
      } = value

      const onChangeNameInput = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      const onAddRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      return (
        <RegisterContainer>
          <RegisterLogoImage>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="reg-image"
            />
          </RegisterLogoImage>
          <JoinContainer>
            <JoinHeading>Let us Join</JoinHeading>
            <form onSubmit={onAddRegistration}>
              <Label htmlFor="name">NAME</Label>
              <br />
              <Input
                type="text"
                id="name"
                value={name}
                placeholder="Your name"
                onChange={onChangeNameInput}
              />
              <br />
              <Label htmlFor="topics">TOPICS</Label>
              <br />
              <Select
                id="topic"
                name={topicsList[0].id}
                value={topic}
                onChange={onChangeTopic}
              >
                {topicsList.map(eachTopic => (
                  <option key={eachTopic.id} value={eachTopic.id}>
                    {eachTopic.displayText}
                  </option>
                ))}
              </Select>
              <br />
              <Button type="submit">Register Now</Button>
              {showSubmitError === true ? (
                <ErrorMessage>Please enter your name</ErrorMessage>
              ) : null}
            </form>
          </JoinContainer>
        </RegisterContainer>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
