import EnquiryCard from "./EnquiryCard";

// import EnquiryCard from "./EnquiryCard";

export default function StickyPageEnquiry() {
  return (
    <div className="hidden lg:block fixed right-6 top-24 z-40">
      <div className="w-[360px]">
        <EnquiryCard />
      </div>
    </div>
  );
}
