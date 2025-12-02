export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  service: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process?: string[];
  pricing?: string;
  faqs: { question: string; answer: string }[];
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
