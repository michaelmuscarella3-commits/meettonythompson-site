import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const BLUEPRINT_PDF =
    "/assets/Mortgage-Broker-Business-Growth-Blueprint-CBCQidX8.pdf",
  BLUEPRINT_URL = BLUEPRINT_PDF;

export function JoinInnerCircle() {
  const e = useNavigate(),
    [t, n] = React.useState(!1);
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(155,38,182,0.15),_transparent_70%)] pointer-events-none" />
      <style>
        {
          "\n                .form-input {\n                    background: rgba(255,255,255,0.03);\n                    border: 1px solid rgba(255,255,255,0.1);\n                    border-radius: 0.75rem;\n                    padding: 0.95rem 1.25rem;\n                    width: 100%;\n                    color: white;\n                    transition: all 0.25s ease;\n                    outline: none;\n                }\n                .form-input::placeholder {\n                    color: rgba(255,255,255,0.3);\n                }\n                .form-input:focus {\n                    border-color: #9b26b6;\n                    background: rgba(255,255,255,0.05);\n                    box-shadow: 0 0 0 1px #9b26b6;\n                }\n                select.form-input option {\n                    background-color: #000;\n                    color: white;\n                }\n            "
        }
      </style>
      <div
        className={
          "w-full max-w-4xl bg-[#0a0a0a] border border-white/10 \r\n                backdrop-blur-xl rounded-3xl shadow-[0_0_60px_rgba(155,38,182,0.2)] overflow-hidden relative z-10"
        }
      >
        <button
          onClick={() => e(-1)}
          className="absolute top-6 left-6 p-2 text-white/40 hover:text-white transition-colors"
        >
          <ArrowLeftIcon size={24} />
        </button>
        <div className="px-8 md:px-12 py-12 border-b border-white/5 text-center bg-gradient-to-b from-white/5 to-transparent">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mx-auto mb-4">
            JOIN THE INNER CIRCLE
          </h1>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            {"Complete the form below to secure your priority position and "}
            <br className="hidden md:block" />
            <span className="text-[#9b26b6] font-semibold">
              instantly download your Free Growth Blueprint.
            </span>
          </p>
        </div>
        <form
          onSubmit={async (t) => {
            (t.preventDefault(), n(!0));
            const r = t.target;
            if ("" !== r.bot_field.value) return void n(!1);
            const i = document.createElement("a");
            ((i.href = BLUEPRINT_URL),
              (i.download = "Mortgage-Broker-Business-Growth-Blueprint.pdf"),
              (i.target = "_blank"),
              (i.rel = "noopener noreferrer"),
              document.body.appendChild(i),
              i.click(),
              document.body.removeChild(i));
            const a = {
              first_name: r.first_name.value.trim(),
              last_name: r.last_name.value.trim(),
              full_name:
                r.first_name.value.trim() + " " + r.last_name.value.trim(),
              email: r.email.value.trim(),
              phone: r.phone.value.trim(),
              company: r.company.value.trim(),
              source: r.source.value.trim(),
              message: r.message.value.trim(),
              form_page: "Inner Circle Application",
            };
            try {
              (await fetch(
                "https://script.google.com/macros/s/AKfycby0sagK38jtnzcxhuiSciGJBVgIU6vj1FFmdUuuy0CtHysKDZbukgyoKcbX23Cb42xz/exec",
                {
                  method: "POST",
                  mode: "no-cors",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(a),
                },
              ),
                setTimeout(() => {
                  e("/inner-circle-success");
                }, 1e3));
            } catch (s) {
              (console.error(s), e("/inner-circle-success"));
            }
          }}
          className="px-8 md:px-12 py-12 space-y-6"
        >
          <input
            type="text"
            name="bot_field"
            style={{
              display: "none",
            }}
          />
          <div>
            <label className="block text-xs font-bold mb-2 tracking-widest uppercase text-white/40">
              Full Name *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="first_name"
                required={!0}
                placeholder="First Name"
                className="form-input"
              />
              <input
                name="last_name"
                required={!0}
                placeholder="Last Name"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold mb-2 tracking-widest uppercase text-white/40">
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              required={!0}
              placeholder="you@example.com"
              className="form-input"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold mb-2 tracking-widest uppercase text-white/40">
                Phone Number
              </label>
              <input
                name="phone"
                placeholder="(+1) 555-0123"
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-2 tracking-widest uppercase text-white/40">
                Company Name *
              </label>
              <input
                name="company"
                required={!0}
                placeholder="Organization"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold mb-2 tracking-widest uppercase text-white/40">
              How did you hear about Tony? *
            </label>
            <select
              name="source"
              required={!0}
              className="form-input cursor-pointer"
            >
              <option value="">Select an option</option>
              <option value="event">Saw Tony at an event</option>
              <option value="referral">Referral</option>
              <option value="social">Social Media</option>
              <option value="nammba">NAMMBA</option>
              <option value="podcast">Podcast</option>
              <option value="web">Web Search</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold mb-2 tracking-widest uppercase text-white/40">
              Your Goals *
            </label>
            <textarea
              name="message"
              required={!0}
              rows={4}
              placeholder="Tell us what you are looking to achieve..."
              className="form-input resize-none"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              disabled={t}
              className="w-full py-5 rounded-xl bg-[#9b26b6] hover:bg-[#b035cc] text-white font-bold tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(155,38,182,0.3)] hover:shadow-[0_0_50px_rgba(155,38,182,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t ? "Processing..." : "Sign Up & Get Playbook"}
            </button>
            <p className="text-center text-white/30 text-[10px] mt-4 uppercase tracking-wide">
              Your download will start automatically upon submission.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default JoinInnerCircle;
