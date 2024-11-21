import React, { useContext } from 'react';
import './AboutTopAside.css'
import { Link } from 'react-router-dom';
import { Languages } from '../../../global/Languages';

export const AboutTopAside = () => {


    return (
        <aside className='about-top__aside'>
            <Link to='/' className='logo'>vcDevs</Link>
            <ul className='social'>
                <li><a href="" target='_blank'>YT</a></li>
                <li><a href="https://t.me/vincentochangretta" target='_blank'>TG</a></li>
                <li><a href="https://wa.me/qr/Z7TJFZOBFDMVP1" target='_blank'>WA</a></li>
                <li><a href="https://www.instagram.com/vcdevelopers?igsh=MWswZ3NoNm1jMW54aw==" target='_blank'>IG</a></li>
            </ul>
            <Languages />
        </aside>
    );
}
