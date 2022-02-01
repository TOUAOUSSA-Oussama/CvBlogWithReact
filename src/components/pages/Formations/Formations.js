import React from 'react';
import {FormationContenu} from './Data';
import InfoSection from '../../InfoSection/InfoSection';
import Bloc from '../../Bloc/Bloc';

const Formations = () => {
    return (
        <>
            <InfoSection {...FormationContenu} />
            <InfoSection {...FormationContenu} />
            <InfoSection {...FormationContenu} />
            
        </>
    );
};

export default Formations;