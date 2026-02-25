
import Header3 from "../components/Header3";
import TestimonialSection from '../components/TestimonialSection'
import ContactMapCard from '../components/ContactMapCard'

export default function Contact() {
  return (
    <>
    <Header3/>
    <div className="space-y-10">
      <ContactMapCard/>
    <TestimonialSection/>
    </div>
    </>
  )
}
