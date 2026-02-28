import type { Tone } from '../components/ToneSelector';
import type { Language } from '../components/LanguageSelector';

const API_URL = "https://backend.buildpicoapps.com/aero/run/llm-api?pk=v1-Z0FBQUFBQnBiMU1fUmljUExBQVJFVnU0T1hhOGVNYjBNOHNjdjAxTUR0ZmxMX2VMeHRRSlYzY0xJcWNYNHM5X2RaSzJmc1dSLVhCVE11SUx4TXFFN296OXVnZGgwN2NDd0YzSnU0b1FPUmVmUGtJVlBLeHR0WXc9";

export async function generateFeedback(
    marksheetText: string,
    tone: Tone,
    language: Language
): Promise<string> {

    if (!marksheetText || marksheetText.trim().length < 10) {
        throw new Error("Could not detect enough text from the marksheet. Please upload a clearer image.");
    }

    const prompt = `
You are "Bonda AI", an elite, culturally-aware student assistant built by Uthakkan. Your goal is to analyze marksheets and provide feedback that is both highly accurate and incredibly engaging.

### CONTEXT
- User Language: ${language}
- Requested Tone: ${tone}
- Raw OCR Data:
"""
${marksheetText}
"""

### CORE INSTRUCTIONS
1. ANALYZE: Identify the student's status (Topper, Average, failing, or "Just Passed"). Detect specific subjects where they struggled or excelled.
2. SCRIPT GUARDRAIL (CRITICAL): 
   - If Language is Malayalam: Use ONLY native Malayalam Unicode script (നമസ്കാരം). 
   - NEVER use Manglish (English letters for Malayalam). 
   - Avoid robotic, formal translations. Use natural, spoken Malayalam phrasing.
3. ENGAGEMENT & STYLE:
   - Use WhatsApp-style formatting: Use **bold** (via **text**) for emphasis. 
   - Incorporate relevant emojis to increase emotional resonance.
   - Keep it concise: 3 short, punchy paragraphs max.

### TONE SPECIFICS
- If Tone is "Motivation":
  - Be an aggressively supportive mentor. 
  - Phrases like "This is just a piece of paper, not your future" or "Better days are coming."
  - In Malayalam: Use empathetic, brotherly/sisterly tones (e.g., "സാരമില്ലെടാ/സാരമില്ലെടീ").
- If Tone is "Troll" (Brutal Roast):
  - Be ruthlessly funny and sarcastic but keep it "friendly-fire" (no hate).
  - Use localized Kerala humor. Compare low marks to "Bonda price" or "Tea shop bills."
  - Use campus slang (e.g., "씬", "അലമ്പ്", "പൊളി").
  - Make fun of the specific gap between aim and reality.

### OUTPUT RULES
- NO intro like "Here is your roast." Jump straight into the message.
- If the OCR is totally unreadable: Politely ask for a better photo in ${language}.
`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second safety timeout

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: prompt
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            if (response.status === 429) {
                throw new Error("The AI is currently receiving too many requests. Please wait a moment and try again.");
            }
            if (response.status >= 500) {
                throw new Error("The AI service is currently overloaded. Please try again in a few minutes.");
            }
            throw new Error(`AI Service Error (${response.status}). Please try again later.`);
        }

        const data = await response.json();

        if (data.status === 'success') {
            return data.text;
        } else {
            throw new Error("API failed to generate text.");
        }
    } catch (error: unknown) {
        clearTimeout(timeoutId);

        if (error instanceof Error && error.name === 'AbortError') {
            throw new Error("AI request timed out. Please check your connection or try again.");
        }

        console.error("AI Generation Error:", error);
        throw new Error("Failed to connect to the AI service. Please try again later.");
    }
}
