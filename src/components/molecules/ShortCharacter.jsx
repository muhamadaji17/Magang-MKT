/** @format */

"use client";
import { useState } from "react";

const ShortenedCharacter = ({ sinopsis, maxLength }) => {
  const [showFull, setShowFull] = useState(false);
  const shortenedSinopsis = showFull
    ? sinopsis
    : sinopsis?.substring(0, maxLength);
  return (
    <div className="">
      <p>
        {sinopsis?.length > maxLength
          ? `${shortenedSinopsis}.....`
          : shortenedSinopsis}
      </p>
      {sinopsis?.length > maxLength && (
        <button
          className="mt-2 text-blue-300 underline"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Showless" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ShortenedCharacter;
