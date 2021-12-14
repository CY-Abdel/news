import axios from 'axios';
import React from 'react';

const DeleteArticle = ({ id }) => {

    const handleDelete = () => {
        axios
            .delete('http://localhost:3003/articles/' + id);
        // on doit utiliser derux pour pouvoir recharger car on peux pas utliser getData du parent ds le composant enfant ici
        // donc on recharge exeptionellment ainsi
        // window.location.reload();
        window.location.reload(false);
    };

    return (
        <button
            onClick={() => {
                if (window.confirm('voulez-vous supprimer cet article ?')) {
                    handleDelete();
                }
            }}>Supprimer</button>
    );
};

export default DeleteArticle;