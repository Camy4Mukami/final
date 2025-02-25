
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "@/lib/firebase/firebase"; // Ensure this path is correct

const db = getFirestore(app);

const seedFirestore = async () => {
  try {
    console.log("🔥 Seeding Firestore...");

    // Users Collection
    await setDoc(doc(db, "users", "user1"), {
      email: "client@example.com",
      phone_number: "+123456789",
      first_name: "Alice",
      last_name: "Smith",
      role: "client",
      is_active: true,
      created_at: new Date(),
      updated_at: new Date(),
      profile_picture: "https://storage.url/pic.jpg",
    });

    await setDoc(doc(db, "users", "user2"), {
      email: "technician@example.com",
      phone_number: "+987654321",
      first_name: "Bob",
      last_name: "Jones",
      role: "technician",
      is_active: true,
      created_at: new Date(),
      updated_at: new Date(),
      profile_picture: "https://storage.url/tech.jpg",
    });

    // Clients Collection
    await setDoc(doc(db, "clients", "client1"), {
      user_id: "user1",
      preferred_location: "Downtown",
      special_requirements: "Allergic to certain polish",
      last_booking: new Date(),
    });

    // Technicians Collection
    await setDoc(doc(db, "technicians", "tech1"), {
      user_id: "user2",
      bio: "Experienced nail technician with 5+ years.",
      average_rating: 4.8,
      is_verified: true,
      verification_date: new Date(),
      service_area: ["Downtown", "Uptown"],
      is_available: true,
    });

    // Services Collection
    await setDoc(doc(db, "services", "service1"), {
      name: "Manicure",
      description: "Basic manicure with polish",
      base_price: 25.0,
      duration_minutes: 45,
      category: "Nail Care",
      is_active: true,
      created_at: new Date(),
    });

    await setDoc(doc(db, "services", "service2"), {
      name: "Pedicure",
      description: "Luxury pedicure with scrub",
      base_price: 40.0,
      duration_minutes: 60,
      category: "Nail Care",
      is_active: true,
      created_at: new Date(),
    });

    // TechnicianServices Collection
    await setDoc(doc(db, "technicianServices", "tech1_service1"), {
      technician_id: "tech1",
      service_id: "service1",
      price: 30.0,
      is_available: true,
    });

    // Certifications Collection
    await setDoc(doc(db, "certifications", "cert1"), {
      name: "Nail Care Specialist",
      issuing_authority: "Beauty Board",
      description: "Certified nail technician qualification.",
    });

    // TechnicianCertifications Collection
    await setDoc(doc(db, "technicianCertifications", "tech1_cert1"), {
      technician_id: "tech1",
      certification_id: "cert1",
      issue_date: new Date(),
      expiry_date: new Date(),
      certificate_url: "https://cert.url/certificate.jpg",
    });

    // Bookings Collection
    await setDoc(doc(db, "bookings", "booking1"), {
      client_id: "client1",
      technician_id: "tech1",
      service_id: "service1",
      booking_time: new Date(),
      status: "confirmed",
      total_amount: 30.0,
      location: "Client's Home",
      special_instructions: "Please bring extra polish",
      created_at: new Date(),
      updated_at: new Date(),
    });

    // Payments Collection
    await setDoc(doc(db, "payments", "payment1"), {
      booking_id: "booking1",
      amount: 30.0,
      status: "paid",
      payment_method: "credit_card",
      payment_time: new Date(),
      transaction_id: "TXN123456789",
    });

    // Reviews Collection
    await setDoc(doc(db, "reviews", "review1"), {
      booking_id: "booking1",
      client_id: "client1",
      technician_id: "tech1",
      rating: 5,
      comment: "Amazing service!",
      created_at: new Date(),
      is_verified: true,
    });

    // Availability Collection
    await setDoc(doc(db, "availability", "avail1"), {
      technician_id: "tech1",
      date: new Date(),
      start_time: "09:00",
      end_time: "17:00",
      is_available: true,
    });

    // Messages Collection
    await setDoc(doc(db, "messages", "message1"), {
      sender_id: "client1",
      receiver_id: "tech1",
      booking_id: "booking1",
      content: "Hey! Can you come earlier?",
      sent_at: new Date(),
      is_read: false,
    });

    // Notifications Collection
    await setDoc(doc(db, "notifications", "notif1"), {
      user_id: "tech1",
      type: "booking",
      content: "New booking confirmed!",
      is_read: false,
      created_at: new Date(),
    });

    console.log("✅ Firestore seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding Firestore:", error);
  }
};

// Run the function
seedFirestore();
