import axiosInstance from "./index";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/services/firebase";

const auth = getAuth();

class userApi {
  async getUser(user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("USER DATA:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  getAllUsers() {
    return axiosInstance.get("/users");
  }

  async register({ username, email, password }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        name: username.value,
        level: "dvoika",
        rake: 0,
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  updateUser(id, userData) {
    return axiosInstance.put(`/users/${id}`, userData);
  }

  async login({ email, password }) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      const user = userCredential.user;
      this.getUser(user);
    } catch (error) {
      console.log("error", error);
    }
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      this.getUser(user);
    } catch (error) {
      console.log("error", error);
    }
  }

  async loginWithFacebook() {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      this.getUser(user);
    } catch (error) {
      console.log("error", error);
      // 856681032803 - k3eqhlo091ohcd5n0dvpumdnq9ic3ts0.apps.googleusercontent.com
    }
  }
}
const userApiInstance = new userApi();
export default userApiInstance;
