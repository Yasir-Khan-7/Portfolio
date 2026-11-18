import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="wrap page-hero" aria-labelledby="nf-title">
      <p className="label">(404)</p>
      <h1 id="nf-title" className="h-display h-xl">
        Nothing shipped
        <br />
        <em className="accent-serif">here yet.</em>
      </h1>
      <p className="lede">That page doesn&rsquo;t exist. The work does.</p>
      <div className="btn-row" style={{ marginTop: 32 }}>
        <Link href="/" className="btn btn--ink">
          Home
        </Link>
        <Link href="/work" className="btn btn--ghost">
          See the work
        </Link>
      </div>
    </section>
  )
}
