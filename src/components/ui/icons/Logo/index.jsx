import React from "react";

import style from "./style.module.scss";

export const Logo = ({ color }) => {
  return (
    <>
      <svg
        width="90"
        height="60"
        viewBox="0 0 90 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="90" height="60" fill="transparent" />
        <path
          d="M20.3821 10.7386L9.83523 49.9219H7.16655L17.7134 10.7386H20.3821Z"
          fill="white"
        />
        <path
          d="M26.0128 17.7969V26H23.9176V12.3636H25.9418V14.4943H26.1193C26.4389 13.8018 26.9242 13.2455 27.5753 12.8253C28.2263 12.3991 29.0668 12.1861 30.0966 12.1861C31.0199 12.1861 31.8278 12.3755 32.5202 12.7543C33.2127 13.1271 33.7513 13.6953 34.136 14.4588C34.5207 15.2164 34.7131 16.1752 34.7131 17.3352V26H32.6179V17.4773C32.6179 16.406 32.3397 15.5715 31.7834 14.9737C31.227 14.37 30.4635 14.0682 29.4929 14.0682C28.8241 14.0682 28.2263 14.2132 27.6996 14.5032C27.1787 14.7932 26.7674 15.2164 26.4656 15.7727C26.1637 16.3291 26.0128 17.0038 26.0128 17.7969ZM44.0814 26.2841C42.8503 26.2841 41.7702 25.9911 40.841 25.4052C39.9177 24.8192 39.1956 23.9995 38.6748 22.946C38.1599 21.8925 37.9024 20.6615 37.9024 19.2528C37.9024 17.8324 38.1599 16.5924 38.6748 15.533C39.1956 14.4736 39.9177 13.6509 40.841 13.065C41.7702 12.479 42.8503 12.1861 44.0814 12.1861C45.3125 12.1861 46.3896 12.479 47.3129 13.065C48.2422 13.6509 48.9642 14.4736 49.4791 15.533C50 16.5924 50.2604 17.8324 50.2604 19.2528C50.2604 20.6615 50 21.8925 49.4791 22.946C48.9642 23.9995 48.2422 24.8192 47.3129 25.4052C46.3896 25.9911 45.3125 26.2841 44.0814 26.2841ZM44.0814 24.402C45.0165 24.402 45.786 24.1623 46.3896 23.6829C46.9933 23.2035 47.4402 22.5732 47.7302 21.7919C48.0202 21.0107 48.1652 20.1643 48.1652 19.2528C48.1652 18.3414 48.0202 17.4921 47.7302 16.7049C47.4402 15.9177 46.9933 15.2815 46.3896 14.7962C45.786 14.3108 45.0165 14.0682 44.0814 14.0682C43.1463 14.0682 42.3769 14.3108 41.7732 14.7962C41.1695 15.2815 40.7226 15.9177 40.4326 16.7049C40.1426 17.4921 39.9976 18.3414 39.9976 19.2528C39.9976 20.1643 40.1426 21.0107 40.4326 21.7919C40.7226 22.5732 41.1695 23.2035 41.7732 23.6829C42.3769 24.1623 43.1463 24.402 44.0814 24.402ZM29.9901 34.3636V36.1392H22.6392V34.3636H29.9901ZM24.8409 48V32.4815C24.8409 31.7003 25.0244 31.0492 25.3913 30.5284C25.7583 30.0076 26.2347 29.6169 26.8207 29.3565C27.4066 29.0961 28.0251 28.9659 28.6761 28.9659C29.1911 28.9659 29.6113 29.0073 29.9368 29.0902C30.2623 29.1731 30.505 29.25 30.6648 29.321L30.0611 31.1321C29.9545 31.0966 29.8066 31.0522 29.6172 30.9989C29.4337 30.9457 29.1911 30.919 28.8892 30.919C28.1967 30.919 27.6966 31.0936 27.3888 31.4428C27.087 31.792 26.9361 32.304 26.9361 32.9787V48H24.8409ZM32.9264 48V34.3636H34.9506V36.4233H35.0926C35.3412 35.7486 35.791 35.2011 36.442 34.7809C37.0931 34.3607 37.827 34.1506 38.6437 34.1506C38.7976 34.1506 38.99 34.1535 39.2208 34.1594C39.4516 34.1654 39.6262 34.1742 39.7446 34.1861V36.3168C39.6736 36.299 39.5108 36.2724 39.2563 36.2369C39.0077 36.1954 38.7443 36.1747 38.4662 36.1747C37.8033 36.1747 37.2114 36.3138 36.6906 36.592C36.1757 36.8642 35.7673 37.243 35.4655 37.7283C35.1695 38.2077 35.0216 38.7552 35.0216 39.3707V48H32.9264ZM44.3233 39.7969V48H42.2282V34.3636H44.2523V36.4943H44.4299C44.7495 35.8018 45.2348 35.2455 45.8858 34.8253C46.5369 34.3991 47.3773 34.1861 48.4071 34.1861C49.3304 34.1861 50.1383 34.3755 50.8308 34.7543C51.5233 35.1271 52.0618 35.6953 52.4466 36.4588C52.8313 37.2164 53.0236 38.1752 53.0236 39.3352V48H50.9284V39.4773C50.9284 38.406 50.6503 37.5715 50.0939 36.9737C49.5376 36.37 48.7741 36.0682 47.8034 36.0682C47.1346 36.0682 46.5369 36.2132 46.0101 36.5032C45.4893 36.7932 45.0779 37.2164 44.7761 37.7727C44.4743 38.3291 44.3233 39.0038 44.3233 39.7969ZM62.7826 34.3636V36.1392H55.7158V34.3636H62.7826ZM57.7755 31.0966H59.8706V44.0938C59.8706 44.6856 59.9565 45.1295 60.1281 45.4254C60.3057 45.7154 60.5306 45.9107 60.8028 46.0114C61.081 46.1061 61.374 46.1534 61.6817 46.1534C61.9126 46.1534 62.1019 46.1416 62.2499 46.1179C62.3979 46.0883 62.5162 46.0646 62.605 46.0469L63.0312 47.929C62.8891 47.9822 62.6908 48.0355 62.4363 48.0888C62.1818 48.148 61.8593 48.1776 61.4687 48.1776C60.8768 48.1776 60.2968 48.0503 59.7286 47.7958C59.1663 47.5413 58.6988 47.1536 58.3259 46.6328C57.959 46.112 57.7755 45.455 57.7755 44.6619V31.0966ZM70.9369 48.2841C69.8005 48.2841 68.7973 47.997 67.9273 47.4229C67.0573 46.8429 66.3766 46.0262 65.8854 44.9727C65.3941 43.9132 65.1485 42.6615 65.1485 41.2173C65.1485 39.785 65.3941 38.5421 65.8854 37.4886C66.3766 36.4351 67.0602 35.6213 67.9362 35.0472C68.8121 34.4731 69.8242 34.1861 70.9724 34.1861C71.8602 34.1861 72.5615 34.334 73.0764 34.63C73.5973 34.92 73.9938 35.2514 74.2661 35.6243C74.5442 35.9912 74.7603 36.2931 74.9142 36.5298H75.0917V29.8182H77.1869V48H75.1627V45.9048H74.9142C74.7603 46.1534 74.5413 46.4671 74.2572 46.8459C73.9731 47.2187 73.5677 47.5531 73.0409 47.8491C72.5142 48.1391 71.8128 48.2841 70.9369 48.2841ZM71.221 46.402C72.0614 46.402 72.7716 46.183 73.3517 45.745C73.9317 45.3011 74.3726 44.6886 74.6744 43.9073C74.9763 43.1201 75.1272 42.2116 75.1272 41.1818C75.1272 40.1638 74.9793 39.2731 74.6833 38.5096C74.3874 37.7402 73.9494 37.1424 73.3694 36.7163C72.7894 36.2842 72.0732 36.0682 71.221 36.0682C70.3332 36.0682 69.5934 36.296 69.0015 36.7518C68.4156 37.2016 67.9746 37.8142 67.6787 38.5895C67.3887 39.3589 67.2437 40.223 67.2437 41.1818C67.2437 42.1525 67.3917 43.0343 67.6876 43.8274C67.9894 44.6146 68.4333 45.242 69.0193 45.7095C69.6111 46.1712 70.345 46.402 71.221 46.402Z"
          fill="white"
        />
      </svg>
    </>
  );
};
