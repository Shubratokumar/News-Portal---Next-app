"use client";
import Lottie from "lottie-react";
import NotFoundImg from "../public/images/notfound.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFound = () => {
  return (
    <>
      <section className="flex items-center justify-center absolute left-0 top-0 w-full bg-white h-screen overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <Lottie
            animationData={NotFoundImg}
            loop={true}
          />
          <h3 className="text-lg md:text-2xl font-semibold">
            Oops! Requested resources could not be found.
          </h3>
          <Button
            variant="ghost"
            className="text-lg"
          >
            <Link href="/">Go to Home</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default NotFound;
