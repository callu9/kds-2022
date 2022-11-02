import React from "react";
import { Link } from "react-router-dom";

import "../styles/PageMain.scss";

export default function Main() {
  return (
    <div className="Main">
      <div className="Main-info">
        일시 2022-00-00 00:00 | 점포코드 0000 | 기기명 KDS-01 | 직원코드
        00000000 | 프로그램 버전 v.1.0.1
      </div>
      <div className="Main-btn-area">
        <Link to="/orders">
          <div className="btn-orders">
            <div className="btn-content">
              <strong>주방용 화면</strong>
              <br />
              바로가기 →
            </div>
          </div>
        </Link>
        <Link to="/pickups">
          <div className="btn-pickups">
            <div className="btn-content">
              <strong>고객호출 화면</strong>
              <br />
              바로가기 →
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
