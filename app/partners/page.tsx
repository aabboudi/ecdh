import { title, subtitle } from "@/components/primitives";

export default function PartnersPage() {
  return (
    <main>
      <section className="flex flex-col justify-center text-center">
        <h1 className={title()}>Partners &amp; Sponsors</h1>
        <p>None of our project would have been possible without</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-center items-center my-12">
        <div className="col-span-full">
          <h2
            className={subtitle({
              class: "text-center text-black dark:text-white font-bold",
            })}
          >
            <span className="text-yellow-700 dark:text-yellow-600">Gold</span>
            Sponsors
          </h2>
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 justify-center items-center my-12">
        <div className="col-span-full">
          <h2
            className={subtitle({
              class: "text-center text-black dark:text-white font-bold",
            })}
          >
            Educational Partners
          </h2>
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 justify-center items-center my-12">
        <div className="col-span-full">
          <h2
            className={subtitle({
              class: "text-center text-black dark:text-white font-bold",
            })}
          >
            <span className="text-zinc-500 dark:text-zinc-500">Silver</span>
            Sponsors
          </h2>
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-8 gap-4 justify-center items-center my-12">
        <div className="col-span-full">
          <h2
            className={subtitle({
              class: "text-center text-black dark:text-white font-bold",
            })}
          >
            <span className="text-amber-900 dark:text-amber-700">Bronze</span>
            Sponsors
          </h2>
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
        <div className="max-w-full h-36 m-3 border-2 rounded border-gray-400">
          Insert sponsor logo
        </div>
      </section>
    </main>
  );
}
