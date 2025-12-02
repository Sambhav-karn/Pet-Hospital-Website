import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

export const generatePetAdvice = async (userPrompt: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, the AI assistant is currently offline (API Key missing). Please contact the clinic directly.";
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: `You are a helpful, empathetic, and knowledgeable virtual assistant for Paw Haven Animal Hospital. 
        Your goal is to assist pet owners with general wellness advice, explain clinic services, and guide them to book an appointment.
        
        Key Clinic Info:
        - AAHA Accredited.
        - Locations: Winter Haven (Lake Alfred Rd) and Lakeland (US-98 S).
        - Services: Wellness, Surgery, Dentistry, Laser Therapy, Ultrasound, X-Ray.
        - Emergency: We provide urgent care during hours. Refer to emergency clinics after hours.
        - Tone: Professional, warm, reassuring.
        
        Disclaimer: Always remind users that you are an AI and they should see a vet for specific medical diagnoses.
        `,
      },
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to the server right now.";
  }
};
