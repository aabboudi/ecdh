import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="mt-auto bg-green-950 w-full dark:bg-neutral-950">
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Image
              src="/ecdh_logo.svg"
              alt="ECDH Logo"
              width={100}
              height={100}
              aria-label="Brand"
              className="transform -translate-x-5 -translate-y-5"
            />
            <p className="text-sm transform -translate-y-12">Par les jeunes. <br /> Pour les jeunes.</p>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-semibold text-gray-100 uppercase dark:text-neutral-100">About Us</h4>

            <div className="mt-3 grid space-y-3">
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Pricing</a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Changelog</a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Yearbook<span className="inline-block text-xs bg-green-700 text-white py-1 px-2 rounded-lg">2024</span></a></p>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-xs font-semibold text-gray-100 uppercase dark:text-neutral-100">Contribute</h4>

            <div className="mt-3 grid space-y-3">
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Join us</a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Blog</a></p>
              <p><a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Join us</a></p>
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="text-xs font-semibold text-gray-100 uppercase dark:text-neutral-100">Newsletter</h4>

            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">Subscribe</label>
                  <input type="text" id="hero-input" name="hero-input" className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter your email" />
                </div>
                <a className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-700 text-white hover:bg-green-700 focus:outline-none focus:bg-green-950 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  Subscribe
                </a>
              </div>
              <p className="mt-3 text-xs text-gray-400">
                Updates or invites. Never spam.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400 dark:text-neutral-400">© {new Date().getFullYear() || "2024"} ECDH. All rights reserved.</p>
          </div>

          <div className="inline- gap-4 flex">
            <a className="text-sm text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Terms</a>
            <a className="text-sm text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Privacy</a>
            <a className="text-sm text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200" href="#">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
