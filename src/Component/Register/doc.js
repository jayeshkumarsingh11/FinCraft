import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";

async function createDoc(user, name){
    if (!user) return;
    const userRef = doc(db, "user", user.uid);
    const userData = await getDoc(userRef);
    if (!userData.exists()){
        try{
            await setDoc(doc(db, "user", "user.uid"), {
                name: user.displayName ? user.displayName : name,
                email: user.email,
                photoURL: user.photoURL ? user.photoURL : "",
                createdAt: new Date(),
            });
            toast.success("Doc created successfully");
        }
        catch (e){
            toast.error(e.message);
        }
    } else {
        toast.error("User already exists");
    }
}

export default createDoc;