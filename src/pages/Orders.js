import React, { useState } from "react";
import { Link } from "react-router-dom";

import storage from "../storage";
import "../styles/PageOrders.scss";
import "../styles/Order.scss";

import goBack from "../images/arrow.png";
import highInactive from "../images/high-inactive.png";
import highActive from "../images/high-active.png";
import wideInactive from "../images/wide-inactive.png";
import wideActive from "../images/wide-active.png";

import Order from "../component/order/Order";
import OrderSummary from "../component/order/OrderSummary";

export default function Orders() {
  const [wideFlag, setWideFlag] = useState(false);

  const orders = storage.orders.filter(o => o.status===0);

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
          <div className="Order-info-left">
            <Link to="/">
              <img src={goBack} alt="icon-back" />
            </Link>
            <div>
              2022-00-00 00:00:00 | 점포코드 | KDS-01 | 직원코드 | v.1.0.1
            </div>
          </div>
          <div className="Order-info-right">
            {wideFlag ? (
              <div>
                <img
                  src={highInactive}
                  alt="icon-high"
                  onClick={() => setWideFlag(!wideFlag)}
                />
                <img src={wideActive} alt="icon-wide" />
              </div>
            ) : (
              <div>
                <img src={highActive} alt="icon-high" />
                <img
                  src={wideInactive}
                  alt="icon-wide"
                  onClick={() => setWideFlag(!wideFlag)}
                />
              </div>
            )}
          </div>
        </div>
        <div className={wideFlag ? "Order-List-ver" : "Order-List-hor"}>
          {orders.map((order, index) => (
            <Order key={index} wideFlag={wideFlag} data={order} />
          ))}
        </div>
      </div>
    </div>
  );
}
