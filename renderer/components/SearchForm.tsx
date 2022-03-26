import { FormEvent, useRef } from "react";

type PropType = {
  setPokemonName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm: React.FC<PropType> = ({ setPokemonName }) => {
  const ref = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (ref !== null && ref.current !== null) {
      setPokemonName(ref.current.value);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={ref} placeholder="input Pokemon's name" />
      <input type="submit" value="Search"></input>
    </form>
  );
};

export { SearchForm };
