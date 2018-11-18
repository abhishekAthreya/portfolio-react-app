import React from 'react';
import { render } from 'react-dom';
import '../Styles/ProjectPage.css';
import InteractiveScroll from '../Components/InteractiveScroll';

class ProjectPage extends React.Component {
    render() {
        return (
            <div>
                <div class="header-container">
                    <div class="header">Ongoing Projects</div>
                    <div class="header-fill"></div>
                </div>
                <div class="projects-container">
                    <div class="project">
                        <div class="project-info-container">
                            <div class="info-text">Project 1 Desc</div>
                        </div>
                    </div>
                    <div class="project">
                        <div class="project-info-container">
                            <div class="info-text">Project 2 Desc</div>
                        </div>
                    </div>
                </div>
                <InteractiveScroll style={{ marginLeft: 1100, marginTop: 62 }} direction="right" />
            </div>
        )
    }
}

export default ProjectPage