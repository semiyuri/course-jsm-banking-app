import AuthForm from "@/components/AuthForm";
import { AuthFormType } from "@/types/enums";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={AuthFormType.SignIn} />
    </section>
  );
};

export default SignIn;
