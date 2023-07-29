import { FooterContainer } from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <span>{`Copyright © ${new Date().getFullYear()}`}</span>
        <span>
            Developed by <a href="https://clarelantoine.com">CA.</a>
        </span>
    </FooterContainer>
);

export default Footer;
