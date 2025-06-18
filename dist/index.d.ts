import * as React from 'react';
import React__default from 'react';

type Flip = "horizontal" | "vertical";
interface IconProps extends React__default.HTMLAttributes<SVGElement> {
    as?: React__default.ElementType;
    spin?: boolean;
    pulse?: boolean;
    rotate?: number;
    viewBox?: string;
    flip?: Flip;
    fill?: string;
    width?: number | string;
    height?: number | string;
}
declare const Icon: React__default.ForwardRefExoticComponent<IconProps & React__default.RefAttributes<SVGElement>>;

interface Options {
    /** Icon script url */
    scriptUrl?: string | string[];
    /** Common props for Icon */
    commonProps?: React__default.HTMLAttributes<SVGElement>;
    /** Loaded callback */
    onLoaded?(): void;
}
interface IconFontProps extends IconProps {
    /** Icon name in IconFont */
    icon: string;
}
declare function createIconFont({ scriptUrl, commonProps, onLoaded, }?: Options): React__default.ForwardRefExoticComponent<IconFontProps & React__default.RefAttributes<SVGElement>>;

interface SvgIconProps {
    as: IconProps["as"];
    ariaLabel?: string;
    displayName?: string;
    category?: string;
}
declare function createSvgIcon({ as, ariaLabel, displayName, category }: SvgIconProps): React__default.ForwardRefExoticComponent<IconProps & React__default.RefAttributes<SVGElement>>;

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
declare const _default: React.Provider<IconContextProps>;

declare const ZoomIn$1: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGElement>>;

declare const ZoomIn: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGElement>>;

export { Icon, _default as IconProvider, ZoomIn$1 as ZoomIn, ZoomIn as ZoomOut, createIconFont, createSvgIcon };
