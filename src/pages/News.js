import React, { useEffect, useState } from 'react';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';
import axios from "axios";
import Article from '../components/Article';

const News = () => {

    // stocker les data avc useState qui change dynamiquement
    const [newsData, setNewsData] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);


    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get('http://localhost:3003/articles')
            .then((res) => setNewsData(res.data));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // empecher la page de se recharger pour pouvoir affivher le log par exemple
        // console.log("test submit");

        if (content.length < 120) {
            setError(true);
        } else {
            //on ajoute les donné dynamique au lieu de statique
            axios.post("http://localhost:3003/articles", {
                // author: "Juba",
                // content: "Hello",
                // date: Date.now()
                author, // author === author: author,
                content, // content === content: content,
                date: Date.now()
            })
                .then(() => {
                    // si on a plus de 120 carac donc on doit repasser error a false pour que le <p> ne va plus s'afficher
                    setError(false);
                    setAuthor("");
                    setContent("");
                    getData();
                });
        }
    };

    return (
        <div className="news-container">
            <Navigation />
            <Logo />
            <h2>News' here</h2>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    onChange={(e) => setAuthor(e.target.value)}
                    type="text"
                    placeholder="Nom"
                    value={author}
                />
                <textarea
                    // doube acolade pour le style en React
                    // si error alors border rouge sinon
                    // on rev1 au border original
                    style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Message"
                    value={content}>
                </textarea>
                {/* Si error e=== true on affiche le texte */}
                {error && <p>Minimum de 120 caractères requis</p>}
                <input type="submit" value="Envoyer" />
            </form>

            <ul>
                {/* ON  LES ARTICLES DEPUIS LA DB QU'ON A CREER DANS "./assets/db.json" */}
                {
                    newsData
                        .sort((a, b) => b.date - a.date)
                        .map((article) => (
                            <Article key={article.id} article={article} />
                        ))
                }
            </ul>
        </div>
    );
};

export default News;