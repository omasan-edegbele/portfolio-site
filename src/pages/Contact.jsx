// export default function Contact() {
//   return (
//     <section className="mx-auto max-w-5xl px-6 py-16 text-white">

//       <h1 className="font-pixel text-3xl text-center">PLAYER CONNECT</h1>

//       {/* Terminal Form */}
//       <div className="mt-10 rounded-xl bg-white/10 p-6 ring-1 ring-white/15">

//         <div className="font-pixel text-xs text-pink-200">
//           MESSAGE TERMINAL
//         </div>

//         <div className="mt-6 grid gap-4">

//           <input
//             placeholder="NAME"
//             className="bg-black/30 p-3 text-sm ring-1 ring-white/20"
//           />

//           <input
//             placeholder="EMAIL"
//             className="bg-black/30 p-3 text-sm ring-1 ring-white/20"
//           />

//           <textarea
//             placeholder="MESSAGE"
//             rows="4"
//             className="bg-black/30 p-3 text-sm ring-1 ring-white/20"
//           />

//           <button  href="mailto:omasanE@gmail.com?subject=Portfolio Contact" className="bg-white px-6 py-3 text-black font-pixel text-xs hover:bg-white/90">
//             SEND MESSAGE
//           </button>

//         </div>
//       </div>

//       {/* Social links */}
//       <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">

//         <a href="https://www.linkedin.com/in/omasan-edegbele-13a920214/" className="bg-white/10 px-5 py-3 ring-1 ring-white/20">
//           LinkedIn
//         </a>

//         <a href="https://github.com/omasan" className="bg-white/10 px-5 py-3 ring-1 ring-white/20">
//           GitHub
//         </a>

//         <a className="bg-white/10 px-5 py-3 ring-1 ring-white/20">
//           Resume
//         </a>

//       </div>

//     </section>
//   );
// }

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const closePopup = () => {
    setStatus((prev) => ({
      ...prev,
      success: false,
      error: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      await emailjs.sendForm(
        "service_mrhr8vp",
        "template_ywodm7k",
        formRef.current,
        {
          publicKey: "B857VnOH2DVNBoiIk",
        }
      );

      setStatus({
        loading: false,
        success: true,
        error: "",
      });

      setFormData({
        name: "",
        email: "",
        title: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Transmission failed. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14081f] via-[#1a0f2e] to-[#0f0620] text-white px-6 py-12">
      <div className="mx-auto max-w-2xl border-4 border-pink-400 bg-black/70 p-6 shadow-[0_0_24px_rgba(217,70,239,0.2)]">
        <h1
          className="text-pink-300 text-2xl md:text-3xl uppercase tracking-[0.2em] mb-6"
          style={{ fontFamily: "'Press Start 2P', monospace", lineHeight: 1.4 }}
        >
          Contact Terminal
        </h1>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-pink-200 uppercase tracking-widest text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-2 border-purple-400 bg-[#1a1028] px-4 py-3 text-white outline-none focus:border-pink-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-pink-200 uppercase tracking-widest text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-2 border-purple-400 bg-[#1a1028] px-4 py-3 text-white outline-none focus:border-pink-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-pink-200 uppercase tracking-widest text-sm">
              Subject
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border-2 border-purple-400 bg-[#1a1028] px-4 py-3 text-white outline-none focus:border-pink-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-pink-200 uppercase tracking-widest text-sm">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full border-2 border-purple-400 bg-[#1a1028] px-4 py-3 text-white outline-none focus:border-pink-400"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="border-2 border-pink-400 bg-pink-500/10 px-6 py-3 text-pink-200 uppercase tracking-[0.2em] hover:bg-pink-500/20 disabled:opacity-50"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {status.loading ? "Transmitting..." : "Send Now"}
          </button>
        </form>

        {status.error && (
          <div className="mt-4 border-2 border-red-400 bg-red-500/10 px-4 py-3 text-red-200">
            {status.error}
          </div>
        )}
      </div>

      {status.success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-md border-4 border-pink-400 bg-[#12061d] p-6 shadow-[0_0_30px_rgba(217,70,239,0.35)]">
            <div
              className="text-pink-300 text-lg uppercase tracking-[0.18em] mb-4"
              style={{ fontFamily: "'Press Start 2P', monospace", lineHeight: 1.6 }}
            >
              Transmission Sent
            </div>

            <div className="border-2 border-purple-400 bg-purple-500/10 p-4 text-purple-100 mb-4">
              &gt;&gt; Message delivered successfully.
              <br />
              &gt;&gt; Thank you for reaching out.
            </div>

            <button
              onClick={closePopup}
              className="w-full border-2 border-pink-400 bg-pink-500/10 px-4 py-3 text-pink-200 uppercase tracking-[0.2em] hover:bg-pink-500/20"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}