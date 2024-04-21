import React from "react";

import style from "./style.module.scss";
import { Title } from "../../ui/Title";
import { Link } from "react-router-dom";

export const Hardware = () => {
  return (
    <section className={style.hardware}>
      <Title prefix="#" title="Железо" />
      <div className={style.wrapper}>
        <div className={style.boxList}>
          <ul>
            <p>PC 👽</p>
            <li>
              CPU:
              <Link
                to="https://www.intel.com/content/www/us/en/products/sku/134587/intel-core-i512400f-processor-18m-cache-up-to-4-40-ghz/specifications.html"
                target="_blank"
              >
                Intel i5-12400f
              </Link>
            </li>
            <li>
              GPU:
              <Link
                target="_blank"
                to="https://www.gigabyte.com/ru/Graphics-Card/GV-N1060G1-ROCK-6GD#kf"
              >
                GeForce® GTX 1060 G1 ROCK 6GB
              </Link>
            </li>
            <li>
              RAM:
              <Link
                target="_blank"
                to="https://www.kingston.com/datasheets/KF436C16RB1K2_32.pdf"
              >
                Kingston FURY Renegade
              </Link>
            </li>
            <li>
              Motherboard:
              <Link
                target="_blank"
                to="https://ru.msi.com/Motherboard/MAG-B660M-MORTAR-DDR4"
              >
                MSI MAG B660M MORTAR DDR4
              </Link>
            </li>
            <li>
              SSD:
              <Link
                target="_blank"
                to="https://www.kingston.com/ru/ssd/a400-solid-state-drive"
              >
                Kingston A400
              </Link>
            </li>
            <li>
              HDD:
              <Link
                target="_blank"
                to="https://www.westerndigital.com/products/internal-drives/wd-blue-desktop-sata-hdd?sku=WD10EZRZ"
              >
                Western Digital 1 TB
              </Link>
            </li>
            <li>
              Tower:
              <Link
                target="_blank"
                to="https://ru.deepcool.com/products/Cooling/cpuaircoolers/AK400-ZERO-DARK-PLUS-Dual-Fan-Performance-CPU-Cooler-1700-AM5/2022/16175.shtml"
              >
                Deepcool AK400 ZERO DARK PLUS
              </Link>
            </li>
          </ul>
          <ul>
            <p>Hardware 👾</p>
            <li>
              Monitor:
              <Link
                target="_blank"
                to="https://aoc.com/ru/gaming/products/monitors/c24g1"
              >
                AOC c24g1 144hz
              </Link>
            </li>
            <li>
              Webcam:
              <Link
                target="_blank"
                to="https://aoc.com/ru/gaming/products/monitors/c24g1"
              >
                Logitech c922 Pro Stream
              </Link>
            </li>
            <li>
              Microphone:
              <Link
                target="_blank"
                to="https://fifinemicrophone.com/products/fifine-ampligame-a8"
              >
                Fifine Ampligame A8
              </Link>
            </li>
            <li>
              Mouse:
              <Link
                target="_blank"
                to="https://www.logitechg.com/en-in/products/gaming-mice/g304-lightspeed-wireless-gaming-mouse.910-005284.html"
              >
                Logitech G304 Lightspeed
              </Link>
            </li>
            <li>
              Headphones:
              <Link
                target="_blank"
                to="https://www.logitechg.com/en-eu/products/gaming-audio/g733-rgb-wireless-headset.981-000883.html"
              >
                Logitech G733 Lightspeed
              </Link>
            </li>
            <li>
              Keyboard:
              <Link target="_blank" to="http://en.kzzi.com/product/33/">
                Kzzi K68 (ТТС Sрееd Silvеr V2)
              </Link>
            </li>
            <li>Chair: Zombie Thunder 1</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
