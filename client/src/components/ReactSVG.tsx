import React from "react";

interface Props {
  theme: string | null;
}

const ReactSVG: React.FC<Props> = ({ theme }) => {
  return (
    <svg
      className="rotating"
      width="200"
      height="225"
      viewBox="0 0 623 554"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M511.57 180.15C504.957 177.883 498.29 175.783 491.57 173.85C492.677 169.323 493.707 164.773 494.66 160.2C509.8 86.69 499.9 27.47 466.09 7.98001C433.67 -10.72 380.65 8.78001 327.09 55.37C321.81 59.9833 316.653 64.7167 311.62 69.57C308.24 66.3367 304.807 63.1667 301.32 60.06C245.21 10.23 189 -10.76 155.18 8.79C122.79 27.54 113.18 83.21 126.83 152.88C128.163 159.78 129.693 166.64 131.42 173.46C123.47 175.72 115.78 178.13 108.42 180.7C42.63 203.59 0.609985 239.59 0.609985 276.88C0.609985 315.39 45.72 354.02 114.25 377.44C119.81 379.327 125.41 381.08 131.05 382.7C129.223 390.033 127.597 397.427 126.17 404.88C113.17 473.34 123.33 527.7 155.63 546.33C189 565.59 245 545.79 299.52 498.13C303.83 494.36 308.15 490.36 312.52 486.18C317.973 491.44 323.57 496.547 329.31 501.5C382.13 546.95 434.31 565.31 466.57 546.62C499.9 527.33 510.73 468.93 496.67 397.89C495.603 392.463 494.36 386.927 492.94 381.28C496.88 380.12 500.733 378.917 504.5 377.67C575.74 354.07 622.1 315.91 622.1 276.88C622.1 239.45 578.72 203.26 511.6 180.15H511.57Z"
        fill="#53C1DE"
      />
      <path
        d="M496.12 352.47C492.72 353.6 489.24 354.68 485.68 355.74C476.994 328.811 466.48 302.506 454.21 277.01C466.012 251.853 476.118 225.936 484.46 199.43C490.81 201.27 496.99 203.21 502.93 205.26C560.44 225.05 595.52 254.32 595.52 276.88C595.52 300.88 557.63 332.09 496.12 352.47ZM470.6 403.05C476.82 434.46 477.7 462.86 473.6 485.05C469.9 505 462.46 518.3 453.26 523.63C433.67 534.96 391.79 520.23 346.62 481.36C341.44 476.9 336.23 472.15 330.99 467.11C349.822 446.261 367.225 424.164 383.08 400.97C411.401 398.57 439.524 394.227 467.25 387.97C468.517 393.09 469.64 398.09 470.62 402.97L470.6 403.05ZM212.48 521.69C193.34 528.45 178.1 528.64 168.89 523.33C149.29 512.02 141.14 468.33 152.26 409.83C153.593 402.917 155.103 396.04 156.79 389.2C184.401 395.128 212.382 399.181 240.54 401.33C256.859 424.443 274.681 446.457 293.89 467.23C290.03 470.97 286.083 474.607 282.05 478.14C257.94 499.22 233.77 514.14 212.48 521.69ZM122.84 352.32C92.53 341.96 67.51 328.5 50.35 313.82C34.94 300.62 27.16 287.51 27.16 276.88C27.16 254.25 60.9 225.38 117.16 205.77C124.227 203.31 131.357 201.067 138.55 199.04C146.907 225.839 157.025 252.056 168.84 277.52C156.878 303.349 146.636 329.94 138.18 357.12C133.02 355.647 127.907 354.047 122.84 352.32ZM152.89 147.78C141.21 88.09 148.96 43.06 168.48 31.78C189.27 19.78 235.24 36.9 283.7 79.93C286.8 82.68 289.91 85.56 293.02 88.53C273.948 109.176 256.266 131.064 240.09 154.05C212.197 156.551 184.496 160.857 157.16 166.94C155.567 160.593 154.143 154.21 152.89 147.79V147.78ZM421 213.97C414.927 203.477 408.63 193.117 402.11 182.89C421.94 185.4 440.93 188.72 458.77 192.8C453.045 210.96 446.407 228.82 438.88 246.31C433.14 235.41 427.18 224.63 421 213.97ZM311.64 107.5C324.564 121.59 336.769 136.322 348.21 151.64C323.737 150.487 299.253 150.487 274.76 151.64C286.83 135.72 299.2 120.92 311.64 107.51V107.5ZM201.64 214.15C195.54 224.73 189.69 235.443 184.09 246.29C176.36 227.96 169.75 209.93 164.35 192.52C182.08 188.52 200.99 185.31 220.69 182.84C214.077 193.133 207.72 203.57 201.62 214.15H201.64ZM221.25 372.8C202.022 370.713 182.913 367.639 164 363.59C169.49 345.88 176.25 327.46 184.15 308.73C189.77 319.59 195.64 330.31 201.76 340.89C207.987 351.683 214.477 362.32 221.23 372.8H221.25ZM312.39 448.13C299.79 434.59 287.24 419.59 275 403.38C286.9 403.853 299.02 404.09 311.36 404.09C324.027 404.09 336.53 403.81 348.87 403.25C337.479 418.825 325.296 433.804 312.37 448.13H312.39ZM439.08 307.78C446.997 325.625 453.979 343.869 460 362.44C440.853 366.748 421.493 370.049 402 372.33C408.567 361.91 414.927 351.367 421.08 340.7C427.333 329.86 433.333 318.887 439.08 307.78ZM398.08 327.44C388.667 343.787 378.73 359.82 368.27 375.54C349.83 376.86 330.78 377.54 311.36 377.54C291.94 377.54 273.21 376.94 255.09 375.76C244.363 360.093 234.233 344.037 224.7 327.59C215.167 311.143 206.33 294.45 198.19 277.51C206.37 260.49 215.18 243.79 224.62 227.41C234.047 211.037 244.09 195.037 254.75 179.41C273.24 178.01 292.18 177.28 311.34 177.28C330.5 177.28 349.56 178.02 368.03 179.42C378.57 195 388.57 210.937 398.03 227.23C407.49 243.523 416.42 260.147 424.82 277.1C416.52 294.18 407.617 310.947 398.11 327.4L398.08 327.44ZM452.85 30.98C473.66 42.98 481.75 91.38 468.68 154.85C467.82 158.977 466.887 163.093 465.88 167.2C438.504 160.994 410.746 156.607 382.79 154.07C366.77 131.064 349.22 109.161 330.26 88.51C334.927 84.0167 339.69 79.6467 344.55 75.4C390.43 35.47 433.31 19.71 452.85 30.98Z"
        fill={theme === "dark" ? "#212121" : "#fff"}
      />
      <path
        d="M311.34 221.38C322.317 221.38 333.047 224.635 342.174 230.733C351.301 236.832 358.415 245.5 362.615 255.641C366.816 265.782 367.915 276.942 365.774 287.707C363.632 298.473 358.346 308.363 350.584 316.124C342.823 323.886 332.934 329.172 322.168 331.314C311.402 333.455 300.242 332.356 290.101 328.155C279.96 323.955 271.292 316.841 265.193 307.714C259.095 298.587 255.84 287.857 255.84 276.88C255.839 269.591 257.273 262.374 260.062 255.64C262.851 248.905 266.939 242.787 272.093 237.633C277.247 232.479 283.365 228.391 290.1 225.602C296.834 222.813 304.051 221.379 311.34 221.38Z"
        fill="#53C1DE"
      />
    </svg>
  );
};

export default ReactSVG;