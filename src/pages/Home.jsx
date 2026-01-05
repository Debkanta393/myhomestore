import React from 'react';
import Hero from '../../components/ui/Hero';
import Features from '../../components/ui/Features';
import Services from '../../components/ui/Services';
import Process from '../../components/ui/Process';
import Testimonials from '../../components/ui/Testimonials';
import Products from '../../components/ui/Products';
// import CTA from '../../components/ui/Cta';
import Gallery from '../../components/ui/Gallery';
import OverlapScrolling from '../../components/ui/OverlapScrolling';
import WhyChooseus from '../../components/ui/WhyChooseus';
import Trust from '../../components/ui/Trust';
import SeoFooterContent from '../../components/ui/Footer';

function Home() {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Hero />
        <Features />
        <Services />
        <Products/>
        <WhyChooseus />
      </div>
      
      {/* OverlapScrolling without overflow wrapper */}
      <OverlapScrolling />
      
      <div className="overflow-x-hidden">
        <Trust />
        <Gallery />
        <Testimonials />
        {/* <SeoFooterContent /> */}
      </div>
    </div>
  );
}

export default Home;
