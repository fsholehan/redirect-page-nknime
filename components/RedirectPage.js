import React, { useEffect, useState } from "react";

const RedirectPage = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const countdown = () => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          setTimeout(countdown, 1000);
          return prevSeconds - 1;
        } else {
          const currentPath =
            window.location.pathname +
            window.location.search +
            window.location.hash;
          window.location.href = `https://nknime.com${currentPath}`;
          return 0;
        }
      });
    };

    countdown();
  }, []);

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      {/* ... (Your existing HTML content) ... */}
      <div className="bg-white p-10 rounded shadow-md text-center">
        <span className="text-lg sm:text-2xl mb-4">
          The domain has changed! Please wait while we redirect you to
          nknime.com.
        </span>
        <h1 className="text-2xl mb-4">
          Redirecting in{" "}
          <span className="text-red-500 font-bold">{seconds}</span> seconds...
        </h1>
        <p className="text-gray-600 mb-4">
          You will be redirected to
          <a href="https://nknime.com" className="text-blue-500 underline">
            nknime.com
          </a>
        </p>
        <p className="text-gray-500">
          If not redirected,
          <a href="https://nknime.com" className="text-blue-500 underline">
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default RedirectPage;
