import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000); // Reset after 4s
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('/src/assets/scroll-bg.jpg')] bg-cover bg-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10 max-w-lg w-full"
      >
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Send a Scroll to Konoha 🌀
        </h1>

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.form
              key="form"
              onSubmit={handleSend}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Ninja Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="email"
                placeholder="Secret Village Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <textarea
                placeholder="Your Mission Message"
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-300"
              >
                Send Scroll
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-green-700 font-semibold text-xl"
            >
              🪶 Your scroll has been sent to the Hokage’s desk!
              <div className="text-sm text-gray-700 mt-2">
                (Delivered by Pakkun 🐶 in record time!)
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Contact;
