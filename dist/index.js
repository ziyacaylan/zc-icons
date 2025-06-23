// src/createIconFont.tsx
import classNames3 from "classnames";
import React2, { useMemo } from "react";

// src/Icon.tsx
import classNames2 from "classnames";
import PropTypes from "prop-types";
import React from "react";

// src/utils/inBrowserEnv.ts
function inBrowserEnv_default() {
  return typeof document !== "undefined" && typeof window !== "undefined" && typeof document.createElement === "function";
}

// src/utils/prefix.ts
import classNames from "classnames";
var prefix = (pre) => (className) => {
  if (!pre || !className) {
    return "";
  }
  if (Array.isArray(className)) {
    return classNames(
      className.filter((name) => !!name).map((name) => `${pre}-${name}`)
    );
  }
  return `${pre}-${className}`;
};

// src/utils/useIconContext.ts
import { useContext } from "react";

// src/IconProvider.tsx
import { createContext } from "react";
var IconContext = createContext({});
var IconProvider_default = IconContext.Provider;

// src/utils/useIconContext.ts
function useIconContext() {
  const {
    classPrefix = "dfl-",
    csp,
    disableInlineStyles = false
  } = useContext(IconContext) || {};
  return {
    classPrefix,
    csp,
    disableInlineStyles
  };
}

// src/utils/useClassNames.ts
function useClassNames() {
  const { classPrefix } = useIconContext();
  const className = `${classPrefix}icon`;
  return [className, prefix(className)];
}

// src/utils/useInsertStyles.ts
import { useEffect } from "react";

// src/utils/insertCss.ts
var containers = [];
var styleElements = [];
function createStyleElement(nonce) {
  const styleElement = document.createElement("style");
  styleElement.setAttribute("type", "text/css");
  styleElement.setAttribute("data-insert-css", "dfl-icons");
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
  return styleElement;
}
function insertCss(css, options = {}) {
  const position = options.prepend === true ? "prepend" : "append";
  const container = options.container || document.querySelector("head");
  if (!container) {
    throw new Error("No container found to insert CSS.");
  }
  let containerId = containers.indexOf(container);
  if (containerId === -1) {
    containerId = containers.push(container) - 1;
    styleElements[containerId] = {};
  }
  let styleElement;
  if (styleElements[containerId][position]) {
    styleElement = styleElements[containerId][position];
  } else {
    styleElement = createStyleElement(options.nonce);
    styleElements[containerId][position] = styleElement;
    if (position === "prepend") {
      container.insertBefore(styleElement, container.firstChild);
    } else {
      container.appendChild(styleElement);
    }
  }
  if (css.charCodeAt(0) === 65279) {
    css = css.slice(1);
  }
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText += css;
  } else {
    styleElement.textContent += css;
  }
  return styleElement;
}

// src/utils/useInsertStyles.ts
var getStyles = (prefix2 = "dfl-") => {
  return `.${prefix2}icon {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  vertical-align: middle;
}
.${prefix2}icon[tabindex] {
  cursor: pointer;
}
.${prefix2}icon-spin {
  -webkit-animation: icon-spin 2s infinite linear;
          animation: icon-spin 2s infinite linear;
}
.${prefix2}icon-pulse {
  -webkit-animation: icon-spin 1s infinite steps(8);
          animation: icon-spin 1s infinite steps(8);
}
.${prefix2}icon-flip-horizontal {
  -webkit-transform: scaleX(-1);
      -ms-transform: scaleX(-1);
          transform: scaleX(-1);
}
.${prefix2}icon-flip-vertical {
  -webkit-transform: scaleY(-1);
      -ms-transform: scaleY(-1);
          transform: scaleY(-1);
}
@-webkit-keyframes icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}
@keyframes icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}`;
};
var cssInjected = false;
var useInsertStyles = () => {
  const { csp, classPrefix, disableInlineStyles } = useIconContext();
  useEffect(() => {
    if (!cssInjected && !disableInlineStyles) {
      insertCss(getStyles(classPrefix), {
        prepend: true,
        nonce: csp?.nonce
      });
      cssInjected = true;
    }
  }, []);
};
var useInsertStyles_default = useInsertStyles;

// src/Icon.tsx
import { jsx } from "react/jsx-runtime";
var Icon = React.forwardRef(
  ({
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
  }, ref) => {
    const [componentClassName, addPrefix] = useClassNames();
    const classes = classNames2(className, componentClassName, {
      [addPrefix("spin")]: spin,
      [addPrefix("pulse")]: pulse,
      [addPrefix(`flip-${flip}`)]: !!flip
    });
    const rotateStyles = rotate ? { transform: `rotate(${rotate}deg)` } : {};
    useInsertStyles_default();
    return /* @__PURE__ */ jsx(
      Component,
      {
        "aria-hidden": true,
        focusable: false,
        ref,
        width,
        height,
        fill,
        viewBox,
        className: classes,
        style: { ...rotateStyles, ...style },
        ...rest,
        children
      }
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
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
var Icon_default = Icon;

// src/createIconFont.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var cache = /* @__PURE__ */ new Set();
function isValidScriptUrl(scriptUrl) {
  return typeof scriptUrl === "string" && scriptUrl.length && !cache.has(scriptUrl);
}
function insertScripts(scriptUrls, index = 0, loadedCallback) {
  const nextIndex = index + 1;
  const currentScriptUrl = scriptUrls[index];
  const loadNextScript = () => {
    insertScripts(scriptUrls, nextIndex, loadedCallback);
  };
  if (isValidScriptUrl(currentScriptUrl)) {
    const script = document.createElement("script");
    script.setAttribute("src", currentScriptUrl);
    script.setAttribute("data-prop", "icon-font");
    if (scriptUrls.length > nextIndex) {
      script.onload = loadNextScript;
      script.onerror = loadNextScript;
    }
    cache.add(currentScriptUrl);
    document.body.appendChild(script);
  } else if (scriptUrls.length > nextIndex) {
    loadNextScript();
  }
  if (nextIndex >= scriptUrls.length && typeof loadedCallback === "function") {
    loadedCallback();
  }
}
function createIconFont({
  scriptUrl,
  commonProps = {},
  onLoaded
} = {}) {
  if (scriptUrl && inBrowserEnv_default()) {
    const scriptUrls = Array.isArray(scriptUrl) ? scriptUrl : [scriptUrl];
    insertScripts(scriptUrls.reverse(), 0, onLoaded);
  }
  const IconFont = React2.forwardRef(
    (props, ref) => {
      const { icon, children, className, ...restProps } = props;
      const { classPrefix } = useIconContext();
      const clesses = classNames3(
        className,
        commonProps.className,
        `${classPrefix}icon-font`
      );
      const content = useMemo(() => {
        if (children) {
          return children;
        }
        if (icon) {
          return /* @__PURE__ */ jsx2("use", { xlinkHref: `#${icon}` });
        }
      }, [icon, children]);
      return /* @__PURE__ */ jsx2(
        Icon_default,
        {
          ...commonProps,
          ...restProps,
          className: clesses,
          ref,
          children: content
        }
      );
    }
  );
  IconFont.displayName = "IconFont";
  return IconFont;
}
var createIconFont_default = createIconFont;

// src/createSvgIcon.tsx
import React3 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
function createSvgIcon({ as, ariaLabel, displayName, category }) {
  const IconComponent = React3.forwardRef(
    (props, ref) => /* @__PURE__ */ jsx3(
      Icon_default,
      {
        "aria-label": ariaLabel,
        "data-category": category,
        ref,
        as,
        ...props
      }
    )
  );
  IconComponent.displayName = displayName;
  return IconComponent;
}
var createSvgIcon_default = createSvgIcon;

// src/icons/ZoomIn.tsx
import { forwardRef } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var ZoomIn = (props, ref) => /* @__PURE__ */ jsx4(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 25",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx4("path", { d: "M23.5173 23.4836L22.9344 24.0665C22.289 24.7111 21.2448 24.7111 20.6011 24.0665L15.9344 19.4015C15.3951 18.8605 15.3351 18.0499 15.7034 17.4184L13.1514 14.8681C11.7792 15.8859 10.0864 16.4951 8.24716 16.4951C3.69236 16.4951 0 12.8028 0 8.24799C0 3.69318 3.69236 0 8.24716 0C12.8028 0 16.4943 3.69236 16.4943 8.24799C16.4943 10.3684 15.6886 12.2955 14.3731 13.7565L16.8684 16.2518C17.4998 15.8843 18.3105 15.9435 18.8498 16.4845L23.5165 21.1494C24.161 21.7948 24.161 22.8398 23.5173 23.4836ZM14.4175 8.21428C14.4175 4.79817 11.6476 2.02911 8.23154 2.02911C4.81544 2.02911 2.04555 4.79735 2.04555 8.21428C2.04555 11.6312 4.81461 14.3994 8.23072 14.3994C11.6468 14.3994 14.4175 11.6304 14.4175 8.21428ZM8.59165 10.3272H7.76702V8.72978H6.11775V7.90514H7.76702V6.25505H8.59165V7.90514H10.2417V8.72978H8.59165V10.3272Z" })
  }
);
var ForwardRef = forwardRef(ZoomIn);
var ZoomIn_default = ForwardRef;

// src/components/ZoomIn.tsx
var ZoomIn2 = createSvgIcon_default({
  as: ZoomIn_default,
  ariaLabel: "zoom in",
  category: "zc icons",
  displayName: "ZoomInIcon"
});
var ZoomIn_default2 = ZoomIn2;

// src/icons/ZoomOut.tsx
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var ZoomOut = (props, ref) => /* @__PURE__ */ jsx5(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx5("path", { d: "M6.36221 7.72726H10.3145V8.53342H6.36221V7.72726ZM23.0372 20.6757L18.5649 16.1152C18.048 15.5863 17.2703 15.5285 16.666 15.8877L14.2746 13.4484C15.5353 12.0201 16.3075 10.1361 16.3075 8.06323C16.3075 3.60964 12.7697 0 8.40374 0C4.03781 0 0.5 3.60964 0.5 8.06323C0.5 12.516 4.0386 16.1257 8.40374 16.1257C10.1663 16.1257 11.7887 15.5301 13.1037 14.535L15.5495 17.0283C15.1973 17.6463 15.254 18.438 15.7709 18.9669L20.2432 23.5274C20.8601 24.1575 21.8608 24.1575 22.4793 23.5274L23.038 22.9575C23.6541 22.3274 23.6541 21.3058 23.0372 20.6757ZM8.38719 14.0761C5.11334 14.0761 2.45958 11.3691 2.45958 8.02947C2.45958 4.68989 5.11334 1.98285 8.38719 1.98285C11.661 1.98285 14.3156 4.68989 14.3156 8.02947C14.3156 11.3691 11.6618 14.0761 8.38719 14.0761Z" })
  }
);
var ForwardRef2 = forwardRef2(ZoomOut);
var ZoomOut_default = ForwardRef2;

// src/components/ZoomOut.tsx
var ZoomIn3 = createSvgIcon_default({
  as: ZoomOut_default,
  ariaLabel: "zoom out",
  category: "zc icons",
  displayName: "ZoomOutIcon"
});
var ZoomOut_default2 = ZoomIn3;
export {
  Icon_default as Icon,
  IconProvider_default as IconProvider,
  ZoomIn_default2 as ZoomIn,
  ZoomOut_default2 as ZoomOut,
  createIconFont_default as createIconFont,
  createSvgIcon_default as createSvgIcon
};
//# sourceMappingURL=index.js.map