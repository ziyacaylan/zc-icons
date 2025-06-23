"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Icon: () => Icon_default,
  IconProvider: () => IconProvider_default,
  Player: () => Player_default2,
  ZoomIn: () => ZoomIn_default2,
  ZoomOut: () => ZoomOut_default2,
  createIconFont: () => createIconFont_default,
  createSvgIcon: () => createSvgIcon_default
});
module.exports = __toCommonJS(index_exports);

// src/createIconFont.tsx
var import_classnames3 = __toESM(require("classnames"), 1);
var import_react5 = __toESM(require("react"), 1);

// src/Icon.tsx
var import_classnames2 = __toESM(require("classnames"), 1);
var import_prop_types = __toESM(require("prop-types"), 1);
var import_react4 = __toESM(require("react"), 1);

// src/utils/inBrowserEnv.ts
function inBrowserEnv_default() {
  return typeof document !== "undefined" && typeof window !== "undefined" && typeof document.createElement === "function";
}

// src/utils/prefix.ts
var import_classnames = __toESM(require("classnames"), 1);
var prefix = (pre) => (className) => {
  if (!pre || !className) {
    return "";
  }
  if (Array.isArray(className)) {
    return (0, import_classnames.default)(
      className.filter((name) => !!name).map((name) => `${pre}-${name}`)
    );
  }
  return `${pre}-${className}`;
};

// src/utils/useIconContext.ts
var import_react2 = require("react");

// src/IconProvider.tsx
var import_react = require("react");
var IconContext = (0, import_react.createContext)({});
var IconProvider_default = IconContext.Provider;

// src/utils/useIconContext.ts
function useIconContext() {
  const {
    classPrefix = "dfl-",
    csp,
    disableInlineStyles = false
  } = (0, import_react2.useContext)(IconContext) || {};
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
var import_react3 = require("react");

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
  (0, import_react3.useEffect)(() => {
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
var import_jsx_runtime = require("react/jsx-runtime");
var Icon = import_react4.default.forwardRef(
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
    const classes = (0, import_classnames2.default)(className, componentClassName, {
      [addPrefix("spin")]: spin,
      [addPrefix("pulse")]: pulse,
      [addPrefix(`flip-${flip}`)]: !!flip
    });
    const rotateStyles = rotate ? { transform: `rotate(${rotate}deg)` } : {};
    useInsertStyles_default();
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  as: import_prop_types.default.elementType,
  spin: import_prop_types.default.bool,
  pulse: import_prop_types.default.bool,
  rotate: import_prop_types.default.number,
  viewBox: import_prop_types.default.string,
  flip: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  fill: import_prop_types.default.string,
  width: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
  height: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])
};
var Icon_default = Icon;

// src/createIconFont.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  const IconFont = import_react5.default.forwardRef(
    (props, ref) => {
      const { icon, children, className, ...restProps } = props;
      const { classPrefix } = useIconContext();
      const clesses = (0, import_classnames3.default)(
        className,
        commonProps.className,
        `${classPrefix}icon-font`
      );
      const content = (0, import_react5.useMemo)(() => {
        if (children) {
          return children;
        }
        if (icon) {
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("use", { xlinkHref: `#${icon}` });
        }
      }, [icon, children]);
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_react6 = __toESM(require("react"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
function createSvgIcon({ as, ariaLabel, displayName, category }) {
  const IconComponent = import_react6.default.forwardRef(
    (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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

// src/icons/Player.tsx
var import_react7 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Player = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M11.1652 0.106806C10.9545 0.211535 10.7589 0.4958 10.6686 0.809987C10.5331 1.33363 10.5933 2.76992 10.7739 3.21876C10.8793 3.44318 10.3225 3.77232 9.40446 4.02667C8.8627 4.17628 6.5 7.03389 6.5 7.54257C6.5 7.88668 8.87775 10.9537 9.22387 11.0585C9.49476 11.1482 9.52485 11.253 9.46466 11.7168C9.41951 12.016 9.29912 13.0783 9.20882 14.0956C9.04328 15.8012 9.04328 15.9508 9.29912 16.1304C9.52485 16.2949 9.5399 16.4445 9.43456 17.2076C9.28407 18.3297 9.28407 19.1974 9.43456 21.1274L9.55495 22.6684L9.13358 23.1023C8.71221 23.5362 8.69716 24 9.10348 24C9.20882 24 9.58505 23.8653 9.93118 23.7008L10.5632 23.3866L10.4729 22.2346C10.3977 21.3668 10.4428 20.8581 10.6234 20.2298C10.7589 19.766 10.8642 18.973 10.8642 18.4643C10.8642 17.3123 11.12 16.4146 11.4662 16.3249C11.6618 16.28 11.7521 16.0256 11.8274 15.2626C11.9628 14.0657 12.1735 13.8712 12.2939 14.8287C12.4444 16.0256 12.5046 16.1902 12.7905 16.2949C13.1667 16.3997 13.4226 17.2973 13.4226 18.4194C13.4226 18.9132 13.5279 19.6762 13.6633 20.125C13.8439 20.7235 13.8891 21.2621 13.8289 22.1747L13.7386 23.4165L14.3857 23.7307C15.0177 24.0299 15.5294 24.0299 15.5294 23.7157C15.5294 23.6409 15.3488 23.3567 15.1381 23.1023C14.7318 22.6385 14.7318 22.6236 14.8522 21.0377C15.0027 19.0328 15.0027 18.4643 14.8522 17.3721C14.777 16.7737 14.792 16.3997 14.9124 16.1603C15.093 15.8461 14.9425 14.1106 14.5362 11.7168C14.4459 11.2231 14.476 11.1632 14.8974 10.9986C15.1381 10.8939 15.409 10.6695 15.4993 10.4899C15.5746 10.3104 15.9959 9.72692 16.4324 9.18831C17.7115 7.60242 17.7266 7.55753 17.0795 6.70474C15.3488 4.43062 14.8673 3.96682 14.2803 3.95186C13.8289 3.95186 12.6851 3.33845 12.5949 3.05418C12.5497 2.90457 12.6099 2.53054 12.7453 2.23131C13.0915 1.39348 13.0463 0.570606 12.64 0.301303C12.1133 -0.0128842 11.5715 -0.0876907 11.1652 0.106806ZM9.94623 8.67963L9.96128 9.90646L9.47971 9.86157C9.13358 9.84661 8.92289 9.72692 8.8025 9.47258C8.38113 8.67963 7.82431 7.378 7.86946 7.31815C7.89956 7.30319 8.30588 6.989 8.75735 6.65985L9.58505 6.03148L9.76564 6.74962C9.85593 7.13862 9.94623 8.02133 9.94623 8.67963ZM15.3789 6.73466C15.7852 7.03389 16.1314 7.34807 16.1163 7.43784C16.1163 7.54257 15.8605 8.12606 15.5595 8.73948C15.0478 9.75684 14.9576 9.84661 14.5512 9.84661C14.1299 9.84661 14.0998 9.80173 13.9944 9.09855C13.9192 8.63475 13.9643 7.99141 14.0998 7.31815C14.2201 6.73466 14.3255 6.2559 14.3255 6.22598C14.3255 6.07636 14.7469 6.27086 15.3789 6.73466Z" })
  }
);
var ForwardRef = (0, import_react7.forwardRef)(Player);
var Player_default = ForwardRef;

// src/components/Player.tsx
var Player2 = createSvgIcon_default({
  as: Player_default,
  ariaLabel: "player",
  category: "zc icons",
  displayName: "Player"
});
var Player_default2 = Player2;

// src/icons/ZoomIn.tsx
var import_react8 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var ZoomIn = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 25",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M23.5173 23.4836L22.9344 24.0665C22.289 24.7111 21.2448 24.7111 20.6011 24.0665L15.9344 19.4015C15.3951 18.8605 15.3351 18.0499 15.7034 17.4184L13.1514 14.8681C11.7792 15.8859 10.0864 16.4951 8.24716 16.4951C3.69236 16.4951 0 12.8028 0 8.24799C0 3.69318 3.69236 0 8.24716 0C12.8028 0 16.4943 3.69236 16.4943 8.24799C16.4943 10.3684 15.6886 12.2955 14.3731 13.7565L16.8684 16.2518C17.4998 15.8843 18.3105 15.9435 18.8498 16.4845L23.5165 21.1494C24.161 21.7948 24.161 22.8398 23.5173 23.4836ZM14.4175 8.21428C14.4175 4.79817 11.6476 2.02911 8.23154 2.02911C4.81544 2.02911 2.04555 4.79735 2.04555 8.21428C2.04555 11.6312 4.81461 14.3994 8.23072 14.3994C11.6468 14.3994 14.4175 11.6304 14.4175 8.21428ZM8.59165 10.3272H7.76702V8.72978H6.11775V7.90514H7.76702V6.25505H8.59165V7.90514H10.2417V8.72978H8.59165V10.3272Z" })
  }
);
var ForwardRef2 = (0, import_react8.forwardRef)(ZoomIn);
var ZoomIn_default = ForwardRef2;

// src/components/ZoomIn.tsx
var ZoomIn2 = createSvgIcon_default({
  as: ZoomIn_default,
  ariaLabel: "zoom in",
  category: "zc icons",
  displayName: "ZoomInIcon"
});
var ZoomIn_default2 = ZoomIn2;

// src/icons/ZoomOut.tsx
var import_react9 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var ZoomOut = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M6.36221 7.72726H10.3145V8.53342H6.36221V7.72726ZM23.0372 20.6757L18.5649 16.1152C18.048 15.5863 17.2703 15.5285 16.666 15.8877L14.2746 13.4484C15.5353 12.0201 16.3075 10.1361 16.3075 8.06323C16.3075 3.60964 12.7697 0 8.40374 0C4.03781 0 0.5 3.60964 0.5 8.06323C0.5 12.516 4.0386 16.1257 8.40374 16.1257C10.1663 16.1257 11.7887 15.5301 13.1037 14.535L15.5495 17.0283C15.1973 17.6463 15.254 18.438 15.7709 18.9669L20.2432 23.5274C20.8601 24.1575 21.8608 24.1575 22.4793 23.5274L23.038 22.9575C23.6541 22.3274 23.6541 21.3058 23.0372 20.6757ZM8.38719 14.0761C5.11334 14.0761 2.45958 11.3691 2.45958 8.02947C2.45958 4.68989 5.11334 1.98285 8.38719 1.98285C11.661 1.98285 14.3156 4.68989 14.3156 8.02947C14.3156 11.3691 11.6618 14.0761 8.38719 14.0761Z" })
  }
);
var ForwardRef3 = (0, import_react9.forwardRef)(ZoomOut);
var ZoomOut_default = ForwardRef3;

// src/components/ZoomOut.tsx
var ZoomIn3 = createSvgIcon_default({
  as: ZoomOut_default,
  ariaLabel: "zoom out",
  category: "zc icons",
  displayName: "ZoomOutIcon"
});
var ZoomOut_default2 = ZoomIn3;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Icon,
  IconProvider,
  Player,
  ZoomIn,
  ZoomOut,
  createIconFont,
  createSvgIcon
});
//# sourceMappingURL=index.cjs.map