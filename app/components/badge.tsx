"use client"
import React from 'react'
import Image from 'next/image'

export const Badge = () => {
  return (
    <div className="shadow-input text-base mx-w-xs w-fit flex items-center gap-2 justify-center rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 mt-40 mb-10">
        <p className="font-medium text-neutral-400">
          Backend by
        </p>{" "}
        <Image
          src="https://modelence.com/ycombinator.svg"
          alt="backend"
          width={100}
          height={100}
        />
      </div>
  )
}
