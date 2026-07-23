import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, X, MessageSquare, Minimize2 } from 'lucide-react';
import { ChatMessage } from '../types';

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Olá! Sou o Assistente da Empresa Turbinada por IA. Como posso ajudar a automatizar seus processos hoje?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsgText = input;
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Send to server API endpoint /api/chat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsgText })
      });

      if (response.ok) {
        const data = await response.json();
        const aiReply: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: data.reply || 'Entendido! Nossa equipe pode configurar esse fluxo de automação para a sua empresa.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, aiReply]);
      } else {
        throw new Error('API response error');
      }
    } catch {
      // Intelligent fallback response
      let fallbackText = 'Excelente pergunta! Com o sistema Empresa Turbinada por IA, conseguimos conectar seu atendimento do WhatsApp, CRM e banco de dados para responder clientes instantaneamente.';
      if (userMsgText.toLowerCase().includes('custo') || userMsgText.toLowerCase().includes('preço')) {
        fallbackText = 'Nossos planos ajustam-se ao tamanho da sua empresa. Conseguimos reduzir até 70% dos seus custos com tarefas repetitivas.';
      } else if (userMsgText.toLowerCase().includes('vercel') || userMsgText.toLowerCase().includes('hosped')) {
        fallbackText = 'O código gerado para este sistema é 100% limpo em React + Vite e está pronto para ser hospedado na Vercel com 1 clique!';
      }

      const aiReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiReply]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#ff3e00] text-white p-4 font-black uppercase text-xs flex items-center gap-2 shadow-2xl hover:scale-105 transition-transform border-2 border-white/20 group"
        >
          <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline font-mono tracking-wider">Testar IA ao Vivo</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-full sm:w-96 h-[500px] bg-[#0a0a0a] border-2 border-[#ff3e00] shadow-2xl flex flex-col justify-between font-sans">
          {/* Header */}
          <div className="bg-[#111] p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#ff3e00] flex items-center justify-center text-white">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-white">Agente Virtual IA</div>
                <div className="text-[10px] font-mono text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span> Resposta em tempo real
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/50 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 max-w-[85%] ${
                    msg.sender === 'user'
                      ? 'bg-white text-black font-sans font-medium'
                      : 'bg-white/10 text-white/90 border-l-2 border-[#ff3e00]'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-white/40 mt-1">{msg.timestamp}</span>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-white/50 text-xs py-2 italic font-mono">
                <Sparkles className="w-4 h-4 text-[#ff3e00] animate-spin" /> IA processando resposta...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-[#111] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua dúvida sobre a IA..."
              className="flex-1 bg-black border border-white/20 px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff3e00] font-mono"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-[#ff3e00] text-white p-2 hover:bg-white hover:text-black transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
