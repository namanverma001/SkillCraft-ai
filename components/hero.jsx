"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, PenBox, GraduationCap } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (imageElement) {
        if (scrollPosition > scrollThreshold) {
          imageElement.classList.add("scrolled");
        } else {
          imageElement.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
            SkillCraft-AI
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">Get Started</Button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 flex items-center gap-2">
              <FileText className="h-4 w-4" /> Industry Insights
            </Button>
          </Link>
          <Link href="/resume">
            <Button size="lg" className="px-8 flex items-center gap-2">
              <FileText className="h-4 w-4" /> Build Resume
            </Button>
          </Link>
          <Link href="/ai-cover-letter">
            <Button size="lg" className="px-8 flex items-center gap-2">
              <PenBox className="h-4 w-4" /> Cover Letter
            </Button>
          </Link>
          <Link href="/interview">
            <Button size="lg" className="px-8 flex items-center gap-2">
              <GraduationCap className="h-4 w-4" /> Interview Prep
            </Button>
          </Link>
        </div>
      </div>
      {/* <div className="hero-image-wrapper mt-5 md:mt-0">
        <div ref={imageRef} className="hero-image">
          <Image
            src="/banner.jpeg"
            width={1280}
            height={720}
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl border mx-auto"
            priority
          />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;