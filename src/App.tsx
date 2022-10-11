import React, { FunctionComponent } from 'react';
import 'App.css';
import Box from 'components/Box/Box'

const App: FunctionComponent = () => 
{
  return (<>
    <div className="app">
      <div>
        <Box />
        <Box />
        <Box />
      </div>
      <div>
        <Box />
        <Box />
        <Box />
      </div>
      <div>
        <Box />
        <Box />
        <Box />
      </div>
    </div>
    </>
  )

}

export default App;
