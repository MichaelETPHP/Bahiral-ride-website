import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { MapPin, Star, Building2, Clock, Car, CheckCircle2, Zap, Wallet, Map, ShieldCheck, Phone, Heart, Download, X, Menu } from "lucide-react";
function StoreBadges({ className = "" }) {
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col sm:flex-row gap-3 ${className}`, children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://play.google.com/store/apps/details?id=com.bahirdar.rider",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex items-center gap-3 h-[54px] px-5 rounded-2xl bg-white/5 border border-white/12 hover:border-brand/60 hover:bg-brand/5 transition-all duration-200 hover:scale-[1.03]",
        children: [
          /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 shrink-0", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx("path", { fill: "#00C170", d: "M3.6 1.7a2 2 0 0 0-1 1.74v17.12c0 .73.38 1.36.97 1.72L13.4 12 3.6 1.7Z" }),
            /* @__PURE__ */ jsx("path", { fill: "#fff", d: "m15.2 10.2 2.95-1.7L5.8 1.36c-.5-.29-1.06-.31-1.55-.1L15.2 10.2Z" }),
            /* @__PURE__ */ jsx("path", { fill: "#fff", d: "m15.2 13.8-10.95 8.94c.49.2 1.05.19 1.55-.1l12.35-7.14-2.95-1.7Z" }),
            /* @__PURE__ */ jsx("path", { fill: "#00674F", d: "m20.4 9.3-2.25 1.3L15.2 12l2.95 1.4 2.25 1.3c.93-.54.93-1.96 0-2.5l-.99-.55.99-.55c.93-.54.93-1.96 0-2.5Z" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-left leading-tight", children: [
            /* @__PURE__ */ jsx("div", { className: "font-body text-[10px] text-white/50 group-hover:text-white/70 transition-colors", children: "GET IT ON" }),
            /* @__PURE__ */ jsx("div", { className: "font-display text-[15px] font-semibold text-white", children: "Google Play" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "#",
        className: "group flex items-center gap-3 h-[54px] px-5 rounded-2xl bg-white/5 border border-white/12 hover:border-brand/60 hover:bg-brand/5 transition-all duration-200 hover:scale-[1.03]",
        children: [
          /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "w-7 h-7 shrink-0", fill: "#fff", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M17.5 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.7 2.4 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.1.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.4-2.8-.1 0-2.7-1-2.7-3.8ZM15.3 5.8c.6-.8 1.1-1.9 1-3-1 0-2.2.6-2.9 1.5-.6.7-1.2 1.9-1 2.9 1.1.1 2.2-.6 2.9-1.4Z" }) }),
          /* @__PURE__ */ jsxs("div", { className: "text-left leading-tight", children: [
            /* @__PURE__ */ jsx("div", { className: "font-body text-[10px] text-white/50 group-hover:text-white/70 transition-colors", children: "DOWNLOAD ON THE" }),
            /* @__PURE__ */ jsx("div", { className: "font-display text-[15px] font-semibold text-white", children: "App Store" })
          ] })
        ]
      }
    )
  ] });
}
const phoneImg = "/assets/phone-mockup-D0hhtDyY.png";
function PhoneMockup() {
  return /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-[280px] sm:w-[340px] lg:w-[400px] animate-float", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -inset-12 rounded-full bg-brand/20 blur-[80px] animate-glow-pulse" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-[48px] border border-brand/15 blur-sm" }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: phoneImg,
        alt: "Bahiran Ride mobile app",
        className: "relative w-full h-auto drop-shadow-2xl",
        style: { filter: "drop-shadow(0 32px 64px rgba(0,193,112,0.18))" }
      }
    )
  ] });
}
const logo = "/assets/logo-BufApq_P.png";
const steps = [{
  Icon: MapPin,
  title: "Set Your Location",
  desc: "Open the app, allow location access and enter your destination."
}, {
  Icon: Car,
  title: "Get Matched",
  desc: "Our system instantly finds the nearest available driver for you."
}, {
  Icon: CheckCircle2,
  title: "Enjoy Your Ride",
  desc: "Track your driver in real time and pay directly — simple and safe."
}];
const features = [{
  Icon: Zap,
  title: "Instant Matching",
  desc: "Get matched with nearby drivers in seconds. No waiting, no uncertainty about your ride.",
  span: "col-span-12 sm:col-span-6 lg:col-span-4"
}, {
  Icon: Wallet,
  title: "Upfront Pricing",
  desc: "Know your exact fare before you confirm the ride. No surprises.",
  span: "col-span-12 sm:col-span-6 lg:col-span-4"
}, {
  Icon: Map,
  title: "Live Tracking",
  desc: "Track your driver's exact position in real time on the map.",
  span: "col-span-12 sm:col-span-4 lg:col-span-4"
}, {
  Icon: Car,
  title: "Multiple Categories",
  desc: "Economy, Standard, Classic, Bajaj and Premium — pick what fits.",
  span: "col-span-12 sm:col-span-4 lg:col-span-4"
}, {
  Icon: ShieldCheck,
  title: "Safe & Verified",
  desc: "Every driver is background-checked and licensed.",
  span: "col-span-12 sm:col-span-4 lg:col-span-4"
}, {
  Icon: Phone,
  title: "Local Support",
  desc: "Our Ethiopian support team is reachable at 9040. We speak your language and understand your needs.",
  span: "col-span-12",
  wide: true
}];
const vehicles = [{
  name: "Economy",
  desc: "Most affordable option",
  price: "ETB 30",
  tag: "Budget"
}, {
  name: "Standard",
  desc: "Comfortable everyday rides",
  price: "ETB 40",
  tag: "Popular"
}, {
  name: "Classic",
  desc: "Balanced comfort and style",
  price: "ETB 45",
  tag: "Comfort"
}, {
  name: "Bajaj",
  desc: "Quick trips around the city",
  price: "ETB 20",
  tag: "Express"
}, {
  name: "Premium",
  desc: "Luxury experience",
  price: "ETB 80",
  tag: "Luxury"
}];
const testimonials = [{
  text: "Fastest ride service in Bahir Dar",
  rating: 5,
  name: "Yonas T."
}, {
  text: "Driver arrived in under 2 minutes",
  rating: 5,
  name: "Hana M."
}, {
  text: "ETB pricing is transparent and fair",
  rating: 5,
  name: "Dawit K."
}, {
  text: "Best ride app in Addis Ababa",
  rating: 5,
  name: "Selam A."
}, {
  text: "Professional drivers, every time",
  rating: 5,
  name: "Biruk G."
}, {
  text: "Love the upfront pricing feature",
  rating: 5,
  name: "Tigist B."
}];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#features",
    label: "Features"
  }, {
    href: "#vehicles",
    label: "Vehicles"
  }, {
    href: "#download",
    label: "Download"
  }];
  return /* @__PURE__ */ jsx("header", { className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "pt-2 pb-1" : "pt-4 pb-0"}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("nav", { className: `flex items-center justify-between h-14 px-5 rounded-2xl transition-all duration-300 ${scrolled ? "bg-[#0c1410]/90 backdrop-blur-xl border border-brand/20 shadow-2xl shadow-black/40" : "bg-transparent"}`, children: [
      /* @__PURE__ */ jsxs("a", { href: "#home", className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsx("img", { src: logo, alt: "Bahiran Ride", className: "w-8 h-8 rounded-xl object-cover" }),
        /* @__PURE__ */ jsx("span", { className: "font-display text-[17px] font-bold text-brand tracking-tight", children: "Bahiran Ride" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, className: "font-body text-sm text-white/60 hover:text-white px-3.5 py-2 rounded-xl hover:bg-white/5 transition-all duration-200", children: l.label }, l.href)) }),
      /* @__PURE__ */ jsxs("a", { href: "#download", className: "hidden md:flex items-center gap-1.5 bg-brand text-black text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-brand/90 hover:scale-105 transition-all duration-200", children: [
        /* @__PURE__ */ jsx(Download, { size: 14 }),
        " Get the App"
      ] }),
      /* @__PURE__ */ jsx("button", { className: "md:hidden text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/5 transition", onClick: () => setOpen(!open), "aria-label": "Toggle menu", children: open ? /* @__PURE__ */ jsx(X, { size: 21 }) : /* @__PURE__ */ jsx(Menu, { size: 21 }) })
    ] }),
    open && /* @__PURE__ */ jsxs("div", { className: "md:hidden mt-2 bg-[#0c1410] backdrop-blur-xl rounded-2xl border border-brand/20 px-4 py-4 flex flex-col gap-1.5", children: [
      links.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, onClick: () => setOpen(false), className: "font-body text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all", children: l.label }, l.href)),
      /* @__PURE__ */ jsxs("a", { href: "#download", className: "mt-2 flex items-center justify-center gap-2 bg-brand text-black text-sm font-semibold px-4 py-3.5 rounded-xl hover:bg-brand/90 transition", children: [
        /* @__PURE__ */ jsx(Download, { size: 15 }),
        " Get the App"
      ] })
    ] })
  ] }) });
}
function TestimonialMarquee() {
  const doubled = [...testimonials, ...testimonials];
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden border-y border-brand/10 bg-[#080c0a] py-5", children: /* @__PURE__ */ jsx("div", { className: "marquee-track flex gap-16 whitespace-nowrap", children: doubled.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
    /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: Array.from({
      length: t.rating
    }).map((_, j) => /* @__PURE__ */ jsx(Star, { size: 11, className: "text-brand fill-brand" }, j)) }),
    /* @__PURE__ */ jsxs("span", { className: "font-body text-white/60 text-sm", children: [
      '"',
      t.text,
      '"'
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "font-body text-brand/60 text-xs", children: [
      "— ",
      t.name
    ] }),
    /* @__PURE__ */ jsx("span", { className: "text-white/20 text-xs ml-4", children: "◆" })
  ] }, i)) }) });
}
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")), {
      threshold: 0.08
    });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
const heroImages = ["https://jumpingjazza.com/wp-content/uploads/2017/10/IMG_0152-1024x768.jpg", "https://images.pexels.com/photos/30177512/pexels-photo-30177512.jpeg"];
function SectionHeading({
  eyebrow,
  title,
  sub
}) {
  return /* @__PURE__ */ jsxs("div", { className: "text-center reveal mb-14", children: [
    /* @__PURE__ */ jsx("p", { className: "font-display text-brand text-[11px] font-semibold tracking-widest uppercase mb-3", children: eyebrow }),
    /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl sm:text-5xl font-bold text-white", children: title }),
    /* @__PURE__ */ jsx("p", { className: "font-body mt-3 text-white/50 text-base", children: sub })
  ] });
}
function Landing() {
  useReveal();
  const [activeSlide, setActiveSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setActiveSlide((s) => (s + 1) % heroImages.length);
      setAnimKey((k) => k + 1);
    }, 7e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-page text-white overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("section", { id: "home", className: "relative min-h-screen flex items-center pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden", children: [
      heroImages.map((src, i) => /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 z-0 bg-cover bg-center", style: {
        backgroundImage: `url('${src}')`,
        opacity: i === activeSlide ? 1 : 0,
        transition: "opacity 1.5s ease-in-out",
        animation: i === activeSlide ? "hero-ken-burns-out 8s ease-out forwards" : "none"
      } }, i === activeSlide ? `slide-${i}-${animKey}` : `slide-${i}`)),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 z-10", style: {
        background: "linear-gradient(to right, rgba(5,8,6,0.97) 0%, rgba(5,8,6,0.90) 40%, rgba(5,8,6,0.60) 70%, rgba(5,8,6,0.30) 100%)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute z-20 top-1/3 -left-20 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute z-20 top-8 right-1/4 w-[350px] h-[350px] rounded-full bg-brand/5 blur-[100px]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-30 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full", children: [
        /* @__PURE__ */ jsxs("div", { style: {
          opacity: 1
        }, children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/30 text-brand text-[11px] font-semibold tracking-widest uppercase mb-6", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 11 }),
            " Available in Ethiopia"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05] mb-5 text-white", children: [
            "Your Ride,",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-brand", children: "Your Way." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-base text-white/75 max-w-md leading-relaxed mb-8", children: "Fast, affordable taxi service in Bahir Dar & Addis Ababa. Get matched with a nearby driver in under 3 minutes." }),
          /* @__PURE__ */ jsx(StoreBadges, { className: "mb-8" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(Star, { size: 12, className: "text-brand fill-brand" }, i)) }),
              /* @__PURE__ */ jsx("span", { className: "font-body text-sm text-white/60", children: "4.8 rated" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "w-px h-4 bg-white/20" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Building2, { size: 13, className: "text-brand" }),
              /* @__PURE__ */ jsx("span", { className: "font-body text-sm text-white/60", children: "2 cities" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "w-px h-4 bg-white/20" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Clock, { size: 13, className: "text-brand" }),
              /* @__PURE__ */ jsx("span", { className: "font-body text-sm text-white/60", children: "Avg. 3 min wait" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block", style: {
          opacity: 1
        }, children: /* @__PURE__ */ jsx(PhoneMockup, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute bottom-0 inset-x-0 z-40 h-32 bg-gradient-to-t from-page to-transparent" })
    ] }),
    /* @__PURE__ */ jsx(TestimonialMarquee, {}),
    /* @__PURE__ */ jsx("section", { className: "bg-[#0c1410]", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 py-16", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-px bg-brand/10 rounded-2xl overflow-hidden", children: [{
      num: "2",
      label: "Cities",
      sub: "Bahir Dar & Addis Ababa",
      Icon: Building2
    }, {
      num: "4.8★",
      label: "Rating",
      sub: "From verified riders",
      Icon: Star
    }, {
      num: "3 min",
      label: "Avg Wait",
      sub: "Industry-leading speed",
      Icon: Clock
    }].map(({
      num,
      label,
      sub,
      Icon
    }, i) => /* @__PURE__ */ jsxs("div", { className: "reveal bg-[#0c1410] text-center px-6 py-10", style: {
      transitionDelay: `${i * 80}ms`
    }, children: [
      /* @__PURE__ */ jsx(Icon, { size: 20, className: "text-brand mx-auto mb-3" }),
      /* @__PURE__ */ jsx("div", { className: "font-display text-3xl sm:text-4xl font-bold text-brand mb-1", children: num }),
      /* @__PURE__ */ jsx("div", { className: "font-display text-sm font-semibold text-white mb-1", children: label }),
      /* @__PURE__ */ jsx("div", { className: "font-body text-xs text-white/40", children: sub })
    ] }, label)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6 scroll-mt-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Simple Process", title: "How It Works", sub: "Get a ride in 3 easy steps" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-3 gap-5", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-[52px] z-0", style: {
          left: "calc(33.33% / 2 + 28px)",
          right: "calc(33.33% / 2 + 28px)",
          height: "1px",
          background: "linear-gradient(90deg, rgba(0,193,112,0.15), rgba(0,193,112,0.5), rgba(0,193,112,0.15))"
        } }),
        steps.map(({
          Icon,
          title,
          desc
        }, i) => /* @__PURE__ */ jsxs("div", { className: "card-dark rounded-2xl p-7 reveal relative z-10", style: {
          transitionDelay: `${i * 100}ms`
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "font-display absolute top-3 right-5 text-[64px] font-bold leading-none select-none pointer-events-none", style: {
            color: "rgba(0,193,112,0.06)"
          }, children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-brand grid place-items-center mb-5 relative z-10", children: /* @__PURE__ */ jsx(Icon, { size: 24, className: "text-black" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-white mb-2", children: title }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-white/55 text-sm leading-relaxed", children: desc })
        ] }, title))
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "features", className: "py-24 px-6 bg-[#0c1410] scroll-mt-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Built For You", title: "Everything You Need", sub: "Designed for Ethiopian riders" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12 gap-4", children: features.map(({
        Icon,
        title,
        desc,
        span,
        wide
      }, i) => wide ? /* @__PURE__ */ jsx("div", { className: `card-dark rounded-2xl p-7 reveal ${span}`, style: {
        transitionDelay: `${i * 60}ms`
      }, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 grid place-items-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { size: 26, className: "text-brand" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold text-white mb-1.5", children: title }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-white/55 text-sm leading-relaxed", children: desc })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "tel:9040", className: "shrink-0 flex items-center gap-2 bg-brand text-black text-sm font-semibold px-5 py-2.5 rounded-xl hover:scale-105 transition-transform", children: [
          /* @__PURE__ */ jsx(Phone, { size: 15 }),
          " Call 9040"
        ] })
      ] }) }, title) : /* @__PURE__ */ jsxs("div", { className: `card-dark rounded-2xl p-7 reveal ${span}`, style: {
        transitionDelay: `${i * 60}ms`
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 grid place-items-center mb-5", children: /* @__PURE__ */ jsx(Icon, { size: 22, className: "text-brand" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-bold text-white mb-2", children: title }),
        /* @__PURE__ */ jsx("p", { className: "font-body text-white/55 text-sm leading-relaxed", children: desc })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "vehicles", className: "py-24 px-6 scroll-mt-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Ride Options", title: "Choose Your Ride", sub: "A vehicle for every budget and occasion" }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-4 overflow-x-auto pb-4 snap-x lg:grid lg:grid-cols-5 lg:overflow-visible", children: vehicles.map((v, i) => /* @__PURE__ */ jsxs("div", { className: "card-dark rounded-2xl p-6 min-w-[180px] snap-start reveal flex flex-col items-center text-center", style: {
        transitionDelay: `${i * 70}ms`
      }, children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block px-2.5 py-0.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-semibold tracking-wider uppercase mb-4", children: v.tag }),
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 grid place-items-center mb-4", children: /* @__PURE__ */ jsx(Car, { size: 26, className: "text-brand" }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-base font-bold text-white mb-1", children: v.name }),
        /* @__PURE__ */ jsx("p", { className: "font-body text-xs text-white/45 mb-4 leading-relaxed", children: v.desc }),
        /* @__PURE__ */ jsxs("div", { className: "mt-auto font-display text-brand font-bold text-lg", children: [
          "From ",
          v.price
        ] })
      ] }, v.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "download", className: "py-16 px-6 bg-[#0c1410] scroll-mt-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "cta-gradient rounded-3xl p-10 sm:p-14 overflow-hidden relative reveal glow-emerald-soft", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full border border-white/10" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-8 right-6 w-40 h-40 rounded-full border border-white/10" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-4 -right-8 w-80 h-80 rounded-full bg-white/5" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-white/60 text-[11px] font-semibold tracking-widest uppercase mb-3", children: "Download Today" }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl sm:text-5xl font-bold text-white mb-4", children: "Ready to Ride?" }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-white/75 text-base max-w-sm mb-8 leading-relaxed", children: "Download Bahiran Ride now and get your first ride in minutes. Available on iOS and Android." }),
          /* @__PURE__ */ jsx(StoreBadges, {})
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center lg:items-end gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white p-5 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 100 100", className: "w-36 h-36", children: [
            /* @__PURE__ */ jsx("rect", { width: "100", height: "100", fill: "white" }),
            Array.from({
              length: 100
            }).map((_, idx) => {
              const x = idx % 10 * 10;
              const y = Math.floor(idx / 10) * 10;
              const fill = idx * 7 % 3 === 0 || idx % 5 === 0 && idx % 2 === 1;
              return fill ? /* @__PURE__ */ jsx("rect", { x, y, width: "10", height: "10", fill: "#0A0F0C" }, idx) : null;
            }),
            /* @__PURE__ */ jsx("rect", { x: "0", y: "0", width: "30", height: "30", fill: "white", stroke: "#0A0F0C", strokeWidth: "6" }),
            /* @__PURE__ */ jsx("rect", { x: "10", y: "10", width: "10", height: "10", fill: "#0A0F0C" }),
            /* @__PURE__ */ jsx("rect", { x: "70", y: "0", width: "30", height: "30", fill: "white", stroke: "#0A0F0C", strokeWidth: "6" }),
            /* @__PURE__ */ jsx("rect", { x: "80", y: "10", width: "10", height: "10", fill: "#0A0F0C" }),
            /* @__PURE__ */ jsx("rect", { x: "0", y: "70", width: "30", height: "30", fill: "white", stroke: "#0A0F0C", strokeWidth: "6" }),
            /* @__PURE__ */ jsx("rect", { x: "10", y: "80", width: "10", height: "10", fill: "#0A0F0C" })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-white/70 text-sm", children: "Scan to download the app" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("footer", { className: "border-t border-white/5 bg-[#080c0a] px-6 py-14", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-10 mb-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5 mb-4", children: [
            /* @__PURE__ */ jsx("img", { src: logo, alt: "", className: "w-8 h-8 rounded-xl" }),
            /* @__PURE__ */ jsx("div", { className: "font-display text-lg font-bold text-brand", children: "Bahiran Ride" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "font-body text-white/40 text-sm max-w-xs leading-relaxed", children: "Fast, affordable ride-hailing across Ethiopia. Serving Bahir Dar and Addis Ababa." }),
          /* @__PURE__ */ jsx("p", { className: "font-body mt-5 text-white/25 text-xs", children: "© 2026 Bahiran Ride. All rights reserved." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-[11px] font-semibold text-white/40 mb-4 tracking-widest uppercase", children: "Company" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3", children: ["Privacy Policy", "Terms of Service", "Contact Us"].map((link) => /* @__PURE__ */ jsx("a", { href: "#", className: "font-body text-white/50 hover:text-brand text-sm transition-colors", children: link }, link)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-[11px] font-semibold text-white/40 mb-4 tracking-widest uppercase", children: "Available In" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3 mb-6", children: ["Bahir Dar", "Addis Ababa"].map((city) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/50 text-sm font-body", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 12, className: "text-brand" }),
            " ",
            city
          ] }, city)) }),
          /* @__PURE__ */ jsx("div", { className: "font-display text-[11px] font-semibold text-white/40 mb-3 tracking-widest uppercase", children: "Support" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/50 text-sm font-body", children: [
            /* @__PURE__ */ jsx(Phone, { size: 12, className: "text-brand" }),
            " Call 9040"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-white/5 flex items-center justify-center gap-1.5 text-white/30 text-sm font-body", children: [
        "Made with ",
        /* @__PURE__ */ jsx(Heart, { size: 13, className: "text-brand fill-brand mx-0.5" }),
        " in Ethiopia"
      ] })
    ] }) })
  ] });
}
export {
  Landing as component
};
