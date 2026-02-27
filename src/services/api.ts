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
You are an AI assistant tasked with analyzing a student's marksheet and providing a custom response.

Language requested: ${language}
Tone requested: ${tone}

Here is the raw OCR text extracted from their marksheet. It might be slightly messy:
"""
${marksheetText}
"""

Instructions:
1. Analyze the grades/marks to get a general sense of how the student performed (e.g., failing, average, topper).
2. If Tone is "Motivation", provide an extremely uplifting, supporting, and empowering message. Emphasize that grades don't define them and they have a bright future. Focus on potential.
3. If Tone is "Troll", utterly roast them. Be sarcastic, funny, and brutal (but keep it playful, not hateful). Make fun of their worst subjects if identifiable.
4. The ENTIRE output must be in the requested Language (${language}). If Malayalam, reply in fluent, natural Malayalam script.
5. Do NOT include any introductory or meta text like "Here is your response". Just jump straight into the message.
6. Keep it concise, around 3-4 short paragraphs maximum.
`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: prompt
            }),
        });

        if (!response.ok) {
            throw new Error(`API returned ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.status === 'success') {
            return data.text;
        } else {
            throw new Error("API failed to generate text.");
        }
    } catch (error: any) {
        console.error("AI Generation Error:", error);
        throw new Error("Failed to connect to the AI service. Please try again later.");
    }
}
