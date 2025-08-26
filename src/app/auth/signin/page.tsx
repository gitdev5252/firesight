"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signinSchema, type SigninFormData } from "@/lib/schemas";
import "../auth.css";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: SigninFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("data--->", data)
      // Redirect to dashboard or home page after successful signin
      router.push("/");
    } catch (error) {
      console.error("Signin error:", error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full bg-[rgb(8,11,22)] h-screen">
      <div className="green-shine-footer-mobile md:hidden block z-[-2342]"></div>
      <div className="blue-shine-pulse-overview w-[min(602px,41.8vw)] h-[min(602px,41.8vw)] bottom-[23vw] right-[19.3vw] md:block hidden"></div>
      <div className="blue-shine-pulse-overview bottom-[-12.555vw] right-[-12.277vw] w-[min(602px,55.8vw)] h-[min(602px,55.8vw)] md:block hidden"></div>
      <div className="auth-bg w-full">
        <div className="flex flex-col justify-center items-start w-1/2 bg-white p-[93px] h-screen">
          <div className="flex justify-between items-center w-full">
            <div className="border border-[rgba(134,135,141,0.2)] h-[1px] w-2/5" />
            <Image
              src="/images/logo-black.svg"
              alt="logo-black"
              width={37}
              height={45}
            />
            <div className="border bg-[rgba(134,135,141,0.2)] h-[1px] w-2/5" />
          </div>

          <h2 className="uppercase text-center text-[52px] font-bold mt-[67px] w-full">
            welcome back
          </h2>

          <p className="text-[16px] text-center w-full">
            Sign in to your account to continue
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full mt-[50px] space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex w-full items-start">
                    <FormLabel className="text-[14px] font-bold text-[#080B16] w-1/3 pt-3">
                      Email Address :
                    </FormLabel>
                    <div className="w-2/3">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="h-[50px] border-gray-300 focus:border-[rgb(8,11,22)] focus:ring-[rgb(8,11,22)]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="mt-1" />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex w-full items-start">
                    <FormLabel className="text-[14px] font-bold text-[#080B16] w-1/3 pt-3">
                      Password :
                    </FormLabel>
                    <div className="w-2/3">
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="h-[50px] border-gray-300 focus:border-[rgb(8,11,22)] focus:ring-[rgb(8,11,22)] pr-12"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {showPassword ? "Hide" : "Show"}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="mt-1" />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className=""
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-[14px] text-gray-700">
                        Remember me
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="bg-[rgb(8,11,22)] text-white !text-[16px] w-full py-[30px] mt-[30px] hover:bg-[rgb(8,11,22)]/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing In..." : "Sign In >"}
              </Button>
            </form>
          </Form>

          <div className="mt-[24px] w-full text-center">
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup">
                <span className="font-bold underline cursor-pointer hover:text-[rgb(8,11,22)]">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
