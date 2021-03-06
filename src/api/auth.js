import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../db/firestore'

const createUserProfile = userProfile =>
  db
    .collection('profiles')
    .doc(userProfile.uid)
    .set(userProfile);

export const userRegister = async ({ email, password, username, avatar }) => {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const { user } = res;

    await createUserProfile({ uid: user.uid, email, username, avatar, joinedChats: [] })
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = ({ email, password }) => firebase.auth().signInWithEmailAndPassword(email, password);

export const logout = () => firebase.auth().signOut();

export const onAuthStateChanges = onAuth =>
  firebase.auth().onAuthStateChanged(onAuth);