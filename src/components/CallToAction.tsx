import Link from "next/link";

const CallToAction = () => {
    return (
        <div className="section-container py-20 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-6xl font-thin mb-8">Have a project in mind?</h2>
            <Link href="#contact" className="px-8 py-4 border border-white rounded-full text-lg hover:bg-white hover:text-black transition-all">
                Let's Talk
            </Link>
        </div>
    );
};

export default CallToAction;
