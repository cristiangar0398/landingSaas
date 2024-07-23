import '../styles/main.scss'
import HomeSection from '@/components/home/main/home';
import ServicesSection from '@/components/home/main/services';

export default function Home() {
  return (
    <main>
      <HomeSection></HomeSection>
      <ServicesSection></ServicesSection>
    </main>
  );
}


