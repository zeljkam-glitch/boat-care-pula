import type { Metadata } from 'next';
import '../legal.css';

export const metadata: Metadata = { title: 'Cookie Policy | Boat Care Pula', alternates: { canonical: '/cookies' } };

export default function CookiesPage() {
  return <main className="legalPage"><header><a href="/">Boat Care Pula</a><a href="mailto:boatcarepula@gmail.com">Contact</a></header><article><h1>Cookie Policy</h1><p>Last updated: 3 September 2026</p><h2>Current use of cookies</h2><p>This website does not currently use advertising cookies or non-essential analytics cookies. Essential technical storage may be used only where needed to deliver the website and remember an action you request.</p><h2>External services</h2><p>Following a link to WhatsApp, Instagram or Revolut takes you to a third-party service. That service may use cookies according to its own policy.</p><h2>Future changes</h2><p>If optional analytics or advertising tools are introduced, this policy and the consent controls must be updated before those tools are activated.</p><h2>Contact</h2><p>Questions can be sent to <a href="mailto:boatcarepula@gmail.com">boatcarepula@gmail.com</a>.</p></article></main>;
}
