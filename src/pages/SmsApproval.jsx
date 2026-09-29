import { InfoIcon, MailIcon, PhoneIcon, ShieldCheckIcon } from "lucide-react";
import React from "react";

export function SmsApproval() {
  return (
    React.useEffect(() => {
      const e = document.createElement("meta");
      ((e.name = "robots"),
        (e.content = "noindex, nofollow"),
        document.head.appendChild(e));
      const t = document.title;
      return (
        (document.title = "SMS Compliance Verification | Tony Thompson"),
        () => {
          (document.head.removeChild(e), (document.title = t));
        }
      );
    }, []),
    (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-10 md:p-16 border border-gray-100 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mb-8">
            <ShieldCheckIcon className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
            SMS Compliance & Verification
          </h1>
          <div className="h-1 w-20 bg-purple-600 rounded-full mb-8" />
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Tony Thompson is fully compliant with A2P 10DLC regulations and U.S.
            mobile carrier requirements for SMS messaging.
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 w-full text-left mb-8 border border-gray-100">
            <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
              Official Consent Language
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed italic">
              "By providing your phone number, you agree to receive recurring
              automated promotional and personalized marketing text messages
              (e.g. coaching tips, event reminders, program updates) from Tony
              Thompson at the cell number used when signing up. Consent is not a
              condition of any purchase. Reply HELP for help and STOP to cancel.
              Msg frequency varies. Msg & data rates may apply."
            </p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 w-full flex items-start gap-4 text-left mb-8">
            <div className="mt-1 shrink-0">
              <InfoIcon className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-purple-900 text-sm leading-relaxed">
              No mobile information will be shared with third parties/affiliates
              for marketing/promotional purposes. Information sharing to
              subcontractors in support services, such as customer service is
              permitted. All other use case categories exclude text messaging
              originator opt-in data and consent; this information will not be
              shared with any third parties.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 w-full text-left mb-8 border border-gray-100">
            <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3">
              Opt-Out & Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">STOP</span>
                {" — Reply STOP to any message to unsubscribe immediately."}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">HELP</span>
                {" — Reply HELP for support information."}
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold mb-10">
            <a
              href="/privacy-policy"
              className="text-purple-600 underline hover:text-purple-800 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/terms"
              className="text-purple-600 underline hover:text-purple-800 transition-colors"
            >
              Terms & Conditions
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="/cookie-policy"
              className="text-purple-600 underline hover:text-purple-800 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
          <div className="flex flex-col items-center gap-3 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <MailIcon size={15} />
              <a
                href="mailto:info@tonythompson.com"
                className="hover:text-purple-600 transition-colors"
              >
                info@tonythompson.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon size={15} />
              <span>+1 (980) 722-8079</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 text-center w-full">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-[0.2em]">
            © 2026 Tony Thompson | SMS Compliance Node
          </p>
        </div>
      </div>
    )
  );
}

export default SmsApproval;
