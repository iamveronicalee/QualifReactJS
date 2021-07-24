import { useState } from 'react';
import { Link } from 'react-router-dom'

function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-4">
        <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
          <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
            <div className="w-full">
              <label for="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <input id="search" name="q"
                  className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search by Artist Name"
                  type="search"
                  value={search}
                  onChange={e => setSearch(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
          <Link to={`/artist/${search}`}
            className="ml-6 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Search
          </Link>
          <Link to={`/favorite`}
            className="ml-6 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            My Favorite
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;