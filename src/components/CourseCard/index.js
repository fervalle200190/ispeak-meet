import { Link } from "wouter";

export default function CourseCard({
  id,
  title,
  students,
  duration,
  professor,
  progress,
}) {
  return (
    <Link
      href={`/courses/${id}`}
      className="flex w-64 flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition delay-[50ms] ease-in-out hover:scale-[1.01] hover:shadow-md"
    >
      <div>
        <div className="h-5 w-full rounded-xl bg-accent/30">
          <div
            className="flex h-full min-w-fit items-center rounded-xl bg-accent px-2 text-right text-primary"
            style={{ width: progress + "%" }}
          >
            <span className="w-full">{progress}%</span>
          </div>
        </div>
      </div>
      <div className="px-3 pb-2">
        <small className="text-xs text-gray-400">{students} students</small>
        <h3 className="mb-1 font-Barlow font-bold text-primary line-clamp-2">
          {title}
        </h3>
        <small className="text-xs text-gray-300">Professor</small>
        <div className="flex justify-between text-xs text-primary">
          <span>{professor}</span>
          <span>{duration}</span>
        </div>
      </div>
    </Link>
  );
}
