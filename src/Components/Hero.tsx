import Image from 'next/image'; // For optimized image usage in Next.js

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center px-6 lg:px-20 py-12 bg-[#f2f0f1] overflow-hidden h-auto w-full max-w-screen-xl mx-auto">
      {/* Left Section (Text Content) */}
      <div className="flex flex-col space-y-6 lg:max-w-lg text-center lg:text-left">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-extrabold leading-snug">
          <span className="block">FIND CLOTHES</span>
          <span className="block">THAT MATCHES</span>
          <span className="block">YOUR STYLES</span>
        </h1>
        {/* Paragraph */}
        <p className="text-base lg:text-lg text-gray-700 leading-7">
          Browse through our diverse range of meticulously designed
          <br className="hidden lg:block" />
          products to bring out your individuality and cater to your sense of style.
        </p>

        {/* Shop Now Button */}
        <div className="flex justify-center lg:justify-start">
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200">
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Section (Model Picture for Large Screens) */}
       {/* vectors */}
       
        
      <div className="hidden lg:block w-[500px] h-[663px] relative top-10 -right-12">
        
        <Image
          src="/hero.png" 
          alt="Model"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    {/* Mobile Layout Section */}
      <div className="lg:hidden flex flex-col items-center space-y-6 mt-8">
        {/* Mobile Model Image */}
        <div className="relative w-[280px] h-[300px]">
          <Image
            src="/hero.png" 
            alt="Model"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Stats */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-sm text-gray-600">International Brands</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">2000+</h3>
              <p className="text-sm text-gray-600">High Quality Products</p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">30000+</h3>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
