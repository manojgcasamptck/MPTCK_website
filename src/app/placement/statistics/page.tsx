import ContentPage from "@/components/ContentPage";
import PlacementChart from "@/components/PlacementChart";
import Reveal from "@/components/ui/Reveal";
import { pageContents } from "@/lib/data";

export default function PlacementStatisticsPage() {
  return (
    <>
      <ContentPage content={pageContents["/placement/statistics"]} />
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <h3 className="font-poppins font-bold text-primary-900 mb-4">Year-wise Placement Data</h3>
              <PlacementChart />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
