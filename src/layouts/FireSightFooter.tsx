import Link from "next/link";
import Image from "next/image";
import "./layout.css";
import { ReactNode } from "react";
export default function FireSightFooter({
  children,
}: {
  children: ReactNode | null;
}) {
  return (
    <>
      {/* Desktop Footer */}
      <div className="px-14 pb-14 w-full relative m-0 overflow-hidden hidden lg:block">
        {children}
        <div className="footer-box pt-[60px] pb-6 relative overflow-hidden">
          {/* Main Content Grid */}
          <div className="grid grid-cols-5 gap-8 px-12 pb-8 border-b border-[#23263A] border-none text-white text-sm">
            {/* Logo & Social */}
            <div className="flex flex-col items-start gap-6 mt-10">
              <Link href="/">
                <Image
                  src="/images/footer-logo.svg"
                  alt="firesight.ai"
                  width={120}
                  height={120}
                  className="h-[100px] w-auto"
                />
              </Link>
              <div className="flex gap-2">
                <Link href="https://www.linkedin.com/company/firesightai/about/?viewAsMember=true" aria-label="LinkedIn">
                  <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={30} height={30} />
                </Link>
                <Link href="/" aria-label="cb">
                  <Image src="/images/icons/cb.svg" alt="cb" width={30} height={30} />
                </Link>
                <Link href="https://twitter.com/FiresightAi/" aria-label="Twitter">
                  <Image src="/images/icons/x.svg" alt="X" width={30} height={30} />
                </Link>
                <Link href="https://www.discord.com/" aria-label="Discord">
                  <Image src="/images/icons/discord.svg" alt="Discord" width={30} height={30} />
                </Link>
              </div>
            </div>

            {/* Navigation Columns */}
            <div>
              <h3 className="font-bold mb-4">Pricing</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/pricing" className="hover:underline">Solutions</Link></li>
                <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                <li><Link href="/product" className="hover:underline">Product</Link></li>
                <li><Link href="/desktop-app" className="hover:underline">Desktop App</Link></li>
                <li><Link href="/professional-development-hub" className="hover:underline">Professional Development Hub</Link></li>
              </ul>
              <p className="mt-6">Contact Us: hello@firesight.ai</p>
            </div>

            <div>
              <h3 className="font-bold mb-4">
                 <Image
                src="/images/icons/dashboard.svg"
                alt="Dashboard Icon"
                className="inline-block mr-1"
                width={13}
                height={13}
              />Dashboard</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/dashboard" className="hover:underline"> <Image
                src="/images/icons/chat.svg"
                alt="Chat Icon"
                className="inline-block mr-1"
                width={13}
                height={13}
              />Chat</Link></li>
                <li><Link href="/news" className="hover:underline"><Image
                src="/images/news.svg"
                alt="News Icon"
                className="inline-block mr-1"
                width={13}
                height={13}
              />News</Link></li>
                <li><Link href="/work" className="hover:underline">Work</Link></li>
                <li><Link href="/graph" className="hover:underline">Graph</Link></li>
                <li><Link href="/pulse" className="hover:underline">Pulse</Link></li>
              </ul>
            </div>

            {/* Location Columns */}
            <div>
              <h3 className="font-bold mb-4">FLORIDA</h3>
              <div className="text-sm text-[#A0AEC0]">
                <p>7600 Dr Phillips Blvd Bay 158, Orlando,</p>
                <p>Florida, 32819, UNITED STATES</p>
              </div>
              <h3 className="font-bold mt-6 mb-4">LONDON</h3>
              <div className="text-sm text-[#A0AEC0]">
                <p>North West House, 119 Marylebone Rd,</p>
                <p>London, NW1 5PU, UNITED KINGDOM</p>
              </div>
              <h3 className="font-bold mb-4">MANCHESTER</h3>
              <div className="text-sm text-[#A0AEC0]">
                <p>Hanover Building Corporation St,</p>
                <p>Manchester, M4 4AN, UNITED KINGDOM</p>
              </div>
            </div>

            <div>

              <h3 className="font-bold mt-6 mb-4">DELAWARE</h3>
              <div className="text-sm text-[#A0AEC0]">
                <p>1180 N Town Center Dr #100,Las Vegas</p>
                <p>Nevada, 89144, UNITED STATES</p>
              </div>
              <h3 className="font-bold mt-6 mb-4">CANBERRA</h3>
              <div className="text-sm text-[#A0AEC0]">
                <p>1 Moore St, Canberra,</p>
                <p>ACT, 2601, AUSTRALIA</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between px-12 pt-6 text-sm">
            <div className="flex items-center gap-3">
              <Link href="http://dvincigroup.com/">
                <Image src="/images/icons/dvinci.svg" alt="D'VINCI" width={17} height={17} />
              </Link>
              <span className="text-[#A0AEC0] border-l border-white pl-3">
                Crafted by D&apos;Vinci
              </span>
            </div>

            <div className="flex items-center gap-8 text-[#A0AEC0]">
              <Link href="/terms" className="underline hover:text-white">Terms & Conditions</Link>
              <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>
              <span>firesight.ai 2023. All Rights Reserved.</span>
            </div>

            <div className="flex items-center gap-2">
              <Link href="http://dvincigroup.com/">
                <Image src="/images/D vinci.svg" alt="D'VINCI GROUP" width={200} height={200} className="mb-7" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Tablet Footer */}
      <div className="w-full relative m-0 overflow-hidden hidden md:block lg:hidden">
        {children}
        <div className="footer-box py-12 relative overflow-hidden">
          <div className="px-8 font-mono">
            {/* Top Section: 3-column horizontal layout, mono font, uppercase headings, hex icons */}
            <div className="grid grid-cols-3 gap-8 items-start mb-8">
              {/* Logo, tagline, social icons, contact */}
              <div className="flex flex-col items-center">
                <Link href="/">
                  <Image
                    src="/images/footer-logo.svg"
                    alt="firesight.ai"
                    width={120}
                    height={120}
                    className="h-[90px] w-auto mb-2"
                  />
                </Link>
                {/* <span className="text-white text-2xl font-bold tracking-wide mb-1 uppercase">firesight.ai</span> */}
                {/* <span className="text-[#A0AEC0] text-base mb-2 tracking-wider">— work less —</span> */}
                <div className="flex gap-3 mb-2">
                  <Link href="https://www.linkedin.com/company/firesightai/about/?viewAsMember=true" aria-label="LinkedIn">
                    <span className="bg-[#23263A] rounded-lg p-2 inline-flex items-center justify-center border border-[#A0AEC0]" style={{clipPath:'polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0% 50%)'}}>
                      <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={22} height={22} />
                    </span>
                  </Link>
                  <Link href="/" aria-label="cb">
                    <span className="bg-[#23263A] rounded-lg p-2 inline-flex items-center justify-center border border-[#A0AEC0]" style={{clipPath:'polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0% 50%)'}}>
                      <Image src="/images/icons/cb.svg" alt="cb" width={22} height={22} />
                    </span>
                  </Link>
                  <Link href="https://twitter.com/FiresightAi/" aria-label="Twitter">
                    <span className="bg-[#23263A] rounded-lg p-2 inline-flex items-center justify-center border border-[#A0AEC0]" style={{clipPath:'polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0% 50%)'}}>
                      <Image src="/images/icons/x.svg" alt="X" width={22} height={22} />
                    </span>
                  </Link>
                  <Link href="https://www.discord.com/" aria-label="Discord">
                    <span className="bg-[#23263A] rounded-lg p-2 inline-flex items-center justify-center border border-[#A0AEC0]" style={{clipPath:'polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0% 50%)'}}>
                      <Image src="/images/icons/discord.svg" alt="Discord" width={22} height={22} />
                    </span>
                  </Link>
                </div>
                <span className="text-white font-bold text-base mb-1"><span className="text-white">Contact Us:</span> <span className="text-[#A0AEC0]">hello@firesight.ai</span></span>
              </div>

              {/* Pricing List */}
              <div className="flex flex-col items-start">
                <h3 className="font-bold mb-3 text-lg uppercase tracking-wide text-white">Pricing</h3>
                <ul className="space-y-1 text-base text-white">
                  <li><Link href="/pricing" className="hover:text-[#A0AEC0]">Solutions</Link></li>
                  <li><Link href="/about-us" className="hover:text-[#A0AEC0]">About Us</Link></li>
                  <li><Link href="/product" className="hover:text-[#A0AEC0]">Product</Link></li>
                  <li><Link href="/desktop-app" className="hover:text-[#A0AEC0]">Desktop App</Link></li>
                  <li><Link href="/professional-development-hub" className="hover:text-[#A0AEC0]">Professional Development Hub</Link></li>
                </ul>
              </div>

              {/* Dashboard List with icons */}
              <div className="flex flex-col items-start">
                <h3 className="font-bold mb-3 text-lg uppercase tracking-wide text-white flex items-center">
                  <Image src="/images/icons/dashboard.svg" alt="Dashboard Icon" width={22} height={22} className="inline-block mr-2" />
                  Dashboard
                </h3>
                <ul className="space-y-1 text-base text-white">
                  <li><Link href="/dashboard" className="hover:text-[#A0AEC0] flex items-center"><Image src="/images/icons/chat.svg" alt="Chat Icon" width={18} height={18} className="inline-block mr-2" />Chat</Link></li>
                  <li><Link href="/news" className="hover:text-[#A0AEC0] flex items-center"><Image src="/images/icons/news.svg" alt="News Icon" width={18} height={18} className="inline-block mr-2" />News</Link></li>
                  <li><Link href="/work" className="hover:text-[#A0AEC0] flex items-center"><Image src="/images/icons/work.svg" alt="Work Icon" width={18} height={18} className="inline-block mr-2" />Work</Link></li>
                  <li><Link href="/graph" className="hover:text-[#A0AEC0] flex items-center"><Image src="/images/icons/graph.svg" alt="Graph Icon" width={18} height={18} className="inline-block mr-2" />Graph</Link></li>
                  <li><Link href="/pulse" className="hover:text-[#A0AEC0] flex items-center"><Image src="/images/icons/pulse.svg" alt="Pulse Icon" width={18} height={18} className="inline-block mr-2" />Pulse</Link></li>
                </ul>
              </div>
            </div>

            {/* Divider line */}
            <hr className="border-t border-[#23263A] my-6" />

            {/* Locations: 2-column grid, uppercase headings, mono font */}
            <div className="grid grid-cols-2 gap-8 text-white mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-base uppercase mb-1">FLORIDA</h3>
                  <div className="text-[#A0AEC0] text-sm leading-relaxed">
                    7600 Dr Phillips Blvd Bay 158, Orlando,<br />
                    Florida, 32819, UNITED STATES
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-base uppercase mb-1">MANCHESTER</h3>
                  <div className="text-[#A0AEC0] text-sm leading-relaxed">
                    Hanover Building Corporation St,<br />
                    Manchester, M4 4AN, UNITED KINGDOM
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-base uppercase mb-1">LONDON</h3>
                  <div className="text-[#A0AEC0] text-sm leading-relaxed">
                    North West House, 119 Marylebone Rd,<br />
                    London, NW1 5PU, UNITED KINGDOM
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-base uppercase mb-1">DELAWARE</h3>
                  <div className="text-[#A0AEC0] text-sm leading-relaxed">
                    1180 N Town Center Dr #100, Las Vegas<br />
                    Nevada, 89144, UNITED STATES
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-base uppercase mb-1">CANBERRA</h3>
                  <div className="text-[#A0AEC0] text-sm leading-relaxed">
                    1 Moore St, Canberra,<br />
                    ACT, 2601, AUSTRALIA
                  </div>
                </div>
              </div>
            </div>

            {/* Divider line */}
            <hr className="border-t border-[#23263A] my-6" />

            {/* D'Vinci Group Section, centered, mono font, divider lines */}
            <div className="flex flex-col items-center justify-center mb-8">
              <div className="flex items-center w-full justify-center mb-2">
                <span className="text-[#A0AEC0] text-base mr-4">Part of</span>
                <Image src="/images/D vinci.svg" alt="D'VINCI GROUP" width={80} height={32} />
                <span className="text-[#A0AEC0] text-base ml-4">Network</span>
              </div>
            </div>

            {/* Bottom Section: copyright, terms, privacy, mono font */}
            <div className="flex flex-col items-center justify-center mt-2 text-xs text-[#A0AEC0] font-mono">
              <div className="mb-2">firesight.ai 2023. All Rights Reserved.</div>
              <div className="flex gap-6 mb-2">
                <Link href="/terms" className="underline hover:text-white">Terms & Conditions</Link>
                <Link href="/privacy" className="underline hover:text-white">Privacy Policy</Link>
              </div>
            </div>

            {/* Divider line */}
            <hr className="border-t border-[#23263A] my-6" />

            {/* // ...existing code... */}
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="w-full relative m-0 overflow-hidden block md:hidden">
        {children}
        <div className="footer-box py-12 relative overflow-hidden">
          <div className="relative flex flex-col text-white px-8 items-center space-y-8">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/footer-logo.svg"
                alt="firesight.ai"
                width={120}
                height={120}
                className="h-[80px] w-auto"
              />
            </Link>
            <hr className="border-t border-[#23263A] my-6 w-full" />

            {/* Navigation Grid */}
            <div className="grid grid-cols-2 gap-12 w-full max-w-sm text-center">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="font-bold text-sm">Pricing</div>
                <div className="font-bold text-sm">Solutions</div>
                <div className="font-bold text-sm">About Us</div>
                <div className="font-bold text-sm">Product</div>
                <div className="font-bold text-sm">Desktop App</div>
                <div className="font-bold text-sm">Professional Development Hub</div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="font-bold text-sm">Dashboard</div>
                <div className="font-bold text-sm">Chat</div>
                <div className="font-bold text-sm">News</div>
                <div className="font-bold text-sm">Work</div>
                <div className="font-bold text-sm">Graph</div>
                <div className="font-bold text-sm">Pulse</div>
              </div>
            </div>
            <hr className="border-t border-[#23263A] my-6 w-full" />

            {/* Contact */}
            <div className="text-center">
              <span className="text-sm text-[#A0AEC0]">Contact Us: </span>
              <span className="text-sm font-bold">hello@firesight.ai</span>
            </div>
            <hr className="border-t border-[#23263A] my-6 w-full" />

            {/* Locations */}
            <div className="space-y-6 text-center max-w-xs">
              <div>
                <div className="font-bold text-sm mb-1">FLORIDA</div>
                <div className="text-xs text-[#A0AEC0] leading-relaxed">
                  7600 Dr Phillips Blvd Bay 158, Orlando,<br />
                  Florida, 32819, UNITED STATES
                </div>
              </div>

              <div>
                <div className="font-bold text-sm mb-1">MANCHESTER</div>
                <div className="text-xs text-[#A0AEC0] leading-relaxed">
                  Hanover Building Corporation St,<br />
                  Manchester, M4 4AN, UNITED KINGDOM
                </div>
              </div>

              <div>
                <div className="font-bold text-sm mb-1">LONDON</div>
                <div className="text-xs text-[#A0AEC0] leading-relaxed">
                  North West House, 119 Marylebone Rd,<br />
                  London, NW1 5PU, UNITED KINGDOM
                </div>
              </div>

              <div>
                <div className="font-bold text-sm mb-1">DELAWARE</div>
                <div className="text-xs text-[#A0AEC0] leading-relaxed">
                  1180 N Town Center Dr #100, Las Vegas<br />
                  Nevada, 89144, UNITED STATES
                </div>
              </div>

              <div>
                <div className="font-bold text-sm mb-1">CANBERRA</div>
                <div className="text-xs text-[#A0AEC0] leading-relaxed">
                  1 Moore St, Canberra,<br />
                  ACT, 2601, AUSTRALIA
                </div>
              </div>
            </div>
            <hr className="border-t border-[#23263A] my-6 w-full" />

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              <Link href="https://www.linkedin.com/company/firesightai/about/?viewAsMember=true" aria-label="LinkedIn">
                <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={32} height={32} />
              </Link>
              <Link href="/" aria-label="cb">
                <Image src="/images/icons/cb.svg" alt="cb" width={32} height={32} />
              </Link>
              <Link href="https://twitter.com/FiresightAi/" aria-label="Twitter">
                <Image src="/images/icons/x.svg" alt="X" width={32} height={32} />
              </Link>
              <Link href="https://www.discord.com/" aria-label="Discord">
                <Image src="/images/icons/discord.svg" alt="Discord" width={32} height={32} />
              </Link>
            </div>
            <hr className="border-t border-[#23263A] my-6 w-full" />

            {/* D'Vinci Group Section */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-[#A0AEC0]">
                <span>Part of</span>
                <Link href="http://dvincigroup.com/">
                  <Image src="/images/D vinci.svg" alt="D'VINCI GROUP" width={140} height={48} />
                </Link>
                <span>Network</span>
              </div>
            </div>
            <hr className="border-t border-[#23263A] my-6 w-full" />

            {/* Bottom Section */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Link href="http://dvincigroup.com/">
                  <Image src="/images/icons/dvinci.svg" alt="D'VINCI" width={16} height={16} />
                </Link>
                <span className="text-xs text-[#A0AEC0] border-l border-white pl-2">
                  Crafted by <span className="text-red-500 font-bold">D&apos;Vinci</span>
                </span>
              </div>

              <div className="space-y-2 text-xs text-[#A0AEC0]">
                <div>firesight.ai 2023. All Rights Reserved.</div>
                <div className="flex justify-center gap-4">
                  <Link href="/terms" className="underline">Terms & Conditions</Link>
                  <Link href="/privacy" className="underline">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
