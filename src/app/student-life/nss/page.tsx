import ContentPage from "@/components/ContentPage";
import { pageContents } from "@/lib/data";

export default function Page() {
  return <ContentPage content={pageContents["/student-life/nss"]} />;
}
