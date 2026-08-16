import React from "react";

export default function PageContainer({
  title,
  children,
  className = "",
}) {
  return (
    <div className="w-full px-5">
      <div
        className={`
          mx-auto
          w-full
          max-w-[1600px]
          px-2
          py-12
          md:px-6
          xl:px-16
          ${className}
        `}
      >
        {title ? (
          <h1 className="mb-8 text-3xl font-semibold md:text-4xl">
            {title}
          </h1>
        ) : null}

        {children}
      </div>
    </div>
  );
}