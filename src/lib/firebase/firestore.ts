// src/lib/firebase/firestoreSetup.ts
import { db } from './firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  serverTimestamp, 
  GeoPoint 
} from 'firebase/firestore';

// Function to initialize a new user
interface UserData {
  email: string;
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  profilePicture?: string;
}

export async function createNewUser(uid: string, userData: UserData) {
  try {
    // Create user document
    await setDoc(doc(db, 'users', uid), {
      email: userData.email,
      phoneNumber: userData.phoneNumber || '',
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      role: userData.role || 'client',
      isActive: true,
      profilePicture: userData.profilePicture || '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

    // If the user is a client, create a client document
    if (userData.role === 'client') {
      await setDoc(doc(db, 'clients', uid), {
        userId: uid,
        preferredLocation: '',
        specialRequirements: '',
        lastBooking: null
      });
    }

    // If the user is a technician, create a technician document
    if (userData.role === 'technician') {
      await setDoc(doc(db, 'technicians', uid), {
        userId: uid,
        bio: '',
        averageRating: 0,
        isVerified: false,
        verificationDate: null,
        serviceArea: {
          radius: 10,
          centerPoint: new GeoPoint(0, 0), // Default values, update later
          regions: []
        },
        isAvailable: false,
        createdAt: serverTimestamp()
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Error creating new user: ', error);
    return { success: false, error };
  }
}

// Function to create a new service
interface ServiceData {
  name: string;
  description: string;
  basePrice: number;
  durationMinutes: number;
  category: string;
}

export async function createService(serviceData: ServiceData) {
  try {
    const serviceRef = doc(collection(db, 'services'));
    await setDoc(serviceRef, {
      name: serviceData.name,
      description: serviceData.description,
      basePrice: serviceData.basePrice,
      durationMinutes: serviceData.durationMinutes,
      category: serviceData.category,
      isActive: true,
      createdAt: serverTimestamp()
    });
    
    return { success: true, serviceId: serviceRef.id };
  } catch (error) {
    console.error('Error creating service: ', error);
    return { success: false, error };
  }
}

// Function to add a service to a technician
export async function addServiceToTechnician(technicianId: string, serviceId: string, price: number) {
  try {
    const techServiceRef = doc(collection(db, 'technicians', technicianId, 'services'));
    await setDoc(techServiceRef, {
      serviceId: serviceId,
      price: price,
      isAvailable: true
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error adding service to technician: ', error);
    return { success: false, error };
  }
}

// Function to create a new booking
interface BookingData {
  clientId: string;
  technicianId: string;
  serviceId: string;
  bookingTime: Date;
  totalAmount: number;
  location: string;
  specialInstructions?: string;
}

export async function createBooking(bookingData: BookingData) {
  try {
    const bookingRef = doc(collection(db, 'bookings'));
    await setDoc(bookingRef, {
      clientId: bookingData.clientId,
      technicianId: bookingData.technicianId,
      serviceId: bookingData.serviceId,
      bookingTime: bookingData.bookingTime,
      status: 'pending',
      totalAmount: bookingData.totalAmount,
      location: bookingData.location,
      specialInstructions: bookingData.specialInstructions || '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    return { success: true, bookingId: bookingRef.id };
  } catch (error) {
    console.error('Error creating booking: ', error);
    return { success: false, error };
  }
}

// Function to add technician availability
interface AvailabilityData {
  date: string; // Format: YYYY-MM-DD
  startTime: string; // Format: HH:MM
  endTime: string; // Format: HH:MM
}

export async function addTechnicianAvailability(technicianId: string, availabilityData: AvailabilityData) {
  try {
    const availabilityRef = doc(collection(db, 'technicians', technicianId, 'availability'));
    await setDoc(availabilityRef, {
      date: availabilityData.date, // Format: YYYY-MM-DD
      startTime: availabilityData.startTime, // Format: HH:MM
      endTime: availabilityData.endTime, // Format: HH:MM
      isAvailable: true
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error adding technician availability: ', error);
    return { success: false, error };
  }
}

// Function to create a review after booking
interface ReviewData {
  bookingId: string;
  clientId: string;
  technicianId: string;
  rating: number;
  comment?: string;
}

export async function createReview(reviewData: ReviewData) {
  try {
    const reviewRef = doc(collection(db, 'reviews'));
    await setDoc(reviewRef, {
      bookingId: reviewData.bookingId,
      clientId: reviewData.clientId,
      technicianId: reviewData.technicianId,
      rating: reviewData.rating,
      comment: reviewData.comment || '',
      createdAt: serverTimestamp(),
      isVerified: false
    });
    
    // Update technician's average rating
    // This would require a separate function or cloud function to calculate the new average
    
    return { success: true, reviewId: reviewRef.id };
  } catch (error) {
    console.error('Error creating review: ', error);
    return { success: false, error };
  }
}

// Function to send a message
interface MessageData {
  senderId: string;
  receiverId: string;
  bookingId?: string;
  content: string;
}

export async function sendMessage(messageData: MessageData) {
  try {
    // Create or update the conversation
    const conversationId = `conv_${messageData.senderId}_${messageData.receiverId}`.split('_').sort().join('_');
    
    // Add the message
    const messageRef = doc(collection(db, 'messages'));
    await setDoc(messageRef, {
      senderId: messageData.senderId,
      receiverId: messageData.receiverId,
      bookingId: messageData.bookingId || null,
      content: messageData.content,
      sentAt: serverTimestamp(),
      isRead: false
    });
    
    // Update the conversation
    await setDoc(doc(db, 'conversations', conversationId), {
      participants: [messageData.senderId, messageData.receiverId].sort(),
      lastMessage: messageData.content,
      lastMessageTime: serverTimestamp(),
      unreadCount: {
        [messageData.senderId]: 0,
        [messageData.receiverId]: 1 // Increment unread for receiver
      }
    }, { merge: true });
    
    return { success: true, messageId: messageRef.id };
  } catch (error) {
    console.error('Error sending message: ', error);
    return { success: false, error };
  }
}

// Function to create a notification
export async function createNotification(userId: string, notificationType: string, content: string) {
  try {
    const notificationRef = doc(collection(db, 'notifications'));
    await setDoc(notificationRef, {
      userId: userId,
      type: notificationType,
      content: content,
      isRead: false,
      createdAt: serverTimestamp()
    });
    
    return { success: true, notificationId: notificationRef.id };
  } catch (error) {
    console.error('Error creating notification: ', error);
    return { success: false, error };
  }
}