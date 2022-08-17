import {EmailSignupForm} from "components/EmailSignupForm";
import {ClientFooter} from "components/Footer";
import React from "react";
import {Slider, testimonials} from "utils";
import PublicTrackingModal from "./PublicTrackingModal";

const HomePage = () => {
    return (
        <>
            <main id="content" role="main" className="bg-light">
                <div className="py-2 pt-11">
                    <Hero />
                </div>
                <div className="space-1">
                    <Features />
                </div>
                <div className="space-2 bg-white">
                    <Testimonials />
                </div>
                <div className="space-1">
                    <Stats />
                </div>
                <div className="space-2 bg-white">
                    <Articles />
                </div>
                <div className="space-1 space-bottom-3">
                    <Subscribe />
                </div>
            </main>
            <ClientFooter />
        </>
    );
};
const Hero = () => {
    return (
        <div className="container">
            <div className="border-bottom">
                <div className="w-lg-75 text-center mx-lg-auto">
                    <div className="mb-9">
                        <h1>Shipping made simple</h1>
                        <p className="lead">All your freight services in one place</p>
                        <PublicTrackingModal />
                    </div>

                    <div className="w-lg-100 mx-lg-auto">
                        <div className="d-flex">
                            <div className="w-50">
                                <img
                                    className="img-fluid"
                                    src="/images/undraw_Container_ship_ok1c.png"
                                    alt="Description"
                                />
                            </div>
                            <div className="w-50">
                                <img
                                    className="img-fluid"
                                    src="/images/undraw_deliveries_131a.png"
                                    alt="Description"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Features = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 mb-7 mb-lg-0">
                    <div className="mb-4">
                        <h2 className="h1">All-in-one</h2>
                    </div>

                    <p>
                        Georgian cargo is a place where shopping happen, savings are made, and information is always at your fingertips.
                    </p>
                </div>
            </div>

            <div className="mt-lg-n11 mb-7 mb-lg-0">
                <figure className="ie-device-and-mobile">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 2058.5 1182.2"
                        xmlSpace="preserve"
                    >
                        <path
                            fill="none"
                            stroke="#bdc5d1"
                            strokeWidth="5.4276"
                            strokeMiterlimit="10"
                            strokeDasharray="8.5629"
                            d="M212.3,502.7c0.9-1.6,1.8-3.2,2.7-4.7"
                        />
                        <path
                            fill="none"
                            stroke="#bdc5d1"
                            strokeWidth="5.4276"
                            strokeMiterlimit="10"
                            strokeDasharray="8.5629"
                            d="M220.8,488.8c1.9-2.8,3.8-5.5,5.7-8.3c13-18.3,27.7-35,43.4-49.8c22.5-21.3,47.4-38.9,73.8-52.2
              c33.5-16.8,69.3-26.4,105.4-29.2c46.6-3.6,93.4,4.1,138.3,19c44.5,14.8,84.6,43.6,128.8,59C767,445,821,448.1,872.8,434.9
              c6.4-1.6,12.8-3.5,19.1-5.6"
                        />
                        <path
                            fill="none"
                            stroke="#bdc5d1"
                            strokeWidth="5.4276"
                            strokeMiterlimit="10"
                            strokeDasharray="8.5629"
                            d="M897.1,427.4c1.7-0.6,3.4-1.2,5.1-1.9"
                        />
                        <polyline
                            fill="none"
                            stroke="#bdc5d1"
                            strokeWidth="4.5"
                            strokeMiterlimit="10"
                            strokeDasharray="7"
                            points="885.9,410.4 918.5,419.1 896.8,440.8 "
                        />
                        <g>
                            <path
                                fill="#fff"
                                d="M1916.1,696.8H992.9c-17.4,0-31.7-14.3-31.7-31.7V31.7c0-17.4,14.3-31.7,31.7-31.7h923.3
                c17.4,0,31.7,14.3,31.7,31.7v633.6C1947.8,682.6,1933.5,696.8,1916.1,696.8z"
                            />
                            <circle fill="#F7F7F7" cx="1452.8" cy="28.2" r="3.6" />
                            <path
                                fill="#fff"
                                d="M2055.1,677.7H854.4c-1.8,0-3.4-1.6-3.4-3.4l0,0c0-1.8,1.6-3.4,3.4-3.4h1200.7c1.8,0,3.4,1.6,3.4,3.4l0,0
                C2058.5,676.2,2057.1,677.7,2055.1,677.7z"
                            />
                            <path
                                fill="#EFEFEF"
                                d="M1454.8,679.9l-603.9-2.2c0,0,29.1,13.7,142.4,19.1h459.5h3.7h459.6c113.3-5.4,142.4-19.1,142.4-19.1
                L1454.8,679.9z"
                            />

                            <linearGradient
                                id="devices1ID_1"
                                gradientUnits="userSpaceOnUse"
                                x1="1339.1"
                                y1="546.1826"
                                x2="1570.1"
                                y2="546.1826"
                                gradientTransform="matrix(1 0 0 1 0 129.1174)"
                            >
                                <stop
                                    offset="5.908129e-07"
                                    style={{stopColor: "#f0f1f2"}}
                                />
                                <stop
                                    offset="5.235744e-02"
                                    style={{stopColor: "#f6f7f8"}}
                                />
                                <stop offset="0.1708" style={{stopColor: "#fdfdfd"}} />
                                <stop offset="0.5" style={{stopColor: "#ffffff"}} />
                                <stop offset="0.8292" style={{stopColor: "#fdfdfd"}} />
                                <stop offset="0.9476" style={{stopColor: "#f6f7f8"}} />
                                <stop offset="1" style={{stopColor: "#f0f1f2"}} />
                            </linearGradient>
                            <path
                                fill="url(#devices1ID_1)"
                                d="M1565.7,679.5h-222.4c-2.3,0-4.2-1.9-4.2-4.2v-4.2h231v4.2C1570.1,677.6,1568.1,679.5,1565.7,679.5z"
                            />
                            <g>
                                <defs>
                                    <rect
                                        id="devices1ID_2"
                                        x="998"
                                        y="45.3"
                                        width="909.6"
                                        height="567.7"
                                    />
                                </defs>
                                <clipPath id="devices1ID_3">
                                    <use xlinkHref="#devices1ID_2" />
                                </clipPath>
                                <g clipPath="url(#devices1ID_3)">
                                    <image
    id="SVGDevices1LaptopImg"
    width="1618"
    height="1010"
    xlinkHref="/images/undraw_fill_forms_yltj.svg"
    transform="matrix(0.5622 0 0 0.5622 998.0432 45.2877)"
    />
                                </g>
                                <g>
                                    <rect
                                        id="laptopID2"
                                        x="998"
                                        y="45.3"
                                        fill="none"
                                        stroke="#e7eaf3"
                                        strokeWidth="1.2"
                                        strokeMiterlimit="10"
                                        width="909.6"
                                        height="567.7"
                                    />
                                </g>
                            </g>
                        </g>
                        <path
                            fill="#e7eaf3"
                            d="M303.1,849.1c-4,2.2-38.9,60.2-36.8,107.7c5.4-1.5,18.3-8.3,18.3-8.3l5.9-3.5l3.7-20.3l4.8-23l9-28.8l10.8-21
              l8.4-12l-7.8,2.4L303.1,849.1z"
                        />
                        <path
                            fill="#e7eaf3"
                            d="M402.5,938.6c0,0.3,0,0.7,0,1.3c0.4,13.4,4.4,92.4-50.4,124.7c24.6,27.6,64.8,3,64.8,3l5.4-6v-94.2l-1.2-2.4
              l-6.6-24l-8.4,0.6L402.5,938.6z"
                        />
                        <path
                            fill="#ed1c24"
                            d="M373.2,1150.2l-44.1-61c0,0-28.8-26.1-40.5-34.9c-0.1,9,0.5,73.5,3.2,95.9H373.2z"
                        />
                        <path
                            fill="#ed1c24"
                            d="M414.1,1140.4h8.2V1060c-20.7,6.6-120.8,7.2-133.6-5.8c0,1,19.2,53.2,53.8,93.5h71.6V1140.4z"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            opacity=".1"
                            d="M414.1,1140.4h8.2V1060c-20.7,6.6-120.8,7.2-133.6-5.8c0,1,19.2,53.2,53.8,93.5h71.6V1140.4z"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M266.1,898.1c-2.2,2.4-2.2,7-2.2,7c-2.7-8.1-61.6-154.6-61.6-154.6s-12.2,5.2,1.9,32.9
              c-4.5,2.7-17.2,12.8-12,29.1c3.9,12.3,12.6,16.5,18,16.5c-0.9,9.2,18.7,103,21.3,107.5c6,10.6,17.6,22.2,24.4,22.5
              c7.8,0.4,23.7-6.8,34.6-13.7"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M326.7,840c-29.6,5.5-67.2,40.4-66.3,47.9c0.9,7.1,19.4,27.6,33.4,37.3"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M345.3,823.5c-63.6,35.9-64.8,219.5-56.6,230.8c8,11,103.1,13.9,133.6,6.3"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M419.9,845.3c-8.7-12.7-20.2-21.9-35.1-25.8"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M414.7,940.7c1.6,6.9,4.9,19.8,8.2,32"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M395.6,925.2c3.1,8.9,6.5,15.1,8.9,15.9c3,1,9.8,0,17.8-2.1"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M422.3,846.9c-5.3-3.9-10.6-5.8-15.6-4.6"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M345.3,823.5v-10.3"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M384.8,794.3v42.8c0,3.5-9.3,5.6-18.9,5.9"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M384.7,794.3c3.6,2,9-0.1,12.5-5c3.7-5.1,3.7-11.3,0.2-13.9c-0.9-0.7-2-1-3.2-1.1"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M327.8,750.7c-0.6,1.3-1.2,2.6-1.7,3.9c-9.7,24.5-2.8,50.1,15.4,57.3c1.2,0.5,2.5,0.9,3.7,1.2"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M407.3,779.8c7.4-2.2,16.6-7.5,16.6-18c0-6.6-6.2-13.9-7.3-22.2c-0.6-4.2,0.7-21.7-4.2-27.6
              c-10.2-12.3-16.2-9.7-24-12.6c-13.6-5-18.8-13.2-30-13.2c-12.7,0-17.9,6.6-27,6.6c-10.4,0-19-4.8-33.6-4.8c-7.8,0-18,10.2-18,19.2
              c0,21.3,19.8,18.2,19.8,23.4c0,3.6-1.2,6.5-1.2,11.4c0,2.6,1.4,4.8,3.4,6.5"
                        />
                        <path
                            fill="#e7eaf3"
                            d="M187.1,682.6H217c8.9,0,16.1,7.2,16.1,16.1v29.9c0,8.9-7.2,16.1-16.1,16.1h-29.9c-8.9,0-16.1-7.2-16.1-16.1
              v-29.9C171.1,689.8,178.3,682.6,187.1,682.6z"
                        />
                        <circle fill="#ed1c24" cx="225.7" cy="687.6" r="12.7" />
                        <path
                            fill="#fff"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            d="M389.4,544.2H187.9c-27.1,0-49.1,22-49.1,49.1v515.2c0,27.1,22,49.1,49.1,49.1l0,0h201.5
              c27.1,0,49.1-22,49.1-49.1V593.3C438.5,566.2,416.5,544.2,389.4,544.2z M422.3,848.9v256.5c0,18.7-15.2,33.9-33.9,33.9H188.9
              c-18.7,0-33.9-15.2-33.9-33.9l0,0v-509c0-18.7,15.2-33.9,33.9-33.9h33V573c0,5.2,4.2,9.4,9.4,9.4h114.4c5.2,0,9.4-4.2,9.4-9.4v-10.5
              h33c18.7,0,33.9,15.2,33.9,33.9l0,0L422.3,848.9z"
                        />
                        <path
                            fill="#00c9a7"
                            d="M493.4,620.4h-72.8c-13.1,0-23.8,10.7-23.8,23.8c0,6.9,2.9,13.1,7.7,17.5v15.9l10.3-10.3
              c1.9,0.5,3.8,0.7,5.8,0.7h72.8c13.1,0,23.8-10.7,23.8-23.8S506.5,620.4,493.4,620.4z"
                        />
                        <circle fill="#fff" cx="432.4" cy="645" r="6" />
                        <circle fill="#fff" cx="457" cy="645" r="6" />
                        <circle fill="#fff" cx="481.5" cy="645" r="6" />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M109.2,1090.2c1.2-3.4,1.9-7.7,1.9-13c0-80.1-94.8-58.5-94.8-125"
                        />
                        <path
                            fill="#1e2022"
                            d="M33,951.7c5.1,6.7-12.1,14.4-14.5,11.1S27.5,944.6,33,951.7z"
                        />
                        <path
                            fill="#1e2022"
                            d="M116.9,834c6.3,8.1-12.2,15.6-15.2,11.7C98.7,841.8,110.2,825.3,116.9,834z"
                        />
                        <path
                            fill="#1e2022"
                            d="M111.9,867.7c5,9-19.2,16.2-21.6,11.9C87.9,875.3,106.6,858.1,111.9,867.7z"
                        />
                        <path
                            fill="#1e2022"
                            d="M113.4,893.3c6.5,7.9-15.9,19.4-19.1,15.6S106.4,884.8,113.4,893.3z"
                        />
                        <path
                            fill="#1e2022"
                            d="M121,922.1c6.5,7.9-15.9,19.4-19.1,15.6C98.8,934,114,913.6,121,922.1z"
                        />
                        <path
                            fill="#1e2022"
                            d="M127.7,948.9c5.9,7.2-13.7,17-16.5,13.6C108.3,959,121.4,941.2,127.7,948.9z"
                        />
                        <path
                            fill="#1e2022"
                            d="M136.7,978.2c5.9,7.2-13.7,17-16.5,13.6C117.3,988.3,130.4,970.5,136.7,978.2z"
                        />
                        <path
                            fill="#1e2022"
                            d="M0.3,946.4c2.1-8.2,18.8,0.7,17.7,4.7S-2,955.2,0.3,946.4z"
                        />
                        <path
                            fill="#1e2022"
                            d="M0,975.2c-1-8.4,17.7-6.3,18.2-2.3S1.2,984.2,0,975.2z"
                        />
                        <path
                            fill="#1e2022"
                            d="M16.6,1001.3c-5.5-6.4,11.3-15,14-11.9C33.2,992.4,22.4,1008.1,16.6,1001.3z"
                        />
                        <path
                            fill="#1e2022"
                            d="M37.4,1015.3c-3.3-7.8,15.3-10.9,16.9-7.2C55.8,1011.9,40.9,1023.6,37.4,1015.3z"
                        />
                        <path
                            fill="#1e2022"
                            d="M65.3,1030c-3.3-7.8,15.3-10.9,16.9-7.2S68.8,1038.3,65.3,1030z"
                        />
                        <path
                            fill="#1e2022"
                            d="M86.2,1051.2c-0.7-8.4,17.9-5.6,18.3-1.6S87,1060.2,86.2,1051.2z"
                        />
                        <path
                            fill="#1e2022"
                            d="M42,969.7c6.6,5.3-8.3,16.8-11.4,14.3C27.4,981.5,35,964.1,42,969.7z"
                        />
                        <path
                            fill="#1e2022"
                            d="M57,984.8c7.3,4.3-5.8,17.8-9.3,15.8S49.2,980.2,57,984.8z"
                        />
                        <path
                            fill="#1e2022"
                            d="M84.4,999.5c6.8,4.9-7.5,17.2-10.8,14.8S77.1,994.2,84.4,999.5z"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M107.4,1090c8.3-13.7,18.5-34.5,18.5-57.9c0-64.7-36.1-97.1-36.1-143.2c0-8.7,0.8-36.2,14.7-47.4"
                        />
                        <path
                            fill="#fff"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M136.3,1181.5h-53c-2.5,0-4.7-1.6-5.4-3.9l-26.4-80c-1-3,0.7-6.3,3.7-7.2c0.6-0.2,1.2-0.3,1.8-0.3h106
              c3.2,0,5.7,2.6,5.7,5.7c0,0.6-0.1,1.2-0.3,1.8l-26.6,80C141,1179.9,138.8,1181.5,136.3,1181.5z"
                        />
                        <path
                            fill="#e7eaf3"
                            d="M132,1090.2c1.5,2.2,12.7,65.1-44.8,91.3c15.8-0.5,19.9,0.3,19.9,0.3h30l4.8-3l11.4-34.2l8.1-25.2l7.5-23.4
              l-1.8-4.3l-3.6-2.3L132,1090.2z"
                        />
                        <path
                            fill="#1e2022"
                            d="M145.3,1011.8c3.1,8.8-18.7,11.3-20.2,7.1C123.6,1014.7,141.9,1002.4,145.3,1011.8z"
                        />
                        <path
                            fill="#1e2022"
                            d="M109.6,1024.9c6.9-6.3,17.7,12.9,14.3,15.9S102.2,1031.6,109.6,1024.9z"
                        />
                        <path
                            fill="#1e2022"
                            d="M104,1001c4.6-8.1,20.8,6.6,18.6,10.5S99.1,1009.7,104,1001z"
                        />
                        <path
                            fill="#1e2022"
                            d="M98.8,972.6c4.6-8.1,20.8,6.6,18.6,10.5S93.9,981.3,98.8,972.6z"
                        />
                        <path
                            fill="#1e2022"
                            d="M89.5,950.1c3-8.8,21.7,2.6,20.3,6.8C108.4,961.2,86.3,959.6,89.5,950.1z"
                        />
                        <path
                            fill="#1e2022"
                            d="M76.3,919.1c4.4-8.3,21,6.1,18.9,10S71.7,927.9,76.3,919.1z"
                        />
                        <path
                            fill="#1e2022"
                            d="M70.1,884.5c5.1-7.8,20.4,8,17.9,11.7S64.7,892.9,70.1,884.5z"
                        />
                        <path
                            fill="#1e2022"
                            d="M73.2,854.8c5.1-7.8,20.4,8,17.9,11.7C88.7,870.3,67.7,863.2,73.2,854.8z"
                        />
                        <path
                            fill="#1e2022"
                            d="M145.3,1042.5c3.1,8.8-18.7,11.3-20.2,7.1C123.6,1045.4,141.9,1033.1,145.3,1042.5z"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M338.6,757.7c0,3-0.6,12.6-4.2,15"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M336.5,788.6c6,0,11.4-3.6,11.4-6"
                        />
                        <ellipse
                            fill="none"
                            stroke="#1e2022"
                            cx="351.8"
                            cy="759.2"
                            rx="2.1"
                            ry="3.6"
                        />
                        <path
                            fill="none"
                            stroke="#1e2022"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            d="M136.3,1181.5h-53c-2.5,0-4.7-1.6-5.4-3.9l-26.4-80c-1-3,0.7-6.3,3.7-7.2c0.6-0.2,1.2-0.3,1.8-0.3h106
              c3.2,0,5.7,2.6,5.7,5.7c0,0.6-0.1,1.2-0.3,1.8l-26.6,80C141,1179.9,138.8,1181.5,136.3,1181.5z"
                        />
                    </svg>
                </figure>
            </div>

            <div className="row justify-content-lg-end">
                <div className="col-lg-7 mt-lg-n11">
                    <h2 className="h1 mb-4">
                        Use georgian cargo to simplify your oversees shopping needs
                    </h2>
                    <p>
                        Georgian cargo is a collaboration hub for shopping, no matter where you shop. It's a place where shopping happen, savings are made, and information is always at your fingertips. With Georgian cargo, your parcel is in safe hands.
                    </p>
                </div>
            </div>
        </div>
    );
};
const Testimonials = () => {
    const style = {
        height: "200px",
        maxHeight: "200px",
        overflowY: "scroll",
    };
    const Testimonial = ({content, name, src}) => (
        <div className="p-3">
            <div className="card h-100">
                <div className="card-body">
                    <ul className="list-inline text-warning">
                        <li className="list-inline-item mx-0">
                            <i className="fas fa-star"/>
                        </li>
                        <li className="list-inline-item mx-0">
                            <i className="fas fa-star"/>
                        </li>
                        <li className="list-inline-item mx-0">
                            <i className="fas fa-star"/>
                        </li>
                        <li className="list-inline-item mx-0">
                            <i className="fas fa-star"/>
                        </li>
                        <li className="list-inline-item mx-0">
                            <i className="fas fa-star"/>
                        </li>
                    </ul>
                    <div className="mb-auto" style={style}>
                        <p className="text-dark mb-0">{content}</p>
                    </div>
                </div>

                <div className="card-footer border-0 bg-transparent pt-0 px-5 pb-5">
                    <div className="media align-items-center">
                        <div className="avatar avatar-circle mr-3">
                            <img className="avatar-img" src={src} alt="Description" />
                        </div>
                        <div className="media-body">
                            <h4 className="mb-0">{name}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="w-md-100 w-lg-100 mb-3 mb-md-5">
                <h2 className="h1">Georgian cargo is loved by users worldwide</h2>
            </div>
            <div className="card-gutters-2">
                <Slider xl={3}>
                    {testimonials.map((testimonial, i) => (
                        <Testimonial {...testimonial} key={i} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};
const Stats = () => {
    return (
        <div className="container">
            <div className="row justify-content-lg-center">
                <div className="col-md-4 mb-7 mb-lg-0">
                    <div data-aos="fade-up" data-aos-delay="100">
                        <div className="text-center px-md-3 px-lg-7">
                            <figure className="mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 71.7 64"
                                    width="71"
                                    height="64"
                                >
                                    <path
                                        fill="#FFC107"
                                        d="M36.8,14.6L42,25.3c0,0.2,0.2,0.2,0.3,0.3L54,27.2c0.3,0,0.5,0.5,0.3,0.8l-8.5,8.2c-0.2,0.2-0.2,0.3-0.2,0.5
                    l2,11.7c0,0.3-0.3,0.7-0.7,0.5l-10.5-5.6c-0.2,0-0.3,0-0.5,0l-10.5,5.6c-0.3,0.2-0.8-0.2-0.7-0.5l2-11.7c0-0.2,0-0.3-0.2-0.5
                    L18,28.1c-0.3-0.3-0.2-0.8,0.3-0.8L30,25.6c0.2,0,0.3-0.2,0.3-0.3l5.3-10.7C36.1,14.2,36.6,14.2,36.8,14.6z"
                                    />
                                    <path
                                        opacity=".25"
                                        fill="#FFC107"
                                        d="M56,5.9l1.5,2.8c0,0,0,0,0.2,0l3.1,0.5c0.2,0,0.2,0.2,0,0.2l-2.3,2.3c0,0,0,0,0,0.2l0.5,3.1
                    c0,0.2-0.2,0.2-0.2,0.2L56,13.6h-0.2L53,15.1c-0.2,0-0.2,0-0.2-0.2l0.5-3.1v-0.2l-2.3-2.3V9.2l3.1-0.5c0,0,0,0,0.2,0l1.5-2.8
                    C55.8,5.7,55.8,5.7,56,5.9z"
                                    />
                                    <path
                                        opacity=".25"
                                        fill="#FFC107"
                                        d="M12.3,0.3l1.3,2.8c0,0,0,0,0.2,0l3,0.5c0.2,0,0.2,0.2,0,0.2l-2.1,2.1c0,0,0,0,0,0.2l0.5,3
                    c0,0.2-0.2,0.2-0.2,0.2l-2.6-1.5c0,0,0,0-0.2,0L9.5,9.2c-0.2,0-0.2,0-0.2-0.2l0.5-3c0,0,0,0,0-0.2L7.5,3.7V3.6l3-0.5c0,0,0,0,0.2,0
                    l1.3-2.8C12.1,0.3,12.3,0.3,12.3,0.3z"
                                    />
                                    <path
                                        opacity=".25"
                                        fill="#FFC107"
                                        d="M13.9,49.9l1.5,2.8c0,0,0,0,0.2,0l3.1,0.5c0.2,0,0.2,0.2,0,0.2l-2.3,2.3c0,0,0,0,0,0.2l0.5,3.1
                    c0,0.2-0.2,0.2-0.2,0.2l-2.8-1.5h-0.2L11,59.1c-0.2,0-0.2,0-0.2-0.2l0.5-3.1v-0.2L9,53.4v-0.2l3.1-0.5c0,0,0,0,0.2,0l1.3-2.8
                    C13.8,49.8,13.9,49.8,13.9,49.9z"
                                    />
                                    <path
                                        opacity=".25"
                                        fill="#FFC107"
                                        d="M60.8,53.5l1.6,3.1c0,0,0,0,0.2,0l3.5,0.5c0.2,0,0.2,0.2,0,0.3l-2.5,2.5c0,0,0,0,0,0.2l0.7,3.5
                    c0,0.2-0.2,0.2-0.2,0.2l-3.1-1.6h-0.2l-3.1,1.6c-0.2,0-0.2,0-0.2-0.2l0.7-3.5v-0.2l-2.5-2.5c-0.2-0.2,0-0.2,0-0.3l3.5-0.5h0.2
                    l1.6-3.1C60.4,53.4,60.6,53.4,60.8,53.5z"
                                    />
                                </svg>
                            </figure>
                            <p className="mb-0">
                                <span className="text-dark font-weight-bold">
                                    5 out of 5 starts
                                </span>
                                from 19 reviews
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-7 mb-lg-0">
                    <div data-aos="fade-up">
                        <div className="text-center column-divider-md column-divider-20deg px-md-3 px-lg-7">
                            <figure className="mb-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 71.7 64"
                                    width="71"
                                    height="64"
                                >
                                    <defs>
                                        <circle
                                            id="SVGID_1_"
                                            cx="50.9"
                                            cy="43.1"
                                            r="18.9"
                                        />
                                    </defs>
                                    <clipPath id="SVGID_2_">
                                        <use xlinkHref="#SVGID_1_" />
                                    </clipPath>
                                    <g
                                        transform="matrix(1 0 0 1 0 1.907349e-06)"
                                        style={{clipPath: "url(#SVGID_2_)"}}
                                    >
                                        <image
    width="100"
    height="100"
    xlinkHref="/images/client_2.jpg"
    transform="matrix(0.36 0 0 0.36 32.8571 25.1429)"
    />
                                    </g>
                                    <use
                                        xlinkHref="#SVGID_1_"
                                        fill="none"
                                        stroke="#FFFFFF"
                                        strokeWidth="4"
                                    />
                                    <defs>
                                        <circle
                                            id="SVGID_3_"
                                            cx="34.6"
                                            cy="20.9"
                                            r="18.9"
                                        />
                                    </defs>
                                    <clipPath id="SVGID_4_">
                                        <use xlinkHref="#SVGID_3_" />
                                    </clipPath>
                                    <g style={{clipPath: "url(#SVGID_4_)"}}>
                                        <image
    width="100"
    height="100"
    xlinkHref="/images/client_3.jpg"
    transform="matrix(0.36 0 0 0.36 16.5714 2.8571)"
    />
                                    </g>
                                    <use
                                        xlinkHref="#SVGID_3_"
                                        fill="none"
                                        stroke="#FFFFFF"
                                        strokeWidth="4"
                                    />
                                    <defs>
                                        <circle
                                            id="SVGID_5_"
                                            cx="20.9"
                                            cy="43.1"
                                            r="18.9"
                                        />
                                    </defs>
                                    <clipPath id="SVGID_6_">
                                        <use xlinkHref="#SVGID_5_" />
                                    </clipPath>
                                    <g style={{clipPath: "url(#SVGID_6_)"}}>
                                        <image
    width="100"
    height="100"
    xlinkHref="/images/client_4.jpg"
    transform="matrix(0.3771 0 0 0.3771 2 24.2857)"
    />
                                    </g>
                                    <use
                                        xlinkHref="#SVGID_5_"
                                        fill="none"
                                        stroke="#FFFFFF"
                                        strokeWidth="4"
                                    />
                                </svg>
                            </figure>
                            <p className=" mb-0">
                                Over
                                <span className="text-dark font-weight-bold">10,000</span>
                                Customers served
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div data-aos="fade-up" data-aos-delay="100">
                        <div className="text-center column-divider-md column-divider-20deg px-md-3 px-lg-7">
                            <figure className="max-w-8rem mx-auto mb-3">
                                <img
                                    className="img-fluid"
                                    src="/theme/assets/svg/icons/icon-64.svg"
                                    alt="SVG"
                                />
                            </figure>
                            <p className="mb-0">
                                <span className="text-dark font-weight-bold">70,500</span>
                                Parcels shipped
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Articles = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="offset-lg-3 col-lg-6 mb-3 mb-lg-0">
                    <article className="card h-100 space-1">
                        <div className="w-sm-65 p-4">
                            <h3>Blogs comming soon!</h3>
                            <div className="mb-4">
                                <p>Know how your parcels are processed soon!</p>
                            </div>
                            <button
                                className="btn btn-sm btn-soft-success btn-pill transition-3d-hover"
                                disabled="disabled"
                            >
                                Find out More
                                <i className="fas fa-angle-right ml-1"/>
                            </button>
                        </div>

                        <div className="position-absolute bottom-0 right-0 w-sm-35 max-w-27rem">
                            <img
                                className="img-fluid"
                                src="/theme/assets/svg/illustrations/support-man.svg"
                                alt="Description"
                            />
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};
const Subscribe = () => {
    return (
        <div className="position-relative text-center">
            <div className="container">
                <div className="w-md-60 mx-md-auto mb-5 mb-md-7">
                    <h2 className="h1">Stay in the know</h2>
                    <p/>
                    <p>Get special offers right on your inbox</p>
                </div>

                <div className="w-md-75 w-lg-50 mx-md-auto">
                    <EmailSignupForm />
                </div>
            </div>
        </div>
    );
};
export default HomePage;
