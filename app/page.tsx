import { Link } from "@nextui-org/link";
import Image from "next/image";
import { button as buttonStyles } from "@nextui-org/theme";
import { Divider } from "@nextui-org/divider";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const EVENT = true;

  return (
    <>
      {EVENT && (
        <section className="grid lg:grid-cols-2 content-center min-h-screen">
          <div className="flex flex-col justify-center">
            <div className="min-h-[60vh] flex flex-col gap-4 justify-center text-center lg:text-start z-10">
              <h2>Upcoming project</h2>
              <div className="flex gap-4 justify-center lg:justify-start font-semibold text-green-600">
                <p>7th Edition</p>
                <Divider className="h-full" orientation="vertical" />
                <p>08 - 11 August</p>
                <Divider className="h-full" orientation="vertical" />
                <p>Beni Harchen</p>
              </div>
              <h1 className={title()}>Voyage Humanitaire</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                maiores doloremque quas. Aperiam, incidunt nobis?
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <Link
                  className={buttonStyles({
                    color: "success",
                  })}
                  href="/projects"
                >
                  View Projects
                </Link>
                <Link
                  className={buttonStyles({
                    color: "success",
                    variant: "bordered",
                  })}
                  href="/projects"
                >
                  View Projects
                </Link>
              </div>
            </div>
            {/* <svg className="absolute top-50 start-1/2 w-[1900px] transform -translate-x-1/2 z-0" width="2745" height="488" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127" className="stroke-neutral-300/50" stroke="currentColor" />
              <path d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136" className="stroke-neutral-300/50" stroke="currentColor" />
            </svg> */}
          </div>
          <div className="max-h-[60vh] overflow-hidden grid grid-cols-3 gap-4 justify-center items-center">
            {/* <div className="max-h-[60vh] overflow-clip"> */}
            <div className="h-full relative grid grid-cols-2 col-span-2 gap-4 overflow-hidden">
              <Image
                alt="map"
                className="object-cover w-full h-full rounded-lg col-span-2"
                height={500}
                src="/map.png"
                width={500}
              />
              <Image
                alt="map"
                className="object-cover w-full h-full rounded-lg"
                height={500}
                src="/map.png"
                width={500}
              />
              <Image
                alt="map"
                className="object-cover w-full h-full rounded-lg"
                height={500}
                src="/map.png"
                width={500}
              />
              <Image
                alt="map"
                className="object-cover w-full h-full rounded-lg col-span-2"
                height={500}
                src="/map.png"
                width={500}
              />
            </div>
            <div className="h-full">
              <Image
                alt="map"
                className="object-cover w-full h-full rounded-lg"
                height={500}
                src="/map.png"
                width={500}
              />
            </div>
          </div>
          {/* <Image
            alt="Map Image"
            src="/hero.jpg"
            fill
            className="object-cover absolute inset-0"
          /> */}
        </section>
      )}
      <section
        className={`flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 ${EVENT ? "min-h-[60vh]" : "min-h-screen"}`}
      >
        <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start justify-center">
          <div className="inline-block max-w-xl text-center lg:text-start justify-center mb-4">
            <h1 className={title()}>Browse the&nbsp;</h1>
            <h1 className={title({ color: "green" })}>ECDH&nbsp;</h1>
            <br />
            <h1 className={title()}>intervention map</h1>
            {/* <h2 className={subtitle({ class: "mt-4" })}>
              From Tangier, Tetouan, to all of Morocco
            </h2> */}
          </div>

          <div className="flex gap-3">
            <Link
              className={buttonStyles({
                color: "success",
                // radius: "full",
                variant: "shadow",
              })}
              href="/projects"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-3/5 flex flex-col items-center">
          <Image
            alt="Map of Morocco"
            className="rounded-lg"
            height={500}
            src="/map.png"
            width={500}
          />
        </div>
      </section>

      <section className="relative w-full min-h-[60vh] flex flex-col gap-4 justify-center items-center">
        <h1 className={title({ className: "relative" })}>
          Our Values
        <svg
          className="absolute -bottom-5 start-0 end-0"
          fill="none"
          preserveAspectRatio="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 500 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" />
        </svg>
        </h1>
        <h2 className={subtitle({ className: "font-bold" })}>
          Par les jeunes <br /> Pour les jeunes
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="w-full md:w-1/4 bg-white shadow-lg dark:bg-green-950 rounded-lg p-4 flex flex-col gap-4 items-center">
            <i>ICON</i>
            <h2>SUBTITLE</h2>
            <p>DESC</p>
          </div>
          <div className="w-full md:w-1/4 bg-white shadow-lg dark:bg-green-950 rounded-lg p-4 flex flex-col gap-4 items-center">
            <i>ICON</i>
            <h2>SUBTITLE</h2>
            <p>DESC</p>
          </div>
          <div className="w-full md:w-1/4 bg-white shadow-lg dark:bg-green-950 rounded-lg p-4 flex flex-col gap-4 items-center">
            <i>ICON</i>
            <h2>SUBTITLE</h2>
            <p>DESC</p>
          </div>
          <div className="w-full md:w-1/4 bg-white shadow-lg dark:bg-green-950 rounded-lg p-4 flex flex-col gap-4 items-center">
            <i>ICON</i>
            <h2>SUBTITLE</h2>
            <p>DESC</p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute top-0 end-0 transform lg:translate-x-32"
        >
          <svg
            className="w-40 h-auto sm:w-72"
            fill="none"
            height="636"
            viewBox="0 0 1115 636"
            width="1115"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-black dark:fill-white"
              d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
              fill="currentColor"
            />
            <path
              className="fill-green-500"
              d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
              fill="currentColor"
            />
            <path
              className="fill-green-900"
              d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <div aria-hidden="true" className="flex -z-[1] absolute start-0">
            <div className="bg-green-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-green-900 dark:opacity-20" />
          </div>

          <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
            <div className="hidden lg:block lg:col-span-2">
              <Image
                alt="Avatar"
                className="rounded-xl"
                height={1000}
                src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                width={1000}
              />
            </div>

            <div className="lg:col-span-4">
              <blockquote>
                <div className="relative text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-neutral-200">
                  <svg
                    aria-hidden="true"
                    className="absolute top-0 start-0 transform -translate-x-4 -translate-y-12 size-24 text-gray-200 dark:text-neutral-700 z-0"
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p className="relative z-10">
                    The desire to create ECDH emerged primarily to make a difference in society. I got involved in this project because I had envisioned something significant. In the end, I learned that it was just the beginning of an adventure that surpassed my expectations.
                  </p>
                </div>

                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="lg:hidden shrink-0">
                      <Image
                        alt="Avatar"
                        className="size-12 rounded-full"
                        height={1000}
                        src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        width={1000}
                      />
                    </div>
                    <div className="ms-4 lg:ms-0">
                      <p className="font-medium text-gray-800 dark:text-neutral-200">
                        Youssef Idrissi Ghalmi
                      </p>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        Founding President
                      </p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
