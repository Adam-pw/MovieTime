import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import TrendMovie from "@/components/TrendMovie";
import { SetStateAction, useEffect, useState } from "react";
import TrendTvshows from "@/components/TrendTvshows";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import UpcomingMovies from "@/components/UpcomingMovies";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="max-w-screen-xl m-auto">
        <Hero />
        <TrendMovie />
        <TrendTvshows />
        <UpcomingMovies />
      </div>
      <Footer />
    </>
  );
}
