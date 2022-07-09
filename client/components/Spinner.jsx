import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner() {
  const loadingBgStyle = {
    background: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  };
  return (
    <Stack
      sx={{ color: 'grey.500' }}
      spacing={2}
      direction="row"
      style={loadingBgStyle}
    >
      <CircularProgress />
    </Stack>
  );
}
