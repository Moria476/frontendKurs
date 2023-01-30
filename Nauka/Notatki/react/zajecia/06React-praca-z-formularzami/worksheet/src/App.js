const Component = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Szukaj...!");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Podaj wartość: <input id="search" />
      </label>
      <button type="submit">Szukaj</button>
      <button type="button">Resetuj</button>
    </form>
  );
};

export default Component;
