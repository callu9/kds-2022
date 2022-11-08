
import storage from "../storage";
import "../styles/PagePickups.scss"
import goBack from "../images/arrow.png";
import { Link } from "react-router-dom";

export default function Pickups() {
  const orders = storage.orders.filter(o => o.status===0);
  const pickups = storage.orders.filter(o => o.status===1);

  return(
    <div className="Pickups">
      <div className="goback">
        <Link to="/">
          <img src={goBack} alt="go-back" />
        </Link>
      </div>
      <div className="not-ready">
        <div>준비 중</div>
        <hr />
        <div className="order-no-list">
          {orders.map((o, index) => (
            <div key={index} className="order-no-list-item">
              <div className="left">{o.no}</div>
              <div className="right">
                <div className="btn-del">삭제</div>
                <div className="btn-call">호출</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ready">
        <div>준비 완료</div>
        <hr />
        <div className="order-no-list">
        {pickups.map((p, index) => (
            <div key={index} className="order-no-list-item">
              <div className="left">{p.no}</div>
              <div className="right">
                <div className="btn-call">재호출</div>
                <div className="btn-del">픽업완료</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}