import Image from "next/image";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image alt="logo" height={100} src="/logo-span.png" width={100} />
    </div>
  );
};

export default LoadingPage;
