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
    <main className="min-h-screen p-6 fill-background bg-purple-300">
      <h1 className="text-3xl font-bold text-center mt-10">Quote Generator</h1>
      <QuoteForm onSearch={handleSearch} />
      <QuoteList quotes={quotes} topic={topic} />
    </main>
  );
}
