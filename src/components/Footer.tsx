import Link from "next/link";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-800 bg-gray-950 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400 dark:text-gray-400">
            {SITE.copyright}
          </p>
          <div className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition hover:text-white dark:text-gray-400 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
