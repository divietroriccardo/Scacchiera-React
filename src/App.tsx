import { FunctionComponent } from 'react';
import 'App.css';

import Box from 'components/Box/Box'
import ChangeAllButton from 'components/ChangeAllButton/ChangeAllButton';

const App: FunctionComponent = () => 
{

  return (
    <>
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

      <div className="button">
        <ChangeAllButton />
      </div>
    </>
  )
}
export default App;
