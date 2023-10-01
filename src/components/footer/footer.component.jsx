import { APP_DATA } from '../../app-data';
import { FooterContainer } from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <span>{`Copyright © ${new Date().getFullYear()}`}</span>
        <span>
            Developed by{' '}
            <a href={APP_DATA.author.website} target="_blank" rel="noreferrer">
                {APP_DATA.author.initial}.
            </a>
        </span>
    </FooterContainer>
);

export default Footer;
