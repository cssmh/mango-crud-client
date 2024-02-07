const Home = () => {
  const handleAddMango = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const getMango = { name, photo };
    console.log(getMango);
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold my-5">Add Mango with Photo</h1>
      <form onSubmit={handleAddMango}>
        <input
          type="text"
          className="border-2 mb-1 rounded-md py-2 px-3 outline-blue-300"
          placeholder="Mango type"
          required
          name="name"
          id="1"
        />
        <br />
        <input
          type="text"
          className="border-2 mb-1 rounded-md py-2 px-3 outline-blue-300"
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
