const coursesData = [
  {
    name: "Javascript",
    img: "/img/javascript.png",
  },
  {
    name: "Typescript",
    img: "/img/typescript.png",
  },
  {
    name: "React",
    img: "/img/react.svg",
  },
];

const coursesMapped = coursesData.map((courseData, index) => ({
  ...courseData,
  id: courseData.name,
}));

export default coursesMapped;
