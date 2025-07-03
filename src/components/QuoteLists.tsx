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
      <div className="text-center mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg max-w-md mx-auto">
        <div className="text-4xl mb-3">📚</div>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Please select a topic to see quotes.
        </p>
      </div>
    );
  }

  if (quotes.length === 0) {
    return (
      <div className="text-center mt-8 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg max-w-md mx-auto border border-red-200 dark:border-red-800">
        <div className="text-4xl mb-3">🔍</div>
        <p className="text-red-600 dark:text-red-400 text-lg">
          No quotes found for &quot;{topic}&quot;.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 max-w-3xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Quotes on {topic}
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid gap-6">
        {quotes.map((q, index) => (
          <div
            key={index}
            className="bg-white dark:bg-purple-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
          >
            <div className="relative">
              <div className="text-4xl text-blue-500 absolute -top-2 -left-2 leading-none"></div>
              <p className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed pl-6 pr-2">
                {q.text}
              </p>
              <div className="text-4xl text-blue-500 absolute -bottom-4 right-0 leading-none"></div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
              <p className="text-right text-gray-600 dark:text-gray-400 font-medium">
                — {q.author}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 p-4 bg-blue-50 dark:bg-purple-200/20 rounded-lg">
        <p className="text-blue-700 dark:text-blue-300 text-sm">
          Found {quotes.length} inspiring quote{quotes.length !== 1 ? "s" : ""}{" "}
          on {topic}
        </p>
      </div>
    </div>
  );
}
