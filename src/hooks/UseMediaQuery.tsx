import { useEffect, useState } from "react";

function useMediaQuery(
  query: string,
  defaultMatches = window.matchMedia(query).matches
) {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (!media) {
      console.error(`Invalid media query: ${query}`);
      return;
    }

    const listener = () => setMatches(media.matches);

    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
}

export default useMediaQuery;
