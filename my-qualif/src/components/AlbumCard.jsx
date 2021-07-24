import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumPage() {
  let { id } = useParams()
  const [tracks, setTracks] = useState([])
  
  return (
    <div>
      {tracks?.map(track => {
        return (
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{track.name}</h3>
              <audio src="{track.preview_url} controls"></audio>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AlbumPage