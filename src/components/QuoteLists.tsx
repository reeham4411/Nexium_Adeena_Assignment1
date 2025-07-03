"use client";
type Quote = {
  text: string;
  author: string;
};

interface Props {
  quotes: Quote[];
  topic: string;
}

export default function QuoteLists({ quotes, topic }: Props) {
  if (!topic) {
    return (
      <p className="text-center mt-6 text-gray-500">
        Please select a topic to see quotes.
      </p>
    );
  }

  if (quotes.length === 0) {
    return (
      <p className="text-center mt-6 text-red-500">
        No quotes found for &quot;{topic}&quot;.
      </p>
    );
  }

  return (
    <div className="mt-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Quotes on {topic} are :{" "}
      </h2>
      <ul className="space-y-4">
        {quotes.map((q, index) => (
          <li key={index} className="p-4 border rounded-lg shadow">
            <span className="block text-lg">&quot;{q.text}&quot;</span>
            <span className="block text-right text-sm text-gray-600">
              - {q.author}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
