import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const Mangoes = () => {
  const loaderMangos = useLoaderData();
  const [mangos, setMangos] = useState(loaderMangos);
  //   console.log(loaderMangos);

  const handleDelete = (idx, name) => {
    // console.log(idx);
    fetch(`http://localhost:3000/mangoes/${idx}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const filterDeleted = mangos.filter((solo) => solo._id !== idx);
          setMangos(filterDeleted);
          toast.success(`${name} Deleted successfully`);
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-xl font-semibold">
        Total Mangoes {mangos.length}
        <div className="max-w-7xl mx-auto gap-3 grid grid-cols-1 md:grid-cols-4 mt-3">
          {mangos.map((mango) => (
            <div
              key={mango._id}
              className="border border-blue-400 rounded-md flex flex-col p-2"
            >
              <div className="flex-grow">
                {" "}
                <h1 className="text-green-500">{mango.name}</h1>{" "}
                <img
                  src={mango.photo}
                  className="w-4/5 md:w-3/5 p-2 mx-auto text-sm"
                  alt={`${mango.name} photo is not available`}
                />{" "}
              </div>
              <div>
                <Link to={`/update/${mango._id}`}>
                  <button className="btn btn-success text-white">Update</button>
                </Link>
                <button
                  onClick={() => handleDelete(mango._id, mango.name)}
                  className="btn btn-error text-white"
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default Mangoes;
