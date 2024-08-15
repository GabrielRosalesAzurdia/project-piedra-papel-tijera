import paperleft from "@/assets/papel izquierda.png";
import rockleft from "@/assets/piedra izquierda.png";
import scissorsleft from "@/assets/tijera izquierda.png";

export interface PlayerCardLeftInterface {
  opponentName:string
  avatar:string
}

const PlayerCardLeft: React.FC<PlayerCardLeftInterface> = ({opponentName,avatar}) => {
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
          <h2 className="card-title">{opponentName}</h2>
          <div className="card-actions">
            <button className="btn btn-primary" id="paperleftbutton">Piedra</button>
            <button className="btn btn-primary" id="paperleftbutton">Papel</button>
            <button className="btn btn-primary" id="scissorleftbutton">Tijeras</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerCardLeft;
