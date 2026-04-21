import { useScrollReveal, useScrollVars } from "@/hooks/useScrollReveal";
import { useScrollVelocity } from "@/hooks/useMotion";
import SiddhaNav from "@/components/siddha/SiddhaNav";
import TiltCard from "@/components/siddha/TiltCard";
import BotanicalSVG from "@/components/siddha/BotanicalSVG";
import HomeButton from "@/components/siddha/HomeButton";
import CursorGlow from "@/components/siddha/CursorGlow";
import SplitText from "@/components/siddha/SplitText";
import Marquee from "@/components/siddha/Marquee";
import SiddhaLoader from "@/components/siddha/SiddhaLoader";
import gardenImg from "@/assets/siddha-garden.jpg";
import kitchenImg from "@/assets/siddha-kitchen.jpg";
import manuscriptImg from "@/assets/siddha-manuscript.jpg";

const herbs = [
  { name: "Tulsi", sanskrit: "துளசி", note: "The queen of herbs — purifies breath and spirit." },
  { name: "Ashwagandha", sanskrit: "அமுக்கரா", note: "Root of resilience, calm, and quiet strength." },
  { name: "Vetiver", sanskrit: "வெட்டிவேர்", note: "Cooling earth that grounds the wandering mind." },
  { name: "Neem", sanskrit: "வேம்பு", note: "Bitter guardian — clears, heals, protects." },
  { name: "Turmeric", sanskrit: "மஞ்சள்", note: "Golden ember of inner light and renewal." },
  { name: "Brahmi", sanskrit: "பிராமி", note: "Memory's keeper — sharpens attention with grace." },
];

const recipes = [
  {
    title: "Dawn Decoction",
    sub: "Kashayam · 5 min",
    body: "Tulsi, ginger, peppercorn and palm jaggery — a slow sunrise in a cup.",
  },
  {
    title: "Golden Milk",
    sub: "Manjal Paal · 7 min",
    body: "Turmeric simmered with cardamom and warm coconut milk.",
  },
  {
    title: "Cooling Vetiver Water",
    sub: "Vettiver Neer · overnight",
    body: "Roots steeped in earthen pots — a remedy for restless heat.",
  },
];

const timeline = [
  { year: "10,000 BCE", title: "Origins", body: "Whispered from Agastya, the first Siddhar — a science of life as ritual." },
  { year: "300 BCE", title: "Sangam Era", body: "Tamil poets weave herbs, metals and breath into living verse." },
  { year: "10th c.", title: "Codification", body: "Eighteen Siddhars compile palm-leaf manuscripts of medicine and meditation." },
  { year: "Today", title: "Living Practice", body: "Ancient intelligence meets modern hands — gardens, kitchens, clinics." },
];

const Index = () => {
  useScrollVars();
  useScrollReveal();
  useScrollVelocity();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiddhaLoader />
      <CursorGlow />
      <SiddhaNav />
      <HomeButton />

      {/* Ambient morphing background */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 transition-colors duration-700"
        style={{
          background: `
            radial-gradient(circle at calc(20% + var(--hero-parallax)) 10%, hsl(var(--gold) / 0.18), transparent 55%),
            radial-gradient(circle at 80% calc(40% - var(--hero-parallax) * 0.5), hsl(var(--clay) / 0.18), transparent 60%),
            linear-gradient(180deg,
              hsl(var(--parchment)) 0%,
              hsl(43 40% 88%) 40%,
              hsl(var(--herbal) / calc(0.05 + var(--scroll-progress) * 0.6)) 100%
            )
          `,
          filter: `hue-rotate(var(--bg-hue-shift))`,
        }}
      />

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 noise-overlay"
        aria-label="Introduction"
      >
        {/* Hero background image */}
        <div
          aria-hidden
          className="absolute inset-0 -z-[1] overflow-hidden"
          style={{ transform: "translate3d(0, calc(var(--hero-parallax) * 0.15), 0)" }}
        >
          <img
            src={gardenImg}
            alt=""
            width={1536}
            height={1024}
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--parchment) / 0.4) 0%, hsl(var(--parchment) / 0.7) 60%, hsl(var(--parchment)) 100%)",
            }}
          />
        </div>

        {/* Floating ornaments */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ transform: "translate3d(0, calc(var(--hero-parallax) * -0.3), 0)" }}
        >
          <div className="absolute top-[18%] left-[12%] w-40 h-40 rounded-full breathe-slow"
            style={{ background: "radial-gradient(circle, hsl(var(--gold) / 0.35), transparent 70%)" }} />
          <div className="absolute bottom-[14%] right-[10%] w-72 h-72 rounded-full breathe"
            style={{ background: "radial-gradient(circle, hsl(var(--herbal-glow) / 0.35), transparent 70%)" }} />
          <div className="absolute top-[35%] right-[22%] w-24 h-24 rounded-full float-y"
            style={{ background: "radial-gradient(circle, hsl(var(--clay) / 0.4), transparent 70%)" }} />
          {/* Aurora orbs */}
          <div className="aurora-orb absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full opacity-60" />
          <div className="aurora-orb absolute -bottom-32 -right-10 w-[520px] h-[520px] rounded-full opacity-40"
               style={{ animationDirection: "reverse", animationDuration: "26s" }} />
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <p className="reveal text-xs tracking-[0.4em] uppercase text-accent mb-6 font-medium">
            ◈ Siddha · Living Intelligence ◈
          </p>
          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-primary">
            <SplitText as="span" className="block">Ancient roots,</SplitText>
            <SplitText as="span" className="block italic text-gradient-gold" delay={0.25}>
              breathing interface.
            </SplitText>
          </h1>
          <p className="reveal mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2">
            A field guide to the Tamil science of life — where herbs, breath, and
            time converge into a quiet intelligence older than memory.
          </p>
          <div className="reveal mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#biodiversity"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--herbal)/0.6)]"
              style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              Begin the journey
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">↓</span>
            </a>
            <a href="#community" className="gold-underline px-6 py-4 rounded-full border border-border text-foreground/80 hover:bg-card transition-colors">
              Read the lineage
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-[0.3em] uppercase text-muted-foreground">
          <span>Scroll</span>
          <span className="block w-px h-12 bg-foreground/30 breathe" />
        </div>
      </section>

      {/* BIODIVERSITY */}
      <section
        id="biodiversity"
        className="relative min-h-screen px-4 sm:px-6 py-20 sm:py-32"
        aria-label="Biodiversity"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 reveal-stagger">
            <p className="text-xs tracking-[0.4em] uppercase text-accent mb-4">01 · Biodiversity</p>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-7xl text-primary leading-[1]">
              A garden that
              <br />
              <span className="italic text-gradient-gold">remembers</span> you.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
              Eighteen siddhars catalogued thousands of plants — each one a sentence
              in the body's quiet language. We carry that vocabulary forward.
            </p>
          </div>

          <div className="lg:col-span-3 hidden lg:block">
            <BotanicalSVG className="h-[520px] w-full" />
          </div>

          <div className="lg:col-span-4 grid gap-4 reveal-stagger">
            <TiltCard className="rounded-2xl overflow-hidden relative h-56">
              <img
                src={gardenImg}
                alt="Siddha herbal garden at golden hour"
                width={1536}
                height={1024}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, hsl(var(--herbal-deep) / 0.85) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(var(--gold-soft))" }}>
                  Living archive
                </p>
                <p className="font-serif-display text-xl mt-1" style={{ color: "hsl(var(--parchment))" }}>
                  Six thousand species, one breath.
                </p>
              </div>
            </TiltCard>
            {herbs.slice(0, 3).map((h) => (
              <TiltCard key={h.name} className="glass rounded-2xl p-5 sm:p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif-display text-xl sm:text-2xl text-primary">{h.name}</h3>
                  <span className="text-xs sm:text-sm text-accent">{h.sanskrit}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{h.note}</p>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Floating extras */}
        <div className="max-w-7xl mx-auto mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal-stagger">
          {herbs.slice(3).map((h) => (
            <TiltCard key={h.name} className="glass rounded-2xl p-5 sm:p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif-display text-xl sm:text-2xl text-primary">{h.name}</h3>
                <span className="text-xs sm:text-sm text-accent">{h.sanskrit}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{h.note}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* MARQUEE BREAK */}
      <section aria-hidden className="relative py-12 overflow-hidden">
        <div className="velocity-skew">
          <Marquee
            items={[
              "Tulsi",
              "Ashwagandha",
              "Vetiver",
              "Neem",
              "Turmeric",
              "Brahmi",
              "Cardamom",
              "Sandalwood",
            ]}
          />
        </div>
      </section>

      <section
        id="nutrition"
        className="relative min-h-screen px-4 sm:px-6 py-20 sm:py-32"
        aria-label="Nutrition"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, hsl(var(--herbal-glow) / 0.45), transparent 60%), linear-gradient(180deg, transparent, hsl(var(--herbal) / 0.85) 40%, hsl(var(--herbal-deep)) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto reveal-stagger">
            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--gold-soft))" }}>
              02 · Nutrition
            </p>
            <h2 className="font-serif-display text-4xl sm:text-5xl md:text-7xl leading-[1]" style={{ color: "hsl(var(--parchment))" }}>
              Food as <span className="italic text-gradient-gold">slow medicine</span>.
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: "hsl(var(--parchment) / 0.75)" }}>
              In the Siddha kitchen, every spice is a verse and every meal a quiet
              conversation between the body and the seasons.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 reveal">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] glass-dark">
              <img
                src={kitchenImg}
                alt="Brass vessels with golden turmeric milk in a Siddha kitchen"
                width={1536}
                height={1024}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(var(--herbal-deep) / 0.85) 0%, transparent 60%)",
                }}
              />
              <div className="absolute inset-0 p-6 sm:p-10 lg:p-14 flex flex-col justify-end max-w-xl">
                <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "hsl(var(--gold-soft))" }}>
                  Manjal Paal
                </p>
                <p className="font-serif-display text-2xl sm:text-3xl lg:text-4xl italic" style={{ color: "hsl(var(--parchment))" }}>
                  "A spoonful of sun, simmered into milk."
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 reveal-stagger">
            {recipes.map((r) => (
              <TiltCard key={r.title} className="glass-dark rounded-3xl p-6 sm:p-8 min-h-[280px] sm:min-h-[320px] flex flex-col justify-between">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "hsl(var(--gold-soft))" }}>
                    {r.sub}
                  </p>
                  <h3 className="font-serif-display text-2xl sm:text-3xl" style={{ color: "hsl(var(--parchment))" }}>
                    {r.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mt-6 sm:mt-8" style={{ color: "hsl(var(--parchment) / 0.75)" }}>
                  {r.body}
                </p>
                <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs tracking-[0.2em] uppercase" style={{ color: "hsl(var(--gold-soft))" }}>
                  <span>Brew the recipe</span>
                  <span>→</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY / TIMELINE */}
      <section
        id="community"
        className="relative min-h-screen px-4 sm:px-6 py-20 sm:py-32"
        aria-label="Community"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--herbal-deep)) 0%, hsl(var(--herbal)) 50%, hsl(43 40% 88%) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 max-w-3xl reveal-stagger">
              <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "hsl(var(--gold-soft))" }}>
                03 · Community
              </p>
              <h2 className="font-serif-display text-4xl sm:text-5xl md:text-7xl leading-[1]" style={{ color: "hsl(var(--parchment))" }}>
                A lineage that <span className="italic text-gradient-gold">listens</span>.
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: "hsl(var(--parchment) / 0.75)" }}>
                Twelve thousand years of practice, carried hand to hand. Scroll the
                timeline of Siddha — from cosmic origin to the kitchens of today.
              </p>
            </div>

            <div className="lg:col-span-5 reveal">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glass-dark">
                <img
                  src={manuscriptImg}
                  alt="Ancient Tamil palm-leaf manuscript with Siddha inscriptions"
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, hsl(var(--herbal-deep) / 0.7) 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Vertical timeline */}
          <ol className="relative mt-12 sm:mt-20 pl-6 sm:pl-8 md:pl-16 reveal-stagger">
            <span
              aria-hidden
              className="absolute left-2 md:left-6 top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--gold) / 0), hsl(var(--gold) / 0.6), hsl(var(--gold) / 0))",
              }}
            />
            {timeline.map((t, i) => (
              <li key={t.year} className="relative pb-12 sm:pb-16 last:pb-0 group">
                <span
                  aria-hidden
                  className="absolute -left-6 md:-left-10 top-2 w-4 h-4 rounded-full breathe"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(var(--gold)) 0%, hsl(var(--clay)) 100%)",
                    boxShadow: "0 0 24px hsl(var(--gold) / 0.6)",
                  }}
                />
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-3">
                    <p className="font-serif-display text-2xl sm:text-3xl md:text-4xl text-gradient-gold">
                      {t.year}
                    </p>
                  </div>
                  <div className="md:col-span-9 glass-dark rounded-2xl p-5 sm:p-6 transition-transform duration-700 group-hover:translate-x-2"
                       style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}>
                    <h3 className="font-serif-display text-2xl mb-2" style={{ color: "hsl(var(--parchment))" }}>
                      {t.title} <span className="text-xs tracking-[0.3em] ml-3 uppercase opacity-60">0{i + 1}</span>
                    </h3>
                    <p className="leading-relaxed" style={{ color: "hsl(var(--parchment) / 0.78)" }}>
                      {t.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative px-4 sm:px-6 py-12 sm:py-16 text-center">
        <div className="reveal">
          <p className="font-serif-display text-2xl sm:text-3xl text-primary italic px-4">
            "The body is the temple — the herb, its quiet bell."
          </p>
          <p className="mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">
            ◈ Siddha · An immersive field guide ◈
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
