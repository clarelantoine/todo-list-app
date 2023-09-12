import * as Styled from './form-input.styles';

const FormInput = (props) => {
    const { label } = props;
    return (
        <Styled.FieldGroup>
            {label && <span>{label}</span>}
            <input {...props} />
        </Styled.FieldGroup>
    );
};

export default FormInput;
