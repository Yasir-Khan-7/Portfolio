import { Laptop, Phone } from './Devices'

/*
 * Device scenes. Every position is a percentage of the stage and every size is
 * in cqw, so a scene scales as one picture from a 360px phone to 1920px.
 * Decorative shapes are aria-hidden; screenshots carry alt text.
 */

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8.5l3.2 3L13 4.5" />
    </svg>
  )
}

function Star({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0c.6 5.2 4.8 9.4 10 10-5.2.6-9.4 4.8-10 10-.6-5.2-4.8-9.4-10-10C5.2 9.4 9.4 5.2 10 0z" />
    </svg>
  )
}

/* ---------------- 01 Otenga ---------------- */
export function OtengaScene() {
  return (
    <>
      <div className="ot-sun" aria-hidden="true" />
      <svg className="ot-route" aria-hidden="true" viewBox="0 0 700 110" preserveAspectRatio="none">
        <circle cx="14" cy="78" r="8" fill="#1F2328" />
        <path className="ot-route__path" d="M14 78 C 160 20, 300 4, 430 24 S 640 60, 690 100" fill="none" stroke="#1F2328" strokeWidth="3" strokeLinecap="round" strokeDasharray="0.5 12" />
      </svg>
      <p className="scene-pill ot-pill">
        <Check /> M-Pesa, Airtel Money or card
      </p>
      <Laptop className="ot-laptop float" src="/images/clients/otenga-desktop.webp" alt="Otenga homepage on desktop: send a parcel or book a bus ticket, with parcel tracking below." />
      <Phone className="ot-phone float float--b" src="/images/clients/otenga-mobile.webp" alt="Otenga homepage on a phone." />
      <div className="ot-track" aria-hidden="true">
        <div className="ot-track__top">
          <span className="ot-track__id">OT7K4P2X9Q</span>
          <span className="ot-track__state">
            <i /> In transit
          </span>
        </div>
        <div className="ot-track__bar">
          <span />
        </div>
        <div className="ot-track__stops">
          <span>Nairobi</span>
          <span>Westlands hub</span>
          <span>Delivered</span>
        </div>
      </div>
    </>
  )
}

/* ---------------- 02 Dr. Madikha Khan ---------------- */
export function MadikhaScene() {
  return (
    <>
      <div className="mk-panel" aria-hidden="true">
        <span className="mk-ring mk-ring--1" />
        <span className="mk-ring mk-ring--2" />
      </div>
      <Laptop className="mk-laptop float" src="/images/clients/madikha-desktop.webp" alt="Dr. Madikha Khan's website on desktop: “A space to be heard. A journey toward well-being.”" />
      <Phone className="mk-phone float float--b" src="/images/clients/madikha-mobile.webp" alt="Dr. Madikha Khan's website on a phone." />
      <p className="scene-pill mk-pill mk-pill--1" aria-hidden="true">
        Anxiety &amp; stress
      </p>
      <p className="scene-pill mk-pill mk-pill--2" aria-hidden="true">
        Maternal mental health
      </p>
      <p className="scene-pill mk-pill mk-pill--3" aria-hidden="true">
        Trauma &amp; grief
      </p>
    </>
  )
}

/* ---------------- 03 Bebé Noura ---------------- */
export function BebeNouraScene() {
  return (
    <>
      <div className="bn-arch-fill" aria-hidden="true" />
      <svg className="bn-arch" aria-hidden="true" viewBox="0 0 400 600" preserveAspectRatio="none">
        <path pathLength={1} d="M2 600 V 200 A 198 198 0 0 1 398 200 V 600" fill="none" stroke="#DDC49A" strokeOpacity="0.55" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <Star className="bn-star bn-star--1" />
      <Star className="bn-star bn-star--2" />
      <Star className="bn-star bn-star--3" />
      <p className="scene-pill bn-pill bn-pill--rank" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="7" cy="7" r="4.5" />
          <path d="M10.5 10.5L14 14" />
        </svg>
        Ranked on Google search
      </p>
      <Laptop className="bn-laptop float" src="/images/clients/bebenoura-desktop.webp" alt="Bebé Noura storefront on desktop: “Little Beginnings, Beautifully Loved.” beside a forest gift box." />
      <Phone className="bn-phone float float--b" src="/images/clients/bebenoura-mobile.webp" alt="Bebé Noura storefront on a phone." />
      <p className="scene-pill bn-pill bn-pill--flow" aria-hidden="true">
        Design <span>→</span> Build <span>→</span> SEO
      </p>
    </>
  )
}

/* ---------------- 04 Orbit Digital ---------------- */
export function OrbitScene() {
  return (
    <>
      <div className="or-orbits" aria-hidden="true">
        <span className="or-ring or-ring--1">
          <i />
        </span>
        <span className="or-ring or-ring--2">
          <i />
        </span>
        <span className="or-ring or-ring--3">
          <i />
        </span>
      </div>
      <p className="scene-pill or-pill or-pill--uk" aria-hidden="true">
        UK-registered agency
      </p>
      <Laptop className="or-laptop float" src="/images/clients/orbit-desktop.webp" alt="Orbit Digital website on desktop: “Software, Ecommerce and marketing that compounds.”" />
      <Phone className="or-phone float float--b" src="/images/clients/orbit-mobile.webp" alt="Orbit Digital website on a phone." />
      <p className="scene-pill or-pill or-pill--aws" aria-hidden="true">
        <i /> Hosted on AWS
      </p>
    </>
  )
}

/* ---------------- 05 Pak Sadat ----------------
 * PRIVATE CLIENT SYSTEM. Everything below is an HTML mock-up with invented
 * demo data. No screenshots, no real names, no real voucher numbers.
 */
const DEMO_ROWS = [
  { no: 'PS-000128', date: '12 Mar', pkg: 'Umrah package', pax: 4, status: 'Draft', bar: 62 },
  { no: 'PS-000127', date: '11 Mar', pkg: 'Umrah package', pax: 2, status: 'Approved', bar: 48 },
  { no: 'PS-000126', date: '09 Mar', pkg: 'Umrah package', pax: 6, status: 'Approved', bar: 72 },
  { no: 'PS-000125', date: '08 Mar', pkg: 'Umrah package', pax: 1, status: 'Approved', bar: 40 },
]

export function PakSadatScene() {
  return (
    <>
      <div className="ps-glow" aria-hidden="true" />
      <svg className="ps-route" aria-hidden="true" viewBox="0 0 700 140" preserveAspectRatio="none">
        <path id="ps-route-path" d="M10 130 C 140 40, 300 10, 450 18 S 640 60, 692 96" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="1.6" strokeDasharray="6 7" />
        <g className="ps-plane ps-plane--moving">
          <path d="M-9 -6 L 10 0 L -9 6 L -5 0 Z" fill="#fff" />
          <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
            <mpath href="#ps-route-path" />
          </animateMotion>
        </g>
        <path className="ps-plane ps-plane--static" d="M672 82 L 692 96 L 670 96 L 676 90 Z" fill="#fff" />
      </svg>

      <p className="scene-pill ps-pill ps-pill--demo">
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="7" width="10" height="7" rx="1.5" />
          <path d="M5.5 7V5a2.5 2.5 0 015 0v2" />
        </svg>
        Demo data shown, no client records
      </p>

      <Laptop className="ps-laptop float">
        <div className="ps-app" role="img" aria-label="Mock-up of the voucher dashboard with demo data: totals, a search bar and four recent vouchers.">
          <div className="ps-app__nav" aria-hidden="true">
            <i className="ps-app__logo" />
            <b>Pak Sadat</b>
            <span className="is-active">Dashboard</span>
            <span>Vouchers</span>
            <span>Packages</span>
            <i className="ps-app__avatar" />
          </div>
          <div className="ps-app__body" aria-hidden="true">
            <p className="ps-app__h">Welcome back</p>
            <p className="ps-app__sub">Here is where things stand today.</p>
            <div className="ps-app__search">
              <span>Voucher no., package no., group code</span>
              <b>Search</b>
            </div>
            <div className="ps-app__stats">
              <div>
                <b>128</b>
                <span>Total vouchers</span>
              </div>
              <div>
                <b>12</b>
                <span>Total packages</span>
              </div>
              <div>
                <b className="amber">3</b>
                <span>Drafts awaiting approval</span>
              </div>
              <div>
                <b>24</b>
                <span>Issued this month</span>
              </div>
            </div>
            <div className="ps-app__table">
              <div className="ps-app__thead">
                <span>Recent vouchers</span>
                <span className="ps-app__link">View all →</span>
              </div>
              {DEMO_ROWS.map((r, i) => (
                <div className="ps-app__row" key={r.no} style={{ ['--r' as string]: i }}>
                  <span className="ps-app__no">{r.no}</span>
                  <span>{r.date}</span>
                  <span className="ps-app__bar" style={{ width: `${r.bar}%` }} />
                  <span className="ps-app__pkg">{r.pkg}</span>
                  <span>{r.pax}</span>
                  <span className={`ps-app__status ps-app__status--${r.status.toLowerCase()}`}>{r.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Laptop>

      <div className="ps-voucher float float--b" role="img" aria-label="Mock-up of a hotel voucher with placeholder lines, stamped Approved.">
        <div aria-hidden="true">
          <i className="ps-voucher__logo" />
          <p className="ps-voucher__title">Hotel Voucher</p>
          <p className="ps-voucher__no">PS-000000</p>
          <div className="ps-voucher__box">
            <p>Mutamers</p>
            <span style={{ width: '82%' }} />
            <span style={{ width: '58%' }} />
          </div>
          <div className="ps-voucher__box">
            <p>Accommodation</p>
            <span style={{ width: '76%' }} />
            <span style={{ width: '64%' }} />
          </div>
          <div className="ps-voucher__split">
            <div className="ps-voucher__box ps-voucher__box--left">
              <p>Departure</p>
              <span style={{ width: '80%' }} />
              <p>Arrival</p>
              <span style={{ width: '70%' }} />
            </div>
            <div className="ps-voucher__qr" />
          </div>
          <p className="ps-voucher__stamp">Approved</p>
        </div>
      </div>

      <p className="scene-pill ps-pill ps-pill--flow" aria-hidden="true">
        <span className="amber">Draft</span> → <span className="green">Approved</span> → PDF
      </p>
    </>
  )
}
