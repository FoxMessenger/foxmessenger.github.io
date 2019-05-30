import React from 'react'
import Artboard from './Artboard';
// import Storyboard from './Storyboard';
import Designboard from './Designboard';
import Travelboard from './Travelboard';
import { Link , BrowserRouter as Router, Route } from 'react-router-dom'


const Intro = () => (
    <Router>
            <div className='short-hr'>&nbsp;</div>
            <h1 className='font-light'>Hi, my name is <b className='font-heavy no-decoration'><Link to='/'>Liam Fox.</Link></b></h1> 
            <p><Link to='/design'>designer</Link>, story teller, <Link to='/travel'>photographer</Link>, traveler,  and <Link to='/art'>artist</Link> from chicago.</p>
            <div className='short-hr'>&nbsp;</div>
            <Route exact path='/art' component={Artboard} />
            {/* <Route exact path='/story' component={Storyboard} /> */}
            <Route exact path='/design' component={Designboard} />
            <Route exact path='/travel' component={Travelboard} />
    </Router>
)

export default Intro
