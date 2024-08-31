"use client"
import { Button } from "@/components/ui/button"
import Lottie from "lottie-react"
import Link from "next/link"
import NotFoundImg from "@/public/images/notfound2.json";


const NewsNotFound = () => {
  return (
    <>
      <section className="flex items-center justify-center absolute left-0 top-0 w-full bg-white h-screen overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <Lottie
            animationData={NotFoundImg}
            loop={true}
          />
          <h3 className="text-lg md:text-2xl font-semibold">
            Oops! Requested news could not be found.
          </h3>
          <Button
            variant="ghost"
            className="text-lg"
          >
            <Link href="/news">Go Back To News</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

export default NewsNotFound