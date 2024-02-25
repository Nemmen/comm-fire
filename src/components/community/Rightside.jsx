import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth, db } from "../../firebase";
import {
  collection,
  getDocs,
  setDoc,
  getDoc,
  addDoc,
  orderBy,
  doc,
  query,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Story from "./Story";

const Rightside = () => {
  const timestamp = new Date();
  const [stories, setStories] = useState([]);

  const [user] = useAuthState(auth);
 
  const usersRef = collection(db, "users");
  const storyRef = collection(db, "stories");
  const [desc, setDesc] = useState("");
  const changeHandle = (e) => {
    setDesc(e.target.value);
  };
  const addHandle = async () => {
    try {
      await addDoc(storyRef, {
        uid: user.uid,
        story: desc,
        name: user.displayName,
        timestamp: timestamp,
      });
      toast.success("Your story has been added");
      setDesc("");
    } catch (err) {
      toast.error("Error posting story");
      console.log(err);
    }
  };

  const getStory = async () => {
    const data = await getDocs(query(storyRef, orderBy("timestamp", "desc")));

    setStories(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id, key: doc.id }))
    );
  };

  useEffect(() => {
    getStory();
  }, [stories]);
  const getEntries = async () => {
    try {
      const userDoc = await getDoc(doc(usersRef, user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(usersRef, user.uid), {
          username: user.displayName,
          uid: user.uid,
          email: user.email,
          createdAt: timestamp,
          updatedAt: timestamp,
        });
      } else {

        // Update the existing document if needed
      }
    } catch (error) {
      console.error("Error adding or retrieving document:", error);
    }
  };
  useEffect(() => {
    getEntries();
  }, [user]);

  // console.log(stories);
  // console.log("helluuo" , entrie);
  return (
    <div className="divide-y divide-gray-300">
      {
        (user === null) ? (<div className="mb-[30px] text-xl text-center text-[#6a65ff]">You are not alone. Your pain is valid, your journey is unique, and your healing is possible.</div>) : (

          <div className="bg-white p-4 rounded-lg ">
            <div className="relative bg-inherit">
              <textarea
                type="text"
                id="username"
                name="username"
                className="peer bg-transparent h-[50px] w-full rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-[#6a65ff] focus:outline-none focus:border-rose-600"
                placeholder="Have Some Story To Share...."
                value={desc}
                onChange={changeHandle}
              />
              <label
                for="username"
                className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[#6a65ff] peer-focus:text-sm transition-all"
              >
                Have Some Story To Share....
              </label>
            </div>
            <button
              className="inline-block px-12 py-3 text-sm font-medium text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
              onClick={addHandle}
            >
              Post Your Story
            </button>
          </div> 
        )
      }
      <div className="pt-5">
        <Story stories={stories} />
      </div>
    </div>
  );
};

export default Rightside;
