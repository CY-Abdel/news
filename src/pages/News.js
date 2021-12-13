import React from 'react';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';

const News = () => {
    return (
        <div className="news-container">
            <Navigation />
            <Logo />
            <h2>News' here</h2>

            <form>
                <input type="text" placeholder="Nom" />
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="Envoyer" />
            </form>

            <ul>
               {/* ON  LES ARTICLES DEPUIS LA DB QU'ON A CREER DANS "./assets/db.json" */}

            </ul>
        </div>
    );
};

export default News;