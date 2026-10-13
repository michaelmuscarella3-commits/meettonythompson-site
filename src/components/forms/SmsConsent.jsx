import { sitePath } from "../../utils/sitePath";

// A2P 10DLC SMS consent. Required next to every form that collects a phone
// number. It must stay optional and unchecked by default, and the wording must
// match what was registered with GoHighLevel.
export const SMS_CONSENT_TEXT =
  "By checking this box, I agree to receive SMS text messages from Meet Tony Thompson, including appointment reminders, customer support updates, and promotional offers. Message frequency varies. Msg & data rates may apply. Reply STOP to unsubscribe or HELP for assistance. View our";

const linkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
  className: "underline hover:text-white",
  style: { color: "#e8b4fe" },
};

// Pass `checked` + `onChange` for state-driven forms; omit them and read
// `form.sms_consent.checked` on submit for plain forms.
export function SmsConsent({ checked, onChange, className = "" }) {
  const controlled = typeof checked === "boolean";
  return (
    <label
      className={`flex items-start gap-4 cursor-pointer text-left ${className}`}
    >
      <input
        type="checkbox"
        name="sms_consent"
        value="yes"
        {...(controlled
          ? { checked, onChange: (e) => onChange(e.target.checked) }
          : {})}
        className="mt-1 shrink-0 cursor-pointer"
        style={{ width: 20, height: 20, accentColor: "#9b26b6" }}
      />
      <span className="text-sm leading-relaxed text-white/70 normal-case tracking-normal font-normal">
        {SMS_CONSENT_TEXT}{" "}
        <a href={sitePath("/privacy-policy")} {...linkProps}>
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href={sitePath("/terms")} {...linkProps}>
          Terms
        </a>
        .
      </span>
    </label>
  );
}
