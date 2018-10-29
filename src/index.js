// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import './scss/app.scss'

// Page Render
class HelloMessage extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <div id="main-body">
                    <div id="body-text">
                        <div className="short-hr">&nbsp;</div>
                            <div><h1 className="font-light">Hi, my name is <b className="font-heavy">   {this.props.name}</b>
                            </h1> <p>Designer, story teller, traveler, and artist from Chicago.</p>
                        </div>
                        <div>
                            <div className="short-hr">&nbsp;</div>
                            <div className="col-span-4">
                                <p className="font-heavy-gray">Work</p>
                                <p className="font-light">The APP</p>
                                <div className="font-light font-sm">
                                    <p >The Almost Perfect Picker (APP) web app. The purpose The APP, was to ensure you receive a hassle free movie, of, on which you weren't already deciding.</p>
                                    <p>Our APP is directly connected to Netflix, with our code being parced through OMDB to ensure a mid to high rating for our selected movie, with which we pass on to you for your viewing pleasure.</p>
                                </div>
                                <div className="dotted">&nbsp;</div>
                                <p className="font-light">Who Are You?</p>
                                <div className="font-light font-sm">
                                    <p >A simple little game of 20 questions in the form of online cards, with a series of questions being safe and friendly, while the other series are more risqué.</p>
                                </div>
                                <div className="dotted">&nbsp;</div>
                                <p className="font-light">Battle of the Gods</p>
                                <div className="font-light font-sm">
                                    <p >A simple game type web app created for me to better understand and manipulate Javascript functions, CSS animations, and HTML styling in general</p>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <p className="font-heavy-gray">Awards</p>
                                <p className="font-light">Tons of useful information</p>
                            </div>
                            <div className="col-span-4">
                                <p className="font-heavy-gray">Graphic Design</p>
                                <p className="font-light">Tons of useful information</p>
                            </div>                            <div className="col-span-4">
                                <p className="font-heavy-gray">Personal Art</p>
                                <p className="font-light">Tons of useful information</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Liam Fox" />, App);