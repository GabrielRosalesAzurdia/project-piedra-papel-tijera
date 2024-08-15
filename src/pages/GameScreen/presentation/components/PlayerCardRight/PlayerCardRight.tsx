import rockRight from "@/assets/piedra derecha.png";
import { Action } from "@/domain/entities/action";

export interface PlayerCardRightInterface {
  opponentName: string;
  avatar: string;
  actions: Action[];
  points:Number;
}

const PlayerCardRight: React.FC<PlayerCardRightInterface> = ({
  opponentName,
  avatar,
  actions,
  points
}) => {
  return (
    <section>
      {/* <div className="card bg-base-100 w-96 shadow-xl"> */}
      <div className="card bg-primary-content w-96 shadow-xl">
        <figure>
          <label className="swap text-9xl" id="swapright">
            {actions.map((element) => (
              <div
                className="swap-on hidden"
                id={element.name + "rightimage"}
                key={element.name + "leftimage"}
              >
                <img src={element.image} alt={element.name + "rightimage"} />
              </div>
            ))}
            <div className="swap-off">
              <img src={rockRight} alt="rockright" />
            </div>
          </label>
        </figure>
        <div className="card-body items-end text-end">
          <div className="flex flex-row justify-around">
            <div className="text-9xl">{points.toString()}</div>
            <span className="p-2"></span>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={avatar} />
              </div>
            </div>
          </div>
          <h2 className="card-title">{opponentName}</h2>
          <div className="card-actions">
            {actions.map((element) => (
              <button
                className="btn btn-secondary btn-outline no-animation"
                id={element.name + "right"}
                key={element.name + "right"}
              >
                {element.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerCardRight;
