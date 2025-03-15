import React from "react";
import "./Audio.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useStore } from "../../lib/store";
export default function Audio() {
  const [surahs, setsurahs] = useState([]);
  const [loading, setloading] = useState(true);
  const params = useParams();
  const darkMode = useStore((state) => state.darkMode);
  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/quran/en.asad")
      .then((response) => response.json())
      .then((data) => {
        setsurahs(data.data.surahs);
        setloading(false);
      });
  }, []);
  if (loading) return <div className="loader">loading...</div>;
  return (
    <div className={`audio-parent  ${darkMode ? "dark-mode" : "light-mode"}`}>
      {surahs.map((sourate) => {
        return (
          <div className="audio-container">
            <div className="surate">{sourate.englishName}</div>
            <div className="audio">
              <audio controls>
                <source
                  src={`https://cdn.islamic.network/quran/audio-surah/128/${params.identifier}/${sourate.number}.mp3`}
                  type="audio/mpeg"
                />
              </audio>
            </div>
          </div>
        );
      })}
    </div>
  );
}
