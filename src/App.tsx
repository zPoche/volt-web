import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { ScrollProgress } from './components/ScrollProgress';
import { PageSplash } from './components/PageSplash';
import { LoadingProvider } from './loading/LoadingContext';
import {
  ContactSection,
  ExtrasSection,
  ImpressumSection,
  ModulesSection,
  OperationsSection,
  ProductSection,
  SiteFooter,
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
          <ProductSection />
          <ModulesSection />
          <ExtrasSection />
          <WorkflowSection />
          <OperationsSection />
          <ContactSection />
          <ImpressumSection />
        </main>
        <SiteFooter />
      </div>
    </LoadingProvider>
  );
}
