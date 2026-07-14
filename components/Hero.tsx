import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-white relative">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-14 md:py-20 lg:py-24">
        {/* Left content */}
        <div className="flex flex-col gap-5">
          {/* Gold label */}
          <span className="inline-block w-fit rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-gold">
            25+ Years of Experience
          </span>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-heading">
            Reliable Freight Forwarding & Cargo Booking Solutions
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-body max-w-lg">
            Allied Shipping Agency is a trusted freight forwarding and cargo
            booking partner based in Lahore, Pakistan. With 25+ years of
            experience, we specialise in sea(LCL, FCL) and air freight globally.
          </p>
        </div>

        {/* Right image placeholder */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy-secondary to-navy-primary shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <svg
                className="mx-auto mb-4 h-20 w-20 text-white/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 4.5a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V4.5Z"
                  strokeWidth={0.75}
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 9.75h2.25M7.5 12.75h2.25M7.5 15.75h2.25M12 9.75h2.25M12 12.75h2.25M12 15.75h2.25"
                  strokeWidth={0.5}
                />
              </svg>
              <p className="text-sm text-white/40 font-medium tracking-wider uppercase">
                Container Shipping
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}