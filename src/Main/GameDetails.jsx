import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export function GameDetails() {
  const { game } = useLocation().state;

  const { data: gameDetails, isLoading, error } = useQuery({
    queryKey: ['game', game.id],
    queryFn: async () => {
      const res = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${game.id}`,
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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading game details.</p>;

  return (
    <div className="dark:bg-[#1c1b23] dark:text-white mt-10">
      <h2 className="mb-10 ml-55">{gameDetails.title}</h2>
      <p className="mb-5 ml-55 mr-55">{gameDetails.description}</p>
      <img className="mb-5 ml-55" src={gameDetails.thumbnail} alt={gameDetails.title} />

      <div className="flex flex-start gap-2 ml-55 mb-5">
        <div className="border-4">
          <p>
            Status:
            {gameDetails.status}
          </p>
        </div>
        <div className="border-4">
          <p>
            Genre:
            {gameDetails.genre}
          </p>
        </div>
        <div className="border-4">
          <p>
            Platform:
            {gameDetails.platform}
          </p>
        </div>
        <div className="border-4">
          <p>
            Release date:
            {gameDetails.release_date}
          </p>
        </div>
      </div>
    </div>
  );
}
