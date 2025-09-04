"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'futuristicAndOutOfBox',
      colorTemplate: 2,
      textAnimation: 'slide',
    }}>
      <NavbarLayoutSplitBottom 
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={40}
        buttonText="Start Free Trial"
        onButtonClick={() => { /* handle click */ }}
        navItems={[
          { name: 'hero', id: 'hero' },
          { name: 'about', id: 'about' },
          { name: 'how-to-buy', id: 'how-to-buy' },
          { name: 'tokenomics', id: 'tokenomics' },
          { name: 'footer', id: 'footer' }
        ]} 
        className="bg-transparent"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero 
          title="Welcome to NovaDesk"
          description="Experience a seamless SaaS platform that elevates productivity."
          tagLabel="Innovation"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout 
          title="About NovaDesk"
          descriptions={["NovaDesk is your go-to SaaS solution for managing your tasks and enhancing collaboration.", "Our platform integrates seamlessly into your workflows, ensuring efficiency."]} 
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D 
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics 
          title="Tokenomics Overview"
          description="Understand the key metrics driving our growth and stability."
          tokenData={[{ value: "1M", description: "Total Supply" }, { value: "500K", description: "Circulating Supply" }, { value: "$10M", description: "Market Cap" }]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis 
          logoSrc="/images/logo.svg"
          logoAlt="NovaDesk Logo"
          logoText="NovaDesk"
          columns={[
            { items: [ { label: 'Privacy Policy', onClick: () => { /* handle click */ } }, { label: 'Terms of Service', onClick: () => { /* handle click */ } } ]},
            { items: [ { label: 'Contact Us', onClick: () => { /* handle click */ } }, { label: 'Support', onClick: () => { /* handle click */ } } ]},
            { items: [ { label: 'FAQs', onClick: () => { /* handle click */ } }, { label: 'Careers', onClick: () => { /* handle click */ } } ]}
          ]} 
          copyrightText="© 2023 NovaDesk. All rights reserved."
          onPrivacyClick={() => { /* handle click */ }}
          className="bg-transparent"
        />
      </div>
    </SiteThemeProvider>
  );
}
