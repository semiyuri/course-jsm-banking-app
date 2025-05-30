"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import CustomInput from "./CustomInput";
import { AuthFormSchema } from "@/lib/schemas/AuthFormSchema";

import { z } from "zod";
import { AuthFormType } from "@/types/enums";
import { Loader2 } from "lucide-react";

const AuthForm = ({ type }: { type: AuthFormType }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formContext = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AuthFormSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);

    setTimeout(() => {
      console.log(values);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            width={34}
            height={34}
            src="/icons/logo.svg"
            alt="Horizon logo"
          />

          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user
              ? "Link Account"
              : type === AuthFormType.SignIn
              ? "Sign in"
              : "Sign Up"}

            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">
          {/* User account linking form goes here */}
        </div>
      ) : (
        <>
          <Form {...formContext}>
            <form
              onSubmit={formContext.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <CustomInput
                formContext={formContext}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />

              <CustomInput
                formContext={formContext}
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : type === AuthFormType.SignIn ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === AuthFormType.SignIn
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>

            <Link
              className="form-link"
              href={type === AuthFormType.SignIn ? "/sign-up" : "/sign-in"}
            >
              {type === AuthFormType.SignIn ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
