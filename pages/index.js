import Head from 'next/head';
import Image from 'next/image';
import thProfile from '../public/th_lucian.jpg';
import { GrLinkedinOption, GrGithub } from 'react-icons/gr';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucian-DEV -- Freelance Front-end Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          title="Lucian-DEV -- Freelance Front-end Developer"
          description="I build different types of websites like One-Page, Magazine, E-commerce, Portfolio, Blogs, Landing Pages."
        />
      </Head>
      <section className="w-full h-screen px-4 py-40 sm:px-20">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gray-100">
            <Image src={thProfile} fill objectFit="cover" alt="Lucian-DEV -- Front-end Developer" />
          </div>
          <div className="my-4 text-white">
            <h1 className="mb-6">Building successful websites...</h1>
            <p className="text-sm">Get in touch</p>
            <span className="block leading-none">--</span>
            <div className="flex items-center">
              <a
                className="mr-2 w-6 h-6"
                href="https://www.linkedin.com/in/lucian-dev/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GrLinkedinOption className="w-full h-full hover:fill-secondaryColor transition-all" />
              </a>
              <a
                href="https://github.com/lucian-dev"
                className="w-6 h-6"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GrGithub className="w-full h-full hover:fill-secondaryColor transition-all" />
              </a>
            </div>
          </div>
          <div className="text-white">More to come...</div>
        </div>
      </section>
    </>
  );
}
