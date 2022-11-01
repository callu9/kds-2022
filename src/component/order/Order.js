import react from "react";
import viewLarger from "../../images/view-larger.png";
import detailCaution from "../../images/caution.png";
import printActive from "../../images/print-active.png";
import printInactive from "../../images/print-inactive.png";

export default function Order(props) {
  return (
    <div className={props.wideFlag ? "order-wide" : "order-high"}>
      <div className="header">
        <div className="header-left">
          <div className="order-num">#{props.data.no}</div>
          <div className="order-time">{props.data.datetime}</div>
        </div>
        <div className="header-right">
          <div className="btn-larger">
            <img src={viewLarger} alt="icon-larger" />
          </div>
          <div className="timer">5:20</div>
        </div>
      </div>
      <div className="body">
        <div className="body-list">
          {props.data.menus.map((m) => (
            <div className="body-item-order">
              <div className="body-item-order-menu">
                <div className="left">
                  <div className="menu-name">{m.name}</div>
                  {m.details && (
                    <div className="menu-detail-area">
                      <div className="menu-detail-icon">
                        <img src={detailCaution} alt="icon-detail" />
                      </div>
                      <div className="menu-detail">{m.details}</div>
                    </div>
                  )}
                </div>
                <div className="right">
                  <div className="menu-cnt">{m.cnt}</div>
                  <div className="menu-print">
                    <img
                      src={m.printable ? printActive : printInactive}
                      alt="icon-print"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <div className="btn-area">
          <div className="btn-print">
            <img src={printInactive} alt="icon-print" />
          </div>
          <div className="btn-complete">조리 완료</div>
        </div>
      </div>
    </div>
  );
}
