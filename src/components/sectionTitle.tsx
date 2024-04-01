import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="sm:text-4xl text-3xl tracking-wider font-semibold ml-12 my-12">
      {children}
    </h2>
  );
}
