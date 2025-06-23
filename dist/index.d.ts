import * as react from 'react';
import react__default from 'react';

type Flip = "horizontal" | "vertical";
interface IconProps extends react__default.HTMLAttributes<SVGElement> {
    as?: react__default.ElementType;
    spin?: boolean;
    pulse?: boolean;
    rotate?: number;
    viewBox?: string;
    flip?: Flip;
    fill?: string;
    width?: number | string;
    height?: number | string;
}
declare const Icon: react__default.ForwardRefExoticComponent<IconProps & react__default.RefAttributes<SVGElement>>;

interface Options {
    /** Icon script url */
    scriptUrl?: string | string[];
    /** Common props for Icon */
    commonProps?: react__default.HTMLAttributes<SVGElement>;
    /** Loaded callback */
    onLoaded?(): void;
}
interface IconFontProps extends IconProps {
    /** Icon name in IconFont */
    icon: string;
}
declare function createIconFont({ scriptUrl, commonProps, onLoaded, }?: Options): react__default.ForwardRefExoticComponent<IconFontProps & react__default.RefAttributes<SVGElement>>;

interface SvgIconProps {
    as: IconProps["as"];
    ariaLabel?: string;
    displayName?: string;
    category?: string;
}
declare function createSvgIcon({ as, ariaLabel, displayName, category }: SvgIconProps): react__default.ForwardRefExoticComponent<IconProps & react__default.RefAttributes<SVGElement>>;

interface IconContextProps {
    classPrefix?: string;
    csp?: {
        /**
         * Content Security Policy nonce
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce
         */
        nonce?: string;
    };
    /**
     * Disable inline styles
     * @default false
     */
    disableInlineStyles?: boolean;
}
declare const _default: react.Provider<IconContextProps>;

declare const Arrow: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const Ball: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const CurvedArrow: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const Flag: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const FlagWithStand: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const Hand: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const Player: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const ZoomIn$1: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const ZoomIn: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const Text: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const TacticTools: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const SoccerTools: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const SoccerTools01: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const Shape: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const Judge: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const Ellipse: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const Rectangle: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const SoccerField: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

declare const Player01: react.ForwardRefExoticComponent<IconProps & react.RefAttributes<SVGElement>>;

export { Arrow, Ball, CurvedArrow, Ellipse, Flag, FlagWithStand, Hand, Icon, _default as IconProvider, Judge, Player, Player01, Rectangle, Shape, SoccerField, SoccerTools, SoccerTools01, TacticTools, Text, ZoomIn$1 as ZoomIn, ZoomIn as ZoomOut, createIconFont, createSvgIcon };
