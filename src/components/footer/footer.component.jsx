import { FooterContainer } from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <span>{`Copyright © ${new Date().getFullYear()}`}</span>
        <span>
            Developed by
            <a
                href="https://clarelantoine.com"
                target="_blank"
                rel="noreferrer"
            >
                CA.
            </a>
        </span>
    </FooterContainer>
);

export default Footer;
