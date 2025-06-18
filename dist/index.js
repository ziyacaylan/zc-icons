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
export {
  Icon_default as Icon,
  IconProvider_default as IconProvider,
  createIconFont_default as createIconFont,
  createSvgIcon_default as createSvgIcon
};
//# sourceMappingURL=index.js.map