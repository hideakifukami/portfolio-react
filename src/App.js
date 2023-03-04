import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { footerData } from "./data";
import GlobalStyle from "./styles/global"

const App = () => {
  return (
      <>
        <Header />
        <MainContent />
        <Footer hrefEmail={footerData.hrefEmail} email={footerData.email} description={footerData.description} title={footerData.title} copyright={footerData.copyright}/>
        <GlobalStyle />
      </>
  );
}

export default App;

