import Footer from '../../components/Footer';
import { SwipeSlider, Empresa, Promociones, Testimonios, Ubicacion } from '../landingPage/components';

const LandingPage = () => {
  return (
    <>
      <SwipeSlider />
      <Promociones />
      <Empresa />
      <Testimonios />
      <Ubicacion />
      <Footer />
    </>
  )
}

export default LandingPage