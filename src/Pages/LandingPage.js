import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DesignPage from './DesignsPage';
import '../Styles/LandingPage.css';


class LandingPage extends Component {
    render() {
      return (
        <Tabs>
        <div id="top-menu">
        <TabList>
          <Tab>Home</Tab>
          <Tab>Projects</Tab>
          <Tab>Designs</Tab>
          <Tab>Resume</Tab>
          <Tab>About</Tab>
        </TabList>
        </div>  
        
    
        <TabPanel>
          <h2>Home Content</h2>
        </TabPanel>
        <TabPanel>
          <h2>Project Page</h2>
        </TabPanel>
        <TabPanel>
          <h2><DesignPage/></h2>
        </TabPanel>
        <TabPanel>
          <h2>Resume Content</h2>
        </TabPanel>
        <TabPanel>
          <h2>About Content</h2>
        </TabPanel>
      </Tabs>
      );
    }
  }
  
  export default LandingPage;