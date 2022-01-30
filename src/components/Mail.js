import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Mail = () => {
    const [state, handleSubmit] = useForm("mqknegjz");
    if (state.succeeded) {
        return <p>Merci d'avoir me contacter !</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Votre adresse mail :</label>
            <br />
            <input id="email" type="email" name="email" />
            <br />

            <label htmlFor="nom">Nom :</label>
            <br />
            <input id="nom" type="nom" name="nom" />
            <br />

            <label htmlFor="prenom">PRENOM :</label>
            <br />
            <input id="prenom" type="prenom" name="prenom" />
            <br />

            <label htmlFor="message">Votre Commentaire :</label>
            <br />
            <textarea id="message" name="message" />
            <br />

            <button type="submit" disabled={state.submitting}>Valider</button>
        </form>
    );
};

export default Mail;