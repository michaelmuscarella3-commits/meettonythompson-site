import { MailIcon, PhoneIcon, UserIcon } from "lucide-react";

export const STEP4_IMG = "/assets/step4-CzcGnpsF.jpg",
  QUESTIONS = [
    {
      id: 1,
      title: "Business Development",
      label: "Strategic Expansion",
      options: [
        "I want to build predictable systems for attracting high-value clients.",
        "I need strategies to scale partnerships and close more deals.",
        "I want to strengthen leadership and team accountability.",
        "I’m ready to turn my network into revenue.",
      ],
      image: "/assets/step1-fap1hG8n.jpg",
    },
    {
      id: 2,
      title: "Marketing",
      label: "Authority Positioning",
      options: [
        "I need a marketing engine that brings in qualified leads daily.",
        "I want to clarify my message and dominate my niche.",
        "I’m ready to automate and scale my marketing.",
        "I want to boost visibility and become the go-to authority.",
      ],
      image: "/assets/step2-DiRG9daE.jpg",
    },
    {
      id: 3,
      title: "Profitability",
      label: "Fiscal Optimization",
      options: [
        "I want to increase revenue without burning out my team.",
        "I need frameworks to cut waste and improve margins.",
        "I’m ready to turn one-time sales into recurring income.",
        "I want to make every dollar I spend return 3x.",
      ],
      image: "/assets/step3-DN_HlfXM.jpg",
    },
    {
      id: 4,
      title: "Recruiting",
      label: "Team Architecture",
      options: [
        "I want to attract top performers who stay and grow.",
        "I need systems to streamline hiring and onboarding.",
        "I’m ready to build a culture that drives retention and performance.",
        "I want my team aligned, motivated, and delivering results fast.",
      ],
      image: STEP4_IMG,
    },
    {
      id: 5,
      title: "Your Tailored Level-Up Plan",
      isFinal: !0,
      image: STEP4_IMG,
    },
  ],
  RESULTS = [
    {
      label: "Full Name",
      key: "name",
      type: "text",
      icon: UserIcon,
    },
    {
      label: "Email Address",
      key: "email",
      type: "email",
      icon: MailIcon,
    },
    {
      label: "Phone Number",
      key: "phone",
      type: "tel",
      icon: PhoneIcon,
    },
  ],
  StretchText = ({ text: e, className: t, color: n = "text-white" }) => (
    <span
      className={`block font-black uppercase leading-[0.9] tracking-tighter whitespace-normal ${n} ${t}`}
      style={{
        fontFamily: "'Inter', sans-serif",
        transform: "scaleY(1.1)",
        transformOrigin: "left bottom",
      }}
    >
      {e}
    </span>
  );
