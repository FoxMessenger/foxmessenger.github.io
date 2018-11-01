// Dependencies
import React from 'react'
import images from '../assets/2016-art/*.jpg';

// Tile Component
class Tile extends React.Component {
    constructor(props) {
            super(props);
            this.state = {
                open: false,
                mouseOver: false
            };
            this._onKeyUp = this._onKeyUp.bind(this);
            this._clickHandler = this._clickHandler.bind(this);
            this._mouseEnter = this._mouseEnter.bind(this);
            this._mouseLeave = this._mouseLeave.bind(this);
        }
    _mouseEnter(e) {
        e.preventDefault();
        if (this.state.mouseOver === false) {
            this.setState({
                mouseOver: true
            })
        }
    }
    _mouseLeave(e) {
        e.preventDefault();
        if (this.state.mouseOver === true) {
            this.setState({
                mouseOver: false
            })
        }
    }
 
    _clickHandler(e) {
        e.preventDefault();
        if (this.state.open === false) {
            this.setState({
                open: true
            });
        } else {
            this.setState({
                open: false
            });
        }
    }

    _onKeyUp(e) {
        e.preventDefault();   
        if (this.state.open === true) {
            if (e.keyCode === 27) {
                this.setState({
                    open: false
                }); 
            } else {
                this.setState({
                    open: true
                });
            }
        }
    }   

    render() {
        let tileStyle = {};
        let headerStyle = {};
        let zoom = {};
        if (this.state.open) {
            tileStyle = {
                width: '60vw',
                height: '60vw',
                position: 'fixed',
                top: '15%',
                left: '29%',
                margin: '0',
                marginTop: '-11vw',
                marginLeft: '-11vw',
                boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
                transform: 'none'
            };
        } else {
            tileStyle = {
                width: '100%',
                height: '100%'
            };
        }

        return (
            <div className="tile">
                <img
                    onMouseEnter={this._mouseEnter}
                    onMouseLeave={this._mouseLeave}
                    onClick={this._clickHandler}
                    onKeyUp={this._onKeyUp}
                    tabIndex="0" 
                    src={this.props.src}
                    style={tileStyle}
                />
            </div>
        );
    }
}

export default Tile