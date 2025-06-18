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
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var ZoomIn = (props, ref) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 64 64",
    children: [
      /* @__PURE__ */ jsx4(
        "rect",
        {
          x: "1.5",
          y: "1.5",
          width: "61",
          height: "61",
          rx: "3.5",
          fill: "transparent",
          stroke: "currentColor",
          strokeWidth: "3"
        }
      ),
      /* @__PURE__ */ jsx4("path", { d: "M16.9458 39.168C15.7778 39.168 14.7218 38.968 13.7778 38.568C12.8498 38.168 12.1138 37.592 11.5698 36.84C11.0258 36.088 10.7458 35.2 10.7298 34.176H14.3298C14.3778 34.864 14.6178 35.408 15.0498 35.808C15.4978 36.208 16.1058 36.408 16.8738 36.408C17.6578 36.408 18.2738 36.224 18.7218 35.856C19.1698 35.472 19.3938 34.976 19.3938 34.368C19.3938 33.872 19.2418 33.464 18.9378 33.144C18.6338 32.824 18.2498 32.576 17.7858 32.4C17.3378 32.208 16.7138 32 15.9138 31.776C14.8258 31.456 13.9378 31.144 13.2498 30.84C12.5778 30.52 11.9938 30.048 11.4978 29.424C11.0178 28.784 10.7778 27.936 10.7778 26.88C10.7778 25.888 11.0258 25.024 11.5218 24.288C12.0178 23.552 12.7138 22.992 13.6098 22.608C14.5058 22.208 15.5298 22.008 16.6818 22.008C18.4098 22.008 19.8098 22.432 20.8818 23.28C21.9698 24.112 22.5698 25.28 22.6818 26.784H18.9858C18.9538 26.208 18.7058 25.736 18.2418 25.368C17.7938 24.984 17.1938 24.792 16.4418 24.792C15.7858 24.792 15.2578 24.96 14.8578 25.296C14.4738 25.632 14.2818 26.12 14.2818 26.76C14.2818 27.208 14.4258 27.584 14.7138 27.888C15.0178 28.176 15.3858 28.416 15.8178 28.608C16.2658 28.784 16.8898 28.992 17.6898 29.232C18.7778 29.552 19.6658 29.872 20.3538 30.192C21.0418 30.512 21.6338 30.992 22.1298 31.632C22.6258 32.272 22.8738 33.112 22.8738 34.152C22.8738 35.048 22.6418 35.88 22.1778 36.648C21.7138 37.416 21.0338 38.032 20.1378 38.496C19.2418 38.944 18.1778 39.168 16.9458 39.168ZM38.2668 41.952L35.7228 38.904C35.0188 39.08 34.2988 39.168 33.5628 39.168C31.9948 39.168 30.5548 38.8 29.2428 38.064C27.9308 37.328 26.8908 36.312 26.1228 35.016C25.3548 33.704 24.9708 32.224 24.9708 30.576C24.9708 28.944 25.3548 27.48 26.1228 26.184C26.8908 24.872 27.9308 23.848 29.2428 23.112C30.5548 22.376 31.9948 22.008 33.5628 22.008C35.1468 22.008 36.5868 22.376 37.8828 23.112C39.1948 23.848 40.2268 24.872 40.9788 26.184C41.7468 27.48 42.1308 28.944 42.1308 30.576C42.1308 32.064 41.8108 33.424 41.1708 34.656C40.5468 35.872 39.6908 36.864 38.6028 37.632L42.4428 41.952H38.2668ZM28.4268 30.576C28.4268 31.696 28.6428 32.68 29.0748 33.528C29.5068 34.376 30.1068 35.032 30.8748 35.496C31.6588 35.944 32.5548 36.168 33.5628 36.168C34.5708 36.168 35.4588 35.944 36.2268 35.496C36.9948 35.032 37.5948 34.376 38.0268 33.528C38.4588 32.68 38.6748 31.696 38.6748 30.576C38.6748 29.456 38.4588 28.48 38.0268 27.648C37.5948 26.8 36.9948 26.152 36.2268 25.704C35.4588 25.256 34.5708 25.032 33.5628 25.032C32.5548 25.032 31.6588 25.256 30.8748 25.704C30.1068 26.152 29.5068 26.8 29.0748 27.648C28.6428 28.48 28.4268 29.456 28.4268 30.576ZM48.0374 36.336H53.5574V39H44.6774V22.248H48.0374V36.336Z" })
    ]
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
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var ZoomOut = (props, ref) => /* @__PURE__ */ jsxs2(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 64 64",
    children: [
      /* @__PURE__ */ jsx5(
        "rect",
        {
          x: "1.5",
          y: "1.5",
          width: "61",
          height: "61",
          rx: "3.5",
          fill: "transparent",
          stroke: "currentColor",
          strokeWidth: "3"
        }
      ),
      /* @__PURE__ */ jsx5("path", { d: "M16.9458 39.168C15.7778 39.168 14.7218 38.968 13.7778 38.568C12.8498 38.168 12.1138 37.592 11.5698 36.84C11.0258 36.088 10.7458 35.2 10.7298 34.176H14.3298C14.3778 34.864 14.6178 35.408 15.0498 35.808C15.4978 36.208 16.1058 36.408 16.8738 36.408C17.6578 36.408 18.2738 36.224 18.7218 35.856C19.1698 35.472 19.3938 34.976 19.3938 34.368C19.3938 33.872 19.2418 33.464 18.9378 33.144C18.6338 32.824 18.2498 32.576 17.7858 32.4C17.3378 32.208 16.7138 32 15.9138 31.776C14.8258 31.456 13.9378 31.144 13.2498 30.84C12.5778 30.52 11.9938 30.048 11.4978 29.424C11.0178 28.784 10.7778 27.936 10.7778 26.88C10.7778 25.888 11.0258 25.024 11.5218 24.288C12.0178 23.552 12.7138 22.992 13.6098 22.608C14.5058 22.208 15.5298 22.008 16.6818 22.008C18.4098 22.008 19.8098 22.432 20.8818 23.28C21.9698 24.112 22.5698 25.28 22.6818 26.784H18.9858C18.9538 26.208 18.7058 25.736 18.2418 25.368C17.7938 24.984 17.1938 24.792 16.4418 24.792C15.7858 24.792 15.2578 24.96 14.8578 25.296C14.4738 25.632 14.2818 26.12 14.2818 26.76C14.2818 27.208 14.4258 27.584 14.7138 27.888C15.0178 28.176 15.3858 28.416 15.8178 28.608C16.2658 28.784 16.8898 28.992 17.6898 29.232C18.7778 29.552 19.6658 29.872 20.3538 30.192C21.0418 30.512 21.6338 30.992 22.1298 31.632C22.6258 32.272 22.8738 33.112 22.8738 34.152C22.8738 35.048 22.6418 35.88 22.1778 36.648C21.7138 37.416 21.0338 38.032 20.1378 38.496C19.2418 38.944 18.1778 39.168 16.9458 39.168ZM38.2668 41.952L35.7228 38.904C35.0188 39.08 34.2988 39.168 33.5628 39.168C31.9948 39.168 30.5548 38.8 29.2428 38.064C27.9308 37.328 26.8908 36.312 26.1228 35.016C25.3548 33.704 24.9708 32.224 24.9708 30.576C24.9708 28.944 25.3548 27.48 26.1228 26.184C26.8908 24.872 27.9308 23.848 29.2428 23.112C30.5548 22.376 31.9948 22.008 33.5628 22.008C35.1468 22.008 36.5868 22.376 37.8828 23.112C39.1948 23.848 40.2268 24.872 40.9788 26.184C41.7468 27.48 42.1308 28.944 42.1308 30.576C42.1308 32.064 41.8108 33.424 41.1708 34.656C40.5468 35.872 39.6908 36.864 38.6028 37.632L42.4428 41.952H38.2668ZM28.4268 30.576C28.4268 31.696 28.6428 32.68 29.0748 33.528C29.5068 34.376 30.1068 35.032 30.8748 35.496C31.6588 35.944 32.5548 36.168 33.5628 36.168C34.5708 36.168 35.4588 35.944 36.2268 35.496C36.9948 35.032 37.5948 34.376 38.0268 33.528C38.4588 32.68 38.6748 31.696 38.6748 30.576C38.6748 29.456 38.4588 28.48 38.0268 27.648C37.5948 26.8 36.9948 26.152 36.2268 25.704C35.4588 25.256 34.5708 25.032 33.5628 25.032C32.5548 25.032 31.6588 25.256 30.8748 25.704C30.1068 26.152 29.5068 26.8 29.0748 27.648C28.6428 28.48 28.4268 29.456 28.4268 30.576ZM48.0374 36.336H53.5574V39H44.6774V22.248H48.0374V36.336Z" })
    ]
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