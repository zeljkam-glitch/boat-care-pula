import type { Metadata } from 'next';
import '../legal.css';

export const metadata: Metadata = { title: 'Impressum | Boat Care Pula', alternates: { canonical: '/impressum' } };

export default function ImpressumPage() {
  return <main className="legalPage"><header><a href="/">Boat Care Pula</a><a href="mailto:boatcarepula@gmail.com">Contact</a></header><article><h1>Impressum</h1><h2>Service</h2><p>Boat Care Pula<br/>Pula, Istria, Croatia</p><h2>Contact</h2><p>Email: <a href="mailto:boatcarepula@gmail.com">boatcarepula@gmail.com</a><br/>Phone: <a href="tel:+385915033936">+385 91 503 3936</a></p><h2>Website content</h2><p>Boat Care Pula is responsible for the content published on this website. For business, service or legal enquiries, please use the contact details above.</p></article></main>;
}
