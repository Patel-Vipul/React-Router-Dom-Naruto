import naruto2 from "../../assets/naruto2.png";
import kishamoto from "../../assets/kishamoto.jpg";
import narutoWorld from "../../assets/narutoworld.jpg";

function About() {
  return (
    <div className="bg-white text-gray-800">
      {/* Section 1 - Naruto World */}
      <section className="py-16 flex flex-col md:flex-row items-center gap-10 px-6 md:px-12">
        <img
          src={naruto2}
          alt="Naruto World"
          className="md:w-1/2 rounded-2xl shadow-lg"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">The World of Naruto</h2>
          <p className="leading-relaxed text-gray-800">
            Naruto is more than an anime — it’s a journey through friendship,
            pain, and growth. Set in a world of shinobi and hidden villages, it
            follows Naruto Uzumaki, a boy ostracized for the Nine-Tails sealed
            within him, as he chases his dream of becoming Hokage — the greatest
            ninja of his village. Through years of training, laughter, loss, and
            perseverance, Naruto’s story reminds us that strength isn’t just
            about power — it’s about never abandoning your friends and believing
            in yourself when no one else does. The series explores deep themes
            of legacy, redemption, and the eternal cycle of hatred and peace.
          </p>
        </div>
      </section>

      {/* Section 2 - About Masashi Kishimoto */}
      <section className="py-16 flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-12 bg-gray-50">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Masashi Kishimoto — The Creator
          </h2>
          <p className="leading-relaxed text-gray-800">
            Naruto was written and illustrated by Masashi Kishimoto, who poured
            his own life experiences and emotions into every character.
            Kishimoto began working on Naruto in the late 1990s, inspired by his
            fascination with Japanese culture, samurai ethos, and the concept of
            perseverance — or as Naruto calls it, “dattebayo!” His storytelling
            transformed simple ninja adventures into lessons about empathy,
            purpose, and the human condition — earning Naruto a place among the
            most beloved anime and manga in history.
          </p>
        </div>
        <img
          src={kishamoto}
          alt="Masashi Kishimoto"
          className="md:w-1/2 rounded-2xl shadow-lg"
        />
      </section>

      {/* Section 3 - Legacy */}
      <section
        className="py-20 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${narutoWorld})` }}>
        <div className="bg-black/50 p-8 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">The Legacy Lives On</h2>
          <p className="text-lg leading-relaxed">
            Today, Naruto continues to inspire millions across the world —
            teaching that no dream is too big, and no one is too small to change
            the world. The spirit of the Will of Fire lives on — not just in the
            Hidden Leaf, but in the hearts of fans everywhere. 🌿
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
