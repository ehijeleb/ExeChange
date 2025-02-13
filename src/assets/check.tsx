import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const SvgComponent: React.FC<SvgProps> = (props) => (
    <Svg
        width={14}
        height={14}
        fill="none"
        {...props} // Allows passing external props like color, size, and styles
    >
        <Path
            stroke="#E0FFF7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.111}
            d="m11.444 3.667-6.11 6.11L2.555 7"
        />
    </Svg>
);

export default SvgComponent;
