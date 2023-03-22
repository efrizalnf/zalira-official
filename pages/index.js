import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import jumboImage from "../public/assets/img/bgjumbo.png";
import jumboImageLogo from "../public/assets/img/zlogo-bg.png";
import ArrowRight from "../public/assets/img/arrow-r.png";
import ArrowLeft from "../public/assets/img/arrow-l.png";
import { useEffect } from "react";
import Carousel from "../components/carousel";

export default function Home() {
  useEffect(() => {
    const logos = document.getElementById("logo");
    const arrowRight = document.getElementById("a-right");
    const arrowLeft = document.getElementById("a-left");
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    const handleJumbotron = () => {
      if (mediaQuery.matches) {
        if (window.scrollY >= 90) {
          logos.style.transform = "rotate(180deg)";
          arrowRight.style.right = "0px";
          arrowLeft.style.left = "0px";
        } else {
          logos.style.transform = "rotate(0deg)";
          logos.style.transition = "all 2s";
          arrowRight.style.transition = "all 2s";
          arrowLeft.style.transition = "all 2s";
          arrowRight.style.right = "115px";
          arrowLeft.style.left = "115px";
        }
      } else {
        if (window.scrollY >= 90) {
          logos.style.transform = "rotate(180deg)";
          arrowRight.style.right = "0px";
          arrowLeft.style.left = "0px";
        } else {
          logos.style.transform = "rotate(0deg)";
          logos.style.transition = "all 2s";
          arrowRight.style.transition = "all 2s";
          arrowRight.style.right = "380px";
          arrowLeft.style.left = "380px";
          arrowLeft.style.transition = "all 2s";
        }
      }
    };
    window.addEventListener("scroll", handleJumbotron);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Zalira</title>
        <meta name="description" content="zalira official website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
        />
      </Head>
      <main className={styles.main}>
        <section className='jumbotron rounded-lg bg-[url("../public/assets/img/net.jpg")] bg-no-repeat bg-cover bg-center mb-5 top-0 left-0 laptop:w-full laptop:h-96 tablet:w-full tablet:h-72 hp:w-full hp:h-40 relative'>
          <div className="rounded-lg mb-10 top-0 left-0 laptop:w-full laptop:h-96 tablet:w-full tablet:h-72 hp:w-full hp:h-40 bg-gradient-to-t from-stone-700 to-transparent z-40"></div>
          <Image
            src={jumboImage}
            className="laptop:ml-32 laptop:block tablet:hidden hp:hidden laptop:w-64 laptop:h-80 absolute m-auto top-0 left-0 bottom-0 fill-transparent z-4"
            alt="bgjumbo"
          ></Image>
          <Image
            id="logo"
            src={jumboImageLogo}
            className="laptop:block hp:mt-3 absolute top-0 bottom-0 laptop:w-full laptop:h-full z-20"
            alt="bgjumbo"
          ></Image>
          <Image
            id="a-right"
            src={ArrowRight}
            className="laptop:block laptop:w-32 laptop:h-32 hp:w-6 hp:h-6 absolute m-auto top-0 bottom-0 right-0 z-12"
            alt="arrowjumbo"
          ></Image>
          <Image
            id="a-left"
            src={ArrowLeft}
            className="laptop:block laptop:w-32 laptop:h-32 hp:w-6 hp:h-6 absolute m-auto top-0 bottom-0 left-0 z-12"
            alt="arrowjumbo"
          ></Image>
          <div className="inset-x-0 bottom-1/4 absolute">
            <h1 className="text-lg font-bold z-20 text-center text-amber-300 drop-shadow-md hover:drop-shadow-xl">
              Zalira Edu Tech
            </h1>
          </div>
        </section>
        <section
          id="about"
          className="problem h-auto text-center card bg-slate-400 w-full p-10 mb-3"
        >
          <h1 className="text-amber-300 laptop:text-6xl hp:text-2xl font-poppins drop-shadow-md hover:drop-shadow-xl">
            Our Vision
          </h1>
          <h4 className="laptop:text-lg hp:text-sm">
            &quot;We facilitate you according to your needs&quot;{" "}
          </h4>
        </section>

        <section className="relative products mt-2 overflow-x-hidden w-full">
          <div className="m-auto">
            <h4 className="text-slate-700 underline underline-offset-1 text-3xl font-poppins inline-block">
              Our Product
            </h4>
          </div>

          <Carousel />
        </section>
        <section className="card recent-project mb-5">
          <div className="mb-5 text-center text-4xl underline text-amber-300">
            <h3 className="drop-shadow-md hover:drop-shadow-xl">Latest Project</h3>
          </div>
          <div className="flex flex-wrap w-full latest-project">
            <iframe
              className="laptop:w-full laptop:h-96 hp:w-full hp:h-40 m-5 rounded-2xl"
              src="https://www.youtube.com/embed/6SBO5hPRLnQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <article className="ml-5 align-middle">
              Aplikasi buku tamu yang dilengkapi dengan WhatsApp Gateway/Bot mempermudah validasi
              dan konfirmasi tamu yang berkunjung. Admin dapat mengecek rekap tamu secara real time.
            </article>
          </div>
        </section>
        <section id="contact">
          <div className="grid grid-rows-3 bg-slate-500">
            <div className="logo bg-slate-500"></div>
            <div className="contact bg-slate-500"></div>
            <div className="maps bg-slate-500"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
