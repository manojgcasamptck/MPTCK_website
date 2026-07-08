import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import type { PageContent } from "@/lib/data";

interface ContentPageProps {
  content: PageContent;
  image?: string;
  children?: React.ReactNode;
}

export default function ContentPage({ content, image, children }: ContentPageProps) {
  return (
    <>
      <PageHero title={content.title} subtitle={content.subtitle} image={image} />
      <section className="py-16">
      <div className="page-container max-w-5xl">
          <Reveal>
            <div className="prose prose-slate max-w-none">
              {content.content.map((para, i) => (
               <p key={i} className="body-text mb-5">
               {para}
             </p>
              ))}
              {content.bullets && (
                <ul className="space-y-2 mt-6">
                  {content.bullets.map((item) => (
                    <li
                    key={item}
                    className="body-text flex items-start gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
          {children}
        </div>
      </section>
    </>
  );
}
