// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/Intro';
import Workboard from './components/Workboard';
import Webdesignboard from './components/Webdesignboard';
import Awardboard from './components/Awardboard';
// import Storyboard from './components/Storyboard';
import Designboard from './components/Designboard';
import Travelboard from './components/Travelboard';
import './scss/app.scss';

// Page Render
class MainPage extends React.Component {
    render() {
        return <div className='container'>
            <div>
                
                <Intro/>
                
                <Workboard/>
                <Awardboard/>
                <Webdesignboard/>
            </div>
        </div>
    }
}

let App = document.getElementById('app');

ReactDOM.render(<MainPage/>, App);