import { Link, NavLink } from "react-router-dom";
import { heroSection,naruto,sasuke,kakashi,sakura,hinata } from "../../assets";
import CharacterCard from "../CharacterCard/CharcterCard";

export default function Home() {
    return(
        <>
            <div>
                <div>
                    {/* hero-section */}
                    <section
                    className="relative h-100 bg-cover bg-center bg-no-repeat"                              
                    style={{backgroundImage:`url(${heroSection})`}}
                    >
                        <div className="absolute inset-0 bg-black/60"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                            <h1 className="text-4xl md:text-6xl font-bold text-white/90">
                                Welcome to the Hidden Leaf Village 🌿
                            </h1>
                            <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-200">
                                Explore the world of Naruto — where friendship, courage, and destiny collide.
                            </p>
                            <NavLink 
                            className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 font-bold rounded-lg transition cursor-pointer text-black/90">
                                Explore Ninjas
                            </NavLink>
                        </div>
                    </section>

                    {/* character section  */}
                    <CharacterCard 
                        title={"Naruto Uzumaki"}
                        image={naruto}
                        name={naruto}
                        detail={"Naruto Uzumaki is a spirited ninja from the Hidden Leaf Village and the host of the Nine-Tailed Fox spirit sealed within him since birth. Shunned and isolated as a child, Naruto channeled his loneliness into determination — dreaming of one day becoming Hokage, the strongest ninja and leader of his village."}
                        description={"Through sheer willpower, compassion, and an unbreakable bond with his friends, Naruto transformed from an outcast into the hero who united nations. His journey embodies resilience, belief in oneself, and the power of never giving up — his ninja way: “Dattebayo!”"}
                    />

                    <CharacterCard
                    title={"Sasuke Uchiha"}
                    image={sasuke}
                    name={sasuke}
                    reverse
                    detail={"Sasuke Uchiha is the last surviving member of the Uchiha clan of the Hidden Leaf Village. Haunted by the brutal loss of his family at the hands of his own brother, Itachi, Sasuke’s heart was consumed by vengeance. His quest for power led him down a dark path — away from his home, his friends, and even himself.Yet beneath his cold resolve lies a soul tormented by pain and purpose. Through countless battles and revelations, Sasuke’s journey becomes one of redemption — seeking not only to understand his clan’s tragedy but also to rebuild the world in his own way."}
                    description={"A master of the Sharingan and lightning-style jutsu, Sasuke stands as Naruto’s eternal rival — the embodiment of shadow to Naruto’s light."}
                    />

                    <CharacterCard
                    title={"Sakura Haruno"}
                    image={sakura}
                    name={sakura}
                    detail={"Sakura Haruno started as a bright and emotional young ninja with a desire to prove herself. Initially overshadowed by her teammates, Naruto and Sasuke, she struggled with insecurity and self-doubt. But under the guidance of Tsunade, she found her purpose — to protect her comrades and heal those in need.Her transformation was one of the most profound in the shinobi world: from a student who lacked confidence to a warrior capable of shattering mountains and saving lives with her medical expertise. Sakura’s journey reflects growth, courage, and the strength that comes from compassion."}
                    description={"Once underestimated and unsure of her power, Sakura rose to become one of the most skilled medical-nin in history — a symbol of love, strength, and unbreakable resolve who stands proudly beside her teammates."}
                    />

                    <CharacterCard
                    title={"Kakashi Hatake"}
                    image={kakashi}
                    name={kakashi}
                    reverse
                    detail={"Kakashi Hatake, known as the Copy Ninja of the Hidden Leaf Village, is a man wrapped in calm composure and quiet mystery. A prodigy from a young age, he mastered over a thousand jutsu through his Sharingan eye — a gift from his late comrade, Obito Uchiha.Behind his laid-back demeanor and iconic mask lies a heart weighed by loss and duty. Having lived through the tragedies of war, Kakashi learned the true meaning of teamwork and sacrifice — lessons he passed on to his students, Naruto, Sasuke, and Sakura.As the leader of Team 7, he guided them not only in the art of ninjutsu but in the values of loyalty, courage, and compassion. His calm wisdom and subtle humor made him both a mentor and a guardian — shaping the next generation of heroes.Eventually, Kakashi rose to become the Sixth Hokage, a leader whose strength lay not in power alone but in understanding and empathy."}
                    description={"The calm and brilliant Copy Ninja of Konoha — a man forged by loss, defined by wisdom, and remembered as the teacher who lit the path for the heroes of a new era."}
                    />

                    <CharacterCard
                    title={"Hinata Hyuga"}
                    image={hinata}
                    name={hinata}
                    detail={"Hinata Hyuga, heiress of the noble Hyuga clan, was born into a world of expectations she struggled to meet. Gentle, soft-spoken, and kindhearted, she was often deemed too timid to embody the strength of her lineage. Yet beneath that quiet exterior burned a spirit of unwavering resolve — one inspired by the boy who never gave up, Naruto Uzumaki.From the moment she first saw his courage, Hinata found the strength to face her fears and defy the limits placed upon her. Through rigorous training and countless trials, she transformed from a shy observer into a fierce warrior who stood her ground against impossible odds.Her mastery of the Byakugan and Gentle Fist made her a formidable shinobi, but it was her compassion and courage that truly defined her. In love and in battle, Hinata’s heart never wavered — her faith in Naruto and her own will made her one of the Hidden Leaf’s truest heroes."}
                    description={"Once a timid heiress overshadowed by doubt, Hinata rose with quiet determination to become a warrior of unshakable heart — proving that true strength is born from love, kindness, and belief in oneself."}
                    />

                </div>
            </div>
        </>
    )
}

