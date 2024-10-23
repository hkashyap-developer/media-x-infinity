"use client";
 
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

import { Bell } from 'lucide-react';

import { Badge } from '@/components/ui/badge';;
import ThreeJsMXI from '@/components/custom/ThreeJs/ThreeJsMXI'
import { Button } from "@/components/ui/button";
const Hero13 = () => {
  return (


<div className="min-h-[92vh] relative flex size-full items-center justify-center overflow-hidden bg-background">



    <section className="py-12 px-8 flex flex-col 2xl:flex-row gap-4 z-10">
      <div className="my-auto">



        <Badge
          variant="outline"
          className="mb-4 max-w-full text-sm font-normal lg:mb-10 lg:py-2 lg:pl-2 lg:pr-5 bg-white"
        >
          <span className="mr-2 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent">
            <Bell className="size-4" />
          </span>
          <p className="truncate whitespace-nowrap text-xl">
            WordPress | Shopify | React
          </p>
        </Badge>
        <h1 className="mb-6 text-6xl font-bold leading-none tracking-tighter md:text-[7vw] lg:text-8xl">
          We build websites that gets the s#it done!
        </h1>
        <p className="max-w-3xl md:text-[2vw] lg:text-xl">
          Expertly Crafted Websites and Designs Tailored to Elevate Your Brand. Delivering Creative Excellence with a Focus on Innovation and Precision.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row lg:mt-10">

        </div>



      </div>

      <div className="">

        <ThreeJsMXI/>

      </div>


    </section>



<GridPattern
squares=""
width={30}
height={30}
x={-1}
y={-1}
className={cn(
  "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
)}
/>
</div>

  );
};

export default Hero13;
