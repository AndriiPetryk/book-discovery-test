import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import CustomizedBreadcrumbs from '../BreadCrumbs/BreadCrumbs'

export default function AppBarTop() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <CustomizedBreadcrumbs />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
