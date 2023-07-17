import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=2000&t=st=1689609903~exp=1689610503~hmac=5e61432d5ea401cc05f3827094ddbf526e9d03a488e22b4a28aa3221a7039e7c" alt="404" width="700px" />
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg">The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
