import React from 'react';
import {CompetenceContenu} from './Data';
import InfoSection from '../../InfoSection/InfoSection';

const Competences = () => {
    return (
        <>
            <InfoSection {...CompetenceContenu} />
            <InfoSection {...CompetenceContenu} />
            <InfoSection {...CompetenceContenu} />
        </>
    );
};

export default Competences;