import React from 'react';
import { render } from 'react-dom';
import '../Styles/InteractiveScroll.css';

const SCROLL_TEXT = {
    right: "SCROLL RIGHT",
    left: "SCROLL LEFT",
    down: "SCROLL DOWN",
    up: "SCROLL UP",
}

const SCROLL_CLASS_NAME = {
    right: "scroll-right",
    left: "scroll-left",
    down: "scroll-down",
    up: "scroll-up",
}

const SCROLL_INDICATOR_CLASS_NAME = {
    right: "scroll-indicator-right",
    left: "scroll-indicator-left",
    down: "scroll-indicator-down",
    up: "scroll-indicator-up",
}

class InteractiveScroll extends React.Component {
    render() {
        return (
            <div class="scroll-container" style={this.props.style}>
                <div class={SCROLL_CLASS_NAME[this.props.direction]}>{SCROLL_TEXT[this.props.direction]}</div>
                <div class={SCROLL_INDICATOR_CLASS_NAME[this.props.direction]}><br /></div>
            </div>);
    }
}

export default InteractiveScroll;