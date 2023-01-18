import { Download, Features, SectionWrapper } from "./components"; 
import assets from './assets'
import styles from "./styles/Global";

const App = () =>  {
  return (
    <>
      <SectionWrapper 
        title="Your own store of Nifty NFTs. Start growing and selling."
        description="Buy, store and collect NFTs. Exchange and earn crypto. Join 25+ million people using ProNef marketplace."
        showButton
        mockUpImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience the intuitive UI of the ProNef Marketplace. Smooth flow of colours and usability."
        mockUpImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices!"
        mockUpImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="A creative way to showcase the NFT store."
        description="Mock up app showing all NFTs available to purchase while the second displays all the details of specific NFTs."
        mockUpImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className={`px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04`}>
        <p className={`${styles.pText} ${styles.whiteText} font-bold`}>
          <span className="bold">
            Built-by-Bo {' '}
          </span>
          with ❤️

        </p>
      </div>
    </>
  );
}

export default App;
