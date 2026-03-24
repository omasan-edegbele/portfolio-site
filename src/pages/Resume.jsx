export default function Resume() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-white">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-pixel text-3xl">RESUME</h1>
          <p className="mt-3 text-white/80 text-sm">
            View in browser or download the PDF.
          </p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="inline-flex bg-white px-5 py-2 font-pixel text-xs text-black hover:bg-white/90"
          style={{ borderRadius: 0 }}
        >
          DOWNLOAD PDF
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-white/15 bg-black/20">
        <iframe
          title="Resume PDF"
          src="/resume.pdf"
          className="h-[80vh] w-full"
        />
      </div>

      <p className="mt-4 text-xs text-white/60">
        If the PDF viewer doesn’t load in your browser, use the download button above.
      </p>
    </section>
  );
}