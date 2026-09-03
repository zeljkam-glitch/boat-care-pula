import type { Metadata } from 'next';
import '../legal.css';

export const metadata: Metadata = { title: 'Privacy Policy | Boat Care Pula', alternates: { canonical: '/privacy' } };

export default function PrivacyPage() {
  return <main className="legalPage"><header><a href="/">Boat Care Pula</a><a href="mailto:boatcarepula@gmail.com">Contact</a></header><article><h1>Privacy Policy</h1><p>Last updated: 3 September 2026</p><h2>Information we receive</h2><p>When you contact Boat Care Pula by email, phone or WhatsApp, you may provide your name, contact details, boat details, marina, preferred visit schedule and other information needed to answer your enquiry or provide the agreed service.</p><h2>How we use it</h2><p>We use this information only to respond, prepare an offer, arrange and document the requested service, communicate about your boat and meet legal or accounting obligations. We do not sell personal information.</p><h2>Third-party services</h2><p>Communication and payment may involve WhatsApp, email providers or Revolut. Those providers process information under their own privacy terms.</p><h2>Retention and your rights</h2><p>Information is kept only as long as needed for the enquiry, service and applicable legal obligations. You may request access, correction or deletion where the law permits.</p><h2>Contact</h2><p>For privacy questions, contact <a href="mailto:boatcarepula@gmail.com">boatcarepula@gmail.com</a> or call <a href="tel:+385915033936">+385 91 503 3936</a>.</p></article></main>;
}
