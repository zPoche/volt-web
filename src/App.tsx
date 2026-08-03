import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { ScrollProgress } from './components/ScrollProgress';
import { PageSplash } from './components/PageSplash';
import { LoadingProvider } from './loading/LoadingContext';
import {
  ContactSection,
  ExtrasSection,
  ImpressumSection,
  LightCtaSection,
  ModulesSection,
  OperationsSection,
  OutcomeSection,
  ProductSection,
  SiteFooter,
  TrustStrip,
  WorkflowSection,
} from './components/Sections';

export default function App() {
  return (
    <LoadingProvider>
      <div className="min-h-screen bg-background text-foreground">
        <PageSplash />
        <ScrollProgress />
        <SiteHeader />
        <main>
          <Hero />
          <TrustStrip />
          <ProductSection />
          <OutcomeSection />
          <ModulesSection />
          <ExtrasSection />
          <WorkflowSection />
          <OperationsSection />
          <LightCtaSection />
          <ContactSection />
          <ImpressumSection />
        </main>
        <SiteFooter />
      </div>
    </LoadingProvider>
  );
}
