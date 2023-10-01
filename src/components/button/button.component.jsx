import { useSelector } from 'react-redux';
import * as Styled from './button.styles';
import { selectUserIsLoading } from '../../store/user/user.selector';

const Button = (props) => {
    const { children, ...otherProps } = props;
    const isLoading = useSelector(selectUserIsLoading);

    return (
        <Styled.Button {...otherProps}>
            {isLoading && <Styled.SpinnerContainer />}
            {children}
        </Styled.Button>
    );
};

export default Button;
