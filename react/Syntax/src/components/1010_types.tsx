import React, {useState, useRef} from 'react';

interface Props {
  name: string;
}

interface Data {
  name: string;
  age: number;
}

export default function Types({ name }: Props) {
  const [count, setCount] = useState<Data | null>();
  const myInput = useRef<HTMLInputElement>(null);
  return (
    <>
      <h2>Hello {name}</h2>
      <input ref = {myInput} />
    </>
  );
}

// const Types: React.FC<Props> = (props) => {
//   return <>{props.name}</>;
// };
