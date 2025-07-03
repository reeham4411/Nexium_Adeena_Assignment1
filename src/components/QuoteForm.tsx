"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import filterQuotes from "@/lib/filterQuotes";
interface Props {
  onSearch: (topic: string) => void;
}

export default function QuoteForm({ onSearch }: Props) {
  const [topic, setTopic] = useState("");
  const topics = filterQuotes().map((t) => t.topic);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (topic) onSearch(topic);
  };
  return (
    <div className="w-full max-w-2xl mx-auto mt-12 px-6">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Discover Inspiring Quotes
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Choose a topic and explore wisdom from great minds
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <div className="relative flex-1 w-full">
            <Select onValueChange={(value) => setTopic(value)}>
              <SelectTrigger className="w-full h-12 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <SelectValue placeholder="✨ Select a topic to explore" />
              </SelectTrigger>
              <SelectContent className="rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-2xl">
                {topics.map((topic) => (
                  <SelectItem
                    key={topic}
                    value={topic}
                    className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-200 rounded-lg mx-1"
                  >
                    {topic}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            disabled={!topic}
            className="h-12 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 transition-all duration-300 ease-out disabled:cursor-not-allowed"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Get Quotes
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
}
