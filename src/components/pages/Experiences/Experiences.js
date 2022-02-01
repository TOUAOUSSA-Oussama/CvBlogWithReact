import React from 'react';
import {ExperienceContenu} from './Data';
import InfoSection from '../../InfoSection/InfoSection';

const Experiences = () => {
    return (
        <>
            <InfoSection {...ExperienceContenu} />
            <InfoSection {...ExperienceContenu} />
            <InfoSection {...ExperienceContenu} />  
        </>
    );
};

export default Experiences;