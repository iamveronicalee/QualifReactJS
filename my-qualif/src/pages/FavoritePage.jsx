import { useEffect, useState } from "react";

function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  function getData() {
    const data = Object.entries(localStorage).map(([id, name]) => {
      return {
        id,
        name
      };
    });

    setFavorites(data);
  }

  function removeData(id) {
    localStorage.removeItem(id);
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="m-5 w-screen flex flex-col gap-2">
      <h1 className="text-2xl mb-2">Favorite's Album</h1>
      {favorites.map(favorite =>
        <div key={favorite.id} className="flex p-3" style={{ width: "80%" }}>
          <p className="mx-auto">Album ID : {favorite.name}</p>

          <button  className="ml-6 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => removeData(favorite.id)}>
            Remove Album From Favorite
          </button>
        </div>
      )}
    </div>
  );
}

export default FavoritePage;