import { useParams } from "react-router-dom";

function MusicDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail Lagu</h1>
      <p>ID Lagu: {id}</p>
    </div>
  );
}

export default MusicDetail;
