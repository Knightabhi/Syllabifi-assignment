import React, { useState } from "react";
import Dashboard from "./Dashboard/Dahboard";
import Sample from "./Sample";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

function Next() {
  const [Id, setId] = useState({
    id: 1,
  });
  const Increment = () => {
    setId({
      id: Id.id + 1,
    });
  };
  const Decrement = () => {
    if (Id.id > 1) {
      setId((prevState) => ({ id: prevState.id - 1 }));
    }
  };
  const Skip = () => {
    setId({
      id: Id.id + 1,
    });
    console.log("clicked skip");
  };
  return (
    <>
      {Id.id === 1 && (
        <SlideOne
          Increment={Increment}
          Decrement={Decrement}
          Skip={Skip}
          id={Id.id}
        />
      )}
      {Id.id === 2 && (
        <Sample
          Increment={Increment}
          Decrement={Decrement}
          Skip={Skip}
          id={Id.id}
        />
      )}
      {Id.id === 3 && (
        <Sample
          Increment={Increment}
          Decrement={Decrement}
          Skip={Skip}
          id={Id.id}
        />
      )}
      {Id.id === 4 && (
        <Sample
          Increment={Increment}
          Decrement={Decrement}
          Skip={Skip}
          id={Id.id}
        />
      )}
      {Id.id === 5 && (
        <SlideTwo
          Increment={Increment}
          Decrement={Decrement}
          Skip={Skip}
          id={Id.id}
        />
      )}
      {Id.id === 6 && <Dashboard />}
    </>
  );
}

export default Next;
