import CourseNavItems from "components/CourseNavItems";

export default function CourseNav({ courseId, units = [] }) {
  return (
    <div className="h-96 scrollbar scrollbar-thin scrollbar-track-blue-900 scrollbar-thumb-gray-300 rtl">
      <div className="ltr pl-5">
        <nav className="flex flex-col gap-5">
          {units.map((unit) => (
            <div key={unit.id} className="flex flex-col">
            <h2 className="pb-2">{unit.nombre}</h2>
            <CourseNavItems courseId={courseId} materials={unit.clases} />
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}