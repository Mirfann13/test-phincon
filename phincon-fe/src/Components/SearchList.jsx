import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchList() {
  // State for the end value (limit)
  const [textLimit, setTextLimit] = useState('');

  // Hardcoded start value
  const startFrom = 0;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-3xl font-semibold text-blue-800 mb-4 text-center">
        Pokémon List
      </h2>
      <p className="text-lg text-yellow-400 mb-6 text-center">
        Discover and explore your favorite Pokémon.
      </p>
      <form className="space-y-4">
        <div className="flex flex-col gap-4">
          {/* User input for End At */}
          <input
            onChange={e => setTextLimit(e.target.value)}
            value={textLimit}
            className="bg-gray-100 border border-gray-300 w-full text-gray-800 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            type="number"
            placeholder="Limit"
          />
          <Link to={`/list?limit=${textLimit}&offset=${startFrom}`}>
            <button
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
              type="submit"
            >
              List Pokémon
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SearchList;
