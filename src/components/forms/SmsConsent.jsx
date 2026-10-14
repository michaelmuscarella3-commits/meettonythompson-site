import { sitePath } from "../../utils/sitePath";
import SMS from "../../data/smsConsent.json";

// A2P 10DLC SMS consent. Required next to every form that collects a phone
// number. Carriers require marketing consent to be collected separately from
// other (customer care) consent, so there are two boxes. Both must stay
// optional and unchecked by default, and the wording must match what was
// registered with GoHighLevel (src/data/smsConsent.json).
export const SMS_CONSENT_TEXT = SMS.care;
export const SMS_MARKETING_CONSENT_TEXT = SMS.marketing;

const linkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
  className: "underline hover:text-white",
  style: { color: "#e8b4fe" },
};

// Reads the marketing box from the page, for state-driven forms.
export const marketingConsentChecked = () =>
  !!document.querySelector('input[name="sms_marketing_consent"]:checked');

function Box({ name, text, controlled, checked, onChange }) {
  return (
    <label className="flex items-start gap-4 cursor-pointer text-left">
      <input
        type="checkbox"
        name={name}
        value="yes"
        {...(controlled
          ? { checked, onChange: (e) => onChange(e.target.checked) }
          : {})}
        className="mt-1 shrink-0 cursor-pointer"
        style={{ width: 20, height: 20, accentColor: "#9b26b6" }}
      />
      <span className="text-sm leading-relaxed text-white/70 normal-case tracking-normal font-normal">
        {text}
      </span>
    </label>
  );
}

// Pass `checked` + `onChange` for state-driven forms (customer care box);
// omit them and read `form.sms_consent.checked` on submit for plain forms.
// The marketing box is always read from `sms_marketing_consent`.
export function SmsConsent({ checked, onChange, className = "" }) {
  const controlled = typeof checked === "boolean";
  return (
    <div className={`space-y-4 ${className}`}>
      <Box
        name="sms_consent"
        text={SMS.care}
        controlled={controlled}
        checked={checked}
        onChange={onChange}
      />
      <Box name="sms_marketing_consent" text={SMS.marketing} />
      <p className="text-xs leading-relaxed text-white/50 normal-case tracking-normal font-normal text-left">
        {SMS.footer}{" "}
        <a href={sitePath("/privacy-policy")} {...linkProps}>
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href={sitePath("/terms")} {...linkProps}>
          Terms
        </a>
        .
      </p>
    </div>
  );
}
