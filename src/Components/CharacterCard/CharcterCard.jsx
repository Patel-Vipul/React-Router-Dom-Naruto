
export default function CharacterCard({ image,detail,title, name, description, reverse }) {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div
        className={`container mx-auto px-6 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-10`}
      >
        {/* Character Image */}
        <div className="md:w-1/2 " data-aos={reverse ? "fade-left" : "fade-right"}>
          <img
            src={image}
            alt={name}
            className=" rounded-2xl shadow-lg min-w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          className="md:w-1/2 space-y-4"
          data-aos={reverse ? "fade-right" : "fade-left"}
        >
          <h1 className="text-orange-600 text-4xl font-black">{title}</h1>
          <h2 className=" md:text-xl font-bold text-white/900">
            {detail}
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
