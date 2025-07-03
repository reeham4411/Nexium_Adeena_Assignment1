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
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 max-w-md mx-auto mt-8 items-center"
    >
      <Select onValueChange={(value) => setTopic(value)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a topic" />
        </SelectTrigger>
        <SelectContent>
          {topics.map((topic) => (
            <SelectItem key={topic} value={topic}>
              {topic}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button type="submit" disabled={!topic}>
        Get Quotes
      </Button>
    </form>
  );
}
