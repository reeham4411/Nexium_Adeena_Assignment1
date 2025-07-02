export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-400">
      <h1 className="text-4xl font-bold mb-4">Quote Generator</h1>
      <p className="text-lg text-gray-700 mb-8">
        Generate a random quote with a click of a button!
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Generate Quote
      </button>
    </div>
  );
}
