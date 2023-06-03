import "../style/App.css";
import React from "react";

export default function Players() {
  const uniqueTitle = "uniqueTitle";
  const width = "300";
  const height = "500";
  return (
    <div className="Players">
      <iframe
        allow="encrypted-media"
        frameBorder={0}
        height={height}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWY64wDtewQt"
        title={uniqueTitle}
        width={width}
      />
      <iframe
        allow="encrypted-media"
        frameBorder={0}
        height={height}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTTHy0vndijk"
        title={uniqueTitle}
        width={width}
      />
      <iframe
        allow="encrypted-media"
        frameBorder={0}
        height={height}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXarebqD2nAVg"
        title={uniqueTitle}
        width={width}
      />
      <iframe
        allow="autoplay"
        frameBorder={0}
        height={height}
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/735923574&color=%232d2d2d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        title={uniqueTitle}
        width={width}
      />
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder={0}
        height={height}
        src="https://www.youtube.com/embed/MVPTGNGiI-4"
        title={uniqueTitle}
        width={width}
      />
      <iframe
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder={0}
        height={height}
        src="https://www.youtube.com/embed/tokEzJSW9HU"
        title={uniqueTitle}
        width={width}
      />
    </div>
  );
}
