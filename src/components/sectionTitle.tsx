import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="sm:text-4xl text-3xl tracking-wider font-semibold my-12 text-center">
      {children}
    </h2>
  );
}
