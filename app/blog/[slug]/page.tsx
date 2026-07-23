import { Clock, Calendar, Share2, CheckCircle2 } from "lucide-react";
import Navbar from "@/src/common/navbar";
import Footer from "@/src/common/footer";
import Image from "next/image";

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <article className="relative w-full pt-32 sm:pt-40">
      <Navbar />
      <div className="container">
        <div className="group relative w-full h-min flex-none bg-white border-2 border-white rounded-4xl sm:rounded-[40px] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] overflow-hidden z-0">
          {/* Header Metadata */}
          <div className="flex items-center flex-wrap gap-3 text-xs font-figtree font-semibold text-neutral-500 mb-4">
            <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full">
              Next.js & React
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Jul 18, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 6 min read
            </span>
          </div>

          {/* Blog Title */}
          <h1 className="font-poppins text-lg sm:text-4xl lg:text-5xl font-bold text-neutral-950 tracking-tight leading-[115%] mb-6">
            Why Next.js 19 & Server Actions Outperform Traditional Monoliths
          </h1>

          {/* Author Bio Header */}
          <div className="flex items-center justify-between pb-8 border-b border-neutral-100 lg:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-neutral-200">
                <Image
                  src="/owner.webp"
                  alt="Satish Rawat"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-poppins text-sm font-bold text-neutral-900">
                    Satish Rawat
                  </span>
                  <Image
                    src="/tick-icon.webp"
                    alt="Satish Rawat"
                    width={16}
                    height={16}
                    className="object-cover"
                  />
                </div>
                <span className="font-figtree text-xs text-neutral-500 font-medium">
                  Founder & Lead Developer • Technofy Systems
                </span>
              </div>
            </div>

            <button className="p-2.5 rounded-full bg-neutral-50 border border-neutral-100 text-neutral-600 hover:text-brand-primary hover:bg-neutral-100 transition-all">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          {/* Featured Image */}
          <div className="w-full h-80 sm:h-96 rounded-2xl mt-6 bg-[#f9f9f9] border border-neutral-100 flex items-center justify-center p-6 overflow-hidden mb-10">
            <img
              src="/full-stack-web-architectures.webp"
              alt="Next.js 19 Architecture"
              className="w-full h-full object-contain"
            />
          </div>

          {/* SEO Rich Editorial Article Content */}
          <div className="font-figtree text-base sm:text-lg text-neutral-700 leading-relaxed space-y-3">
            <p className="font-medium text-neutral-900 leading-loose">
              In modern enterprise web development, performance isn't just a
              technical metric—it is a core business driver. High latency
              directly correlates with drop-off rates and lost revenue.
            </p>

            <h2 className="font-poppins lg:text-2xl font-bold text-neutral-950 sm:pt-4">
              1. The Elimination of Client-Side JavaScript Bloat
            </h2>
            <p>
              By utilizing Next.js 19 Server Components, we keep massive
              rendering logic and third-party dependencies strictly on the
              server side. The browser receives lightweight, pre-rendered HTML
              along with minimal hydration bundles.
            </p>

            <h2 className="font-poppins lg:text-2xl font-bold text-neutral-950 sm:pt-4">
              2. Seamless Mutations via Server Actions
            </h2>
            <p>
              Forget API route boilerplates and redundant state management
              handlers. Server Actions allow seamless mutations directly from
              the React component tree while preserving type safety across
              TypeScript boundaries.
            </p>

            <blockquote className="p-6 bg-brand-primary/5 border-l-4 border-brand-primary rounded-r-2xl my-4 lg:my-8 font-poppins font-semibold text-neutral-900 text-lg">
              "Building custom Next.js applications ensures 99+ Core Web Vitals,
              bulletproof security, and complete design freedom without the
              vulnerability footprint of legacy CMS platforms."
            </blockquote>

            <h2 className="font-poppins lg:text-2xl font-bold text-neutral-950 sm:pt-4">
              3. Immediate SEO & Organic Growth Lift
            </h2>
            <p>
              Search engines prioritize sites with zero Cumulative Layout Shift
              (CLS) and fast Largest Contentful Paint (LCP). Custom web
              architectures allow complete control over dynamic OpenGraph tags,
              JSON-LD structured schema data, and instant sitemap
              synchronization.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </article>
  );
}
