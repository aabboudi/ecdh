"use client";

import { motion } from "framer-motion";

export const CurvedUnderline = () => {
  return (
    <svg
      className="absolute -top-3 start-0 end-0"
      fill="none"
      preserveAspectRatio="none"
      stroke="currentColor"
      strokeWidth={5}
      viewBox="0 0 500 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={{ pathLength: 1 }}
        d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
        initial={{ pathLength: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};

export const ScribbleUnderline = () => {
  return (
    <svg
      className="absolute -top-6 start-0 end-0"
      fill="none"
      preserveAspectRatio="none"
      stroke="currentColor"
      strokeWidth={5}
      viewBox="0 0 500 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={{ pathLength: 1 }}
        d="M9.3,127.3c49.3-3,150.7-7.6,199.7-7.4c121.9,0.4,189.9,0.4,282.3,7.2C380.1,129.6,181.2,130.6,70,139 c82.6-2.9,254.2-1,335.9,1.3c-56,1.4-137.2-0.3-197.1,9"
        initial={{ pathLength: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};

export const SquiggleUnderline = () => {
  return (
    <svg
      className="absolute -top-3 start-0 end-0"
      fill="none"
      preserveAspectRatio="none"
      stroke="currentColor"
      strokeWidth={5}
      viewBox="0 0 800 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={{ pathLength: 1 }}
        d="M25.112102508544922,196.4125518798828C33.61434400558472,196.2944645436605,72.56351873397827,193.39012603759767,89.68608856201172,195.51568603515625C106.80865839004517,197.64124603271483,139.21523365020752,213.3826528676351,155.1569366455078,212.55604553222656C171.0986396408081,211.72943819681802,191.15992251078288,189.59191563924153,210.76231384277344,189.23765563964844C230.364705174764,188.88339564005534,284.5515521494548,211.63676325480142,304.0358581542969,209.86546325683594C323.520164159139,208.09416325887045,330.4035807800293,175.31239893595378,358.744384765625,175.7847442626953C387.0851887512207,176.25708958943684,485.1554173787435,213.21672345479328,519.282470703125,213.45289611816406C553.4095240275064,213.68906878153484,592.1942961629231,176.16141868591308,617.9371948242188,177.57846069335938C643.6800934855144,178.99550270080567,694.6053327433268,222.56202580769857,714.7981567382812,224.21524047851562C734.9909807332357,225.86845514933268,763.8609510294597,194.62181615193686,771.3004150390625,190.134521484375"
        fill="none"
        initial={{ pathLength: 0 }}
        stroke='url("#SvgjsLinearGradient1001")'
        strokeLinecap="round"
        strokeWidth="11"
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      />
      <defs>
        <linearGradient id="SvgjsLinearGradient1001">
          <stop offset="0" stopColor="hsl(265, 55%, 30%)" />
          <stop offset="1" stopColor="hsl(265, 55%, 60%)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const WavyUnderline = () => {
  return (
    <svg
      className="separator m-auto my-10"
      viewBox="0 0 687 155"
      width="300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="7"
      >
        <path
          d="M20 58c27-13.33333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.66666667 80.5 20"
          opacity=".1"
        />
        <path
          d="M20 78c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"
          opacity=".2"
        />
        <path
          d="M20 98c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"
          opacity=".6"
        />
        <path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" />
      </g>
    </svg>
  );
};
