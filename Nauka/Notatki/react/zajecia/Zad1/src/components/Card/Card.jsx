const Card = ({ firstTextPart, codePart, secondTextPart, children, className }) => {
  const Title = ({ text }) => {
    return <p>{text}</p>;
  };

  const test = "234";
  const testAbc = () => {
    test.test = "abc";
  };

  return (
    <div
      className={`card${className ? ` ${className}` : ""}`}
      style={{
        backgroundColor: "grey",
        padding: "10px",
        borderRadius: "5px",
        margin: "10px",
      }}
      onClick={testAbc}
    >
      <p>
        {`${firstTextPart} `}
        <code>{codePart}</code>
        {` ${secondTextPart}`}
      </p>
      {children}
    </div>
  );
};

export default Card;
