import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-green-950 w-full dark:bg-neutral-950">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Image
              alt="ECDH Logo"
              aria-label="Brand"
              className="transform -translate-x-5 -translate-y-5"
              height={100}
              src="/ecdh_logo.svg"
              width={100}
            />
            <p className="text-sm text-white transform -translate-y-12">
              Par les jeunes. <br /> Pour les jeunes.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-semibold text-gray-100 uppercase dark:text-neutral-100">
              Impact
            </h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  SDGs
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Timeline
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Yearbook
                  <span className="inline-block text-xs bg-green-800 text-white py-1 px-2 rounded-lg">
                    2024
                  </span>
                </Link>
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-semibold text-gray-100 uppercase dark:text-neutral-100">
              Contribute
            </h4>

            <div className="mt-3 grid space-y-3">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Join
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Donate
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  href="#"
                >
                  Sponsor
                </Link>
              </p>
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="text-xs font-semibold text-gray-100 uppercase dark:text-neutral-100">
              Newsletter
            </h4>

            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
                <div className="w-full">
                  <label className="sr-only" htmlFor="hero-input">
                    Subscribe
                  </label>
                  <input
                    className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    id="hero-input"
                    name="hero-input"
                    placeholder="Enter your email"
                    type="text"
                  />
                </div>
                <Button
                  className="border border-transparent bg-green-800 text-white hover:bg-green-950 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                  radius="sm"
                  // isLoading
                >
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-xs text-gray-400">
                Updates or invites. Never spam.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400 dark:text-neutral-400">
              © {new Date().getFullYear() || "2024"} ECDH. All rights reserved.
            </p>
          </div>

          <div className="inline- gap-4 flex">
            <Link
              className="text-sm text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              Terms
            </Link>
            <Link
              className="text-sm text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-sm text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              href="#"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
