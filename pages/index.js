import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import jumboImage from '../public/assets/img/bgjumbo.png'
import jumboImageLogo from '../public/assets/img/zlogo-bg.png'
import ArrowRight from '../public/assets/img/arrow-r.png';
import ArrowLeft from '../public/assets/img/arrow-l.png';
import React, { useEffect, useState } from 'react'
export default function Home() {
  useEffect(() => {
    const logos = document.getElementById('logo')
    const arrowRight = document.getElementById('a-right');
    const arrowLeft = document.getElementById('a-left');
    const mediaQuery = window.matchMedia("(max-width: 1200px)")
    const handleJumbotron = () => {
      if (mediaQuery.matches) {
        if (window.scrollY >= 90) {
          logos.style.transform = 'rotate(180deg)'
          arrowRight.style.right = '0px';
          arrowLeft.style.left = '0px';
        } else {
          logos.style.transform = 'rotate(0deg)';
          logos.style.transition = "all 2s";
          arrowRight.style.transition = "all 2s";
          arrowLeft.style.transition = "all 2s";
          arrowRight.style.right = '115px';
          arrowLeft.style.left = '115px';
        }
      } else {
        if (window.scrollY >= 90) {
          logos.style.transform = 'rotate(180deg)'
          arrowRight.style.right = '0px';
          arrowLeft.style.left = '0px';
        } else {
          logos.style.transform = 'rotate(0deg)';
          logos.style.transition = "all 2s";
          arrowRight.style.transition = "all 2s";
          arrowRight.style.right = '380px';
          arrowLeft.style.left = '380px';
          arrowLeft.style.transition = "all 2s";
        }
      }
    };
    window.addEventListener('scroll', handleJumbotron);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Zalira</title>
        <meta name="description" content="zalira official website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" />
      </Head>
      <main className={styles.main}>
        <section className='jumbotron rounded-lg bg-[url("../public/assets/img/net.jpg")] bg-no-repeat bg-cover bg-center mb-5 top-0 left-0 laptop:w-full laptop:h-96 tablet:w-full tablet:h-72 hp:w-full hp:h-40 relative'>
          <div className='rounded-lg mb-10 top-0 left-0 laptop:w-full laptop:h-96 tablet:w-full tablet:h-72 hp:w-full hp:h-40 bg-gradient-to-t from-stone-700 to-transparent z-40'></div>
          <Image src={jumboImage} className='laptop:ml-32 laptop:block tablet:hidden hp:hidden laptop:w-64 laptop:h-80 absolute m-auto top-0 left-0 bottom-0 fill-transparent z-4' alt='bgjumbo'></Image>
          <Image id='logo' src={jumboImageLogo} className='laptop:block hp:mt-3 absolute top-0 bottom-0 laptop:w-full laptop:h-full z-20' alt='bgjumbo'></Image>
          <Image id='a-right' src={ArrowRight} className='laptop:block laptop:w-32 laptop:h-32 hp:w-6 hp:h-6 absolute m-auto top-0 bottom-0 right-0 z-12' alt='arrowjumbo'></Image>
          <Image id='a-left' src={ArrowLeft} className='laptop:block laptop:w-32 laptop:h-32 hp:w-6 hp:h-6 absolute m-auto top-0 bottom-0 left-0 z-12' alt='arrowjumbo'></Image>
          <div className="inset-x-0 bottom-1/4 absolute">
            <h1 className='text-lg font-bold z-20 text-center'>Menyelesaikan masalah tanpa masalah</h1>
          </div>
        </section>
        <section className='problem h-auto text-center card bg-slate-400 w-full p-10 mb-3'>
          <h1 className='text-amber-300 laptop:text-6xl hp:text-2xl font-poppins drop-shadow-md hover:drop-shadow-xl'>Our Vision</h1>
          <h4 className='laptop:text-lg hp:text-sm'>&quot;Membantu anda untuk menyelesaikan solusi&quot; </h4>
        </section>

        <section className='relative products mt-2 flex overflow-x-hidden w-full'>
          <div className="absolute top-0 left-0 m-auto">
            <h4 className='text-slate-700 underline underline-offset-1 text-3xl font-poppins inline-block'>Our Product</h4>
          </div>
          <div className="animate-marquee2 ">
            <div className="inline-flex p-10 hover:animate-spin">
              <div className="card product laptop:w-60 hp:w-40 laptop:h-96 hp:h-72 m-5 text-center p-4">
                <Image src={jumboImage} alt="prod-1" className='w-full laptop:h-52 hp:h-24 mb-4' />
                <h3 className='laptop:text-lg hp:text-sm underline mb-2'>Ebook Apps Cermin Muslim</h3>
                <p className='laptop:text-sm hp:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde. Pariatur, o</p>
              </div>
              <div className="card product laptop:w-60 hp:w-40 laptop:h-96 hp:h-72 m-5 text-center p-4 ">
                <Image src={jumboImage} alt="prod-1" className='w-full laptop:h-52 hp:h-24 mb-4' />
                <h3 className='laptop:text-lg hp:text-sm underline mb-2'>Ebook Apps Cermin Muslim</h3>
                <p className='laptop:text-sm hp:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde. Pariatur, o</p>
              </div>
              <div className="card product laptop:w-60 hp:w-40 laptop:h-96 hp:h-72 m-5 text-center p-4 ">
                <Image src={jumboImage} alt="prod-1" className='w-full laptop:h-52 hp:h-24 mb-4' />
                <h3 className='laptop:text-lg hp:text-sm underline mb-2'>Ebook Apps Cermin Muslim</h3>
                <p className='laptop:text-sm hp:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde. Pariatur, o</p>
              </div>
              <div className="card product laptop:w-60 hp:w-40 laptop:h-96 hp:h-72 m-5 text-center p-4 ">
                <Image src={jumboImage} alt="prod-1" className='w-full laptop:h-52 hp:h-24 mb-4' />
                <h3 className='laptop:text-lg hp:text-sm underline mb-2'>Ebook Apps Cermin Muslim</h3>
                <p className='laptop:text-sm hp:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde. Pariatur, o</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-30 animate-marquee">
            <div className="inline-flex p-10">
              <div className="card product laptop:w-60 hp:w-40 laptop:h-96 hp:h-72 m-5 text-center p-4 ">
                <Image src={jumboImage} alt="prod-1" className='w-full laptop:h-52 hp:h-24 mb-4' />
                <h3 className='laptop:text-lg hp:text-sm underline mb-2'>Ebook Apps Cermin Muslim</h3>
                <p className='laptop:text-sm hp:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde. Pariatur, o</p>
              </div>
              <div className="card product laptop:w-60 hp:w-40 laptop:h-96 hp:h-72 m-5 text-center p-4 ">
                <Image src={jumboImage} alt="prod-1" className='w-full laptop:h-52 hp:h-24 mb-4' />
                <h3 className='laptop:text-lg hp:text-sm underline mb-2'>Ebook Apps Cermin Muslim</h3>
                <p className='laptop:text-sm hp:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde. Pariatur, o</p>
              </div>
              <div className="card product laptop:w-60 hp:w-40 laptop:h-96 hp:h-72 m-5 text-center p-4 ">
                <Image src={jumboImage} alt="prod-1" className='w-full laptop:h-52 hp:h-24 mb-4' />
                <h3 className='laptop:text-lg hp:text-sm underline mb-2'>Ebook Apps Cermin Muslim</h3>
                <p className='laptop:text-sm hp:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde. Pariatur, o</p>
              </div>
              <div className="card product laptop:w-60 hp:w-40 laptop:h-96 hp:h-72 m-5 text-center p-4 ">
                <Image src={jumboImage} alt="prod-1" className='w-full laptop:h-52 hp:h-24 mb-4' />
                <h3 className='laptop:text-lg hp:text-sm underline mb-2'>Ebook Apps Cermin Muslim</h3>
                <p className='laptop:text-sm hp:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde. Pariatur, o</p>
              </div>
            </div>
          </div>
        </section>
        <section className='card recent-project'>
          <div className="mb-5 text-center text-4xl underline text-amber-300">
            <h3 className='drop-shadow-md hover:drop-shadow-xl'>Latest Project</h3>
          </div>
          <div className="flex flex-wrap w-full latest-project">
            <iframe className='laptop:w-full laptop:h-96 hp:w-full hp:h-40 m-5 rounded-2xl' src="https://www.youtube.com/embed/ONpzIxmfAso" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <article className='ml-5 align-middle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit saepe distinctio, dolor possimus eum illum recusandae laborum, quasi architecto iure laboriosam. Magnam excepturi ea nulla neque dignissimos voluptates nisi veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima quia facilis vel quam odit reiciendis impedit nobis deleniti. Error sed repudiandae, natus tenetur suscipit quis! Atque hic odio veritatis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus repudiandae dignissimos unde magnam rerum esse maxime labore earum a adipisci, eius exercitationem excepturi qui modi explicabo. Mollitia deserunt repellat culpa!</article>
          </div>
        </section>
      </main>
    </div>
  )
}
