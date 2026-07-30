import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { ScrollProgress } from './components/ScrollProgress';
import {
  ContactSection,
  ModulesSection,
  OperationsSection,
  ProductSection,
  SiteFooter,
  WorkflowSection,
} from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <ProductSection />
        <ModulesSection />
        <WorkflowSection />
        <OperationsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
