import React from 'react';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import DeleteArticle from './DeleteArticle';

// const Article = (props) => {
//     console.log(props.article);
//     return (
//         <div>
//             <h2>Article</h2>
//         </div>
//     );
// };

//destructurer props
const Article = ({ article }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState("");

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        return newDate;
    }

    const handleEdit = () => {
        // pour pas ecraser et supprimer les article on jsx on doit lui rappeler les autres datas comme l'author ds notre cas
        const data = {
            author: article.author,
            content: editedContent ? editedContent : article.content,
            date: article.date,
        }

        axios
            .put('http://localhost:3003/articles/' + article.id, data)
            .then (() => {
                setIsEditing(false);
            })


    };
    // console.log(article);
    return (
        <div className="article" style= {{background: isEditing ? "#f3feff" : "white"}}>
            <div className="card-header">
                <h3>{article.author}</h3>
                {/* <em>{article.date}</em> */}
                <em>Posté le {dateParser(article.date)}</em>
            </div>
            {isEditing ? (
                <textarea
                    onChange={(e) => setEditedContent(e.target.value)}
                    // autoFocus defaultValue={article.content}></textarea>
                    autoFocus defaultValue={editedContent ? editedContent : article.content}></textarea>
            ) : (
                // <p>{article.content}</p>
                <p>{editedContent ? editedContent : article.content}</p>
            )}
            {/* <p>{article.content}</p> */}
            <div className="btn-container">
                {isEditing ? (
                    <button onClick={handleEdit}>Valider</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}

                {/* <button>Deleat</button> */}
                <DeleteArticle id={article.id} />
            </div>
        </div>
    );
};

export default Article;