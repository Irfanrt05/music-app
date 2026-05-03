import { useState } from "react";
import { Link } from "react-router-dom";

function Music() {
  const [search, setSearch] = useState("");

  const musics = [
    { id: 1, title: "Laskar Pelangi" },
    { id: 2, title: "Hati-Hati di Jalan" },
    { id: 3, title: "Zona Nyaman" },
    { id: 4, title: "Rumah ke Rumah" },
  ];

  const filtered = musics.filter((m) =>
    m.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Daftar Music</h1>

      <input
        type="text"
        placeholder="Cari lagu..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((m) => (
        <div key={m.id}>
          <Link to={`/music/${m.id}`}>{m.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Music;
