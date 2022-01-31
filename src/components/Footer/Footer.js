// Cette composante sera deposer dans la dernier page de l'application web
import React from 'react';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.elements';
import {Button} from '../../components/GloableStyle';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                {/* l'entete du footer */}
                <FooterSubHeading>
                    CONTACTEZ-MOI
                </FooterSubHeading>
                {/* le texte du footer */}
                <FooterSubText>
                    Envoyer moi un message
                </FooterSubText>
                <Form>
                    <FormInput name="email" placeholder="Your Email" />
                        <Button fontBig>Susbcribe</Button>
                </Form>
            </FooterSubscription>

            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonals</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonals</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonals</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonals</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        TOOSSA
                    </SocialLogo>
                    <WebsiteRights>TOOSSA @ 2021</WebsiteRights>
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