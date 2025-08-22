"use client";
import React from "react";
import styles from "@/app/styles/Adventures.module.css";
import AllHeader from "./AllHeader";
import Image from "next/image";
import Link from "next/link";
import { imageThreeMovie, standByMe, standBymeTwo,imageFourMovie,imageFivemovie,imageSixmovie } from "../images/data";

const Adventures = () => {
  const movies = [
    {
      imgSrc:standByMe,
      hrefImg: "https://www.imdb.com/title/tt3331846/",
      alt: "Stand By Me",
    },
    {
      imgSrc:imageThreeMovie,
      hrefImg: "https://www.imdb.com/title/tt1147518/",
      alt: "Great Adventure into the Underworld",
    },
    {
      imgSrc:imageFourMovie,
      hrefImg: "https://www.imdb.com/hi/title/tt1147524/",
      alt: "Nobita's Three Visionary Swordsmen",
    },
    {
      imgSrc:imageFivemovie,
      hrefImg: "https://www.imdb.com/title/tt0802983/",
      alt: "Nobita’s Dinosaur",
    },
    {
      imgSrc:standBymeTwo,
      hrefImg: "https://www.imdb.com/title/tt13428402/",
      alt: "Stand by Me Doraemon 2",
    },
    {
      imgSrc:imageSixmovie,
      hrefImg: "https://www.imdb.com/title/tt1147528/",
      alt: "Nobita and the Steel Troops",
    },
  ];

  return (
    <section className={styles.container}>
      {/* Page Header */}
      <AllHeader
        Title="The Great Adventures"
        Desc="Every crusade, every trial, every mystery unfolds into an eternal journey."
      />

      {/* Movies Grid */}
      <div className={styles.adventureContainer}>
        {movies.map((movie, i) => (
          <article
            key={i}
            className={styles.movieCard}
            data-title={movie.alt}
          >
            <Link href={movie.hrefImg} target="_blank">
              <Image
                src={movie.imgSrc}
                alt={movie.alt}
                draggable="false"
                width={200}
                height={300}
                className={styles.moviePoster}
              />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Adventures;
