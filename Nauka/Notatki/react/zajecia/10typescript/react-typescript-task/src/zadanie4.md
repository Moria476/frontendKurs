// Challenge: Type the event param in the onClick handler

export function ProductCard() {
  const onClick = (event) => {
    event.preventDefault();
  };

  return <div onClick={onClick}>Fire this loser!</div>;
}
