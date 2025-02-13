import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const SvgComponent: React.FC<SvgProps> = (props) => (
    <Svg
        width={27}
        height={26}
        fill="none"
        {...props} // Allows passing additional props like style, color, etc.
    >
        <Path
            stroke="#00523D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.985}
            d="m16.675 20.412-5.463-5.294a2.913 2.913 0 0 1 0-4.236l5.463-5.294"
        />
    </Svg>
);

export default SvgComponent;
