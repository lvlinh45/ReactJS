import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  // colRef: colection reference
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  const [posts, setPosts] = useState("");
  //   console.log("TCL: FirebaseApp -> colRef", colRef);
  useEffect(() => {
    // 1. get collection data (posts)
    /*     getDocs(colRef)
      .then((snapshot) => {
        // console.log(snapshot);
        let posts = [];
        snapshot.docs.forEach((doc) => {
          //   console.log("TCL: FirebaseApp -> doc", doc.data());
          posts.push({ id: doc.id, ...doc.data() });
        });
        setPosts(posts);
        // console.log("TCL: FirebaseApp -> posts", posts);
      })
      .catch((err) => {
        console.log(err);
      }); */
    // Cach 2: get document in realtime
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(posts);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createdAt: serverTimestamp(),
    })
      .then((doc) => {
        console.log("success");
        // reset form
      })
      .catch((err) => {
        console.log(err);
        console.log("submit");
      });
  };
  const handleRemovePost = async (e) => {
    e.preventDefault();
    // get document ID
    const colRefDelete = doc(db, "posts", postId);
    await deleteDoc(colRefDelete);
    console.log("delete");
  };

  // createAt

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postId);
    await updateDoc(colRefUpdate, {
      title: "this is a new title from update",
    });
    console.log("delete");
  };
  return (
    <div>
      <div className="p-10">
        <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
          <form onSubmit={handleAddPost}>
            <input
              type="text"
              className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
              placeholder="Enter your title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
              placeholder="Enter your author"
              name="author"
              onChange={(e) => setAuthor(e.target.value)}
            />
            <button
              type="submit"
              className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
              Add post
            </button>
          </form>
        </div>
        <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
          <form onSubmit={handleRemovePost}>
            <input
              type="text"
              className="w-full p-3 mb-10 border border-gray-200 rounded outline-none focus:border-blue-500"
              placeholder="Enter your id"
              name="postId"
              onChange={(e) => setPostId(e.target.value)}
            />

            <button
              type="submit"
              className="w-full p-3 text-sm font-medium text-white bg-red-500 rounded-lg"
            >
              Remove post
            </button>
          </form>
        </div>
        <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
          {posts.length > 0 &&
            posts.map((item) => (
              <div key={item.title}>
                <div>
                  {item.title} - {item.author}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FirebaseApp;
