import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";
import createDoc from "./doc";


function googleRegister(navigate) {
  try{
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user", user.displayName);
        createDoc(user, user.displayName);
        navigate("/Dashboard");
        toast.success("User Logged In Successfully");

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(errorMessage);
        // ...
      });
    } catch (e){
      toast.error(e.message);
    }
}

export default googleRegister;