import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Stack } from '@mui/material';

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={1} direction="row" justifyContent="center">
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<PhoneIcon />} label="RECENTS" />
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
        <Tab icon={<PersonPinIcon />} label="NEARBY" />
      </Tabs>
    </Stack>
  );
}