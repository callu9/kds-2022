import react from "react";
import "../../styles/OrderSummary.scss";

export default function OrderSummary(props) {
  return (
    <div className="order-summary">
      <div className="order-summary-content">
        <div className="time">
          <div className="left">주문시간</div>
          <div className="right">{props.data.time}</div>
        </div>
        <div className="no">
          <div className="left">주문번호</div>
          <div className="right">{props.data.no}</div>
        </div>
        <div className="menu-cnt">
          <div className="left">메뉴수량</div>
          <div className="right">{props.data.totalCnt}</div>
        </div>
      </div>
    </div>
  );
}
