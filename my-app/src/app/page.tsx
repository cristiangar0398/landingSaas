import '../styles/main.scss'
import NavBar from '../components/shared/header/navBar'
import HomeSection from '@/components/home/main/home';
import ServicesSection from '@/components/home/main/services';
import ContactForm from '@/components/shared/contacts/ContactForm';

export default function Home() {
  return (
    <main>
      <HomeSection></HomeSection>
      <ServicesSection></ServicesSection>
      <ContactForm></ContactForm>
    </main>
  );
}


