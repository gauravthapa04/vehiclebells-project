import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/components/assets/css/style.css';
import '../src/components/assets/css/homepage.css';
import '../src/components/assets/css/login.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../src/components/assets/css/welcome.css';
import '../src/components/assets/css/dashboard.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { SessionProvider } from "next-auth/react"
import { alertService } from '@/services';

alertService.clear();
export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    
    <SessionProvider session={session}>
        <Component {...pageProps}/>
    </SessionProvider>
  )
}