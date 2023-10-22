import TitleCard from "../Share/TitleCard";
const Categories = () => {
  return (
    <div className="categ categap">
      <div className="cateNv horrorCard">
        <ul className="navlist">
          <span className="navListItems">
            <span>Horro</span> <i className="pi pi-discord"></i>
          </span>
        </ul>
      </div>

      <div className="flex justify-content-center align-items-center flex-column gap-1 w-12">
        <TitleCard title={"comedy"} />
        <TitleCard title={"Romance"} />
      </div>
    </div>
  );
};

export default Categories;
