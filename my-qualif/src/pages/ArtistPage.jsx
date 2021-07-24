// snippet -> , imrse
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";

function ArtistPage() {
  const { artist } = useParams();
  const [albums, setAlbums] = useState([])
  
  useEffect(() => {
    async function getData() {
      const query = await fetch(`https://spotify-rest.up.railway.app/artist?query=${encodeURI(artist)}`)
      .then(res => res.json())
        .then(data => {
        console.log(data.data)
        setAlbums(data.data.albums)
      })
    }
    getData()


    
  }, [artist])
  
  
  return (
    <div className="album-container flex flex-row flex-wrap">
      {albums?.map(album => 
          <Link key={album.id} to={`/detail/${album.id}`} className="m-5 flex flex-col" style={{width: "300px"}}>
            <img src={album.image} alt="" />
            <h3 className="mt-2 font-semibold truncate">{album.name}</h3>
          </Link>
      )}
    </div>
  )
}

export default ArtistPage