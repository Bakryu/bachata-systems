'use client';

import ContactFormHero from '@/components/sections/ContactFormHero';
import QuickContactInfo from '@/components/sections/QuickContactInfo';
import FAQSection from '@/components/sections/FAQ';

export default function ContactsPage() {
  return (
    <>
      <ContactFormHero />
      <QuickContactInfo />

      <FAQSection page="contacts" />
    </>
  );
}
