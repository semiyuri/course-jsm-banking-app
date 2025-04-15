"use client";

import React from "react";
import CountUp from "react-countup";

interface Props {
  amount: number;
}

const AnimatedCounter = ({ amount }: Props) => {
  return (
    <div className="w-full">
      <CountUp end={amount} decimals={2} decimal="," suffix="€" />
    </div>
  );
};

export default AnimatedCounter;
