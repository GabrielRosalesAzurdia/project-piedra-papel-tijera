import paperRight from "@/assets/papel derecha.png";
import rockRight from "@/assets/piedra derecha.png";
import scissorsRight from "@/assets/tijera derecha.png";
import { Action } from "@/domain/entities/action";

export interface PlayerCardRightInterface {
  opponentName:string
  avatar:string
  actions: Action[]
}

const PlayerCardRight: React.FC<PlayerCardRightInterface> = ({opponentName,avatar,actions}) => {
  return (
    <section>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <label className="swap text-9xl">
            <div className="swap-on" id="paperrightimage">
              <img src={paperRight} alt="paperright" />
            </div>
            <div className="swap-on" id="scissorrightimage">
              <img src={scissorsRight} alt="scissorright" />
            </div>
            <div className="swap-on" id="rockrightimage">
              <img src={rockRight} alt="rockright" />
            </div>
            <div className="swap-off">
              <img src={rockRight} alt="rockright" />
            </div>
          </label>
        </figure>
        <div className="card-body items-end text-end">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={avatar} />
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
