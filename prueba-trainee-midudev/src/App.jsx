import { useEffect, useState } from "react";
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"
const CAT_ENDPOINT_IMAGE_URL = `/cat/says/${firstWord}?size=500&color=red&json=true`

export function App() {
  const [fact, setFact] = useState();
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);
  
  const [cat, setCat] = useState();
  useEffect(() => {
    fetch(CAT_ENDPOINT_IMAGE_URL)
      .then((res) => res.json())
      .then((data) => setFact(data.cat));
  }, []);
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact.split(" ")[0]}</p>}
      {cat && <img src={cat.url} alt="Cat" />}
    </main>
  );
}
