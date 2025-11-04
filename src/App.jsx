import React from "react";
import { HashRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// ===== Site data =====
const DATA = {
  name: "Haoqi Tong",
  role: "PhD Candidate, Department of Economics, Duke University",
  jobMarket: "I am on the 2025–2026 job market.",
  bio: `Welcome! My name is Haoqi Tong, and I am a PhD candidate in the Department of Economics at Duke University. I received my M.A. in Economics from Duke University and B.A. in Economics and Finance from Tsinghua University.

I am a microeconomic theorist, and my research focuses on matching theory and the economics of education.`,
  email: "haoqi.tong@duke.edu",
  addressLines: [
    "Duke University Department of Economics",
    "213 Social Sciences, 419 Chapel Drive",
    "Durham, NC 27708-0097",
  ],
  cvHref: "/Haoqi_Tong_CV_2025.pdf",
  headshotSrc: "/photo.jpg",
  research: {
    working: [
      {
        title: "Subsidy Design in Budget-Constrained Matching",
        authors: "Haoqi Tong",
        status: "Working paper",
        note: "Job Market Paper",
        links: [{ label: "PDF", href: "/Haoqi_Tong_JMP.pdf" }],
        abstract: "Abstract: How should a social planner optimally allocate subsidies in a budget-constrained matching market? We study this question across settings that differ in the information available to the planner. Under complete information, the planner fully observes match values and budget constraints. We provide an algorithm that computes the minimal total subsidy required to implement the welfare-maximizing matching. Under incomplete information, the planner observes the status-quo stable matching and agents’ budget constraints, but not the underlying match values. We characterize robust subsidy policies that improve aggregate welfare relative to the observed outcome. Our central result provides necessary and sufficient conditions for a subsidy to be non-distortive: for every profile of match values consistent with the observed outcome, there exists a stable matching that is weakly welfare-improving relative to the status quo. We then examine how the planner’s information set shapes the flexibility of designing targeted subsidies. In the most restrictive environment with no information about match values or budget constraints, a uniform subsidy emerges as the only non-distortive policy. Rather than eliciting preferences, our approach infers the underlying information structure from the observed outcome to guide policy design, providing a new method for addressing informational constraints."
      },
      {
        title: "Rank Order Choice Modeling with Latent Consideration Sets",
        authors: "with Atila Abdulkadiroglu, Adam M. Rosen",
        status: "Working paper",
        note: [],
        links: [{ label: "PDF coming soon", href: "javascript:void(0)", comingSoon: true }],
        abstract: "Abstract coming soon"
      },
      {
        title: "Career Concern Model with Voluntary Information Disclosure",
        authors: "Haoqi Tong",
        status: "Working paper",
        note: [],
        abstract: "Abstract: When an educational institution requires voluntary disclosure of test scores, what is the best way for a student to utilize their score? How does this strategic conduct influence the motivation to invest in ability? I study a career-concern model with voluntary disclosure and show that the optimal disclosure rule follows a threshold strategy in equilibrium. This strategic channel reduces incentives to invest in ability at the first stage."
      }
    ],
    publications: [
      {
        title: "Ex-ante Fairness under Constrained School Choice: An Experimental Approach",
        authors: "with Xiaohan Zhong",
        venue: "China Economic Quarterly International, 2(4), Dec 2022, pp. 304–333",
        status: "Published",
        note: "Originates from my undergraduate thesis at Tsinghua University.",
        links: [
          { label: "PDF", href: "/Ex-ante fairness under constrained school choice An experimental approach.pdf" }
        ]
      }
    ],
  },
  teaching: {
    instructor: [
      {
        role: "Instructor",
        course:
          "ECON 104 — Statistical Foundations of Econometrics and Data Science",
        level: "Undergraduate Core",
        institution: "Duke University",
        term: "Summer 2024",
        links: [
          { label: "Syllabus", href: "/Syllabus.pdf" },
          { label: "Sample Slides", href: "/Lecture 3.pdf" },
          { label: "Course Evaluations", href: "/ECON 104 Course Evaluations.pdf" },
        ],
      },
    ],
    ta: [
      {
        role: "Teaching Assistant",
        course: "ECON 205 — Intermediate Microeconomics",
        level: "Undergraduate Core",
        institution: "Duke University",
        term: "2023–2024",
      },
      {
        role: "Teaching Assistant",
        course: "ECON 701/705 — Microeconomic Analysis I/II",
        level: "Ph.D. Core",
        institution: "Duke University",
        term: "2021–2022",
      },
      {
        role: "Teaching Assistant",
        course: "Principles of Economics",
        level: "Undergraduate Core",
        institution: "Tsinghua University",
        term: "2017–2018",
      },
    ],
  },
};

// ===== UI primitives =====
const Container = ({ children }) => (
  <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ title, children }) => (
  <section className="py-10">
    <h2 className="mb-4 text-2xl font-bold tracking-tight">{title}</h2>
    {children}
  </section>
);

const ResearchItem = ({ item }) => (
  <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="text-lg font-semibold">{item.title}</h3>
      {item.status && (
        <span className="text-xs tracking-wide text-neutral-600">{item.status}</span>
      )}
    </div>
    {item.authors && (
      <div className="mt-1 text-sm text-neutral-700">{item.authors}</div>
    )}
    {(item.venue || item.journal) && (
      <div className="mt-1 text-sm text-neutral-700">{item.venue || item.journal}</div>
    )}
    {item.abstract && (
    <p className="mt-2 text-sm text-neutral-700">{item.abstract}</p>
    )}
    {item.links?.length > 0 && (
      <div className="mt-2 flex flex-wrap gap-2">
        {item.links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm underline hover:no-underline">
            {l.label}
          </a>
        ))}
      </div>
    )}
    {item.note && (
      <div className="mt-2 text-xs text-neutral-600">{item.note}</div>
    )}
  </div>
);

// ===== Pages =====
function HomePage() {
  return (
    <div className="border-b border-neutral-200 bg-white py-10">
      <Container>
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Left: photo column (fixed width, no crop) */}
          <div className="shrink-0 w-36 md:w-44 lg:w-52">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-100 overflow-hidden">
              <img
                src={DATA.headshotSrc}
                alt="Haoqi Tong"
                className="block w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right: text column */}
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold tracking-tight">{DATA.name}</h1>
            <p className="mt-1 text-sm text-neutral-700">{DATA.role}</p>
            <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-neutral-800">{DATA.bio}</p>
            <p className="mt-3 text-[15px] font-medium text-neutral-900">{DATA.jobMarket}</p>
          </div>
        </div>        
      </Container>
    </div>
  );
}

function ResearchPage() {
  return (
    <Container>
      <Section title="Research">
        <h3 className="mb-3 text-base font-semibold tracking-tight">Working Papers / In Progress</h3>
        <div className="space-y-4">
          {DATA.research.working.map((w) => (
            <ResearchItem key={w.title} item={w} />
          ))}
        </div>
        {DATA.research.publications?.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-3 text-base font-semibold tracking-tight">Publications</h3>
            <div className="space-y-4">
              {DATA.research.publications.map((p) => (
                <ResearchItem key={p.title} item={p} />
              ))}
            </div>
          </div>
        )}
      </Section>
    </Container>
  );
}

const TeachItem = ({ item }) => (
  <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h3 className="text-base font-semibold">{item.course}</h3>
      <span className="text-xs tracking-wide text-neutral-600">{item.term}</span>
    </div>
    <div className="mt-1 text-sm text-neutral-700">
      {item.role} · {item.level}
    </div>
    <div className="mt-1 text-sm text-neutral-700">{item.institution}</div>

    {/* === NEW: Add links if present === */}
    {item.links?.length > 0 && (
      <div className="mt-3 flex flex-wrap gap-3 text-sm">
        {item.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-700 hover:no-underline"
          >
            [{l.label}]
          </a>
        ))}
      </div>
    )}
  </div>
);


function TeachingPage() {
  const hasInstructor = DATA.teaching?.instructor?.length > 0;
  const hasTA = DATA.teaching?.ta?.length > 0;

  return (
    <Container>
      <Section title="Teaching">
        {hasInstructor && (
          <>
            <h3 className="mb-3 text-base font-semibold tracking-tight">Instructor</h3>
            <div className="space-y-4">
              {DATA.teaching.instructor.map((t) => (
                <TeachItem key={t.course + t.term} item={t} />
              ))}
            </div>
          </>
        )}

        {hasTA && (
          <div className="mt-8">
            <h3 className="mb-3 text-base font-semibold tracking-tight">Teaching Assistant</h3>
            <div className="space-y-4">
              {DATA.teaching.ta.map((t) => (
                <TeachItem key={t.course + t.term} item={t} />
              ))}
            </div>
          </div>
        )}
      </Section>
    </Container>
  );
}


function ContactPage() {
  return (
    <Container>
      <Section title="Contact">
        <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="text-sm text-neutral-700">
            <div className="font-medium">Email</div>
            <a href={`mailto:${DATA.email}`} className="underline hover:no-underline">{DATA.email}</a>
          </div>
          <div className="mt-4 text-sm text-neutral-700">
            <div className="font-medium">Address</div>
            <div className="whitespace-pre-line">{DATA.addressLines.join("\n")}</div>
          </div>
        </div>
      </Section>
    </Container>
  );
}

function Header() {
  const activeClass = ({ isActive }) =>
    "text-sm font-medium " + (isActive ? "text-black" : "text-neutral-800 hover:opacity-70");

  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="text-base font-semibold tracking-tight">
            {DATA.name}
          </Link>
          <nav className="flex items-center gap-6">
            <NavLink to="/" className={activeClass} end>
              Home
            </NavLink>
            <NavLink to="/research" className={activeClass}>
              Research
            </NavLink>
            <NavLink to="/teaching" className={activeClass}>
              Teaching
            </NavLink>
            <a href={DATA.cvHref} className="text-sm font-medium text-neutral-800 hover:opacity-70">
              CV
            </a>
            <NavLink to="/contact" className={activeClass}>
              Contact
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-neutral-50 text-neutral-900">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <footer className="border-t border-neutral-200 bg-white py-6 text-center text-xs text-neutral-500">
          <Container>
            <div>© {new Date().getFullYear()} {DATA.name}. Built with Vite + React + Tailwind. Hosted on GitHub Pages.</div>
          </Container>
        </footer>
      </div>
    </HashRouter>
  );
}