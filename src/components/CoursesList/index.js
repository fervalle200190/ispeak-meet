import CourseCard from "components/CourseCard";

export default function CourseList({ courses }) {
  return (
    <div className="flex flex-wrap gap-5">
      {courses.map(
        ({
          id,
          title,
          students,
          duration,
          professor,
          porcentajeCompletado,
        }) => {
          console.log(porcentajeCompletado);
          return (
            <CourseCard
              key={id}
              id={id}
              title={title}
              students={students}
              duration={duration}
              professor={professor}
              progress={porcentajeCompletado}
            />
          );
        }
      )}
    </div>
  );
}
