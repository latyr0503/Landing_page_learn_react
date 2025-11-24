import { useParams } from "react-router-dom";

export default function DetailServices() {
  const { service } = useParams();

  return (
    <div className="container py-12 space-y-6">
      <h2 className="text-3xl font-semibold capitalize">Detail Services : {service}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus
        nobis architecto! Eaque quas vero sapiente aspernatur adipisci autem
        assumenda consequuntur minus quam. Distinctio, tempora. Amet porro est
        rerum vero.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus
        nobis architecto! Eaque quas vero sapiente aspernatur adipisci autem
        assumenda consequuntur minus quam. Distinctio, tempora. Amet porro est
        rerum vero.
      </p>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla dolore
        ipsa velit sit facilis cumque ducimus ipsum quisquam molestias debitis
        odio delectus similique placeat officia incidunt distinctio, eos
        perferendis? Quia?
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste possimus
        nobis architecto! Eaque quas vero sapiente aspernatur adipisci autem
        assumenda consequuntur minus quam. Distinctio, tempora. Amet porro est
        rerum vero.
      </p>
    </div>
  );
}
