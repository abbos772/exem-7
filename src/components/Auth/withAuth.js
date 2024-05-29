"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("x-auth-token");
      if (!token) {
        router.replace("/admin/Login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
