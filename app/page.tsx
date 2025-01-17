import React from "react";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";

import { FloatingNav } from "@/components/ui/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { navItems } from "@/data";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import('@/components/Grid'), {
  loading: () => <p>Loading...</p>, 
});

const Home = async () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
