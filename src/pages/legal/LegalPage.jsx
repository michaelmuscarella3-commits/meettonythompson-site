// Shared shell for the legal pages. The original page text lives in separate
// build chunks (PrivacyPolicy-*.js, Terms-*.js, ...) that still need to be
// pulled from the live server; until then each page shows a placeholder.
export function LegalPage({ title, children }) {
  return (
    <div className="min-h-screen bg-black text-white px-6 pt-40 pb-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-10">
          {title}
        </h1>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          {children ?? (
            <p>
              This page is being migrated. For questions, contact{" "}
              <a className="text-[#e8b4fe] underline" href="mailto:info@meettonythompson.com">
                info@meettonythompson.com
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
