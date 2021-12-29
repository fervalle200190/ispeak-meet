import ListCard from "./XListCard";

export default function CourseListSection ({title, courses}) {
  return (
    <section className="flex flex-col gap-5 py-5 px-10 w-full">
          <div className="flex gap-5 items-center">
            <h2 className="text-2xl font-semibold font-Barlow text-primary mr-5">
            {title}
            </h2>
            <a
              href
              className="py-1 px-2 text-sm text-primary bg-accent rounded-xl font-medium"
            >
              Browse All
            </a>
          </div>
          <ul className="flex flex-wrap justify-between gap-5">
           {courses.map(course =>
            <ListCard
              title={course.title}
              students={course.students}
              author={course.author}
              duration={course.duration}
              thumbnail={course.thumbnail}
            />)
           } 
          </ul>
        </section>
  );
}