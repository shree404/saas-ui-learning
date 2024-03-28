import { MenuAlt3Icon } from "@heroicons/react/outline";
import bg from '../images/studying.jpg';

export default function LandingPage() {
  return (
    <div className="overflow-hidden px-6" 
    >
      <div className="mx-auto mt-7 w-full max-w-6xl lg:mt-14">
        {/* Nav */}
        <nav className="relative z-20 flex shrink-0 items-center space-x-2">
          {/* <a href="#">
            <img
              src="https://res.cloudinary.com/dbbfbpsc2/image/upload/v1664089637/saasblocks-tdg1/assets/logos/penta_full.png"
              alt="penta logo"
              className="h-8 lg:h-12"
            />
          </a> */}

          <div className="flex-1"></div>
          <div >
          <div className="hidden space-x-10 lg:flex  font-bold text-black
           ">
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              STUDY ABROAD
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              STUDENT SERVICES
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              VISA
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              EVENT
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              BLOG
            </a>
            <a
              href="#"
              className="text-lg hover:text-heading focus:text-heading"
            >
              CONTACT US
            </a>
          </div>
          </div>

          <div className="lg:hidden">
            <button className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none border-transparent bg-transparent p-2.5 font-semibold text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text">
              <MenuAlt3Icon className="h-6 w-6" />
            </button>
          </div>
        </nav>

        <main className="mt-14 lg:mt-24">
          {/* Hero section */}
          <section className="relative">
            <div className="text-sm font-semibold uppercase tracking-tightfont-bold text-black">
              <p className="ml-10 text-md">Expert Education </p>
              <hr className="w-1/5 border-black p-1 h-2"/>
            </div>
            <div>
            <h1 className="font-display relative z-10 mt-4 text-4xl text-black font-bold leading-tight tracking-tight text-heading lg:mt-8 lg:text-6xl">
              Explore your <br /> <span>dreams overseas</span>
            </h1>
            </div>
            <div className="relative mt-12 lg:mt-24">
              <div className="absolute inset-x-0 inset-y-0 rounded-3xl bg-gradient-to-b from-[#2aefe6] to-[#ff7b60] blur-md lg:top-4 lg:-bottom-4 lg:blur-xl"></div>
              <img
                src="https://res.cloudinary.com/dbbfbpsc2/image/upload/v1664091452/saasblocks-tdg1/assets/penta_about_hero.png"
                alt="people looking at laptop while smiling"
                className="relative z-10 aspect-[2/1] w-full rounded-3xl"
              />
            </div>

            {/* Deco - Circle SVG */}
            {/* <svg
              viewBox="0 0 200 200"
              fill="url(#deco_circle_342_59077)"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-6 -right-28 h-80 w-80 -rotate-45 mix-blend-overlay lg:-top-20 lg:-right-14 lg:h-96 lg:w-96"
            >
              <g>
                <path d="M199.885 104.839C199.961 103.235 200 101.622 200 100C200 98.3776 199.961 96.7647 199.885 95.1613L0.114982 95.1613C0.0387475 96.7647 0 98.3776 0 100C0 101.622 0.0387475 103.235 0.114982 104.839L199.885 104.839Z" />
                <path d="M199 114.194L0.999559 114.194C1.46547 117.473 2.09079 120.702 2.867 123.871L197.133 123.871C197.909 120.702 198.535 117.473 199 114.194Z" />
                <path d="M194.348 133.226H5.65241C6.81767 136.535 8.15209 139.764 9.64529 142.903H190.355C191.848 139.764 193.182 136.535 194.348 133.226Z" />
                <path d="M185.276 152.258H14.7244C16.7893 155.621 19.0477 158.851 21.4837 161.935H178.516C180.952 158.851 183.211 155.621 185.276 152.258Z" />
                <path d="M170.126 171.29H29.8737C33.4321 174.791 37.2518 178.028 41.3004 180.968H158.7C162.748 178.028 166.568 174.791 170.126 171.29Z" />
                <path d="M142.971 190.323H57.029C70.0473 196.527 84.6182 200 100 200C115.382 200 129.953 196.527 142.971 190.323Z" />
                <path d="M0.999559 85.8064L199 85.8064C198.535 82.5268 197.909 79.2981 197.133 76.129L2.867 76.129C2.09079 79.2981 1.46547 82.5268 0.999559 85.8064Z" />
                <path d="M5.65241 66.7742L194.348 66.7742C193.182 63.4652 191.848 60.2359 190.355 57.0968L9.64529 57.0968C8.15209 60.2359 6.81767 63.4652 5.65241 66.7742Z" />
                <path d="M14.7244 47.7419L185.276 47.7419C183.211 44.3794 180.952 41.1486 178.516 38.0645L21.4837 38.0645C19.0477 41.1486 16.7893 44.3794 14.7244 47.7419Z" />
                <path d="M29.8737 28.7097L170.126 28.7097C166.568 25.2089 162.748 21.9723 158.7 19.0323L41.3004 19.0323C37.2518 21.9723 33.4321 25.2089 29.8737 28.7097Z" />
                <path d="M57.029 9.67742L142.971 9.67742C129.953 3.47278 115.382 0 100 0C84.6182 0 70.0473 3.47278 57.029 9.67742Z" />
              </g>
              <defs>
                <linearGradient
                  id="deco_circle_342_59077"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#26F2EA" />
                  <stop offset="1" stopColor="#FF7B60" />
                </linearGradient>
              </defs>
            </svg> */}
          </section>
          {/* Mission section */}
          <section className="mt-12 flex flex-col justify-between gap-10 lg:mt-24 lg:flex-row lg:gap-4">
            <div>
              <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                Our mission
                <span className="absolute -bottom-4 left-0 h-[3px] w-16 bg-[#2aefe6] lg:-bottom-5"></span>
              </h2>
            </div>
            <div className="w-full space-y-8 lg:max-w-3xl lg:pl-4 lg:text-lg">
              <p>
                We believe that everyone deserves the opportunity to be
                financially secure, but many people don't know where to start.
                That's why we built Fintrade, an easy-to-use platform that helps
                you get started with your own financial plan and reach your
                goals.
              </p>
              <p>
                Our team consists of 6 people from all walks of life, who are
                passionate about helping people reach financial independence.
                We're completely bootstrapped and profitable—and we're always
                looking for new ways to improve our product and customer
                experience.
              </p>
            </div>
          </section>

          {/* Story section */}
          <section className="relative mt-12 flex flex-col justify-between gap-12 lg:mt-24 lg:flex-row lg:gap-4">
            <div>
              <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
                Our story
                <span className="absolute -bottom-4 left-0 h-[3px] w-16 bg-[#ff7b60] lg:-bottom-5"></span>
              </h2>
            </div>
            <div className="z-10 w-full lg:max-w-3xl lg:pl-4 lg:text-lg">
              <img
                src="https://res.cloudinary.com/dbbfbpsc2/image/upload/v1664092344/saasblocks-tdg1/assets/penta_about_story.png"
                alt="people working in the office with a main person cross-armed on the right looking at the camera"
                className="rounded-xl"
              />
              <p className="mt-8 lg:mt-12">
                We believe that everyone deserves the opportunity to be
                financially secure, but many people don't know where to start.
                That's why we built Fintrade, an easy-to-use platform that helps
                you get started with your own financial plan and reach your
                goals.
              </p>
              <p className="mt-8">
                Our team consists of 6 people from all walks of life, who are
                passionate about helping people reach financial independence.
                We're completely bootstrapped and profitable—and we're always
                looking for new ways to improve our product and customer
                experience.
              </p>
            </div>

            {/* Deco - Square SVG */}
            <svg
              viewBox="0 0 200 200"
              fill="url(#deco_square_342_59077)"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -right-2 -bottom-40 h-36 w-36 rotate-45 mix-blend-overlay lg:-left-4 lg:top-1/2 lg:h-56 lg:w-56 lg:-translate-y-1/2"
            >
              <g>
                <path d="M-6.31809e-06 0L200 0V15.6863L-6.31809e-06 15.6863V0Z" />
                <path d="M-6.31809e-06 30.719L200 30.719V46.4052L-6.31809e-06 46.4052V30.719Z" />
                <path d="M-6.31809e-06 61.4379L200 61.4379V77.1242L-6.31809e-06 77.1242V61.4379Z" />
                <path d="M-6.31809e-06 92.1569L200 92.1569V107.843L-6.31809e-06 107.843V92.1569Z" />
                <path d="M-6.31809e-06 122.876L200 122.876V138.562H-6.31809e-06V122.876Z" />
                <path d="M-6.31809e-06 153.595H200V169.281H-6.31809e-06V153.595Z" />
                <path d="M-6.31809e-06 184.314H200V200H-6.31809e-06V184.314Z" />
              </g>
              <defs>
                <linearGradient
                  id="deco_square_342_59077"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#26F2EA" />
                  <stop offset="1" stopColor="#FF7B60" />
                </linearGradient>
              </defs>
            </svg>
          </section>

          {/* Team section */}
          <section className="mt-12 lg:mt-24">
            <h2 className="font-display relative text-3xl font-bold tracking-tight text-heading lg:text-5xl lg:tracking-tighter">
              Our team
              <span className="absolute -bottom-4 left-0 h-[3px] w-16 bg-[#2aefe6] lg:-bottom-5"></span>
            </h2>
            <div className="mt-12 grid gap-x-18 gap-y-8 lg:mt-14 lg:grid-cols-2 lg:gap-y-24">
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                <div className="shrink-0">
                  <img
                    src="/assets/avatars/pasquale-blanco.png"
                    alt="avatar"
                    className="inline-block h-18 w-18 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-heading">
                    Awaits Pruitt, CEO
                  </h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Condimentum morbi in tristique suscipit purus. Turpis
                    phasellus vitae lectus nisl magna. Pharetra nam eget sed
                    cras tortor odio diam. Sit habitant lacus viverra ligula
                    consectetur nam commodo.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                <div className="shrink-0">
                  <img
                    src="/assets/avatars/cedric-green.png"
                    alt="avatar"
                    className="inline-block h-18 w-18 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-heading">
                    Felix Hart, CTO
                  </h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Condimentum morbi in tristique suscipit purus. Turpis
                    phasellus vitae lectus nisl magna. Pharetra nam eget sed
                    cras tortor odio diam. Sit habitant lacus viverra ligula
                    consectetur nam commodo.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                <div className="shrink-0">
                  <img
                    src="/assets/avatars/irina-zaytesev.png"
                    alt="avatar"
                    className="inline-block h-18 w-18 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-heading">
                    Dawn Mansell, Product Designer
                  </h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Condimentum morbi in tristique suscipit purus. Turpis
                    phasellus vitae lectus nisl magna. Pharetra nam eget sed
                    cras tortor odio diam. Sit habitant lacus viverra ligula
                    consectetur nam commodo.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                <div className="shrink-0">
                  <img
                    src="/assets/avatars/john-smith.png"
                    alt="avatar"
                    className="inline-block h-18 w-18 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-heading">
                    Phillip Wade, UX Designer
                  </h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Condimentum morbi in tristique suscipit purus. Turpis
                    phasellus vitae lectus nisl magna. Pharetra nam eget sed
                    cras tortor odio diam. Sit habitant lacus viverra ligula
                    consectetur nam commodo.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                <div className="shrink-0">
                  <img
                    src="/assets/avatars/dianne-russell.png"
                    alt="avatar"
                    className="inline-block h-18 w-18 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-heading">
                    Ayat Zamora, CFO
                  </h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Condimentum morbi in tristique suscipit purus. Turpis
                    phasellus vitae lectus nisl magna. Pharetra nam eget sed
                    cras tortor odio diam. Sit habitant lacus viverra ligula
                    consectetur nam commodo.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-8">
                <div className="shrink-0">
                  <img
                    src="/assets/avatars/nicholas-turner.png"
                    alt="avatar"
                    className="inline-block h-18 w-18 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-heading">
                    Waseem Houghton, Recruiting
                  </h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Condimentum morbi in tristique suscipit purus. Turpis
                    phasellus vitae lectus nisl magna. Pharetra nam eget sed
                    cras tortor odio diam. Sit habitant lacus viverra ligula
                    consectetur nam commodo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA section */}
          <section className="mt-12 lg:mt-36">
            <h2 className="font-display text-2xl font-bold text-heading lg:text-4xl">
              We are looking for{" "}
              <span className="text-[#2aefe6]">
                passionate, inspired people
              </span>{" "}
              who seek to change the world of financing. Come join us for a{" "}
              <span className="text-[#ff7b60]">4-day workweek</span>,{" "}
              <span className="text-[#ff7b60]">async & remote</span>, worldwide,{" "}
              <span className="text-[#ff7b60]">competitive pay</span>, full
              benefits and{" "}
              <span className="text-[#2aefe6]">amazing people</span>!
            </h2>
          </section>

          {/* Jobs section */}
          <section className="relative mt-12 lg:mt-36">
            <div className="relative z-10 text-sm font-semibold uppercase tracking-tight text-[#ff7b60]">
              Async, remote worldwide
            </div>
            <h2 className="font-display relative z-10 mt-4 text-3xl font-bold text-heading lg:text-5xl lg:tracking-tight">
              Open Positions
            </h2>

            <div className="relative z-10 mt-8 grid gap-x-32 gap-y-8 lg:mt-16 lg:grid-cols-2 lg:gap-y-20">
              <div className="max-w-md">
                <h3 className="text-xl font-bold tracking-tight text-heading">
                  Full Stack Developer
                </h3>
                <div className="mt-3 text-sm font-medium text-heading">
                  $160-220k
                </div>
                <p className="mt-4">
                  We need a full stack developer to help us build out our
                  infrastructure, including our next-level experience. You will
                  be responsible for collaborating with other senior-level
                  engineers and implementing best practices in your work.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-[#2aefe6] hover:brightness-125 focus:brightness-125"
                >
                  View full position
                </a>
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-bold tracking-tight text-heading">
                  Product Designer
                </h3>
                <div className="mt-3 text-sm font-medium text-heading">
                  $160-220k
                </div>
                <p className="mt-4">
                  You'll be responsible for implementing best practices in
                  infrastructure, and collaborating with other senior-level
                  engineers to make sure that the product is always running
                  smoothly.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-[#2aefe6] hover:brightness-125 focus:brightness-125"
                >
                  View full position
                </a>
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-bold tracking-tight text-heading">
                  Front End Engineer
                </h3>
                <div className="mt-3 text-sm font-medium text-heading">
                  $160-220k
                </div>
                <p className="mt-4">
                  We're looking for someone who has experience managing complex
                  systems at scale, and we want someone who can work
                  independently but also thrive in a collaborative environment.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-[#2aefe6] hover:brightness-125 focus:brightness-125"
                >
                  View full position
                </a>
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-bold tracking-tight text-heading">
                  Senior UX Designer
                </h3>
                <div className="mt-3 text-sm font-medium text-heading">
                  $160-220k
                </div>
                <p className="mt-4">
                  You'll be responsible for implementing best practices in
                  infrastructure, and collaborating with other senior-level
                  engineers to make sure that the product is always running
                  smoothly.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-[#2aefe6] hover:brightness-125 focus:brightness-125"
                >
                  View full position
                </a>
              </div>
            </div>

            {/* Deco - Circle SVG */}
            <svg
              viewBox="0 0 200 200"
              fill="url(#deco_circle_342_59077)"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -top-10 -right-14 h-64 w-64 -rotate-45 mix-blend-overlay lg:right-0 lg:-top-18"
            >
              <g>
                <path d="M199.885 104.839C199.961 103.235 200 101.622 200 100C200 98.3776 199.961 96.7647 199.885 95.1613L0.114982 95.1613C0.0387475 96.7647 0 98.3776 0 100C0 101.622 0.0387475 103.235 0.114982 104.839L199.885 104.839Z" />
                <path d="M199 114.194L0.999559 114.194C1.46547 117.473 2.09079 120.702 2.867 123.871L197.133 123.871C197.909 120.702 198.535 117.473 199 114.194Z" />
                <path d="M194.348 133.226H5.65241C6.81767 136.535 8.15209 139.764 9.64529 142.903H190.355C191.848 139.764 193.182 136.535 194.348 133.226Z" />
                <path d="M185.276 152.258H14.7244C16.7893 155.621 19.0477 158.851 21.4837 161.935H178.516C180.952 158.851 183.211 155.621 185.276 152.258Z" />
                <path d="M170.126 171.29H29.8737C33.4321 174.791 37.2518 178.028 41.3004 180.968H158.7C162.748 178.028 166.568 174.791 170.126 171.29Z" />
                <path d="M142.971 190.323H57.029C70.0473 196.527 84.6182 200 100 200C115.382 200 129.953 196.527 142.971 190.323Z" />
                <path d="M0.999559 85.8064L199 85.8064C198.535 82.5268 197.909 79.2981 197.133 76.129L2.867 76.129C2.09079 79.2981 1.46547 82.5268 0.999559 85.8064Z" />
                <path d="M5.65241 66.7742L194.348 66.7742C193.182 63.4652 191.848 60.2359 190.355 57.0968L9.64529 57.0968C8.15209 60.2359 6.81767 63.4652 5.65241 66.7742Z" />
                <path d="M14.7244 47.7419L185.276 47.7419C183.211 44.3794 180.952 41.1486 178.516 38.0645L21.4837 38.0645C19.0477 41.1486 16.7893 44.3794 14.7244 47.7419Z" />
                <path d="M29.8737 28.7097L170.126 28.7097C166.568 25.2089 162.748 21.9723 158.7 19.0323L41.3004 19.0323C37.2518 21.9723 33.4321 25.2089 29.8737 28.7097Z" />
                <path d="M57.029 9.67742L142.971 9.67742C129.953 3.47278 115.382 0 100 0C84.6182 0 70.0473 3.47278 57.029 9.67742Z" />
              </g>
              <defs>
                <linearGradient
                  id="deco_circle_342_59077"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#26F2EA" />
                  <stop offset="1" stopColor="#FF7B60" />
                </linearGradient>
              </defs>
            </svg>
          </section>
        </main>
        <footer className="relative -mx-6 mt-10 overflow-hidden px-6 pt-2 pb-12 lg:-mx-20 lg:mt-28 lg:px-20 lg:pt-12 lg:pb-20">
          <div className="relative z-20 flex flex-col flex-wrap justify-between gap-y-2 lg:flex-row">
            <div>
              <a
                href="#"
                className="inline-block text-sm font-semibold uppercase tracking-wide hover:text-heading focus:text-heading"
              >
                About
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm font-semibold uppercase tracking-wide hover:text-heading focus:text-heading"
              >
                Wall of love
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm font-semibold uppercase tracking-wide hover:text-heading focus:text-heading"
              >
                Product
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm font-semibold uppercase tracking-wide hover:text-heading focus:text-heading"
              >
                Blog
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm font-semibold uppercase tracking-wide hover:text-heading focus:text-heading"
              >
                Integrations
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm font-semibold uppercase tracking-wide hover:text-heading focus:text-heading"
              >
                Terms
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm font-semibold uppercase tracking-wide hover:text-heading focus:text-heading"
              >
                Privacy
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm font-semibold uppercase tracking-wide hover:text-heading focus:text-heading"
              >
                Twitter
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm font-semibold uppercase tracking-wide hover:text-heading focus:text-heading"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Deco - Square SVG */}
          <svg
            viewBox="0 0 200 200"
            fill="url(#deco_square_342_59077)"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-12 -right-14 w-48 rotate-45 mix-blend-overlay lg:left-16 lg:top-16 lg:w-56"
          >
            <g>
              <path d="M-6.31809e-06 0L200 0V15.6863L-6.31809e-06 15.6863V0Z" />
              <path d="M-6.31809e-06 30.719L200 30.719V46.4052L-6.31809e-06 46.4052V30.719Z" />
              <path d="M-6.31809e-06 61.4379L200 61.4379V77.1242L-6.31809e-06 77.1242V61.4379Z" />
              <path d="M-6.31809e-06 92.1569L200 92.1569V107.843L-6.31809e-06 107.843V92.1569Z" />
              <path d="M-6.31809e-06 122.876L200 122.876V138.562H-6.31809e-06V122.876Z" />
              <path d="M-6.31809e-06 153.595H200V169.281H-6.31809e-06V153.595Z" />
              <path d="M-6.31809e-06 184.314H200V200H-6.31809e-06V184.314Z" />
            </g>
            <defs>
              <linearGradient
                id="deco_square_342_59077"
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#26F2EA" />
                <stop offset="1" stopColor="#FF7B60" />
              </linearGradient>
            </defs>
          </svg>
        </footer>
      </div>
    </div>
  );
}
