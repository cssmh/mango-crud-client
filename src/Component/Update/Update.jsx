import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const loadData = useLoaderData();
  //   console.log(loadData);
  const navigateTo = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const updatedInfo = { name, photo };
    console.log(updatedInfo);

    fetch(`http://localhost:3000/update/${loadData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Information updated");
          navigateTo(-1);
        }
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold my-3">
        Update info of {loadData.name} Mango
      </h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          className="w-1/5 border-2 mb-1 rounded-md py-2 px-3 outline-blue-400"
          defaultValue={loadData.name}
          required
          name="name"
          id="1"
        />
        <br />
        <input
          type="text"
          className="w-1/5 border-2 mb-1 rounded-md py-2 px-3 outline-blue-400"
          defaultValue={loadData.photo}
          required
          name="photo"
          id="2"
        />
        <br />
        <input
          type="submit"
          className="btn mt-1 btn-success text-white"
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;
