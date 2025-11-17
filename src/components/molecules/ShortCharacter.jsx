/** @format */

"use client";
import { useState } from "react";
import { Button } from "../atom";

const ShortenedCharacter = ({ sinopsis, maxLength, handleShow }) => {
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
        <Button
          className="mt-2 text-blue-300 underline"
          onClick={() => handleShow("synopsis", sinopsis)}
        >
          {showFull ? "Showless" : "Show More"}
        </Button>
      )}
    </div>
  );
};

export default ShortenedCharacter;
