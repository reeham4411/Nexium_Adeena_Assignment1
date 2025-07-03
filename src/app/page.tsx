export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-400">
      <h1 className="text-4xl font-bold mb-4">Quote Generator</h1>
      <p className="text-lg text-gray-700 mb-8">
        Generate a random quote with a click of a button!
      </p>
      <p className="text-lg text-gray-700 mb-8">
        Choose a topic from the dropdown
      </p>
      <div className="mb-4">
        <select className="px-4 py-2 border rounded">
          <option value="inspiration">Inspiration</option>
          <option value="life">Life</option>
          <option value="success">Success</option>
          <option value="perseverance">Perseverance</option>
          <option value="happiness">Happiness</option>
          <option value="friendship">Friendship</option>
          <option value="motivation">Motivation</option>
          <option value="learning">Learning</option>
        </select>
      </div>
      <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Generate Quote
      </button>
    </div>
  );
}
