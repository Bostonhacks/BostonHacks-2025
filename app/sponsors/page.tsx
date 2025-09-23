import Background from "@/components/Background";

import SponsorshipHeader from "@/components/SponsorshipHeader";
import SponsorshipOpportunities from "@/components/SponsorshipOpportunities";
import Footer from "@/components/Footer";
import SponsorsAbout from "@/components/SponsorsAbout";

const SponsorsPage = () => {
  return (
    <>
      <Background>
        <SponsorshipHeader />
        <main className="flex flex-col">
          <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <SponsorshipOpportunities />
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <SponsorsAbout />
          </div>
          {/* <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div> */}
          {/* <div id="about" className="flex flex-col items-center justify-center min-h-screen text-white">section</div> */}

        </main>
      </Background>
      <Footer />
    </>

  )
}

export default SponsorsPage;
