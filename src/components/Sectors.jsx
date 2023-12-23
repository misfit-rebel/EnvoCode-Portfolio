import { sectors } from "./data";
const Sectors = () => {
  return (
    <main>
    <div className="container-fluid">
      <div className="row justify-content-center gx-0">
        {sectors.map((sector) => {
          const {img, id, name, description, text, button } = sector;
          return (
            <div key={id} className="col-lg-4 d-flex justify-content-center ">
              <div className="sector-cards">
                <img src= {img} alt="name" />
                <h5 className="mt-4">{name}</h5>
                <p>{description}</p>
                <div className="d-flex justify-content-between mt-5 text-white">
                <h6>{text}</h6>
                <button>{button}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
    </main>
  );
};
export default Sectors;
