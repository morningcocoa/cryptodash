import React, { Component } from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import styled, { css } from 'styled-components';

const MyButton = styled.div`
  color: green;
  ${props => props.primary && css`
    color: blue;
  `}
`

const TomatoButton = styled(MyButton)`
  color: red;
`

class App extends Component {
  render() {
    return (
        <div>
            <Welcome/>
            <MyButton>Hello</MyButton>
            <MyButton primary>Primary</MyButton>
            <TomatoButton>Tomato</TomatoButton>
        </div>
    );
  }
}

export default App;
