import { Link } from "wouter"

import CourseIcons from "components/CourseIcons"

export default function CourseNavItems({ courseId, moduleId, materials = [] }) {
  return (
    <ol>
      {
        materials.map(({ id, nombre, completada}) => {
          return ( completada ?
            <li key={id} className="flex items-center p-2 text-gray-500 justify-between">
            <Link className="flex gap-3 items-center" href={`/courses/${courseId}/${moduleId}/${id}`}>
              <div className="h-8 min-w-[2rem] bg-accent rounded-full flex items-center justify-center">
                <CourseIcons name="check" />
              </div>
              <h4 className="font-semibold">{nombre}</h4>
            </Link>
            {/* <span>{cls.video.duration}</span> */}
          </li>
          :
          <li key={id} className="flex items-center p-2 justify-between">
             <Link className="flex gap-3 items-center" href={`/courses/${courseId}/${moduleId}/${id}`}>
               <div className="h-8 min-w-[2rem] bg-accent rounded-full opacity-10 flex items-center justify-center">
                 <CourseIcons name="play" />
               </div>
               <h4 className="font-semibold">{nombre}</h4>
             </Link>
             {/* <span>{cls.video.duration}</span> */}
         </li>
          )
      })
      }
    </ol>
  )
}