import React from 'react';
import ReactDOM from 'react-dom/client';

class LoginController extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    button = isLoggedIn 
      ? <LogoutButton onClick={this.handleLogoutClick} /> 
      : <LoginButton onClick={this.handleLoginClick} />

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const isLoggedin = props.isLoggedIn;
  if (isLoggedin) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginController />);