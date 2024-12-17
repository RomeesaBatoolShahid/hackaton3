
import Browse from '@/Components/Browse';
import OurHappyCustomers from '@/Components/Feedback';
import HeroSection from '@/Components/Hero';
import NewArrivals from '@/Components/NewArrivals';
import Tagline from '@/Components/Tagline';
import TopSelling from '@/Components/TopSelling';
import React from 'react';


export default function page() {
  return (
    <div>
      <HeroSection />
      <Tagline />
      <NewArrivals />
      <TopSelling />
      <Browse />
      <OurHappyCustomers />
     
    </div>
  )
}
