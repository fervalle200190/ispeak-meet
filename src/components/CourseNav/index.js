import React from "react";

import CourseIcons from "../../components/CourseIcons";

// function ClassItem(clases) {
//   return(
//     <ol className="pl-5 font-medium flex flex-col">
//       {
//       clases.map((cls) => (
//         { cls.completada ? 
//           <li className="flex items-center p-2 text-gray-500 justify-between">
//             <div className="flex gap-3 items-center">
//               <div className="h-8 min-w-[2rem] bg-accent rounded-full flex items-center justify-center">
//                 <CourseIcons name="check" />
//               </div>
//               {cls.nombre}
//             </div>
//             {/* <span>{cls.video.duration}</span> */}
//           </li>
//         :
//           <li className="flex items-center p-2 justify-between">
//             <div className="flex gap-3 items-center">
//               <div className="h-8 min-w-[2rem] bg-accent rounded-full opacity-10 flex items-center justify-center">
//                 <CourseIcons name="play" />
//               </div>
//               {cls.nombre}
//             </div>
//             {/* <span>{cls.video.duration}</span> */}
//           </li>
//         }
//      ))
//     }
//     </ol>
//   )
// }

function ClassItem({clases = []}) {
  return (
    <ol className="pl-5 font-medium flex flex-col">
      {
      clases.map((cls) => (
          <li className="flex items-center p-2 text-gray-500 justify-between">
            <div className="flex gap-3 items-center">
              <div className="h-8 min-w-[2rem] bg-accent rounded-full flex items-center justify-center">
                <CourseIcons name="check" />
              </div>
              {cls.nombre}
            </div>
            {/* <span>{cls.video.duration}</span> */}
          </li>))
      }
    </ol>
  )
}

export default function CourseNav({ modules }) {
  return (
    <div className="h-96 scrollbar scrollbar-thin scrollbar-track-blue-900 scrollbar-thumb-gray-300 rtl">
      <div className="ltr pl-5">
        <nav className="flex flex-col gap-5">
          {modules.map((unit) => {
            return (
              <div className="flex flex-col">
                <h2 className="pb-2">{unit.nombre}</h2>
                <ClassItem clases={unit.clases} />
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
