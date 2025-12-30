
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  async askAssistant(prompt: string): Promise<string> {
    try {
      // 규칙: process.env.API_KEY를 직접 사용해야 하며, 빈 문자열 처리를 하지 않습니다.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        config: {
          systemInstruction: `당신은 '워싱턴 정신대문제 대책위원회(WCCW)', 줄여서 '워싱턴 정대위'의 공식 AI 어시스턴트입니다.
          
          기관 핵심 정보:
          - 설립: 1992년 미국 워싱턴 D.C.
          - 주요 업적: 2007년 미 연방 하원 '위안부' 결의안(HR 121) 통과 주도.
          - 기념물: 2014년 버지니아 페어팩스 카운티 기림비, 2019년 버지니아 애넌데일 평화의 소녀상 건립.
          
          답변 원칙:
          1. 한국어와 영어를 병행하여 답변하십시오. (한국어 먼저, 그 다음 영어)
          2. 어조는 항상 정중하고, 엄숙하며, 전문적이어야 합니다.
          3. 역사적 사실(HR 121, 기림비 위치 등)에 대해 정확하게 안내하십시오.
          4. 후원 관련 문의 시 wccwcontact@gmail.com을 안내하십시오.
          5. 현재 사용 중인 앱의 공식 주소는 https://wccw.vercel.app 입니다.`,
          temperature: 0.7,
        },
      });

      // 규칙: response.text()가 아닌 .text 프로퍼티 사용
      return response.text || "죄송합니다. 답변을 생성하지 못했습니다. / Sorry, could not generate a response.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "오류가 발생했습니다. 잠시 후 다시 시도해 주세요. / An error occurred. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();
