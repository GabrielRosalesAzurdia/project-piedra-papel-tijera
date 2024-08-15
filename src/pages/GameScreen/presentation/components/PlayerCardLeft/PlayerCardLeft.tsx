import paperleft from "@/assets/papel izquierda.png";
import rockleft from "@/assets/piedra izquierda.png";
import scissorsleft from "@/assets/tijera izquierda.png";
import { Action } from "@/domain/entities/action";

export interface PlayerCardLeftInterface {
  name: string;
  avatar: string;
  handleOnClick(action: Action): void;
  actions: Action[];
}

const PlayerCardLeft: React.FC<PlayerCardLeftInterface> = ({
  name,
  avatar,
  handleOnClick,
  actions,
}) => {
  return (
    <section>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <label className="swap text-9xl">
            <div className="swap-on" id="paperleftimage">
              <img src={paperleft} alt="paperleft" />
            </div>
            <div className="swap-on" id="scissorleftimage">
              <img src={scissorsleft} alt="scissorleft" />
            </div>
            <div className="swap-on" id="rockleftimage">
              <img src={rockleft} alt="rockleft" />
            </div>
            <div className="swap-off">
              <img src={rockleft} alt="rockleft" />
            </div>
          </label>
        </figure>
        <div className="card-body items-start text-start">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={avatar} />
            </div>
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
