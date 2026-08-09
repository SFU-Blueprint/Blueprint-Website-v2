import React from "react";

export default function PageContainer({ children, className = "" }) {
  return (
    <div className={`w-full pt-[116px] px-6 md:px-10 xl:px-36 ${className}`}>
      {children}
    </div>
  );
}