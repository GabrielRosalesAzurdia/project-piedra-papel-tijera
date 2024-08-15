import rockleft from "@/assets/piedra izquierda.png";
import { Action } from "@/domain/entities/action";

export interface PlayerCardLeftInterface {
  name: string;
  avatar: string;
  handleOnClick(action: Action): void;
  actions: Action[];
  points:Number;
}

const PlayerCardLeft: React.FC<PlayerCardLeftInterface> = ({
  name,
  avatar,
  handleOnClick,
  actions,
  points,
}) => {
  return (
    <section>
      {/* <div className="card bg-base-100  w-96 shadow-xl"> */}
      <div className="card bg-primary-content w-90 shadow-xl">
        <figure>
          <label className="swap text-9xl" id="swapleft">
            {actions.map((element) => (
              <div
                className="swap-on hidden"
                id={element.name + "leftimage"}
                key={element.name + "leftimage"}
              >
                <img src={element.image} alt={element.name + "leftimage"} />
              </div>
            ))}
            <div className="swap-off" id="default">
              <img src={rockleft} alt="rockleft" />
            </div>
          </label>
        </figure>
        <div className="card-body items-start text-start">
          <div className="flex flex-row justify-around">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={avatar} />
              </div>
            </div>
            <span className="p-2"></span>
            <div className="text-9xl">{points.toString()}</div>
          </div>
          <h2 className="card-title">{name}</h2>
          <div className="card-actions">
            {actions.map((element) => (
              <button
                className="btn btn-primary btn-outline"
                id={element.name + "left"}
                key={element.name + "left"}
                onClick={() => handleOnClick(element)}
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

export default PlayerCardLeft;
