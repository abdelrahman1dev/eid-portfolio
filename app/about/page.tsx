"use client";
import React from 'react'
import Card from '../components/Card'
import { Suspense } from 'react';
import CardSkeleton from '../components/CardSkeleton';

function AboutSec() {
  return (
    <div className='bg-none w-full flex flex-col items-center py-20 gap-10'>
      <Suspense fallback={<CardSkeleton />}>
        <Card />
      </Suspense>
    </div>
  )
}

export default AboutSec