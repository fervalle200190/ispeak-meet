import CourseCard from "components/CourseCard";

export default function CourseList({ courses }) {
  return (
    <div className="flex flex-wrap gap-5">
      {courses.map(({ id, title, students, duration, professor, progress }) => {
        return (
          <CourseCard
            key={id}
            id={id}
            title={title}
            students={students}
            duration={duration}
            professor={professor}
            progress={progress}
          />
        );
      })}
    </div>
  );
}
