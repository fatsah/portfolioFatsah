"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const defaultResponses: Record<string, string> = {
  bonjour: "Bonjour ! Je suis l'assistant virtuel de Fatsah. Comment puis-je vous aider ? Vous pouvez me poser des questions sur son parcours, ses compétences ou ses expériences.",
  experience: "Fatsah a plus de 5 ans d'expérience en Data Engineering. Il travaille actuellement chez Orange France sur la migration de données vers GCP (BigQuery, Airflow). Avant ça, il a travaillé chez LISI Aerospace (AWS) et Renault-Nissan-Mitsubishi.",
  competences: "Ses compétences principales : GCP (BigQuery, Composer, Dataflow), AWS (Athena, Glue, S3), Python, Airflow, Docker, PySpark, SQL, Talend, GitLab CI/CD. Il maîtrise aussi la modélisation de données et les méthodologies Agile.",
  formation: "Fatsah a une formation de Concepteur Big Data/Cloud (Fitec, 2021), un Master 2 en Mécatronique de l'UTC Compiègne (2016) et un Master 2 en Électrotechnique de l'Université de Béjaïa (2014).",
  contact: "Vous pouvez contacter Fatsah par email : tacherfiout.fatsah@gmail.com ou par téléphone : 07 57 63 37 95. Il est basé en Île-de-France (Bondy, 93).",
  disponible: "Fatsah est actuellement en poste chez Orange France en tant que Consultant Data Engineer. N'hésitez pas à le contacter pour discuter d'opportunités.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.includes("bonjour") || lower.includes("salut") || lower.includes("hello")) {
    return defaultResponses.bonjour;
  }
  if (lower.includes("expérience") || lower.includes("experience") || lower.includes("parcours") || lower.includes("travail")) {
    return defaultResponses.experience;
  }
  if (lower.includes("compétence") || lower.includes("competence") || lower.includes("skill") || lower.includes("technologie") || lower.includes("outil")) {
    return defaultResponses.competences;
  }
  if (lower.includes("formation") || lower.includes("diplôme") || lower.includes("diplome") || lower.includes("étude") || lower.includes("etude")) {
    return defaultResponses.formation;
  }
  if (lower.includes("contact") || lower.includes("email") || lower.includes("téléphone") || lower.includes("telephone") || lower.includes("joindre")) {
    return defaultResponses.contact;
  }
  if (lower.includes("disponible") || lower.includes("mission") || lower.includes("freelance") || lower.includes("poste")) {
    return defaultResponses.disponible;
  }

  return "Je peux vous renseigner sur le parcours de Fatsah, ses compétences techniques, sa formation ou ses coordonnées. Que souhaitez-vous savoir ?";
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Bonjour ! 👋 Je suis l'assistant de Fatsah. Posez-moi vos questions sur son parcours, compétences ou expériences.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const response = getResponse(input);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    }, 500);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Ouvrir le chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[28rem] bg-[var(--background)] border border-[var(--card-border)] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 text-white px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle size={16} />
            </div>
            <div>
              <p className="font-semibold text-sm">Assistant IA</p>
              <p className="text-xs text-white/70">Posez vos questions</p>
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
                placeholder="Votre question..."
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
