"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function getResponse(input: string, t: ReturnType<typeof useLanguage>["t"]): string {
  const lower = input.toLowerCase();

  if (lower.includes("bonjour") || lower.includes("salut") || lower.includes("hello") || lower.includes("hi")) {
    return t.chat.responses.hello;
  }
  if (lower.includes("expérience") || lower.includes("experience") || lower.includes("parcours") || lower.includes("travail") || lower.includes("work") || lower.includes("journey")) {
    return t.chat.responses.experience;
  }
  if (lower.includes("compétence") || lower.includes("competence") || lower.includes("skill") || lower.includes("technologie") || lower.includes("outil") || lower.includes("tool")) {
    return t.chat.responses.skills;
  }
  if (lower.includes("formation") || lower.includes("diplôme") || lower.includes("diplome") || lower.includes("étude") || lower.includes("etude") || lower.includes("education") || lower.includes("degree")) {
    return t.chat.responses.education;
  }
  if (lower.includes("contact") || lower.includes("email") || lower.includes("téléphone") || lower.includes("telephone") || lower.includes("joindre") || lower.includes("reach")) {
    return t.chat.responses.contact;
  }
  if (lower.includes("disponible") || lower.includes("mission") || lower.includes("freelance") || lower.includes("poste") || lower.includes("available") || lower.includes("position")) {
    return t.chat.responses.available;
  }

  return t.chat.fallback;
}

export default function ChatWidget() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: t.chat.welcome,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: "assistant", content: t.chat.welcome }]);
  }, [t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const response = getResponse(input, t);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    }, 500);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label={t.chat.open}
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[28rem] bg-[var(--background)] border border-[var(--card-border)] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 text-white px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={16} />
            </div>
            <div>
              <p className="font-semibold text-sm">{t.chat.title}</p>
              <p className="text-xs text-white/70">{t.chat.subtitle}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    msg.role === "user"
                      ? "bg-primary-600 text-white rounded-br-sm"
                      : "bg-[var(--card)] border border-[var(--card-border)] rounded-bl-sm"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[var(--card-border)]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={t.chat.placeholder}
                className="flex-1 px-3 py-2 rounded-lg bg-[var(--card)] border border-[var(--card-border)] text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
