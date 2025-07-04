"use client";

import { useState } from "react";
import QuoteForm from "@/components/QuoteForm";
import QuoteList from "@/components/QuoteLists";
import filterQuotes from "@/lib/filterQuotes";

interface Quote {
  text: string;
  author: string;
}

export default function Page() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [topic, setTopic] = useState("");

  const handleSearch = (selectedTopic: string) => {
    const allTopics = filterQuotes();
    const match = allTopics.find((q) => q.topic === selectedTopic);
    setQuotes(match?.quotes || []);
    setTopic(selectedTopic);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-300 to-blue-300 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center py-12">
          <div className="inline-block p-4 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <div className="text-6xl">💭</div>
          </div>
          <h1 className="text-5xl font-bold text-purple-700 mb-4 drop-shadow-lg">
            Quote Generator
          </h1>
          <p className="text-xl text-purple-700/90 max-w-2xl mx-auto leading-relaxed">
            Discover wisdom and inspiration from greatest minds
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
          </div>
        </div>

        {/* Form Section */}
        <div className="mb-8">
          <QuoteForm onSearch={handleSearch} />
        </div>

        {/* List  Section */}
        <div className="pb-12">
          <QuoteList quotes={quotes} topic={topic} />
        </div>
      </div>
    </main>
  );
}
