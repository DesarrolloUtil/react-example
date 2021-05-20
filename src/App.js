import CourseList from "./components/course-list";

const App = () => {
  return (
    <div>
      <h1>Desarrollo Útil</h1>
      <CourseList tituloLista="Lista Index" numeroElementos={12} />
    </div>
  );
};

export default App;
