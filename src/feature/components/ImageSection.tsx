import Image from "next/image";

const ImageSection = () => {
  return (
    <section>
      <div className="relative flex h-[280px] items-center justify-center bg-white sm:h-[380px] lg:h-[300px] lg:gap-8">
        <Image
          height={360}
          width={450}
          src="/programing.png"
          alt="Programming illustration for large screens"
          className="hidden lg:flex"
        />

        <Image
          height={100}
          width={180}
          src="/programing.png"
          alt="Programming illustration for small screens"
          className="absolute lg:hidden"
        />
        <h2 className="z-0 font-roboto text-5xl sm:text-6xl font-bold text-white text-stroke">
          SOMA TAKATA
        </h2>
      </div>
    </section>
  );
};

export default ImageSection;
