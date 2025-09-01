use client

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'highlight' }}>
      <NavbarStyleApple
        logoSrc="/images/logo.svg"
        logoAlt="MemeCoin Spark Logo"
        brandName="MemeCoin Spark"
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' }
        ]}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to MemeCoin Spark!"
          subtitle="Join the meme revolution today!"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="MemeCoin Spark is the latest in fun, playful cryptocurrency, focused on community engagement and dynamic growth. Join us to discover, invest, and celebrate the future of memes!"
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Explore the distribution and utilities of MemeCoin Spark!"
          cardItems={[
            { id: 1, title: 'Total Supply', description: '1 Billion Tokens' },
            { id: 2, title: 'Liquidity', description: '20% Allocated' },
            { id: 3, title: 'Development', description: '15% Allocated' },
            { id: 4, title: 'Marketing', description: '10% Allocated' },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="MemeCoin Spark Logo"
          logoText="MemeCoin Spark"
          columns={[
            { items: [{ label: 'Privacy Policy', onClick: () => alert('Privacy clicked') }, { label: 'Terms of Service', onClick: () => alert('Terms clicked') }] },
            { items: [{ label: 'Twitter', onClick: () => alert('Twitter clicked') }, { label: 'Reddit', onClick: () => alert('Reddit clicked') }] },
            { items: [{ label: 'Discord', onClick: () => alert('Discord clicked') }, { label: 'Telegram', onClick: () => alert('Telegram clicked') }] },
          ]}
          copyrightText="© 2023 MemeCoin Spark"
          onPrivacyClick={() => alert('Privacy policy clicked!')}
        />
      </div>
    </SiteThemeProvider>
  );
}