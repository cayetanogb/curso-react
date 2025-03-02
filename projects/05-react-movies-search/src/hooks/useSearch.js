import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una película sin un título");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con solo números");
      return;
    }

    if (search.length < 3) {
      setError("Por favor, escribe al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}
