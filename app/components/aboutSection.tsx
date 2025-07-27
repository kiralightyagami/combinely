"use client"
import React from 'react'
import { Testimonials } from './testimonials'

export const AboutSection = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full max-w-6xl px-20 py-8 mt-10 mb-10">
      <div className="flex flex-col items-center justify-center text-white text-sm ">
      <Testimonials />
        <p className="-mt-8 text-white text-sm">Over 1,583+ accountants have already joined.</p>
      </div>

      <div className="border border-neutral-700 bg-neutral-800 rounded-md p-4 mt-10">
      <div className="flex flex-col items-center justify-center gap-4 max-w-sm">
        <h1 className="text-white text-4xl font-bold">About <span className="text-yellow-600">Combinely</span></h1>
        <p className="text-neutral-300 text-xs ">
          We're former accountants & engineers building AI automation for accounting firms.
        </p>
        <p className="text-neutral-300 text-xs ">
          AI won't replace accountants - it will amplify their expertise, letting them focus on 
          what matters most: judgment, relationships, and strategic guidance.
        </p>
        <p className="text-neutral-300 text-xs">
          Tomorrow's leading firms will build their entire service model around AI, creating a 
          fundamentally different kind of practice that achieves what was previously impossible: 
          scaling high-touch professional services without proportional headcount growth.
        </p>
        <p className="text-neutral-300 text-xs">
          We want to be part of this future and build it <em>with</em> accountants, not around them.
        </p>
      </div>
      </div>
      </div>
  )
}
