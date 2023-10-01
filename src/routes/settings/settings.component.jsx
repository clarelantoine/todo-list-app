// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as Styled from './settings.styles';
import FormInput from '../../components/form-input/form-input.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { updateUserProfileStart } from '../../store/user/user.action';
import Button from '../../components/button/button.component';

const Settings = () => {
    const currrentUser = useSelector(selectCurrentUser);

    const [formFields, setFormFields] = useState(currrentUser);

    const { email, displayName } = formFields;

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.table(formFields);
        dispatch(updateUserProfileStart(email, displayName));
    };

    // useEffect(() => {
    //     console.table(formFields);
    // }, [formFields]);

    return (
        <Styled.AccountSettingContainer>
            <form onSubmit={handleSubmit}>
                {/* <Styled.LeftWrapper>
                    <span>Profile picture</span>
                    <Styled.AvatarImage />
                </Styled.LeftWrapper> */}
                <Styled.RightWrapper>
                    <FormInput
                        label="Display Name"
                        placeholder="Display Name"
                        name="displayName"
                        onChange={handleChange}
                        value={displayName}
                    />

                    {/* <button type="submit">Save</button> */}
                    <Button type="submit">Save</Button>
                </Styled.RightWrapper>
            </form>
        </Styled.AccountSettingContainer>
    );
};

export default Settings;

/**
 * photoUrl
 * displayName
 * email
 * password (tbc)
 *
 */
