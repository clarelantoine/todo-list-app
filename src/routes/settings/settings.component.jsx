// import { useState } from 'react';
import * as Styled from './settings.styles';
import FormInput from '../../components/form-input/form-input.component';

// const defaultFormFields = {
//     firstName: '',
//     lastName: '',
//     displayName: '',
//     email: '',
// };

const Settings = () => {
    // const [formFields, setFormFields] = useState(defaultFormFields);

    const handleChange = () => {};

    const handleSubmit = () => {};

    return (
        <Styled.AccountSettingContainer>
            <form onSubmit={handleSubmit}>
                <Styled.LeftWrapper>
                    <span>Profile picture</span>
                    <Styled.AvatarImage />
                </Styled.LeftWrapper>
                <Styled.RightWrapper>
                    <div>
                        <FormInput
                            label="First Name"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                        />
                        <FormInput
                            label="Last Name"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                        />
                    </div>
                    <FormInput
                        label="Display Name"
                        placeholder="Display Name"
                        name="displayName"
                        onChange={handleChange}
                    />
                    <FormInput
                        label="Email Address"
                        placeholder="Email Address"
                        name="email"
                        onChange={handleChange}
                    />

                    <button type="submit">Save</button>
                </Styled.RightWrapper>
            </form>
        </Styled.AccountSettingContainer>
    );
};

export default Settings;

/**
 * first name
 * last name
 * display name
 * email address
 *
 */
