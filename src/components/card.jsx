import LinkToButton from "./common/linkToButton";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={bizImage} className="card-img-top d-block" alt={bizName} style={{  height: "225px"}} />
      <div className="card-body" >
        <h5 className="card-title">{bizName}</h5>
        <p className="card-text">{bizDescription}</p>

        <ul className="list-group list-group-flush">
          <div className="list-group-item">{bizAddress}</div>
          <div className="list-group-item">{bizPhone}</div>
        </ul>

        <LinkToButton toLink={`/my-cards/edit/${_id}`} btnName = "Edit" btnColor = "success"/>
        <LinkToButton toLink={`/my-cards/delete/${_id}`} btnName = "Delete" btnColor = "danger "/>

      </div>
    </div>
  );
};

export default Card;