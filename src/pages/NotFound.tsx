import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageBanner } from "@/components/PageBanner";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <PageBanner title="404 - Page Not Found" imageUrl="/placeholder.svg" />
      <div className="text-center py-16">
        <p className="mb-4 text-xl text-gray-600">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;