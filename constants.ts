import { ServiceItem, Testimonial, TeamMember } from './types';

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Randal M.", rating: 5, service: "Wellness & Surgery", text: "We finally found a vet that is caring and we can trust. Dr. Orange performed a spay and a mass removal on our Labrador. The team explained everything, called with updates and the recovery plan was clear." },
  { id: 2, name: "Robin L.", rating: 5, service: "Acupuncture & Wellness", text: "Our rescue dog used to panic at vet visits. At Paw Haven, Dr. Glass took time to build trust and recommended acupuncture which improved her mobility." },
  { id: 3, name: "Deborah A.", rating: 5, service: "Urgent Care", text: "They took a non-patient pet for emergency care within two hours of my call — incredibly caring and responsive." },
  { id: 4, name: "Kim C.", rating: 5, service: "General Care", text: "I switched to Paw Haven after reading reviews and I’m so glad I did. Clean facility, kind staff and clear communication." },
  { id: 5, name: "Ashley H.", rating: 4, service: "Dentistry", text: "Clinic did a great job with my cat’s dental. Communication was good and the bill was fair. Wish they offered more weekend hours." },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "wellness",
    title: "Pet Wellness Exams",
    shortDescription: "The foundation of a long, healthy life for your pet.",
    fullDescription: "Routine wellness exams are the foundation of a long, healthy life for your pet. At Paw Haven Animal Hospital, our veterinarians combine compassionate hands-on exams with modern diagnostics and personalized health plans. A typical wellness visit includes a complete physical exam — heart, lungs, eyes, ears, skin, teeth and joints.",
    benefits: ["Early detection of problems", "Tailored vaccination plans", "Fast in-house testing", "Personalized wellness plans"],
    pricing: "Routine exam: Starting at $55–$85",
    faqs: [
      { question: "How often should my pet have a wellness exam?", answer: "Puppies/kittens: every 3-4 weeks initially. Adults: annually. Seniors: every 6-12 months." },
      { question: "Can you do bloodwork same day?", answer: "Yes, many tests are completed same day with our in-house lab." }
    ],
    image: "../Image/PetWellness.jpg"
  },
  {
    id: "vaccines",
    title: "Vaccines & Prevention",
    shortDescription: "Protect against serious disease with evidence-based protocols.",
    fullDescription: "Vaccination is one of the single most effective steps to protect your pet. We offer core vaccines (rabies, distemper/parvo) and lifestyle vaccines (kennel cough, leptospirosis) based on your pet's specific needs.",
    benefits: ["Evidence-based protocols", "Automated reminders", "Vaccine titers available", "Rabies certificates provided"],
    pricing: "Core vaccine visit: Starting at $40–$70 per vaccine",
    faqs: [
      { question: "Are vaccines safe?", answer: "Yes; we screen each pet before vaccinating and discuss risk vs. benefit." },
      { question: "Can I get all shots in one visit?", answer: "Often yes, depending on age and health." }
    ],
    image: "../Image/VaccinesPet.jpg"
  },
  {
    id: "dentistry",
    title: "Dentistry & Oral Surgery",
    shortDescription: "Pain relief and better overall health through dental care.",
    fullDescription: "Untreated dental disease can cause pain and infection. Our dental program includes thorough oral exams, digital radiographs, professional cleanings, and extractions when needed. We use modern anesthetic protocols for safety.",
    benefits: ["Pain relief", "Improved quality of life", "Digital dental radiographs", "Tailored home care plans"],
    pricing: "Cleaning w/ anesthesia: Starting at $350–$650",
    faqs: [
      { question: "Will my pet be anesthetized?", answer: "Yes, for safe and thorough cleaning. Pre-op testing minimizes risk." },
      { question: "How often should teeth be cleaned?", answer: "Many pets benefit from annual cleanings." }
    ],
    image: "../Image/Surgery.jpg"
  },
  {
    id: "surgery",
    title: "Surgery & Advanced Procedures",
    shortDescription: "Modern techniques and experienced surgical team.",
    fullDescription: "Our surgical team performs spays/neuters, mass removals, and urgent surgical care. Complex procedures are handled with meticulous planning, modern anesthetic protocols, and comprehensive pain management.",
    benefits: ["Experienced surgical team", "Modern monitoring equipment", "Comprehensive pain control", "In-house diagnostics"],
    pricing: "Routine spay/neuter: Starting at $180–$350",
    faqs: [
      { question: "How long is my pet in surgery?", answer: "Varies by procedure; expect several hours including recovery." },
      { question: "Will my pet be pain-free?", answer: "We use multimodal pain control to minimize discomfort." }
    ],
    image: "../Image/AdvanceSurgery.jpg "
  },
  {
    id: "laser",
    title: "Cold Laser Therapy",
    shortDescription: "Non-invasive pain relief and rehabilitation.",
    fullDescription: "Cold laser therapy is a safe, non-invasive treatment that reduces pain and inflammation while speeding tissue healing. It is excellent for arthritis, injuries, and post-op recovery.",
    benefits: ["Non-invasive, drug-free", "Speeds recovery", "Great for chronic arthritis", "No sedation required"],
    pricing: "Session: Starting at $30–$65",
    faqs: [
      { question: "Is it safe?", answer: "Yes, it is non-invasive and well-tolerated." },
      { question: "How soon will I see results?", answer: "Some pets show improvement after the first session." }
    ],
    image: "../Image/Laser.jpg"
  }
];

export const TEAM: TeamMember[] = [
  { name: "Dr. Cindy Orange", role: "Veterinarian (Lead Clinician)", bio: "Leading with compassion and AAHA standards.", image: "../Image/DrOrange.avif" },
  { name: "Dr. Jennifer Glass", role: "Veterinarian", bio: "Expert in internal medicine and acupuncture.", image: "../Image/DrGlass.avif" },
  { name: "Dr. Caleb Sutton", role: "Veterinarian", bio: "Specializing in surgery and preventive care.", image: "../Image/DrSutton.avif" },
  { name: "Ellie", role: "Clinic Comfort Pup", bio: "Staff morale officer and pet soother.", image: "../Image/DrEllie.avif" },
];
