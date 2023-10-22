const TitleCard = ({ title }) => {
  return (
    <div className="TitleCardStyle cursor-pointer w-full pikabu">
      <ul className="navlist">
        <span className="navListItems">
          <span>{title}</span> <i className="pi pi-discord"></i>
        </span>
      </ul>
    </div>
  );
};

export default TitleCard;
