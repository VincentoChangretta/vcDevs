import './AboutTop.css'
import { Header } from '../../../global/Header';
import { AboutTopAside } from './AboutTopAside';
import { AboutTopBox } from './AboutTopBox';
import { OrderButtons } from '../../../UI/OrderButtons';

export const AboutTop = () => {



    return (
        <section className='about-top'>
            <div className="container">
                <div className="about-top__bg"></div>
                <div className="about-top__inner">
                    <AboutTopAside />
                    <section className="about-top__main">
                        <Header />
                        <AboutTopBox />
                        <OrderButtons className='about-top__buttons' />
                    </section>
                </div>
            </div>
        </section>
    );
}
