

const AnimatedLetter = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${
            i + idx
          } transition ease-in-out animate-bounce delay-150  duration-300`}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetter;
