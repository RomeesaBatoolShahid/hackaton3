import Image from 'next/image';
import Link from 'next/link';

const BrowseDressStyle = () => {
    // Image sources for the categories
    const categories = [
        { id: 1, imageSrc: '/casual.png', label: 'Casual' },
        { id: 2, imageSrc: '/formal.png', label: 'Formal' },
        { id: 3, imageSrc: '/party.png', label: 'Party' },
        { id: 4, imageSrc: '/gym.png', label: 'Gym' },
    ];

    const styles = [
        {
            id: 1,
            label: "Casual",
            image: "/casual1.png", // Replace with your actual image paths
        },
        {
            id: 2,
            label: "Formal",
            image: "/formal1.png",
        },
        {
            id: 3,
            label: "Party",
            image: "/party1.png",
        },
        {
            id: 4,
            label: "Gym",
            image: "/gym1.png",
        },
    ];

    return (
        <section className="px-6 lg:px-20 py-12 bg-gray-100 overflow-hidden ">
            {/* Section Header */}
            <div className='hidden lg:block'>
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
                    Browse By Dress Style
                </h2>

                {/* First Row */}
                <div className="flex justify-between mb-8 ">
                    {/* Casual - 407px Width */}
                    <div className="relative w-[407px] h-[289px]">
                        <Link href="/Category">
                            <Image
                                src={categories[0].imageSrc}
                                alt={categories[0].label}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-[20px]"
                            />
                        </Link>
                    </div>

                    {/* Formal - 684px Width */}
                    <div className="relative w-[684px] h-[289px]">
                        <Image
                            src={categories[1].imageSrc}
                            alt={categories[1].label}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-[20px]"
                        />
                    </div>
                </div>

                {/* Second Row */}
                <div className="flex justify-between">
                    {/* Party - 684px Width */}
                    <div className="relative w-[684px] h-[289px]">
                        <Image
                            src={categories[2].imageSrc}
                            alt={categories[2].label}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-[20px]"
                        />
                    </div>

                    {/* Gym - 407px Width */}
                    <div className="relative w-[407px] h-[289px]">
                        <Image
                            src={categories[3].imageSrc}
                            alt={categories[3].label}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-[20px]"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <section className="bg-gray-100 p-6 rounded-lg sm:hidden">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Browse by Dress Style
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    {styles.map((style) => (
                        <div
                            key={style.id}
                            className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <Image
                                src={style.image}
                                alt={style.label}
                                width={310}  // Specify width
                                height={190} // Specify height
                                className="object-cover rounded-lg"
                            />
                            <span className="text-lg font-semibold">{style.label}</span>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};

export default BrowseDressStyle;
