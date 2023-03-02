import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import UhOh from '../../images/UhOh.png'
const Down = () => {

    return (
        <div className='background'>
            <header>
                <Link to='/' className='logo'>
                    Tenant Score
                </Link>
            </header>

            <div className='error'>
                <div className='oopsie'>
                    Oopsie daisy!
                </div>

                <div className='uhOh' >
                    <img src={UhOh} />
                </div>
                <div className='oopsie2'>
                    Tenant Score is currently on the fritz, but don't worry, we're giving it a major facelift to make it even better for you. We're working our tails off to get everything up and running ASAP. So sit tight, grab a cup of coffee, and come back soon to see our shiny new website. We promise it'll be worth the wait!
                </div>
            </div>

        </div >
    )
}

export default Down