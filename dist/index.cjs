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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Icon,
  IconProvider,
  createIconFont,
  createSvgIcon
});
//# sourceMappingURL=index.cjs.map