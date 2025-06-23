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
  Arrow: () => Arrow_default2,
  Ball: () => Ball_default2,
  CurvedArrow: () => CurvedArrow_default2,
  Ellipse: () => Ellipse_default2,
  Flag: () => Flag_default2,
  FlagWithStand: () => FlagWithStand_default2,
  Hand: () => Hand_default2,
  Icon: () => Icon_default,
  IconProvider: () => IconProvider_default,
  Judge: () => Judge_default2,
  Player: () => Player_default2,
  Player01: () => Player01_default2,
  Rectangle: () => Rectangle_default2,
  Shape: () => Shape_default2,
  SoccerField: () => SoccerField_default2,
  SoccerTools: () => SoccerTools_default2,
  SoccerTools01: () => SoccerTools01_default2,
  TacticTools: () => TacticTools_default2,
  Text: () => Text_default2,
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

// src/icons/Arrow.tsx
var import_react7 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Arrow = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M18.3031 3.56707L18.7487 4.01271L9.77503 13.0071L0.800062 22.0132L1.39598 22.6091L1.99189 23.205L10.9915 14.2365L19.9859 5.26283L20.4458 5.68386L20.9056 6.10488L21.7697 3.76916C22.2413 2.47888 22.6247 1.41142 22.6092 1.39588C22.5885 1.37515 20.6686 2.07211 18.4093 2.92193L17.8626 3.12661L18.3031 3.56707Z" })
  }
);
var ForwardRef = (0, import_react7.forwardRef)(Arrow);
var Arrow_default = ForwardRef;

// src/components/Arrow.tsx
var Arrow2 = createSvgIcon_default({
  as: Arrow_default,
  ariaLabel: "arrow",
  category: "zc icons",
  displayName: "Arrow"
});
var Arrow_default2 = Arrow2;

// src/icons/Ball.tsx
var import_react8 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Ball = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M8.74247 0.358909C6.8023 0.874203 5.23613 1.8111 3.55309 3.49752C1.12203 5.88661 0 8.62704 0 12.0936C0 21.6031 10.7294 27.2713 18.6771 21.9544C24.7314 17.9023 25.8067 9.39998 20.9445 3.96597C19.5186 2.37324 17.4849 1.03816 15.5448 0.452601C13.7448 -0.109538 10.6359 -0.156385 8.74247 0.358909ZM8.7191 0.874205C8.7191 1.1787 8.06458 1.69399 6.75555 2.44351C6.10103 2.79485 5.16601 3.4741 4.65174 3.94255C3.64659 4.8326 2.40769 5.51185 2.40769 5.16051C2.40769 4.6218 5.16601 2.27955 6.66204 1.50661C8.36846 0.663401 8.7191 0.54629 8.7191 0.874205ZM17.6719 1.69399C18.9342 2.34982 21.5757 4.69206 21.5757 5.16051C21.5757 5.51185 20.3368 4.8326 19.3316 3.94255C18.8174 3.4741 17.8823 2.79485 17.2278 2.44351C15.8954 1.67057 15.2643 1.1787 15.2643 0.874205C15.2643 0.569713 16.0824 0.850781 17.6719 1.69399ZM10.7761 2.56062L11.7579 3.00565V4.85602V6.68297L10.893 7.19827C10.4021 7.45591 9.51387 8.11174 8.88273 8.62704L7.7607 9.56393L6.10103 8.97837C5.16601 8.67388 4.34786 8.2757 4.23098 8.11174C4.13748 7.97121 4.04398 7.19827 4.04398 6.42533C4.04398 5.09025 4.09073 4.94971 4.93225 4.15335C6.94255 2.16244 8.8126 1.67057 10.7761 2.56062ZM16.9239 2.58404C17.4616 2.84169 18.3498 3.49752 18.9109 4.01281C19.916 4.92629 19.9394 4.99656 19.9394 6.4019C19.9394 7.17484 19.8459 7.97121 19.7524 8.11174C19.6355 8.2757 18.8174 8.67388 17.8823 8.97837L16.1993 9.56393L15.2876 8.79099C14.7734 8.34597 13.8851 7.71356 13.3007 7.3388L12.2254 6.65955V4.8326V3.00565L13.2306 2.56062C14.5162 1.97506 15.7551 1.97506 16.9239 2.58404ZM6.21791 9.32971C7.24643 9.68105 7.78407 9.98554 7.78407 10.2198C7.78407 10.4306 8.11133 11.5314 8.48534 12.6557L9.20998 14.7403L8.08795 16.3799C6.82567 18.2068 6.63867 18.2771 4.55824 17.6681C3.52971 17.3636 3.27258 17.1528 2.75832 16.2862C2.43106 15.724 2.03368 14.67 1.87005 13.9205C1.61292 12.6557 1.63629 12.5386 2.29081 11.2738C3.13233 9.68105 4.0206 8.58019 4.37124 8.72073C4.51149 8.76757 5.32964 9.04864 6.21791 9.32971ZM20.664 9.6342C22.4406 12.0467 22.6042 13.4286 21.4354 15.8177C20.7809 17.1997 19.9628 17.7149 18.1161 17.9492L16.9941 18.0663L15.8954 16.4033L14.7734 14.7169L15.498 12.6089C15.872 11.4377 16.1993 10.3603 16.1993 10.1729C16.1993 9.91527 18.9576 8.74415 19.7524 8.67388C19.8693 8.65046 20.2666 9.09549 20.664 9.6342ZM1.47266 13.1241C1.47266 14.061 2.12718 16.0285 2.64144 16.6609C3.01545 17.1528 3.0622 17.4339 2.92195 18.2771L2.73494 19.3077L1.98693 18.1366C1.02853 16.6844 0.303883 14.3421 0.303883 12.8197V11.672L0.888272 12.0936C1.23891 12.3512 1.44929 12.7494 1.47266 13.1241ZM23.2353 15.4195C22.9782 16.2628 22.4172 17.4807 22.0198 18.1366L21.2484 19.3077L21.0614 18.2771C20.9212 17.4339 20.9679 17.1528 21.3419 16.6609C21.8562 16.0285 22.5107 14.0376 22.5107 13.1476C22.5107 12.8431 22.7445 12.3981 23.0483 12.1638L23.5626 11.7422L23.6327 12.7962C23.6795 13.4052 23.4925 14.5295 23.2353 15.4195ZM15.6383 16.4736C16.8772 18.3239 16.8772 18.3942 15.2175 20.5256L14.2825 21.767H11.9917H9.70087L8.76585 20.5256C7.12956 18.3942 7.10618 18.3239 8.34509 16.4736L9.42036 14.8574L11.9917 14.8808L14.5864 14.9043L15.6383 16.4736ZM14.8435 22.4931C15.2175 22.7742 15.4513 23.0787 15.3344 23.1958C14.937 23.594 12.0151 23.8516 10.4489 23.6174C8.41521 23.3363 8.27496 23.2192 9.09311 22.54C9.70087 22.0715 10.0281 22.0013 11.9449 22.0013C13.815 22.0013 14.2357 22.0715 14.8435 22.4931Z" })
  }
);
var ForwardRef2 = (0, import_react8.forwardRef)(Ball);
var Ball_default = ForwardRef2;

// src/components/Ball.tsx
var Ball2 = createSvgIcon_default({
  as: Ball_default,
  ariaLabel: "ball",
  category: "zc icons",
  displayName: "Ball"
});
var Ball_default2 = Ball2;

// src/icons/CurvedArrow.tsx
var import_react9 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var CurvedArrow = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M18.2296 0.0684108C17.9294 0.174755 17.7104 0.356166 17.5478 0.637666C17.3414 1.00049 17.2976 1.25696 17.3851 1.63855C17.4602 1.93882 17.5353 2.03265 18.4674 2.97724L19.4745 3.99689H18.6988C15.1081 4.00315 11.53 5.05408 8.55231 6.98079C6.32534 8.41957 4.23598 10.5465 2.82848 12.7922C1.2646 15.2819 0.313755 18.1657 0.0572772 21.1997C-0.0240449 22.1693 -0.0177893 22.7886 0.0697883 23.1013C0.226177 23.608 0.807943 24.0146 1.38345 24.0146C1.70249 24.0146 2.20293 23.7394 2.40311 23.4516C2.62205 23.1326 2.67835 22.8574 2.68461 22.138C2.68461 20.7242 3.0662 18.7287 3.62294 17.2086C5.91247 10.9531 11.9303 6.68678 18.4736 6.68678H19.4119L18.4986 7.60635C17.9982 8.1193 17.5353 8.63226 17.4727 8.75111C17.3288 9.02636 17.3226 9.64565 17.4602 9.90839C17.5791 10.1273 17.9106 10.4526 18.1358 10.5715C18.2234 10.6153 18.4611 10.6528 18.6675 10.6528C18.9678 10.6591 19.0992 10.6278 19.3244 10.4902C19.6622 10.29 23.7095 6.23638 23.8534 5.96114C24.0035 5.65462 24.041 5.27928 23.9535 4.94774C23.8784 4.67875 23.6845 4.46606 21.6765 2.44552C20.2502 1.013 19.3932 0.193522 19.2243 0.118455C18.949 -0.0191669 18.5299 -0.0379336 18.2296 0.0684108Z" })
  }
);
var ForwardRef3 = (0, import_react9.forwardRef)(CurvedArrow);
var CurvedArrow_default = ForwardRef3;

// src/components/CurvedArrow.tsx
var CurvedArrow2 = createSvgIcon_default({
  as: CurvedArrow_default,
  ariaLabel: "curved arrow",
  category: "zc icons",
  displayName: "Curved arrow"
});
var CurvedArrow_default2 = CurvedArrow2;

// src/icons/Flag.tsx
var import_react10 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Flag = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M8.27315 0.0815641C8.25276 0.129143 8.24597 5.51912 8.25276 12.0646L8.27315 23.9592L8.8373 23.9796L9.39465 24V14.8241V5.64826L9.75489 5.53951C13.031 4.57434 15.6886 3.7791 15.7294 3.74512C15.7566 3.72472 15.7566 3.67035 15.7294 3.62957C15.7022 3.58879 14.2681 2.97706 12.5416 2.27698L9.39465 0.992354V0.496177V7.59959e-07H8.85089C8.47706 7.59959e-07 8.29354 0.0271885 8.27315 0.0815641ZM9.19074 11.9966V23.7893H8.85089H8.51105V11.9966V0.203909H8.85089H9.19074V11.9966ZM12.3649 2.46049C14.4244 3.30331 15.2128 3.64996 15.1245 3.68394C14.9477 3.76551 9.53738 5.36958 9.46262 5.36958C9.42184 5.36958 9.39465 4.60153 9.39465 3.3305C9.39465 2.20901 9.41504 1.29142 9.44223 1.29142C9.46941 1.29142 10.788 1.82158 12.3649 2.46049Z" })
  }
);
var ForwardRef4 = (0, import_react10.forwardRef)(Flag);
var Flag_default = ForwardRef4;

// src/components/Flag.tsx
var Flag2 = createSvgIcon_default({
  as: Flag_default,
  ariaLabel: "flag",
  category: "zc icons",
  displayName: "Flag"
});
var Flag_default2 = Flag2;

// src/icons/FlagWithStand.tsx
var import_react11 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var FlagWithStand = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M9.33904 0.0293401C9.31213 0.0562524 9.29195 4.82647 9.29195 10.6328C9.29195 20.9402 9.29195 21.1825 9.16411 21.1825C9.09683 21.1825 8.83444 21.243 8.59222 21.317C7.79831 21.566 7.41481 22.0638 7.40808 22.8443C7.40808 23.2278 7.42154 23.2682 7.6032 23.396C8.32983 23.9141 9.76291 24.1428 10.8596 23.9073C11.418 23.793 12.0572 23.5104 12.259 23.2951C12.3869 23.1538 12.4003 23.0932 12.36 22.7501C12.2523 21.8485 11.7477 21.3641 10.7519 21.2161L10.4357 21.169V13.3173V5.47237L13.5172 4.55735C15.5356 3.95855 16.5919 3.60868 16.5919 3.55486C16.5919 3.50103 15.3674 2.96952 13.5172 2.21597L10.4424 0.964545L10.4223 0.493578L10.4021 0.022612L9.89747 0.00242769C9.61489 -0.0043004 9.36596 0.00242769 9.33904 0.0293401ZM10.2339 10.949C10.2339 22.7837 10.2675 21.8889 9.81674 21.8418L9.59471 21.8216L9.57453 11.0029L9.56107 0.190814H9.89747H10.2339V10.949ZM14.661 2.93588C15.4818 3.26555 16.0537 3.53468 16.0066 3.56159C15.9595 3.5885 14.7215 3.96527 13.2615 4.39587C11.8015 4.8332 10.5636 5.20324 10.5232 5.2167C10.4559 5.24361 10.4357 4.81974 10.4357 3.23191V1.20676L11.8352 1.77864C12.6022 2.09486 13.8738 2.61293 14.661 2.93588ZM9.29195 21.5794C9.29195 21.862 9.48033 22.0571 9.79655 22.1042C10.1666 22.1513 10.4357 21.9427 10.4357 21.6198C10.4357 21.3978 10.4424 21.391 10.6577 21.4247C11.6535 21.5996 12.1177 22.0437 12.1177 22.8174V23.1807L11.7006 23.3825C11.1085 23.6719 10.6443 23.766 9.86383 23.7593C9.10356 23.7593 8.50476 23.6248 7.9867 23.3489C7.68393 23.1874 7.64356 23.1403 7.62338 22.9318C7.57628 22.4473 7.86559 21.9024 8.28946 21.6803C8.45766 21.5996 9.0901 21.4045 9.24485 21.391C9.27176 21.3843 9.29195 21.4718 9.29195 21.5794Z" })
  }
);
var ForwardRef5 = (0, import_react11.forwardRef)(FlagWithStand);
var FlagWithStand_default = ForwardRef5;

// src/components/FlagWithStand.tsx
var FlagWithStand2 = createSvgIcon_default({
  as: FlagWithStand_default,
  ariaLabel: "flag with stand",
  category: "zc icons",
  displayName: "Flag with stand"
});
var FlagWithStand_default2 = FlagWithStand2;

// src/icons/Hand.tsx
var import_react12 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var Hand = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M9.35869 0C10.4661 0 11.413 0.967969 11.413 2.1V6.78052C12.2122 6.01458 13.7458 5.92055 14.7385 7.07578C15.8086 6.40603 17.2237 6.97514 17.6595 7.84687C19.963 7.42622 21 8.87559 21 11.25C21 11.3787 20.9905 11.8723 20.9909 12C20.9987 14.9049 19.5347 15.6044 19.1948 17.7999C19.1101 18.3471 18.6375 18.75 18.0837 18.75H10.0435L10.0434 18.7499C9.18253 18.7494 8.36114 18.2527 7.9882 17.4157C7.37911 16.0616 5.68955 12.9432 4.36369 12.375C3.5108 12.0095 3.00038 11.3726 3 10.5C2.99934 8.89584 4.64522 7.79287 6.13631 8.43192C6.52814 8.59987 6.91772 8.82155 7.30434 9.09534V2.1C7.30434 1.00078 8.2673 0 9.35869 0ZM9.375 19.5H18.375C18.9963 19.5 19.5 20.0037 19.5 20.625V22.875C19.5 23.4963 18.9963 24 18.375 24H9.375C8.75367 24 8.25 23.4963 8.25 22.875V20.625C8.25 20.0037 8.75367 19.5 9.375 19.5ZM17.25 20.8125C16.7322 20.8125 16.3125 21.2322 16.3125 21.75C16.3125 22.2678 16.7322 22.6875 17.25 22.6875C17.7678 22.6875 18.1875 22.2678 18.1875 21.75C18.1875 21.2322 17.7678 20.8125 17.25 20.8125Z" })
  }
);
var ForwardRef6 = (0, import_react12.forwardRef)(Hand);
var Hand_default = ForwardRef6;

// src/components/Hand.tsx
var Hand2 = createSvgIcon_default({
  as: Hand_default,
  ariaLabel: "hand",
  category: "zc icons",
  displayName: "Hand"
});
var Hand_default2 = Hand2;

// src/icons/Player.tsx
var import_react13 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Player = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M11.1652 0.106806C10.9545 0.211535 10.7589 0.4958 10.6686 0.809987C10.5331 1.33363 10.5933 2.76992 10.7739 3.21876C10.8793 3.44318 10.3225 3.77232 9.40446 4.02667C8.8627 4.17628 6.5 7.03389 6.5 7.54257C6.5 7.88668 8.87775 10.9537 9.22387 11.0585C9.49476 11.1482 9.52485 11.253 9.46466 11.7168C9.41951 12.016 9.29912 13.0783 9.20882 14.0956C9.04328 15.8012 9.04328 15.9508 9.29912 16.1304C9.52485 16.2949 9.5399 16.4445 9.43456 17.2076C9.28407 18.3297 9.28407 19.1974 9.43456 21.1274L9.55495 22.6684L9.13358 23.1023C8.71221 23.5362 8.69716 24 9.10348 24C9.20882 24 9.58505 23.8653 9.93118 23.7008L10.5632 23.3866L10.4729 22.2346C10.3977 21.3668 10.4428 20.8581 10.6234 20.2298C10.7589 19.766 10.8642 18.973 10.8642 18.4643C10.8642 17.3123 11.12 16.4146 11.4662 16.3249C11.6618 16.28 11.7521 16.0256 11.8274 15.2626C11.9628 14.0657 12.1735 13.8712 12.2939 14.8287C12.4444 16.0256 12.5046 16.1902 12.7905 16.2949C13.1667 16.3997 13.4226 17.2973 13.4226 18.4194C13.4226 18.9132 13.5279 19.6762 13.6633 20.125C13.8439 20.7235 13.8891 21.2621 13.8289 22.1747L13.7386 23.4165L14.3857 23.7307C15.0177 24.0299 15.5294 24.0299 15.5294 23.7157C15.5294 23.6409 15.3488 23.3567 15.1381 23.1023C14.7318 22.6385 14.7318 22.6236 14.8522 21.0377C15.0027 19.0328 15.0027 18.4643 14.8522 17.3721C14.777 16.7737 14.792 16.3997 14.9124 16.1603C15.093 15.8461 14.9425 14.1106 14.5362 11.7168C14.4459 11.2231 14.476 11.1632 14.8974 10.9986C15.1381 10.8939 15.409 10.6695 15.4993 10.4899C15.5746 10.3104 15.9959 9.72692 16.4324 9.18831C17.7115 7.60242 17.7266 7.55753 17.0795 6.70474C15.3488 4.43062 14.8673 3.96682 14.2803 3.95186C13.8289 3.95186 12.6851 3.33845 12.5949 3.05418C12.5497 2.90457 12.6099 2.53054 12.7453 2.23131C13.0915 1.39348 13.0463 0.570606 12.64 0.301303C12.1133 -0.0128842 11.5715 -0.0876907 11.1652 0.106806ZM9.94623 8.67963L9.96128 9.90646L9.47971 9.86157C9.13358 9.84661 8.92289 9.72692 8.8025 9.47258C8.38113 8.67963 7.82431 7.378 7.86946 7.31815C7.89956 7.30319 8.30588 6.989 8.75735 6.65985L9.58505 6.03148L9.76564 6.74962C9.85593 7.13862 9.94623 8.02133 9.94623 8.67963ZM15.3789 6.73466C15.7852 7.03389 16.1314 7.34807 16.1163 7.43784C16.1163 7.54257 15.8605 8.12606 15.5595 8.73948C15.0478 9.75684 14.9576 9.84661 14.5512 9.84661C14.1299 9.84661 14.0998 9.80173 13.9944 9.09855C13.9192 8.63475 13.9643 7.99141 14.0998 7.31815C14.2201 6.73466 14.3255 6.2559 14.3255 6.22598C14.3255 6.07636 14.7469 6.27086 15.3789 6.73466Z" })
  }
);
var ForwardRef7 = (0, import_react13.forwardRef)(Player);
var Player_default = ForwardRef7;

// src/components/Player.tsx
var Player2 = createSvgIcon_default({
  as: Player_default,
  ariaLabel: "player",
  category: "zc icons",
  displayName: "Player"
});
var Player_default2 = Player2;

// src/icons/ZoomIn.tsx
var import_react14 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var ZoomIn = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 25",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M23.5173 23.4836L22.9344 24.0665C22.289 24.7111 21.2448 24.7111 20.6011 24.0665L15.9344 19.4015C15.3951 18.8605 15.3351 18.0499 15.7034 17.4184L13.1514 14.8681C11.7792 15.8859 10.0864 16.4951 8.24716 16.4951C3.69236 16.4951 0 12.8028 0 8.24799C0 3.69318 3.69236 0 8.24716 0C12.8028 0 16.4943 3.69236 16.4943 8.24799C16.4943 10.3684 15.6886 12.2955 14.3731 13.7565L16.8684 16.2518C17.4998 15.8843 18.3105 15.9435 18.8498 16.4845L23.5165 21.1494C24.161 21.7948 24.161 22.8398 23.5173 23.4836ZM14.4175 8.21428C14.4175 4.79817 11.6476 2.02911 8.23154 2.02911C4.81544 2.02911 2.04555 4.79735 2.04555 8.21428C2.04555 11.6312 4.81461 14.3994 8.23072 14.3994C11.6468 14.3994 14.4175 11.6304 14.4175 8.21428ZM8.59165 10.3272H7.76702V8.72978H6.11775V7.90514H7.76702V6.25505H8.59165V7.90514H10.2417V8.72978H8.59165V10.3272Z" })
  }
);
var ForwardRef8 = (0, import_react14.forwardRef)(ZoomIn);
var ZoomIn_default = ForwardRef8;

// src/components/ZoomIn.tsx
var ZoomIn2 = createSvgIcon_default({
  as: ZoomIn_default,
  ariaLabel: "zoom in",
  category: "zc icons",
  displayName: "ZoomInIcon"
});
var ZoomIn_default2 = ZoomIn2;

// src/icons/ZoomOut.tsx
var import_react15 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var ZoomOut = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M6.36221 7.72726H10.3145V8.53342H6.36221V7.72726ZM23.0372 20.6757L18.5649 16.1152C18.048 15.5863 17.2703 15.5285 16.666 15.8877L14.2746 13.4484C15.5353 12.0201 16.3075 10.1361 16.3075 8.06323C16.3075 3.60964 12.7697 0 8.40374 0C4.03781 0 0.5 3.60964 0.5 8.06323C0.5 12.516 4.0386 16.1257 8.40374 16.1257C10.1663 16.1257 11.7887 15.5301 13.1037 14.535L15.5495 17.0283C15.1973 17.6463 15.254 18.438 15.7709 18.9669L20.2432 23.5274C20.8601 24.1575 21.8608 24.1575 22.4793 23.5274L23.038 22.9575C23.6541 22.3274 23.6541 21.3058 23.0372 20.6757ZM8.38719 14.0761C5.11334 14.0761 2.45958 11.3691 2.45958 8.02947C2.45958 4.68989 5.11334 1.98285 8.38719 1.98285C11.661 1.98285 14.3156 4.68989 14.3156 8.02947C14.3156 11.3691 11.6618 14.0761 8.38719 14.0761Z" })
  }
);
var ForwardRef9 = (0, import_react15.forwardRef)(ZoomOut);
var ZoomOut_default = ForwardRef9;

// src/components/ZoomOut.tsx
var ZoomIn3 = createSvgIcon_default({
  as: ZoomOut_default,
  ariaLabel: "zoom out",
  category: "zc icons",
  displayName: "ZoomOutIcon"
});
var ZoomOut_default2 = ZoomIn3;

// src/icons/Text.tsx
var import_react16 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var Text = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 0V7.2H21.6C21.6 4.5492 19.4508 2.4 16.8 2.4H15.1032C14.052 2.4 13.2 3.25193 13.2 4.30313V20.4C13.2 21.0624 13.7376 21.6 14.4 21.6H16.8V24H7.2V21.6H9.6C10.2624 21.6 10.8 21.0624 10.8 20.4V4.30313C10.8 3.25193 9.948 2.4 8.8968 2.4H7.2C4.5492 2.4 2.4 4.5492 2.4 7.2H0V0H24Z"
      }
    )
  }
);
var ForwardRef10 = (0, import_react16.forwardRef)(Text);
var Text_default = ForwardRef10;

// src/components/Text.tsx
var Text2 = createSvgIcon_default({
  as: Text_default,
  ariaLabel: "text",
  category: "zc icons",
  displayName: "Text"
});
var Text_default2 = Text2;

// src/icons/TacticTools.tsx
var import_react17 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var TacticTools = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M5.28753 11.0129C5.69273 11.0129 6.0978 10.8585 6.40693 10.5498C7.02426 9.93186 7.02426 8.93013 6.40693 8.31187L5.67226 7.57807L6.40693 6.84421C7.02426 6.22641 7.02426 5.22455 6.40693 4.60668C5.78886 3.98868 4.78647 3.98855 4.1692 4.60668L3.43534 5.34061L2.70061 4.60661C2.08341 3.98848 1.08108 3.98862 0.463748 4.60661C-0.154583 5.22455 -0.154583 6.22641 0.463748 6.84414L1.19748 7.57801L0.463748 8.3118C-0.154583 8.93007 -0.154583 9.93186 0.463748 10.5497C0.772747 10.8585 1.17715 11.0129 1.58208 11.0129C1.98728 11.0129 2.39234 10.8585 2.70054 10.5495L3.43527 9.8158L4.16914 10.5495C4.4782 10.8585 4.88247 11.0129 5.28753 11.0129Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M16.5286 12.4727C14.4896 12.4727 12.837 14.1253 12.837 16.1643C12.837 18.2033 14.4896 19.856 16.5286 19.856C18.5675 19.856 20.2211 18.2033 20.2211 16.1643C20.2211 14.1253 18.5675 12.4727 16.5286 12.4727Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M23.6148 3.90153C23.5467 3.6166 23.3627 3.37267 23.1082 3.2284L17.6447 0.137013C17.1382 -0.149786 16.4949 0.0282804 16.2083 0.534679L15.8641 1.14141C15.7262 1.38488 15.6905 1.67334 15.7651 1.94294C15.8395 2.21267 16.0191 2.44161 16.2627 2.57947L18.2341 3.69473C16.1814 4.4718 14.2656 5.61546 12.5174 7.10846C10.4456 8.87832 8.59957 11.1424 7.03191 13.8376C4.72032 17.8129 3.71732 21.4825 3.46486 22.5117C3.39792 22.788 3.44439 23.0791 3.59439 23.3203C3.74439 23.5615 3.98485 23.7323 4.26272 23.7934L5.08758 23.9753C5.16352 23.9922 5.24018 24 5.31545 24C5.78925 24 6.21938 23.6785 6.33785 23.2C6.57184 22.2591 7.49758 18.9124 9.58563 15.3228C12.0692 11.0526 15.171 8.13752 18.8301 6.62939L17.6506 8.39925C17.4956 8.63225 17.4391 8.91725 17.4939 9.19212C17.5494 9.46651 17.7113 9.70778 17.9441 9.86278L18.5248 10.2486C19.0097 10.5708 19.664 10.4395 19.987 9.95525L23.4662 4.7314C23.6291 4.48727 23.6827 4.18693 23.6148 3.90153Z" })
    ]
  }
);
var ForwardRef11 = (0, import_react17.forwardRef)(TacticTools);
var TacticTools_default = ForwardRef11;

// src/components/TacticTools.tsx
var TacticTools2 = createSvgIcon_default({
  as: TacticTools_default,
  ariaLabel: "tactic tools",
  category: "zc icons",
  displayName: "Tactic tools"
});
var TacticTools_default2 = TacticTools2;

// src/icons/SoccerTools.tsx
var import_react18 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var SoccerTools = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { d: "M8.8784 0.0780885C8.56868 0.186022 8.24488 0.45351 8.04309 0.763233C7.86476 1.03541 7.88353 0.979101 6.56487 5.36684C6.04397 7.09378 5.31659 9.51525 4.94586 10.7401C4.57982 11.9649 4.04015 13.7622 3.7492 14.7289C3.45825 15.6956 3.21423 16.4934 3.20953 16.5028C3.20484 16.5075 2.9702 16.531 2.68864 16.5497C2.25221 16.5826 2.13489 16.6107 1.92371 16.7234C1.675 16.8594 1.48729 17.0565 1.32773 17.3569C1.25265 17.493 1.23857 17.6478 1.22449 18.2767L1.20572 19.0369L1.3465 19.1918L1.48729 19.3513L6.12844 19.3654L10.7649 19.3748L10.8963 19.7877C11.389 21.3363 12.4496 22.6222 13.8293 23.3308C14.3079 23.5795 14.9039 23.7907 15.4811 23.9127C16.0771 24.0394 17.3113 24.0253 17.9542 23.8892C20.8168 23.2745 22.6798 21.0548 22.7878 18.1312C22.8159 17.3756 22.7549 16.8594 22.5625 16.2118C22.0792 14.5928 20.8356 13.1381 19.3245 12.4342C18.4188 12.0118 17.6961 11.8569 16.6778 11.8616C16.293 11.8663 15.9035 11.8757 15.8143 11.8804L15.6548 11.8898L14.796 9.02721C14.322 7.45043 13.5946 5.03366 13.177 3.65398C12.7218 2.1476 12.3651 1.03541 12.276 0.871167C12.1164 0.561444 11.8255 0.28457 11.5017 0.125016C11.2952 0.0217752 11.2201 0.0170824 10.2018 0.00300412C9.25852 -0.00638143 9.09427 0.00300412 8.8784 0.0780885ZM11.1826 1.02603C11.267 1.07296 11.3796 1.20435 11.4407 1.31229C11.5674 1.53285 11.9756 2.85621 11.9334 2.89844C11.8912 2.94068 8.34812 2.93599 8.31996 2.89375C8.30588 2.87498 8.39505 2.5371 8.51706 2.14291C8.88309 0.922788 8.86902 0.932173 10.1267 0.932173C10.9479 0.932173 11.0512 0.941559 11.1826 1.02603ZM12.6936 5.29645C12.933 6.08484 13.1301 6.76529 13.1301 6.80752C13.1347 6.8873 12.9611 6.89199 10.1314 6.89199C7.42364 6.89199 7.128 6.88261 7.128 6.81691C7.128 6.74652 7.96331 3.94493 8.00555 3.87454C8.01493 3.85577 8.97695 3.84639 10.1455 3.85108L12.2619 3.86516L12.6936 5.29645ZM13.482 7.91033C14.1108 9.98922 14.5426 11.4487 14.5426 11.4862C14.5426 11.5238 13.1911 11.5378 10.1126 11.5378H5.68732L6.11905 10.0925C6.35838 9.29939 6.61179 8.46877 6.67749 8.23882L6.8042 7.83055H10.1314C13.2568 7.83055 13.4585 7.83524 13.482 7.91033ZM13.8152 12.5515C13.7636 12.589 13.5242 12.7486 13.2802 12.9081C12.2103 13.6074 11.3233 14.7852 10.9057 16.0617L10.7508 16.5356H7.51281C5.72955 16.5356 4.25602 16.5216 4.23725 16.4981C4.2044 16.4699 4.45312 15.6159 5.21804 13.0958L5.40575 12.4764H9.6574C13.4069 12.4811 13.8997 12.4905 13.8152 12.5515ZM15.819 13.1709L16.2085 13.3962L16.2226 14.3394L16.232 15.2827L15.4342 15.7379L14.6364 16.1978L14.4722 16.1086C14.383 16.0617 14.0217 15.8552 13.665 15.644L13.0174 15.2639L13.0315 14.7993L13.0456 14.33L13.2427 14.1283C13.4585 13.903 14.0498 13.4947 14.4346 13.3023C14.6505 13.1944 15.3122 12.9504 15.3967 12.9457C15.4107 12.9457 15.6031 13.0489 15.819 13.1709ZM18.3719 13.0583C18.9913 13.2695 19.5685 13.598 20.0941 14.0438L20.4085 14.3113V14.7899V15.2686L19.6155 15.7285C19.179 15.9772 18.8083 16.1837 18.7895 16.1837C18.7708 16.1837 18.4 15.9772 17.9636 15.7285L17.1705 15.2686L17.1799 14.3347L17.194 13.4009L17.5929 13.1756C17.8134 13.0489 18.0058 12.9457 18.0199 12.9457C18.034 12.9457 18.1936 12.9973 18.3719 13.0583ZM13.3553 16.5497L14.1437 17.0049L14.1531 17.9435L14.1672 18.882L13.3835 19.3278C12.9564 19.5719 12.5904 19.7783 12.5716 19.7877C12.5528 19.7971 12.3557 19.6939 12.1305 19.5625C11.7785 19.356 11.7222 19.3044 11.6847 19.1495C11.5392 18.6239 11.5017 17.8543 11.5908 17.2349C11.6753 16.6107 11.6988 16.5779 12.1493 16.3198C12.3698 16.1931 12.5528 16.0898 12.5575 16.0898C12.5622 16.0898 12.9189 16.2963 13.3553 16.5497ZM17.5084 16.545L18.2968 17.0002V17.9435C18.2968 18.7882 18.2874 18.8867 18.217 18.9336C18.1701 18.9618 17.8134 19.1683 17.4192 19.3982L16.7059 19.8065L15.9082 19.3466L15.1057 18.882V17.9435V17.0049L15.8941 16.5497C16.3258 16.301 16.6872 16.0945 16.6966 16.0945C16.7059 16.0898 17.072 16.2963 17.5084 16.545ZM21.2532 16.301C21.455 16.4183 21.6427 16.5403 21.6709 16.5732C21.8258 16.7656 21.9149 18.0843 21.8117 18.7178C21.7178 19.3278 21.7178 19.3278 21.272 19.5766L20.8684 19.8018L20.0613 19.3419L19.2588 18.8773V17.9482V17.019L20.0566 16.5544C20.4977 16.301 20.859 16.0898 20.8684 16.0898C20.8778 16.0898 21.0468 16.1837 21.2532 16.301ZM10.6006 17.9529V18.4362H6.37715H2.15366V18.1124C2.15366 17.8308 2.17243 17.7651 2.27098 17.6431C2.34137 17.5681 2.4493 17.4977 2.5197 17.4883C2.59009 17.4789 4.43435 17.4742 6.62587 17.4742H10.6006V17.9529ZM15.4811 20.1772L16.232 20.6184L16.2226 21.5569L16.2085 22.4908L15.8143 22.7254L15.4201 22.9554L15.0869 22.8474C14.4675 22.6503 13.7683 22.2421 13.2615 21.7869L13.0503 21.5991L13.0221 21.1533C13.0033 20.9046 13.008 20.6841 13.0315 20.6465C13.1066 20.5386 14.5613 19.708 14.6458 19.7267C14.6927 19.7314 15.0682 19.9379 15.4811 20.1772ZM19.6108 20.1585L20.4085 20.6184V21.097V21.571L20.188 21.7681C19.653 22.2421 18.7614 22.7442 18.1982 22.8944C17.9871 22.9507 17.9824 22.946 17.5788 22.7066L17.1705 22.4673V21.5428V20.6184L17.9589 20.1632C18.3907 19.9144 18.7614 19.708 18.7802 19.7033C18.7989 19.7033 19.1743 19.9097 19.6108 20.1585Z" })
  }
);
var ForwardRef12 = (0, import_react18.forwardRef)(SoccerTools);
var SoccerTools_default = ForwardRef12;

// src/components/SoccerTools.tsx
var SoccerTools2 = createSvgIcon_default({
  as: SoccerTools_default,
  ariaLabel: "soccer tools",
  category: "zc icons",
  displayName: "Soccer tools"
});
var SoccerTools_default2 = SoccerTools2;

// src/icons/SoccerTools01.tsx
var import_react19 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var SoccerTools01 = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M5.89407 0.0342334C5.82663 0.0454743 5.73108 0.101679 5.68612 0.152264C5.59619 0.253432 5.5175 0.759276 4.34844 8.38066C4.23041 9.17877 4.02807 10.4827 3.90442 11.2752C3.78639 12.0733 3.54471 13.6471 3.37047 14.7768C3.20186 15.9065 2.97142 17.3959 2.85901 18.0929L2.66229 19.3575L2.2801 19.7003C1.83046 20.1162 1.42578 20.6952 1.17286 21.3022C0.903079 21.9485 0.813151 22.3139 0.773808 22.9996C0.745705 23.5335 0.751326 23.6122 0.841253 23.7134C0.942422 23.8258 1.02111 23.8258 7.88935 23.8258C13.9033 23.8258 14.8981 23.837 15.2859 23.9101C15.5445 23.9607 16.0391 24 16.4494 24C19.372 23.9944 21.9181 22.1677 22.8961 19.3631C23.3457 18.0816 23.3569 16.3449 22.9242 15.0634C22.3396 13.3379 21.1256 11.9216 19.5519 11.1122C17.7083 10.168 15.7131 10.0893 13.7515 10.8874C13.3468 11.056 13.3468 11.056 13.3187 10.9324C13.3075 10.8705 13.2288 10.3816 13.1557 9.85885C13.0771 9.33052 12.9253 8.31883 12.8129 7.61065C12.352 4.59807 12.2171 3.71003 11.9979 2.29929C11.8743 1.4787 11.7562 0.719933 11.7394 0.613144C11.6888 0.270294 11.6045 0.118541 11.4246 0.0567153C11.256 -0.00511007 6.1751 -0.0219715 5.89407 0.0342334ZM11.0986 1.66418C11.1661 2.12506 11.3066 3.0412 11.4134 3.70441C11.5202 4.36763 11.6045 4.92968 11.6045 4.95216C11.6045 4.98026 10.2781 4.99713 8.65373 4.99713H5.70298V4.8791C5.70298 4.81727 5.78166 4.28894 5.87159 3.71565C5.96714 3.13674 6.09641 2.29929 6.15824 1.84965C6.22006 1.40001 6.28189 0.989717 6.29875 0.933512C6.32685 0.843584 6.48985 0.837963 8.65373 0.837963H10.975L11.0986 1.66418ZM11.7394 5.93575C11.7562 6.02568 11.8574 6.67203 11.9698 7.38583C12.0766 8.09402 12.2677 9.30804 12.3914 10.0837C12.5487 11.101 12.5937 11.5057 12.5487 11.5562C12.5038 11.6124 11.7169 11.6293 8.59191 11.6293H4.69129V11.4719C4.69129 11.3876 4.79246 10.7132 4.91049 9.97126C5.02852 9.22935 5.14655 8.49307 5.16341 8.34132C5.22524 7.89168 5.53998 5.93013 5.56246 5.85144C5.57933 5.80086 6.24816 5.78399 8.64811 5.78399H11.7057L11.7394 5.93575ZM15.0274 12.2532L15.9885 12.8827V14.2709V15.6648L15.196 16.1819L14.4035 16.7046L14.1225 16.6034C13.9651 16.5472 13.4874 16.3618 13.0546 16.1875L12.2621 15.8728L12.0485 15.0859C11.9249 14.6531 11.8012 14.1866 11.7675 14.0461C11.7394 13.9112 11.6719 13.7538 11.627 13.7033C11.5539 13.619 11.5651 13.5796 11.7619 13.3379C12.0148 13.0176 12.5881 12.4836 12.9534 12.2307C13.2063 12.0508 13.9595 11.6349 14.0325 11.6293C14.055 11.6293 14.499 11.9103 15.0274 12.2532ZM19.0629 11.7473C19.6868 12.0115 20.6816 12.804 21.1256 13.3829C21.2717 13.5796 21.2717 13.5965 21.193 13.7538C21.1481 13.8438 20.9907 14.3552 20.8502 14.8948C20.7041 15.4344 20.5748 15.8896 20.5523 15.9065C20.5298 15.929 20.3725 15.9964 20.2038 16.0582C20.0352 16.1201 19.5912 16.2887 19.2203 16.4292C18.8549 16.5697 18.5177 16.6877 18.4783 16.6877C18.439 16.6877 18.04 16.4461 17.5903 16.1426L16.7753 15.603V14.2709V12.9389L17.7477 12.2925C18.276 11.9384 18.7313 11.6405 18.7538 11.6349C18.7706 11.6349 18.9111 11.6799 19.0629 11.7473ZM11.1661 12.8208C10.1937 14.0236 9.71039 15.2489 9.6036 16.817C9.56987 17.2723 9.61484 17.8737 9.72725 18.5594L9.76659 18.7673H7.07438C5.15779 18.7729 4.26413 18.7898 3.97749 18.846C3.69646 18.891 3.56719 18.8966 3.56719 18.8573C3.56719 18.7673 3.87632 16.6821 4.03931 15.6704C4.118 15.1927 4.25851 14.2653 4.35968 13.6077L4.54516 12.4162H8.02424H11.4977L11.1661 12.8208ZM13.0377 17.025C13.3468 17.143 13.7122 17.2891 13.8527 17.351L14.1056 17.4578L14.2967 18.3908C14.3979 18.9135 14.4653 19.3519 14.4372 19.3968C14.4147 19.4362 14.2068 19.7565 13.9763 20.105L13.5604 20.7401L12.8522 20.7064C12.4588 20.6895 11.9811 20.6614 11.7843 20.6446L11.4359 20.6108L11.1998 20.2118C10.9075 19.7059 10.6827 19.1327 10.531 18.5088C10.4354 18.1041 10.4298 18.0086 10.4916 17.9467C10.531 17.9074 10.9075 17.5983 11.3235 17.2554L12.0766 16.6428L12.2789 16.7271C12.3857 16.7721 12.7286 16.9069 13.0377 17.025ZM21.5977 17.3116C22.0193 17.6601 22.379 17.9467 22.3902 17.958C22.452 18.0142 22.1879 19.0315 21.9912 19.498C21.7214 20.15 21.283 20.8413 21.1312 20.875C21.0694 20.8862 20.6647 20.9087 20.2263 20.9256L19.4338 20.9593L18.9111 20.1724L18.3884 19.3856L18.4559 18.9809C18.4952 18.7561 18.5795 18.3177 18.6526 18.0086L18.7762 17.4521L19.1697 17.2948C19.3832 17.2104 19.8104 17.0418 20.1195 16.9182C20.4287 16.7945 20.7153 16.6934 20.7546 16.6934C20.7884 16.6877 21.1706 16.9688 21.5977 17.3116ZM10.1937 19.9701C10.531 20.7345 10.9132 21.2853 11.5764 21.9485C11.9136 22.2914 12.3408 22.6679 12.5206 22.786C12.6949 22.904 12.841 23.0052 12.841 23.0164C12.841 23.0277 10.3005 23.0389 7.19241 23.0389H1.53819L1.57192 22.8253C1.81922 21.3865 2.46557 20.3635 3.45478 19.8577C4.02245 19.5711 4.118 19.5654 7.16992 19.5598L10.0083 19.5542L10.1937 19.9701ZM18.2086 20.5209C18.484 20.9312 18.7032 21.2909 18.7032 21.3246C18.7032 21.4427 18.158 22.8309 18.0737 22.9321C17.8545 23.1794 16.2414 23.2974 15.3365 23.1232C15.1004 23.0782 14.8925 23.0277 14.8812 23.0164C14.8531 22.9883 14.336 21.6731 14.2349 21.3809C14.1843 21.2179 14.2068 21.1617 14.6677 20.4928L15.151 19.779H16.4325H17.714L18.2086 20.5209Z" })
  }
);
var ForwardRef13 = (0, import_react19.forwardRef)(SoccerTools01);
var SoccerTools01_default = ForwardRef13;

// src/components/SoccerTools01.tsx
var SoccerTools012 = createSvgIcon_default({
  as: SoccerTools01_default,
  ariaLabel: "soccer tools-01",
  category: "zc icons",
  displayName: "Soccer tools-01"
});
var SoccerTools01_default2 = SoccerTools012;

// src/icons/Shape.tsx
var import_react20 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var Shape = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M6.0312 2.31559C4.66689 3.01906 3.34523 3.80779 3.13206 4.10623C2.89757 4.38336 2.0662 6.28059 1.27746 8.28441C-0.150794 11.8657 -0.172111 11.951 0.211599 12.3773C0.851115 13.0595 2.17278 13.635 3.38786 13.7629L4.51767 13.8908L4.96534 13.0595L5.39168 12.2281L5.413 15.852C5.43431 17.8345 5.51958 19.9023 5.58353 20.4352C5.73275 21.3305 5.79671 21.4371 6.9052 21.9701C9.18614 23.0999 13.4496 23.2704 16.1995 22.3538C18.3739 21.6077 18.3525 21.6503 18.587 16.7047C18.7576 12.8463 18.8002 12.5052 19.056 13.166L19.3331 13.8908L20.5695 13.7629C21.8059 13.6563 23.3621 12.9529 23.9376 12.2707C24.1295 12.0149 23.9163 11.2475 22.7652 8.36968C21.9765 6.38718 21.1451 4.51126 20.9319 4.1915C20.6974 3.85043 19.5463 3.12564 18.0115 2.33691C15.3042 0.951288 15.0057 0.866019 15.0057 1.335C15.0057 1.80398 13.5135 2.93379 12.7248 3.08301C11.4458 3.3175 10.4865 2.99774 9.52722 1.97451C9.0156 1.4629 8.58926 1.03656 8.56794 1.05787C8.52531 1.05787 7.3955 1.63344 6.0312 2.31559ZM8.8877 2.44349C9.48458 3.21091 10.8489 3.80779 12 3.80779C13.1085 3.80779 14.6007 3.14696 15.1976 2.40086L15.6239 1.86793L17.713 2.91247C18.8642 3.50935 19.9726 4.17019 20.2071 4.40468C20.4203 4.66048 21.209 6.40849 21.9765 8.30572C23.5326 12.2281 23.5326 12.2281 21.6567 12.8463C20.0792 13.4005 19.9513 13.3366 19.2905 11.887L18.6936 10.5653L19.0986 9.5208C19.3118 8.96656 19.4824 8.26309 19.4824 7.98597C19.4824 7.21855 15.5174 3.59462 15.0057 3.91438C14.8565 3.99965 14.7926 7.02669 14.7926 13.0808V22.098L13.9186 22.1832C13.4496 22.2259 13.0232 22.2259 12.9593 22.1619C12.9167 22.1193 12.874 18.1756 12.874 13.4219V4.76707H12.0213H11.1686L11.126 13.5071L11.0621 22.2472L10.2094 22.1619C9.74039 22.1406 9.29273 22.0553 9.20746 21.9914C9.10087 21.9487 9.03692 17.8345 9.03692 12.8463C9.03692 7.87938 8.97297 3.80779 8.90902 3.80779C8.58926 3.80779 6.69203 5.36395 5.58353 6.5364L4.34714 7.81543L4.66689 8.85997C4.85875 9.41422 5.0506 10.0751 5.11456 10.3095C5.17851 10.544 4.96534 11.3114 4.66689 11.9936L4.11265 13.23L3.23864 13.1021C2.17278 12.9316 0.723212 12.1641 0.723212 11.7591C0.723212 11.1835 3.34523 4.95892 3.77157 4.46863C4.13396 4.10623 7.92843 1.9532 8.37609 1.91056C8.41872 1.88924 8.63189 2.14505 8.8877 2.44349ZM7.33154 13.6137C7.33154 19.9876 7.28891 21.2879 7.0331 21.2879C6.35095 21.2879 6.26568 20.6697 6.11646 15.6175C6.00988 11.3754 5.92461 10.3522 5.60485 9.49949C5.37036 8.94524 5.19982 8.34836 5.19982 8.1565C5.19982 7.81543 6.84125 5.93951 7.13969 5.93951C7.24628 5.93951 7.33154 9.3929 7.33154 13.6137ZM18.2886 7.2825L18.9068 8.04992L18.4591 9.28631C18.0967 10.3522 18.0115 11.2688 17.8836 15.6388C17.7983 18.5593 17.6278 20.8616 17.5212 21.0108C17.3933 21.16 17.1588 21.2879 17.0096 21.2879C16.7537 21.2879 16.7111 19.9876 16.7111 13.5924V5.89688L17.1801 6.19532C17.4359 6.36586 17.9475 6.85615 18.2886 7.2825Z" })
  }
);
var ForwardRef14 = (0, import_react20.forwardRef)(Shape);
var Shape_default = ForwardRef14;

// src/components/Shape.tsx
var Shape2 = createSvgIcon_default({
  as: Shape_default,
  ariaLabel: "shape",
  category: "zc icons",
  displayName: "Shape"
});
var Shape_default2 = Shape2;

// src/icons/Judge.tsx
var import_react21 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var Judge = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { d: "M8.28337 14.4083C7.24992 14.9397 6.18693 16.1061 5.95072 16.9476C5.84737 17.3462 5.78832 18.3944 5.81784 19.7232L5.86213 21.8639L6.5265 22.1887C8.23908 23.045 11.679 23.4584 14.2922 23.1336C15.6061 22.9712 17.5845 22.3954 17.9831 22.0706C18.1455 21.9377 18.1898 21.3472 18.1898 19.4427C18.1898 16.6523 18.0717 16.2242 17.0677 15.2645C16.4477 14.674 14.8975 13.8915 14.6465 14.0392C14.2922 14.2606 14.5284 14.6445 15.1928 14.9102C16.0343 15.2645 16.8906 16.0175 17.2154 16.6819C17.5254 17.3315 17.5697 20.8157 17.2744 20.7271C17.1416 20.6828 17.053 20.107 17.0087 18.8226C16.9349 16.859 16.8463 16.5933 16.0933 15.9584C15.488 15.4565 14.3069 14.925 14.2331 15.1317C14.1002 15.5303 13.4802 16.2832 13.0373 16.5785C12.0924 17.2281 11.0442 16.8885 10.1879 15.6779C9.78926 15.1021 9.68592 15.0431 9.39064 15.1612C8.32766 15.5598 7.41232 16.3423 7.13181 17.11C7.04322 17.3462 6.96941 18.2616 6.96941 19.1474C6.96941 20.1218 6.91035 20.7566 6.82177 20.7566C6.73319 20.7566 6.67413 20.0332 6.67413 18.8669C6.67413 17.2429 6.71842 16.9328 6.96941 16.5047C7.38279 15.8256 7.92904 15.3679 8.84439 14.925C9.46446 14.6297 9.58257 14.4968 9.52352 14.2606C9.42017 13.8768 9.27253 13.8915 8.28337 14.4083ZM15.8866 17.9958C16.1376 18.1878 16.1376 18.232 15.8276 18.9555C15.4585 19.8118 15.0746 20.0332 14.6317 19.6346C14.2184 19.2655 13.9674 18.3206 14.2036 18.0254C14.4398 17.7448 15.5176 17.7301 15.8866 17.9958Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("path", { d: "M10.6234 0.906338C9.8705 1.15732 9.36853 1.58547 9.11755 2.2203C9.01421 2.48605 8.67464 2.97325 8.36461 3.31282C7.86264 3.87384 7.80359 4.02147 7.80359 4.71537C7.81835 5.14351 7.90693 5.66024 8.02504 5.86693C8.14315 6.07362 8.23173 6.61988 8.2465 7.09232C8.2465 7.84526 8.29079 7.97814 8.54177 8.03719C8.7337 8.08148 8.96992 8.39152 9.14708 8.83443C9.32424 9.23305 9.5457 9.63167 9.66381 9.72025C9.79668 9.83836 9.8705 10.2075 9.8705 10.8718C9.8705 11.6838 9.94432 11.9791 10.3134 12.5992C11.1549 14.0903 12.0703 14.3856 13.0004 13.485C13.7386 12.7616 14.152 11.8462 14.152 10.9013C14.152 9.986 14.9197 8.22912 15.4069 7.9929C15.6431 7.88956 15.7169 7.6681 15.776 6.97421C15.8202 6.48701 15.9531 5.92599 16.0565 5.73406C16.3074 5.27639 16.2041 3.59333 15.8793 2.95849C15.6874 2.61892 15.2445 2.29412 14.0929 1.67405C12.3803 0.758701 11.6274 0.581537 10.6234 0.906338Z" })
    ]
  }
);
var ForwardRef15 = (0, import_react21.forwardRef)(Judge);
var Judge_default = ForwardRef15;

// src/components/Judge.tsx
var Judge2 = createSvgIcon_default({
  as: Judge_default,
  ariaLabel: "judge",
  category: "zc icons",
  displayName: "Judge"
});
var Judge_default2 = Judge2;

// src/icons/Ellipse.tsx
var import_react22 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var Ellipse = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      "path",
      {
        d: "M12 2.5C18.4405 2.5 23.5 6.83478 23.5 12C23.5 17.1652 18.4405 21.5 12 21.5C5.5595 21.5 0.5 17.1652 0.5 12C0.5 6.83478 5.5595 2.5 12 2.5Z",
        fill: "none",
        stroke: props.stroke
      }
    )
  }
);
var ForwardRef16 = (0, import_react22.forwardRef)(Ellipse);
var Ellipse_default = ForwardRef16;

// src/components/Ellipse.tsx
var Ellipse2 = createSvgIcon_default({
  as: Ellipse_default,
  ariaLabel: "ellipse",
  category: "zc icons",
  displayName: "Ellipse"
});
var Ellipse_default2 = Ellipse2;

// src/icons/Rectangle.tsx
var import_react23 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var Rectange = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "rect",
      {
        x: "0.5",
        y: "0.5",
        width: "23",
        height: "23",
        stroke: props.stroke,
        fill: "none"
      }
    )
  }
);
var ForwardRef17 = (0, import_react23.forwardRef)(Rectange);
var Rectangle_default = ForwardRef17;

// src/components/Rectangle.tsx
var Rectangle = createSvgIcon_default({
  as: Rectangle_default,
  ariaLabel: "rectange",
  category: "zc icons",
  displayName: "Rectangle"
});
var Rectangle_default2 = Rectangle;

// src/icons/SoccerField.tsx
var import_react24 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var SoccerField = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("path", { d: "M3.72413 0C3.49563 0 3.31033 0.185297 3.31033 0.413793V23.5862C3.31033 23.8147 3.49563 24 3.72413 24H20.2759C20.5043 24 20.6896 23.8147 20.6896 23.5862V0.413793C20.6896 0.185297 20.5043 0 20.2759 0H3.72413ZM4.13792 0.827586H8.27585V2.06897C8.27585 2.29746 8.46115 2.48276 8.68964 2.48276H15.3103C15.5388 2.48276 15.7241 2.29746 15.7241 2.06897V0.827586H19.8621V11.5831H15.7005C15.4936 9.72505 13.912 8.2728 12 8.2728C10.088 8.2728 8.5065 9.72505 8.2996 11.5831H4.13792V0.827586ZM9.10344 0.827586H14.8965V1.65517H9.10344V0.827586ZM12 9.10039C13.464 9.10039 14.6672 10.176 14.867 11.5831H9.13323C9.33293 10.176 10.536 9.10039 12 9.10039ZM4.13792 12.4107H8.2996C8.5065 14.2689 10.088 15.7211 12 15.7211C13.912 15.7211 15.4936 14.2689 15.7005 12.4107H19.8621V23.1724H15.7241V21.931C15.7241 21.7025 15.5388 21.5172 15.3103 21.5172H8.68964C8.46115 21.5172 8.27585 21.7025 8.27585 21.931V23.1724H4.13792V12.4107ZM9.13315 12.4107H14.8669C14.6672 13.8179 13.464 14.8935 11.9999 14.8935C10.536 14.8935 9.33293 13.8179 9.13315 12.4107ZM9.10344 22.3448H14.8965V23.1724H9.10344V22.3448Z" })
  }
);
var ForwardRef18 = (0, import_react24.forwardRef)(SoccerField);
var SoccerField_default = ForwardRef18;

// src/components/SoccerField.tsx
var SoccerField2 = createSvgIcon_default({
  as: SoccerField_default,
  ariaLabel: "soccer field",
  category: "zc icons",
  displayName: "Soccer field"
});
var SoccerField_default2 = SoccerField2;

// src/icons/Player01.tsx
var import_react25 = require("react");
var import_jsx_runtime22 = require("react/jsx-runtime");
var Player01 = (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
  "svg",
  {
    width: "1em",
    height: "1em",
    ref,
    ...props,
    viewBox: "0 0 24 24",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M8.90654 0.0127601C8.59627 0.0786915 8.22008 0.330782 8.09597 0.557663C8.04361 0.652682 8.03973 0.677891 8.03973 0.846598C8.03973 0.947434 8.04749 1.16462 8.05719 1.32751C8.06882 1.56796 8.07852 1.62614 8.10373 1.63971C8.13087 1.65523 8.13475 1.62614 8.13475 1.35272C8.13475 1.08899 8.13863 1.04245 8.1716 0.988156C8.23171 0.889259 8.27437 0.875685 8.4295 0.906712C8.51871 0.926103 8.68547 0.93386 8.9492 0.929982C9.33121 0.928042 9.39908 0.920286 9.76752 0.838841C9.93817 0.800058 10.0332 0.823328 10.0875 0.916407C10.1243 0.97846 10.1689 1.19759 10.1922 1.41283C10.2058 1.54857 10.2155 1.56603 10.2581 1.51561C10.2717 1.50009 10.2989 1.48652 10.3182 1.48652C10.3842 1.48652 10.3958 1.41865 10.3997 1.0347C10.4036 0.670134 10.4016 0.660439 10.3531 0.555724C10.2543 0.348234 10.07 0.218311 9.67638 0.0806306C9.49022 0.0146993 9.45144 0.00694263 9.23038 0.00112516C9.09657 -0.00275315 8.95114 0.00306432 8.90654 0.0127601Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M9.63763 0.920574C9.45922 0.969053 9.43595 0.969053 8.93953 0.967114C8.65641 0.967114 8.38687 0.963235 8.33839 0.959357C8.25501 0.95354 8.24919 0.957418 8.21816 1.02335C8.15029 1.15909 8.16968 1.73308 8.26276 2.38852C8.3539 3.03232 8.35778 3.04201 8.64866 3.18939C8.90462 3.31737 9.03067 3.34646 9.1955 3.31156C9.38941 3.27277 9.96728 3.0168 10.0352 2.94118C10.0798 2.8927 10.1244 2.62897 10.1282 2.39433C10.1321 2.20042 10.1515 2.13061 10.1748 2.22369C10.1883 2.27798 10.2058 2.27217 10.2834 2.18684C10.3377 2.12673 10.359 2.07825 10.3861 1.95802C10.454 1.65551 10.423 1.48875 10.3086 1.5411C10.2814 1.55274 10.2407 1.59928 10.2194 1.64388C10.1961 1.68654 10.1748 1.71951 10.169 1.71369C10.1651 1.70981 10.1573 1.63224 10.1534 1.54304C10.1457 1.35107 10.0894 1.03498 10.0526 0.959357C9.99637 0.850764 9.91686 0.843008 9.63763 0.920574Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M8.03392 1.71134C8.01647 1.75788 8.06107 1.98088 8.10955 2.07978C8.16578 2.20001 8.19099 2.2097 8.17742 2.10499C8.1716 2.05845 8.15997 1.95955 8.15221 1.88586C8.1367 1.72298 8.06883 1.62214 8.03392 1.71134Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M10.1069 2.9043L10.0662 3.00126L9.78305 3.137C9.37194 3.33286 9.24008 3.37358 9.04617 3.36388C8.90267 3.35613 8.83674 3.33868 8.61761 3.23978C8.60404 3.23396 8.5924 3.29407 8.58465 3.424C8.57301 3.58883 8.57689 3.62955 8.60792 3.7013C8.72427 3.96696 8.98023 4.11434 9.23039 4.06392C9.53871 4.00187 10.008 3.65476 10.2387 3.32122C10.2989 3.23202 10.3008 3.22233 10.2795 3.16609C10.2659 3.13312 10.231 3.04005 10.2 2.9586L10.1476 2.80929L10.1069 2.9043Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M10.3551 3.2184C10.3551 3.25912 10.2232 3.4414 10.0875 3.5849C9.87613 3.8079 9.64537 3.96691 9.37583 4.07551C9.13537 4.17053 8.90267 4.12786 8.72039 3.95334C8.57302 3.81372 8.50127 3.63338 8.52841 3.48019L8.54587 3.39292L8.3694 3.51121C8.16967 3.64501 8.11925 3.66828 7.69846 3.83311C7.23112 4.01733 6.76766 4.2384 6.69785 4.31014C6.58538 4.42649 6.41667 5.02569 6.34298 5.57254C6.31971 5.73543 6.28481 6.00303 6.26154 6.16398C6.23827 6.32687 6.19561 6.55957 6.16458 6.6798C6.11222 6.88147 6.11029 6.9028 6.13743 6.95516C6.20724 7.0909 6.61253 7.22664 6.94218 7.22664C7.09926 7.22664 7.14192 7.21112 7.1264 7.16071C7.12059 7.13938 7.09344 6.94158 7.06823 6.72246C7.04108 6.50333 6.99842 6.18531 6.97127 6.01466C6.90146 5.58223 6.89564 5.53957 6.90922 5.53957C6.94994 5.53957 7.09926 6.4277 7.14773 6.95516C7.15355 7.03466 7.17682 7.13162 7.19621 7.1704C7.24663 7.27318 7.25827 7.48842 7.235 7.93443C7.21367 8.33196 7.21367 8.33971 7.04108 9.1561C6.948 9.60211 6.93831 9.63313 6.80063 9.95115C6.73469 10.1043 6.68234 10.2595 6.66682 10.3467L6.64161 10.4902L6.72112 10.56C6.9034 10.721 7.68876 10.9944 8.42564 11.1515C8.87358 11.2465 9.79275 11.4075 10.326 11.4811C10.4443 11.4986 10.6343 11.5257 10.7487 11.5413C11.0396 11.582 11.2355 11.5781 11.3402 11.5316C11.4061 11.5025 11.4313 11.4753 11.4643 11.4016C11.5031 11.3124 11.505 11.2989 11.4798 11.039C11.4662 10.8819 11.4585 10.5794 11.4624 10.3118C11.4662 10.0597 11.4565 9.58853 11.443 9.26275C11.4158 8.65774 11.4216 8.44055 11.4701 7.98291C11.4876 7.81614 11.5011 7.43219 11.507 6.92607C11.5128 6.36759 11.5225 6.07672 11.5438 5.95067C11.5787 5.72573 11.6059 5.6947 11.5884 5.89831C11.5613 6.26288 11.5535 6.91055 11.5748 7.0812C11.602 7.28869 11.6175 7.30808 11.8095 7.35074C12.1139 7.42055 12.4571 7.3585 12.8935 7.15683C12.9924 7.11029 13.0971 7.05017 13.1242 7.02303C13.1494 6.99588 13.1824 6.97455 13.196 6.97455C13.2425 6.97455 13.2697 6.86208 13.258 6.7147C13.2289 6.37341 13.0428 5.59193 12.8896 5.17113C12.7538 4.79881 12.5095 4.30433 12.3738 4.12592C12.3195 4.05418 12.1857 3.94946 12.1488 3.94946C12.1139 3.94946 11.9685 4.219 11.8987 4.4168C11.8618 4.51763 11.8056 4.72125 11.7707 4.87056C11.7028 5.15368 11.6737 5.19634 11.7125 4.95395C11.7668 4.59908 11.8696 4.28494 12.0111 4.04642C12.0577 3.96691 12.0926 3.89517 12.0887 3.88935C12.0848 3.88353 12.0325 3.8622 11.9704 3.84475C11.5671 3.72452 11.2646 3.62368 11.0648 3.53836C10.8108 3.43365 10.5102 3.28627 10.4288 3.23003C10.3687 3.18737 10.3551 3.18543 10.3551 3.2184Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M6.05212 7.20141C5.93577 7.35654 5.80391 7.60669 5.73022 7.80836C5.62357 8.11087 5.58091 8.31254 5.37148 9.54391C5.32882 9.79988 5.27064 10.1354 5.2435 10.2905C5.21829 10.4456 5.17756 10.624 5.15817 10.6861C5.13684 10.7501 5.11939 10.8393 5.11939 10.8839C5.11939 11.0351 5.07867 11.2659 5.00886 11.5025C4.89639 11.8864 4.89251 11.8767 5.09224 11.6944C5.18726 11.6091 5.38118 11.4404 5.52273 11.3202C5.71665 11.1534 5.7787 11.0933 5.76707 11.0681C5.73604 10.9944 5.73604 10.7423 5.76707 10.6376C5.78258 10.5794 5.90669 10.3409 6.04049 10.1063C6.64745 9.04748 6.87627 8.49289 7.02946 7.7114C7.05661 7.56791 7.10121 7.40502 7.12642 7.34878L7.17102 7.24989L7.1109 7.26734C6.9325 7.31776 6.45741 7.23825 6.24992 7.11996C6.20144 7.09281 6.15878 7.07148 6.15684 7.07148C6.15296 7.07148 6.10642 7.12966 6.05212 7.20141Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M12.8857 7.21678C12.6782 7.31762 12.4009 7.401 12.1954 7.42621L12.0073 7.44948L12.1643 7.88579L12.3214 8.3221L12.335 8.85537C12.3485 9.441 12.3524 9.47202 12.5153 10.2903C12.5735 10.5832 12.6317 10.9089 12.6452 11.0117L12.6685 11.1998L12.5754 11.4286C12.4494 11.737 12.4028 11.83 12.2981 11.9755C12.1798 12.1422 12.143 12.2508 12.1294 12.4641C12.1139 12.7007 12.0906 12.8054 12.0092 13.0032C11.9549 13.137 11.9452 13.1758 11.9627 13.2127C11.9859 13.2611 12.0363 13.2708 12.0868 13.232C12.1042 13.2204 12.1663 13.106 12.2264 12.98C12.2865 12.8559 12.3447 12.7531 12.3563 12.7531C12.3679 12.7531 12.3718 12.7705 12.3621 12.7957C12.3563 12.8209 12.3427 12.8752 12.333 12.9179C12.3001 13.0711 12.2147 13.265 12.11 13.424C11.9976 13.5927 11.9859 13.6257 12.0325 13.6645C12.0771 13.7013 12.1643 13.6703 12.2981 13.5695C12.4552 13.4512 12.5017 13.3775 12.6026 13.1021C12.6821 12.8791 12.7209 12.8074 12.7209 12.8811C12.7209 12.9276 12.6006 13.265 12.5502 13.3678C12.5134 13.4395 12.3951 13.5598 12.2962 13.6296C12.2458 13.6645 12.2516 13.7227 12.3059 13.7227C12.3233 13.7227 12.3893 13.6955 12.4533 13.6606C12.5851 13.5908 12.6142 13.5462 12.7403 13.2476C12.8256 13.0459 12.8469 13.009 12.8682 13.0304C12.8876 13.0478 12.7112 13.4628 12.6433 13.5617C12.6123 13.6082 12.5948 13.6451 12.6045 13.6451C12.6433 13.6451 12.7209 13.6063 12.7596 13.5636C12.7984 13.5249 12.94 13.2456 12.9943 13.1041C13.0059 13.073 13.0195 13.0633 13.0311 13.075C13.0447 13.0886 13.0272 13.1487 12.9846 13.2476C12.9477 13.3329 12.9206 13.4066 12.9264 13.4105C12.9303 13.4163 12.9652 13.3911 13.0001 13.3562C13.1417 13.2185 13.2328 12.9024 13.2115 12.6154C13.1979 12.4137 13.2328 11.8456 13.2832 11.4829C13.3026 11.3336 13.3239 11.1203 13.3317 11.0078C13.3491 10.7014 13.3938 10.2516 13.4519 9.78617C13.5198 9.24514 13.5276 8.59552 13.4694 8.3318C13.4248 8.12625 13.3453 7.86446 13.2658 7.66861C13.1979 7.49796 13.0369 7.14891 13.0272 7.15085C13.0234 7.15085 12.9613 7.18188 12.8857 7.21678Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M6.20336 10.8256C5.50526 11.386 4.8188 11.9911 4.27002 12.5301C4.00823 12.7881 3.99272 12.8074 3.99854 12.8695C4.0063 12.9471 4.00048 12.9412 4.47945 13.2554C4.98363 13.585 5.34238 13.8798 5.83104 14.3607C5.9823 14.51 6.14519 14.6535 6.18979 14.6807C6.36043 14.7796 6.52526 14.7815 6.65518 14.6865C6.68621 14.6632 6.80838 14.5314 6.92861 14.3937C7.14967 14.1338 7.71009 13.5657 7.84971 13.4551L7.92727 13.3931L7.97963 13.492C8.06883 13.6646 8.12507 13.8837 8.23172 14.479C8.31898 14.9793 8.37522 15.1693 8.45278 15.2391C8.54198 15.3187 8.85613 15.404 9.23039 15.4486C9.33122 15.4602 9.65506 15.4757 9.94787 15.4815C10.5393 15.4932 10.7119 15.4718 10.9756 15.3633C11.0454 15.3342 11.1133 15.309 11.1288 15.3051C11.1948 15.2934 11.2103 15.2333 11.1967 15.0317C11.1851 14.8436 11.1948 14.7156 11.2549 14.2754C11.5593 12.0628 11.5535 12.1287 11.4662 11.7855C11.4371 11.673 11.4119 11.578 11.41 11.5741C11.4081 11.5703 11.3615 11.5838 11.3053 11.6013C11.1812 11.642 11.0047 11.6323 10.4327 11.5509C9.48054 11.4171 8.56525 11.2484 8.02811 11.1126C7.38237 10.9478 6.75602 10.7015 6.65325 10.5697C6.63385 10.5444 6.60864 10.5231 6.59895 10.5231C6.58731 10.5231 6.41085 10.6589 6.20336 10.8256Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M3.48853 13.4571C3.17439 13.7654 2.99598 13.9554 2.9669 14.0117C2.89321 14.1571 2.78849 14.7815 2.76134 15.2353C2.74971 15.4253 2.75165 15.4428 2.79043 15.4912C2.8583 15.5746 3.16275 15.7162 3.35473 15.7511C3.62427 15.8034 3.9132 15.7627 4.16529 15.6406C4.27583 15.5863 4.28552 15.5766 4.28552 15.5203C4.28552 15.4854 4.29134 15.4137 4.29716 15.3594L4.30879 15.2624L4.49689 15.1577C4.87309 14.9483 5.30164 14.6458 5.56537 14.4072L5.68947 14.2909L5.55373 14.1649C5.19499 13.8255 4.7005 13.4454 4.27583 13.1836C4.14784 13.1041 4.02955 13.0266 4.0121 13.013C3.99659 12.9975 3.97914 12.9858 3.97332 12.9858C3.96944 12.9858 3.75032 13.1992 3.48853 13.4571Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M2.66051 15.462C2.63143 15.5318 2.48793 16.2706 2.45302 16.5247C2.43557 16.6623 2.42394 17.0928 2.41424 18.0023L2.40067 19.2841L2.47047 19.3752C2.55774 19.4916 2.58876 19.5982 2.56355 19.6971C2.5461 19.765 2.54998 19.7727 2.61591 19.8387C2.65469 19.8755 2.73808 19.9318 2.80207 19.9608C2.90485 20.0093 2.94169 20.0151 3.10652 20.0151C3.27716 20.0151 3.2985 20.0113 3.3431 19.9686C3.40709 19.9085 3.41678 19.8736 3.50017 19.4237C3.67857 18.4677 3.79104 18.0527 4.05865 17.3779C4.27777 16.8252 4.33401 16.5305 4.31849 16.0302C4.31267 15.8537 4.30298 15.6947 4.29522 15.6772C4.28359 15.6462 4.27389 15.6482 4.19051 15.6889C4.0761 15.7471 3.92872 15.7897 3.74644 15.8188C3.3877 15.8731 2.84085 15.6928 2.72257 15.4794L2.68184 15.4077L2.66051 15.462Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M10.7526 15.4949C10.6305 15.5298 10.5587 15.5337 10.0448 15.5318C9.73069 15.5318 9.40491 15.524 9.32346 15.5124L9.17221 15.4949V15.5725C9.17221 15.6811 9.21487 15.8731 9.28856 16.1019C9.33122 16.2337 9.35643 16.3559 9.36807 16.5052C9.39521 16.8504 9.46308 17.1413 9.56198 17.3313C9.64149 17.4884 9.98472 17.5834 10.2601 17.5252C10.3939 17.4961 10.6169 17.3895 10.71 17.3061C10.7933 17.2344 10.7992 17.213 10.8379 16.7088C10.8612 16.416 10.9039 15.4658 10.8942 15.46C10.8903 15.4581 10.8283 15.4736 10.7526 15.4949Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M10.8399 17.2208C10.8379 17.3236 10.487 17.5369 10.2426 17.5834C9.99247 17.63 9.71323 17.5641 9.56585 17.4225C9.53095 17.3876 9.49992 17.3643 9.4941 17.3701C9.48053 17.3857 9.42623 17.7269 9.40296 17.9403C9.38745 18.0896 9.38551 18.3048 9.39521 18.6577C9.4146 19.2589 9.40684 20.6764 9.38551 20.8005C9.37581 20.849 9.33703 20.9401 9.30019 21.0041C9.2614 21.0662 9.23038 21.1379 9.23038 21.1631C9.23038 21.2077 9.23232 21.2077 9.27886 21.1767C9.32152 21.1496 9.36418 21.1457 9.56585 21.1554C9.96144 21.1748 10.2097 21.2562 10.2504 21.3784L10.2698 21.4404L10.3047 21.3687C10.3338 21.3086 10.3396 21.2504 10.3376 21.039C10.3357 20.8063 10.3435 20.7443 10.421 20.3584C10.5432 19.7611 10.5917 19.5459 10.7449 18.9428C10.8845 18.3921 10.9058 18.2544 10.9291 17.8026C10.9427 17.5136 10.9194 17.2868 10.869 17.2189C10.8418 17.1859 10.8418 17.1859 10.8399 17.2208Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M2.13695 19.4372C1.98182 19.5923 1.19064 20.1527 0.998666 20.2458C0.816385 20.3331 0.715549 20.3544 0.416919 20.3718C0.0814446 20.3912 0 20.4339 0 20.5871C0 20.6724 0.0446006 20.748 0.139619 20.8256C0.223003 20.8915 0.455702 21.0331 0.48285 21.0331C0.490607 21.0331 0.511938 21.0447 0.531329 21.0583C0.560417 21.0796 0.556538 21.0913 0.473154 21.1979C0.424676 21.2619 0.352927 21.3724 0.318022 21.4461L0.25209 21.5761L0.302509 21.6245C0.331596 21.6517 0.362622 21.673 0.372318 21.673C0.382014 21.673 0.52939 21.5567 0.700036 21.4151C0.870682 21.2755 1.02581 21.1553 1.04327 21.1514C1.07235 21.1456 1.07235 21.1494 1.04715 21.1785C1.01418 21.2192 0.453763 21.6846 0.409162 21.7118C0.385892 21.7254 0.378136 21.7719 0.372318 21.9387C0.36844 22.0531 0.374257 22.1869 0.382014 22.2354C0.397527 22.3129 0.407223 22.3246 0.465398 22.3459C0.502242 22.3575 0.634105 22.4041 0.756271 22.4487C0.878438 22.4933 1.0103 22.5398 1.04908 22.5534L1.11695 22.5767L1.33608 22.3827L1.55714 22.1869L1.55327 21.7603C1.54939 21.4539 1.54357 21.3298 1.52612 21.3201C1.51254 21.3123 1.40977 21.2735 1.29342 21.2348C1.17901 21.1979 1.08981 21.1591 1.09562 21.1494C1.10532 21.1339 1.34965 21.2018 1.49509 21.258C1.56102 21.2852 1.57266 21.2832 1.78596 21.1999C1.90813 21.1533 2.08266 21.0913 2.17573 21.0602L2.34444 21.0059L2.3968 21.0544C2.48988 21.1397 2.72839 21.4345 2.83117 21.5916L2.93007 21.7448L3.11235 21.7913C3.21318 21.8165 3.30045 21.8301 3.30626 21.8243C3.32759 21.8029 3.41292 21.5353 3.41292 21.4907C3.41292 21.4461 3.28687 21.2348 3.21512 21.1553C3.17052 21.1087 3.18216 21.0719 3.24033 21.0719C3.32953 21.0719 3.48661 20.9575 3.54478 20.8489C3.59132 20.7597 3.60102 20.3466 3.56029 20.1391C3.5409 20.0499 3.51763 19.9472 3.506 19.9142L3.48273 19.8502L3.44394 19.922C3.38189 20.0286 3.3179 20.0655 3.17634 20.0771C2.96303 20.0945 2.75748 20.0305 2.60041 19.8967C2.54224 19.8463 2.51121 19.8308 2.48018 19.8405L2.4414 19.8541L2.48018 19.7746C2.50345 19.7319 2.5209 19.6621 2.5209 19.6214C2.5209 19.505 2.37935 19.3072 2.29402 19.3072C2.28045 19.3072 2.21064 19.3654 2.13695 19.4372Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M2.17186 21.1128C1.73167 21.264 1.62501 21.3106 1.60756 21.3571C1.58817 21.4095 1.58817 21.8826 1.60756 22.0804L1.6192 22.2065L1.79178 22.2705C1.8868 22.3054 2.04969 22.3558 2.15053 22.381C2.48212 22.4624 2.43752 22.4721 2.56357 22.2802C2.62368 22.1851 2.7187 22.0319 2.77299 21.935L2.87383 21.7605L2.83699 21.6926C2.79045 21.6034 2.53836 21.266 2.43946 21.1574C2.35026 21.0624 2.32893 21.0585 2.17186 21.1128Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M9.2847 21.2447C9.25755 21.2815 9.25755 21.299 9.28082 21.3727C9.29633 21.425 9.29827 21.4638 9.28664 21.4696C9.27694 21.4774 9.26919 21.4677 9.26919 21.4502C9.26919 21.4328 9.25755 21.4211 9.24592 21.425C9.22846 21.4308 9.21683 21.5006 9.20713 21.6267C9.17998 21.999 9.12375 22.2239 8.92789 22.7165C8.7747 23.1043 8.74755 23.2129 8.79409 23.2633C8.83869 23.3138 9.03455 23.3971 9.16641 23.4204C9.34093 23.4534 9.65896 23.4301 9.82572 23.3739C10.0119 23.3079 10.231 23.1916 10.264 23.1412C10.2814 23.1121 10.295 23.0054 10.3028 22.8173C10.3202 22.4295 10.3415 22.3054 10.4424 21.999C10.551 21.6693 10.5548 21.5801 10.4695 21.4017L10.4075 21.2757L10.3629 21.3746C10.3396 21.4308 10.3028 21.4871 10.2814 21.5006C10.262 21.5162 10.2407 21.5433 10.2329 21.5608C10.2271 21.5801 10.2116 21.5957 10.2 21.5957C10.1864 21.5957 10.1825 21.5588 10.1922 21.4812C10.2039 21.3727 10.2019 21.3649 10.1554 21.3339C10.0604 21.2718 9.83154 21.2253 9.56782 21.2136C9.32154 21.202 9.31379 21.2039 9.2847 21.2447Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M3.39548 21.71L3.34894 21.8651L3.3916 22.0358C3.44202 22.251 3.46529 22.3965 3.48274 22.6001C3.4905 22.6873 3.50213 22.7649 3.51183 22.7707C3.53122 22.7824 3.56612 22.6583 3.58939 22.4973C3.61266 22.3305 3.60879 22.1327 3.57776 21.9563C3.55061 21.8031 3.47304 21.5568 3.45365 21.5568C3.44784 21.5568 3.42069 21.6266 3.39548 21.71Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M0.195853 21.7391C0.129921 21.9505 0.11053 22.1114 0.122165 22.3306C0.13186 22.5284 0.186157 22.8115 0.211366 22.7882C0.217183 22.7804 0.244332 22.7048 0.269541 22.6176C0.310263 22.4799 0.31608 22.4081 0.323837 22.0804L0.331594 21.7023L0.283115 21.6557L0.234636 21.6111L0.195853 21.7391Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M2.83311 21.9372C2.78657 22.0167 2.68767 22.1757 2.61398 22.2901L2.47824 22.4957L2.53835 22.7671C2.57132 22.9145 2.60041 23.0386 2.60235 23.0425C2.60623 23.0444 2.71288 23.06 2.84086 23.0774C2.96885 23.0949 3.09295 23.1143 3.11428 23.1181C3.14725 23.1259 3.18216 23.091 3.29657 22.9417L3.43812 22.7574L3.42649 22.55C3.41485 22.358 3.37995 22.1311 3.33535 21.9624C3.31596 21.8926 3.31208 21.8906 3.13174 21.8402C3.0309 21.8131 2.9417 21.7898 2.932 21.7898C2.92425 21.7898 2.87965 21.8557 2.83311 21.9372Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M1.36128 22.4257L1.14215 22.6138L1.15379 22.7108C1.17512 22.8698 1.23911 23.246 1.26238 23.3449C1.28177 23.4283 1.28953 23.438 1.38261 23.4748C1.43884 23.4961 1.57846 23.5427 1.69481 23.5756L1.90424 23.6377L2.06325 23.4826C2.30758 23.244 2.46853 23.0967 2.50926 23.0753C2.54416 23.0559 2.54222 23.0463 2.48987 22.7786C2.45884 22.6274 2.42587 22.4994 2.41424 22.4975C2.40454 22.4936 2.30177 22.4684 2.18736 22.4412C2.01283 22.4005 1.88485 22.3579 1.60949 22.2493C1.5901 22.2415 1.50283 22.3055 1.36128 22.4257Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M0.382027 22.385C0.37621 22.3947 0.345183 22.5053 0.312218 22.6313C0.279252 22.7573 0.248226 22.8679 0.240469 22.8776C0.234651 22.8873 0.2618 22.959 0.302522 23.0366C0.438263 23.3042 0.665144 23.5737 0.756285 23.5737C0.808642 23.5737 1.14799 23.471 1.19841 23.4399C1.21974 23.4283 1.21587 23.3876 1.18484 23.2324C1.16351 23.1277 1.13636 22.9513 1.12279 22.8407C1.10921 22.7321 1.08982 22.6352 1.07818 22.6274C1.06655 22.6177 0.921113 22.5615 0.756285 22.5014C0.591456 22.4432 0.442141 22.3889 0.424689 22.3811C0.405297 22.3753 0.387845 22.3773 0.382027 22.385Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M3.32567 22.9724C3.21708 23.1178 3.20932 23.1353 3.20932 23.2342C3.20932 23.2923 3.21514 23.3408 3.22289 23.3408C3.25586 23.3408 3.50989 22.8871 3.50989 22.8289C3.50989 22.8231 3.49438 22.8172 3.47692 22.8172C3.45559 22.8172 3.39354 22.8832 3.32567 22.9724Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M2.33087 23.2962C2.21646 23.399 2.08266 23.5212 2.03418 23.5677L1.94498 23.653L2.02836 23.783C2.16798 24.0021 2.14471 23.9866 2.27851 23.9517C2.54805 23.8838 2.82148 23.7384 3.02509 23.5561L3.14919 23.4436L3.15695 23.3098L3.16471 23.176L2.91456 23.1411C2.53448 23.0887 2.56939 23.079 2.33087 23.2962Z" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M1.04715 23.5465C0.956013 23.5814 0.862934 23.6105 0.839664 23.6124C0.765976 23.6124 0.787307 23.6434 0.919169 23.7249C1.05879 23.8141 1.23331 23.8916 1.41559 23.9459C1.55521 23.9867 2.00898 24.0177 2.06133 23.9886C2.08654 23.9731 2.08072 23.9556 2.02061 23.8529C1.92171 23.69 1.90814 23.6764 1.82669 23.6609C1.78791 23.6531 1.6386 23.6085 1.49704 23.562C1.35548 23.5154 1.23331 23.4786 1.22556 23.4786C1.2178 23.4805 1.13829 23.5096 1.04715 23.5465Z" })
    ]
  }
);
var ForwardRef19 = (0, import_react25.forwardRef)(Player01);
var Player01_default = ForwardRef19;

// src/components/Player01.tsx
var Player012 = createSvgIcon_default({
  as: Player01_default,
  ariaLabel: "player-01",
  category: "zc icons",
  displayName: "Player-01"
});
var Player01_default2 = Player012;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Arrow,
  Ball,
  CurvedArrow,
  Ellipse,
  Flag,
  FlagWithStand,
  Hand,
  Icon,
  IconProvider,
  Judge,
  Player,
  Player01,
  Rectangle,
  Shape,
  SoccerField,
  SoccerTools,
  SoccerTools01,
  TacticTools,
  Text,
  ZoomIn,
  ZoomOut,
  createIconFont,
  createSvgIcon
});
//# sourceMappingURL=index.cjs.map