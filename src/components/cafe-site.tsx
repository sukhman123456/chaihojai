import { useEffect, useState, useRef, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Coffee,
  Heart,
  Instagram,
  MapPin,
  Menu,
  Pause,
  Phone,
  Play,
  Sparkles,
  Star,
  ShoppingBag,
  Check,
  UtensilsCrossed,
  Volume2,
  VolumeX,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import cafeInterior from "@/assets/cafe-interior.jpg";
import cafeTable from "@/assets/cafe-table.jpg";
import chaiHero from "@/assets/chai-hero.jpg";
import chaiPour from "@/assets/chai-pour.jpg";
import chaiBestInterior from "@/assets/chai-best-interior.jpg";
import chaiHallView from "@/assets/chai-hall-view.jpg";
import chaiCustomersVibe from "@/assets/chai-customers-vibe.jpg";
import chaiVadaPavCorner from "@/assets/chai-vada-pav-corner.jpg";
import chaiLogo from "@/assets/chai-logo.jpg";
import coffeeEspresso from "@/assets/coffee-espresso.jpg";
import coffeeCappuccino from "@/assets/coffee-cappuccino.jpg";
import coffeeLatte from "@/assets/coffee-latte.jpg";
import coffeeAmericano from "@/assets/coffee-americano.jpg";
import coffeeMocha from "@/assets/coffee-mocha.jpg";
import coffeeIced from "@/assets/coffee-iced.jpg";
import { ChaiSteam } from "@/components/chai-steam";
import { FloatingActions } from "@/components/floating-actions";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Menu", "#menu"],
  ["Coffee", "#coffee"],
  ["Gallery", "#gallery"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
] as const;

const menuItems = [
  {
    name: "Special Kadak Chai",
    description: "Slow-brewed rich milk tea infused with freshly crushed green cardamom & ginger.",
    price: "₹49",
    image: chaiPour,
    tag: "Signature",
    alt: "Fresh chai being poured into a cup",
  },
  {
    name: "Bombay Desi Vada Pav",
    description: "Desi Swaad, Full On Maza — Golden spiced batata vada in toasted pav with garlic chutney & fried chilli.",
    price: "₹69",
    image: chaiVadaPavCorner,
    tag: "Café Favorite",
    alt: "Chai Ho Jaye signature Vada Pav and cozy seating corner",
  },
  {
    name: "Stone-Crust Tandoori Pizza",
    description: "Handcrafted crispy crust baked with marinated spiced paneer, diced peppers, mozzarella & herbs.",
    price: "₹189",
    image: cafeTable,
    tag: "Chef's Special",
    alt: "Artisan pizza and warm cafe table setup",
  },
  {
    name: "Authentic Kulhad Chai",
    description: "Served piping hot in traditional earthenware cups for a nostalgic, earthy aroma and rich flavour.",
    price: "₹59",
    image: chaiHero,
    tag: "Traditional",
    alt: "A steaming cup of kulhad chai in warm cafe lighting",
  },
];

const gallery = [
  {
    image: chaiBestInterior,
    title: "Signature Café Lounge",
    subtitle: "Handcrafted cane chandeliers, plush brown seating & the iconic 'People One Cup At A Time' wall.",
    alt: "Chai Ho Jaye Kapurthala main lounge with hanging cane chandeliers and sofas",
    tag: "Featured Ambiance",
  },
  {
    image: chaiCustomersVibe,
    title: "Lively Smiles & Gatherings",
    subtitle: "Families, kids, and friends sharing warm conversations over freshly brewed tea and snacks.",
    alt: "Customers and children smiling in the cozy atmosphere of Chai Ho Jaye",
    tag: "Community",
  },
  {
    image: chaiHallView,
    title: "The Dining Hall Perspective",
    subtitle: "Warm cove backlighting, sleek glossy tiles, and comfortable booth and table arrangements.",
    alt: "Long perspective of Chai Ho Jaye dining room and counter",
    tag: "Interior",
  },
  {
    image: chaiVadaPavCorner,
    title: "Desi Swaad Corner",
    subtitle: "Warm glowing wood trim, framed posters, and intimate cozy seating corners.",
    alt: "Warmly lit seating corner with Vada Pav poster at Chai Ho Jaye",
    tag: "Cozy Corners",
  },
  {
    image: chaiPour,
    title: "The Kettle Pour",
    subtitle: "Rich, steaming chai brewed fresh with whole fragrant spices, milk, and love.",
    alt: "Chai pouring from a traditional kettle",
    tag: "Fresh Brew",
  },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="Chai Ho Jaye home"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${light ? "text-hero-foreground" : "text-primary"}`}
    >
      <img
        src={chaiLogo}
        alt="Chai Ho Jai Café Logo"
        className="size-10 sm:size-11 rounded-full object-cover shadow-sm border border-accent/40 ring-1 ring-accent/30"
      />
      <div className="flex flex-col">
        <span className="font-display text-xl sm:text-2xl font-bold leading-none tracking-tight">
          Chai Ho Jaye
        </span>
        <span
          className={`text-[10px] uppercase tracking-[0.2em] font-medium mt-1 ${
            light ? "text-accent" : "text-muted-foreground"
          }`}
        >
          Kapurthala • Café
        </span>
      </div>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`nav-reveal fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/95 py-3 shadow-sm backdrop-blur"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <BrandMark light={!scrolled} />
        <nav
          aria-label="Main navigation"
          className={`hidden items-center gap-7 lg:flex ${
            scrolled ? "text-foreground" : "text-hero-foreground"
          }`}
        >
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Button variant={scrolled ? "cafe" : "cafe-hero"} size="lg" asChild>
            <a href="#menu">View menu</a>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={scrolled ? "ghost" : "cafe-hero-outline"}
              size="icon"
              className="lg:hidden"
              aria-label="Open navigation"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[88%] border-primary/10 bg-background p-8">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <BrandMark />
            <nav className="mt-16 flex flex-col" aria-label="Mobile navigation">
              {navItems.map(([label, href], index) => (
                <SheetClose asChild key={label}>
                  <a
                    href={href}
                    className="flex items-center justify-between border-b border-border py-5 font-display text-3xl text-primary"
                  >
                    <span>{label}</span>
                    <span className="font-sans text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                  </a>
                </SheetClose>
              ))}
            </nav>
            <Button variant="cafe" size="lg" className="mt-10 w-full" asChild>
              <a href="tel:09876900361">
                <Phone /> Call now
              </a>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-5 text-xs font-semibold uppercase tracking-[0.24em] ${
        light ? "text-accent" : "text-espresso-soft"
      }`}
    >
      {children}
    </p>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[720px] overflow-hidden bg-primary md:min-h-[780px]"
    >
      <img
        src={chaiHero}
        alt="Steaming chai in a warm café setting"
        width={1920}
        className="hero-image absolute inset-0 h-full w-full object-cover object-[67%_center]"
      />
      {/* Crystal clear background with subtle cinematic contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/25" />
      <ChaiSteam />

      <div className="relative mx-auto flex min-h-[720px] max-w-[1400px] items-end px-5 pb-24 pt-32 sm:px-8 md:min-h-[780px] md:items-center md:pb-0 lg:px-12">
        <div className="max-w-2xl text-hero-foreground">
          {/* Subtle minimal location tag with Logo */}
          <div className="hero-reveal mb-5 inline-flex items-center gap-2.5 rounded-full border border-accent/40 bg-black/45 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
            <img
              src={chaiLogo}
              alt="Chai Ho Jai Logo"
              className="size-5 rounded-full object-cover ring-1 ring-accent/60"
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Tagore Nagar, Kapurthala
            </span>
          </div>

          {/* Refined, Elegant Brand Title in Playfair Display */}
          <h1 className="hero-reveal font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-hero-foreground">
            <span className="cinematic-title">Chai Ho Jaye</span>
          </h1>

          {/* Soulful, Warm Café Line with Heart */}
          <div className="hero-reveal-late mt-5 border-l-2 border-accent pl-4 sm:pl-5 space-y-2">
            <p className="font-display text-lg sm:text-2xl italic tracking-wide text-accent/95">
              “ਜਿੱਥੇ ਹਰ ਚੁੱਸਕੀ ਨਾਲ ਗੱਲਾਂ ਸ਼ੁਰੂ ਹੁੰਦੀਆਂ ਨੇ...”
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-hero-foreground/85 font-normal max-w-lg">
              A cozy space in Kapurthala to pause, sip slow, and share warm moments over authentic kadak chai and delicious bites.
            </p>
          </div>

          {/* Sleek Action Buttons */}
          <div className="hero-reveal-late mt-8 flex flex-wrap items-center gap-3.5">
            <Button
              variant="cafe-hero"
              size="lg"
              className="bg-gradient-to-r from-accent via-[#e5b378] to-accent bg-[length:200%_auto] text-primary font-semibold shadow-[0_8px_25px_rgba(226,179,120,0.35)] hover:shadow-[0_12px_32px_rgba(226,179,120,0.55)] hover:scale-[1.03] transition-all duration-300"
              asChild
            >
              <a href="#menu">
                Explore Menu <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              variant="cafe-hero-outline"
              size="lg"
              className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/25 text-hero-foreground hover:border-accent/60 shadow-lg hover:scale-[1.02] transition-all duration-300"
              asChild
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=6%2C%20Jalandhar%20Rd%2C%20Tagore%20Nagar%2C%20Kapurthala%2C%20Punjab%20144601"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="size-4 text-accent" /> Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
      <a
        href="#about"
        aria-label="Continue to our story"
        className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-hero-foreground/70 md:flex lg:right-12 hover:text-accent transition-colors"
      >
        Our story <ArrowDown className="size-4" />
      </a>
    </section>
  );
}

function Story() {
  return (
    <section id="about" className="scroll-mt-20 px-5 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <SectionLabel>A moment, made warmer</SectionLabel>
          <h2 className="max-w-3xl font-display text-5xl leading-[1.04] tracking-normal text-primary sm:text-6xl md:text-7xl">
            A good cup of chai can turn an ordinary evening into a memorable one.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="mb-7 h-px w-12 bg-accent" />
          <p className="text-base leading-8 text-muted-foreground">
            Chai Ho Jaye is designed to pause over something warm, share delicious bites, and let conversations take their time — right here in Kapurthala.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <span>₹200–400 per person</span>
            <span className="size-1 rounded-full bg-accent" />
            <span>Dine-in • Takeaway • Delivery</span>
          </div>
        </div>
      </div>

      {/* Real Photos Grid */}
      <div className="mx-auto mt-16 grid max-w-[1300px] grid-cols-12 gap-4 sm:gap-6">
        <div className="col-span-12 lg:col-span-8 overflow-hidden relative group rounded-sm shadow-md">
          <img
            src={chaiBestInterior}
            alt="The warm and inviting ambiance of Chai Ho Jaye Kapurthala with signature bamboo lamps"
            width={1600}
            height={1104}
            loading="lazy"
            className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent opacity-85 transition-opacity group-hover:opacity-65" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3 text-hero-foreground">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Tagore Nagar, Kapurthala
              </p>
              <p className="font-display text-2xl sm:text-3xl">
                “People, One Cup At A Time”
              </p>
              <p className="text-xs text-hero-foreground/80 mt-1">
                Handcrafted cane lanterns, cozy lounge seating &amp; heartfelt hospitality
              </p>
            </div>
            <span className="hidden sm:inline-block border border-accent/60 bg-primary/70 backdrop-blur px-3 py-1.5 text-xs tracking-wider uppercase text-accent">
              Actual Interior
            </span>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
          <div className="overflow-hidden relative group rounded-sm shadow-md">
            <img
              src={chaiVadaPavCorner}
              alt="Cozy café corner with Vada Pav poster at Chai Ho Jaye"
              width={1200}
              height={1600}
              loading="lazy"
              className="aspect-[4/3] lg:aspect-[16/10] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-75" />
            <div className="absolute bottom-3 left-3 bg-primary/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-hero-foreground border border-accent/30">
              Desi Swaad &amp; Warm Vibe
            </div>
          </div>
          <div className="overflow-hidden relative group rounded-sm shadow-md">
            <img
              src={chaiCustomersVibe}
              alt="Happy guests and families enjoying chai at Chai Ho Jaye"
              width={1200}
              height={1600}
              loading="lazy"
              className="aspect-[4/3] lg:aspect-[16/10] h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-75" />
            <div className="absolute bottom-3 left-3 bg-primary/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-hero-foreground border border-accent/30">
              Smiles &amp; Conversations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedMenu() {
  return (
    <section id="menu" className="scroll-mt-16 bg-secondary px-5 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1300px]">
        <div className="flex flex-col justify-between gap-6 border-b border-primary/15 pb-10 md:flex-row md:items-end">
          <div>
            <SectionLabel>Freshly Prepared</SectionLabel>
            <h2 className="font-display text-5xl tracking-normal text-primary sm:text-6xl md:text-7xl">
              Something Worth Sipping
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            From our rich signature kadak chai to authentic Mumbai-style Vada Pav and handcrafted pizzas, every recipe is made with authentic flavors.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-12 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <article key={index} className="group">
              <div
                className={`relative overflow-hidden bg-muted ${
                  index % 2 ? "aspect-[4/5]" : "aspect-[4/4.5]"
                } rounded-sm shadow-sm`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1400}
                  height={1600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-primary/85 backdrop-blur-xs border border-accent/40 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 text-accent">
                  {item.tag}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-primary/15 py-5 transition-transform duration-300 group-hover:-translate-y-1">
                <div>
                  <h3 className="font-display text-2xl text-primary">{item.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <span className="pt-1 text-sm font-semibold uppercase tracking-[0.14em] text-espresso-soft whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Signature Pairing Banner */}
        <div className="mt-16 border border-primary/20 bg-background/70 p-6 sm:p-8 backdrop-blur-sm rounded-sm">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Customer Favorite Combo
              </p>
              <h3 className="mt-2 font-display text-3xl text-primary">
                Special Kadak Chai + Vada Pav
              </h3>
              <p className="mt-2 text-xs text-muted-foreground italic">
                “Desi Swaad, Full On Maza”
              </p>
            </div>
            <div className="md:col-span-2 space-y-3.5">
              <div className="flex items-center gap-4">
                <span className="font-medium text-primary">Special Masala / Elaichi Kulhad Chai</span>
                <span className="h-px flex-1 border-t border-dashed border-primary/25" />
                <span className="text-sm font-semibold text-primary">₹49 / ₹59</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium text-primary">Bombay Style Buttered Vada Pav with Chutneys</span>
                <span className="h-px flex-1 border-t border-dashed border-primary/25" />
                <span className="text-sm font-semibold text-primary">₹69</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium text-primary">Loaded Veggie &amp; Tandoori Paneer Pizza</span>
                <span className="h-px flex-1 border-t border-dashed border-primary/25" />
                <span className="text-sm font-semibold text-primary">₹189</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const coffeeShowcaseItems = [
  {
    id: "espresso",
    num: "01",
    name: "Espresso",
    punjabiName: "ਐਸਪ੍ਰੈਸੋ",
    tagline: "Pure Extract",
    category: "hot",
    categoryLabel: "☕ Pure Hot Extraction",
    price: "₹129",
    image: coffeeEspresso,
    alt: "Artisanal espresso shot with golden hazel crema in a white ceramic cup",
    description: "Rich, bold and intensely aromatic.",
    longDescription:
      "The purest expression of the bean — an intense, full-bodied extraction crowned with thick golden-hazel crema, capturing lively aromatics and rich dark cocoa undertones.",
    notes: ["Golden Crema", "Intense Aroma", "Single / Doppio"],
    glowColor: "from-amber-600/30 via-orange-950/20 to-transparent",
    accentColor: "#d4a373",
    roast: "Dark Italian Roast",
    strength: "5/5",
  },
  {
    id: "cappuccino",
    num: "02",
    name: "Cappuccino",
    punjabiName: "ਕੈਪੂਚੀਨੋ",
    tagline: "Barista Classic",
    category: "hot",
    categoryLabel: "☕ Classic Steamed Foam",
    price: "₹169",
    image: coffeeCappuccino,
    alt: "Artisanal cappuccino with velvety foam and rosetta latte art dusted with cocoa",
    description: "Smooth espresso balanced with steamed milk and creamy foam.",
    longDescription:
      "A timeless balance of dark Italian espresso, silky steamed whole milk, and dense microfoam, finished with a delicate dusting of Belgian cocoa.",
    notes: ["Equal Ratios", "Dense Froth", "Cocoa Dust"],
    glowColor: "from-amber-500/25 via-yellow-950/20 to-transparent",
    accentColor: "#f3c68f",
    roast: "Medium-Dark Roast",
    strength: "4/5",
  },
  {
    id: "latte",
    num: "03",
    name: "Cafe Latte",
    punjabiName: "ਕੈਫੇ ਲੈਟੇ",
    tagline: "Silky Smooth",
    category: "hot",
    categoryLabel: "☕ Textured Microfoam",
    price: "₹199",
    image: coffeeLatte,
    alt: "Smooth cafe latte in ceramic cup with heart latte art",
    description: "Velvety steamed milk combined with rich espresso.",
    longDescription:
      "Subtle espresso gently blended into sweet, warm textured milk and capped with delicate latte art for an exquisite, velvety smooth texture.",
    notes: ["Silky Microfoam", "Gentle Roast", "Creamy Finish"],
    glowColor: "from-amber-400/20 via-stone-900/20 to-transparent",
    accentColor: "#fde68a",
    roast: "Medium Roast",
    strength: "3/5",
  },
  {
    id: "americano",
    num: "04",
    name: "Americano",
    punjabiName: "ਅਮੈਰੀਕਾਨੋ",
    tagline: "Pure & Bold",
    category: "hot",
    categoryLabel: "☕ Bold Long Black",
    price: "₹149",
    image: coffeeAmericano,
    alt: "Steaming hot Americano long black coffee in a rustic cup",
    description: "Bold espresso with hot water for a clean and balanced taste.",
    longDescription:
      "A bold double shot of rich espresso poured over pristine hot water, preserving the deep aromatic nuances with a clean, crisp finish.",
    notes: ["Double Shot", "Crisp Aroma", "Zero Sugar"],
    glowColor: "from-amber-700/25 via-stone-950/25 to-transparent",
    accentColor: "#c28854",
    roast: "Dark Roast",
    strength: "4.5/5",
  },
  {
    id: "mocha",
    num: "05",
    name: "Mocha",
    punjabiName: "ਮੋਕਾ",
    tagline: "Sweet Indulgence",
    category: "hot",
    categoryLabel: "☕ Decadent Cocoa & Coffee",
    price: "₹219",
    image: coffeeMocha,
    alt: "Decadent dark chocolate mocha coffee with whipped cream and chocolate drizzle",
    description: "Rich espresso blended with chocolate and creamy milk.",
    longDescription:
      "A decadent pairing of artisanal dark molten chocolate, robust freshly brewed espresso, and velvety steamed milk topped with cocoa froth.",
    notes: ["Molten Chocolate", "Whipped Cream", "Dark Espresso"],
    glowColor: "from-amber-600/30 via-yellow-950/25 to-transparent",
    accentColor: "#e6b986",
    roast: "Rich Cocoa Blend",
    strength: "3.5/5",
  },
  {
    id: "coldbrew",
    num: "06",
    name: "Cold Brew",
    punjabiName: "ਕੋਲਡ ਬਰੂ",
    tagline: "Slow-Steeped Chilled",
    category: "cold",
    categoryLabel: "🧊 16-Hour Chilled Steep",
    price: "₹179",
    image: coffeeIced,
    alt: "Tall glass of refreshing layered iced cold brew with ice cubes and milk",
    description: "Slow-brewed cold coffee with a smooth and refreshing finish.",
    longDescription:
      "Slow-brewed over sixteen hours in cold filtered water for low acidity, ultra-smooth body, and refreshing natural sweetness served over crystal ice.",
    notes: ["16-Hour Steep", "Crystal Ice", "Naturally Sweet"],
    glowColor: "from-amber-500/20 via-cyan-950/25 to-transparent",
    accentColor: "#7dd3fc",
    roast: "Specialty Coarse Roast",
    strength: "4/5",
  },
];

function CinematicVideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoFinished, setVideoFinished] = useState(false);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    video.muted = isMuted;

    // Track when user enters or leaves the coffee section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // User entered section: play once if not already played in this visit
            if (!hasPlayedRef.current) {
              hasPlayedRef.current = true;
              setVideoFinished(false);
              video.currentTime = 0;
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  video.muted = true;
                  video.play().catch(() => {});
                });
              }
            }
          } else {
            // User left to explore other sections of the website:
            // Reset state so that returning to coffee section plays it fresh once again!
            hasPlayedRef.current = false;
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    const onEnded = () => {
      setVideoFinished(true);
      video.pause();
    };

    video.addEventListener("ended", onEnded);

    return () => {
      observer.disconnect();
      video.removeEventListener("ended", onEnded);
    };
  }, [isMuted]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const replayVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    setVideoFinished(false);
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const scrollToCoffeeShowcase = () => {
    const target = document.getElementById("our-coffee-showcase");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[85vh] sm:min-h-screen w-full bg-[#0c0907] flex items-center justify-center overflow-hidden"
    >
      {/* The uploaded coffee cinematic video - plays once per visit, no continuous loop */}
      <video
        ref={videoRef}
        muted={isMuted}
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        style={{ objectFit: "cover" }}
      >
        <source src="/videos/coffee-cinematic.mp4" type="video/mp4" />
        <source src="/vedios/coffe-cinematic.mp4.mp4" type="video/mp4" />
      </video>

      {/* Ambient vignettes preserving video clarity while framing screen */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-transparent to-[#0c0907]/75 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#0c0907]/60 pointer-events-none" />

      {/* Top Header Badge */}
      <div className="absolute top-6 left-6 right-6 sm:top-8 sm:left-8 sm:right-8 flex items-center justify-between z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4a373] backdrop-blur-md">
          <Coffee className="size-3.5 text-amber-400" />
          <span>Artisan Coffee Studio</span>
        </div>
        <span className="hidden sm:inline-block text-[11px] font-mono tracking-wider text-amber-200/70 uppercase">
          Slow Roasted • Kapurthala
        </span>
      </div>

      {/* Center Cinematic Title */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-4xl mx-auto">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/60 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 backdrop-blur-md">
          <Sparkles className="size-3.5 text-amber-400" />
          <span>Experience The Roast</span>
        </div>
        <h2 className="font-display cinematic-title text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl">
          Where Every Bean Awakens
        </h2>
        <p className="mt-4 font-display italic text-[#e6b986] text-lg sm:text-2xl drop-shadow-md">
          “ਕੌਫੀ ਦੀ ਖ਼ੁਸ਼ਬੂ, ਤਾਜ਼ੀ ਰੋਸਟ ਅਤੇ ਦੋਸਤਾਂ ਦੀ ਮਹਿਫ਼ਲ...”
        </p>

        {/* Scroll button down to Showcase */}
        <button
          type="button"
          onClick={scrollToCoffeeShowcase}
          className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-amber-500/50 bg-black/75 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-amber-200 backdrop-blur-md transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 cursor-pointer shadow-xl shadow-black/80"
        >
          <span>Explore Coffee Showcase</span>
          <ChevronDown className="size-4 animate-bounce" />
        </button>
      </div>

      {/* Bottom Status & Controls */}
      <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          {videoFinished ? (
            <button
              type="button"
              onClick={replayVideo}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-black/70 px-3.5 py-1.5 text-xs text-amber-300 backdrop-blur-md hover:bg-black/90 cursor-pointer shadow-md transition-all hover:scale-105"
              title="Replay Video"
            >
              <span className="text-sm">↺</span>
              <span className="text-[11px] font-medium">Replay</span>
            </button>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/60 px-3.5 py-1.5 text-xs text-amber-200/90 backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-medium tracking-wide">Cinematic Roast</span>
            </div>
          )}
          <button
            type="button"
            onClick={toggleMute}
            className="inline-flex items-center rounded-full border border-amber-500/40 bg-black/70 p-2 text-amber-200 backdrop-blur-md hover:bg-black/90 cursor-pointer shadow-md transition-transform hover:scale-105"
            title={isMuted ? "Unmute audio" : "Mute audio"}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
          </button>
        </div>

        <button
          type="button"
          onClick={scrollToCoffeeShowcase}
          className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-accent/90 px-4 py-1.5 text-xs font-semibold text-accent-foreground backdrop-blur-md hover:bg-accent cursor-pointer shadow-md transition-all hover:scale-105"
        >
          <span>Our Coffees</span>
          <ArrowDown className="size-3" />
        </button>
      </div>
    </div>
  );
}

const upcomingCoffees = [
  {
    name: "Affogato al Caffè",
    punjabi: "ਅਫੋਗਾਟੋ",
    tag: "Dessert Brew",
    description: "Bold espresso extraction poured over artisan vanilla bean gelato",
    icon: "🍨",
  },
  {
    name: "Caramel Cloud Macchiato",
    punjabi: "ਕੈਰੇਮਲ ਮੈਕਿਆਤੋ",
    tag: "Velvet Froth",
    description: "Steamed microfoam laced with buttery golden caramel swirl",
    icon: "🍮",
  },
  {
    name: "Roasted Hazelnut Frappé",
    punjabi: "ਹੇਜ਼ਲਨਟ ਫ੍ਰੈਪੇ",
    tag: "Frost Blended",
    description: "Chilled espresso frost-blended with roasted hazelnut crunch",
    icon: "🌰",
  },
  {
    name: "Irish Cream Cold Foam",
    punjabi: "ਆਇਰਿਸ਼ ਕ੍ਰੀਮ",
    tag: "Chilled Steep",
    description: "Silky spiced cream float over dark slow-steeped cold brew",
    icon: "🥛",
  },
  {
    name: "Pistachio Rose Latte",
    punjabi: "ਪਿਸਤਾ ਰੋਜ਼ ਲੈਟੇ",
    tag: "Signature Blend",
    description: "Persian rose aroma & crushed pistachio with velvety textured milk",
    icon: "🌸",
  },
  {
    name: "Nitro Cold Brew",
    punjabi: "ਨਾਈਟਰੋ ਕੌਫੀ",
    tag: "Velvet Cascade",
    description: "Micro-bubbled chilled coffee with Guinness-style creamy head",
    icon: "🧊",
  },
];

function InteractiveCoffeeShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const selectedCoffee = coffeeShowcaseItems[selectedIndex];

  const handleSelect = (idx: number) => {
    if (idx === selectedIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedIndex(idx);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 70);
    }, 220);
  };

  return (
    <div
      id="our-coffee-showcase"
      className="relative z-10 scroll-mt-16 px-5 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-24 sm:pb-32 max-w-[1340px] mx-auto"
    >
      {/* Dynamic ambient background glow that shifts tint with current coffee */}
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[500px] rounded-full bg-gradient-to-tr ${selectedCoffee.glowColor} blur-[140px] transition-all duration-700 pointer-events-none opacity-80`}
      />

      {/* SECTION TITLE (Requested by user) */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-950/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a373] backdrop-blur-md mb-4 shadow-lg shadow-black/40">
          <Sparkles className="size-3.5 text-amber-400" />
          <span>OUR COFFEE</span>
        </div>
        <h2 className="font-display cinematic-title text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight">
          Crafted to Perfection
        </h2>
        <p className="mt-3 font-display italic text-[#e6b986] text-lg sm:text-xl">
          “ਕੌਫੀ ਦੀ ਖ਼ੁਸ਼ਬੂ, ਤਾਜ਼ੀ ਰੋਸਟ ਅਤੇ ਦੋਸਤਾਂ ਦੀ ਮਹਿਫ਼ਲ...”
        </p>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-300/90 max-w-xl mx-auto">
          From bold espresso to silky lattes, every cup is crafted with carefully selected beans and a passion for great coffee.
        </p>
      </div>

      {/* MAIN INTERACTIVE SHOWCASE CONTAINER */}
      <div className="relative rounded-3xl border border-amber-900/40 bg-[#120d0a]/90 backdrop-blur-xl p-6 sm:p-8 lg:p-12 shadow-2xl shadow-black/90">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT / NAVIGATION: Clean list of coffee options (1 to 6) */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.22em] text-amber-300/80 font-semibold font-mono">
                Select Your Coffee
              </span>
              <span className="text-[11px] font-mono text-stone-400">
                0{selectedIndex + 1} / 0{coffeeShowcaseItems.length}
              </span>
            </div>

            <div className="space-y-2.5">
              {coffeeShowcaseItems.map((coffee, idx) => {
                const isActive = idx === selectedIndex;
                return (
                  <button
                    key={coffee.id}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className={`w-full group text-left px-4 sm:px-5 py-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer ${
                      isActive
                        ? "border-accent bg-gradient-to-r from-amber-500/20 via-amber-950/50 to-stone-900/80 text-white shadow-lg shadow-amber-950/60 translate-x-1"
                        : "border-amber-900/25 bg-[#17100c]/60 text-stone-300 hover:border-amber-700/50 hover:bg-[#1f1510] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`font-mono text-xs font-bold tracking-wider rounded-md px-2 py-1 transition-colors ${
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "bg-stone-900 text-stone-400 group-hover:text-amber-200"
                        }`}
                      >
                        {coffee.num}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <h4 className="font-display text-base sm:text-lg font-semibold truncate">
                            {coffee.name}
                          </h4>
                          <span className="text-xs font-normal text-amber-300/80 truncate hidden sm:inline">
                            {coffee.punjabiName}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-400 truncate max-w-[220px]">
                          {coffee.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`font-display text-sm sm:text-base font-semibold transition-colors ${
                          isActive ? "text-accent" : "text-stone-400 group-hover:text-stone-200"
                        }`}
                      >
                        {coffee.price}
                      </span>
                      <ChevronRight
                        className={`size-4 transition-transform ${
                          isActive
                            ? "text-accent translate-x-1"
                            : "text-stone-500 group-hover:translate-x-0.5 group-hover:text-stone-300"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT / MAIN VISUAL: Large High-Quality Showcase Card */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden border border-amber-900/50 bg-gradient-to-b from-[#19110d] to-[#0d0907] p-5 sm:p-7 shadow-2xl">
              
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-amber-900/25">
                <div className="flex items-center gap-2">
                  <span className="inline-flex size-2 rounded-full bg-accent animate-ping" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    Current Selection
                  </span>
                </div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-amber-200/80 rounded-full border border-amber-900/40 bg-stone-900/80 px-3 py-1 backdrop-blur-sm">
                  {selectedCoffee.categoryLabel}
                </span>
              </div>

              {/* Large Coffee Image Visual Composition */}
              <div className="relative mt-4 aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-stone-950 border border-amber-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                {/* Radial Spotlight halo behind cup */}
                <div
                  className={`absolute inset-0 bg-radial from-amber-500/25 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${
                    isTransitioning ? "opacity-20" : "opacity-100"
                  }`}
                />

                {/* Coffee Image with Smooth 400-700ms Fade & Scale Transition */}
                <img
                  src={selectedCoffee.image}
                  alt={selectedCoffee.alt}
                  width={900}
                  height={600}
                  className={`h-full w-full object-cover object-center transition-all duration-500 ease-out ${
                    isTransitioning
                      ? "opacity-25 scale-[0.96] blur-[2px]"
                      : "opacity-100 scale-100 blur-0"
                  }`}
                />

                {/* Soft cinematic gradient overlays for depth and legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907]/90 via-[#0c0907]/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c0907]/60 via-transparent to-transparent pointer-events-none" />

                {/* Roast & Strength Badges on Image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-black/75 border border-amber-500/30 px-3 py-1 text-[10px] font-medium tracking-wide text-amber-200 backdrop-blur-md">
                    {selectedCoffee.roast}
                  </span>
                  <span className="rounded-full bg-black/75 border border-amber-900/40 px-2.5 py-1 text-[10px] font-mono text-stone-300 backdrop-blur-md">
                    Strength: {selectedCoffee.strength}
                  </span>
                </div>

                {/* Price Badge on Image Corner */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                  <div
                    className={`rounded-full border border-accent/60 bg-black/90 px-4 py-1.5 backdrop-blur-md shadow-xl transition-all duration-400 ${
                      isTransitioning ? "opacity-20 scale-90" : "opacity-100 scale-100"
                    }`}
                  >
                    <span className="font-display text-xl sm:text-2xl font-bold text-accent">
                      {selectedCoffee.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Coffee Information & Details */}
              <div className="mt-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div
                    className={`transition-all duration-400 ease-out ${
                      isTransitioning
                        ? "opacity-20 translate-y-2"
                        : "opacity-100 translate-y-0"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                        {selectedCoffee.name}
                      </h3>
                      <span className="font-display text-lg sm:text-xl text-amber-300 font-medium">
                        {selectedCoffee.punjabiName}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`font-display text-2xl sm:text-3xl font-semibold text-accent hidden sm:inline transition-all duration-400 ${
                      isTransitioning ? "opacity-20 scale-90" : "opacity-100 scale-100"
                    }`}
                  >
                    {selectedCoffee.price}
                  </span>
                </div>

                {/* User's Exact Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed text-stone-200/95 transition-all duration-400 ease-out ${
                    isTransitioning ? "opacity-20" : "opacity-100"
                  }`}
                >
                  {selectedCoffee.description}
                </p>

                {/* Sensory Notes */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-[11px] uppercase tracking-wider text-amber-300/70 font-mono mr-1">
                    Notes:
                  </span>
                  {selectedCoffee.notes.map((note) => (
                    <span
                      key={note}
                      className="rounded-full bg-stone-900/90 border border-amber-900/40 px-3 py-1 text-xs text-stone-200"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="tel:09876900361"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent via-amber-400 to-accent text-accent-foreground px-6 py-3 text-sm font-bold shadow-lg shadow-amber-500/25 hover:brightness-110 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <ShoppingBag className="size-4" />
                    <span>Order Now • Call 098769 00361</span>
                  </a>

                  <a
                    href="#menu"
                    className="inline-flex items-center gap-1.5 rounded-full border border-amber-900/40 bg-stone-900/70 px-4 py-3 text-xs font-semibold text-stone-300 hover:text-white hover:border-accent/40 transition-colors"
                  >
                    <UtensilsCrossed className="size-3.5 text-accent" />
                    <span>View In Full Menu</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM QUICK-SELECTOR BAR (Direct inspiration from attached reference design) */}
        <div className="mt-12 pt-8 border-t border-amber-900/30">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-display italic text-amber-200/90 text-sm sm:text-base">
                Great moments. Brewed to make your day a little better.
              </p>
              <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400 font-mono">
                Click any cup to inspect
              </span>
            </div>
          </div>

          {/* Horizontal scrollable row of all 6 coffee items */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-amber-900/40 scrollbar-track-transparent">
            {coffeeShowcaseItems.map((coffee, idx) => {
              const isActive = idx === selectedIndex;
              return (
                <button
                  key={coffee.id}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  className={`group relative shrink-0 flex flex-col items-center p-3 rounded-2xl border transition-all duration-300 cursor-pointer min-w-[110px] sm:min-w-[125px] ${
                    isActive
                      ? "border-accent bg-amber-950/60 ring-2 ring-accent/40 -translate-y-1 shadow-lg shadow-amber-950/70"
                      : "border-amber-900/30 bg-[#160f0c]/80 hover:border-amber-700/50 hover:bg-[#1e140f]"
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div
                    className={`relative size-16 sm:size-20 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                      isActive
                        ? "border-accent shadow-md shadow-accent/30 scale-105"
                        : "border-amber-900/40 group-hover:border-amber-500/40"
                    }`}
                  >
                    <img
                      src={coffee.image}
                      alt={coffee.name}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <span
                    className={`mt-2 font-display text-xs sm:text-sm font-semibold transition-colors ${
                      isActive ? "text-white" : "text-stone-300 group-hover:text-amber-200"
                    }`}
                  >
                    {coffee.name}
                  </span>
                  <span
                    className={`text-[11px] font-semibold transition-colors ${
                      isActive ? "text-accent" : "text-stone-400"
                    }`}
                  >
                    {coffee.price}
                  </span>

                  {isActive && (
                    <span className="absolute -top-1.5 -right-1.5 size-3 rounded-full bg-accent animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ANIMATED "MORE COFFEE COMING SOON" SHOWCASE */}
      <div className="mt-16 relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#18110d]/95 via-[#120d0a]/95 to-[#0c0907] p-6 sm:p-10 lg:p-14 shadow-2xl shadow-black/80">
        {/* Dynamic ambient glowing pulsing radial halos */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-full h-[350px] bg-amber-500/15 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute top-0 right-10 w-64 h-64 bg-orange-600/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Animated Badge with pulsing beacon */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/40 bg-amber-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent backdrop-blur-md mb-4 shadow-lg shadow-black/50">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-amber-500" />
            </span>
            <Sparkles className="size-3.5 text-amber-400" />
            <span>BARISTA'S LAB • COMING SOON</span>
          </div>

          {/* Main Animated Title */}
          <h3 className="font-display cinematic-title text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 drop-shadow-xl">
            More Coffee Is Coming Soon
          </h3>

          {/* Punjabi subtitle */}
          <p className="font-display italic text-[#e6b986] text-lg sm:text-2xl mb-4 drop-shadow-sm">
            “ਹੋਰ ਨਵੀਆਂ ਕੌਫੀਆਂ ਜਲਦ ਆ ਰਹੀਆਂ ਨੇ...”
          </p>

          <p className="text-sm sm:text-base text-stone-300/90 leading-relaxed max-w-xl mx-auto mb-8">
            Our baristas are actively experimenting with exotic single-origin roasts, decadent dessert affogatos, and signature chilled creations. Stay tuned for your next favorite ritual!
          </p>
        </div>

        {/* Continuous Animated Marquee Ticker */}
        <div className="relative z-10 overflow-hidden py-3.5 border-y border-amber-900/40 bg-black/40 backdrop-blur-sm -mx-6 sm:-mx-10 lg:-mx-14 mb-8">
          <div className="animate-coffee-marquee flex items-center gap-8 text-xs sm:text-sm font-medium tracking-wider text-amber-200/90 uppercase">
            {[...upcomingCoffees, ...upcomingCoffees].map((coffee, i) => (
              <div key={i} className="inline-flex items-center gap-3 shrink-0">
                <span className="text-base">{coffee.icon}</span>
                <span className="font-display font-semibold text-white">{coffee.name}</span>
                <span className="text-amber-400/70 font-mono text-[11px]">({coffee.punjabi})</span>
                <span className="text-[10px] tracking-widest text-amber-500 bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-500/30">
                  {coffee.tag}
                </span>
                <span className="size-1 rounded-full bg-amber-500/50 ml-2" />
              </div>
            ))}
          </div>
        </div>

        {/* 3 Animated Teaser Preview Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {upcomingCoffees.slice(0, 3).map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-2xl border border-amber-900/35 bg-[#17100c]/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-[#201510] hover:-translate-y-1 shadow-lg shadow-black/60"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl p-2 rounded-xl bg-amber-950/60 border border-amber-500/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-amber-300/80 rounded-full border border-amber-500/30 bg-black/60 px-2.5 py-0.5">
                  <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Brewing Soon
                </span>
              </div>
              <h4 className="font-display text-lg font-semibold text-white group-hover:text-amber-200 transition-colors">
                {item.name}
              </h4>
              <p className="text-xs text-amber-300/80 font-medium mt-0.5">{item.punjabi}</p>
              <p className="mt-2 text-xs text-stone-300/80 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Instagram Follow / Barista Inquiry Strip */}
        <div className="relative z-10 mt-8 pt-6 border-t border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-stone-400">
            Have a dream coffee blend or flavor in mind? Let our barista know!
          </p>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <a
              href="https://www.instagram.com/chaihojaye_kapurthala/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/70 px-4 py-2 text-xs font-semibold text-amber-200 hover:text-white hover:border-accent hover:bg-black/90 transition-all hover:scale-105"
            >
              <Instagram className="size-3.5 text-accent" />
              <span>Follow @chaihojaye_kapurthala</span>
            </a>
            <a
              href="tel:09876900361"
              className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-4 py-2 text-xs font-bold text-accent-foreground hover:bg-accent transition-all hover:scale-105"
            >
              <Phone className="size-3.5" />
              <span>Suggest A Brew</span>
            </a>
          </div>
        </div>
      </div>

      {/* CTA STRIP */}
      <div className="mt-10 rounded-2xl border border-amber-800/40 bg-gradient-to-r from-amber-950/60 via-stone-900/80 to-amber-950/50 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="font-display text-xl sm:text-2xl text-white font-medium">
            Want your coffee custom made?
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-stone-300">
            Ask our barista for your preferred roast strength, sugar preference, or extra espresso shot.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <Button variant="cafe-hero" size="lg" asChild className="w-full sm:w-auto">
            <a href="tel:09876900361">
              <Phone className="size-4" /> Call 098769 00361
            </a>
          </Button>
          <Button variant="cafe-hero-outline" size="lg" asChild className="w-full sm:w-auto">
            <a href="#menu">
              Full Café Menu <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function CoffeeSection() {
  return (
    <section id="coffee" className="scroll-mt-16 bg-[#0c0907] text-[#f5ede4] relative overflow-hidden">
      {/* 1. Cinematic Coffee Video Hero at the very beginning of the section */}
      <CinematicVideoHero />

      {/* 2. Interactive Coffee Showcase immediately below the video */}
      <InteractiveCoffeeShowcase />
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-16 px-5 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <SectionLabel>Inside Chai Ho Jaye</SectionLabel>
            <h2 className="font-display text-4xl text-primary sm:text-6xl">
              Moments From Our Café
            </h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-lg">
              Explore the warm interiors, handcrafted woven chandeliers, cozy corners, and community atmosphere right here in Tagore Nagar, Kapurthala.
            </p>
          </div>
          <a
            href="https://www.instagram.com/chaihojaye_kapurthala/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent hover:underline"
          >
            <Instagram className="size-4" /> @chaihojaye_kapurthala
          </a>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:auto-rows-[180px] md:grid-cols-12 md:gap-5">
          {gallery.map((item, index) => (
            <Dialog key={item.title}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className={`group relative h-auto w-full overflow-hidden rounded-sm bg-muted p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer shadow-sm ${
                    index === 0
                      ? "col-span-2 row-span-2 md:col-span-8 md:row-span-3"
                      : index === 1
                      ? "col-span-2 row-span-2 md:col-span-4 md:row-span-3"
                      : "col-span-2 sm:col-span-1 row-span-2 md:col-span-4 md:row-span-2"
                  }`}
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-85 sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/80 backdrop-blur-xs border border-accent/40 text-[10px] sm:text-xs uppercase tracking-wider font-semibold px-2.5 py-1 text-accent">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-hero-foreground">
                    <p className="font-display text-lg sm:text-xl font-medium leading-tight">
                      {item.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-hero-foreground/80">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="border border-hero-foreground/50 bg-primary/70 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-hero-foreground">
                      Click to expand
                    </span>
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="w-[94vw] max-w-5xl border border-primary/20 bg-primary p-4 text-hero-foreground">
                <DialogTitle className="font-display text-xl sm:text-2xl text-accent">
                  {item.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-hero-foreground/80">
                  {item.subtitle}
                </DialogDescription>
                <div className="mt-3 overflow-hidden rounded bg-black/40">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="max-h-[75vh] w-full object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-16 border-y border-primary/10 bg-card px-5 py-24 sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionLabel>Guest impressions</SectionLabel>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-8xl text-primary sm:text-9xl">4.9</span>
            <span className="text-muted-foreground">/ 5</span>
          </div>
          <div
            className="mt-4 flex items-center gap-1 text-accent"
            aria-label="4.9 out of 5 stars"
          >
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="size-5 fill-current" />
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Based on Google reviews</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <h2 className="font-display text-4xl leading-tight text-primary sm:text-5xl">
            Known for the things that make a café visit count.
          </h2>
          <div className="mt-9 grid grid-cols-2 gap-px bg-border">
            <div className="bg-card p-5 text-sm font-medium">Food quality</div>
            <div className="bg-card p-5 text-sm font-medium">Warm ambience</div>
            <div className="bg-card p-5 text-sm font-medium">Cooperative staff</div>
            <div className="bg-card p-5 text-sm font-medium">Reasonable pricing</div>
          </div>
          <p className="mt-6 text-xs leading-6 text-muted-foreground">
            Rated by locals and travelers visiting Kapurthala for genuine taste and hospitality.
          </p>
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="px-5 py-24 sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1300px] gap-10 md:grid-cols-2 md:items-center">
        <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-sm shadow-md">
          <img
            src={chaiHallView}
            alt="The warm hall perspective at Chai Ho Jaye Kapurthala"
            width={1408}
            height={1408}
            loading="lazy"
            className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute -bottom-1 -right-1 bg-primary px-5 py-4 text-hero-foreground">
            <Instagram className="size-5" />
          </div>
        </div>
        <div className="md:pl-10">
          <SectionLabel>From the café</SectionLabel>
          <h2 className="font-display text-5xl leading-tight text-primary sm:text-6xl">
            Follow the<br />Chai Moments
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">@chaihojaye_kapurthala</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Daily specials, fresh pours, and community stories.
          </p>
          <Button variant="cafe-outline" size="lg" className="mt-8" asChild>
            <a
              href="https://www.instagram.com/chaihojaye_kapurthala/"
              target="_blank"
              rel="noreferrer"
            >
              Follow on Instagram <Instagram />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const directions =
    "https://www.google.com/maps/search/?api=1&query=6%2C%20Jalandhar%20Rd%2C%20Tagore%20Nagar%2C%20Kapurthala%2C%20Punjab%20144601";
  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-primary px-5 py-24 text-hero-foreground sm:px-8 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-[1300px]">
        <SectionLabel light>Come by</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-6xl leading-[.96] tracking-normal sm:text-7xl md:text-8xl">
              Chai sounds<br />good right now.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="cafe-hero" size="lg" asChild>
                <a href="tel:09876900361">
                  <Phone /> Call now
                </a>
              </Button>
              <Button variant="cafe-hero-outline" size="lg" asChild>
                <a href={directions} target="_blank" rel="noreferrer">
                  <MapPin /> Get directions
                </a>
              </Button>
              <Button variant="cafe-hero-outline" size="lg" asChild>
                <a
                  href="https://www.instagram.com/chaihojaye_kapurthala/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t border-hero-foreground/20 pt-8 lg:col-span-4 lg:col-start-9">
            <h3 className="font-display text-3xl">Chai Ho Jaye</h3>
            <address className="mt-5 not-italic leading-7 text-hero-foreground/70">
              6, Jalandhar Rd, Tagore Nagar,
              <br />
              Kapurthala, Punjab 144601
            </address>
            <a
              href="tel:09876900361"
              className="mt-5 inline-block text-lg font-medium transition-colors hover:text-accent"
            >
              098769 00361
            </a>
            <ul className="mt-8 space-y-3 text-sm text-hero-foreground/70">
              <li className="flex items-center gap-3">
                <UtensilsCrossed className="size-4 text-accent" />
                Dine-in
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="size-4 text-accent" />
                Kerbside pickup
              </li>
              <li className="flex items-center gap-3">
                <ChevronRight className="size-4 text-accent" />
                No-contact delivery
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary px-5 text-hero-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1300px] border-t border-hero-foreground/15 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <BrandMark light />
            <p className="mt-5 max-w-xs text-sm leading-7 text-hero-foreground/60">
              Good food, warm conversations, and a place to enjoy the moment in Kapurthala.
            </p>
          </div>
          <nav
            className="grid grid-cols-2 gap-3 text-sm text-hero-foreground/65"
            aria-label="Footer navigation"
          >
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="transition-colors hover:text-accent"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="text-sm leading-7 text-hero-foreground/65 md:text-right">
            <a href="tel:09876900361" className="block hover:text-accent font-medium">
              098769 00361
            </a>
            <span className="block">6, Jalandhar Rd, Tagore Nagar</span>
            <a
              href="https://www.instagram.com/chaihojaye_kapurthala/"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-accent"
            >
              @chaihojaye_kapurthala
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-hero-foreground/10 pt-6 text-xs text-hero-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© Chai Ho Jaye. All rights reserved.</span>
          <span>Kapurthala, Punjab</span>
        </div>
      </div>
    </footer>
  );
}

export function CafeSite() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <FeaturedMenu />
        <CoffeeSection />
        <Gallery />
        <Reviews />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}