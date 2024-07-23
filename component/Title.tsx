import React from "react";

function Title({ title, sub }: { title: string; sub: string }) {
  return (
    <>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-neutral-cool-gray max-w-[21rem]">{sub}</p>
    </>
  );
}

export default Title;
