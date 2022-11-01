import react from "react";
import storage from "../storage";
import "../styles/Order.scss";
import "../styles/PageOrders.scss";
import goBack from "../images/arrow.png";

import Order from "../component/order/Order";
import OrderSummary from "../component/order/OrderSummary";

export default function Orders() {
  const orders = storage.orders;

  const sum = orders.map(function (o) {
    return {
      time: o.datetime.slice(-5),
      no: o.no,
      totalCnt: getTotalCnt(o.menus),
    };
  });

  function getTotalCnt(menus) {
    let totalCnt = 0;
    menus.forEach((m) => {
      totalCnt += parseInt(m.cnt);
    });
    return totalCnt;
  }

  return (
    <div className="Orders">
      <div className="Orders-left">
        <div className="Order-Summ-List">
          {sum.map((s, index) => (
            <OrderSummary key={index} data={s} />
          ))}
        </div>
      </div>
      <div className="Orders-right">
        <div className="Order-info">
          <img src={goBack} alt="icon-back" />
          <div>
            2022-00-00 00:00:00 | 점포코드 | KDS-01 | 직원코드 | v.1.0.1
          </div>
        </div>
        <div className="Order-List">
          {orders.map((order, index) => (
            <Order key={index} wideFlag={false} data={order} />
          ))}
        </div>
      </div>
    </div>
  );
}
