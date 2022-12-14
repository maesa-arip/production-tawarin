/* This Feature requires Tailwind CSS v2.0+ */
import {
    AnnotationIcon,
    GlobeAltIcon,
    LightningBoltIcon,
    ScaleIcon,
} from "@heroicons/react/outline";

const features = [
    {
        name: "Competitive exchange rates",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: GlobeAltIcon,
    },
    {
        name: "No hidden fees",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: ScaleIcon,
    },
    {
        name: "Transfers are instant",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: LightningBoltIcon,
    },
    {
        name: "Mobile notifications",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        icon: AnnotationIcon,
    },
];

export default function Feature() {
    return (
        <div className="grid grid-cols-12 mx-auto bg-white font-inter max-w-screen-2xl">
            <section className="col-span-10 col-start-2">
                <div className="relative flex flex-col justify-between h-full">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-lg font-semibold text-blue-600">
                                Transactions
                            </h2>
                            <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
                                A better way to send money
                            </p>
                            <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
                                Lorem ipsum dolor sit amet consect adipisicing
                                elit. Possimus magnam voluptatum cupiditate
                                veritatis in accusamus quisquam.
                            </p>
                        </div>

                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative"
                                    >
                                        <dt>
                                            <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                                                <feature.icon
                                                    className="w-6 h-6"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                                                {feature.name}
                                            </p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-gray-500">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
