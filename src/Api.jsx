import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_APP_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export default async function Api(i_name,i_des,i_dom) {

    const prompt = `
Provide a detailed market research analysis in React Markdown format. 

Focus directly on the following aspects without any introductory disclaimers or mentions of being an AI:  

- **Target Audience**: Identify the primary users or buyers and their characteristics.  
- **Market Value**: Estimate the potential market size, revenue, and growth trends.  
- **Implementation Timeline**: Suggest a realistic timeline with key milestones.  
- **Audience Pain Points & Willingness to Pay**: Highlight what problems the idea solves and how much the audience may be willing to invest.  
- **Key Competitors & Analysis**: List existing competitors, compare their strengths and weaknesses, and identify opportunities.  
- **Effective Market Strategy**: Propose actionable strategies for market entry, growth, and differentiation.  

Details of the idea to analyze:  
- **Idea Name:** ${i_name}  
- **Idea Description:** ${i_des}  
- **Idea Domain:** ${i_dom}  
Structure the response with clear headings and bullet points for easy readability. Ensure the analysis is concise, relevant, and directly addresses the specified aspects.`;
    
    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        console.log("result from api =",text)
        return text;
    } catch (err) {
        console.error( "error is =",err.message)
        return 'Error generating recipe'
    }
}