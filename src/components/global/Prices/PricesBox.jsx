import React from 'react';
import './PricesBox.css'
import { PricesArticle } from './PricesArticle';

export const PricesBox = React.memo(({ data, title, id }) => {

    return (
        <section className='dev-prices' id={id}>
            <div className="container-original">
                <div className="dev-prices__inner">
                    <h2 className='title-top'>{title}</h2>
                    {data.map(item => (
                        <PricesArticle key={item.id} card={item} />
                    ))}
                </div>
            </div>
        </section>
    );
})
