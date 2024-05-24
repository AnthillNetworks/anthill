"use server"
import { db } from '@/app/firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


async function uploadPost(title, content, imageFile) {

  let url = '';  
  try {
    const storage = getStorage();
    const mountainsRef = ref(storage, imageFile.name);
    const mountainImagesRef = ref(storage, `images/${imageFile.name}`);
    mountainsRef.name === mountainImagesRef.name;       
    mountainsRef.fullPath === mountainImagesRef.fullPath; 
    console.log(mountainsRef.fullPath, mountainsRef.name)

    const storageRef = ref(storage, `images/${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on('state_changed', 
    (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case 'paused':
            console.log('Upload is paused');
            break;
        case 'running':
            console.log('Upload is running');
            break;
        }
    }, 
    (error) => {
        console.log(error)
    }, 
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
        console.log('File available at', downloadURL);
        url = downloadURL;
        const currentDatetime = new Date().toISOString();
        await setDoc(doc(db, "Blogs", currentDatetime), {
            title: title,
            content: content,
            url: downloadURL
        });
        });
        console.log('Post uploaded successfully');
    }  
  );
  return true

  } catch (error) {
    console.error('Error uploading post:', error);
    return 'Error uploading post:', error;
  }
}

export { uploadPost };
