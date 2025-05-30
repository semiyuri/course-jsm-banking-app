import AuthForm from "@/components/AuthForm";
import { AuthFormType } from "@/types/enums";
import React from "react";

const SignUp = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={AuthFormType.SignUp} />
    </section>
  );
};

export default SignUp;
