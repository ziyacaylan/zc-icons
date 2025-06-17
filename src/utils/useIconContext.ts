import { useContext } from "react";
import { IconContext } from "../IconProvider";

export function useIconContext() {
    const {
        classPrefix = "dfl-",
        csp,
        disableInlineStyles = false,
    } = useContext(IconContext) || {};

    return {
        classPrefix,
        csp,
        disableInlineStyles,
    };
}
