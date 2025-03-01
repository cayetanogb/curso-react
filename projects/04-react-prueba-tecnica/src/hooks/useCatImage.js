import { useEffect, useState } from "react";
import { getImageUrl } from "../services/cats";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    getImageUrl({ fact }).then((url) => setImageUrl(url));
  }, [fact]);

  return { imageUrl };
}
