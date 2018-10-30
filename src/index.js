// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Artboard from './components/Artboard';
import Workboard from './components/Workboard';
import Webdesignboard from './components/Webdesignboard';
import Designboard from './components/Designboard';
import Awardboard from './components/Awardboard';
import './scss/app.scss';

// Page Render
class MainPage extends React.Component {
    render() {
        return <div>
            {/* <Header/> */}
            <Jumbotron/>
            <div className='container'>
                <div id='main-body'>
                        <Workboard/>
                        <Awardboard/>
                        <Webdesignboard/>
                        {/* <Designboard/> */}
                </div>
            </div>
            <div className='container no-float'>

                <Artboard/>
            </div>
        </div>
    }
}

let App = document.getElementById('app');

ReactDOM.render(<MainPage/>, App);