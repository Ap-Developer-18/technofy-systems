import Footer from "@/src/common/footer";
import Navbar from "@/src/common/navbar";
import SectionHeader from "@/src/common/section-header";
import GetAQuoteForm from "@/src/get-a-quote";
import React from "react";

const page = () => {
  return (
    <article className="relative w-full pt-32 sm:pt-40">
      <Navbar />
      <section className="relative w-full container overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-b from-blue-50/50 via-indigo-50/30 to-transparent -z-10 pointer-events-none blur-3xl" />
        <SectionHeader
          badgeText="Home → Get A Quote"
          badgeVariant="primary"
          align="center"
          title={<span>Get a Personalized Quote for Your Project</span>}
          description="Submit the below form and we'll get back to you within 12 hours."
        />

        <GetAQuoteForm />
      </section>
      <Footer />
    </article>
  );
};

export default page;
