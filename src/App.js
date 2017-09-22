import React from 'react';

import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import MenuIcon from 'material-ui-icons/Menu'
import IconButton from 'material-ui/IconButton'

import Test from 'tlvince-reduced-test-case-material-ui-component'

const App = () =>
  <div>
    <AppBar>
      <Toolbar>
        <IconButton
          color='contrast'
          aria-label='Menu'
        >
          <MenuIcon />
        </IconButton>
        <Typography
          type='title'
          color='inherit'
        >Dashboard</Typography>
      </Toolbar>
    </AppBar>
    <Test />
  </div>

export default App;
