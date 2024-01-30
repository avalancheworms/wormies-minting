import React from "react";

export default function TextError({ error }) {
  return (
    <div className="w-full min-h-[500px] flex items-center justify-center">
      <h3 className="text-red-500"> {error || "Something wrong!"} </h3>
    </div>
  );
}
