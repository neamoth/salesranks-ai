import { useState, useRef, useEffect } from "react"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import {
    LucideRefreshCw,
    LucideThumbsUp,
    LucideThumbsDown,
    LucideClipboard,
    LucideVolume2,
} from "lucide-react"

const LiveAICoach = () => {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
        },
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [analysis, setAnalysis] = useState({
        confidenceLevel: 60,
        objectionHandling: 85,
        lastUpdated: new Date(),
    })

    const messagesEndRef = useRef(null)
    const inputRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    const [active, setActive] = useState(null); // null | 'up' | 'down'

    const handleThumbsUp = () => {
        setActive(prev => (prev === 'up' ? null : 'up'));
    };

    const handleThumbsDown = () => {
        setActive(prev => (prev === 'down' ? null : 'down'));
    };

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = async () => {
        if (input.trim() === "") return

        const userMessage = input.trim()
        setInput("")
        setIsLoading(true)

        setMessages((prev) => [...prev, { role: "user", content: userMessage }])

        try {
            const apiKey = import.meta.env.OPENAI_API_KEY
            let responseText = ""
            console.log(apiKey)

            if (apiKey) {
                const { text } = await generateText({
                    model: openai("gpt-4o"),
                    prompt: `You are an AI sales coach helping a sales professional improve their skills. 
                  Previous conversation: ${JSON.stringify(messages)}
                  User: ${userMessage}
                  Provide a helpful, concise response focused on sales techniques.`,
                    maxTokens: 500,
                })
                responseText = text
            } else {
                responseText = getMockResponse(userMessage)
                await new Promise((resolve) => setTimeout(resolve, 1000))
            }

            setMessages((prev) => [...prev, { role: "assistant", content: responseText }])

            setAnalysis({
                confidenceLevel: Math.min(100, analysis.confidenceLevel + Math.floor(Math.random() * 10)),
                objectionHandling: Math.min(100, analysis.objectionHandling + Math.floor(Math.random() * 5)),
                lastUpdated: new Date(),
            })
        } catch (error) {
            console.error("Error generating response:", error)
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "I'm sorry, I encountered an error. Please try again in a moment.",
                },
            ])
        } finally {
            setIsLoading(false)
        }
    }

    const handleQuickAction = async (action) => {
        setIsLoading(true)

        let prompt = ""
        if (action === "generate") {
            prompt = "Please generate a sales script for me based on our conversation."
        } else {
            prompt = "I'd like to practice my sales pitch. Can you provide feedback on this approach?"
        }

        setMessages((prev) => [...prev, { role: "user", content: prompt }])

        try {
            const apiKey = import.meta.env.OPENAI_API_KEY
            let responseText = ""

            if (apiKey) {
                const { text } = await generateText({
                    model: openai("gpt-4o"),
                    prompt: `You are an AI sales coach. 
                  Previous conversation: ${JSON.stringify(messages)}
                  User: ${prompt}
                  ${action === "generate"
                            ? "Generate a concise, effective sales script based on the conversation."
                            : "Provide guidance on how to practice and improve their sales pitch."
                        }`,
                    maxTokens: 500,
                })
                responseText = text
            } else {
                responseText = action === "generate" ? getMockScriptResponse() : getMockPitchResponse()
                await new Promise((resolve) => setTimeout(resolve, 1000))
            }

            setMessages((prev) => [...prev, { role: "assistant", content: responseText }])

            setAnalysis({
                confidenceLevel: Math.min(100, analysis.confidenceLevel + 15),
                objectionHandling: Math.min(100, analysis.objectionHandling + 10),
                lastUpdated: new Date(),
            })
        } catch (error) {
            console.error(`Error with ${action} action:`, error)
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "I'm sorry, I couldn't complete that action right now. Please try again later.",
                },
            ])
        } finally {
            setIsLoading(false)
        }
    }

    const handleQuickQuestion = async (question) => {
        setInput(question)
        inputRef.current?.focus()
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    const getMockResponse = (userMessage) => {
        const lowerCaseMessage = userMessage.toLowerCase()

        if (lowerCaseMessage.includes("objection") || lowerCaseMessage.includes("handle")) {
            return "When handling objections, remember the LAER framework: Listen, Acknowledge, Explore, and Respond. First, listen carefully to understand the real concern. Then, acknowledge it to show empathy. Next, explore by asking questions to uncover the root issue. Finally, respond with a tailored solution that addresses their specific concern."
        }

        if (lowerCaseMessage.includes("email") || lowerCaseMessage.includes("template")) {
            return "Here's a simple cold email template you can customize:\n\nSubject: Frontend for Softvence\n\nHi Neamoth,\n\nI noticed salesrank.ai is Nothign.\n\nSalesrank.ai has helped similar IT businesses achieve [specific result] by [how you solve their problem].\n\nWould you be open to a 15-minute call this week to discuss how we might help Softvence Grow More?\n\nNeamoth"
        }

        if (lowerCaseMessage.includes("closing") || lowerCaseMessage.includes("technique")) {
            return 'Here are three effective closing techniques:\n\n1. The assumptive close: Proceed as if the deal is already done. "When would you like to start implementation?"\n\n2. The summary close: Recap all the benefits and value they\'ll receive. "So to summarize, you\'ll get X, Y, and Z, which will help you achieve your goals of A, B, and C."\n\n3. The question close: Ask a question that leads to commitment. "What would prevent us from moving forward today?"'
        }

        if (lowerCaseMessage.includes("negotiation") || lowerCaseMessage.includes("tips")) {
            return "Here are some key negotiation tips:\n\n1. Do your research and know your value\n2. Focus on creating win-win scenarios\n3. Be willing to walk away (BATNA - Best Alternative To a Negotiated Agreement)\n4. Listen more than you speak\n5. Use silence strategically after asking questions\n6. Focus on the problem, not the person\n7. Always get commitments in writing"
        }

        return "I'm here to help you improve your sales skills. You can ask me about handling objections, closing techniques, negotiation strategies, or request templates for emails and presentations. What specific area would you like to work on today?"
    }

    const getMockScriptResponse = () => {
        return `INTRODUCTION
"Hi Sarah, this is Neamoth from SalesRanks AI. We help growing B2B sales teams close more deals by using AI to prioritize leads, personalize outreach, and improve team performance.
Does that sound relevant to your current priorities?"

DISCOVERY
"To make sure I don’t waste your time, would it be okay if I ask a couple quick questions?"

“What’s your biggest challenge right now when it comes to lead qualification or managing your sales pipeline?”

“How is that affecting your team’s ability to hit targets?”

“Have you tried using any AI tools or automation platforms to help with this before? If so, what was your experience?”

VALUE PROPOSITION
"Thanks for sharing that. From what you’ve told me, I think SalesRanks AI could be a strong fit.

Our platform uses AI to score leads in real-time based on engagement and intent signals. That means your reps can focus on the leads most likely to close—no more guesswork.

Most of our clients see a 25–40% increase in conversion rates within the first 30 days."

HANDLING OBJECTIONS
"I totally understand the hesitation around adding another tool to your stack. Many of our current users felt the same at first.

But once they saw how SalesRanks AI integrates seamlessly with tools like HubSpot and Salesforce—and actually reduced time spent on manual tasks—they were all in.

One sales director even told us, 'It’s like giving every rep their own personal assistant.'"

CLOSE
"It sounds like SalesRanks AI could bring a lot of value to your team. What would be the next step in your evaluation process?"

"Would you be open to scheduling a 20-minute demo next week to see how it could fit into your current workflow?"`
    }

    const getMockPitchResponse = () => {
        return `Want to sharpen your sales pitch? Here’s how to practice and make it really land:

1. Build a strong pitch structure
Make sure your pitch hits these key points:

Hook: Start with something that grabs attention—a bold question or a surprising fact.

Problem: Clearly explain the challenge or pain point your audience is facing.

Solution: Show how your product or service solves that problem.

Value: Highlight the real benefits—how much time or money they’ll save, or how much they could grow.

Proof: Back it up with a quick success story or testimonial.

Call to Action: End with a clear next step—what do you want them to do?

2. Practice smarter, not just more
Record yourself and listen back. Is your message clear and confident?

Keep it short—ideally 30 to 60 seconds for an initial pitch.

Run it by coworkers or friends and get honest feedback.

Watch for filler words like “um,” “like,” or “you know”—they sneak in easily.

Play with your tone and pacing to keep things interesting and natural.

3. Avoid common slip-ups
Don’t get stuck talking only about features. Focus on how you help.

Ditch the jargon. Speak your customer’s language.

Don’t use the same pitch for everyone—tailor it to who you're talking to.

And always, always end with a clear call to action.

`
    }

    return (
        <section className="bg-gradient-to-r from-blue-700 to-blue-500 bg-blue-900 text-white py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-xl font-medium mb-4 font-ai text-yellow-500 ">Live Ai Coach</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-12">Take a Suggestion Coaching</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                        <div className="bg-gray-50 p-4 border-b">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center">
                                    <span className="text-gray-50 text-xs">AI</span>
                                </div>
                                <span className="font-[18px] text-[#1b1b1b]">AI Sales Coach</span>
                            </div>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto max-h-[400px] bg-[#cdcdcd]">
                            <div className="space-y-4">
                                {messages.map((message, index) => (
                                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                                        <div
                                            className={`max-w-[80%] rounded-lg p-3 ${message.role === "user"
                                                ? "bg-gray-600 text-white rounded-tr-none"
                                                : "bg-white text-gray-800 border rounded-tl-none border-white-50"
                                                }`}
                                        >
                                            {message.role === "assistant" && (
                                                <div className="w-6 h-6 bg-[#d9d9d9] rounded-full flex items-center justify-center mb-2">
                                                    <span className="text-white text-xs"></span>
                                                </div>
                                            )}
                                            <p className="whitespace-pre-wrap">{message.content}</p>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white text-gray-800 border rounded-lg rounded-tl-none max-w-[80%] p-3">
                                            <div className="flex space-x-2">
                                                <div
                                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                    style={{ animationDelay: "0ms" }}
                                                ></div>
                                                <div
                                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                    style={{ animationDelay: "150ms" }}
                                                ></div>
                                                <div
                                                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                    style={{ animationDelay: "300ms" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        <div className="p-3 bg-gray-100 border-t">
                            <div className="flex flex-wrap gap-2 mb-3">
                                <button
                                    onClick={() => handleQuickQuestion("How do I handle objections?")}
                                    className="px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 transition-colors"
                                >
                                    How do I handle objections?
                                </button>
                                <button
                                    onClick={() => handleQuickQuestion("Give me a cold email template")}
                                    className="px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 transition-colors"
                                >
                                    Give me a cold email template
                                </button>
                                <button
                                    onClick={() => handleQuickQuestion("Closing techniques")}
                                    className="px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 transition-colors"
                                >
                                    Closing techniques
                                </button>
                                <button
                                    onClick={() => handleQuickQuestion("Negotiation tips")}
                                    className="px-3 py-1 text-xs bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 transition-colors"
                                >
                                    Negotiation tips
                                </button>
                            </div>

                            <div className="flex items-center text-black-100">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask anything you need"
                                    className="flex-1 border rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || input.trim() === ""}
                                    className={`bg-blue-600 text-white-50 px-4 py-2 rounded-r-md flex items-center justify-center ${isLoading || input.trim() === "" ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                                        }`}
                                >
                                    Send
                                    <span className="ml-1">↑</span>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-6">
                        <div className="flex items-center justify-start w-full mb-6">
                            <div className="bg-white-50 p-2 rounded-lg flex items-center space-x-2">
                                <button
                                    className="bg-white text-[#292929] hover:bg-gray-100 px-4 py-2 rounded-md flex items-center justify-center transition-colors"
                                    onClick={() => {
                                        setMessages([
                                            {
                                                role: "assistant",
                                                content:
                                                    "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?",
                                            },
                                        ])
                                        setAnalysis({
                                            confidenceLevel: 60,
                                            objectionHandling: 85,
                                            lastUpdated: new Date(),
                                        })
                                    }}
                                >
                                    <LucideRefreshCw className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={handleThumbsUp}
                                    className={`w-10 h-10 bg-white ${active === 'up' ? 'text-blue-600' : 'text-[#292929]'
                                        } hover:bg-gray-100 rounded-md flex items-center justify-center transition-colors`}
                                >
                                    <LucideThumbsUp className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={handleThumbsDown}
                                    className={`w-10 h-10 bg-white ${active === 'down' ? 'text-blue-600' : 'text-[#292929]'
                                        } hover:bg-gray-100 rounded-md flex items-center justify-center transition-colors`}
                                >
                                    <LucideThumbsDown className="w-5 h-5" />
                                </button>

                                <button className="w-10 h-10 bg-white text-[#292929]  hover:bg-gray-100 rounded-md flex items-center justify-center transition-colors">
                                    <LucideClipboard className="w-5 h-5" />
                                </button>

                                <button className="w-10 h-10 bg-white text-[#292929]  hover:bg-gray-100 rounded-md flex items-center justify-center transition-colors">
                                    <LucideVolume2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 text-black-100 font-ai font-bold ">
                            <h4 className="text-lg font-medium mb-4">Real-time Analysis</h4>
                            <div className="space-y-6 ">
                                <div className="p-5 shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <div className="w-4 h-4 bg-white-50 rounded-full mr-2 flex items-center justify-center text-white">
                                            <img src="images/confidance1.svg" className="w-[24px] h-[24px]" alt="" />
                                        </div>
                                        <span className="text-sm font-medium">Confidence Level</span>
                                        <span className="ml-auto text-sm">{analysis.confidenceLevel}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${analysis.confidenceLevel}%` }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="p-5 shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <div className="w-4 h-4 bg-white-50 rounded-full mr-2 flex items-center justify-center text-white">
                                            <img src="/images/confidance.svg" className="w-[24px] h-[24px]" alt="" />
                                        </div>
                                        <span className="text-sm font-medium">Confidence Level</span>
                                        <span className="ml-auto text-sm">{analysis.objectionHandling}%</span>
                                    </div>
                                    <div className="text-xs text-gray-600 mb-1">
                                        {analysis.objectionHandling}% improvement in objection handling
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800">
                            <h4 className="text-[32px] font-bold font-ai mb-4">Real-time Analysis</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg text-start transition-colors"
                                    onClick={() => handleQuickAction("generate")}
                                    disabled={isLoading}
                                >
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-start mb-2">
                                        <img src="/images/ai-icon1.png" alt="" />
                                    </div>
                                    <span className="xl:text-[18px] text-sm font-bold font-ai">Generate Script</span>
                                </button>

                                <button
                                    className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg text-start transition-colors"
                                    onClick={() => handleQuickAction("practice")}
                                    disabled={isLoading}
                                >
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-start  mb-2">
                                        <img src="/images/ai-icon2.png" alt="" />
                                    </div>
                                    <span className="xl:text-[18px] text-sm font-bold font-ai">Practice Pitch</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LiveAICoach