import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Himalayan College of Business & Technology" },
      { name: "description", content: "Explore BBA, BICTE, BBM, and BBS programmes. Find the right course for your future." },
      { property: "og:title", content: "Himalayan College of Business & Technology" },
      { property: "og:description", content: "Explore BBA, BICTE, BBM, and BBS programmes. Find the right course for your future." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@HimalayanCollege" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-brand font-[family-name:var(--font-display)] text-sm font-semibold text-cream">
            H
          </span>
          <span className="font-[family-name:var(--font-display)] text-lg font-medium tracking-tight text-ink">
            Himalayan College
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-warm sm:flex">
          <Link to="/courses" className="text-ink transition-colors hover:text-brand" activeProps={{ className: "text-brand" }}>
            Programmes
          </Link>
          <Link to="/about" className="transition-colors hover:text-ink" activeProps={{ className: "text-ink" }}>
            About
          </Link>
          <Link to="/contact" className="transition-colors hover:text-ink" activeProps={{ className: "text-ink" }}>
            Contact
          </Link>
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-brand-deep sm:inline-flex"
        >
          Apply now
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-full bg-brand font-[family-name:var(--font-display)] text-sm font-semibold text-cream">
              H
            </span>
            <span className="font-[family-name:var(--font-display)] text-lg font-medium text-cream">
              Himalayan College
            </span>
          </div>
          <p className="max-w-[36ch] text-pretty text-sm leading-relaxed text-cream/60">
            A college in Nepal offering BBA, BICTE, BBM, and BBS. Helping new students find the right programme and build a clear direction.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="mb-3 font-medium text-cream">Programmes</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/$slug" params={{ slug: "bba" }} className="transition-colors hover:text-cream">
                  BBA
                </Link>
              </li>
              <li>
                <Link to="/courses/$slug" params={{ slug: "bicte" }} className="transition-colors hover:text-cream">
                  BICTE
                </Link>
              </li>
              <li>
                <Link to="/courses/$slug" params={{ slug: "bbm" }} className="transition-colors hover:text-cream">
                  BBM
                </Link>
              </li>
              <li>
                <Link to="/courses/$slug" params={{ slug: "bbs" }} className="transition-colors hover:text-cream">
                  BBS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-medium text-cream">Contact</h3>
            <ul className="space-y-2 text-cream/60">
              <li>admissions@himalayancollege.edu</li>
              <li>+977 1 555 0142</li>
              <li>Sun–Fri, 9:00–17:00</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background font-[family-name:var(--font-body)]">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
