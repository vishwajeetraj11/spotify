import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface ISvgIcon {
  height?: number;
  width?: number;
  fill?: string;
  props?: {};
  strokeColor?: string;
}

export const Settings: React.FC<ISvgIcon> = ({
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

export const Search: React.FC<ISvgIcon> = ({
  height,
  width,
  fill,
  strokeColor,
  ...props
}) => {
  return (
    <Svg
      viewBox="0 0 30 30"
      width={width || 30}
      height={height || 30}
      fill="none"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.976 21.145l6.128 7.192-1.063.913-6.145-7.192c-2.115 1.606-4.495 2.409-7.142 2.409-1.605 0-3.141-.313-4.608-.939-1.468-.625-2.73-1.467-3.787-2.524-1.058-1.058-1.9-2.32-2.525-3.787a11.633 11.633 0 01-.938-4.609c0-1.605.313-3.141.938-4.608.626-1.468 1.467-2.73 2.525-3.787 1.057-1.058 2.32-1.9 3.787-2.525A11.631 11.631 0 0113.754.75c1.606 0 3.142.313 4.61.938 1.466.626 2.729 1.467 3.786 2.525C23.207 5.27 24.049 6.533 24.674 8c.626 1.467.939 3.003.939 4.608 0 1.65-.321 3.211-.964 4.684a11.868 11.868 0 01-2.674 3.853zm-8.221 1.927c1.893 0 3.642-.468 5.248-1.404a10.402 10.402 0 003.811-3.811c.936-1.606 1.404-3.355 1.404-5.249 0-1.893-.468-3.643-1.404-5.248a10.403 10.403 0 00-3.811-3.812c-1.606-.935-3.355-1.403-5.248-1.403-1.894 0-3.643.468-5.249 1.403A10.402 10.402 0 004.695 7.36c-.936 1.605-1.404 3.355-1.404 5.248 0 1.894.468 3.643 1.404 5.248a10.401 10.401 0 003.811 3.812c1.606.936 3.355 1.404 5.248 1.404z"
        fill={fill || "#4B4B4B"}
      />
    </Svg>
  );
};

export const Plus: React.FC<ISvgIcon> = ({
  height,
  width,
  fill,
  strokeColor,
  ...props
}) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={width || 30}
      height={height || 30}
      fill="none"
      {...props}
    >
      <Path
        d="M12 5v14M5 12h14"
        stroke={strokeColor || "#4B4B4B"}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

// Down Up Arrow
export const Recent: React.FC<ISvgIcon> = ({
  height,
  width,
  fill,
  strokeColor,
  ...props
}) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={width || 24}
      height={height || 24}
      fill="none"
      {...props}
    >
      <Path
        d="M4.293.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L6 3.414V15a1 1 0 11-2 0V3.414L1.707 5.707A1 1 0 01.293 4.293l4-4zM14 12.586V1a1 1 0 112 0v11.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L14 12.586z"
        fill={fill || "#0D0D0D"}
      />
    </Svg>
  );
};
