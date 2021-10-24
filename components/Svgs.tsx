import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface ISvgIcon {
  height?: number;
  width?: number;
  fill?: number;
  props?: {};
  strokeColor?: string;
}

const Settings: React.FC<ISvgIcon> = ({
  height,
  width,
  fill,
  strokeColor,
  ...props
}) => {
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      fill={fill || "none"}
      {...props}
    >
      <Path
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.723 1.723 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z"
        stroke={strokeColor || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        stroke={strokeColor || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Settings;
