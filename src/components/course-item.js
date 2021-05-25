import CourseLike from "./course-like";

const CourseItem = (props) => {
  console.log("Render ITEM", props.name);

  return (
    <div className="course-item">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <CourseLike />
    </div>
  );
};

export default CourseItem;
