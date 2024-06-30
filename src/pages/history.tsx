import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HistoryView from "@/components/HistoryView";

export default function History() {
  return (
    <div className="">
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-[80%] flex justify-center py-12">
          <HistoryView />
        </div>
      </div>
      <Footer />
    </div>
  );
}
