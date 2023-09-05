import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/material';
export default function Animations() {
  return (
    <Stack spacing={1} direction="row" justifyContent="center">
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
    </Stack>
  );
}