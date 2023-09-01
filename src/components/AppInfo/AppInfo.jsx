import "./AppInfo.css";

export const AppInfo = ({ employees, increased }) => {
  return (
    <>
      <section className="app-info">
        <h1>Учет сотрудников в компании N</h1>
        <h2>Общее число сотрудников: {employees} </h2>
        <h2>Премию получат: {increased}</h2>
      </section>
    </>
  );
};
