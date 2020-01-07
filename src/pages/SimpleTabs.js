import React from 'react';
import PropTypes from 'prop-types';

import Welcome from '../components/Welcome';
import Profile from '../components/Profile';
import Pengalaman from '../components/Pengalaman';
import Portofolio from '../components/Portofolio';
import Sertifikasi from '../components/Sertifikasi';
import Keahlian from '../components/Keahlian';

import { makeStyles, useTheme  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    backgroundColor: '#fff',
    color: '#2D3A54',
    fontWeight: 'bold',
    border: 'none',
  },
  body: {
    overflow: 'auto',
    maxHeight: '480px'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} className={classes.tabs} aria-label="simple tabs example" 
          variant="scrollable"
          scrollButtons="auto" >
          <Tab label="Selamat Datang" {...a11yProps(0)} />
          <Tab label="Profil" {...a11yProps(1)} />
          <Tab label="Pengalaman" {...a11yProps(2)} />
          <Tab label="Portofolio" {...a11yProps(3)} />
          <Tab label="Kelahlian" {...a11yProps(4)} />
          <Tab wrapped label="Sertifikat dan Pelatihan" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel className={classes.body}  value={value} index={0} >
          <Welcome />
        </TabPanel>
        <TabPanel className={classes.body}  value={value} index={1} >
          <Profile />
        </TabPanel>
        <TabPanel className={classes.body} value={value} index={2}>
          <Pengalaman />
        </TabPanel>
        <TabPanel className={classes.body} value={value} index={3}>
         <Portofolio />
        </TabPanel>
        <TabPanel className={classes.body} value={value} index={4}>
          <Keahlian />
        </TabPanel>
        <TabPanel className={classes.body} value={value} index={5}>
          <Sertifikasi />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}