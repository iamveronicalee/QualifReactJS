import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function DetailPage() {
  let { id } = useParams()
  const [tracks, setTracks] = useState([])
  const [isFav, setIsFav] = useState(false);

  function addFav() {
    localStorage.setItem(id, id);
    setIsFav(true);
  }

  function removeFav() {
    localStorage.removeItem(id);
    setIsFav(false);
  }
  useEffect(() => {
    fetch(`https://spotify-rest.up.railway.app/album?id=${id}`)
      .then(res => res.json())
      .then(data => {
        setTracks(data.data)
      })
  }, [])
  return (
    <div className="flex flex-col">
      {isFav ?
                <button className="ml-6 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={removeFav}>
                  Remove Album From Favorite
                </button> :
                <button className="ml-6 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={addFav}>
                  Add Album To Favorite
                </button>
      }
      <br />
      <div className="flex flex-row flex-wrap">
      {tracks?.map(track => {
        return (
          <div className="card m-5">
            <div className="card-body " key={track.id} >
              <h3 className="card-title">{track.name}</h3>
              <audio src="{track.preview_url} controls"></audio>
              
            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default DetailPage