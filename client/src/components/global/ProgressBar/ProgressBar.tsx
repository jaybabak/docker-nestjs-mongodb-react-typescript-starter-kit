import * as React from 'react';
import { Box, LinearProgress } from '@mui/material';
import './ProgressBar.css'

const ProgressBar = () => (
  <Box className="progress-indicator-wrapper" sx={{ width: '100%' }}>
    <Box className="progress-indicator">
      <LinearProgress color="inherit" />
    </Box>
  </Box>
)

export default ProgressBar;