import toast from "react-hot-toast";

const Home = () => {
  const handleAddMango = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const getMango = { name, photo };
    console.log(getMango);
    fetch("http://localhost:3000/mangoes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(getMango),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Mango successfully added");
          form.reset();
        }
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold my-5">Add Mango with Photo</h1>
      <form onSubmit={handleAddMango}>
        <input
          type="text"
          className="w-1/5 border-2 mb-1 rounded-md py-2 px-3 outline-blue-400"
          placeholder="Mango type"
          required
          name="name"
          id="1"
        />
        <br />
        <input
          type="text"
          className="w-1/5 border-2 mb-1 rounded-md py-2 px-3 outline-blue-400"
          placeholder="Mango photo URL"
          required
          name="photo"
          id="2"
        />
        <br />
        <input type="submit" className="btn mt-1" value="Add Mango" />
      </form>
    </div>
  );
};

export default Home;
