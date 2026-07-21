import Blogs from "@/src/blogs";
import Footer from "@/src/common/footer";
import Navbar from "@/src/common/navbar";
import Faqs from "@/src/faqs";
import Hero from "@/src/hero";
import HowWeWork from "@/src/how-we-work";
import Metrics from "@/src/metrics";
import Problems from "@/src/problems";
import ProfileBadge from "@/src/profile-badge";
import Projects from "@/src/projects";
import Services from "@/src/services";
import ToolsIntegrations from "@/src/tools-integrations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <HowWeWork />
      {/* <Metrics /> */}
      <Services />
      <Problems />
      <ToolsIntegrations />
      <Blogs />
      <Faqs />
      <Footer />
      <ProfileBadge />
    </>
  );
}
