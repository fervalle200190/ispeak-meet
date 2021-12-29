import DashboardResume from "./DashboardResume";
import DashboardInfo from "./DashboardInfo";
import placeholder from "../assets/placeholder.png";

export default function DashboardSection () {
  return (
    <section className="flex p-10 gap-5 justify-between">
          <DashboardResume title="Illustrator: from beginner to expert" duration="26:30 - 1:10:13" thumbnail={placeholder}/>
          <DashboardInfo />
        </section>
  )
}