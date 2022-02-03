import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import ReactPlayer from "react-player/vimeo";

import getCourseById from "services/getCourseById";
import getMaterialById from "services/getMaterialById";
import getCommentsByMaterialId from "services/getCommentsByMaterialId";

import CourseNav from "components/CourseNav";
import CourseIcons from "components/CourseIcons";

import "./styles.css";

function MaterialAboutSection({ isActive = true }) {
  return isActive ? (
    <div className="w-full">
      <p>About</p>
    </div>
  ) : (
    <></>
  );
}

function Replys({ reply }) {
  return (
    <div
      key={reply.id}
      className="ml-5 border-[1px] rounded-xl border-accent p-5 mt-5"
    >
      <header className="flex justify-between border-b-2 border-accent">
        <div>
          <img url={reply.imagen} alt="" />
          <span className="font-semibold text-primary">{reply.alumno}</span>
        </div>
        <span>{reply.fecha}</span>
      </header>
      <p className="p-2">{reply.comentario}</p>
    </div>
  );
}

function Comment({ comment }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      key={comment.id}
      className="border-[1px] border-gray-400 rounded-xl p-5 max-w-3xl"
    >
      <header className="flex justify-between border-b-4 border-accent p-2">
        <div>
          <img url={comment.imagen} alt="" />
          <span className="font-semibold text-primary">{comment.alumno}</span>
        </div>
        <span>{comment.fecha}</span>
      </header>
      <p className="p-2">{comment.comentario}</p>
      <button className="font-semibold text-primary pl-5">reply</button>
      <button
        className="font-semibold text-primary pl-5"
        onClick={() => setIsActive(!isActive)}
      >
        comments ({comment.respuestas.length})
      </button>
      {isActive ? (
        comment.respuestas.map((reply) => <Replys reply={reply} />)
      ) : (
        <></>
      )}
    </div>
  );
}

function CommentsList({ comments = [] }) {
  return comments.map((comment) => {
    return <Comment key={comment.id} comment={comment} />;
  });
}

function MaterialCommentsSection({ materialId, isActive = false }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByMaterialId({ id: materialId }).then((comments) =>
      setComments(comments)
    );
  }, [isActive, materialId]);

  return isActive ? (
    <div className="w-full flex flex-col items-center p-10 gap-5">
      <CommentsList comments={comments} />
    </div>
  ) : (
    <></>
  );
}

export default function MaterialPage({ params }) {
  const { courseId, moduleId, materialId } = params;
  const [course, setCourse] = useState({});
  const [material, setMaterial] = useState({});
  const [isActive, setIsActive] = useState({ about: true, comments: false });
  const [location, setLocation] = useLocation();

  useEffect(() => {
    getCourseById({ id: courseId }).then((course) => setCourse(course));
    getMaterialById({ id: materialId }).then((material) =>
      setMaterial(material)
    );
    setIsActive({ about: true, comments: false });
  }, [materialId, courseId]);

  function handleNextClass() {
    const moduleI = parseInt(moduleId);
    const materialI = parseInt(materialId);
    const currentModule = course.modulos.find(({ id }) => id === moduleI);

    if (currentModule.clases.some(({ id }) => id === materialI + 1)) {
      const nextMaterial = currentModule.clases.find(
        ({ id }) => id === materialI + 1);
      setLocation(`/courses/${courseId}/${moduleId}/${nextMaterial.id}`);
    } else {
      const nextModule = course.modulos.find(
        ({ id }) => id === moduleI + 1);
      setLocation(
        `/courses/${courseId}/${nextModule.id}/${nextModule.clases[0].id}`
      );
    }
  }

  return (
    <>
      <section className="max-h-[70vh] bg-primary flex py-10 px-10 w-full text-white overflow-hidden gap-10">
        <div className="w-1/3 max-h-[70vh]">
          <header className="max-h-[20vh] pl-5 flex flex-col gap-5">
            <Link href="/courses" className="flex items-center gap-2">
              <CourseIcons name="back" /> My classes
            </Link>

            <h2 className="font-medium text-lg">{course.nombre}</h2>
          </header>
          <CourseNav courseId={courseId} units={course.modulos} />
        </div>
        <div className="w-2/3 pl-5 flex flex-col items-center gap-5 max-h-[70vh] max-w-[50rem]">
          <div className="rounded-3xl overflow-hidden h-full max-w-full">
            <ReactPlayer
              url={material.linkVideo}
              height="100%"
              width="100%"
              controls
              className="aspect-video"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <h1 className="text-2xl font-semibold text-white font-Barlow">
              {material.nombre}
            </h1>
            <button
              className="p-2 w-40 text-primary bg-accent rounded-3xl"
              onClick={() => handleNextClass()}
            >
              next class
            </button>
          </div>
        </div>
      </section>
      <section>
        <header className="h-20 w-full border-b-[1px] border-gray-400 px-10">
          <ul className="flex h-full items-center gap-5">
            <li
              className=" font-Barlow font-semibold text-lg text-primary hover:border-b-4 border-accent"
              onClick={() => setIsActive({ about: true, comments: false })}
            >
              {" "}
              About{" "}
            </li>
            <li
              className=" font-Barlow font-semibold text-lg text-primary hover:border-b-4 border-accent"
              onClick={() => setIsActive({ about: false, comments: true })}
            >
              {" "}
              Comments{" "}
            </li>
          </ul>
        </header>
        <MaterialAboutSection isActive={isActive.about} />
        <MaterialCommentsSection
          materialId={material.id}
          isActive={isActive.comments}
        />
      </section>
    </>
  );
}
