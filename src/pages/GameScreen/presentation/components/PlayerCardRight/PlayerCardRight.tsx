import paperRight from "@/assets/papel derecha.png";
import rockRight from "@/assets/piedra derecha.png";
import scissorsRight from "@/assets/tijera derecha.png";

export interface PlayerCardRightInterface {
  opponentName:string
  avatar:string
}

const PlayerCardRight: React.FC<PlayerCardRightInterface> = ({opponentName,avatar}) => {
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
            <button className="btn btn-secondary no-animation" id="paperrightbutton">Piedra</button>
            <button className="btn btn-secondary no-animation" id="paperrightbutton">Papel</button>
            <button className="btn btn-secondary no-animation" id="scissorrightbutton">Tijeras</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerCardRight;
