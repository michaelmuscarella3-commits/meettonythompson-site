import React from "react";

export function BookTony() {
  const [e, t] = React.useState(!1);
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex items-center justify-center">
      <style>
        {
          "\n                .form-input {\n                    background: rgba(0,0,0,0.3);\n                    border: 1px solid rgba(255,255,255,0.2);\n                    border-radius: 0.75rem;\n                    padding: 0.95rem 1.25rem;\n                    width: 100%;\n                    color: white;\n                    transition: all 0.25s ease;\n                    outline: none;\n                }\n                .form-input::placeholder {\n                    color: rgba(255,255,255,0.4);\n                }\n                .form-input:focus {\n                    border-color: #9b26b6;\n                    box-shadow: 0 0 0 3px rgba(155,38,182,0.4);\n                }\n            "
        }
      </style>
      <div
        className={
          "w-full max-w-5xl bg-black/40 border border-white/10 \r\n                backdrop-blur-xl rounded-3xl shadow-[0_0_80px_rgba(155,38,182,0.35)] overflow-hidden"
        }
      >
        <div className="px-10 py-12 border-b border-white/10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mx-auto">
            Book Tony Thompson
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Complete the form below and Tony’s team will follow up with next
            steps and availability.
          </p>
        </div>
        <form
          onSubmit={async (e) => {
            (e.preventDefault(), t(!0));
            const n = e.target;
            if ("" !== n.bot_field.value) return void t(!1);
            const r = {
              first_name: n.first_name.value.trim(),
              last_name: n.last_name.value.trim(),
              full_name:
                n.first_name.value.trim() + " " + n.last_name.value.trim(),
              email: n.email.value.trim(),
              phone: n.phone.value.trim(),
              company: n.company.value.trim(),
              event_date: n.event_date.value.trim(),
              budget: n.budget.value.trim(),
              source: n.source.value.trim(),
              message: n.message.value.trim(),
              form_page: "Book Tony Form",
            };
            try {
              await fetch(
                "https://script.google.com/macros/s/AKfycby0sagK38jtnzcxhuiSciGJBVgIU6vj1FFmdUuuy0CtHysKDZbukgyoKcbX23Cb42xz/exec",
                {
                  method: "POST",
                  mode: "no-cors",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(r),
                },
              );
              window.location.href = "/tony-thompson-spmn-vital/thank-you";
            } catch (i) {
              (console.error(i),
                alert("Something went wrong. Please try again."));
            }
            t(!1);
          }}
          className="px-10 py-12 space-y-8"
        >
          <input
            type="text"
            name="bot_field"
            style={{
              display: "none",
            }}
          />
          <div>
            <label className="block text-sm mb-3 tracking-wide uppercase text-white/70">
              Name *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
            <label className="block text-sm mb-3 tracking-wide uppercase text-white/70">
              Email *
            </label>
            <input
              name="email"
              type="email"
              required={!0}
              placeholder="you@example.com"
              className="form-input"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm mb-3 tracking-wide uppercase text-white/70">
                Phone
              </label>
              <input
                name="phone"
                placeholder="(+1) 123-456-7890"
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-sm mb-3 tracking-wide uppercase text-white/70">
                Company *
              </label>
              <input
                name="company"
                required={!0}
                placeholder="Organization Name"
                className="form-input"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm mb-3 tracking-wide uppercase text-white/70">
                Event Date *
              </label>
              <input
                type="date"
                name="event_date"
                required={!0}
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-sm mb-3 tracking-wide uppercase text-white/70">
                Budget
              </label>
              <input
                name="budget"
                placeholder="Optional"
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-3 tracking-wide uppercase text-white/70">
              How did you hear about Tony? *
            </label>
            <select name="source" required={!0} className="form-input">
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
            <label className="block text-sm mb-3 tracking-wide uppercase text-white/70">
              Message *
            </label>
            <textarea
              name="message"
              required={!0}
              rows={5}
              placeholder="Tell us more about your event…"
              className="form-input resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={e}
            className={
              "px-12 py-4 rounded-xl bg-gradient-to-br \r\n                            from-[#7d1f97] to-[#952ca8] text-white\r\n                            font-semibold tracking-wider text-lg\r\n                            shadow-[0_15px_40px_rgba(155,38,182,0.5)]\r\n                            hover:scale-[1.02] transition-transform"
            }
          >
            {e ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookTony;
