import { createContext, useState } from "react";
import coursesMapped from "../data/courses";
import CourseItem from "./course-item";
import "./course-list.css";

const LikeContext = createContext("LikeContext");

const CourseList = (props) => {
  const [coursesData, setCoursesData] = useState(coursesMapped);
  const [likeIcon, setLikeIcon] = useState("❤️");

  const courseItems = coursesData.map((courseData, index) => (
    <CourseItem
      key={courseData.id}
      name={courseData.name}
      img={courseData.img}
      likeIcon={likeIcon}
    />
  ));

  console.log(courseItems);

  return (
    <LikeContext.Provider value={{ likeIcon, setLikeIcon }}>
      <div className="course-list-container">
        <ComponenteInventado />
        <h2>{props.tituloLista}</h2>
        {courseItems}
        <button
          onClick={() =>
            setCoursesData(
              coursesData.filter((dataValue, index) => index !== 1)
            )
          }
        >
          Eliminar 2
        </button>
      </div>
    </LikeContext.Provider>
  );
};

export default CourseList;
