import { useState, useEffect } from "react";
import ReactPlayer from "react-player/vimeo";
import { Link } from "wouter";

import getCourseById from "services/getCourseById";
import getMaterialById from "services/getMaterialById";

import CourseIcons from "components/CourseIcons";

import "./styles.css"

// import CourseNav from "components/CourseNav";


function CourseNavItems({ courseId, materials = [] }) {
  return (
    <ol>
      {
        materials.map(material => {
          return ( material.completada ?
            <li key={material.id} className="flex items-center p-2 text-gray-500 justify-between">
            <div className="flex gap-3 items-center">
              <div className="h-8 min-w-[2rem] bg-accent rounded-full flex items-center justify-center">
                <CourseIcons name="check" />
              </div>
              {material.nombre}
            </div>
            {/* <span>{cls.video.duration}</span> */}
          </li>
          :
          <li key={material.id} className="flex items-center p-2 justify-between">
             <Link className="flex gap-3 items-center" href={`/courses/${courseId}/${material.id}`}>
               <div className="h-8 min-w-[2rem] bg-accent rounded-full opacity-10 flex items-center justify-center">
                 <CourseIcons name="play" />
               </div>
               {material.nombre}
             </Link>
             {/* <span>{cls.video.duration}</span> */}
         </li>
          )
      })
      }
    </ol>
  )
}

function CourseNav({ courseId, units = [] }) {
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

export default function ClassPage({ params }) {
  const { courseId, classId } = params;
  const [course, setCourse] = useState({});
  const [material, setMaterial] = useState({});

  useEffect(() => {
    getCourseById({ id: courseId }).then((course) => setCourse(course));
    getMaterialById({ id: classId }).then((material) => setMaterial(material));
  }, [classId, courseId]);

  return (
    <section className="bg-primary flex gap-5 pt-5 px-5 w-ful text-white">
      <div className="w-1/4">
        <header className="pl-5 h-20 flex flex-col gap-5">
          
          <Link href="/courses">{`<`} My classes</Link>
  
          <h2 className="font-medium text-lg">{course.nombre}</h2>
        </header>
        <CourseNav courseId={courseId} units={course.modulos} />
      </div>
      <div className="w-3/4 px-10 py-5 flex flex-col gap-5">
        <ReactPlayer url={material.linkVideo} height="100" width="100%" controls className="aspect-video overflow-hidden rounded-3xl"/>
        <h1 className="text-2xl font-semibold text-white font-Barlow">{material.nombre}</h1>

        {/* <iframe title={material.nombre} src={material.linkVideo} height="100" width="100%" controls className="aspect-video"/> */}
        
      </div>

    </section>
  );
}
