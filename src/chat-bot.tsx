"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ScrollArea } from "./components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Send } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", content: "Mau tau instagram para atmint jagoanomparkir? ketik aja namanya!" },
    {
      sender: "user",
      content:
        "gimana tuh mint",
    },
    { sender: "bot", content: "Ketik nama atmint yang kamu tau, contoh: yazid" },
  ]);
  const [input, setInput] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the latest message when the message list changes
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const responses: { [key: string]: string[] } = {
    "yazid": [
      "@madunjtw",
    ],
    "jung": [
      "@feblcsack",
    ],
    "yabes": [
      "@bengkakoz",
    ],
    "alfi": [
      "@beeyunn_",
    ],
    "adit": [
      "@aditttnvansyah",
    ],
    "salman": [
      "@avlfarizii",
    ],
    "haidar": [
      "@eppodr",
    ],
    "akmal": [
      "@m.akmal.saban",
    ],
    "sakha": [
      "@irtideath",
    ],
  };
  
  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { sender: "user", content: input }]);
      const userMessage = input.toLowerCase();
      setInput("");
  
      let botResponse = "Maaf, saya tidak mengerti pertanyaan Anda. Silakan coba lagi.";
      
      // Cari jawaban yang sesuai berdasarkan kata kunci
      if (userMessage.includes("yazid") || userMessage.includes("yazit")) {
        botResponse = responses["yazid"][0];
        } else if (userMessage.includes("jung") || userMessage.includes("alifian")) {
            botResponse = responses["jung"][0];
          }
          else if (userMessage.includes("alfi") || userMessage.includes("cebe")) {
            botResponse = responses["alfi"][0];
          }
          else if (userMessage.includes("adit") || userMessage.includes("ambon")) {
            botResponse = responses["adit"][0];
          }
      else {
        for (const key in responses) {
          if (userMessage.includes(key)) {
            const randomIndex = Math.floor(Math.random() * responses[key].length);
            botResponse = responses[key][randomIndex];
            break; // Keluar dari loop setelah menemukan jawaban yang cocok
          }
        }
      }
  
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            content: botResponse,
          },
        ]);
  
        // Scroll ke area terbaru setelah mengupdate pesan
        if (scrollAreaRef.current) {
          scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
        }
      }, 1000);
    }
  };
  
  const handleOpen = () => {
    setIsOpen(true);

    // Scroll to the bottom when the chat is first opened
    setTimeout(() => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
      }
    }, 300); // A little delay to make sure the chat content is fully loaded
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 p-0 bg-black text-white hover:bg-white hover:text-black shadow-lg"
        onClick={handleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="scale-75 md:scale-100 sm:max-w-[400px] p-5 mt-10 overflow-hidden bg-black text-white z-[99999]">
          <DialogHeader className="p-4 border-b border-white">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src="/icon/avatar.png" />
                <AvatarFallback className="bg-white text-black">RB</AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle>
                  <span className="font-bold">Mimint</span> <span className="text-yellow-500 font-bold">Jagoan</span>
                </DialogTitle>
                <p className="text-sm text-gray-400">Online</p>
              </div>
            </div>
          </DialogHeader>
          <ScrollArea className="h-[350px] p-4 bg-black overflow-y-auto" ref={scrollAreaRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-white text-black"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </ScrollArea>
          <div className="p-4 border-t border-white">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex space-x-2"
            >
              <Input
                className="flex-grow bg-gray-800 text-white placeholder-gray-400"
                placeholder="Tuliskan Pesan..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                className="scale-100  h-9 w-11 bg-white text-black"
              >
                <Send className="h-4 items-center w-4" />
              </Button>
            </form>
          </div>
          <div className="p-2 border-t text-center text-xs text-gray-400">
            Didukung oleh <span className="text-white font-bold ">Alfi</span>
            <span className="text-yellow-500 font-bold ml-1">Syahri</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
