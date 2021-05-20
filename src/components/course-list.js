import CourseItem from "./course-item";
import "./course-list.css";

const CourseList = (props) => {
  const courseItems = [];

  for (let i = 0; i < props.numeroElementos; i++) {
    courseItems.push(<CourseItem indice={i} />);
  }

  return (
    <div className="course-list-container">
      <h2>{props.tituloLista}</h2>
      {courseItems}
    </div>
  );
};

export default CourseList;
