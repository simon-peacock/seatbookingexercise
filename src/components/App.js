import React from 'react'

import Container from 'Containers/Container';

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Seatbooking</h1>
        <Container />
      </React.Fragment>
    )
  }
}

export default App
