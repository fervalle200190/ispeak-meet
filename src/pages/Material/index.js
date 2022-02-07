import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import ReactPlayer from "react-player/vimeo";

import getCourseById from "services/getCourseById";
import getMaterialById from "services/getMaterialById";
import getCommentsByMaterialId from "services/getCommentsByMaterialId";

import CourseNav from "components/CourseNav";
import CourseIcons from "components/CourseIcons";

import "./styles.css";
import setMaterialComplete from "services/setMaterialComplete";

function MaterialContentSection({ courseId, course, isActive = false }) {
  return isActive ? (
    <section className="flex w-full items-center justify-center p-10">
      <CourseNav courseId={courseId} units={course.modulos} />
    </section>
  ) : (
    <></>
  );
}

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
    <div className="ml-5 mt-5 rounded-xl border border-accent p-5">
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
      className="w-full max-w-3xl rounded-xl border border-gray-400 p-5"
    >
      <header className="flex justify-between border-b-4 border-accent p-2">
        <div>
          <img url={comment.imagen} alt="" />
          <span className="font-semibold text-primary">{comment.alumno}</span>
        </div>
        <span>{comment.fecha}</span>
      </header>
      <p className="p-2">{comment.comentario}</p>
      <button className="pl-5 font-semibold text-primary">reply</button>
      <button
        className="pl-5 font-semibold text-primary"
        onClick={() => setIsActive(!isActive)}
      >
        comments ({comment.respuestas.length})
      </button>
      {isActive ? (
        comment.respuestas.map((reply) => (
          <Replys key={reply.id} reply={reply} />
        ))
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
    <div className="flex w-full flex-col items-center gap-5 p-10">
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
  const [isActive, setIsActive] = useState({
    about: true,
    comments: false,
    content: false,
  });
  const [location, setLocation] = useLocation();

  useEffect(() => {
    getCourseById({ id: courseId }).then((course) => setCourse(course));
    getMaterialById({ id: materialId }).then((material) =>
      setMaterial(material)
    );
    setIsActive({ about: true, comments: false });
  }, [materialId, courseId]);

  function handleNextMaterial() {
    const moduleI = parseInt(moduleId);
    const materialI = parseInt(materialId);
    const currentModule = course.modulos.find(({ id }) => id === moduleI);

    if (currentModule.clases.some(({ id }) => id === materialI + 1)) {
      const nextMaterial = currentModule.clases.find(
        ({ id }) => id === materialI + 1
      );
      setMaterialComplete({ materialId, classNum: material.claseNumero });
      setLocation(`/courses/${courseId}/${moduleId}/${nextMaterial.id}`);
    } else {
      const nextModule = course.modulos.find(({ id }) => id === moduleI + 1);
      setMaterialComplete({ materialId, classNum: material.claseNumero });
      setLocation(
        `/courses/${courseId}/${nextModule.id}/${nextModule.clases[0].id}`
      );
    }
  }

  return (
    <>
      <section className="flex max-h-[70vh] w-full gap-10 overflow-hidden bg-primary text-white md:p-10">
        <div className="hidden max-h-[70vh] w-1/3 flex-col md:flex">
          <header className="flex max-h-[20vh] flex-col gap-5 pl-5">
            <Link href="/courses" className="flex items-center gap-2">
              <CourseIcons name="back" /> My classes
            </Link>

            <h2 className="text-lg font-medium">{course.nombre}</h2>
          </header>
          <CourseNav courseId={courseId} units={course.modulos} />
        </div>
        <div className="flex max-h-[70vh] w-full max-w-[50rem] flex-col items-center md:w-2/3 md:pl-5">
          <ReactPlayer
            url={material.linkVideo}
            height="100%"
            width="100%"
            controls
            className="aspect-video"
          />
          <div className="flex w-full items-center justify-between gap-2 p-5">
            <h1 className="font-Barlow text-2xl font-semibold text-white">
              {material.nombre}
            </h1>
            <button
              className="w-40 rounded-3xl bg-accent p-2 text-primary"
              onClick={() => handleNextMaterial()}
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
              className=" border-accent font-Barlow text-lg font-semibold text-primary hover:border-b-4"
              onClick={() =>
                setIsActive({ about: true, comments: false, content: false })
              }
            >
              About
            </li>
            <li
              className=" border-accent font-Barlow text-lg font-semibold text-primary hover:border-b-4"
              onClick={() =>
                setIsActive({ about: false, comments: true, content: false })
              }
            >
              Comments
            </li>
            <li
              className=" border-accent font-Barlow text-lg font-semibold text-primary hover:border-b-4"
              onClick={() =>
                setIsActive({ about: false, comments: false, content: true })
              }
            >
              Content
            </li>
          </ul>
        </header>
        <MaterialAboutSection isActive={isActive.about} />
        <MaterialCommentsSection
          materialId={material.id}
          isActive={isActive.comments}
        />
        <MaterialContentSection
          courseId={courseId}
          course={course}
          isActive={isActive.content}
        />
      </section>
    </>
  );
}
