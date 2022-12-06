
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }

    return (
        <div>
            <button onClick={logGoogleUser}>Sign in Popup</button>
            <h1>Sign in page</h1>
<SignUpForm></SignUpForm>
        </div>
    ) 
}

export default SignIn;