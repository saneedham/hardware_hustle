import styles from "@/styles/Turn.module.css";

export default function Turn({ id }) {
  return (
    <div class={`${styles.turn}`}>
      <div class={`${styles.thead}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.iconCol}`}></div>
          <div class={`${styles.th}`}>Buy</div>
          <div class={`${styles.th}`}>Make</div>
          <div class={`${styles.th}`}>Sell</div>
        </div>
      </div>
      <div class={`${styles.tbody}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-currency-dollar"></i>
          </div>
          <div
            contentEditable
            class={`${styles.td} ${styles.topLeft} ${styles.bottomLeft}`}
          ></div>
          <div class={`${styles.td} ${styles.carryover}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.topRight} ${styles.bottomRight} ${styles.final}`}
          ></div>
        </div>
      </div>
      <div class={`${styles.tbody}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-clock-history"></i>
          </div>
          <div
            contentEditable
            class={`${styles.td} ${styles.topLeft} ${styles.bottomLeft}`}
          ></div>
          <div class={`${styles.td}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.topRight} ${styles.bottomRight}`}
          ></div>
        </div>
      </div>
      <div class={`${styles.tbody}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-bezier2"></i>
          </div>
          <div contentEditable class={`${styles.td} ${styles.topLeft}`}></div>
          <div contentEditable class={`${styles.td} ${styles.final}`}></div>
          <div
            class={`${styles.td} ${styles.topRight} ${styles.carryover}`}
          ></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-box-seam"></i>
          </div>
          <div contentEditable class={`${styles.td}`}></div>
          <div contentEditable class={`${styles.td} ${styles.final}`}></div>
          <div class={`${styles.td} ${styles.carryover}`}></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-hdd-rack"></i>
          </div>
          <div contentEditable class={`${styles.td}`}></div>
          <div contentEditable class={`${styles.td} ${styles.final}`}></div>
          <div class={`${styles.td} ${styles.carryover}`}></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-battery-half"></i>
          </div>
          <div
            contentEditable
            class={`${styles.td} ${styles.bottomLeft}`}
          ></div>
          <div contentEditable class={`${styles.td} ${styles.final}`}></div>
          <div
            class={`${styles.td} ${styles.bottomRight} ${styles.carryover}`}
          ></div>
        </div>
      </div>
      <div class={`${styles.tbody}`}>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-motherboard"></i>
          </div>
          <div
            class={`${styles.td} ${styles.topLeft} ${styles.carryover}`}
          ></div>
          <div contentEditable class={`${styles.td}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.topRight} ${styles.final}`}
          ></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-boombox"></i>
          </div>
          <div class={`${styles.td} ${styles.carryover}`}></div>
          <div contentEditable class={`${styles.td}`}></div>
          <div contentEditable class={`${styles.td} ${styles.final}`}></div>
        </div>
        <div class={`${styles.tr}`}>
          <div class={`${styles.th} ${styles.iconCol}`}>
            <i className="bi bi-truck-front"></i>
          </div>
          <div
            class={`${styles.td} ${styles.bottomLeft} ${styles.carryover}`}
          ></div>
          <div contentEditable class={`${styles.td}`}></div>
          <div
            contentEditable
            class={`${styles.td} ${styles.bottomRight} ${styles.final}`}
          ></div>
        </div>
      </div>
    </div>
  );
}
