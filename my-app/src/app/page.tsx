import '../styles/main.scss'
import NavBar from '../components/shared/header/navBar'
import HomeSection from '@/components/home/main/home';
import ServicesSection from '@/components/home/main/services';
import Footer from '@/components/shared/footer/footer';

export default function Home() {
  return (
    <main>
      <HomeSection></HomeSection>
      <ServicesSection></ServicesSection>
    </main>
  );
}


