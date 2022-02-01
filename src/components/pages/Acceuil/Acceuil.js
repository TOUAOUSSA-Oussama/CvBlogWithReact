// Cette component va definir les pages d'acceuil

import React from 'react';
import {AcceuilContenu} from './Data';
import InfoSection from '../../InfoSection/InfoSection';

const Acceuil = () => {
    return (
        <>
            <InfoSection {...AcceuilContenu} />
            <InfoSection {...AcceuilContenu} />
            <InfoSection {...AcceuilContenu} />
        </>
    );
};

export default Acceuil;