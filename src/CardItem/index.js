import "./index.css";

const CardItem = (props) => {
  const { cardDetails, deleteUser } = props;
  const { title, description, imgUrl, className, id } = cardDetails;

  const deleteItem = () => deleteUser(id);

  return (
    <li className={className}>
      <h1 className="title">{title}</h1>
      <p className="paragraph">{description}</p>
      <div className="items-container">
        <img src={imgUrl} className="imageurl" alt="title" />
        <button className="delete-button" type="button" onClick={deleteItem}>
          I'm not Interested
        </button>
      </div>
    </li>
  );
};

export default CardItem;
