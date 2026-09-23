import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"; 
import {getStorage} from 'firebase/storage'
import { collection, getDocs, getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyBPjnARzfcvOTrdaTDN2gbjXvnreEwSpo8",
  authDomain: "olx-clone-c9b47.firebaseapp.com",
  projectId: "olx-clone-c9b47",
  storageBucket: "olx-clone-c9b47.firebasestorage.app",
  messagingSenderId: "75603757666",
  appId: "1:75603757666:web:d4298a14199572bded9f3b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const fireStore = getFirestore(app);


const fetchFromFirestore = async () => {
    try {
      const productsCollection = collection(fireStore, 'products');
      const productSnapshot = await getDocs(productsCollection);
      const productList = productSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) 
      console.log("Fetched products from Firestore:", productList);
      return productList;
    } catch (error) {
      console.error("Error fetching products from Firestore:", error);
      return [];
    }
  };
  

  export {
    auth,
    provider,
    storage,
    fireStore,
    fetchFromFirestore
  }