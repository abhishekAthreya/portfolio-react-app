import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../Styles/LandingPage.css';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';


class LandingPage extends Component {
    render() {
      return (
        <Tabs>
        <div id="top-menu">
          <div id="logo">Logo</div>   
          <TabList>
            <Tab>Home</Tab>
            <Tab>Projects</Tab>
            <Tab>Resume</Tab>
            <Tab>About</Tab>
          </TabList>
        </div>  
        
    
        <TabPanel>
          <HomePage/>
        </TabPanel>
        <TabPanel>
          <ProjectPage/>
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