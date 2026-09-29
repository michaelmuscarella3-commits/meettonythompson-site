import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl md:text-9xl font-black tracking-tighter">404</h1>
      <p className="mt-6 text-gray-400">This page doesn&apos;t exist.</p>
      <Link
        to="/"
        className="mt-10 px-8 py-4 rounded-full bg-[#9b26b6] font-bold tracking-widest uppercase text-sm"
      >
        Back home
      </Link>
    </div>
  );
}
