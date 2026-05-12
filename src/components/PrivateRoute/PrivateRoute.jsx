"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../shared/Loader";

export default function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    } else {
      router.push("/login");
    }

    setLoading(false);
  }, [router]);

  if (loading) return <Loader />;

  if (!authenticated) return null;

  return children;
}
