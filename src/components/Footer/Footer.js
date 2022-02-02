// Cette composante sera deposer dans la dernier page de l'application web
import React, { useState } from 'react';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    SocialIcons,
    SocialIconLink
} from './Footer.elements';
import {Button} from '../../components/GloableStyle';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const Footer = () => {
    const [remplie, setRemplie] = useState(true);

    const [state, handleSubmit] = useForm("mqknegjz");
    
    const handleRemplie = () => {
        setRemplie(false);
    }

    return (
        
        <FooterContainer>
            <FooterSubscription>
                {/* l'entete du footer */}
                <FooterSubHeading>
                    CONTACTEZ-MOI
                </FooterSubHeading>
                {remplie ? 
                    <Form onSubmit={handleSubmit, handleRemplie} method='GET'>
                        <FormInput name="email" placeholder="Votre adresse mail" />
                        <FormInput name="nom" placeholder="Votre nom" />
                        <FormInput name="message" placeholder="Votre message" />

                        <Button type="submit" disabled={state.submitting}>Susbcribe</Button>
                    </Form>
                    :
                    <FooterSubText>
                        Merci d'avoir me contacter !
                    </FooterSubText>
                }
                
            </FooterSubscription>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        TOOSSA
                    </SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href={'https://www.facebook.com/'} target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>

                        <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
};

export default Footer;