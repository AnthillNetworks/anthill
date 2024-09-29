const {db} = require('./firebase'); // Import the Firestore instance

const enquiriesCollection = db.collection('enquiries');

// Create a new enquiry
async function createEnquiry(enquiryData) {
    try {
        //add created at
        enquiryData.created_at = new Date();
        const enquiryRef = await enquiriesCollection.add(enquiryData);
        console.log(`Enquiry created with ID: ${enquiryRef.id}`);
        return enquiryRef.id;
    } catch (error) {
        console.error("Error creating enquiry: ", error);
    }
}

// Get an enquiry by ID
async function getEnquiry(enquiryId) {
    try {
        const enquiryDoc = await enquiriesCollection.doc(enquiryId).get();
        if (enquiryDoc.exists) {
            return enquiryDoc.data();
        } else {
            console.log("No such enquiry!");
            return null;
        }
    } catch (error) {
        console.error("Error getting enquiry: ", error);
    }
}

// Update an enquiry by ID
async function updateEnquiry(enquiryId, updatedData) {
    try {
        await enquiriesCollection.doc(enquiryId).update(updatedData);
        console.log(`Enquiry with ID: ${enquiryId} updated successfully.`);
    } catch (error) {
        console.error("Error updating enquiry: ", error);
    }
}

// Delete an enquiry by ID
async function deleteEnquiry(enquiryId) {
    try {
        await enquiriesCollection.doc(enquiryId).delete();
        console.log(`Enquiry with ID: ${enquiryId} deleted successfully.`);
    } catch (error) {
        console.error("Error deleting enquiry: ", error);
    }
}

// Get all enquiries for a specific house
async function getEnquiriesByHouse(houseId) {
    try {
        const enquiriesSnapshot = await enquiriesCollection.where('houseid', '==', houseId).get();
        const enquiries = [];
        enquiriesSnapshot.forEach(doc => {
            enquiries.push({ id: doc.id, ...doc.data() });
        });
        return enquiries;
    } catch (error) {
        console.error("Error getting enquiries by house: ", error);
    }
}

// Get all enquiries by a specific user
async function getEnquiriesByUser(userId) {
    try {
        const enquiriesSnapshot = await enquiriesCollection.where('user_id', '==', userId).get();
        const enquiries = [];
        enquiriesSnapshot.forEach(doc => {
            enquiries.push({ id: doc.id, ...doc.data() });
        });
        return enquiries;
    } catch (error) {
        console.error("Error getting enquiries by user: ", error);
    }
}

//Get all enquiries
async function getAllEnquiries() {
    try {
        const enquiriesSnapshot = await enquiriesCollection.get();
        const enquiries = [];
        enquiriesSnapshot.forEach(doc => {
            enquiries.push({ id: doc.id, ...doc.data() });
        });
        return enquiries;
    } catch (error) {
        console.error("Error getting all enquiries: ", error);
    }
}

module.exports = {
    createEnquiry,
    getEnquiry,
    updateEnquiry,
    deleteEnquiry,
    getEnquiriesByHouse,
    getEnquiriesByUser,
    getAllEnquiries,
};
