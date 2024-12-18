const {db} = require("./firebase");

const blogsCollection = db.collection("Blogs");

async function createBlog(blogData) {
  try {
    const blogRef = await blogsCollection.add(blogData);
    console.log(`Blog created with ID: ${blogRef.id}`);
    return blogRef.id;
  } catch (error) {
    console.error("Error creating blog: ", error);
  }
}

async function getBlog(id) {
  console.log(id)
  try {
    const blogDoc = await blogsCollection.doc(id).get();
    if (blogDoc.exists) {
      return blogDoc.data();
    } else {
      console.log(`No document with ID: ${id} exists`);
    }
  } catch (error) {
    console.error("Error getting blog: ", error);
  }
}

async function updateBlog(id, updatedData) {
  try {
    await blogsCollection.doc(id).update(updatedData);
    console.log(`Blog updated with ID: ${id}`);
  } catch (error) {
    console.error("Error updating blog: ", error);
  }
}

async function deleteBlog(id) {
  try {
    await blogsCollection.doc(id).delete();
    console.log(`Blog deleted with ID: ${id}`);
  } catch (error) {
    console.error("Error deleting blog: ", error);
  }
}

async function getAllBlogs() {
  try {
    const querySnapshot = await blogsCollection.get();
    const blogList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data() 
    }));
    return blogList;
  } catch (error) {
    console.error("Error getting all blogs: ", error);
    return [];
  }
}

module.exports = {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};
