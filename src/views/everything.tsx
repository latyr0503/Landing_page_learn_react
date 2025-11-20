 import TitleSection from "../components/title";
import Button from "../components/button";

export default function Everything() {
  return (
    <div className="flex items-center justify-between container gap-6">
      <div className="w-1/2">
        <TitleSection
          titre="Everything you can do in a physical classroom"
          sousTitre=" you can do with Skilline"
          description="Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system."
        />
        <Button
          text="Learn More"
          className="bg-transparent border-b-2 py-2 rounded-none"
        />
      </div>
      <img src="/images/placeholder.svg" className="w-1/2 h-[400px] object-cover" alt="" />
    </div>
  );
}
