import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-BGRA5IH3.js";
import {
  GlobalStyles_default,
  _extends,
  capitalize_default,
  createContainer,
  defaultTheme_default,
  identifier_default,
  require_prop_types,
  styled_default,
  useThemeProps
} from "/build/_shared/chunk-XXEVKDGZ.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-YAKEP2ZL.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// node_modules/@mui/material/CssBaseline/CssBaseline.js
var React2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
"use client";
function GlobalStyles(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalStyles_default, _extends({}, props, {
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  }));
}
true ? GlobalStyles.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: import_prop_types.default.oneOfType([import_prop_types.default.array, import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.object, import_prop_types.default.string, import_prop_types.default.bool])
} : void 0;
var GlobalStyles_default2 = GlobalStyles;

// node_modules/@mui/material/CssBaseline/CssBaseline.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
"use client";
var html = (theme, enableColorScheme) => _extends({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%"
}, enableColorScheme && !theme.vars && {
  colorScheme: theme.palette.mode
});
var body = (theme) => _extends({
  color: (theme.vars || theme).palette.text.primary
}, theme.typography.body1, {
  backgroundColor: (theme.vars || theme).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (theme.vars || theme).palette.common.white
  }
});
var styles = (theme, enableColorScheme = false) => {
  var _theme$components;
  const colorSchemeStyles = {};
  if (enableColorScheme && theme.colorSchemes) {
    Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
      var _scheme$palette;
      colorSchemeStyles[theme.getColorSchemeSelector(key).replace(/\s*&/, "")] = {
        colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
      };
    });
  }
  let defaultStyles = _extends({
    html: html(theme, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme.typography.fontWeightBold
    },
    body: _extends({
      margin: 0
    }, body(theme), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (theme.vars || theme).palette.background.default
      }
    })
  }, colorSchemeStyles);
  const themeOverrides = (_theme$components = theme.components) == null || (_theme$components = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components.styleOverrides;
  if (themeOverrides) {
    defaultStyles = [defaultStyles, themeOverrides];
  }
  return defaultStyles;
};
function CssBaseline(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiCssBaseline"
  });
  const {
    children,
    enableColorScheme = false
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(React2.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(GlobalStyles_default2, {
      styles: (theme) => styles(theme, enableColorScheme)
    }), children]
  });
}
true ? CssBaseline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * You can wrap a node.
   */
  children: import_prop_types2.default.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: import_prop_types2.default.bool
} : void 0;
var CssBaseline_default = CssBaseline;

// node_modules/@mui/material/CssBaseline/index.js
"use client";

// node_modules/@mui/material/Container/Container.js
var import_prop_types3 = __toESM(require_prop_types());
"use client";
var Container = createContainer({
  createStyledComponent: styled_default("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      const {
        ownerState
      } = props;
      return [styles2.root, styles2[`maxWidth${capitalize_default(String(ownerState.maxWidth))}`], ownerState.fixed && styles2.fixed, ownerState.disableGutters && styles2.disableGutters];
    }
  }),
  useThemeProps: (inProps) => useThemeProps({
    props: inProps,
    name: "MuiContainer"
  })
});
true ? Container.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types3.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types3.default.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types3.default.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: import_prop_types3.default.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: import_prop_types3.default.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types3.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object])
} : void 0;
var Container_default = Container;

// node_modules/@mui/material/Container/index.js
"use client";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
  import.meta.hot.lastModified = "1701966679036.563";
}
var links = () => [...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : []];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CssBaseline_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { maxWidth: "md", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-OAWKSOLH.js.map
