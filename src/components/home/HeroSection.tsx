import Image from "next/image";


const HeroSection = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="mx-6 my-6 flex h-[50vh] w-[100vh] items-center justify-center">
      <Image src='/img/newpurplecar.jpg' width={567} height={307} alt="purple car" />
      </div>
      <div className="mx-auto max-w-7xl px-12">
        <div className="z-5 relative mx-auto w-full text-center md:w-11/12 xl:w-9/12">
          <h1 className="mb-8 text-4xl font-semibold leading-none tracking-normal text-violet-700 md:text-5xl md:tracking-tight">
            <span>Focus </span>{" "}
            <span className="leading-12 block w-full bg-gradient-to-r from-orange-600 to-violet-500 bg-clip-text py-2 text-transparent lg:inline">
              on the Road{" "}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
