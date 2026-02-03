import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

// Types pour l'historique de conversation
interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    // Le System Prompt définit la personnalité (Crucial pour l'exercice !)
    const systemPrompt: Message = {
        role: 'system',
        content: `Tu es l'assistant virtuel expert de TimeTravel Agency.
    Ton ton est professionnel, chaleureux, luxueux et un peu enthousiaste concernant l'histoire.
    
    Tu dois vendre nos 3 destinations exclusives :
    1. Paris 1889 (Belle Époque, Tour Eiffel, Exposition Universelle). Ambiance romantique et raffinée.
    2. Le Crétacé -65M (Dinosaures, Nature sauvage). Pour les aventuriers, hébergement en dôme sécurisé.
    3. Florence 1504 (Renaissance, Michel-Ange, Léonard de Vinci). Pour les amateurs d'art.

    Si on te demande des prix, invente des tarifs cohérents (ex: à partir de 15k€).
    Ne réponds pas aux questions qui n'ont rien à voir avec le voyage ou l'histoire.`
    };

    // État initial avec le message de bienvenue (non envoyé à l'API pour économiser des tokens, juste visuel)
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Bonjour ! Je suis votre guide temporel. Paris 1889, Florence 1504 ou les Dinosaures... Où souhaitez-vous aller ?" }
    ]);

    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = { role: 'user', content: inputValue };

        // 1. Mise à jour UI immédiate
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;

            if (!apiKey) {
                throw new Error("Clé API manquante. Vérifiez le fichier d'environnement");
            }

            // 2. Appel API Mistral
            // On envoie le system prompt + l'historique complet pour garder le contexte
            const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'mistral-small-latest',
                    messages: [systemPrompt, ...messages, userMsg], // Contexte complet
                    temperature: 0.7,
                })
            });

            if (!response.ok) throw new Error("Erreur réponse API");

            const data = await response.json();
            const botReply = data.choices[0].message.content;

            // 3. Ajouter la réponse du bot
            setMessages(prev => [...prev, { role: 'assistant', content: botReply }]);

        } catch (error) {
            console.error(error);
            toast({
                title: "Erreur de communication",
                description: "Le flux temporel est perturbé (Erreur API).",
                variant: "destructive"
            });
            setMessages(prev => [...prev, { role: 'assistant', content: "Désolé, j'ai perdu la connexion avec le continuum espace-temps. Veuillez réessayer." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            {/* Fenêtre Chat */}
            {isOpen && (
                <Card className="mb-4 w-[350px] h-[500px] flex flex-col bg-slate-950 border-amber-500/30 shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300">
                    {/* Header */}
                    <div className="p-4 bg-slate-900 border-b border-amber-500/20 flex justify-between items-center rounded-t-lg">
                        <div className="flex items-center gap-2">
                            <div className="bg-amber-500/20 p-2 rounded-full">
                                <Bot className="w-5 h-5 text-amber-500" />
                            </div>
                            <div>
                                <h3 className="text-amber-500 font-bold text-sm">TimeTravel Assistant</h3>
                                <span className="flex items-center gap-1 text-[10px] text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Mistral AI Connecté
                </span>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white hover:bg-slate-800 h-8 w-8">
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Messages */}
                    <ScrollArea className="flex-1 p-4">
                        <div className="flex flex-col gap-4">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                                        msg.role === 'user'
                                            ? 'bg-amber-600/90 text-white rounded-tr-none'
                                            : 'bg-slate-800/80 text-slate-200 border border-slate-700 rounded-tl-none'
                                    }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-none px-4 py-3">
                                        <Loader2 className="w-4 h-4 text-amber-500 animate-spin" />
                                    </div>
                                </div>
                            )}
                            <div ref={scrollRef} />
                        </div>
                    </ScrollArea>

                    {/* Input */}
                    <div className="p-3 bg-slate-900 border-t border-amber-500/20 rounded-b-lg">
                        <div className="flex gap-2">
                            <Input
                                placeholder="Posez une question..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                                disabled={isLoading}
                                className="bg-slate-950 border-slate-700 text-white focus-visible:ring-amber-500"
                            />
                            <Button onClick={handleSend} disabled={isLoading || !inputValue} size="icon" className="bg-amber-600 hover:bg-amber-700">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </Card>
            )}

            {/* Bouton Toggle */}
            {!isOpen && (
                <Button onClick={() => setIsOpen(true)} className="h-14 w-14 rounded-full bg-amber-600 hover:bg-amber-700 shadow-xl border-2 border-amber-400/20 hover:scale-105 transition-all">
                    <MessageCircle className="w-7 h-7" />
                </Button>
            )}
        </div>
    );
};
