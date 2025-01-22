"use client"

import { useState } from "react"
import { Send, Smile, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Message = {
  id: number
  text: string
  sender: "user" | "ai"
  mood?: "happy" | "sad" | "neutral"
}

const aiSuggestions = [
  "That's interesting! Can you tell me more?",
  "I understand how you feel. What do you think we should do next?",
  "That's a great point! Have you considered looking at it from this perspective?",
]

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [mood, setMood] = useState<"happy" | "sad" | "neutral">("neutral")

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = { id: Date.now(), text: input, sender: "user", mood }
      setMessages([...messages, newMessage])
      setInput("")

      // Simulate AI response
      setTimeout(() => {
        const aiMessage: Message = {
          id: Date.now(),
          text: aiSuggestions[Math.floor(Math.random() * aiSuggestions.length)],
          sender: "ai",
        }
        setMessages((prev) => [...prev, aiMessage])
      }, 1000)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-[60vh] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex items-start space-x-2 max-w-[70%] ${
                  message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <Avatar>
                  <AvatarImage src={message.sender === "user" ? "/user-avatar.png" : "/ai-avatar.png"} />
                  <AvatarFallback>{message.sender === "user" ? "U" : "AI"}</AvatarFallback>
                </Avatar>
                <div
                  className={`rounded-lg p-3 ${
                    message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <p>{message.text}</p>
                  {message.mood && (
                    <span className="text-xs mt-1 block">
                      Mood: {message.mood === "happy" ? "😊" : message.mood === "sad" ? "😢" : "😐"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center space-x-2 mb-2">
            <Smile className="text-gray-400" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMood("happy")}
              className={mood === "happy" ? "bg-green-100" : ""}
            >
              <ThumbsUp className="w-4 h-4 mr-1" /> Happy
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMood("sad")}
              className={mood === "sad" ? "bg-red-100" : ""}
            >
              <ThumbsDown className="w-4 h-4 mr-1" /> Sad
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMood("neutral")}
              className={mood === "neutral" ? "bg-gray-100" : ""}
            >
              Neutral
            </Button>
          </div>
          <div className="flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend}>
              <Send className="w-4 h-4 mr-2" /> Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

