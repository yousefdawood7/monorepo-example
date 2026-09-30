import { useState } from "react";

export default function Button() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((c) => c + 1)}>
        Counter ==&gt; {counter}
      </button>
    </div>
  );
}
