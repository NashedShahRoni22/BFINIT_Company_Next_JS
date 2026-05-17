"use client";
import LoginForm from "@/components/pages/LoginForm";
import { Suspense } from "react";

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
