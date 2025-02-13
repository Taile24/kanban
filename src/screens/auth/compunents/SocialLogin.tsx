import { Button, message } from 'antd'
import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { auth } from '../../../firebase/firebaseconfig';
import handleAPI from '../../../api/hadleApi';
import { addAuth } from '../../../firebase/redux/reducers/AuthReducer';
import { localDataName } from '../../../constants/appInfor';

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
    'login_hint': 'taile01246357@gmail.com'
});

interface Props {
    isRemember?: boolean;
}
const SocialLogin = (props: Props) => {
    const { isRemember } = props;
    const [Isloading, setIsloading] = useState(false);
    const dispatch = useDispatch();
    const handleLoginWithGoogle = async () => {
        setIsloading(true)
        try {
            const result = await signInWithPopup(auth, provider)
            if (result) {
                const user = result.user;
                if (user) {
                    const data = {
                        name: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                    };
                    const api = `/auth/google-login`
                    try {
                        const res: any = await handleAPI(api, data, 'post');

                        message.success(res.message);

                        dispatch(addAuth(res.data));

                        if (isRemember) {
                            localStorage.setItem(localDataName.authData, JSON.stringify(res.data))
                        }
                    } catch (error: any) {
                        message.error(error.message)
                    } finally {
                        setIsloading(false)
                    }

                }
            }
            else {
                console.log('Can not Login with google')
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsloading(false);
        }

    }
    return (
        <Button
            loading={Isloading}
            onClick={handleLoginWithGoogle}

            style={{ width: '100%' }}
            size='large'
            icon={<img width="24" height="24" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />}>Sign up with Google</Button>
    )
}

export default SocialLogin
