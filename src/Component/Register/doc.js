import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";

async function createDoc(user, name){
    if (!user) return;
    const userRef = doc(db, "users", user.uid);
    const userData = await getDoc(userRef);
    if (!userData.exists()){
        try{
            await setDoc(userRef, {
                name: user.displayName ? user.displayName : name,
                email: user.email,
                photoURL: user.photoURL ? user.photoURL : "",
                createdAt: new Date(),
            });
            toast.success("Doc created successfully");
        } catch (e){
            toast.error(e.message);
        }
    } else {
        toast.info("User already exists");
    }
}

export default createDoc;