import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function Home() {
  const [filter, setFilter] = useState({ count: 5, genre: '' });

  const { data: games = [], isLoading, error } = useQuery({
    queryKey: ['games'],
    queryFn: async () => {
      const res = await fetch(
        'https://free-to-play-games-database.p.rapidapi.com/api/games',
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '800709dc64msh2ffd5b9e073b608p1d3d60jsnf44fb544a443',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          },
        },
      );
      return res.json();
    },
  });

  if (isLoading) return <p>Loading games...</p>;
  if (error) return <p>Error loading games.</p>;

  const filteredGames = games
    .filter(game =>
      filter.genre === ''
        ? true
        : game.genre.toLowerCase().includes(filter.genre.toLowerCase()),
    )
    .slice(0, filter.count);

  return (
    <div className="px-10 py-8 bg-white dark:bg-[#1c1b23] text-gray-900 dark:text-white min-h-screen">
      <h5 className="ml-55 mb-8 text-lg font-semibold">
        Welcome to the homepage of Gaming Log!
      </h5>

      <div className="flex flex-col gap-4 mb-8 ml-55">
        <div className="flex items-center">
          <label htmlFor="selectCount" className="text-sm mb-1">Show:</label>
          <select
            id="selectCount"
            value={filter.count}
            onChange={e => setFilter({ ...filter, count: Number(e.target.value) })}
            className="px-3 w-15 py-2 rounded-md text-gray-900 dark:text-white text-sm focus:ring-orange-500 focus:border-orange-500"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="inputGenre" className="text-sm">Filter games by type:</label>
          <input
            id="inputGenre"
            type="text"
            placeholder="Enter game type"
            value={filter.genre}
            onChange={e => setFilter({ ...filter, genre: e.target.value })}
            className="px-3 py-2 rounded-md text-gray-900 dark:text-white text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 ml-55 mr-55">
        {filteredGames.map(game => (
          <div
            key={game.id}
            className="border relative border-orange-500 rounded-md p-4 w-60 text-gray-900 dark:text-white"
          >
            <h3 className="font-semibold text-lg mb-1">{game.title}</h3>
            <a href={game.game_url} target="_blank" rel="noreferrer">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="rounded mb-3 w-full h-auto object-cover"
              />
            </a>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{game.short_description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-15">{game.genre}</p>
            <Link
              to={`/game/${game.id}`}
              state={{ game }}
              className="text-sm border-b-4 absolute bottom-3 px-3 py-1 rounded hover:text-black transition inline-block"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
