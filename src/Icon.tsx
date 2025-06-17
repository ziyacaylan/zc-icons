import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { useClassNames, useInsertStyles } from "./utils";

export type Flip = "horizontal" | "vertical";

export interface IconProps extends React.HTMLAttributes<SVGElement> {
    as?: React.ElementType;
    spin?: boolean;
    pulse?: boolean;
    rotate?: number;
    viewBox?: string;
    flip?: Flip;
    fill?: string;
    width?: number | string;
    height?: number | string;
}

const Icon = React.forwardRef<SVGElement, IconProps>(
    (
        {
            as: Component = "svg",
            spin = false,
            pulse = false,
            flip,
            fill = "currentColor",
            className,
            rotate,
            children,
            viewBox = "0 0 24 24",
            width = "1em",
            height = "1em",
            style,
            ...rest
        },
        ref
    ) => {
        const [componentClassName, addPrefix] = useClassNames();
        const classes = classNames(className, componentClassName, {
            [addPrefix("spin")]: spin,
            [addPrefix("pulse")]: pulse,
            [addPrefix(`flip-${flip}`)]: !!flip,
        });

        const rotateStyles = rotate
            ? { transform: `rotate(${rotate}deg)` }
            : {};

        useInsertStyles();

        return (
            <Component
                aria-hidden
                focusable={false}
                ref={ref}
                width={width}
                height={height}
                fill={fill}
                viewBox={viewBox}
                className={classes}
                style={{ ...rotateStyles, ...style }}
                {...rest}>
                {children}
            </Component>
        );
    }
);

Icon.displayName = "Icon";

Icon.propTypes = {
    as: PropTypes.elementType,
    spin: PropTypes.bool,
    pulse: PropTypes.bool,
    rotate: PropTypes.number,
    viewBox: PropTypes.string,
    flip: PropTypes.oneOf(["horizontal", "vertical"]),
    fill: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Icon;
