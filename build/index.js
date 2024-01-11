var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body2 = new PassThrough(), stream = createReadableStreamFromReadable(body2);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body2);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body2 = new PassThrough(), stream = createReadableStreamFromReadable(body2);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body2);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
import * as React32 from "react";
import { json as json2 } from "@remix-run/node";

// app/layout/Appbar.tsx
import * as React29 from "react";

// node_modules/@mui/material/AppBar/AppBar.js
import _objectWithoutPropertiesLoose6 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends7 from "@babel/runtime/helpers/esm/extends";
import * as React3 from "react";
import PropTypes2 from "prop-types";
import clsx2 from "clsx";

// node_modules/@mui/base/composeClasses/index.js
import { unstable_composeClasses } from "@mui/utils";

// node_modules/@mui/material/styles/styled.js
import { createStyled, shouldForwardProp } from "@mui/system";

// node_modules/@mui/material/styles/createTheme.js
import _extends5 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose4 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import "@mui/utils";
import { deepmerge as deepmerge3 } from "@mui/utils";
import { createTheme as systemCreateTheme, unstable_defaultSxConfig as defaultSxConfig, unstable_styleFunctionSx as styleFunctionSx } from "@mui/system";

// node_modules/@mui/material/generateUtilityClass/index.js
import { unstable_generateUtilityClass } from "@mui/utils";

// node_modules/@mui/material/styles/createMixins.js
import _extends from "@babel/runtime/helpers/esm/extends";
function createMixins(breakpoints, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [breakpoints.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    }
  }, mixins);
}

// node_modules/@mui/material/styles/createPalette.js
import _extends2 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import "@mui/utils";
import { deepmerge } from "@mui/utils";
import { darken, getContrastRatio, lighten } from "@mui/system";

// node_modules/@mui/material/colors/common.js
var common = {
  black: "#000",
  white: "#fff"
}, common_default = common;

// node_modules/@mui/material/colors/grey.js
var grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, grey_default = grey;

// node_modules/@mui/material/colors/purple.js
var purple = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, purple_default = purple;

// node_modules/@mui/material/colors/red.js
var red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, red_default = red;

// node_modules/@mui/material/colors/orange.js
var orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, orange_default = orange;

// node_modules/@mui/material/colors/blue.js
var blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, blue_default = blue;

// node_modules/@mui/material/colors/lightBlue.js
var lightBlue = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, lightBlue_default = lightBlue;

// node_modules/@mui/material/colors/green.js
var green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, green_default = green;

// node_modules/@mui/material/styles/createPalette.js
var _excluded = ["mode", "contrastThreshold", "tonalOffset"], light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common_default.white,
    default: common_default.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, dark = {
  text: {
    primary: common_default.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: common_default.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  let tonalOffsetLight = tonalOffset.light || tonalOffset, tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  intent[direction] || (intent.hasOwnProperty(shade) ? intent[direction] = intent[shade] : direction === "light" ? intent.light = lighten(intent.main, tonalOffsetLight) : direction === "dark" && (intent.dark = darken(intent.main, tonalOffsetDark)));
}
function getDefaultPrimary(mode2 = "light") {
  return mode2 === "dark" ? {
    main: blue_default[200],
    light: blue_default[50],
    dark: blue_default[400]
  } : {
    main: blue_default[700],
    light: blue_default[400],
    dark: blue_default[800]
  };
}
function getDefaultSecondary(mode2 = "light") {
  return mode2 === "dark" ? {
    main: purple_default[200],
    light: purple_default[50],
    dark: purple_default[400]
  } : {
    main: purple_default[500],
    light: purple_default[300],
    dark: purple_default[700]
  };
}
function getDefaultError(mode2 = "light") {
  return mode2 === "dark" ? {
    main: red_default[500],
    light: red_default[300],
    dark: red_default[700]
  } : {
    main: red_default[700],
    light: red_default[400],
    dark: red_default[800]
  };
}
function getDefaultInfo(mode2 = "light") {
  return mode2 === "dark" ? {
    main: lightBlue_default[400],
    light: lightBlue_default[300],
    dark: lightBlue_default[700]
  } : {
    main: lightBlue_default[700],
    light: lightBlue_default[500],
    dark: lightBlue_default[900]
  };
}
function getDefaultSuccess(mode2 = "light") {
  return mode2 === "dark" ? {
    main: green_default[400],
    light: green_default[300],
    dark: green_default[700]
  } : {
    main: green_default[800],
    light: green_default[500],
    dark: green_default[900]
  };
}
function getDefaultWarning(mode2 = "light") {
  return mode2 === "dark" ? {
    main: orange_default[400],
    light: orange_default[300],
    dark: orange_default[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: orange_default[500],
    dark: orange_default[900]
  };
}
function createPalette(palette) {
  let {
    mode: mode2 = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette, other = _objectWithoutPropertiesLoose(palette, _excluded), primary = palette.primary || getDefaultPrimary(mode2), secondary = palette.secondary || getDefaultSecondary(mode2), error = palette.error || getDefaultError(mode2), info = palette.info || getDefaultInfo(mode2), success = palette.success || getDefaultSuccess(mode2), warning = palette.warning || getDefaultWarning(mode2);
  function getContrastText(background) {
    let contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    {
      let contrast = getContrastRatio(background, contrastText);
      contrast < 3 && console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return contrastText;
  }
  let augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    if (color = _extends2({}, color), !color.main && color[mainShade] && (color.main = color[mainShade]), !color.hasOwnProperty("main"))
      throw new Error(`MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.`);
    if (typeof color.main != "string")
      throw new Error(`MUI: The color${name ? ` (${name})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`);
    return addLightOrDark(color, "light", lightShade, tonalOffset), addLightOrDark(color, "dark", darkShade, tonalOffset), color.contrastText || (color.contrastText = getContrastText(color.main)), color;
  }, modes = {
    dark,
    light
  };
  return modes[mode2] || console.error(`MUI: The palette mode \`${mode2}\` is not supported.`), deepmerge(_extends2({
    // A collection of common colors.
    common: _extends2({}, common_default),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: mode2,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: "success"
    }),
    // The grey colors.
    grey: grey_default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode2]), other);
}

// node_modules/@mui/material/styles/createTypography.js
import _extends3 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose2 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import { deepmerge as deepmerge2 } from "@mui/utils";
var _excluded2 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var caseAllCaps = {
  textTransform: "uppercase"
}, defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette, typography) {
  let _ref = typeof typography == "function" ? typography(palette) : typography, {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref, other = _objectWithoutPropertiesLoose2(_ref, _excluded2);
  typeof fontSize != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof htmlFontSize != "number" && console.error("MUI: `htmlFontSize` is required to be a number.");
  let coef = fontSize / 14, pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`), buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends3({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants), variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return deepmerge2(_extends3({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: !1
    // No need to clone deep
  });
}

// node_modules/@mui/material/styles/shadows.js
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${0.2})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${0.14})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${0.12})`].join(",");
}
var shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], shadows_default = shadows;

// node_modules/@mui/material/styles/createTransitions.js
import _objectWithoutPropertiesLoose3 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends4 from "@babel/runtime/helpers/esm/extends";
var _excluded3 = ["duration", "easing", "delay"], easing = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
  if (!height)
    return 0;
  let constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  let mergedEasing = _extends4({}, easing, inputTransitions.easing), mergedDuration = _extends4({}, duration, inputTransitions.duration);
  return _extends4({
    getAutoHeightDuration,
    create: (props = ["all"], options = {}) => {
      let {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0
      } = options, other = _objectWithoutPropertiesLoose3(options, _excluded3);
      {
        let isString = (value) => typeof value == "string", isNumber = (value) => !isNaN(parseFloat(value));
        !isString(props) && !Array.isArray(props) && console.error('MUI: Argument "props" must be a string or Array.'), !isNumber(durationOption) && !isString(durationOption) && console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`), isString(easingOption) || console.error('MUI: Argument "easing" must be a string.'), !isNumber(delay) && !isString(delay) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof options != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(other).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(",")}].`);
      }
      return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption == "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay == "string" ? delay : formatMs(delay)}`).join(",");
    }
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// node_modules/@mui/material/styles/zIndex.js
var zIndex = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, zIndex_default = zIndex;

// node_modules/@mui/material/styles/createTheme.js
var _excluded4 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme(options = {}, ...args) {
  let {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose4(options, _excluded4);
  if (options.vars)
    throw new Error("MUI: `vars` is a private field used for CSS variables support.\nPlease use another name.");
  let palette = createPalette(paletteInput), systemTheme = systemCreateTheme(options), muiTheme = deepmerge3(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows_default.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends5({}, zIndex_default)
  });
  muiTheme = deepmerge3(muiTheme, other), muiTheme = args.reduce((acc, argument) => deepmerge3(acc, argument), muiTheme);
  {
    let stateClasses = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], traverse = (node, component) => {
      let key;
      for (key in node) {
        let child = node[key];
        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          {
            let stateClass = unstable_generateUtilityClass("", key);
            console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key}\` internal state.`, "You can not override it like this: ", JSON.stringify(node, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach((component) => {
      let styleOverrides = muiTheme.components[component].styleOverrides;
      styleOverrides && component.indexOf("Mui") === 0 && traverse(styleOverrides, component);
    });
  }
  return muiTheme.unstable_sxConfig = _extends5({}, defaultSxConfig, other?.unstable_sxConfig), muiTheme.unstable_sx = function(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  }, muiTheme;
}
var createTheme_default = createTheme;

// node_modules/@mui/material/styles/defaultTheme.js
var defaultTheme = createTheme_default(), defaultTheme_default = defaultTheme;

// node_modules/@mui/material/styles/identifier.js
var identifier_default = "$$material";

// node_modules/@mui/material/styles/styled.js
var rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes", slotShouldForwardProp = shouldForwardProp, styled = createStyled({
  themeId: identifier_default,
  defaultTheme: defaultTheme_default,
  rootShouldForwardProp
}), styled_default = styled;

// node_modules/@mui/material/styles/useThemeProps.js
import { useThemeProps as systemUseThemeProps } from "@mui/system";
function useThemeProps({
  props,
  name
}) {
  return systemUseThemeProps({
    props,
    name,
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  });
}

// node_modules/@mui/material/utils/capitalize.js
import { unstable_capitalize as capitalize } from "@mui/utils";
var capitalize_default = capitalize;

// node_modules/@mui/material/Paper/Paper.js
import _objectWithoutPropertiesLoose5 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends6 from "@babel/runtime/helpers/esm/extends";
import * as React2 from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { chainPropTypes, integerPropType } from "@mui/utils";
import { alpha } from "@mui/system";

// node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = (elevation) => {
  let alphaValue;
  return elevation < 1 ? alphaValue = 5.11916 * elevation ** 2 : alphaValue = 4.5 * Math.log(elevation + 1) + 2, (alphaValue / 100).toFixed(2);
}, getOverlayAlpha_default = getOverlayAlpha;

// node_modules/@mui/material/styles/useTheme.js
import * as React from "react";
import { useTheme as useThemeSystem } from "@mui/system";
function useTheme() {
  let theme = useThemeSystem(defaultTheme_default);
  return React.useDebugValue(theme), theme[identifier_default] || theme;
}

// node_modules/@mui/material/Paper/paperClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses } from "@mui/utils";
function getPaperUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiPaper", slot);
}
var paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);

// node_modules/@mui/material/Paper/Paper.js
import { jsx as _jsx } from "react/jsx-runtime";
var _excluded5 = ["className", "component", "elevation", "square", "variant"], useUtilityClasses = (ownerState) => {
  let {
    square,
    elevation,
    variant,
    classes
  } = ownerState, slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return unstable_composeClasses(slots, getPaperUtilityClass, classes);
}, PaperRoot = styled_default("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, styles4[ownerState.variant], !ownerState.square && styles4.rounded, ownerState.variant === "elevation" && styles4[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends6({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${(theme.vars || theme).palette.divider}`
  }, ownerState.variant === "elevation" && _extends6({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))})`
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
}), Paper = /* @__PURE__ */ React2.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiPaper"
  }), {
    className,
    component = "div",
    elevation = 1,
    square = !1,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose5(props, _excluded5), ownerState = _extends6({}, props, {
    component,
    elevation,
    square,
    variant
  }), classes = useUtilityClasses(ownerState);
  return useTheme().shadows[elevation] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join(`
`)), /* @__PURE__ */ _jsx(PaperRoot, _extends6({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other));
});
Paper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: chainPropTypes(integerPropType, (props) => {
    let {
      elevation,
      variant
    } = props;
    return elevation > 0 && variant === "outlined" ? new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: PropTypes.oneOfType([PropTypes.oneOf(["elevation", "outlined"]), PropTypes.string])
};
var Paper_default = Paper;

// node_modules/@mui/material/AppBar/appBarClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses2 } from "@mui/utils";
function getAppBarUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiAppBar", slot);
}
var appBarClasses = generateUtilityClasses2("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);

// node_modules/@mui/material/AppBar/AppBar.js
import { jsx as _jsx2 } from "react/jsx-runtime";
var _excluded6 = ["className", "color", "enableColorOnDark", "position"], useUtilityClasses2 = (ownerState) => {
  let {
    color,
    position,
    classes
  } = ownerState, slots = {
    root: ["root", `color${capitalize_default(color)}`, `position${capitalize_default(position)}`]
  };
  return unstable_composeClasses(slots, getAppBarUtilityClass, classes);
}, joinVars = (var1, var2) => var1 ? `${var1?.replace(")", "")}, ${var2})` : var2, AppBarRoot = styled_default(Paper_default, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, styles4[`position${capitalize_default(ownerState.position)}`], styles4[`color${capitalize_default(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  let backgroundColorDefault = theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900];
  return _extends7({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    // Prevent padding issue with the Modal and fixed positioned AppBar.
    flexShrink: 0
  }, ownerState.position === "fixed" && {
    position: "fixed",
    zIndex: (theme.vars || theme).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0,
    "@media print": {
      // Prevent the app bar to be visible on each printed page.
      position: "absolute"
    }
  }, ownerState.position === "absolute" && {
    position: "absolute",
    zIndex: (theme.vars || theme).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, ownerState.position === "sticky" && {
    // ⚠️ sticky is not supported by IE11.
    position: "sticky",
    zIndex: (theme.vars || theme).zIndex.appBar,
    top: 0,
    left: "auto",
    right: 0
  }, ownerState.position === "static" && {
    position: "static"
  }, ownerState.position === "relative" && {
    position: "relative"
  }, !theme.vars && _extends7({}, ownerState.color === "default" && {
    backgroundColor: backgroundColorDefault,
    color: theme.palette.getContrastText(backgroundColorDefault)
  }, ownerState.color && ownerState.color !== "default" && ownerState.color !== "inherit" && ownerState.color !== "transparent" && {
    backgroundColor: theme.palette[ownerState.color].main,
    color: theme.palette[ownerState.color].contrastText
  }, ownerState.color === "inherit" && {
    color: "inherit"
  }, theme.palette.mode === "dark" && !ownerState.enableColorOnDark && {
    backgroundColor: null,
    color: null
  }, ownerState.color === "transparent" && _extends7({
    backgroundColor: "transparent",
    color: "inherit"
  }, theme.palette.mode === "dark" && {
    backgroundImage: "none"
  })), theme.vars && _extends7({}, ownerState.color === "default" && {
    "--AppBar-background": ownerState.enableColorOnDark ? theme.vars.palette.AppBar.defaultBg : joinVars(theme.vars.palette.AppBar.darkBg, theme.vars.palette.AppBar.defaultBg),
    "--AppBar-color": ownerState.enableColorOnDark ? theme.vars.palette.text.primary : joinVars(theme.vars.palette.AppBar.darkColor, theme.vars.palette.text.primary)
  }, ownerState.color && !ownerState.color.match(/^(default|inherit|transparent)$/) && {
    "--AppBar-background": ownerState.enableColorOnDark ? theme.vars.palette[ownerState.color].main : joinVars(theme.vars.palette.AppBar.darkBg, theme.vars.palette[ownerState.color].main),
    "--AppBar-color": ownerState.enableColorOnDark ? theme.vars.palette[ownerState.color].contrastText : joinVars(theme.vars.palette.AppBar.darkColor, theme.vars.palette[ownerState.color].contrastText)
  }, {
    backgroundColor: "var(--AppBar-background)",
    color: ownerState.color === "inherit" ? "inherit" : "var(--AppBar-color)"
  }, ownerState.color === "transparent" && {
    backgroundImage: "none",
    backgroundColor: "transparent",
    color: "inherit"
  }));
}), AppBar = /* @__PURE__ */ React3.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiAppBar"
  }), {
    className,
    color = "primary",
    enableColorOnDark = !1,
    position = "fixed"
  } = props, other = _objectWithoutPropertiesLoose6(props, _excluded6), ownerState = _extends7({}, props, {
    color,
    position,
    enableColorOnDark
  }), classes = useUtilityClasses2(ownerState);
  return /* @__PURE__ */ _jsx2(AppBarRoot, _extends7({
    square: !0,
    component: "header",
    ownerState,
    elevation: 4,
    className: clsx2(classes.root, className, position === "fixed" && "mui-fixed"),
    ref
  }, other));
});
AppBar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes2.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes2.object,
  /**
   * @ignore
   */
  className: PropTypes2.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes2.oneOfType([PropTypes2.oneOf(["default", "inherit", "primary", "secondary", "transparent", "error", "info", "success", "warning"]), PropTypes2.string]),
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: PropTypes2.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: PropTypes2.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes2.oneOfType([PropTypes2.arrayOf(PropTypes2.oneOfType([PropTypes2.func, PropTypes2.object, PropTypes2.bool])), PropTypes2.func, PropTypes2.object])
};
var AppBar_default = AppBar;

// node_modules/@mui/material/Box/Box.js
import { createBox } from "@mui/system";
import PropTypes3 from "prop-types";

// node_modules/@mui/material/className/index.js
import { unstable_ClassNameGenerator } from "@mui/utils";

// node_modules/@mui/material/styles/index.js
import "@mui/utils";
import { hexToRgb, rgbToHex, hslToRgb, decomposeColor, recomposeColor, getContrastRatio as getContrastRatio2, getLuminance, emphasize, alpha as alpha2, darken as darken2, lighten as lighten2, css, keyframes } from "@mui/system";
import { StyledEngineProvider } from "@mui/system";

// node_modules/@mui/material/Box/boxClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses3 } from "@mui/utils";
var boxClasses = generateUtilityClasses3("MuiBox", ["root"]), boxClasses_default = boxClasses;

// node_modules/@mui/material/Box/Box.js
var defaultTheme2 = createTheme_default(), Box = createBox({
  themeId: identifier_default,
  defaultTheme: defaultTheme2,
  defaultClassName: boxClasses_default.root,
  generateClassName: unstable_ClassNameGenerator.generate
});
Box.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: PropTypes3.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes3.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes3.oneOfType([PropTypes3.arrayOf(PropTypes3.oneOfType([PropTypes3.func, PropTypes3.object, PropTypes3.bool])), PropTypes3.func, PropTypes3.object])
};
var Box_default = Box;

// node_modules/@mui/material/Toolbar/Toolbar.js
import _objectWithoutPropertiesLoose7 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends8 from "@babel/runtime/helpers/esm/extends";
import * as React4 from "react";
import PropTypes4 from "prop-types";
import clsx3 from "clsx";

// node_modules/@mui/material/Toolbar/toolbarClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses4 } from "@mui/utils";
function getToolbarUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiToolbar", slot);
}
var toolbarClasses = generateUtilityClasses4("MuiToolbar", ["root", "gutters", "regular", "dense"]);

// node_modules/@mui/material/Toolbar/Toolbar.js
import { jsx as _jsx3 } from "react/jsx-runtime";
var _excluded7 = ["className", "component", "disableGutters", "variant"], useUtilityClasses3 = (ownerState) => {
  let {
    classes,
    disableGutters,
    variant
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", !disableGutters && "gutters", variant]
  }, getToolbarUtilityClass, classes);
}, ToolbarRoot = styled_default("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, !ownerState.disableGutters && styles4.gutters, styles4[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => _extends8({
  position: "relative",
  display: "flex",
  alignItems: "center"
}, !ownerState.disableGutters && {
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}, ownerState.variant === "dense" && {
  minHeight: 48
}), ({
  theme,
  ownerState
}) => ownerState.variant === "regular" && theme.mixins.toolbar), Toolbar = /* @__PURE__ */ React4.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiToolbar"
  }), {
    className,
    component = "div",
    disableGutters = !1,
    variant = "regular"
  } = props, other = _objectWithoutPropertiesLoose7(props, _excluded7), ownerState = _extends8({}, props, {
    component,
    disableGutters,
    variant
  }), classes = useUtilityClasses3(ownerState);
  return /* @__PURE__ */ _jsx3(ToolbarRoot, _extends8({
    as: component,
    className: clsx3(classes.root, className),
    ref,
    ownerState
  }, other));
});
Toolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: PropTypes4.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes4.object,
  /**
   * @ignore
   */
  className: PropTypes4.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes4.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: PropTypes4.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes4.oneOfType([PropTypes4.arrayOf(PropTypes4.oneOfType([PropTypes4.func, PropTypes4.object, PropTypes4.bool])), PropTypes4.func, PropTypes4.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: PropTypes4.oneOfType([PropTypes4.oneOf(["dense", "regular"]), PropTypes4.string])
};
var Toolbar_default = Toolbar;

// node_modules/@mui/material/Typography/Typography.js
import _objectWithoutPropertiesLoose8 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends9 from "@babel/runtime/helpers/esm/extends";
import * as React5 from "react";
import PropTypes5 from "prop-types";
import clsx4 from "clsx";
import { unstable_extendSxProp as extendSxProp } from "@mui/system";

// node_modules/@mui/material/Typography/typographyClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses5 } from "@mui/utils";
function getTypographyUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTypography", slot);
}
var typographyClasses = generateUtilityClasses5("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);

// node_modules/@mui/material/Typography/Typography.js
import { jsx as _jsx4 } from "react/jsx-runtime";
var _excluded8 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], useUtilityClasses4 = (ownerState) => {
  let {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState, slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize_default(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return unstable_composeClasses(slots, getTypographyUtilityClass, classes);
}, TypographyRoot = styled_default("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.variant && styles4[ownerState.variant], ownerState.align !== "inherit" && styles4[`align${capitalize_default(ownerState.align)}`], ownerState.noWrap && styles4.noWrap, ownerState.gutterBottom && styles4.gutterBottom, ownerState.paragraph && styles4.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends9({
  margin: 0
}, ownerState.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, ownerState.variant !== "inherit" && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, ownerState.gutterBottom && {
  marginBottom: "0.35em"
}, ownerState.paragraph && {
  marginBottom: 16
})), defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, transformDeprecatedColors = (color) => colorTransformations[color] || color, Typography = /* @__PURE__ */ React5.forwardRef(function(inProps, ref) {
  let themeProps = useThemeProps({
    props: inProps,
    name: "MuiTypography"
  }), color = transformDeprecatedColors(themeProps.color), props = extendSxProp(_extends9({}, themeProps, {
    color
  })), {
    align = "inherit",
    className,
    component,
    gutterBottom = !1,
    noWrap = !1,
    paragraph = !1,
    variant = "body1",
    variantMapping = defaultVariantMapping
  } = props, other = _objectWithoutPropertiesLoose8(props, _excluded8), ownerState = _extends9({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  }), Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span", classes = useUtilityClasses4(ownerState);
  return /* @__PURE__ */ _jsx4(TypographyRoot, _extends9({
    as: Component,
    ref,
    ownerState,
    className: clsx4(classes.root, className)
  }, other));
});
Typography.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: PropTypes5.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: PropTypes5.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes5.object,
  /**
   * @ignore
   */
  className: PropTypes5.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes5.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: PropTypes5.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: PropTypes5.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: PropTypes5.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes5.oneOfType([PropTypes5.arrayOf(PropTypes5.oneOfType([PropTypes5.func, PropTypes5.object, PropTypes5.bool])), PropTypes5.func, PropTypes5.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: PropTypes5.oneOfType([PropTypes5.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), PropTypes5.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: PropTypes5.object
};
var Typography_default = Typography;

// node_modules/@mui/material/IconButton/IconButton.js
import _objectWithoutPropertiesLoose11 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends12 from "@babel/runtime/helpers/esm/extends";
import * as React9 from "react";
import PropTypes9 from "prop-types";
import clsx8 from "clsx";
import { chainPropTypes as chainPropTypes2 } from "@mui/utils";
import { alpha as alpha3 } from "@mui/system";

// node_modules/@mui/material/ButtonBase/ButtonBase.js
import _extends11 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose10 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React8 from "react";
import PropTypes8 from "prop-types";
import clsx7 from "clsx";
import { elementTypeAcceptingRef, refType } from "@mui/utils";

// node_modules/@mui/material/utils/useForkRef.js
import { unstable_useForkRef as useForkRef } from "@mui/utils";
var useForkRef_default = useForkRef;

// node_modules/@mui/material/utils/useEventCallback.js
import { unstable_useEventCallback as useEventCallback } from "@mui/utils";
var useEventCallback_default = useEventCallback;

// node_modules/@mui/material/utils/useIsFocusVisible.js
import { unstable_useIsFocusVisible as useIsFocusVisible } from "@mui/utils";
var useIsFocusVisible_default = useIsFocusVisible;

// node_modules/@mui/material/ButtonBase/TouchRipple.js
import _extends10 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose9 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React7 from "react";
import PropTypes7 from "prop-types";
import { TransitionGroup } from "react-transition-group";
import clsx6 from "clsx";
import { keyframes as keyframes2 } from "@mui/system";

// node_modules/@mui/material/ButtonBase/Ripple.js
import * as React6 from "react";
import PropTypes6 from "prop-types";
import clsx5 from "clsx";
import { jsx as _jsx5 } from "react/jsx-runtime";
function Ripple(props) {
  let {
    className,
    classes,
    pulsate = !1,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props, [leaving, setLeaving] = React6.useState(!1), rippleClassName = clsx5(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate), rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  }, childClassName = clsx5(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  return !inProp && !leaving && setLeaving(!0), React6.useEffect(() => {
    if (!inProp && onExited != null) {
      let timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [onExited, inProp, timeout]), /* @__PURE__ */ _jsx5("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ _jsx5("span", {
      className: childClassName
    })
  });
}
Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes6.object.isRequired,
  className: PropTypes6.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: PropTypes6.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: PropTypes6.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: PropTypes6.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: PropTypes6.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: PropTypes6.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: PropTypes6.number,
  /**
   * exit delay
   */
  timeout: PropTypes6.number.isRequired
};
var Ripple_default = Ripple;

// node_modules/@mui/material/ButtonBase/touchRippleClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses6 } from "@mui/utils";
var touchRippleClasses = generateUtilityClasses6("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), touchRippleClasses_default = touchRippleClasses;

// node_modules/@mui/material/ButtonBase/TouchRipple.js
import { jsx as _jsx6 } from "react/jsx-runtime";
var _excluded9 = ["center", "classes", "className"], _ = (t) => t, _t, _t2, _t3, _t4, DURATION = 550, DELAY_RIPPLE = 80, enterKeyframe = keyframes2(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), exitKeyframe = keyframes2(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), pulsateKeyframe = keyframes2(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), TouchRippleRoot = styled_default("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), TouchRippleRipple = styled_default(Ripple_default, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses_default.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses_default.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses_default.child, touchRippleClasses_default.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses_default.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut), TouchRipple = /* @__PURE__ */ React7.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTouchRipple"
  }), {
    center: centerProp = !1,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose9(props, _excluded9), [ripples, setRipples] = React7.useState([]), nextKey = React7.useRef(0), rippleCallback = React7.useRef(null);
  React7.useEffect(() => {
    rippleCallback.current && (rippleCallback.current(), rippleCallback.current = null);
  }, [ripples]);
  let ignoringMouseDown = React7.useRef(!1), startTimer = React7.useRef(0), startTimerCommit = React7.useRef(null), container = React7.useRef(null);
  React7.useEffect(() => () => {
    startTimer.current && clearTimeout(startTimer.current);
  }, []);
  let startCommit = React7.useCallback((params) => {
    let {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ _jsx6(TouchRippleRipple, {
      classes: {
        ripple: clsx6(classes.ripple, touchRippleClasses_default.ripple),
        rippleVisible: clsx6(classes.rippleVisible, touchRippleClasses_default.rippleVisible),
        ripplePulsate: clsx6(classes.ripplePulsate, touchRippleClasses_default.ripplePulsate),
        child: clsx6(classes.child, touchRippleClasses_default.child),
        childLeaving: clsx6(classes.childLeaving, touchRippleClasses_default.childLeaving),
        childPulsate: clsx6(classes.childPulsate, touchRippleClasses_default.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]), nextKey.current += 1, rippleCallback.current = cb;
  }, [classes]), start = React7.useCallback((event = {}, options = {}, cb = () => {
  }) => {
    let {
      pulsate: pulsate2 = !1,
      center = centerProp || options.pulsate,
      fakeElement = !1
      // For test purposes
    } = options;
    if (event?.type === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = !1;
      return;
    }
    event?.type === "touchstart" && (ignoringMouseDown.current = !0);
    let element = fakeElement ? null : container.current, rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }, rippleX, rippleY, rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches)
      rippleX = Math.round(rect.width / 2), rippleY = Math.round(rect.height / 2);
    else {
      let {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left), rippleY = Math.round(clientY - rect.top);
    }
    if (center)
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3), rippleSize % 2 === 0 && (rippleSize += 1);
    else {
      let sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2, sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    event != null && event.touches ? startTimerCommit.current === null && (startTimerCommit.current = () => {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }, startTimer.current = setTimeout(() => {
      startTimerCommit.current && (startTimerCommit.current(), startTimerCommit.current = null);
    }, DELAY_RIPPLE)) : startCommit({
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    });
  }, [centerProp, startCommit]), pulsate = React7.useCallback(() => {
    start({}, {
      pulsate: !0
    });
  }, [start]), stop = React7.useCallback((event, cb) => {
    if (clearTimeout(startTimer.current), event?.type === "touchend" && startTimerCommit.current) {
      startTimerCommit.current(), startTimerCommit.current = null, startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null, setRipples((oldRipples) => oldRipples.length > 0 ? oldRipples.slice(1) : oldRipples), rippleCallback.current = cb;
  }, []);
  return React7.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]), /* @__PURE__ */ _jsx6(TouchRippleRoot, _extends10({
    className: clsx6(touchRippleClasses_default.root, classes.root, className),
    ref: container
  }, other, {
    children: /* @__PURE__ */ _jsx6(TransitionGroup, {
      component: null,
      exit: !0,
      children: ripples
    })
  }));
});
TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: PropTypes7.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes7.object,
  /**
   * @ignore
   */
  className: PropTypes7.string
};
var TouchRipple_default = TouchRipple;

// node_modules/@mui/material/ButtonBase/buttonBaseClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses7 } from "@mui/utils";
function getButtonBaseUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiButtonBase", slot);
}
var buttonBaseClasses = generateUtilityClasses7("MuiButtonBase", ["root", "disabled", "focusVisible"]), buttonBaseClasses_default = buttonBaseClasses;

// node_modules/@mui/material/ButtonBase/ButtonBase.js
import { jsx as _jsx7 } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var _excluded10 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], useUtilityClasses5 = (ownerState) => {
  let {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState, composedClasses = unstable_composeClasses({
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  }, getButtonBaseUtilityClass, classes);
  return focusVisible && focusVisibleClassName && (composedClasses.root += ` ${focusVisibleClassName}`), composedClasses;
}, ButtonBaseRoot = styled_default("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses_default.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ButtonBase = /* @__PURE__ */ React8.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiButtonBase"
  }), {
    action: action12,
    centerRipple = !1,
    children,
    className,
    component = "button",
    disabled = !1,
    disableRipple = !1,
    disableTouchRipple = !1,
    focusRipple = !1,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type
  } = props, other = _objectWithoutPropertiesLoose10(props, _excluded10), buttonRef = React8.useRef(null), rippleRef = React8.useRef(null), handleRippleRef = useForkRef_default(rippleRef, touchRippleRef), {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible_default(), [focusVisible, setFocusVisible] = React8.useState(!1);
  disabled && focusVisible && setFocusVisible(!1), React8.useImperativeHandle(action12, () => ({
    focusVisible: () => {
      setFocusVisible(!0), buttonRef.current.focus();
    }
  }), []);
  let [mountedState, setMountedState] = React8.useState(!1);
  React8.useEffect(() => {
    setMountedState(!0);
  }, []);
  let enableTouchRipple = mountedState && !disableRipple && !disabled;
  React8.useEffect(() => {
    focusVisible && focusRipple && !disableRipple && mountedState && rippleRef.current.pulsate();
  }, [disableRipple, focusRipple, focusVisible, mountedState]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback_default((event) => (eventCallback && eventCallback(event), !skipRippleAction && rippleRef.current && rippleRef.current[rippleAction](event), !0));
  }
  let handleMouseDown = useRippleHandler("start", onMouseDown), handleContextMenu = useRippleHandler("stop", onContextMenu), handleDragLeave = useRippleHandler("stop", onDragLeave), handleMouseUp = useRippleHandler("stop", onMouseUp), handleMouseLeave = useRippleHandler("stop", (event) => {
    focusVisible && event.preventDefault(), onMouseLeave && onMouseLeave(event);
  }), handleTouchStart = useRippleHandler("start", onTouchStart), handleTouchEnd = useRippleHandler("stop", onTouchEnd), handleTouchMove = useRippleHandler("stop", onTouchMove), handleBlur = useRippleHandler("stop", (event) => {
    handleBlurVisible(event), isFocusVisibleRef.current === !1 && setFocusVisible(!1), onBlur && onBlur(event);
  }, !1), handleFocus = useEventCallback_default((event) => {
    buttonRef.current || (buttonRef.current = event.currentTarget), handleFocusVisible(event), isFocusVisibleRef.current === !0 && (setFocusVisible(!0), onFocusVisible && onFocusVisible(event)), onFocus && onFocus(event);
  }), isNonNativeButton = () => {
    let button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  }, keydownRef = React8.useRef(!1), handleKeyDown = useEventCallback_default((event) => {
    focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " " && (keydownRef.current = !0, rippleRef.current.stop(event, () => {
      rippleRef.current.start(event);
    })), event.target === event.currentTarget && isNonNativeButton() && event.key === " " && event.preventDefault(), onKeyDown && onKeyDown(event), event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled && (event.preventDefault(), onClick && onClick(event));
  }), handleKeyUp = useEventCallback_default((event) => {
    focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented && (keydownRef.current = !1, rippleRef.current.stop(event, () => {
      rippleRef.current.pulsate(event);
    })), onKeyUp && onKeyUp(event), onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented && onClick(event);
  }), ComponentProp = component;
  ComponentProp === "button" && (other.href || other.to) && (ComponentProp = LinkComponent);
  let buttonProps = {};
  ComponentProp === "button" ? (buttonProps.type = type === void 0 ? "button" : type, buttonProps.disabled = disabled) : (!other.href && !other.to && (buttonProps.role = "button"), disabled && (buttonProps["aria-disabled"] = disabled));
  let handleRef = useForkRef_default(ref, focusVisibleRef, buttonRef);
  React8.useEffect(() => {
    enableTouchRipple && !rippleRef.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [enableTouchRipple]);
  let ownerState = _extends11({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  }), classes = useUtilityClasses5(ownerState);
  return /* @__PURE__ */ _jsxs(ButtonBaseRoot, _extends11({
    as: ComponentProp,
    className: clsx7(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ _jsx7(TouchRipple_default, _extends11({
        ref: handleRippleRef,
        center: centerRipple
      }, TouchRippleProps))
    ) : null]
  }));
});
ButtonBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: refType,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: PropTypes8.bool,
  /**
   * The content of the component.
   */
  children: PropTypes8.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes8.object,
  /**
   * @ignore
   */
  className: PropTypes8.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes8.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes8.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: PropTypes8.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: PropTypes8.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes8.string,
  /**
   * @ignore
   */
  href: PropTypes8.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: PropTypes8.elementType,
  /**
   * @ignore
   */
  onBlur: PropTypes8.func,
  /**
   * @ignore
   */
  onClick: PropTypes8.func,
  /**
   * @ignore
   */
  onContextMenu: PropTypes8.func,
  /**
   * @ignore
   */
  onDragLeave: PropTypes8.func,
  /**
   * @ignore
   */
  onFocus: PropTypes8.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: PropTypes8.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes8.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes8.func,
  /**
   * @ignore
   */
  onMouseDown: PropTypes8.func,
  /**
   * @ignore
   */
  onMouseLeave: PropTypes8.func,
  /**
   * @ignore
   */
  onMouseUp: PropTypes8.func,
  /**
   * @ignore
   */
  onTouchEnd: PropTypes8.func,
  /**
   * @ignore
   */
  onTouchMove: PropTypes8.func,
  /**
   * @ignore
   */
  onTouchStart: PropTypes8.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes8.oneOfType([PropTypes8.arrayOf(PropTypes8.oneOfType([PropTypes8.func, PropTypes8.object, PropTypes8.bool])), PropTypes8.func, PropTypes8.object]),
  /**
   * @default 0
   */
  tabIndex: PropTypes8.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes8.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: PropTypes8.oneOfType([PropTypes8.func, PropTypes8.shape({
    current: PropTypes8.shape({
      pulsate: PropTypes8.func.isRequired,
      start: PropTypes8.func.isRequired,
      stop: PropTypes8.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: PropTypes8.oneOfType([PropTypes8.oneOf(["button", "reset", "submit"]), PropTypes8.string])
};
var ButtonBase_default = ButtonBase;

// node_modules/@mui/material/IconButton/iconButtonClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses8 } from "@mui/utils";
function getIconButtonUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiIconButton", slot);
}
var iconButtonClasses = generateUtilityClasses8("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), iconButtonClasses_default = iconButtonClasses;

// node_modules/@mui/material/IconButton/IconButton.js
import { jsx as _jsx8 } from "react/jsx-runtime";
var _excluded11 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], useUtilityClasses6 = (ownerState) => {
  let {
    classes,
    disabled,
    color,
    edge,
    size
  } = ownerState, slots = {
    root: ["root", disabled && "disabled", color !== "default" && `color${capitalize_default(color)}`, edge && `edge${capitalize_default(edge)}`, `size${capitalize_default(size)}`]
  };
  return unstable_composeClasses(slots, getIconButtonUtilityClass, classes);
}, IconButtonRoot = styled_default(ButtonBase_default, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.color !== "default" && styles4[`color${capitalize_default(ownerState.color)}`], ownerState.edge && styles4[`edge${capitalize_default(ownerState.edge)}`], styles4[`size${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends12({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  })
}, !ownerState.disableRipple && {
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha3(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, ownerState.edge === "start" && {
  marginLeft: ownerState.size === "small" ? -3 : -12
}, ownerState.edge === "end" && {
  marginRight: ownerState.size === "small" ? -3 : -12
}), ({
  theme,
  ownerState
}) => {
  var _palette;
  let palette = (_palette = (theme.vars || theme).palette) == null ? void 0 : _palette[ownerState.color];
  return _extends12({}, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && ownerState.color !== "default" && _extends12({
    color: palette?.main
  }, !ownerState.disableRipple && {
    "&:hover": _extends12({}, palette && {
      backgroundColor: theme.vars ? `rgba(${palette.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha3(palette.main, theme.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), ownerState.size === "small" && {
    padding: 5,
    fontSize: theme.typography.pxToRem(18)
  }, ownerState.size === "large" && {
    padding: 12,
    fontSize: theme.typography.pxToRem(28)
  }, {
    [`&.${iconButtonClasses_default.disabled}`]: {
      backgroundColor: "transparent",
      color: (theme.vars || theme).palette.action.disabled
    }
  });
}), IconButton = /* @__PURE__ */ React9.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiIconButton"
  }), {
    edge = !1,
    children,
    className,
    color = "default",
    disabled = !1,
    disableFocusRipple = !1,
    size = "medium"
  } = props, other = _objectWithoutPropertiesLoose11(props, _excluded11), ownerState = _extends12({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  }), classes = useUtilityClasses6(ownerState);
  return /* @__PURE__ */ _jsx8(IconButtonRoot, _extends12({
    className: clsx8(classes.root, className),
    centerRipple: !0,
    focusRipple: !disableFocusRipple,
    disabled,
    ref,
    ownerState
  }, other, {
    children
  }));
});
IconButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: chainPropTypes2(PropTypes9.node, (props) => React9.Children.toArray(props.children).some((child) => /* @__PURE__ */ React9.isValidElement(child) && child.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes9.object,
  /**
   * @ignore
   */
  className: PropTypes9.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: PropTypes9.oneOfType([PropTypes9.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), PropTypes9.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes9.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes9.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes9.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: PropTypes9.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes9.oneOfType([PropTypes9.oneOf(["small", "medium", "large"]), PropTypes9.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes9.oneOfType([PropTypes9.arrayOf(PropTypes9.oneOfType([PropTypes9.func, PropTypes9.object, PropTypes9.bool])), PropTypes9.func, PropTypes9.object])
};
var IconButton_default = IconButton;

// node_modules/@mui/material/Icon/Icon.js
import _extends13 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose12 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React10 from "react";
import PropTypes10 from "prop-types";
import clsx9 from "clsx";

// node_modules/@mui/material/Icon/iconClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses9 } from "@mui/utils";
function getIconUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiIcon", slot);
}
var iconClasses = generateUtilityClasses9("MuiIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/Icon/Icon.js
import { jsx as _jsx9 } from "react/jsx-runtime";
var _excluded12 = ["baseClassName", "className", "color", "component", "fontSize"], useUtilityClasses7 = (ownerState) => {
  let {
    color,
    fontSize,
    classes
  } = ownerState, slots = {
    root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return unstable_composeClasses(slots, getIconUtilityClass, classes);
}, IconRoot = styled_default("span", {
  name: "MuiIcon",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.color !== "inherit" && styles4[`color${capitalize_default(ownerState.color)}`], styles4[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
  // To remove at some point.
  overflow: "hidden",
  display: "inline-block",
  // allow overflow hidden to take action
  textAlign: "center",
  // support non-square icon
  flexShrink: 0,
  fontSize: {
    inherit: "inherit",
    small: theme.typography.pxToRem(20),
    medium: theme.typography.pxToRem(24),
    large: theme.typography.pxToRem(36)
  }[ownerState.fontSize],
  // TODO v5 deprecate, v6 remove for sx
  color: {
    primary: (theme.vars || theme).palette.primary.main,
    secondary: (theme.vars || theme).palette.secondary.main,
    info: (theme.vars || theme).palette.info.main,
    success: (theme.vars || theme).palette.success.main,
    warning: (theme.vars || theme).palette.warning.main,
    action: (theme.vars || theme).palette.action.active,
    error: (theme.vars || theme).palette.error.main,
    disabled: (theme.vars || theme).palette.action.disabled,
    inherit: void 0
  }[ownerState.color]
})), Icon = /* @__PURE__ */ React10.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiIcon"
  }), {
    baseClassName = "material-icons",
    className,
    color = "inherit",
    component: Component = "span",
    fontSize = "medium"
  } = props, other = _objectWithoutPropertiesLoose12(props, _excluded12), ownerState = _extends13({}, props, {
    baseClassName,
    color,
    component: Component,
    fontSize
  }), classes = useUtilityClasses7(ownerState);
  return /* @__PURE__ */ _jsx9(IconRoot, _extends13({
    as: Component,
    className: clsx9(
      baseClassName,
      // Prevent the translation of the text content.
      // The font relies on the exact text content to render the icon.
      "notranslate",
      classes.root,
      className
    ),
    ownerState,
    "aria-hidden": !0,
    ref
  }, other));
});
Icon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The base class applied to the icon. Defaults to 'material-icons', but can be changed to any
   * other base class that suits the icon font you're using (e.g. material-icons-rounded, fas, etc).
   * @default 'material-icons'
   */
  baseClassName: PropTypes10.string,
  /**
   * The name of the icon font ligature.
   */
  children: PropTypes10.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes10.object,
  /**
   * @ignore
   */
  className: PropTypes10.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'inherit'
   */
  color: PropTypes10.oneOfType([PropTypes10.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), PropTypes10.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes10.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: PropTypes10.oneOfType([PropTypes10.oneOf(["inherit", "large", "medium", "small"]), PropTypes10.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes10.oneOfType([PropTypes10.arrayOf(PropTypes10.oneOfType([PropTypes10.func, PropTypes10.object, PropTypes10.bool])), PropTypes10.func, PropTypes10.object])
};
Icon.muiName = "Icon";
var Icon_default = Icon;

// node_modules/@mui/material/Drawer/Drawer.js
import _objectWithoutPropertiesLoose19 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends24 from "@babel/runtime/helpers/esm/extends";
import * as React21 from "react";
import PropTypes18 from "prop-types";
import clsx14 from "clsx";
import { integerPropType as integerPropType2 } from "@mui/utils";

// node_modules/@mui/base/unstable_useModal/useModal.js
import _extends17 from "@babel/runtime/helpers/esm/extends";
import * as React12 from "react";
import { unstable_ownerDocument as ownerDocument2, unstable_useForkRef as useForkRef3, unstable_useEventCallback as useEventCallback2, unstable_createChainedFunction as createChainedFunction } from "@mui/utils";

// node_modules/@mui/base/utils/appendOwnerState.js
import _extends14 from "@babel/runtime/helpers/esm/extends";

// node_modules/@mui/base/utils/isHostComponent.js
function isHostComponent(element) {
  return typeof element == "string";
}

// node_modules/@mui/base/utils/appendOwnerState.js
function appendOwnerState(elementType, otherProps, ownerState) {
  return elementType === void 0 || isHostComponent(elementType) ? otherProps : _extends14({}, otherProps, {
    ownerState: _extends14({}, otherProps.ownerState, ownerState)
  });
}

// node_modules/@mui/base/utils/ClassNameConfigurator.js
import * as React11 from "react";
import { jsx as _jsx10 } from "react/jsx-runtime";
var defaultContextValue = {
  disableDefaultClasses: !1
}, ClassNameConfiguratorContext = /* @__PURE__ */ React11.createContext(defaultContextValue);
function useClassNamesOverride(generateUtilityClass2) {
  let {
    disableDefaultClasses
  } = React11.useContext(ClassNameConfiguratorContext);
  return (slot) => disableDefaultClasses ? "" : generateUtilityClass2(slot);
}

// node_modules/@mui/base/utils/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0)
    return {};
  let result = {};
  return Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] == "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  }), result;
}

// node_modules/@mui/base/utils/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState, slotState) {
  return typeof componentProps == "function" ? componentProps(ownerState, slotState) : componentProps;
}

// node_modules/@mui/base/utils/useSlotProps.js
import _extends16 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose13 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import { unstable_useForkRef as useForkRef2 } from "@mui/utils";

// node_modules/@mui/base/utils/mergeSlotProps.js
import _extends15 from "@babel/runtime/helpers/esm/extends";
import clsx10 from "clsx";

// node_modules/@mui/base/utils/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0)
    return {};
  let result = {};
  return Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] == "function")).forEach((prop) => {
    result[prop] = object[prop];
  }), result;
}

// node_modules/@mui/base/utils/mergeSlotProps.js
function mergeSlotProps(parameters) {
  let {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    let joinedClasses2 = clsx10(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className), mergedStyle2 = _extends15({}, additionalProps?.style, externalForwardedProps?.style, externalSlotProps?.style), props2 = _extends15({}, additionalProps, externalForwardedProps, externalSlotProps);
    return joinedClasses2.length > 0 && (props2.className = joinedClasses2), Object.keys(mergedStyle2).length > 0 && (props2.style = mergedStyle2), {
      props: props2,
      internalRef: void 0
    };
  }
  let eventHandlers = extractEventHandlers(_extends15({}, externalForwardedProps, externalSlotProps)), componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps), otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps), internalSlotProps = getSlotProps(eventHandlers), joinedClasses = clsx10(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className), mergedStyle = _extends15({}, internalSlotProps?.style, additionalProps?.style, externalForwardedProps?.style, externalSlotProps?.style), props = _extends15({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  return joinedClasses.length > 0 && (props.className = joinedClasses), Object.keys(mergedStyle).length > 0 && (props.style = mergedStyle), {
    props,
    internalRef: internalSlotProps.ref
  };
}

// node_modules/@mui/base/utils/useSlotProps.js
var _excluded13 = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  let {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = !1
  } = parameters, rest = _objectWithoutPropertiesLoose13(parameters, _excluded13), resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState), {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends16({}, rest, {
    externalSlotProps: resolvedComponentsProps
  })), ref = useForkRef2(internalRef, resolvedComponentsProps?.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  return appendOwnerState(elementType, _extends16({}, mergedProps, {
    ref
  }), ownerState);
}

// node_modules/@mui/base/unstable_useModal/ModalManager.js
import { unstable_ownerWindow as ownerWindow, unstable_ownerDocument as ownerDocument, unstable_getScrollbarSize as getScrollbarSize } from "@mui/utils";
function isOverflowing(container) {
  let doc = ownerDocument(container);
  return doc.body === container ? ownerWindow(container).innerWidth > doc.documentElement.clientWidth : container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  show ? element.setAttribute("aria-hidden", "true") : element.removeAttribute("aria-hidden");
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  let isForbiddenTagName = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(element.tagName) !== -1, isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  let blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    let isNotExcludedElement = blacklist.indexOf(element) === -1, isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    isNotExcludedElement && isNotForbiddenElement && ariaHidden(element, show);
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  return items.some((item, index6) => callback(item) ? (idx = index6, !0) : !1), idx;
}
function handleContainer(containerInfo, props) {
  let restoreStyle = [], container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      let scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      }), container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
      let fixedElements = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        }), element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment)
      scrollContainer = ownerDocument(container).body;
    else {
      let parent = container.parentElement, containerWindow = ownerWindow(container);
      scrollContainer = parent?.nodeName === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    }), scrollContainer.style.overflow = "hidden";
  }
  return () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      value ? el.style.setProperty(property, value) : el.style.removeProperty(property);
    });
  };
}
function getHiddenSiblings(container) {
  let hiddenSiblings = [];
  return [].forEach.call(container.children, (element) => {
    element.getAttribute("aria-hidden") === "true" && hiddenSiblings.push(element);
  }), hiddenSiblings;
}
var ModalManager = class {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1)
      return modalIndex;
    modalIndex = this.modals.length, this.modals.push(modal), modal.modalRef && ariaHidden(modal.modalRef, !1);
    let hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, !0);
    let containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    return containerIndex !== -1 ? (this.containers[containerIndex].modals.push(modal), modalIndex) : (this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    }), modalIndex);
  }
  mount(modal, props) {
    let containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1), containerInfo = this.containers[containerIndex];
    containerInfo.restore || (containerInfo.restore = handleContainer(containerInfo, props));
  }
  remove(modal, ariaHiddenState = !0) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1)
      return modalIndex;
    let containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1), containerInfo = this.containers[containerIndex];
    if (containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1), this.modals.splice(modalIndex, 1), containerInfo.modals.length === 0)
      containerInfo.restore && containerInfo.restore(), modal.modalRef && ariaHidden(modal.modalRef, ariaHiddenState), ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, !1), this.containers.splice(containerIndex, 1);
    else {
      let nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      nextTop.modalRef && ariaHidden(nextTop.modalRef, !1);
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
};

// node_modules/@mui/base/unstable_useModal/useModal.js
function getContainer(container) {
  return typeof container == "function" ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty("in") : !1;
}
var defaultManager = new ModalManager();
function useModal(parameters) {
  let {
    container,
    disableEscapeKeyDown = !1,
    disableScrollLock = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager = defaultManager,
    closeAfterTransition = !1,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef
  } = parameters, modal = React12.useRef({}), mountNodeRef = React12.useRef(null), modalRef = React12.useRef(null), handleRef = useForkRef3(modalRef, rootRef), [exited, setExited] = React12.useState(!open), hasTransition = getHasTransition(children), ariaHiddenProp = !0;
  (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === !1) && (ariaHiddenProp = !1);
  let getDoc = () => ownerDocument2(mountNodeRef.current), getModal = () => (modal.current.modalRef = modalRef.current, modal.current.mount = mountNodeRef.current, modal.current), handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    }), modalRef.current && (modalRef.current.scrollTop = 0);
  }, handleOpen = useEventCallback2(() => {
    let resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer), modalRef.current && handleMounted();
  }), isTopModal = React12.useCallback(() => manager.isTopModal(getModal()), [manager]), handlePortalRef = useEventCallback2((node) => {
    mountNodeRef.current = node, node && (open && isTopModal() ? handleMounted() : modalRef.current && ariaHidden(modalRef.current, ariaHiddenProp));
  }), handleClose = React12.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp, manager]);
  React12.useEffect(() => () => {
    handleClose();
  }, [handleClose]), React12.useEffect(() => {
    open ? handleOpen() : (!hasTransition || !closeAfterTransition) && handleClose();
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  let createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event), !(event.key !== "Escape" || event.which === 229 || // Wait until IME is settled.
    !isTopModal()) && (disableEscapeKeyDown || (event.stopPropagation(), onClose && onClose(event, "escapeKeyDown")));
  }, createHandleBackdropClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event), event.target === event.currentTarget && onClose && onClose(event, "backdropClick");
  };
  return {
    getRootProps: (otherHandlers = {}) => {
      let propsEventHandlers = extractEventHandlers(parameters);
      delete propsEventHandlers.onTransitionEnter, delete propsEventHandlers.onTransitionExited;
      let externalEventHandlers = _extends17({}, propsEventHandlers, otherHandlers);
      return _extends17({
        role: "presentation"
      }, externalEventHandlers, {
        onKeyDown: createHandleKeyDown(externalEventHandlers),
        ref: handleRef
      });
    },
    getBackdropProps: (otherHandlers = {}) => {
      let externalEventHandlers = otherHandlers;
      return _extends17({
        "aria-hidden": !0
      }, externalEventHandlers, {
        onClick: createHandleBackdropClick(externalEventHandlers),
        open
      });
    },
    getTransitionProps: () => {
      let handleEnter = () => {
        setExited(!1), onTransitionEnter && onTransitionEnter();
      }, handleExited = () => {
        setExited(!0), onTransitionExited && onTransitionExited(), closeAfterTransition && handleClose();
      };
      return {
        onEnter: createChainedFunction(handleEnter, children?.props.onEnter),
        onExited: createChainedFunction(handleExited, children?.props.onExited)
      };
    },
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}

// node_modules/@mui/material/Modal/Modal.js
import _objectWithoutPropertiesLoose16 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends20 from "@babel/runtime/helpers/esm/extends";
import * as React17 from "react";
import PropTypes15 from "prop-types";
import clsx12 from "clsx";
import { elementAcceptingRef as elementAcceptingRef3, HTMLElementType as HTMLElementType2 } from "@mui/utils";
import { useSlotProps as useSlotProps2 } from "@mui/base";

// node_modules/@mui/base/FocusTrap/FocusTrap.js
import * as React13 from "react";
import PropTypes11 from "prop-types";
import { exactProp, elementAcceptingRef, unstable_useForkRef as useForkRef4, unstable_ownerDocument as ownerDocument3 } from "@mui/utils";
import { jsx as _jsx11 } from "react/jsx-runtime";
import { jsxs as _jsxs2 } from "react/jsx-runtime";
var candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node) {
  let tabindexAttr = parseInt(node.getAttribute("tabindex") || "", 10);
  return Number.isNaN(tabindexAttr) ? node.contentEditable === "true" || (node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null ? 0 : node.tabIndex : tabindexAttr;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== "INPUT" || node.type !== "radio" || !node.name)
    return !1;
  let getRadio = (selector) => node.ownerDocument.querySelector(`input[type="radio"]${selector}`), roving = getRadio(`[name="${node.name}"]:checked`);
  return roving || (roving = getRadio(`[name="${node.name}"]`)), roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  return !(node.disabled || node.tagName === "INPUT" && node.type === "hidden" || isNonTabbableRadio(node));
}
function defaultGetTabbable(root) {
  let regularTabNodes = [], orderedTabNodes = [];
  return Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    let nodeTabIndex = getTabIndex(node);
    nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node) || (nodeTabIndex === 0 ? regularTabNodes.push(node) : orderedTabNodes.push({
      documentOrder: i,
      tabIndex: nodeTabIndex,
      node
    }));
  }), orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return !0;
}
function FocusTrap(props) {
  let {
    children,
    disableAutoFocus = !1,
    disableEnforceFocus = !1,
    disableRestoreFocus = !1,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props, ignoreNextEnforceFocus = React13.useRef(!1), sentinelStart = React13.useRef(null), sentinelEnd = React13.useRef(null), nodeToRestore = React13.useRef(null), reactFocusEventTarget = React13.useRef(null), activated = React13.useRef(!1), rootRef = React13.useRef(null), handleRef = useForkRef4(children.ref, rootRef), lastKeydown = React13.useRef(null);
  React13.useEffect(() => {
    !open || !rootRef.current || (activated.current = !disableAutoFocus);
  }, [disableAutoFocus, open]), React13.useEffect(() => {
    if (!open || !rootRef.current)
      return;
    let doc = ownerDocument3(rootRef.current);
    return rootRef.current.contains(doc.activeElement) || (rootRef.current.hasAttribute("tabIndex") || (console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), rootRef.current.setAttribute("tabIndex", "-1")), activated.current && rootRef.current.focus()), () => {
      disableRestoreFocus || (nodeToRestore.current && nodeToRestore.current.focus && (ignoreNextEnforceFocus.current = !0, nodeToRestore.current.focus()), nodeToRestore.current = null);
    };
  }, [open]), React13.useEffect(() => {
    if (!open || !rootRef.current)
      return;
    let doc = ownerDocument3(rootRef.current), loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent, !(disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") && doc.activeElement === rootRef.current && nativeEvent.shiftKey && (ignoreNextEnforceFocus.current = !0, sentinelEnd.current && sentinelEnd.current.focus());
    }, contain = () => {
      let rootElement = rootRef.current;
      if (rootElement === null)
        return;
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = !1;
        return;
      }
      if (rootElement.contains(doc.activeElement) || disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current)
        return;
      if (doc.activeElement !== reactFocusEventTarget.current)
        reactFocusEventTarget.current = null;
      else if (reactFocusEventTarget.current !== null)
        return;
      if (!activated.current)
        return;
      let tabbable = [];
      if ((doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) && (tabbable = getTabbable(rootRef.current)), tabbable.length > 0) {
        var _lastKeydown$current, _lastKeydown$current2;
        let isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === "Tab"), focusNext = tabbable[0], focusPrevious = tabbable[tabbable.length - 1];
        typeof focusNext != "string" && typeof focusPrevious != "string" && (isShiftTab ? focusPrevious.focus() : focusNext.focus());
      } else
        rootElement.focus();
    };
    doc.addEventListener("focusin", contain), doc.addEventListener("keydown", loopFocus, !0);
    let interval = setInterval(() => {
      doc.activeElement && doc.activeElement.tagName === "BODY" && contain();
    }, 50);
    return () => {
      clearInterval(interval), doc.removeEventListener("focusin", contain), doc.removeEventListener("keydown", loopFocus, !0);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  let onFocus = (event) => {
    nodeToRestore.current === null && (nodeToRestore.current = event.relatedTarget), activated.current = !0, reactFocusEventTarget.current = event.target;
    let childrenPropsHandler = children.props.onFocus;
    childrenPropsHandler && childrenPropsHandler(event);
  }, handleFocusSentinel = (event) => {
    nodeToRestore.current === null && (nodeToRestore.current = event.relatedTarget), activated.current = !0;
  };
  return /* @__PURE__ */ _jsxs2(React13.Fragment, {
    children: [/* @__PURE__ */ _jsx11("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ React13.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /* @__PURE__ */ _jsx11("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
FocusTrap.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: elementAcceptingRef,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: PropTypes11.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: PropTypes11.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: PropTypes11.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: PropTypes11.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: PropTypes11.func,
  /**
   * If `true`, focus is locked.
   */
  open: PropTypes11.bool.isRequired
};
FocusTrap["propTypes"] = exactProp(FocusTrap.propTypes);

// node_modules/@mui/base/Portal/Portal.js
import * as React14 from "react";
import * as ReactDOM from "react-dom";
import PropTypes12 from "prop-types";
import { exactProp as exactProp2, HTMLElementType, unstable_useEnhancedEffect as useEnhancedEffect, unstable_useForkRef as useForkRef5, unstable_setRef as setRef } from "@mui/utils";
import { jsx as _jsx12 } from "react/jsx-runtime";
function getContainer2(container) {
  return typeof container == "function" ? container() : container;
}
var Portal = /* @__PURE__ */ React14.forwardRef(function(props, forwardedRef) {
  let {
    children,
    container,
    disablePortal = !1
  } = props, [mountNode, setMountNode] = React14.useState(null), handleRef = useForkRef5(/* @__PURE__ */ React14.isValidElement(children) ? children.ref : null, forwardedRef);
  return useEnhancedEffect(() => {
    disablePortal || setMountNode(getContainer2(container) || document.body);
  }, [container, disablePortal]), useEnhancedEffect(() => {
    if (mountNode && !disablePortal)
      return setRef(forwardedRef, mountNode), () => {
        setRef(forwardedRef, null);
      };
  }, [forwardedRef, mountNode, disablePortal]), disablePortal ? /* @__PURE__ */ React14.isValidElement(children) ? /* @__PURE__ */ React14.cloneElement(children, {
    ref: handleRef
  }) : /* @__PURE__ */ _jsx12(React14.Fragment, {
    children
  }) : /* @__PURE__ */ _jsx12(React14.Fragment, {
    children: mountNode && /* @__PURE__ */ ReactDOM.createPortal(children, mountNode)
  });
});
Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: PropTypes12.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes12.oneOfType([HTMLElementType, PropTypes12.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes12.bool
};
Portal["propTypes"] = exactProp2(Portal.propTypes);

// node_modules/@mui/material/Backdrop/Backdrop.js
import _objectWithoutPropertiesLoose15 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends19 from "@babel/runtime/helpers/esm/extends";
import * as React16 from "react";
import PropTypes14 from "prop-types";
import clsx11 from "clsx";

// node_modules/@mui/material/Fade/Fade.js
import _extends18 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose14 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React15 from "react";
import PropTypes13 from "prop-types";
import { Transition } from "react-transition-group";
import { elementAcceptingRef as elementAcceptingRef2 } from "@mui/utils";

// node_modules/@mui/material/transitions/utils.js
var reflow = (node) => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  let {
    timeout,
    easing: easing2,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout == "number" ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing2 == "object" ? easing2[options.mode] : easing2,
    delay: style.transitionDelay
  };
}

// node_modules/@mui/material/Fade/Fade.js
import { jsx as _jsx13 } from "react/jsx-runtime";
var _excluded14 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Fade = /* @__PURE__ */ React15.forwardRef(function(props, ref) {
  let theme = useTheme(), defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  }, {
    addEndListener,
    appear = !0,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition
  } = props, other = _objectWithoutPropertiesLoose14(props, _excluded14), enableStrictModeCompat = !0, nodeRef = React15.useRef(null), handleRef = useForkRef_default(nodeRef, children.ref, ref), normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      let node = nodeRef.current;
      maybeIsAppearing === void 0 ? callback(node) : callback(node, maybeIsAppearing);
    }
  }, handleEntering = normalizedTransitionCallback(onEntering), handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    let transitionProps = getTransitionProps({
      style,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps), node.style.transition = theme.transitions.create("opacity", transitionProps), onEnter && onEnter(node, isAppearing);
  }), handleEntered = normalizedTransitionCallback(onEntered), handleExiting = normalizedTransitionCallback(onExiting), handleExit = normalizedTransitionCallback((node) => {
    let transitionProps = getTransitionProps({
      style,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("opacity", transitionProps), node.style.transition = theme.transitions.create("opacity", transitionProps), onExit && onExit(node);
  }), handleExited = normalizedTransitionCallback(onExited);
  return /* @__PURE__ */ _jsx13(TransitionComponent, _extends18({
    appear,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : void 0,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: (next) => {
      addEndListener && addEndListener(nodeRef.current, next);
    },
    timeout
  }, other, {
    children: (state, childProps) => /* @__PURE__ */ React15.cloneElement(children, _extends18({
      style: _extends18({
        opacity: 0,
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps))
  }));
});
Fade.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes13.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes13.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef2.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: PropTypes13.oneOfType([PropTypes13.shape({
    enter: PropTypes13.string,
    exit: PropTypes13.string
  }), PropTypes13.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes13.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes13.func,
  /**
   * @ignore
   */
  onEntered: PropTypes13.func,
  /**
   * @ignore
   */
  onEntering: PropTypes13.func,
  /**
   * @ignore
   */
  onExit: PropTypes13.func,
  /**
   * @ignore
   */
  onExited: PropTypes13.func,
  /**
   * @ignore
   */
  onExiting: PropTypes13.func,
  /**
   * @ignore
   */
  style: PropTypes13.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: PropTypes13.oneOfType([PropTypes13.number, PropTypes13.shape({
    appear: PropTypes13.number,
    enter: PropTypes13.number,
    exit: PropTypes13.number
  })])
};
var Fade_default = Fade;

// node_modules/@mui/material/Backdrop/backdropClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses10 } from "@mui/utils";
function getBackdropUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiBackdrop", slot);
}
var backdropClasses = generateUtilityClasses10("MuiBackdrop", ["root", "invisible"]);

// node_modules/@mui/material/Backdrop/Backdrop.js
import { jsx as _jsx14 } from "react/jsx-runtime";
var _excluded15 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], useUtilityClasses8 = (ownerState) => {
  let {
    classes,
    invisible
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", invisible && "invisible"]
  }, getBackdropUtilityClass, classes);
}, BackdropRoot = styled_default("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.invisible && styles4.invisible];
  }
})(({
  ownerState
}) => _extends19({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, ownerState.invisible && {
  backgroundColor: "transparent"
})), Backdrop = /* @__PURE__ */ React16.forwardRef(function(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  let props = useThemeProps({
    props: inProps,
    name: "MuiBackdrop"
  }), {
    children,
    className,
    component = "div",
    components = {},
    componentsProps = {},
    invisible = !1,
    open,
    slotProps = {},
    slots = {},
    TransitionComponent = Fade_default,
    transitionDuration
  } = props, other = _objectWithoutPropertiesLoose15(props, _excluded15), ownerState = _extends19({}, props, {
    component,
    invisible
  }), classes = useUtilityClasses8(ownerState), rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return /* @__PURE__ */ _jsx14(TransitionComponent, _extends19({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /* @__PURE__ */ _jsx14(BackdropRoot, _extends19({
      "aria-hidden": !0
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: clsx11(classes.root, className, rootSlotProps?.className),
      ownerState: _extends19({}, ownerState, rootSlotProps?.ownerState),
      classes,
      ref,
      children
    }))
  }));
});
Backdrop.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes14.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes14.object,
  /**
   * @ignore
   */
  className: PropTypes14.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes14.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes14.shape({
    Root: PropTypes14.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: PropTypes14.shape({
    root: PropTypes14.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: PropTypes14.bool,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes14.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes14.shape({
    root: PropTypes14.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes14.shape({
    root: PropTypes14.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes14.oneOfType([PropTypes14.arrayOf(PropTypes14.oneOfType([PropTypes14.func, PropTypes14.object, PropTypes14.bool])), PropTypes14.func, PropTypes14.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: PropTypes14.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes14.oneOfType([PropTypes14.number, PropTypes14.shape({
    appear: PropTypes14.number,
    enter: PropTypes14.number,
    exit: PropTypes14.number
  })])
};
var Backdrop_default = Backdrop;

// node_modules/@mui/material/Modal/modalClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses11 } from "@mui/utils";
function getModalUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiModal", slot);
}
var modalClasses = generateUtilityClasses11("MuiModal", ["root", "hidden", "backdrop"]);

// node_modules/@mui/material/Modal/Modal.js
import { jsx as _jsx15 } from "react/jsx-runtime";
import { jsxs as _jsxs3 } from "react/jsx-runtime";
var _excluded16 = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], useUtilityClasses9 = (ownerState) => {
  let {
    open,
    exited,
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  }, getModalUtilityClass, classes);
}, ModalRoot = styled_default("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, !ownerState.open && ownerState.exited && styles4.hidden];
  }
})(({
  theme,
  ownerState
}) => _extends20({
  position: "fixed",
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: "hidden"
})), ModalBackdrop = styled_default(Backdrop_default, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles4) => styles4.backdrop
})({
  zIndex: -1
}), Modal = /* @__PURE__ */ React17.forwardRef(function(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
  let props = useThemeProps({
    name: "MuiModal",
    props: inProps
  }), {
    BackdropComponent = ModalBackdrop,
    BackdropProps,
    className,
    closeAfterTransition = !1,
    children,
    container,
    component,
    components = {},
    componentsProps = {},
    disableAutoFocus = !1,
    disableEnforceFocus = !1,
    disableEscapeKeyDown = !1,
    disablePortal = !1,
    disableRestoreFocus = !1,
    disableScrollLock = !1,
    hideBackdrop = !1,
    keepMounted = !1,
    onBackdropClick,
    open,
    slotProps,
    slots
    // eslint-disable-next-line react/prop-types
  } = props, other = _objectWithoutPropertiesLoose16(props, _excluded16), propsWithDefaults = _extends20({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  }), {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = useModal(_extends20({}, propsWithDefaults, {
    rootRef: ref
  })), ownerState = _extends20({}, propsWithDefaults, {
    exited
  }), classes = useUtilityClasses9(ownerState), childProps = {};
  if (children.props.tabIndex === void 0 && (childProps.tabIndex = "-1"), hasTransition) {
    let {
      onEnter,
      onExited
    } = getTransitionProps2();
    childProps.onEnter = onEnter, childProps.onExited = onExited;
  }
  let RootSlot = (_ref = (_slots$root = slots?.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot, BackdropSlot = (_ref2 = (_slots$backdrop = slots?.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent, rootSlotProps = (_slotProps$root = slotProps?.root) != null ? _slotProps$root : componentsProps.root, backdropSlotProps = (_slotProps$backdrop = slotProps?.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop, rootProps = useSlotProps2({
    elementType: RootSlot,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    additionalProps: {
      ref,
      as: component
    },
    ownerState,
    className: clsx12(className, rootSlotProps?.className, classes?.root, !ownerState.open && ownerState.exited && classes?.hidden)
  }), backdropProps = useSlotProps2({
    elementType: BackdropSlot,
    externalSlotProps: backdropSlotProps,
    additionalProps: BackdropProps,
    getSlotProps: (otherHandlers) => getBackdropProps(_extends20({}, otherHandlers, {
      onClick: (e) => {
        onBackdropClick && onBackdropClick(e), otherHandlers != null && otherHandlers.onClick && otherHandlers.onClick(e);
      }
    })),
    className: clsx12(backdropSlotProps?.className, BackdropProps?.className, classes?.backdrop),
    ownerState
  });
  return !keepMounted && !open && (!hasTransition || exited) ? null : /* @__PURE__ */ _jsx15(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: /* @__PURE__ */ _jsxs3(RootSlot, _extends20({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /* @__PURE__ */ _jsx15(BackdropSlot, _extends20({}, backdropProps)) : null, /* @__PURE__ */ _jsx15(FocusTrap, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: /* @__PURE__ */ React17.cloneElement(children, childProps)
      })]
    }))
  });
});
Modal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: PropTypes15.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: PropTypes15.object,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef3.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes15.object,
  /**
   * @ignore
   */
  className: PropTypes15.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: PropTypes15.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes15.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes15.shape({
    Backdrop: PropTypes15.elementType,
    Root: PropTypes15.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: PropTypes15.shape({
    backdrop: PropTypes15.oneOfType([PropTypes15.func, PropTypes15.object]),
    root: PropTypes15.oneOfType([PropTypes15.func, PropTypes15.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes15.oneOfType([HTMLElementType2, PropTypes15.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: PropTypes15.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: PropTypes15.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: PropTypes15.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes15.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: PropTypes15.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: PropTypes15.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: PropTypes15.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: PropTypes15.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: PropTypes15.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes15.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: PropTypes15.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: PropTypes15.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes15.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: PropTypes15.shape({
    backdrop: PropTypes15.oneOfType([PropTypes15.func, PropTypes15.object]),
    root: PropTypes15.oneOfType([PropTypes15.func, PropTypes15.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes15.shape({
    backdrop: PropTypes15.elementType,
    root: PropTypes15.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes15.oneOfType([PropTypes15.arrayOf(PropTypes15.oneOfType([PropTypes15.func, PropTypes15.object, PropTypes15.bool])), PropTypes15.func, PropTypes15.object])
};
var Modal_default = Modal;

// node_modules/@mui/material/Slide/Slide.js
import _extends23 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose18 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React20 from "react";
import PropTypes17 from "prop-types";
import { Transition as Transition2 } from "react-transition-group";
import { elementAcceptingRef as elementAcceptingRef4, HTMLElementType as HTMLElementType3, chainPropTypes as chainPropTypes3 } from "@mui/utils";

// node_modules/@mui/material/utils/debounce.js
import { unstable_debounce as debounce } from "@mui/utils";
var debounce_default = debounce;

// node_modules/@mui/material/utils/createSvgIcon.js
import _extends22 from "@babel/runtime/helpers/esm/extends";
import * as React19 from "react";

// node_modules/@mui/material/SvgIcon/SvgIcon.js
import _extends21 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose17 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React18 from "react";
import PropTypes16 from "prop-types";
import clsx13 from "clsx";

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses12 } from "@mui/utils";
function getSvgIconUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses12("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/SvgIcon/SvgIcon.js
import { jsx as _jsx16 } from "react/jsx-runtime";
import { jsxs as _jsxs4 } from "react/jsx-runtime";
var _excluded17 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], useUtilityClasses10 = (ownerState) => {
  let {
    color,
    fontSize,
    classes
  } = ownerState, slots = {
    root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return unstable_composeClasses(slots, getSvgIconUtilityClass, classes);
}, SvgIconRoot = styled_default("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.color !== "inherit" && styles4[`color${capitalize_default(ownerState.color)}`], styles4[`fontSize${capitalize_default(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
      inherit: void 0
    }[ownerState.color]
  };
}), SvgIcon = /* @__PURE__ */ React18.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiSvgIcon"
  }), {
    children,
    className,
    color = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = !1,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose17(props, _excluded17), hasSvgAsChild = /* @__PURE__ */ React18.isValidElement(children) && children.type === "svg", ownerState = _extends21({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  }), more = {};
  inheritViewBox || (more.viewBox = viewBox);
  let classes = useUtilityClasses10(ownerState);
  return /* @__PURE__ */ _jsxs4(SvgIconRoot, _extends21({
    as: component,
    className: clsx13(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : !0,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ _jsx16("title", {
      children: titleAccess
    }) : null]
  }));
});
SvgIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes16.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes16.object,
  /**
   * @ignore
   */
  className: PropTypes16.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: PropTypes16.oneOfType([PropTypes16.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), PropTypes16.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes16.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: PropTypes16.oneOfType([PropTypes16.oneOf(["inherit", "large", "medium", "small"]), PropTypes16.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes16.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: PropTypes16.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: PropTypes16.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes16.oneOfType([PropTypes16.arrayOf(PropTypes16.oneOfType([PropTypes16.func, PropTypes16.object, PropTypes16.bool])), PropTypes16.func, PropTypes16.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes16.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: PropTypes16.string
};
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// node_modules/@mui/material/utils/createSvgIcon.js
import { jsx as _jsx17 } from "react/jsx-runtime";
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /* @__PURE__ */ _jsx17(SvgIcon_default, _extends22({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  return Component.displayName = `${displayName}Icon`, Component.muiName = SvgIcon_default.muiName, /* @__PURE__ */ React19.memo(/* @__PURE__ */ React19.forwardRef(Component));
}

// node_modules/@mui/material/utils/isMuiElement.js
import { unstable_isMuiElement as isMuiElement } from "@mui/utils";
var isMuiElement_default = isMuiElement;

// node_modules/@mui/material/utils/ownerDocument.js
import { unstable_ownerDocument as ownerDocument4 } from "@mui/utils";
var ownerDocument_default = ownerDocument4;

// node_modules/@mui/material/utils/ownerWindow.js
import { unstable_ownerWindow as ownerWindow2 } from "@mui/utils";
var ownerWindow_default = ownerWindow2;

// node_modules/@mui/material/utils/requirePropFactory.js
import { unstable_requirePropFactory as requirePropFactory } from "@mui/utils";
var requirePropFactory_default = requirePropFactory;

// node_modules/@mui/material/utils/useEnhancedEffect.js
import { unstable_useEnhancedEffect as useEnhancedEffect2 } from "@mui/utils";
var useEnhancedEffect_default = useEnhancedEffect2;

// node_modules/@mui/material/utils/useId.js
import { unstable_useId as useId } from "@mui/utils";
var useId_default = useId;

// node_modules/@mui/material/utils/unsupportedProp.js
import { unstable_unsupportedProp as unsupportedProp } from "@mui/utils";
var unsupportedProp_default = unsupportedProp;

// node_modules/@mui/material/utils/useControlled.js
import { unstable_useControlled as useControlled } from "@mui/utils";
var useControlled_default = useControlled;

// node_modules/@mui/material/Slide/Slide.js
import { jsx as _jsx18 } from "react/jsx-runtime";
var _excluded18 = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getTranslateValue(direction, node, resolvedContainer) {
  let rect = node.getBoundingClientRect(), containerRect = resolvedContainer && resolvedContainer.getBoundingClientRect(), containerWindow = ownerWindow_default(node), transform;
  if (node.fakeTransform)
    transform = node.fakeTransform;
  else {
    let computedStyle = containerWindow.getComputedStyle(node);
    transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
  }
  let offsetX = 0, offsetY = 0;
  if (transform && transform !== "none" && typeof transform == "string") {
    let transformValues = transform.split("(")[1].split(")")[0].split(",");
    offsetX = parseInt(transformValues[4], 10), offsetY = parseInt(transformValues[5], 10);
  }
  return direction === "left" ? containerRect ? `translateX(${containerRect.right + offsetX - rect.left}px)` : `translateX(${containerWindow.innerWidth + offsetX - rect.left}px)` : direction === "right" ? containerRect ? `translateX(-${rect.right - containerRect.left - offsetX}px)` : `translateX(-${rect.left + rect.width - offsetX}px)` : direction === "up" ? containerRect ? `translateY(${containerRect.bottom + offsetY - rect.top}px)` : `translateY(${containerWindow.innerHeight + offsetY - rect.top}px)` : containerRect ? `translateY(-${rect.top - containerRect.top + rect.height - offsetY}px)` : `translateY(-${rect.top + rect.height - offsetY}px)`;
}
function resolveContainer(containerPropProp) {
  return typeof containerPropProp == "function" ? containerPropProp() : containerPropProp;
}
function setTranslateValue(direction, node, containerProp) {
  let resolvedContainer = resolveContainer(containerProp), transform = getTranslateValue(direction, node, resolvedContainer);
  transform && (node.style.webkitTransform = transform, node.style.transform = transform);
}
var Slide = /* @__PURE__ */ React20.forwardRef(function(props, ref) {
  let theme = useTheme(), defaultEasing = {
    enter: theme.transitions.easing.easeOut,
    exit: theme.transitions.easing.sharp
  }, defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  }, {
    addEndListener,
    appear = !0,
    children,
    container: containerProp,
    direction = "down",
    easing: easingProp = defaultEasing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition2
  } = props, other = _objectWithoutPropertiesLoose18(props, _excluded18), childrenRef = React20.useRef(null), handleRef = useForkRef_default(children.ref, childrenRef, ref), normalizedTransitionCallback = (callback) => (isAppearing) => {
    callback && (isAppearing === void 0 ? callback(childrenRef.current) : callback(childrenRef.current, isAppearing));
  }, handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    setTranslateValue(direction, node, containerProp), reflow(node), onEnter && onEnter(node, isAppearing);
  }), handleEntering = normalizedTransitionCallback((node, isAppearing) => {
    let transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", _extends23({}, transitionProps)), node.style.transition = theme.transitions.create("transform", _extends23({}, transitionProps)), node.style.webkitTransform = "none", node.style.transform = "none", onEntering && onEntering(node, isAppearing);
  }), handleEntered = normalizedTransitionCallback(onEntered), handleExiting = normalizedTransitionCallback(onExiting), handleExit = normalizedTransitionCallback((node) => {
    let transitionProps = getTransitionProps({
      timeout,
      style,
      easing: easingProp
    }, {
      mode: "exit"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", transitionProps), node.style.transition = theme.transitions.create("transform", transitionProps), setTranslateValue(direction, node, containerProp), onExit && onExit(node);
  }), handleExited = normalizedTransitionCallback((node) => {
    node.style.webkitTransition = "", node.style.transition = "", onExited && onExited(node);
  }), handleAddEndListener = (next) => {
    addEndListener && addEndListener(childrenRef.current, next);
  }, updatePosition = React20.useCallback(() => {
    childrenRef.current && setTranslateValue(direction, childrenRef.current, containerProp);
  }, [direction, containerProp]);
  return React20.useEffect(() => {
    if (inProp || direction === "down" || direction === "right")
      return;
    let handleResize = debounce_default(() => {
      childrenRef.current && setTranslateValue(direction, childrenRef.current, containerProp);
    }), containerWindow = ownerWindow_default(childrenRef.current);
    return containerWindow.addEventListener("resize", handleResize), () => {
      handleResize.clear(), containerWindow.removeEventListener("resize", handleResize);
    };
  }, [direction, inProp, containerProp]), React20.useEffect(() => {
    inProp || updatePosition();
  }, [inProp, updatePosition]), /* @__PURE__ */ _jsx18(TransitionComponent, _extends23({
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    appear,
    in: inProp,
    timeout
  }, other, {
    children: (state, childProps) => /* @__PURE__ */ React20.cloneElement(children, _extends23({
      ref: handleRef,
      style: _extends23({
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, style, children.props.style)
    }, childProps))
  }));
});
Slide.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes17.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes17.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef4.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: chainPropTypes3(PropTypes17.oneOfType([HTMLElementType3, PropTypes17.func]), (props) => {
    if (props.open) {
      let resolvedContainer = resolveContainer(props.container);
      if (resolvedContainer && resolvedContainer.nodeType === 1) {
        let box = resolvedContainer.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!resolvedContainer || typeof resolvedContainer.getBoundingClientRect != "function" || resolvedContainer.contextElement != null && resolvedContainer.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: PropTypes17.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: PropTypes17.oneOfType([PropTypes17.shape({
    enter: PropTypes17.string,
    exit: PropTypes17.string
  }), PropTypes17.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes17.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes17.func,
  /**
   * @ignore
   */
  onEntered: PropTypes17.func,
  /**
   * @ignore
   */
  onEntering: PropTypes17.func,
  /**
   * @ignore
   */
  onExit: PropTypes17.func,
  /**
   * @ignore
   */
  onExited: PropTypes17.func,
  /**
   * @ignore
   */
  onExiting: PropTypes17.func,
  /**
   * @ignore
   */
  style: PropTypes17.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: PropTypes17.oneOfType([PropTypes17.number, PropTypes17.shape({
    appear: PropTypes17.number,
    enter: PropTypes17.number,
    exit: PropTypes17.number
  })])
};
var Slide_default = Slide;

// node_modules/@mui/material/Drawer/drawerClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses13 } from "@mui/utils";
function getDrawerUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiDrawer", slot);
}
var drawerClasses = generateUtilityClasses13("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);

// node_modules/@mui/material/Drawer/Drawer.js
import { jsx as _jsx19 } from "react/jsx-runtime";
var _excluded19 = ["BackdropProps"], _excluded22 = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], overridesResolver = (props, styles4) => {
  let {
    ownerState
  } = props;
  return [styles4.root, (ownerState.variant === "permanent" || ownerState.variant === "persistent") && styles4.docked, styles4.modal];
}, useUtilityClasses11 = (ownerState) => {
  let {
    classes,
    anchor,
    variant
  } = ownerState, slots = {
    root: ["root"],
    docked: [(variant === "permanent" || variant === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${capitalize_default(anchor)}`, variant !== "temporary" && `paperAnchorDocked${capitalize_default(anchor)}`]
  };
  return unstable_composeClasses(slots, getDrawerUtilityClass, classes);
}, DrawerRoot = styled_default(Modal_default, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver
})(({
  theme
}) => ({
  zIndex: (theme.vars || theme).zIndex.drawer
})), DrawerDockedRoot = styled_default("div", {
  shouldForwardProp: rootShouldForwardProp,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver
})({
  flex: "0 0 auto"
}), DrawerPaper = styled_default(Paper_default, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.paper, styles4[`paperAnchor${capitalize_default(ownerState.anchor)}`], ownerState.variant !== "temporary" && styles4[`paperAnchorDocked${capitalize_default(ownerState.anchor)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends24({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (theme.vars || theme).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, ownerState.anchor === "left" && {
  left: 0
}, ownerState.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, ownerState.anchor === "right" && {
  right: 0
}, ownerState.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, ownerState.anchor === "left" && ownerState.variant !== "temporary" && {
  borderRight: `1px solid ${(theme.vars || theme).palette.divider}`
}, ownerState.anchor === "top" && ownerState.variant !== "temporary" && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
}, ownerState.anchor === "right" && ownerState.variant !== "temporary" && {
  borderLeft: `1px solid ${(theme.vars || theme).palette.divider}`
}, ownerState.anchor === "bottom" && ownerState.variant !== "temporary" && {
  borderTop: `1px solid ${(theme.vars || theme).palette.divider}`
})), oppositeDirection = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function isHorizontal(anchor) {
  return ["left", "right"].indexOf(anchor) !== -1;
}
function getAnchor(theme, anchor) {
  return theme.direction === "rtl" && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
var Drawer = /* @__PURE__ */ React21.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiDrawer"
  }), theme = useTheme(), defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  }, {
    anchor: anchorProp = "left",
    BackdropProps,
    children,
    className,
    elevation = 16,
    hideBackdrop = !1,
    ModalProps: {
      BackdropProps: BackdropPropsProp
    } = {},
    onClose,
    open = !1,
    PaperProps = {},
    SlideProps,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Slide_default,
    transitionDuration = defaultTransitionDuration,
    variant = "temporary"
  } = props, ModalProps = _objectWithoutPropertiesLoose19(props.ModalProps, _excluded19), other = _objectWithoutPropertiesLoose19(props, _excluded22), mounted = React21.useRef(!1);
  React21.useEffect(() => {
    mounted.current = !0;
  }, []);
  let anchorInvariant = getAnchor(theme, anchorProp), ownerState = _extends24({}, props, {
    anchor: anchorProp,
    elevation,
    open,
    variant
  }, other), classes = useUtilityClasses11(ownerState), drawer = /* @__PURE__ */ _jsx19(DrawerPaper, _extends24({
    elevation: variant === "temporary" ? elevation : 0,
    square: !0
  }, PaperProps, {
    className: clsx14(classes.paper, PaperProps.className),
    ownerState,
    children
  }));
  if (variant === "permanent")
    return /* @__PURE__ */ _jsx19(DrawerDockedRoot, _extends24({
      className: clsx14(classes.root, classes.docked, className),
      ownerState,
      ref
    }, other, {
      children: drawer
    }));
  let slidingDrawer = /* @__PURE__ */ _jsx19(TransitionComponent, _extends24({
    in: open,
    direction: oppositeDirection[anchorInvariant],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps, {
    children: drawer
  }));
  return variant === "persistent" ? /* @__PURE__ */ _jsx19(DrawerDockedRoot, _extends24({
    className: clsx14(classes.root, classes.docked, className),
    ownerState,
    ref
  }, other, {
    children: slidingDrawer
  })) : /* @__PURE__ */ _jsx19(DrawerRoot, _extends24({
    BackdropProps: _extends24({}, BackdropProps, BackdropPropsProp, {
      transitionDuration
    }),
    className: clsx14(classes.root, classes.modal, className),
    open,
    ownerState,
    onClose,
    hideBackdrop,
    ref
  }, other, ModalProps, {
    children: slidingDrawer
  }));
});
Drawer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: PropTypes18.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: PropTypes18.object,
  /**
   * The content of the component.
   */
  children: PropTypes18.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes18.object,
  /**
   * @ignore
   */
  className: PropTypes18.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: integerPropType2,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: PropTypes18.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: PropTypes18.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes18.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: PropTypes18.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: PropTypes18.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: PropTypes18.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes18.oneOfType([PropTypes18.arrayOf(PropTypes18.oneOfType([PropTypes18.func, PropTypes18.object, PropTypes18.bool])), PropTypes18.func, PropTypes18.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: PropTypes18.oneOfType([PropTypes18.number, PropTypes18.shape({
    appear: PropTypes18.number,
    enter: PropTypes18.number,
    exit: PropTypes18.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: PropTypes18.oneOf(["permanent", "persistent", "temporary"])
};
var Drawer_default = Drawer;

// node_modules/@mui/material/List/List.js
import _objectWithoutPropertiesLoose20 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends25 from "@babel/runtime/helpers/esm/extends";
import * as React23 from "react";
import PropTypes19 from "prop-types";
import clsx15 from "clsx";

// node_modules/@mui/material/List/ListContext.js
import * as React22 from "react";
var ListContext = /* @__PURE__ */ React22.createContext({});
ListContext.displayName = "ListContext";
var ListContext_default = ListContext;

// node_modules/@mui/material/List/listClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses14 } from "@mui/utils";
function getListUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiList", slot);
}
var listClasses = generateUtilityClasses14("MuiList", ["root", "padding", "dense", "subheader"]);

// node_modules/@mui/material/List/List.js
import { jsxs as _jsxs5 } from "react/jsx-runtime";
import { jsx as _jsx20 } from "react/jsx-runtime";
var _excluded20 = ["children", "className", "component", "dense", "disablePadding", "subheader"], useUtilityClasses12 = (ownerState) => {
  let {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
  }, getListUtilityClass, classes);
}, ListRoot = styled_default("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, !ownerState.disablePadding && styles4.padding, ownerState.dense && styles4.dense, ownerState.subheader && styles4.subheader];
  }
})(({
  ownerState
}) => _extends25({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
})), List = /* @__PURE__ */ React23.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiList"
  }), {
    children,
    className,
    component = "ul",
    dense = !1,
    disablePadding = !1,
    subheader
  } = props, other = _objectWithoutPropertiesLoose20(props, _excluded20), context = React23.useMemo(() => ({
    dense
  }), [dense]), ownerState = _extends25({}, props, {
    component,
    dense,
    disablePadding
  }), classes = useUtilityClasses12(ownerState);
  return /* @__PURE__ */ _jsx20(ListContext_default.Provider, {
    value: context,
    children: /* @__PURE__ */ _jsxs5(ListRoot, _extends25({
      as: component,
      className: clsx15(classes.root, className),
      ref,
      ownerState
    }, other, {
      children: [subheader, children]
    }))
  });
});
List.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes19.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes19.object,
  /**
   * @ignore
   */
  className: PropTypes19.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes19.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: PropTypes19.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: PropTypes19.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: PropTypes19.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes19.oneOfType([PropTypes19.arrayOf(PropTypes19.oneOfType([PropTypes19.func, PropTypes19.object, PropTypes19.bool])), PropTypes19.func, PropTypes19.object])
};
var List_default = List;

// node_modules/@mui/material/ListItem/ListItem.js
import _objectWithoutPropertiesLoose23 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends28 from "@babel/runtime/helpers/esm/extends";
import * as React26 from "react";
import PropTypes22 from "prop-types";
import clsx18 from "clsx";
import { unstable_composeClasses as composeClasses, isHostComponent as isHostComponent2 } from "@mui/base";
import { chainPropTypes as chainPropTypes4, elementTypeAcceptingRef as elementTypeAcceptingRef2 } from "@mui/utils";
import { alpha as alpha5 } from "@mui/system";

// node_modules/@mui/material/ListItem/listItemClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses15 } from "@mui/utils";
function getListItemUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItem", slot);
}
var listItemClasses = generateUtilityClasses15("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), listItemClasses_default = listItemClasses;

// node_modules/@mui/material/ListItemButton/ListItemButton.js
import _objectWithoutPropertiesLoose21 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends26 from "@babel/runtime/helpers/esm/extends";
import * as React24 from "react";
import PropTypes20 from "prop-types";
import clsx16 from "clsx";
import { alpha as alpha4 } from "@mui/system";

// node_modules/@mui/material/ListItemButton/listItemButtonClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses16 } from "@mui/utils";
function getListItemButtonUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItemButton", slot);
}
var listItemButtonClasses = generateUtilityClasses16("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), listItemButtonClasses_default = listItemButtonClasses;

// node_modules/@mui/material/ListItemButton/ListItemButton.js
import { jsx as _jsx21 } from "react/jsx-runtime";
var _excluded21 = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], overridesResolver2 = (props, styles4) => {
  let {
    ownerState
  } = props;
  return [styles4.root, ownerState.dense && styles4.dense, ownerState.alignItems === "flex-start" && styles4.alignItemsFlexStart, ownerState.divider && styles4.divider, !ownerState.disableGutters && styles4.gutters];
}, useUtilityClasses13 = (ownerState) => {
  let {
    alignItems,
    classes,
    dense,
    disabled,
    disableGutters,
    divider,
    selected
  } = ownerState, composedClasses = unstable_composeClasses({
    root: ["root", dense && "dense", !disableGutters && "gutters", divider && "divider", disabled && "disabled", alignItems === "flex-start" && "alignItemsFlexStart", selected && "selected"]
  }, getListItemButtonUtilityClass, classes);
  return _extends26({}, classes, composedClasses);
}, ListItemButtonRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: overridesResolver2
})(({
  theme,
  ownerState
}) => _extends26({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minWidth: 0,
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${listItemButtonClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha4(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${listItemButtonClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha4(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${listItemButtonClasses_default.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha4(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha4(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${listItemButtonClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${listItemButtonClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: "padding-box"
}, ownerState.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.dense && {
  paddingTop: 4,
  paddingBottom: 4
})), ListItemButton = /* @__PURE__ */ React24.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiListItemButton"
  }), {
    alignItems = "center",
    autoFocus = !1,
    component = "div",
    children,
    dense = !1,
    disableGutters = !1,
    divider = !1,
    focusVisibleClassName,
    selected = !1,
    className
  } = props, other = _objectWithoutPropertiesLoose21(props, _excluded21), context = React24.useContext(ListContext_default), childContext = React24.useMemo(() => ({
    dense: dense || context.dense || !1,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]), listItemRef = React24.useRef(null);
  useEnhancedEffect_default(() => {
    autoFocus && (listItemRef.current ? listItemRef.current.focus() : console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [autoFocus]);
  let ownerState = _extends26({}, props, {
    alignItems,
    dense: childContext.dense,
    disableGutters,
    divider,
    selected
  }), classes = useUtilityClasses13(ownerState), handleRef = useForkRef_default(listItemRef, ref);
  return /* @__PURE__ */ _jsx21(ListContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsx21(ListItemButtonRoot, _extends26({
      ref: handleRef,
      href: other.href || other.to,
      component: (other.href || other.to) && component === "div" ? "button" : component,
      focusVisibleClassName: clsx16(classes.focusVisible, focusVisibleClassName),
      ownerState,
      className: clsx16(classes.root, className)
    }, other, {
      classes,
      children
    }))
  });
});
ListItemButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: PropTypes20.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: PropTypes20.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: PropTypes20.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes20.object,
  /**
   * @ignore
   */
  className: PropTypes20.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes20.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: PropTypes20.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes20.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes20.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: PropTypes20.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes20.string,
  /**
   * @ignore
   */
  href: PropTypes20.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: PropTypes20.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes20.oneOfType([PropTypes20.arrayOf(PropTypes20.oneOfType([PropTypes20.func, PropTypes20.object, PropTypes20.bool])), PropTypes20.func, PropTypes20.object])
};
var ListItemButton_default = ListItemButton;

// node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js
import _objectWithoutPropertiesLoose22 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends27 from "@babel/runtime/helpers/esm/extends";
import * as React25 from "react";
import PropTypes21 from "prop-types";
import clsx17 from "clsx";

// node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses17 } from "@mui/utils";
function getListItemSecondaryActionClassesUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItemSecondaryAction", slot);
}
var listItemSecondaryActionClasses = generateUtilityClasses17("MuiListItemSecondaryAction", ["root", "disableGutters"]);

// node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js
import { jsx as _jsx22 } from "react/jsx-runtime";
var _excluded23 = ["className"], useUtilityClasses14 = (ownerState) => {
  let {
    disableGutters,
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", disableGutters && "disableGutters"]
  }, getListItemSecondaryActionClassesUtilityClass, classes);
}, ListItemSecondaryActionRoot = styled_default("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.disableGutters && styles4.disableGutters];
  }
})(({
  ownerState
}) => _extends27({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, ownerState.disableGutters && {
  right: 0
})), ListItemSecondaryAction = /* @__PURE__ */ React25.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiListItemSecondaryAction"
  }), {
    className
  } = props, other = _objectWithoutPropertiesLoose22(props, _excluded23), context = React25.useContext(ListContext_default), ownerState = _extends27({}, props, {
    disableGutters: context.disableGutters
  }), classes = useUtilityClasses14(ownerState);
  return /* @__PURE__ */ _jsx22(ListItemSecondaryActionRoot, _extends27({
    className: clsx17(classes.root, className),
    ownerState,
    ref
  }, other));
});
ListItemSecondaryAction.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: PropTypes21.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes21.object,
  /**
   * @ignore
   */
  className: PropTypes21.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes21.oneOfType([PropTypes21.arrayOf(PropTypes21.oneOfType([PropTypes21.func, PropTypes21.object, PropTypes21.bool])), PropTypes21.func, PropTypes21.object])
};
ListItemSecondaryAction.muiName = "ListItemSecondaryAction";
var ListItemSecondaryAction_default = ListItemSecondaryAction;

// node_modules/@mui/material/ListItem/ListItem.js
import { jsx as _jsx23 } from "react/jsx-runtime";
import { jsxs as _jsxs6 } from "react/jsx-runtime";
var _excluded24 = ["className"], _excluded25 = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], overridesResolver3 = (props, styles4) => {
  let {
    ownerState
  } = props;
  return [styles4.root, ownerState.dense && styles4.dense, ownerState.alignItems === "flex-start" && styles4.alignItemsFlexStart, ownerState.divider && styles4.divider, !ownerState.disableGutters && styles4.gutters, !ownerState.disablePadding && styles4.padding, ownerState.button && styles4.button, ownerState.hasSecondaryAction && styles4.secondaryAction];
}, useUtilityClasses15 = (ownerState) => {
  let {
    alignItems,
    button,
    classes,
    dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  } = ownerState;
  return composeClasses({
    root: ["root", dense && "dense", !disableGutters && "gutters", !disablePadding && "padding", divider && "divider", disabled && "disabled", button && "button", alignItems === "flex-start" && "alignItemsFlexStart", hasSecondaryAction && "secondaryAction", selected && "selected"],
    container: ["container"]
  }, getListItemUtilityClass, classes);
}, ListItemRoot = styled_default("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: overridesResolver3
})(({
  theme,
  ownerState
}) => _extends28({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !ownerState.disablePadding && _extends28({
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!ownerState.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!ownerState.secondaryAction && {
  [`& > .${listItemButtonClasses_default.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${listItemClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${listItemClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha5(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${listItemClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha5(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${listItemClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: "padding-box"
}, ownerState.button && {
  transition: theme.transitions.create("background-color", {
    duration: theme.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${listItemClasses_default.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha5(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha5(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  }
}, ownerState.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), ListItemContainer = styled_default("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (props, styles4) => styles4.container
})({
  position: "relative"
}), ListItem = /* @__PURE__ */ React26.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiListItem"
  }), {
    alignItems = "center",
    autoFocus = !1,
    button = !1,
    children: childrenProp,
    className,
    component: componentProp,
    components = {},
    componentsProps = {},
    ContainerComponent = "li",
    ContainerProps: {
      className: ContainerClassName
    } = {},
    dense = !1,
    disabled = !1,
    disableGutters = !1,
    disablePadding = !1,
    divider = !1,
    focusVisibleClassName,
    secondaryAction,
    selected = !1,
    slotProps = {},
    slots = {}
  } = props, ContainerProps = _objectWithoutPropertiesLoose23(props.ContainerProps, _excluded24), other = _objectWithoutPropertiesLoose23(props, _excluded25), context = React26.useContext(ListContext_default), childContext = React26.useMemo(() => ({
    dense: dense || context.dense || !1,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]), listItemRef = React26.useRef(null);
  useEnhancedEffect_default(() => {
    autoFocus && (listItemRef.current ? listItemRef.current.focus() : console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [autoFocus]);
  let children = React26.Children.toArray(childrenProp), hasSecondaryAction = children.length && isMuiElement_default(children[children.length - 1], ["ListItemSecondaryAction"]), ownerState = _extends28({}, props, {
    alignItems,
    autoFocus,
    button,
    dense: childContext.dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  }), classes = useUtilityClasses15(ownerState), handleRef = useForkRef_default(listItemRef, ref), Root = slots.root || components.Root || ListItemRoot, rootProps = slotProps.root || componentsProps.root || {}, componentProps = _extends28({
    className: clsx18(classes.root, rootProps.className, className),
    disabled
  }, other), Component = componentProp || "li";
  return button && (componentProps.component = componentProp || "div", componentProps.focusVisibleClassName = clsx18(listItemClasses_default.focusVisible, focusVisibleClassName), Component = ButtonBase_default), hasSecondaryAction ? (Component = !componentProps.component && !componentProp ? "div" : Component, ContainerComponent === "li" && (Component === "li" ? Component = "div" : componentProps.component === "li" && (componentProps.component = "div")), /* @__PURE__ */ _jsx23(ListContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsxs6(ListItemContainer, _extends28({
      as: ContainerComponent,
      className: clsx18(classes.container, ContainerClassName),
      ref: handleRef,
      ownerState
    }, ContainerProps, {
      children: [/* @__PURE__ */ _jsx23(Root, _extends28({}, rootProps, !isHostComponent2(Root) && {
        as: Component,
        ownerState: _extends28({}, ownerState, rootProps.ownerState)
      }, componentProps, {
        children
      })), children.pop()]
    }))
  })) : /* @__PURE__ */ _jsx23(ListContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsxs6(Root, _extends28({}, rootProps, {
      as: Component,
      ref: handleRef
    }, !isHostComponent2(Root) && {
      ownerState: _extends28({}, ownerState, rootProps.ownerState)
    }, componentProps, {
      children: [children, secondaryAction && /* @__PURE__ */ _jsx23(ListItemSecondaryAction_default, {
        children: secondaryAction
      })]
    }))
  });
});
ListItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: PropTypes22.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: PropTypes22.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: PropTypes22.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: chainPropTypes4(PropTypes22.node, (props) => {
    let children = React26.Children.toArray(props.children), secondaryActionIndex = -1;
    for (let i = children.length - 1; i >= 0; i -= 1) {
      let child = children[i];
      if (isMuiElement_default(child, ["ListItemSecondaryAction"])) {
        secondaryActionIndex = i;
        break;
      }
    }
    return secondaryActionIndex !== -1 && secondaryActionIndex !== children.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes22.object,
  /**
   * @ignore
   */
  className: PropTypes22.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes22.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes22.shape({
    Root: PropTypes22.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: PropTypes22.shape({
    root: PropTypes22.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: elementTypeAcceptingRef2,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: PropTypes22.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: PropTypes22.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: PropTypes22.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes22.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: PropTypes22.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: PropTypes22.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes22.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: PropTypes22.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: PropTypes22.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes22.shape({
    root: PropTypes22.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes22.shape({
    root: PropTypes22.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes22.oneOfType([PropTypes22.arrayOf(PropTypes22.oneOfType([PropTypes22.func, PropTypes22.object, PropTypes22.bool])), PropTypes22.func, PropTypes22.object])
};
var ListItem_default = ListItem;

// node_modules/@mui/material/ListItemIcon/ListItemIcon.js
import _objectWithoutPropertiesLoose24 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends29 from "@babel/runtime/helpers/esm/extends";
import * as React27 from "react";
import PropTypes23 from "prop-types";
import clsx19 from "clsx";

// node_modules/@mui/material/ListItemIcon/listItemIconClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses18 } from "@mui/utils";
function getListItemIconUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItemIcon", slot);
}
var listItemIconClasses = generateUtilityClasses18("MuiListItemIcon", ["root", "alignItemsFlexStart"]);

// node_modules/@mui/material/ListItemIcon/ListItemIcon.js
import { jsx as _jsx24 } from "react/jsx-runtime";
var _excluded26 = ["className"], useUtilityClasses16 = (ownerState) => {
  let {
    alignItems,
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", alignItems === "flex-start" && "alignItemsFlexStart"]
  }, getListItemIconUtilityClass, classes);
}, ListItemIconRoot = styled_default("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.alignItems === "flex-start" && styles4.alignItemsFlexStart];
  }
})(({
  theme,
  ownerState
}) => _extends29({
  minWidth: 56,
  color: (theme.vars || theme).palette.action.active,
  flexShrink: 0,
  display: "inline-flex"
}, ownerState.alignItems === "flex-start" && {
  marginTop: 8
})), ListItemIcon = /* @__PURE__ */ React27.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiListItemIcon"
  }), {
    className
  } = props, other = _objectWithoutPropertiesLoose24(props, _excluded26), context = React27.useContext(ListContext_default), ownerState = _extends29({}, props, {
    alignItems: context.alignItems
  }), classes = useUtilityClasses16(ownerState);
  return /* @__PURE__ */ _jsx24(ListItemIconRoot, _extends29({
    className: clsx19(classes.root, className),
    ownerState,
    ref
  }, other));
});
ListItemIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: PropTypes23.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes23.object,
  /**
   * @ignore
   */
  className: PropTypes23.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes23.oneOfType([PropTypes23.arrayOf(PropTypes23.oneOfType([PropTypes23.func, PropTypes23.object, PropTypes23.bool])), PropTypes23.func, PropTypes23.object])
};
var ListItemIcon_default = ListItemIcon;

// node_modules/@mui/material/ListItemText/ListItemText.js
import _objectWithoutPropertiesLoose25 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends30 from "@babel/runtime/helpers/esm/extends";
import * as React28 from "react";
import PropTypes24 from "prop-types";
import clsx20 from "clsx";

// node_modules/@mui/material/ListItemText/listItemTextClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses19 } from "@mui/utils";
function getListItemTextUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItemText", slot);
}
var listItemTextClasses = generateUtilityClasses19("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), listItemTextClasses_default = listItemTextClasses;

// node_modules/@mui/material/ListItemText/ListItemText.js
import { jsx as _jsx25 } from "react/jsx-runtime";
import { jsxs as _jsxs7 } from "react/jsx-runtime";
var _excluded27 = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], useUtilityClasses17 = (ownerState) => {
  let {
    classes,
    inset,
    primary,
    secondary,
    dense
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", inset && "inset", dense && "dense", primary && secondary && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, getListItemTextUtilityClass, classes);
}, ListItemTextRoot = styled_default("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [{
      [`& .${listItemTextClasses_default.primary}`]: styles4.primary
    }, {
      [`& .${listItemTextClasses_default.secondary}`]: styles4.secondary
    }, styles4.root, ownerState.inset && styles4.inset, ownerState.primary && ownerState.secondary && styles4.multiline, ownerState.dense && styles4.dense];
  }
})(({
  ownerState
}) => _extends30({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, ownerState.primary && ownerState.secondary && {
  marginTop: 6,
  marginBottom: 6
}, ownerState.inset && {
  paddingLeft: 56
})), ListItemText = /* @__PURE__ */ React28.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiListItemText"
  }), {
    children,
    className,
    disableTypography = !1,
    inset = !1,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps
  } = props, other = _objectWithoutPropertiesLoose25(props, _excluded27), {
    dense
  } = React28.useContext(ListContext_default), primary = primaryProp ?? children, secondary = secondaryProp, ownerState = _extends30({}, props, {
    disableTypography,
    inset,
    primary: !!primary,
    secondary: !!secondary,
    dense
  }), classes = useUtilityClasses17(ownerState);
  return primary != null && primary.type !== Typography_default && !disableTypography && (primary = /* @__PURE__ */ _jsx25(Typography_default, _extends30({
    variant: dense ? "body2" : "body1",
    className: classes.primary,
    component: primaryTypographyProps != null && primaryTypographyProps.variant ? void 0 : "span",
    display: "block"
  }, primaryTypographyProps, {
    children: primary
  }))), secondary != null && secondary.type !== Typography_default && !disableTypography && (secondary = /* @__PURE__ */ _jsx25(Typography_default, _extends30({
    variant: "body2",
    className: classes.secondary,
    color: "text.secondary",
    display: "block"
  }, secondaryTypographyProps, {
    children: secondary
  }))), /* @__PURE__ */ _jsxs7(ListItemTextRoot, _extends30({
    className: clsx20(classes.root, className),
    ownerState,
    ref
  }, other, {
    children: [primary, secondary]
  }));
});
ListItemText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Alias for the `primary` prop.
   */
  children: PropTypes24.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes24.object,
  /**
   * @ignore
   */
  className: PropTypes24.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: PropTypes24.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: PropTypes24.bool,
  /**
   * The main content element.
   */
  primary: PropTypes24.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: PropTypes24.object,
  /**
   * The secondary content element.
   */
  secondary: PropTypes24.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: PropTypes24.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes24.oneOfType([PropTypes24.arrayOf(PropTypes24.oneOfType([PropTypes24.func, PropTypes24.object, PropTypes24.bool])), PropTypes24.func, PropTypes24.object])
};
var ListItemText_default = ListItemText;

// app/layout/Appbar.tsx
import { NavLink, useLoaderData } from "@remix-run/react";

// app/sessions.ts
import { createCookieSessionStorage, redirect } from "@remix-run/node";
var { getSession, commitSession, destroySession } = createCookieSessionStorage(
  {
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: "_p_c_k",
      // all of these are optional
      // domain: "remix.run",
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      // expires: new Date(Date.now() + 60_000),
      // httpOnly: true,
      maxAge: 3600 * 24,
      // path: "/",
      // sameSite: "lax",
      secrets: ["Sjjasd888q18ejhasJAJasu@*8asdjjasjd"]
      // secure: false,
    }
  }
);
async function requireUserSession(request) {
  let cookie = request.headers.get("cookie"), session = await getSession(cookie);
  if (!session.has("userId") || !session.has("keySec"))
    throw session.flash("error", "Session time out, Please re-login"), redirect("/login", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  return session;
}
async function getCompanyID(request) {
  let cookie = request.headers.get("cookie"), session = await getSession(cookie), companyid = 0;
  return session.has("companyid") && (companyid = session.get("companyid")), companyid;
}

// app/layout/Appbar.tsx
import { json } from "@remix-run/node";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Appbar() {
  let data = useLoaderData(), [state, setState] = React29.useState({
    top: !1,
    left: !1,
    bottom: !1,
    right: !1
  }), urls = [
    "/",
    "sales",
    "order",
    "users",
    "logout"
  ], toggleDrawer = (anchor, open) => (event) => {
    event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") || setState({ ...state, [anchor]: open });
  }, menu = [
    "Dashboard",
    "Sales",
    "Order",
    "Users",
    "Logout"
  ], list = (anchor) => /* @__PURE__ */ jsxDEV2(
    Box_default,
    {
      sx: { width: anchor === "top" || anchor === "bottom" ? "auto" : 250 },
      role: "presentation",
      onClick: toggleDrawer(anchor, !1),
      onKeyDown: toggleDrawer(anchor, !1),
      children: [
        /* @__PURE__ */ jsxDEV2(List_default, { children: menu.map((text, index6) => /* @__PURE__ */ jsxDEV2(NavLink, { to: urls[index6], children: /* @__PURE__ */ jsxDEV2(ListItem_default, { disablePadding: !0, children: /* @__PURE__ */ jsxDEV2(ListItemButton_default, { children: [
          /* @__PURE__ */ jsxDEV2(ListItemIcon_default, { children: index6 % 2 === 0 ? /* @__PURE__ */ jsxDEV2(Icon_default, { children: "dashboard" }, void 0, !1, {
            fileName: "app/layout/Appbar.tsx",
            lineNumber: 99,
            columnNumber: 38
          }, this) : /* @__PURE__ */ jsxDEV2(Icon_default, { children: "star" }, void 0, !1, {
            fileName: "app/layout/Appbar.tsx",
            lineNumber: 99,
            columnNumber: 63
          }, this) }, void 0, !1, {
            fileName: "app/layout/Appbar.tsx",
            lineNumber: 98,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV2(ListItemText_default, { primary: text }, void 0, !1, {
            fileName: "app/layout/Appbar.tsx",
            lineNumber: 101,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this) }, text, !1, {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)) }, void 0, !1, {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 93,
          columnNumber: 7
        }, this),
        (data.error, data.error)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/layout/Appbar.tsx",
      lineNumber: 87,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ jsxDEV2(Box_default, { sx: { flexGrow: 1 }, children: [
    /* @__PURE__ */ jsxDEV2(AppBar_default, { color: "primary", position: "static", children: /* @__PURE__ */ jsxDEV2(Toolbar_default, { variant: "dense", children: [
      /* @__PURE__ */ jsxDEV2(
        IconButton_default,
        {
          onClick: toggleDrawer("left", !0),
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          sx: { mr: 2 },
          children: /* @__PURE__ */ jsxDEV2(Icon_default, { children: "menu" }, void 0, !1, {
            fileName: "app/layout/Appbar.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 115,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(Typography_default, { variant: "h6", color: "inherit", component: "div", children: "ECCS POS APPS" }, void 0, !1, {
        fileName: "app/layout/Appbar.tsx",
        lineNumber: 120,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layout/Appbar.tsx",
      lineNumber: 114,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/layout/Appbar.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV2(
      Drawer_default,
      {
        anchor: "left",
        open: state.left,
        onClose: toggleDrawer("left", !1),
        children: list("left")
      },
      void 0,
      !1,
      {
        fileName: "app/layout/Appbar.tsx",
        lineNumber: 126,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/layout/Appbar.tsx",
    lineNumber: 112,
    columnNumber: 9
  }, this);
}

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData as useLoaderData2,
  useLocation,
  useNavigation,
  useRevalidator,
  useRouteError
} from "@remix-run/react";

// node_modules/@mui/material/CssBaseline/CssBaseline.js
import _extends32 from "@babel/runtime/helpers/esm/extends";
import * as React31 from "react";
import PropTypes26 from "prop-types";

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
import _extends31 from "@babel/runtime/helpers/esm/extends";
import "react";
import PropTypes25 from "prop-types";
import { GlobalStyles as SystemGlobalStyles } from "@mui/system";
import { jsx as _jsx26 } from "react/jsx-runtime";
function GlobalStyles(props) {
  return /* @__PURE__ */ _jsx26(SystemGlobalStyles, _extends31({}, props, {
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  }));
}
GlobalStyles.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: PropTypes25.oneOfType([PropTypes25.array, PropTypes25.func, PropTypes25.number, PropTypes25.object, PropTypes25.string, PropTypes25.bool])
};
var GlobalStyles_default = GlobalStyles;

// node_modules/@mui/material/CssBaseline/CssBaseline.js
import { jsx as _jsx27 } from "react/jsx-runtime";
import { jsxs as _jsxs8 } from "react/jsx-runtime";
var html = (theme, enableColorScheme) => _extends32({
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
}), body = (theme) => _extends32({
  color: (theme.vars || theme).palette.text.primary
}, theme.typography.body1, {
  backgroundColor: (theme.vars || theme).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (theme.vars || theme).palette.common.white
  }
}), styles2 = (theme, enableColorScheme = !1) => {
  var _theme$components;
  let colorSchemeStyles = {};
  enableColorScheme && theme.colorSchemes && Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
    var _scheme$palette;
    colorSchemeStyles[theme.getColorSchemeSelector(key).replace(/\s*&/, "")] = {
      colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
    };
  });
  let defaultStyles = _extends32({
    html: html(theme, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme.typography.fontWeightBold
    },
    body: _extends32({
      margin: 0
    }, body(theme), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (theme.vars || theme).palette.background.default
      }
    })
  }, colorSchemeStyles), themeOverrides = (_theme$components = theme.components) == null || (_theme$components = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components.styleOverrides;
  return themeOverrides && (defaultStyles = [defaultStyles, themeOverrides]), defaultStyles;
};
function CssBaseline(inProps) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiCssBaseline"
  }), {
    children,
    enableColorScheme = !1
  } = props;
  return /* @__PURE__ */ _jsxs8(React31.Fragment, {
    children: [/* @__PURE__ */ _jsx27(GlobalStyles_default, {
      styles: (theme) => styles2(theme, enableColorScheme)
    }), children]
  });
}
CssBaseline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * You can wrap a node.
   */
  children: PropTypes26.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: PropTypes26.bool
};
var CssBaseline_default = CssBaseline;

// node_modules/@mui/material/Container/Container.js
import PropTypes27 from "prop-types";
import { createContainer } from "@mui/system";
var Container = createContainer({
  createStyledComponent: styled_default("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (props, styles4) => {
      let {
        ownerState
      } = props;
      return [styles4.root, styles4[`maxWidth${capitalize_default(String(ownerState.maxWidth))}`], ownerState.fixed && styles4.fixed, ownerState.disableGutters && styles4.disableGutters];
    }
  }),
  useThemeProps: (inProps) => useThemeProps({
    props: inProps,
    name: "MuiContainer"
  })
});
Container.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: PropTypes27.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes27.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes27.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes27.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: PropTypes27.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: PropTypes27.oneOfType([PropTypes27.oneOf(["xs", "sm", "md", "lg", "xl", !1]), PropTypes27.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes27.oneOfType([PropTypes27.arrayOf(PropTypes27.oneOfType([PropTypes27.func, PropTypes27.object, PropTypes27.bool])), PropTypes27.func, PropTypes27.object])
};
var Container_default = Container;

// app/root.tsx
import { Backdrop as Backdrop3, Typography as Typography3 } from "@mui/material";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? /* @__PURE__ */ jsxDEV3("html", { children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("title", { children: error.status + " " + error.statusText }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(Typography3, { variant: "h3", sx: {
        color: "red",
        textAlign: "center",
        marginTop: "2em"
      }, children: error.status + " " + error.statusText }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Typography3, { variant: "h6", sx: {
        color: "red",
        textAlign: "center"
      }, children: error.data }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) : error instanceof Error ? /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("html", { children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("title", { children: error.message }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(Typography3, { variant: "h3", sx: {
        color: "red",
        textAlign: "center",
        marginTop: "2em"
      }, children: error.message }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(Typography3, { variant: "h6", sx: {
        color: "red",
        textAlign: "center"
      }, children: error.stack }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 26
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 64,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("html", { children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("title", { children: "Error" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(Typography3, { variant: "h3", sx: {
        color: "red",
        textAlign: "center",
        marginTop: "2em"
      }, children: "Unknown Error" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 98,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 92,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this);
}
var loader = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  return json2({
    companyid: await getCompanyID(request)
  }, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
function App() {
  let navigation = useNavigation(), revalidator = useRevalidator(), loaddata = useLoaderData2(), [companyid, setCompanyid] = React32.useState(loaddata.companyid), [open, setOpen] = React32.useState(!1), location = useLocation();
  console.log(location), React32.useEffect(() => {
  }, [loaddata]);
  let handleClick = () => {
    setOpen(!0);
  }, handleClose = (event, reason) => {
    reason !== "clickaway" && setOpen(!1);
  };
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("link", { href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap", rel: "stylesheet" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 184,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 188,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 192,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      location.pathname == "/login" ? "" : /* @__PURE__ */ jsxDEV3(Appbar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 196,
        columnNumber: 47
      }, this),
      /* @__PURE__ */ jsxDEV3(Container_default, { maxWidth: "xl", children: [
        /* @__PURE__ */ jsxDEV3(CssBaseline_default, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 199,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3(ScrollRestoration, { getKey: (location2, matches) => location2.key }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 201,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 206,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 198,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(
        Backdrop3,
        {
          sx: { color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 },
          open: navigation.state === "loading" ? !0 : navigation.state === "submitting",
          children: /* @__PURE__ */ jsxDEV3(Typography3, { variant: "body1", children: navigation.state === "submitting" ? "Processing action" : "Please Wait" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 215,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 210,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 194,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 173,
    columnNumber: 5
  }, this);
}

// app/routes/sales_alt_1(not_used).tsx
var sales_alt_1_not_used_exports = {};
__export(sales_alt_1_not_used_exports, {
  action: () => action,
  default: () => index,
  loader: () => loader2,
  meta: () => meta
});
import * as React75 from "react";
import { redirect as redirect2, json as json4 } from "@remix-run/node";
import { useLoaderData as useLoaderData3, useNavigate, Form } from "@remix-run/react";

// app/data/sourceData.tsx
import { json as json3 } from "@remix-run/node";
var apiUrl = "https://pos.jahesiiyuy.store/api/";
async function getUsers(secret) {
  let result = (await (await fetch(apiUrl + "customer?page=1&limit=200", { headers: { "x-api-key": secret } })).json()).data.map((record) => ({
    id: record.id,
    alamat: record.alamat,
    nama_lengkap: record.nama_lengkap,
    nama_depan: record.nama_depan,
    nama_belakang: record.nama_belakang,
    phone: record.phone,
    email: record.email
  }));
  return json3({ result });
}
async function getProduct(secret) {
  let result = (await (await fetch(apiUrl + "product?page=1&limit=200", { headers: { "x-api-key": secret } })).json()).data.map((record) => ({
    id: record.idproduk,
    image: record.imageList,
    barcode: record.barcode,
    product_name: record.nama_produk,
    category: record.nama_kategori,
    price: record.pidr,
    stock: record.qty,
    weight: record.berat
  }));
  return json3({ result });
}
async function getProducts(secret, search = "", page = 1, limit = 8) {
  let path = "product?page=" + page + (search != "" ? "&search=" + search : "") + "&limit=" + limit;
  return await (await fetch(apiUrl + path, { headers: { "x-api-key": secret } })).json();
}
async function getDataDashboard(secret, page = 1) {
  let path = "dashboard?page=" + page + "&limit=10", data = await (await fetch(apiUrl + path, { headers: { "x-api-key": secret }, method: "GET" })).json();
  return json3({ result: data || {} });
}
async function getPayments(secret) {
  let data = await (await fetch(apiUrl + "order/list_payment", { headers: { "x-api-key": secret }, method: "GET" })).json(), result = data.data ? data : {};
  return json3({ result });
}
async function createUsers(secret, body2) {
  return await (await fetch(apiUrl + "customer/", {
    headers: { "x-api-key": secret },
    body: JSON.stringify(body2),
    method: "POST"
  })).json();
}
async function updateUsers(secret, id, body2) {
  let path = "customer/update/" + id;
  return await (await fetch(apiUrl + path, {
    headers: { "x-api-key": secret },
    body: JSON.stringify(body2),
    method: "POST"
  })).json();
}
async function deleteUsers(secret, id) {
  let path = "customer/delete/" + id;
  return await (await fetch(apiUrl + path, {
    headers: { "x-api-key": secret },
    method: "DELETE"
  })).json();
}
async function getTransaction(secret, search = "", page, limit, id = 0) {
  let path = "order" + (id == 0 ? "?page=" + page + "&limit=" + limit + "&search=" + search : "/" + id);
  return await (await fetch(apiUrl + path, {
    headers: { "x-api-key": secret },
    method: "GET"
  })).json();
}
async function createTransaction(body2, secret) {
  return await (await fetch(apiUrl + "order/create", {
    headers: { "x-api-key": secret },
    body: body2,
    method: "POST"
  })).json();
}
async function changePayment(body2, secret) {
  return await (await fetch(apiUrl + "order/change_payment", {
    headers: { "x-api-key": secret },
    body: body2,
    method: "POST"
  })).json();
}
async function simulatePay(body2, secret) {
  return await (await fetch(apiUrl + "order/simulate_payment", {
    headers: { "x-api-key": secret, "Content-Type": "application/json" },
    body: body2,
    method: "POST"
  })).json();
}
async function authLogin(body2) {
  return await (await fetch(apiUrl + "auth/login", {
    body: new URLSearchParams({
      email: body2.email,
      password: body2.password
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
  })).json();
}

// node_modules/@mui/material/Stack/Stack.js
import PropTypes28 from "prop-types";
import { createStack } from "@mui/system";
var Stack = createStack({
  createStyledComponent: styled_default("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (props, styles4) => styles4.root
  }),
  useThemeProps: (inProps) => useThemeProps({
    props: inProps,
    name: "MuiStack"
  })
});
Stack.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes28.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes28.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: PropTypes28.oneOfType([PropTypes28.oneOf(["column-reverse", "column", "row-reverse", "row"]), PropTypes28.arrayOf(PropTypes28.oneOf(["column-reverse", "column", "row-reverse", "row"])), PropTypes28.object]),
  /**
   * Add an element between each child.
   */
  divider: PropTypes28.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: PropTypes28.oneOfType([PropTypes28.arrayOf(PropTypes28.oneOfType([PropTypes28.number, PropTypes28.string])), PropTypes28.number, PropTypes28.object, PropTypes28.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes28.oneOfType([PropTypes28.arrayOf(PropTypes28.oneOfType([PropTypes28.func, PropTypes28.object, PropTypes28.bool])), PropTypes28.func, PropTypes28.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: PropTypes28.bool
};
var Stack_default = Stack;

// node_modules/@mui/material/Grid/Grid.js
import _objectWithoutPropertiesLoose26 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends33 from "@babel/runtime/helpers/esm/extends";
import * as React34 from "react";
import PropTypes29 from "prop-types";
import clsx21 from "clsx";
import { unstable_extendSxProp as extendSxProp2, handleBreakpoints, unstable_resolveBreakpointValues as resolveBreakpointValues } from "@mui/system";

// node_modules/@mui/material/Grid/GridContext.js
import * as React33 from "react";
var GridContext = /* @__PURE__ */ React33.createContext();
GridContext.displayName = "GridContext";
var GridContext_default = GridContext;

// node_modules/@mui/material/Grid/gridClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses20 } from "@mui/utils";
function getGridUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiGrid", slot);
}
var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"], WRAPS = ["nowrap", "wrap-reverse", "wrap"], GRID_SIZES = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], gridClasses = generateUtilityClasses20("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...SPACINGS.map((spacing) => `spacing-xs-${spacing}`),
  // direction values
  ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
  // wrap values
  ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
  // grid sizes for all breakpoints
  ...GRID_SIZES.map((size) => `grid-xs-${size}`),
  ...GRID_SIZES.map((size) => `grid-sm-${size}`),
  ...GRID_SIZES.map((size) => `grid-md-${size}`),
  ...GRID_SIZES.map((size) => `grid-lg-${size}`),
  ...GRID_SIZES.map((size) => `grid-xl-${size}`)
]), gridClasses_default = gridClasses;

// node_modules/@mui/material/Grid/Grid.js
import { jsx as _jsx28 } from "react/jsx-runtime";
var _excluded28 = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function getOffset(val) {
  let parse = parseFloat(val);
  return `${parse}${String(val).replace(String(parse), "") || "px"}`;
}
function generateGrid({
  theme,
  ownerState
}) {
  let size;
  return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
    let styles4 = {};
    if (ownerState[breakpoint] && (size = ownerState[breakpoint]), !size)
      return globalStyles;
    if (size === !0)
      styles4 = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    else if (size === "auto")
      styles4 = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    else {
      let columnsBreakpointValues = resolveBreakpointValues({
        values: ownerState.columns,
        breakpoints: theme.breakpoints.values
      }), columnValue = typeof columnsBreakpointValues == "object" ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
      if (columnValue == null)
        return globalStyles;
      let width = `${Math.round(size / columnValue * 1e8) / 1e6}%`, more = {};
      if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
        let themeSpacing = theme.spacing(ownerState.columnSpacing);
        if (themeSpacing !== "0px") {
          let fullWidth = `calc(${width} + ${getOffset(themeSpacing)})`;
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      }
      styles4 = _extends33({
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width
      }, more);
    }
    return theme.breakpoints.values[breakpoint] === 0 ? Object.assign(globalStyles, styles4) : globalStyles[theme.breakpoints.up(breakpoint)] = styles4, globalStyles;
  }, {});
}
function generateDirection({
  theme,
  ownerState
}) {
  let directionValues = resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  });
  return handleBreakpoints({
    theme
  }, directionValues, (propValue) => {
    let output = {
      flexDirection: propValue
    };
    return propValue.indexOf("column") === 0 && (output[`& > .${gridClasses_default.item}`] = {
      maxWidth: "none"
    }), output;
  });
}
function extractZeroValueBreakpointKeys({
  breakpoints,
  values
}) {
  let nonZeroKey = "";
  Object.keys(values).forEach((key) => {
    nonZeroKey === "" && values[key] !== 0 && (nonZeroKey = key);
  });
  let sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b) => breakpoints[a] - breakpoints[b]);
  return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
}
function generateRowGap({
  theme,
  ownerState
}) {
  let {
    container,
    rowSpacing
  } = ownerState, styles4 = {};
  if (container && rowSpacing !== 0) {
    let rowSpacingValues = resolveBreakpointValues({
      values: rowSpacing,
      breakpoints: theme.breakpoints.values
    }), zeroValueBreakpointKeys;
    typeof rowSpacingValues == "object" && (zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
      breakpoints: theme.breakpoints.values,
      values: rowSpacingValues
    })), styles4 = handleBreakpoints({
      theme
    }, rowSpacingValues, (propValue, breakpoint) => {
      var _zeroValueBreakpointK;
      let themeSpacing = theme.spacing(propValue);
      return themeSpacing !== "0px" ? {
        marginTop: `-${getOffset(themeSpacing)}`,
        [`& > .${gridClasses_default.item}`]: {
          paddingTop: getOffset(themeSpacing)
        }
      } : (_zeroValueBreakpointK = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK.includes(breakpoint) ? {} : {
        marginTop: 0,
        [`& > .${gridClasses_default.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return styles4;
}
function generateColumnGap({
  theme,
  ownerState
}) {
  let {
    container,
    columnSpacing
  } = ownerState, styles4 = {};
  if (container && columnSpacing !== 0) {
    let columnSpacingValues = resolveBreakpointValues({
      values: columnSpacing,
      breakpoints: theme.breakpoints.values
    }), zeroValueBreakpointKeys;
    typeof columnSpacingValues == "object" && (zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
      breakpoints: theme.breakpoints.values,
      values: columnSpacingValues
    })), styles4 = handleBreakpoints({
      theme
    }, columnSpacingValues, (propValue, breakpoint) => {
      var _zeroValueBreakpointK2;
      let themeSpacing = theme.spacing(propValue);
      return themeSpacing !== "0px" ? {
        width: `calc(100% + ${getOffset(themeSpacing)})`,
        marginLeft: `-${getOffset(themeSpacing)}`,
        [`& > .${gridClasses_default.item}`]: {
          paddingLeft: getOffset(themeSpacing)
        }
      } : (_zeroValueBreakpointK2 = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK2.includes(breakpoint) ? {} : {
        width: "100%",
        marginLeft: 0,
        [`& > .${gridClasses_default.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return styles4;
}
function resolveSpacingStyles(spacing, breakpoints, styles4 = {}) {
  if (!spacing || spacing <= 0)
    return [];
  if (typeof spacing == "string" && !Number.isNaN(Number(spacing)) || typeof spacing == "number")
    return [styles4[`spacing-xs-${String(spacing)}`]];
  let spacingStyles = [];
  return breakpoints.forEach((breakpoint) => {
    let value = spacing[breakpoint];
    Number(value) > 0 && spacingStyles.push(styles4[`spacing-${breakpoint}-${String(value)}`]);
  }), spacingStyles;
}
var GridRoot = styled_default("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props, {
      container,
      direction,
      item,
      spacing,
      wrap,
      zeroMinWidth,
      breakpoints
    } = ownerState, spacingStyles = [];
    container && (spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles4));
    let breakpointsStyles = [];
    return breakpoints.forEach((breakpoint) => {
      let value = ownerState[breakpoint];
      value && breakpointsStyles.push(styles4[`grid-${breakpoint}-${String(value)}`]);
    }), [styles4.root, container && styles4.container, item && styles4.item, zeroMinWidth && styles4.zeroMinWidth, ...spacingStyles, direction !== "row" && styles4[`direction-xs-${String(direction)}`], wrap !== "wrap" && styles4[`wrap-xs-${String(wrap)}`], ...breakpointsStyles];
  }
})(({
  ownerState
}) => _extends33({
  boxSizing: "border-box"
}, ownerState.container && {
  display: "flex",
  flexWrap: "wrap",
  width: "100%"
}, ownerState.item && {
  margin: 0
  // For instance, it's useful when used with a `figure` element.
}, ownerState.zeroMinWidth && {
  minWidth: 0
}, ownerState.wrap !== "wrap" && {
  flexWrap: ownerState.wrap
}), generateDirection, generateRowGap, generateColumnGap, generateGrid);
function resolveSpacingClasses(spacing, breakpoints) {
  if (!spacing || spacing <= 0)
    return [];
  if (typeof spacing == "string" && !Number.isNaN(Number(spacing)) || typeof spacing == "number")
    return [`spacing-xs-${String(spacing)}`];
  let classes = [];
  return breakpoints.forEach((breakpoint) => {
    let value = spacing[breakpoint];
    if (Number(value) > 0) {
      let className = `spacing-${breakpoint}-${String(value)}`;
      classes.push(className);
    }
  }), classes;
}
var useUtilityClasses18 = (ownerState) => {
  let {
    classes,
    container,
    direction,
    item,
    spacing,
    wrap,
    zeroMinWidth,
    breakpoints
  } = ownerState, spacingClasses = [];
  container && (spacingClasses = resolveSpacingClasses(spacing, breakpoints));
  let breakpointsClasses = [];
  breakpoints.forEach((breakpoint) => {
    let value = ownerState[breakpoint];
    value && breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`);
  });
  let slots = {
    root: ["root", container && "container", item && "item", zeroMinWidth && "zeroMinWidth", ...spacingClasses, direction !== "row" && `direction-xs-${String(direction)}`, wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...breakpointsClasses]
  };
  return unstable_composeClasses(slots, getGridUtilityClass, classes);
}, Grid = /* @__PURE__ */ React34.forwardRef(function(inProps, ref) {
  let themeProps = useThemeProps({
    props: inProps,
    name: "MuiGrid"
  }), {
    breakpoints
  } = useTheme(), props = extendSxProp2(themeProps), {
    className,
    columns: columnsProp,
    columnSpacing: columnSpacingProp,
    component = "div",
    container = !1,
    direction = "row",
    item = !1,
    rowSpacing: rowSpacingProp,
    spacing = 0,
    wrap = "wrap",
    zeroMinWidth = !1
  } = props, other = _objectWithoutPropertiesLoose26(props, _excluded28), rowSpacing = rowSpacingProp || spacing, columnSpacing = columnSpacingProp || spacing, columnsContext = React34.useContext(GridContext_default), columns5 = container ? columnsProp || 12 : columnsContext, breakpointsValues = {}, otherFiltered = _extends33({}, other);
  breakpoints.keys.forEach((breakpoint) => {
    other[breakpoint] != null && (breakpointsValues[breakpoint] = other[breakpoint], delete otherFiltered[breakpoint]);
  });
  let ownerState = _extends33({}, props, {
    columns: columns5,
    container,
    direction,
    item,
    rowSpacing,
    columnSpacing,
    wrap,
    zeroMinWidth,
    spacing
  }, breakpointsValues, {
    breakpoints: breakpoints.keys
  }), classes = useUtilityClasses18(ownerState);
  return /* @__PURE__ */ _jsx28(GridContext_default.Provider, {
    value: columns5,
    children: /* @__PURE__ */ _jsx28(GridRoot, _extends33({
      ownerState,
      className: clsx21(classes.root, className),
      as: component,
      ref
    }, otherFiltered))
  });
});
Grid.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes29.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes29.object,
  /**
   * @ignore
   */
  className: PropTypes29.string,
  /**
   * The number of columns.
   * @default 12
   */
  columns: PropTypes29.oneOfType([PropTypes29.arrayOf(PropTypes29.number), PropTypes29.number, PropTypes29.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: PropTypes29.oneOfType([PropTypes29.arrayOf(PropTypes29.oneOfType([PropTypes29.number, PropTypes29.string])), PropTypes29.number, PropTypes29.object, PropTypes29.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes29.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: PropTypes29.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: PropTypes29.oneOfType([PropTypes29.oneOf(["column-reverse", "column", "row-reverse", "row"]), PropTypes29.arrayOf(PropTypes29.oneOf(["column-reverse", "column", "row-reverse", "row"])), PropTypes29.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: PropTypes29.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: PropTypes29.oneOfType([PropTypes29.oneOf(["auto"]), PropTypes29.number, PropTypes29.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: PropTypes29.oneOfType([PropTypes29.oneOf(["auto"]), PropTypes29.number, PropTypes29.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: PropTypes29.oneOfType([PropTypes29.arrayOf(PropTypes29.oneOfType([PropTypes29.number, PropTypes29.string])), PropTypes29.number, PropTypes29.object, PropTypes29.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: PropTypes29.oneOfType([PropTypes29.oneOf(["auto"]), PropTypes29.number, PropTypes29.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: PropTypes29.oneOfType([PropTypes29.arrayOf(PropTypes29.oneOfType([PropTypes29.number, PropTypes29.string])), PropTypes29.number, PropTypes29.object, PropTypes29.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes29.oneOfType([PropTypes29.arrayOf(PropTypes29.oneOfType([PropTypes29.func, PropTypes29.object, PropTypes29.bool])), PropTypes29.func, PropTypes29.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: PropTypes29.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: PropTypes29.oneOfType([PropTypes29.oneOf(["auto"]), PropTypes29.number, PropTypes29.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: PropTypes29.oneOfType([PropTypes29.oneOf(["auto"]), PropTypes29.number, PropTypes29.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: PropTypes29.bool
};
{
  let requireProp = requirePropFactory_default("Grid", Grid);
  Grid["propTypes"] = _extends33({}, Grid.propTypes, {
    direction: requireProp("container"),
    lg: requireProp("item"),
    md: requireProp("item"),
    sm: requireProp("item"),
    spacing: requireProp("container"),
    wrap: requireProp("container"),
    xs: requireProp("item"),
    zeroMinWidth: requireProp("item")
  });
}
var Grid_default = Grid;

// node_modules/@mui/material/Table/Table.js
import _objectWithoutPropertiesLoose27 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends34 from "@babel/runtime/helpers/esm/extends";
import * as React36 from "react";
import PropTypes30 from "prop-types";
import clsx22 from "clsx";

// node_modules/@mui/material/Table/TableContext.js
import * as React35 from "react";
var TableContext = /* @__PURE__ */ React35.createContext();
TableContext.displayName = "TableContext";
var TableContext_default = TableContext;

// node_modules/@mui/material/Table/tableClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses21 } from "@mui/utils";
function getTableUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTable", slot);
}
var tableClasses = generateUtilityClasses21("MuiTable", ["root", "stickyHeader"]);

// node_modules/@mui/material/Table/Table.js
import { jsx as _jsx29 } from "react/jsx-runtime";
var _excluded29 = ["className", "component", "padding", "size", "stickyHeader"], useUtilityClasses19 = (ownerState) => {
  let {
    classes,
    stickyHeader
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", stickyHeader && "stickyHeader"]
  }, getTableUtilityClass, classes);
}, TableRoot = styled_default("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.stickyHeader && styles4.stickyHeader];
  }
})(({
  theme,
  ownerState
}) => _extends34({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  "& caption": _extends34({}, theme.typography.body2, {
    padding: theme.spacing(2),
    color: (theme.vars || theme).palette.text.secondary,
    textAlign: "left",
    captionSide: "bottom"
  })
}, ownerState.stickyHeader && {
  borderCollapse: "separate"
})), defaultComponent = "table", Table = /* @__PURE__ */ React36.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTable"
  }), {
    className,
    component = defaultComponent,
    padding = "normal",
    size = "medium",
    stickyHeader = !1
  } = props, other = _objectWithoutPropertiesLoose27(props, _excluded29), ownerState = _extends34({}, props, {
    component,
    padding,
    size,
    stickyHeader
  }), classes = useUtilityClasses19(ownerState), table = React36.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return /* @__PURE__ */ _jsx29(TableContext_default.Provider, {
    value: table,
    children: /* @__PURE__ */ _jsx29(TableRoot, _extends34({
      as: component,
      role: component === defaultComponent ? null : "table",
      ref,
      className: clsx22(classes.root, className),
      ownerState
    }, other))
  });
});
Table.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the table, normally `TableHead` and `TableBody`.
   */
  children: PropTypes30.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes30.object,
  /**
   * @ignore
   */
  className: PropTypes30.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes30.elementType,
  /**
   * Allows TableCells to inherit padding of the Table.
   * @default 'normal'
   */
  padding: PropTypes30.oneOf(["checkbox", "none", "normal"]),
  /**
   * Allows TableCells to inherit size of the Table.
   * @default 'medium'
   */
  size: PropTypes30.oneOfType([PropTypes30.oneOf(["medium", "small"]), PropTypes30.string]),
  /**
   * Set the header sticky.
   *
   * ⚠️ It doesn't work with IE11.
   * @default false
   */
  stickyHeader: PropTypes30.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes30.oneOfType([PropTypes30.arrayOf(PropTypes30.oneOfType([PropTypes30.func, PropTypes30.object, PropTypes30.bool])), PropTypes30.func, PropTypes30.object])
};
var Table_default = Table;

// node_modules/@mui/material/TableBody/TableBody.js
import _extends35 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose28 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React38 from "react";
import PropTypes31 from "prop-types";
import clsx23 from "clsx";

// node_modules/@mui/material/Table/Tablelvl2Context.js
import * as React37 from "react";
var Tablelvl2Context = /* @__PURE__ */ React37.createContext();
Tablelvl2Context.displayName = "Tablelvl2Context";
var Tablelvl2Context_default = Tablelvl2Context;

// node_modules/@mui/material/TableBody/tableBodyClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses22 } from "@mui/utils";
function getTableBodyUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTableBody", slot);
}
var tableBodyClasses = generateUtilityClasses22("MuiTableBody", ["root"]);

// node_modules/@mui/material/TableBody/TableBody.js
import { jsx as _jsx30 } from "react/jsx-runtime";
var _excluded30 = ["className", "component"], useUtilityClasses20 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root"]
  }, getTableBodyUtilityClass, classes);
}, TableBodyRoot = styled_default("tbody", {
  name: "MuiTableBody",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({
  display: "table-row-group"
}), tablelvl2 = {
  variant: "body"
}, defaultComponent2 = "tbody", TableBody = /* @__PURE__ */ React38.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTableBody"
  }), {
    className,
    component = defaultComponent2
  } = props, other = _objectWithoutPropertiesLoose28(props, _excluded30), ownerState = _extends35({}, props, {
    component
  }), classes = useUtilityClasses20(ownerState);
  return /* @__PURE__ */ _jsx30(Tablelvl2Context_default.Provider, {
    value: tablelvl2,
    children: /* @__PURE__ */ _jsx30(TableBodyRoot, _extends35({
      className: clsx23(classes.root, className),
      as: component,
      ref,
      role: component === defaultComponent2 ? null : "rowgroup",
      ownerState
    }, other))
  });
});
TableBody.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes31.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes31.object,
  /**
   * @ignore
   */
  className: PropTypes31.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes31.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes31.oneOfType([PropTypes31.arrayOf(PropTypes31.oneOfType([PropTypes31.func, PropTypes31.object, PropTypes31.bool])), PropTypes31.func, PropTypes31.object])
};
var TableBody_default = TableBody;

// node_modules/@mui/material/TableCell/TableCell.js
import _objectWithoutPropertiesLoose29 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends36 from "@babel/runtime/helpers/esm/extends";
import * as React39 from "react";
import PropTypes32 from "prop-types";
import clsx24 from "clsx";
import { darken as darken3, alpha as alpha6, lighten as lighten3 } from "@mui/system";

// node_modules/@mui/material/TableCell/tableCellClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses23 } from "@mui/utils";
function getTableCellUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTableCell", slot);
}
var tableCellClasses = generateUtilityClasses23("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), tableCellClasses_default = tableCellClasses;

// node_modules/@mui/material/TableCell/TableCell.js
import { jsx as _jsx31 } from "react/jsx-runtime";
var _excluded31 = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"], useUtilityClasses21 = (ownerState) => {
  let {
    classes,
    variant,
    align,
    padding,
    size,
    stickyHeader
  } = ownerState, slots = {
    root: ["root", variant, stickyHeader && "stickyHeader", align !== "inherit" && `align${capitalize_default(align)}`, padding !== "normal" && `padding${capitalize_default(padding)}`, `size${capitalize_default(size)}`]
  };
  return unstable_composeClasses(slots, getTableCellUtilityClass, classes);
}, TableCellRoot = styled_default("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, styles4[ownerState.variant], styles4[`size${capitalize_default(ownerState.size)}`], ownerState.padding !== "normal" && styles4[`padding${capitalize_default(ownerState.padding)}`], ownerState.align !== "inherit" && styles4[`align${capitalize_default(ownerState.align)}`], ownerState.stickyHeader && styles4.stickyHeader];
  }
})(({
  theme,
  ownerState
}) => _extends36({}, theme.typography.body2, {
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === "light" ? lighten3(alpha6(theme.palette.divider, 1), 0.88) : darken3(alpha6(theme.palette.divider, 1), 0.68)}`,
  textAlign: "left",
  padding: 16
}, ownerState.variant === "head" && {
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: theme.typography.pxToRem(24),
  fontWeight: theme.typography.fontWeightMedium
}, ownerState.variant === "body" && {
  color: (theme.vars || theme).palette.text.primary
}, ownerState.variant === "footer" && {
  color: (theme.vars || theme).palette.text.secondary,
  lineHeight: theme.typography.pxToRem(21),
  fontSize: theme.typography.pxToRem(12)
}, ownerState.size === "small" && {
  padding: "6px 16px",
  [`&.${tableCellClasses_default.paddingCheckbox}`]: {
    width: 24,
    // prevent the checkbox column from growing
    padding: "0 12px 0 16px",
    "& > *": {
      padding: 0
    }
  }
}, ownerState.padding === "checkbox" && {
  width: 48,
  // prevent the checkbox column from growing
  padding: "0 0 0 4px"
}, ownerState.padding === "none" && {
  padding: 0
}, ownerState.align === "left" && {
  textAlign: "left"
}, ownerState.align === "center" && {
  textAlign: "center"
}, ownerState.align === "right" && {
  textAlign: "right",
  flexDirection: "row-reverse"
}, ownerState.align === "justify" && {
  textAlign: "justify"
}, ownerState.stickyHeader && {
  position: "sticky",
  top: 0,
  zIndex: 2,
  backgroundColor: (theme.vars || theme).palette.background.default
})), TableCell = /* @__PURE__ */ React39.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTableCell"
  }), {
    align = "inherit",
    className,
    component: componentProp,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant: variantProp
  } = props, other = _objectWithoutPropertiesLoose29(props, _excluded31), table = React39.useContext(TableContext_default), tablelvl23 = React39.useContext(Tablelvl2Context_default), isHeadCell = tablelvl23 && tablelvl23.variant === "head", component;
  componentProp ? component = componentProp : component = isHeadCell ? "th" : "td";
  let scope = scopeProp;
  component === "td" ? scope = void 0 : !scope && isHeadCell && (scope = "col");
  let variant = variantProp || tablelvl23 && tablelvl23.variant, ownerState = _extends36({}, props, {
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : "normal"),
    size: sizeProp || (table && table.size ? table.size : "medium"),
    sortDirection,
    stickyHeader: variant === "head" && table && table.stickyHeader,
    variant
  }), classes = useUtilityClasses21(ownerState), ariaSort = null;
  return sortDirection && (ariaSort = sortDirection === "asc" ? "ascending" : "descending"), /* @__PURE__ */ _jsx31(TableCellRoot, _extends36({
    as: component,
    ref,
    className: clsx24(classes.root, className),
    "aria-sort": ariaSort,
    scope,
    ownerState
  }, other));
});
TableCell.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   * @default 'inherit'
   */
  align: PropTypes32.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: PropTypes32.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes32.object,
  /**
   * @ignore
   */
  className: PropTypes32.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes32.elementType,
  /**
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding: PropTypes32.oneOf(["checkbox", "none", "normal"]),
  /**
   * Set scope attribute.
   */
  scope: PropTypes32.string,
  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size: PropTypes32.oneOfType([PropTypes32.oneOf(["medium", "small"]), PropTypes32.string]),
  /**
   * Set aria-sort direction.
   */
  sortDirection: PropTypes32.oneOf(["asc", "desc", !1]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes32.oneOfType([PropTypes32.arrayOf(PropTypes32.oneOfType([PropTypes32.func, PropTypes32.object, PropTypes32.bool])), PropTypes32.func, PropTypes32.object]),
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: PropTypes32.oneOfType([PropTypes32.oneOf(["body", "footer", "head"]), PropTypes32.string])
};
var TableCell_default = TableCell;

// node_modules/@mui/material/TableContainer/TableContainer.js
import _extends37 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose30 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React40 from "react";
import PropTypes33 from "prop-types";
import clsx25 from "clsx";

// node_modules/@mui/material/TableContainer/tableContainerClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses24 } from "@mui/utils";
function getTableContainerUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTableContainer", slot);
}
var tableContainerClasses = generateUtilityClasses24("MuiTableContainer", ["root"]);

// node_modules/@mui/material/TableContainer/TableContainer.js
import { jsx as _jsx32 } from "react/jsx-runtime";
var _excluded32 = ["className", "component"], useUtilityClasses22 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root"]
  }, getTableContainerUtilityClass, classes);
}, TableContainerRoot = styled_default("div", {
  name: "MuiTableContainer",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({
  width: "100%",
  overflowX: "auto"
}), TableContainer = /* @__PURE__ */ React40.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTableContainer"
  }), {
    className,
    component = "div"
  } = props, other = _objectWithoutPropertiesLoose30(props, _excluded32), ownerState = _extends37({}, props, {
    component
  }), classes = useUtilityClasses22(ownerState);
  return /* @__PURE__ */ _jsx32(TableContainerRoot, _extends37({
    ref,
    as: component,
    className: clsx25(classes.root, className),
    ownerState
  }, other));
});
TableContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `Table`.
   */
  children: PropTypes33.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes33.object,
  /**
   * @ignore
   */
  className: PropTypes33.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes33.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes33.oneOfType([PropTypes33.arrayOf(PropTypes33.oneOfType([PropTypes33.func, PropTypes33.object, PropTypes33.bool])), PropTypes33.func, PropTypes33.object])
};
var TableContainer_default = TableContainer;

// node_modules/@mui/material/TableHead/TableHead.js
import _extends38 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose31 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React41 from "react";
import PropTypes34 from "prop-types";
import clsx26 from "clsx";

// node_modules/@mui/material/TableHead/tableHeadClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses25 } from "@mui/utils";
function getTableHeadUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTableHead", slot);
}
var tableHeadClasses = generateUtilityClasses25("MuiTableHead", ["root"]);

// node_modules/@mui/material/TableHead/TableHead.js
import { jsx as _jsx33 } from "react/jsx-runtime";
var _excluded33 = ["className", "component"], useUtilityClasses23 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root"]
  }, getTableHeadUtilityClass, classes);
}, TableHeadRoot = styled_default("thead", {
  name: "MuiTableHead",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({
  display: "table-header-group"
}), tablelvl22 = {
  variant: "head"
}, defaultComponent3 = "thead", TableHead = /* @__PURE__ */ React41.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTableHead"
  }), {
    className,
    component = defaultComponent3
  } = props, other = _objectWithoutPropertiesLoose31(props, _excluded33), ownerState = _extends38({}, props, {
    component
  }), classes = useUtilityClasses23(ownerState);
  return /* @__PURE__ */ _jsx33(Tablelvl2Context_default.Provider, {
    value: tablelvl22,
    children: /* @__PURE__ */ _jsx33(TableHeadRoot, _extends38({
      as: component,
      className: clsx26(classes.root, className),
      ref,
      role: component === defaultComponent3 ? null : "rowgroup",
      ownerState
    }, other))
  });
});
TableHead.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes34.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes34.object,
  /**
   * @ignore
   */
  className: PropTypes34.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes34.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes34.oneOfType([PropTypes34.arrayOf(PropTypes34.oneOfType([PropTypes34.func, PropTypes34.object, PropTypes34.bool])), PropTypes34.func, PropTypes34.object])
};
var TableHead_default = TableHead;

// node_modules/@mui/material/TableRow/TableRow.js
import _extends39 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose32 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React42 from "react";
import PropTypes35 from "prop-types";
import clsx27 from "clsx";
import { alpha as alpha7 } from "@mui/system";

// node_modules/@mui/material/TableRow/tableRowClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses26 } from "@mui/utils";
function getTableRowUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTableRow", slot);
}
var tableRowClasses = generateUtilityClasses26("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), tableRowClasses_default = tableRowClasses;

// node_modules/@mui/material/TableRow/TableRow.js
import { jsx as _jsx34 } from "react/jsx-runtime";
var _excluded34 = ["className", "component", "hover", "selected"], useUtilityClasses24 = (ownerState) => {
  let {
    classes,
    selected,
    hover,
    head,
    footer
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", selected && "selected", hover && "hover", head && "head", footer && "footer"]
  }, getTableRowUtilityClass, classes);
}, TableRowRoot = styled_default("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.head && styles4.head, ownerState.footer && styles4.footer];
  }
})(({
  theme
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${tableRowClasses_default.hover}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${tableRowClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha7(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha7(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
    }
  }
})), defaultComponent4 = "tr", TableRow = /* @__PURE__ */ React42.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTableRow"
  }), {
    className,
    component = defaultComponent4,
    hover = !1,
    selected = !1
  } = props, other = _objectWithoutPropertiesLoose32(props, _excluded34), tablelvl23 = React42.useContext(Tablelvl2Context_default), ownerState = _extends39({}, props, {
    component,
    hover,
    selected,
    head: tablelvl23 && tablelvl23.variant === "head",
    footer: tablelvl23 && tablelvl23.variant === "footer"
  }), classes = useUtilityClasses24(ownerState);
  return /* @__PURE__ */ _jsx34(TableRowRoot, _extends39({
    as: component,
    ref,
    className: clsx27(classes.root, className),
    role: component === defaultComponent4 ? null : "row",
    ownerState
  }, other));
});
TableRow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Should be valid <tr> children such as `TableCell`.
   */
  children: PropTypes35.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes35.object,
  /**
   * @ignore
   */
  className: PropTypes35.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes35.elementType,
  /**
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover: PropTypes35.bool,
  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected: PropTypes35.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes35.oneOfType([PropTypes35.arrayOf(PropTypes35.oneOfType([PropTypes35.func, PropTypes35.object, PropTypes35.bool])), PropTypes35.func, PropTypes35.object])
};
var TableRow_default = TableRow;

// node_modules/@mui/material/Divider/Divider.js
import _objectWithoutPropertiesLoose33 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends40 from "@babel/runtime/helpers/esm/extends";
import * as React43 from "react";
import PropTypes36 from "prop-types";
import clsx28 from "clsx";
import { alpha as alpha8 } from "@mui/system";

// node_modules/@mui/material/Divider/dividerClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses27 } from "@mui/utils";
function getDividerUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiDivider", slot);
}
var dividerClasses = generateUtilityClasses27("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);

// node_modules/@mui/material/Divider/Divider.js
import { jsx as _jsx35 } from "react/jsx-runtime";
var _excluded35 = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], useUtilityClasses25 = (ownerState) => {
  let {
    absolute,
    children,
    classes,
    flexItem,
    light: light2,
    orientation,
    textAlign,
    variant
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", absolute && "absolute", variant, light2 && "light", orientation === "vertical" && "vertical", flexItem && "flexItem", children && "withChildren", children && orientation === "vertical" && "withChildrenVertical", textAlign === "right" && orientation !== "vertical" && "textAlignRight", textAlign === "left" && orientation !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", orientation === "vertical" && "wrapperVertical"]
  }, getDividerUtilityClass, classes);
}, DividerRoot = styled_default("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.absolute && styles4.absolute, styles4[ownerState.variant], ownerState.light && styles4.light, ownerState.orientation === "vertical" && styles4.vertical, ownerState.flexItem && styles4.flexItem, ownerState.children && styles4.withChildren, ownerState.children && ownerState.orientation === "vertical" && styles4.withChildrenVertical, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && styles4.textAlignRight, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && styles4.textAlignLeft];
  }
})(({
  theme,
  ownerState
}) => _extends40({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (theme.vars || theme).palette.divider,
  borderBottomWidth: "thin"
}, ownerState.absolute && {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%"
}, ownerState.light && {
  borderColor: theme.vars ? `rgba(${theme.vars.palette.dividerChannel} / 0.08)` : alpha8(theme.palette.divider, 0.08)
}, ownerState.variant === "inset" && {
  marginLeft: 72
}, ownerState.variant === "middle" && ownerState.orientation === "horizontal" && {
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2)
}, ownerState.variant === "middle" && ownerState.orientation === "vertical" && {
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1)
}, ownerState.orientation === "vertical" && {
  height: "100%",
  borderBottomWidth: 0,
  borderRightWidth: "thin"
}, ownerState.flexItem && {
  alignSelf: "stretch",
  height: "auto"
}), ({
  ownerState
}) => _extends40({}, ownerState.children && {
  display: "flex",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0,
  "&::before, &::after": {
    content: '""',
    alignSelf: "center"
  }
}), ({
  theme,
  ownerState
}) => _extends40({}, ownerState.children && ownerState.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(theme.vars || theme).palette.divider}`
  }
}), ({
  theme,
  ownerState
}) => _extends40({}, ownerState.children && ownerState.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`
  }
}), ({
  ownerState
}) => _extends40({}, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && {
  "&::before": {
    width: "90%"
  },
  "&::after": {
    width: "10%"
  }
}, ownerState.textAlign === "left" && ownerState.orientation !== "vertical" && {
  "&::before": {
    width: "10%"
  },
  "&::after": {
    width: "90%"
  }
})), DividerWrapper = styled_default("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.wrapper, ownerState.orientation === "vertical" && styles4.wrapperVertical];
  }
})(({
  theme,
  ownerState
}) => _extends40({
  display: "inline-block",
  paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
  paddingRight: `calc(${theme.spacing(1)} * 1.2)`
}, ownerState.orientation === "vertical" && {
  paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
})), Divider = /* @__PURE__ */ React43.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiDivider"
  }), {
    absolute = !1,
    children,
    className,
    component = children ? "div" : "hr",
    flexItem = !1,
    light: light2 = !1,
    orientation = "horizontal",
    role = component !== "hr" ? "separator" : void 0,
    textAlign = "center",
    variant = "fullWidth"
  } = props, other = _objectWithoutPropertiesLoose33(props, _excluded35), ownerState = _extends40({}, props, {
    absolute,
    component,
    flexItem,
    light: light2,
    orientation,
    role,
    textAlign,
    variant
  }), classes = useUtilityClasses25(ownerState);
  return /* @__PURE__ */ _jsx35(DividerRoot, _extends40({
    as: component,
    className: clsx28(classes.root, className),
    role,
    ref,
    ownerState
  }, other, {
    children: children ? /* @__PURE__ */ _jsx35(DividerWrapper, {
      className: classes.wrapper,
      ownerState,
      children
    }) : null
  }));
});
Divider.muiSkipListHighlight = !0;
Divider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: PropTypes36.bool,
  /**
   * The content of the component.
   */
  children: PropTypes36.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes36.object,
  /**
   * @ignore
   */
  className: PropTypes36.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes36.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: PropTypes36.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   */
  light: PropTypes36.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: PropTypes36.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: PropTypes36.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes36.oneOfType([PropTypes36.arrayOf(PropTypes36.oneOfType([PropTypes36.func, PropTypes36.object, PropTypes36.bool])), PropTypes36.func, PropTypes36.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: PropTypes36.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: PropTypes36.oneOfType([PropTypes36.oneOf(["fullWidth", "inset", "middle"]), PropTypes36.string])
};
var Divider_default = Divider;

// node_modules/@mui/material/Button/Button.js
import _objectWithoutPropertiesLoose34 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends41 from "@babel/runtime/helpers/esm/extends";
import * as React46 from "react";
import PropTypes37 from "prop-types";
import clsx29 from "clsx";
import { internal_resolveProps as resolveProps } from "@mui/utils";
import { alpha as alpha9 } from "@mui/system";

// node_modules/@mui/material/Button/buttonClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses28 } from "@mui/utils";
function getButtonUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses28("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), buttonClasses_default = buttonClasses;

// node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js
import * as React44 from "react";
var ButtonGroupContext = /* @__PURE__ */ React44.createContext({});
ButtonGroupContext.displayName = "ButtonGroupContext";
var ButtonGroupContext_default = ButtonGroupContext;

// node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.js
import * as React45 from "react";
var ButtonGroupButtonContext = /* @__PURE__ */ React45.createContext(void 0);
ButtonGroupButtonContext.displayName = "ButtonGroupButtonContext";
var ButtonGroupButtonContext_default = ButtonGroupButtonContext;

// node_modules/@mui/material/Button/Button.js
import { jsx as _jsx36 } from "react/jsx-runtime";
import { jsxs as _jsxs9 } from "react/jsx-runtime";
var _excluded36 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], useUtilityClasses26 = (ownerState) => {
  let {
    color,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState, slots = {
    root: ["root", variant, `${variant}${capitalize_default(color)}`, `size${capitalize_default(size)}`, `${variant}Size${capitalize_default(size)}`, color === "inherit" && "colorInherit", disableElevation && "disableElevation", fullWidth && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${capitalize_default(size)}`],
    endIcon: ["endIcon", `iconSize${capitalize_default(size)}`]
  }, composedClasses = unstable_composeClasses(slots, getButtonUtilityClass, classes);
  return _extends41({}, classes, composedClasses);
}, commonIconStyles = (ownerState) => _extends41({}, ownerState.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, ownerState.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, ownerState.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), ButtonRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, styles4[ownerState.variant], styles4[`${ownerState.variant}${capitalize_default(ownerState.color)}`], styles4[`size${capitalize_default(ownerState.size)}`], styles4[`${ownerState.variant}Size${capitalize_default(ownerState.size)}`], ownerState.color === "inherit" && styles4.colorInherit, ownerState.disableElevation && styles4.disableElevation, ownerState.fullWidth && styles4.fullWidth];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;
  let inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800], inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
  return _extends41({}, theme.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": _extends41({
      textDecoration: "none",
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha9(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha9(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
      border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha9(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "contained" && {
      backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
      boxShadow: (theme.vars || theme).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (theme.vars || theme).shadows[2],
        backgroundColor: (theme.vars || theme).palette.grey[300]
      }
    }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    }),
    "&:active": _extends41({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[8]
    }),
    [`&.${buttonClasses_default.focusVisible}`]: _extends41({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[6]
    }),
    [`&.${buttonClasses_default.disabled}`]: _extends41({
      color: (theme.vars || theme).palette.action.disabled
    }, ownerState.variant === "outlined" && {
      border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
    }, ownerState.variant === "contained" && {
      color: (theme.vars || theme).palette.action.disabled,
      boxShadow: (theme.vars || theme).shadows[0],
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    })
  }, ownerState.variant === "text" && {
    padding: "6px 8px"
  }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${alpha9(theme.palette[ownerState.color].main, 0.5)}`
  }, ownerState.variant === "contained" && {
    color: theme.vars ? (
      // this is safe because grey does not change between default light/dark mode
      theme.vars.palette.text.primary
    ) : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
    backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
    boxShadow: (theme.vars || theme).shadows[2]
  }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, ownerState.size === "small" && ownerState.variant === "text" && {
    padding: "4px 5px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "text" && {
    padding: "8px 11px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "contained" && {
    padding: "4px 10px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "contained" && {
    padding: "8px 22px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState
}) => ownerState.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${buttonClasses_default.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${buttonClasses_default.disabled}`]: {
    boxShadow: "none"
  }
}), ButtonStartIcon = styled_default("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.startIcon, styles4[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends41({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === "small" && {
  marginLeft: -2
}, commonIconStyles(ownerState))), ButtonEndIcon = styled_default("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.endIcon, styles4[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends41({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === "small" && {
  marginRight: -2
}, commonIconStyles(ownerState))), Button = /* @__PURE__ */ React46.forwardRef(function(inProps, ref) {
  let contextProps = React46.useContext(ButtonGroupContext_default), buttonGroupButtonContextPositionClassName = React46.useContext(ButtonGroupButtonContext_default), resolvedProps = resolveProps(contextProps, inProps), props = useThemeProps({
    props: resolvedProps,
    name: "MuiButton"
  }), {
    children,
    color = "primary",
    component = "button",
    className,
    disabled = !1,
    disableElevation = !1,
    disableFocusRipple = !1,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = !1,
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose34(props, _excluded36), ownerState = _extends41({}, props, {
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  }), classes = useUtilityClasses26(ownerState), startIcon = startIconProp && /* @__PURE__ */ _jsx36(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  }), endIcon = endIconProp && /* @__PURE__ */ _jsx36(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp
  }), positionClassName = buttonGroupButtonContextPositionClassName || "";
  return /* @__PURE__ */ _jsxs9(ButtonRoot, _extends41({
    ownerState,
    className: clsx29(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx29(classes.focusVisible, focusVisibleClassName),
    ref,
    type
  }, other, {
    classes,
    children: [startIcon, children, endIcon]
  }));
});
Button.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes37.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes37.object,
  /**
   * @ignore
   */
  className: PropTypes37.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes37.oneOfType([PropTypes37.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), PropTypes37.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes37.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes37.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: PropTypes37.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes37.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes37.bool,
  /**
   * Element placed after the children.
   */
  endIcon: PropTypes37.node,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes37.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes37.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes37.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes37.oneOfType([PropTypes37.oneOf(["small", "medium", "large"]), PropTypes37.string]),
  /**
   * Element placed before the children.
   */
  startIcon: PropTypes37.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes37.oneOfType([PropTypes37.arrayOf(PropTypes37.oneOfType([PropTypes37.func, PropTypes37.object, PropTypes37.bool])), PropTypes37.func, PropTypes37.object]),
  /**
   * @ignore
   */
  type: PropTypes37.oneOfType([PropTypes37.oneOf(["button", "reset", "submit"]), PropTypes37.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes37.oneOfType([PropTypes37.oneOf(["contained", "outlined", "text"]), PropTypes37.string])
};
var Button_default = Button;

// node_modules/@mui/material/TextField/TextField.js
import _extends61 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose51 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React66 from "react";
import PropTypes54 from "prop-types";
import clsx40 from "clsx";
import { refType as refType9, unstable_useId as useId3 } from "@mui/utils";

// node_modules/@mui/material/Input/Input.js
import _objectWithoutPropertiesLoose36 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends44 from "@babel/runtime/helpers/esm/extends";
import * as React50 from "react";
import PropTypes39 from "prop-types";
import { refType as refType3, deepmerge as deepmerge4 } from "@mui/utils";

// node_modules/@mui/material/InputBase/InputBase.js
import _objectWithoutPropertiesLoose35 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends42 from "@babel/runtime/helpers/esm/extends";
import "@mui/utils";
import * as React49 from "react";
import PropTypes38 from "prop-types";
import clsx30 from "clsx";
import { refType as refType2, elementTypeAcceptingRef as elementTypeAcceptingRef3 } from "@mui/utils";
import { unstable_composeClasses as composeClasses2, isHostComponent as isHostComponent3, TextareaAutosize } from "@mui/base";

// node_modules/@mui/material/FormControl/formControlState.js
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => (acc[state] = props[state], muiFormControl && typeof props[state] > "u" && (acc[state] = muiFormControl[state]), acc), {});
}

// node_modules/@mui/material/FormControl/FormControlContext.js
import * as React47 from "react";
var FormControlContext = /* @__PURE__ */ React47.createContext(void 0);
FormControlContext.displayName = "FormControlContext";
var FormControlContext_default = FormControlContext;

// node_modules/@mui/material/FormControl/useFormControl.js
import * as React48 from "react";
function useFormControl() {
  return React48.useContext(FormControlContext_default);
}

// node_modules/@mui/material/InputBase/utils.js
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = !1) {
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}

// node_modules/@mui/material/InputBase/inputBaseClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses29 } from "@mui/utils";
function getInputBaseUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiInputBase", slot);
}
var inputBaseClasses = generateUtilityClasses29("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), inputBaseClasses_default = inputBaseClasses;

// node_modules/@mui/material/InputBase/InputBase.js
import { jsx as _jsx37 } from "react/jsx-runtime";
import { jsxs as _jsxs10 } from "react/jsx-runtime";
var _excluded37 = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], rootOverridesResolver = (props, styles4) => {
  let {
    ownerState
  } = props;
  return [styles4.root, ownerState.formControl && styles4.formControl, ownerState.startAdornment && styles4.adornedStart, ownerState.endAdornment && styles4.adornedEnd, ownerState.error && styles4.error, ownerState.size === "small" && styles4.sizeSmall, ownerState.multiline && styles4.multiline, ownerState.color && styles4[`color${capitalize_default(ownerState.color)}`], ownerState.fullWidth && styles4.fullWidth, ownerState.hiddenLabel && styles4.hiddenLabel];
}, inputOverridesResolver = (props, styles4) => {
  let {
    ownerState
  } = props;
  return [styles4.input, ownerState.size === "small" && styles4.inputSizeSmall, ownerState.multiline && styles4.inputMultiline, ownerState.type === "search" && styles4.inputTypeSearch, ownerState.startAdornment && styles4.inputAdornedStart, ownerState.endAdornment && styles4.inputAdornedEnd, ownerState.hiddenLabel && styles4.inputHiddenLabel];
}, useUtilityClasses27 = (ownerState) => {
  let {
    classes,
    color,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    readOnly,
    size,
    startAdornment,
    type
  } = ownerState, slots = {
    root: ["root", `color${capitalize_default(color)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size && size !== "medium" && `size${capitalize_default(size)}`, multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly"],
    input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly"]
  };
  return composeClasses2(slots, getInputBaseUtilityClass, classes);
}, InputBaseRoot = styled_default("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => _extends42({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${inputBaseClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled,
    cursor: "default"
  }
}, ownerState.multiline && _extends42({
  padding: "4px 0 5px"
}, ownerState.size === "small" && {
  paddingTop: 1
}), ownerState.fullWidth && {
  width: "100%"
})), InputBaseComponent = styled_default("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => {
  let light2 = theme.palette.mode === "light", placeholder = _extends42({
    color: "currentColor"
  }, theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light2 ? 0.42 : 0.5
  }, {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shorter
    })
  }), placeholderHidden = {
    opacity: "0 !important"
  }, placeholderVisible = theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light2 ? 0.42 : 0.5
  };
  return _extends42({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    // Firefox 19+
    "&:-ms-input-placeholder": placeholder,
    // IE11
    "&::-ms-input-placeholder": placeholder,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${inputBaseClasses_default.formControl} &`]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden,
      // Firefox 19+
      "&:-ms-input-placeholder": placeholderHidden,
      // IE11
      "&::-ms-input-placeholder": placeholderHidden,
      // Edge
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": placeholderVisible,
      // IE11
      "&:focus::-ms-input-placeholder": placeholderVisible
      // Edge
    },
    [`&.${inputBaseClasses_default.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (theme.vars || theme).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, ownerState.size === "small" && {
    paddingTop: 1
  }, ownerState.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, ownerState.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), inputGlobalStyles = /* @__PURE__ */ _jsx37(GlobalStyles_default, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), InputBase = /* @__PURE__ */ React49.forwardRef(function(inProps, ref) {
  var _slotProps$input;
  let props = useThemeProps({
    props: inProps,
    name: "MuiInputBase"
  }), {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    disableInjectingGlobalStyles,
    endAdornment,
    fullWidth = !1,
    id,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    maxRows,
    minRows,
    multiline = !1,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    slotProps = {},
    slots = {},
    startAdornment,
    type = "text",
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose35(props, _excluded37), value = inputPropsProp.value != null ? inputPropsProp.value : valueProp, {
    current: isControlled
  } = React49.useRef(value != null), inputRef = React49.useRef(), handleInputRefWarning = React49.useCallback((instance) => {
    instance && instance.nodeName !== "INPUT" && !instance.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), handleInputRef = useForkRef_default(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning), [focused, setFocused] = React49.useState(!1), muiFormControl = useFormControl();
  React49.useEffect(() => {
    if (muiFormControl)
      return muiFormControl.registerEffect();
  }, [muiFormControl]);
  let fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused, React49.useEffect(() => {
    !muiFormControl && disabled && focused && (setFocused(!1), onBlur && onBlur());
  }, [muiFormControl, disabled, focused, onBlur]);
  let onFilled = muiFormControl && muiFormControl.onFilled, onEmpty = muiFormControl && muiFormControl.onEmpty, checkDirty = React49.useCallback((obj) => {
    isFilled(obj) ? onFilled && onFilled() : onEmpty && onEmpty();
  }, [onFilled, onEmpty]);
  useEnhancedEffect_default(() => {
    isControlled && checkDirty({
      value
    });
  }, [value, checkDirty, isControlled]);
  let handleFocus = (event) => {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    onFocus && onFocus(event), inputPropsProp.onFocus && inputPropsProp.onFocus(event), muiFormControl && muiFormControl.onFocus ? muiFormControl.onFocus(event) : setFocused(!0);
  }, handleBlur = (event) => {
    onBlur && onBlur(event), inputPropsProp.onBlur && inputPropsProp.onBlur(event), muiFormControl && muiFormControl.onBlur ? muiFormControl.onBlur(event) : setFocused(!1);
  }, handleChange = (event, ...args) => {
    if (!isControlled) {
      let element = event.target || inputRef.current;
      if (element == null)
        throw new Error("MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info.");
      checkDirty({
        value: element.value
      });
    }
    inputPropsProp.onChange && inputPropsProp.onChange(event, ...args), onChange && onChange(event, ...args);
  };
  React49.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  let handleClick = (event) => {
    inputRef.current && event.currentTarget === event.target && inputRef.current.focus(), onClick && onClick(event);
  }, InputComponent = inputComponent, inputProps = inputPropsProp;
  multiline && InputComponent === "input" && (rows ? ((minRows || maxRows) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), inputProps = _extends42({
    type: void 0,
    minRows: rows,
    maxRows: rows
  }, inputProps)) : inputProps = _extends42({
    type: void 0,
    maxRows,
    minRows
  }, inputProps), InputComponent = TextareaAutosize);
  let handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  React49.useEffect(() => {
    muiFormControl && muiFormControl.setAdornedStart(Boolean(startAdornment));
  }, [muiFormControl, startAdornment]);
  let ownerState = _extends42({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  }), classes = useUtilityClasses27(ownerState), Root = slots.root || components.Root || InputBaseRoot, rootProps = slotProps.root || componentsProps.root || {}, Input3 = slots.input || components.Input || InputBaseComponent;
  return inputProps = _extends42({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input), /* @__PURE__ */ _jsxs10(React49.Fragment, {
    children: [!disableInjectingGlobalStyles && inputGlobalStyles, /* @__PURE__ */ _jsxs10(Root, _extends42({}, rootProps, !isHostComponent3(Root) && {
      ownerState: _extends42({}, ownerState, rootProps.ownerState)
    }, {
      ref,
      onClick: handleClick
    }, other, {
      className: clsx30(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
      children: [startAdornment, /* @__PURE__ */ _jsx37(FormControlContext_default.Provider, {
        value: null,
        children: /* @__PURE__ */ _jsx37(Input3, _extends42({
          ownerState,
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete,
          autoFocus,
          defaultValue,
          disabled: fcs.disabled,
          id,
          onAnimationStart: handleAutoFill,
          name,
          placeholder,
          readOnly,
          required: fcs.required,
          rows,
          value,
          onKeyDown,
          onKeyUp,
          type
        }, inputProps, !isHostComponent3(Input3) && {
          as: InputComponent,
          ownerState: _extends42({}, ownerState, inputProps.ownerState)
        }, {
          ref: handleInputRef,
          className: clsx30(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        }))
      }), endAdornment, renderSuffix ? renderSuffix(_extends42({}, fcs, {
        startAdornment
      })) : null]
    }))]
  });
});
InputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": PropTypes38.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes38.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes38.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes38.object,
  /**
   * @ignore
   */
  className: PropTypes38.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes38.oneOfType([PropTypes38.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), PropTypes38.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes38.shape({
    Input: PropTypes38.elementType,
    Root: PropTypes38.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: PropTypes38.shape({
    input: PropTypes38.object,
    root: PropTypes38.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes38.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes38.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: PropTypes38.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes38.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes38.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes38.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes38.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: elementTypeAcceptingRef3,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes38.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType2,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes38.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes38.oneOfType([PropTypes38.number, PropTypes38.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes38.oneOfType([PropTypes38.number, PropTypes38.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes38.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes38.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: PropTypes38.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes38.func,
  /**
   * @ignore
   */
  onClick: PropTypes38.func,
  /**
   * @ignore
   */
  onFocus: PropTypes38.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: PropTypes38.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes38.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes38.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes38.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes38.bool,
  /**
   * @ignore
   */
  renderSuffix: PropTypes38.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes38.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes38.oneOfType([PropTypes38.number, PropTypes38.string]),
  /**
   * The size of the component.
   */
  size: PropTypes38.oneOfType([PropTypes38.oneOf(["medium", "small"]), PropTypes38.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes38.shape({
    input: PropTypes38.object,
    root: PropTypes38.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes38.shape({
    input: PropTypes38.elementType,
    root: PropTypes38.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes38.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes38.oneOfType([PropTypes38.arrayOf(PropTypes38.oneOfType([PropTypes38.func, PropTypes38.object, PropTypes38.bool])), PropTypes38.func, PropTypes38.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: PropTypes38.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes38.any
};
var InputBase_default = InputBase;

// node_modules/@mui/material/Input/inputClasses.js
import _extends43 from "@babel/runtime/helpers/esm/extends";
import { unstable_generateUtilityClasses as generateUtilityClasses30 } from "@mui/utils";
function getInputUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiInput", slot);
}
var inputClasses = _extends43({}, inputBaseClasses_default, generateUtilityClasses30("MuiInput", ["root", "underline", "input"])), inputClasses_default = inputClasses;

// node_modules/@mui/material/Input/Input.js
import { jsx as _jsx38 } from "react/jsx-runtime";
var _excluded38 = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], useUtilityClasses28 = (ownerState) => {
  let {
    classes,
    disableUnderline
  } = ownerState, composedClasses = unstable_composeClasses({
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  }, getInputUtilityClass, classes);
  return _extends44({}, classes, composedClasses);
}, InputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles4), !ownerState.disableUnderline && styles4.underline];
  }
})(({
  theme,
  ownerState
}) => {
  let bottomLineColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return theme.vars && (bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`), _extends44({
    position: "relative"
  }, ownerState.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !ownerState.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${inputClasses_default.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${inputClasses_default.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${inputClasses_default.disabled}, .${inputClasses_default.error}):before`]: {
      borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${bottomLineColor}`
      }
    },
    [`&.${inputClasses_default.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), InputInput = styled_default(InputBaseComponent, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})({}), Input = /* @__PURE__ */ React50.forwardRef(function(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  let props = useThemeProps({
    props: inProps,
    name: "MuiInput"
  }), {
    disableUnderline,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = !1,
    inputComponent = "input",
    multiline = !1,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose36(props, _excluded38), classes = useUtilityClasses28(props), inputComponentsProps = {
    root: {
      ownerState: {
        disableUnderline
      }
    }
  }, componentsProps = slotProps ?? componentsPropsProp ? deepmerge4(slotProps ?? componentsPropsProp, inputComponentsProps) : inputComponentsProps, RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot, InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
  return /* @__PURE__ */ _jsx38(InputBase_default, _extends44({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes39.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes39.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes39.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes39.oneOfType([PropTypes39.oneOf(["primary", "secondary"]), PropTypes39.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes39.shape({
    Input: PropTypes39.elementType,
    Root: PropTypes39.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: PropTypes39.shape({
    input: PropTypes39.object,
    root: PropTypes39.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes39.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes39.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: PropTypes39.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes39.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes39.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes39.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes39.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: PropTypes39.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes39.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType3,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes39.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes39.oneOfType([PropTypes39.number, PropTypes39.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes39.oneOfType([PropTypes39.number, PropTypes39.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes39.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes39.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes39.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes39.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes39.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes39.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes39.oneOfType([PropTypes39.number, PropTypes39.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes39.shape({
    input: PropTypes39.object,
    root: PropTypes39.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes39.shape({
    input: PropTypes39.elementType,
    root: PropTypes39.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes39.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes39.oneOfType([PropTypes39.arrayOf(PropTypes39.oneOfType([PropTypes39.func, PropTypes39.object, PropTypes39.bool])), PropTypes39.func, PropTypes39.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: PropTypes39.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes39.any
};
Input.muiName = "Input";
var Input_default = Input;

// node_modules/@mui/material/FilledInput/FilledInput.js
import _objectWithoutPropertiesLoose37 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends46 from "@babel/runtime/helpers/esm/extends";
import * as React51 from "react";
import { refType as refType4, deepmerge as deepmerge5 } from "@mui/utils";
import PropTypes40 from "prop-types";

// node_modules/@mui/material/FilledInput/filledInputClasses.js
import _extends45 from "@babel/runtime/helpers/esm/extends";
import { unstable_generateUtilityClasses as generateUtilityClasses31 } from "@mui/utils";
function getFilledInputUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiFilledInput", slot);
}
var filledInputClasses = _extends45({}, inputBaseClasses_default, generateUtilityClasses31("MuiFilledInput", ["root", "underline", "input"])), filledInputClasses_default = filledInputClasses;

// node_modules/@mui/material/FilledInput/FilledInput.js
import { jsx as _jsx39 } from "react/jsx-runtime";
var _excluded39 = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], useUtilityClasses29 = (ownerState) => {
  let {
    classes,
    disableUnderline
  } = ownerState, composedClasses = unstable_composeClasses({
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  }, getFilledInputUtilityClass, classes);
  return _extends46({}, classes, composedClasses);
}, FilledInputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles4), !ownerState.disableUnderline && styles4.underline];
  }
})(({
  theme,
  ownerState
}) => {
  var _palette;
  let light2 = theme.palette.mode === "light", bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", backgroundColor = light2 ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", hoverBackground = light2 ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", disabledBackground = light2 ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return _extends46({
    position: "relative",
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${filledInputClasses_default.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${filledInputClasses_default.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    }
  }, !ownerState.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(_palette = (theme.vars || theme).palette[ownerState.color || "primary"]) == null ? void 0 : _palette.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${filledInputClasses_default.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${filledInputClasses_default.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme.transitions.create("border-bottom-color", {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${filledInputClasses_default.disabled}, .${filledInputClasses_default.error}):before`]: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
    },
    [`&.${filledInputClasses_default.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, ownerState.startAdornment && {
    paddingLeft: 12
  }, ownerState.endAdornment && {
    paddingRight: 12
  }, ownerState.multiline && _extends46({
    padding: "25px 12px 8px"
  }, ownerState.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, ownerState.hiddenLabel && ownerState.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), FilledInputInput = styled_default(InputBaseComponent, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends46({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, ownerState.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}, ownerState.hiddenLabel && ownerState.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, ownerState.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), FilledInput = /* @__PURE__ */ React51.forwardRef(function(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  let props = useThemeProps({
    props: inProps,
    name: "MuiFilledInput"
  }), {
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = !1,
    // declare here to prevent spreading to DOM
    inputComponent = "input",
    multiline = !1,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose37(props, _excluded39), ownerState = _extends46({}, props, {
    fullWidth,
    inputComponent,
    multiline,
    type
  }), classes = useUtilityClasses29(props), filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  }, componentsProps = slotProps ?? componentsPropsProp ? deepmerge5(filledInputComponentsProps, slotProps ?? componentsPropsProp) : filledInputComponentsProps, RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot, InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
  return /* @__PURE__ */ _jsx39(InputBase_default, _extends46({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
FilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes40.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes40.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes40.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes40.oneOfType([PropTypes40.oneOf(["primary", "secondary"]), PropTypes40.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes40.shape({
    Input: PropTypes40.elementType,
    Root: PropTypes40.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: PropTypes40.shape({
    input: PropTypes40.object,
    root: PropTypes40.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes40.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes40.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: PropTypes40.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes40.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes40.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes40.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: PropTypes40.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes40.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: PropTypes40.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes40.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType4,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes40.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes40.oneOfType([PropTypes40.number, PropTypes40.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes40.oneOfType([PropTypes40.number, PropTypes40.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes40.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes40.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes40.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes40.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes40.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes40.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes40.oneOfType([PropTypes40.number, PropTypes40.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes40.shape({
    input: PropTypes40.object,
    root: PropTypes40.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes40.shape({
    input: PropTypes40.elementType,
    root: PropTypes40.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes40.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes40.oneOfType([PropTypes40.arrayOf(PropTypes40.oneOfType([PropTypes40.func, PropTypes40.object, PropTypes40.bool])), PropTypes40.func, PropTypes40.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: PropTypes40.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes40.any
};
FilledInput.muiName = "Input";
var FilledInput_default = FilledInput;

// node_modules/@mui/material/OutlinedInput/OutlinedInput.js
import _objectWithoutPropertiesLoose39 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends49 from "@babel/runtime/helpers/esm/extends";
import * as React53 from "react";
import PropTypes42 from "prop-types";
import { refType as refType5 } from "@mui/utils";

// node_modules/@mui/material/OutlinedInput/NotchedOutline.js
import _objectWithoutPropertiesLoose38 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends47 from "@babel/runtime/helpers/esm/extends";
import "react";
import PropTypes41 from "prop-types";
import { jsx as _jsx40 } from "react/jsx-runtime";
var _span, _excluded40 = ["children", "classes", "className", "label", "notched"], NotchedOutlineRoot = styled_default("fieldset", {
  shouldForwardProp: rootShouldForwardProp
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), NotchedOutlineLegend = styled_default("legend", {
  shouldForwardProp: rootShouldForwardProp
})(({
  ownerState,
  theme
}) => _extends47({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !ownerState.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: theme.transitions.create("width", {
    duration: 150,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.withLabel && _extends47({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: theme.transitions.create("max-width", {
    duration: 50,
    easing: theme.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, ownerState.notched && {
  maxWidth: "100%",
  transition: theme.transitions.create("max-width", {
    duration: 100,
    easing: theme.transitions.easing.easeOut,
    delay: 50
  })
})));
function NotchedOutline(props) {
  let {
    className,
    label,
    notched
  } = props, other = _objectWithoutPropertiesLoose38(props, _excluded40), withLabel = label != null && label !== "", ownerState = _extends47({}, props, {
    notched,
    withLabel
  });
  return /* @__PURE__ */ _jsx40(NotchedOutlineRoot, _extends47({
    "aria-hidden": !0,
    className,
    ownerState
  }, other, {
    children: /* @__PURE__ */ _jsx40(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? /* @__PURE__ */ _jsx40("span", {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span || (_span = /* @__PURE__ */ _jsx40("span", {
          className: "notranslate",
          children: "\u200B"
        }))
      )
    })
  }));
}
NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes41.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes41.object,
  /**
   * @ignore
   */
  className: PropTypes41.string,
  /**
   * The label.
   */
  label: PropTypes41.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: PropTypes41.bool.isRequired,
  /**
   * @ignore
   */
  style: PropTypes41.object
};

// node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js
import _extends48 from "@babel/runtime/helpers/esm/extends";
import { unstable_generateUtilityClasses as generateUtilityClasses32 } from "@mui/utils";
function getOutlinedInputUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiOutlinedInput", slot);
}
var outlinedInputClasses = _extends48({}, inputBaseClasses_default, generateUtilityClasses32("MuiOutlinedInput", ["root", "notchedOutline", "input"])), outlinedInputClasses_default = outlinedInputClasses;

// node_modules/@mui/material/OutlinedInput/OutlinedInput.js
import { jsxs as _jsxs11 } from "react/jsx-runtime";
import { jsx as _jsx41 } from "react/jsx-runtime";
var _excluded41 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], useUtilityClasses30 = (ownerState) => {
  let {
    classes
  } = ownerState, composedClasses = unstable_composeClasses({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, getOutlinedInputUtilityClass, classes);
  return _extends49({}, classes, composedClasses);
}, OutlinedInputRoot = styled_default(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => {
  let borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return _extends49({
    position: "relative",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${outlinedInputClasses_default.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${outlinedInputClasses_default.focused} .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette[ownerState.color].main,
      borderWidth: 2
    },
    [`&.${outlinedInputClasses_default.error} .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    [`&.${outlinedInputClasses_default.disabled} .${outlinedInputClasses_default.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.action.disabled
    }
  }, ownerState.startAdornment && {
    paddingLeft: 14
  }, ownerState.endAdornment && {
    paddingRight: 14
  }, ownerState.multiline && _extends49({
    padding: "16.5px 14px"
  }, ownerState.size === "small" && {
    padding: "8.5px 14px"
  }));
}), NotchedOutlineRoot2 = styled_default(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (props, styles4) => styles4.notchedOutline
})(({
  theme
}) => {
  let borderColor = theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
}), OutlinedInputInput = styled_default(InputBaseComponent, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends49({
  padding: "16.5px 14px"
}, !theme.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme.palette.mode === "light" ? null : "#fff",
    caretColor: theme.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, theme.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [theme.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  padding: "8.5px 14px"
}, ownerState.multiline && {
  padding: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
})), OutlinedInput = /* @__PURE__ */ React53.forwardRef(function(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
  let props = useThemeProps({
    props: inProps,
    name: "MuiOutlinedInput"
  }), {
    components = {},
    fullWidth = !1,
    inputComponent = "input",
    label,
    multiline = !1,
    notched,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose39(props, _excluded41), classes = useUtilityClasses30(props), muiFormControl = useFormControl(), fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), ownerState = _extends49({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    type
  }), RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot, InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
  return /* @__PURE__ */ _jsx41(InputBase_default, _extends49({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    renderSuffix: (state) => /* @__PURE__ */ _jsx41(NotchedOutlineRoot2, {
      ownerState,
      className: classes.notchedOutline,
      label: label != null && label !== "" && fcs.required ? _React$Fragment || (_React$Fragment = /* @__PURE__ */ _jsxs11(React53.Fragment, {
        children: [label, "\u2009", "*"]
      })) : label,
      notched: typeof notched < "u" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes: _extends49({}, classes, {
      notchedOutline: null
    })
  }));
});
OutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes42.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes42.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes42.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes42.oneOfType([PropTypes42.oneOf(["primary", "secondary"]), PropTypes42.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes42.shape({
    Input: PropTypes42.elementType,
    Root: PropTypes42.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes42.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes42.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes42.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes42.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes42.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes42.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: PropTypes42.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes42.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType5,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: PropTypes42.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes42.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes42.oneOfType([PropTypes42.number, PropTypes42.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes42.oneOfType([PropTypes42.number, PropTypes42.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes42.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes42.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: PropTypes42.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes42.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes42.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes42.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes42.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes42.oneOfType([PropTypes42.number, PropTypes42.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes42.shape({
    input: PropTypes42.elementType,
    root: PropTypes42.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes42.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes42.oneOfType([PropTypes42.arrayOf(PropTypes42.oneOfType([PropTypes42.func, PropTypes42.object, PropTypes42.bool])), PropTypes42.func, PropTypes42.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: PropTypes42.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes42.any
};
OutlinedInput.muiName = "Input";
var OutlinedInput_default = OutlinedInput;

// node_modules/@mui/material/InputLabel/InputLabel.js
import _objectWithoutPropertiesLoose41 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends51 from "@babel/runtime/helpers/esm/extends";
import * as React55 from "react";
import PropTypes44 from "prop-types";
import clsx32 from "clsx";

// node_modules/@mui/material/FormLabel/FormLabel.js
import _objectWithoutPropertiesLoose40 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends50 from "@babel/runtime/helpers/esm/extends";
import * as React54 from "react";
import PropTypes43 from "prop-types";
import clsx31 from "clsx";

// node_modules/@mui/material/FormLabel/formLabelClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses33 } from "@mui/utils";
function getFormLabelUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiFormLabel", slot);
}
var formLabelClasses = generateUtilityClasses33("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), formLabelClasses_default = formLabelClasses;

// node_modules/@mui/material/FormLabel/FormLabel.js
import { jsxs as _jsxs12 } from "react/jsx-runtime";
var _excluded42 = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], useUtilityClasses31 = (ownerState) => {
  let {
    classes,
    color,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState, slots = {
    root: ["root", `color${capitalize_default(color)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
    asterisk: ["asterisk", error && "error"]
  };
  return unstable_composeClasses(slots, getFormLabelUtilityClasses, classes);
}, FormLabelRoot = styled_default("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles4) => _extends50({}, styles4.root, ownerState.color === "secondary" && styles4.colorSecondary, ownerState.filled && styles4.filled)
})(({
  theme,
  ownerState
}) => _extends50({
  color: (theme.vars || theme).palette.text.secondary
}, theme.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${formLabelClasses_default.focused}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main
  },
  [`&.${formLabelClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formLabelClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})), AsteriskComponent = styled_default("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles4) => styles4.asterisk
})(({
  theme
}) => ({
  [`&.${formLabelClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
})), FormLabel = /* @__PURE__ */ React54.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiFormLabel"
  }), {
    children,
    className,
    component = "label"
  } = props, other = _objectWithoutPropertiesLoose40(props, _excluded42), muiFormControl = useFormControl(), fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), ownerState = _extends50({}, props, {
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  }), classes = useUtilityClasses31(ownerState);
  return /* @__PURE__ */ _jsxs12(FormLabelRoot, _extends50({
    as: component,
    ownerState,
    className: clsx31(classes.root, className),
    ref
  }, other, {
    children: [children, fcs.required && /* @__PURE__ */ _jsxs12(AsteriskComponent, {
      ownerState,
      "aria-hidden": !0,
      className: classes.asterisk,
      children: ["\u2009", "*"]
    })]
  }));
});
FormLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes43.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes43.object,
  /**
   * @ignore
   */
  className: PropTypes43.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: PropTypes43.oneOfType([PropTypes43.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), PropTypes43.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes43.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: PropTypes43.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: PropTypes43.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: PropTypes43.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: PropTypes43.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: PropTypes43.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes43.oneOfType([PropTypes43.arrayOf(PropTypes43.oneOfType([PropTypes43.func, PropTypes43.object, PropTypes43.bool])), PropTypes43.func, PropTypes43.object])
};
var FormLabel_default = FormLabel;

// node_modules/@mui/material/InputLabel/inputLabelClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses34 } from "@mui/utils";
function getInputLabelUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiInputLabel", slot);
}
var inputLabelClasses = generateUtilityClasses34("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);

// node_modules/@mui/material/InputLabel/InputLabel.js
import { jsx as _jsx42 } from "react/jsx-runtime";
var _excluded43 = ["disableAnimation", "margin", "shrink", "variant", "className"], useUtilityClasses32 = (ownerState) => {
  let {
    classes,
    formControl,
    size,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState, slots = {
    root: ["root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size && size !== "normal" && `size${capitalize_default(size)}`, variant],
    asterisk: [required && "asterisk"]
  }, composedClasses = unstable_composeClasses(slots, getInputLabelUtilityClasses, classes);
  return _extends51({}, classes, composedClasses);
}, InputLabelRoot = styled_default(FormLabel_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [{
      [`& .${formLabelClasses_default.asterisk}`]: styles4.asterisk
    }, styles4.root, ownerState.formControl && styles4.formControl, ownerState.size === "small" && styles4.sizeSmall, ownerState.shrink && styles4.shrink, !ownerState.disableAnimation && styles4.animated, ownerState.focused && styles4.focused, styles4[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => _extends51({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, ownerState.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, ownerState.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, ownerState.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !ownerState.disableAnimation && {
  transition: theme.transitions.create(["color", "transform", "max-width"], {
    duration: theme.transitions.duration.shorter,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.variant === "filled" && _extends51({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, ownerState.shrink && _extends51({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), ownerState.variant === "outlined" && _extends51({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, ownerState.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}), ownerState.variant === "standard" && {
  "&:not(label) + div": {
    marginTop: 16
  }
})), InputLabel = /* @__PURE__ */ React55.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    name: "MuiInputLabel",
    props: inProps
  }), {
    disableAnimation = !1,
    shrink: shrinkProp,
    className
  } = props, other = _objectWithoutPropertiesLoose41(props, _excluded43), muiFormControl = useFormControl(), shrink = shrinkProp;
  typeof shrink > "u" && muiFormControl && (shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart);
  let fcs = formControlState({
    props,
    muiFormControl,
    states: ["size", "variant", "required", "focused"]
  }), ownerState = _extends51({}, props, {
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required,
    focused: fcs.focused
  }), classes = useUtilityClasses32(ownerState);
  return /* @__PURE__ */ _jsx42(InputLabelRoot, _extends51({
    "data-shrink": shrink,
    ownerState,
    ref,
    className: clsx32(classes.root, className)
  }, other, {
    classes
  }));
});
InputLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes44.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes44.object,
  /**
   * @ignore
   */
  className: PropTypes44.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: PropTypes44.oneOfType([PropTypes44.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), PropTypes44.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: PropTypes44.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: PropTypes44.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: PropTypes44.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: PropTypes44.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes44.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: PropTypes44.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: PropTypes44.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: PropTypes44.oneOfType([PropTypes44.oneOf(["normal", "small"]), PropTypes44.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes44.oneOfType([PropTypes44.arrayOf(PropTypes44.oneOfType([PropTypes44.func, PropTypes44.object, PropTypes44.bool])), PropTypes44.func, PropTypes44.object]),
  /**
   * The variant to use.
   */
  variant: PropTypes44.oneOf(["filled", "outlined", "standard"])
};
var InputLabel_default = InputLabel;

// node_modules/@mui/material/FormControl/FormControl.js
import _objectWithoutPropertiesLoose42 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends52 from "@babel/runtime/helpers/esm/extends";
import * as React56 from "react";
import PropTypes45 from "prop-types";
import clsx33 from "clsx";

// node_modules/@mui/material/FormControl/formControlClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses35 } from "@mui/utils";
function getFormControlUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiFormControl", slot);
}
var formControlClasses = generateUtilityClasses35("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);

// node_modules/@mui/material/FormControl/FormControl.js
import { jsx as _jsx43 } from "react/jsx-runtime";
var _excluded44 = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], useUtilityClasses33 = (ownerState) => {
  let {
    classes,
    margin,
    fullWidth
  } = ownerState, slots = {
    root: ["root", margin !== "none" && `margin${capitalize_default(margin)}`, fullWidth && "fullWidth"]
  };
  return unstable_composeClasses(slots, getFormControlUtilityClasses, classes);
}, FormControlRoot = styled_default("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles4) => _extends52({}, styles4.root, styles4[`margin${capitalize_default(ownerState.margin)}`], ownerState.fullWidth && styles4.fullWidth)
})(({
  ownerState
}) => _extends52({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, ownerState.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, ownerState.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, ownerState.fullWidth && {
  width: "100%"
})), FormControl = /* @__PURE__ */ React56.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiFormControl"
  }), {
    children,
    className,
    color = "primary",
    component = "div",
    disabled = !1,
    error = !1,
    focused: visuallyFocused,
    fullWidth = !1,
    hiddenLabel = !1,
    margin = "none",
    required = !1,
    size = "medium",
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose42(props, _excluded44), ownerState = _extends52({}, props, {
    color,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin,
    required,
    size,
    variant
  }), classes = useUtilityClasses33(ownerState), [adornedStart, setAdornedStart] = React56.useState(() => {
    let initialAdornedStart = !1;
    return children && React56.Children.forEach(children, (child) => {
      if (!isMuiElement_default(child, ["Input", "Select"]))
        return;
      let input = isMuiElement_default(child, ["Select"]) ? child.props.input : child;
      input && isAdornedStart(input.props) && (initialAdornedStart = !0);
    }), initialAdornedStart;
  }), [filled, setFilled] = React56.useState(() => {
    let initialFilled = !1;
    return children && React56.Children.forEach(children, (child) => {
      isMuiElement_default(child, ["Input", "Select"]) && (isFilled(child.props, !0) || isFilled(child.props.inputProps, !0)) && (initialFilled = !0);
    }), initialFilled;
  }), [focusedState, setFocused] = React56.useState(!1);
  disabled && focusedState && setFocused(!1);
  let focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState, registerEffect;
  {
    let registeredInput = React56.useRef(!1);
    registerEffect = () => (registeredInput.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), registeredInput.current = !0, () => {
      registeredInput.current = !1;
    });
  }
  let childContext = React56.useMemo(() => ({
    adornedStart,
    setAdornedStart,
    color,
    disabled,
    error,
    filled,
    focused,
    fullWidth,
    hiddenLabel,
    size,
    onBlur: () => {
      setFocused(!1);
    },
    onEmpty: () => {
      setFilled(!1);
    },
    onFilled: () => {
      setFilled(!0);
    },
    onFocus: () => {
      setFocused(!0);
    },
    registerEffect,
    required,
    variant
  }), [adornedStart, color, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, required, size, variant]);
  return /* @__PURE__ */ _jsx43(FormControlContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsx43(FormControlRoot, _extends52({
      as: component,
      ownerState,
      className: clsx33(classes.root, className),
      ref
    }, other, {
      children
    }))
  });
});
FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes45.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes45.object,
  /**
   * @ignore
   */
  className: PropTypes45.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes45.oneOfType([PropTypes45.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), PropTypes45.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes45.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: PropTypes45.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: PropTypes45.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: PropTypes45.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes45.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: PropTypes45.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: PropTypes45.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: PropTypes45.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes45.oneOfType([PropTypes45.oneOf(["medium", "small"]), PropTypes45.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes45.oneOfType([PropTypes45.arrayOf(PropTypes45.oneOfType([PropTypes45.func, PropTypes45.object, PropTypes45.bool])), PropTypes45.func, PropTypes45.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes45.oneOf(["filled", "outlined", "standard"])
};
var FormControl_default = FormControl;

// node_modules/@mui/material/FormHelperText/FormHelperText.js
import _objectWithoutPropertiesLoose43 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends53 from "@babel/runtime/helpers/esm/extends";
import * as React57 from "react";
import PropTypes46 from "prop-types";
import clsx34 from "clsx";

// node_modules/@mui/material/FormHelperText/formHelperTextClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses36 } from "@mui/utils";
function getFormHelperTextUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiFormHelperText", slot);
}
var formHelperTextClasses = generateUtilityClasses36("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), formHelperTextClasses_default = formHelperTextClasses;

// node_modules/@mui/material/FormHelperText/FormHelperText.js
import { jsx as _jsx44 } from "react/jsx-runtime";
var _span2, _excluded45 = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], useUtilityClasses34 = (ownerState) => {
  let {
    classes,
    contained,
    size,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState, slots = {
    root: ["root", disabled && "disabled", error && "error", size && `size${capitalize_default(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
  };
  return unstable_composeClasses(slots, getFormHelperTextUtilityClasses, classes);
}, FormHelperTextRoot = styled_default("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.size && styles4[`size${capitalize_default(ownerState.size)}`], ownerState.contained && styles4.contained, ownerState.filled && styles4.filled];
  }
})(({
  theme,
  ownerState
}) => _extends53({
  color: (theme.vars || theme).palette.text.secondary
}, theme.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${formHelperTextClasses_default.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}, ownerState.size === "small" && {
  marginTop: 4
}, ownerState.contained && {
  marginLeft: 14,
  marginRight: 14
})), FormHelperText = /* @__PURE__ */ React57.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiFormHelperText"
  }), {
    children,
    className,
    component = "p"
  } = props, other = _objectWithoutPropertiesLoose43(props, _excluded45), muiFormControl = useFormControl(), fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), ownerState = _extends53({}, props, {
    component,
    contained: fcs.variant === "filled" || fcs.variant === "outlined",
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  }), classes = useUtilityClasses34(ownerState);
  return /* @__PURE__ */ _jsx44(FormHelperTextRoot, _extends53({
    as: component,
    ownerState,
    className: clsx34(classes.root, className),
    ref
  }, other, {
    children: children === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      _span2 || (_span2 = /* @__PURE__ */ _jsx44("span", {
        className: "notranslate",
        children: "\u200B"
      }))
    ) : children
  }));
});
FormHelperText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: PropTypes46.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes46.object,
  /**
   * @ignore
   */
  className: PropTypes46.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes46.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: PropTypes46.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: PropTypes46.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: PropTypes46.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: PropTypes46.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes46.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: PropTypes46.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes46.oneOfType([PropTypes46.arrayOf(PropTypes46.oneOfType([PropTypes46.func, PropTypes46.object, PropTypes46.bool])), PropTypes46.func, PropTypes46.object]),
  /**
   * The variant to use.
   */
  variant: PropTypes46.oneOfType([PropTypes46.oneOf(["filled", "outlined", "standard"]), PropTypes46.string])
};
var FormHelperText_default = FormHelperText;

// node_modules/@mui/material/Select/Select.js
import _extends60 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose50 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React65 from "react";
import PropTypes53 from "prop-types";
import clsx39 from "clsx";
import { deepmerge as deepmerge6 } from "@mui/utils";

// node_modules/@mui/material/Select/SelectInput.js
import _extends59 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose49 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import "@mui/utils";
import * as React63 from "react";
import { isFragment as isFragment3 } from "react-is";
import PropTypes52 from "prop-types";
import clsx38 from "clsx";
import { refType as refType8, unstable_useId as useId2 } from "@mui/utils";

// node_modules/@mui/material/Menu/Menu.js
import _extends57 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose47 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React61 from "react";
import { isFragment as isFragment2 } from "react-is";
import PropTypes50 from "prop-types";
import clsx36 from "clsx";
import { HTMLElementType as HTMLElementType5 } from "@mui/utils";

// node_modules/@mui/material/MenuList/MenuList.js
import _extends54 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose44 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React58 from "react";
import { isFragment } from "react-is";
import PropTypes47 from "prop-types";

// node_modules/@mui/material/utils/getScrollbarSize.js
import { unstable_getScrollbarSize as getScrollbarSize2 } from "@mui/utils";
var getScrollbarSize_default = getScrollbarSize2;

// node_modules/@mui/material/MenuList/MenuList.js
import { jsx as _jsx45 } from "react/jsx-runtime";
var _excluded46 = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function nextItem(list, item, disableListWrap) {
  return list === item ? list.firstChild : item && item.nextElementSibling ? item.nextElementSibling : disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  return list === item ? disableListWrap ? list.firstChild : list.lastChild : item && item.previousElementSibling ? item.previousElementSibling : disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0)
    return !0;
  let text = nextFocus.innerText;
  return text === void 0 && (text = nextFocus.textContent), text = text.trim().toLowerCase(), text.length === 0 ? !1 : textCriteria.repeating ? text[0] === textCriteria.keys[0] : text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = !1, nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : !1);
  for (; nextFocus; ) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce)
        return !1;
      wrappedOnce = !0;
    }
    let nextFocusDisabled = disabledItemsFocusable ? !1 : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled)
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    else
      return nextFocus.focus(), !0;
  }
  return !1;
}
var MenuList = /* @__PURE__ */ React58.forwardRef(function(props, ref) {
  let {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    autoFocus = !1,
    autoFocusItem = !1,
    children,
    className,
    disabledItemsFocusable = !1,
    disableListWrap = !1,
    onKeyDown,
    variant = "selectedMenu"
  } = props, other = _objectWithoutPropertiesLoose44(props, _excluded46), listRef = React58.useRef(null), textCriteriaRef = React58.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  useEnhancedEffect_default(() => {
    autoFocus && listRef.current.focus();
  }, [autoFocus]), React58.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, theme) => {
      let noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        let scrollbarSize = `${getScrollbarSize_default(ownerDocument_default(containerElement))}px`;
        listRef.current.style[theme.direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize, listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }
      return listRef.current;
    }
  }), []);
  let handleKeyDown = (event) => {
    let list = listRef.current, key = event.key, currentFocus = ownerDocument_default(list).activeElement;
    if (key === "ArrowDown")
      event.preventDefault(), moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    else if (key === "ArrowUp")
      event.preventDefault(), moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    else if (key === "Home")
      event.preventDefault(), moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    else if (key === "End")
      event.preventDefault(), moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    else if (key.length === 1) {
      let criteria = textCriteriaRef.current, lowerKey = key.toLowerCase(), currTime = performance.now();
      criteria.keys.length > 0 && (currTime - criteria.lastTime > 500 ? (criteria.keys = [], criteria.repeating = !0, criteria.previousKeyMatched = !0) : criteria.repeating && lowerKey !== criteria.keys[0] && (criteria.repeating = !1)), criteria.lastTime = currTime, criteria.keys.push(lowerKey);
      let keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, !1, disabledItemsFocusable, nextItem, criteria)) ? event.preventDefault() : criteria.previousKeyMatched = !1;
    }
    onKeyDown && onKeyDown(event);
  }, handleRef = useForkRef_default(listRef, ref), activeItemIndex = -1;
  React58.Children.forEach(children, (child, index6) => {
    if (!/* @__PURE__ */ React58.isValidElement(child)) {
      activeItemIndex === index6 && (activeItemIndex += 1, activeItemIndex >= children.length && (activeItemIndex = -1));
      return;
    }
    isFragment(child) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), child.props.disabled || (variant === "selectedMenu" && child.props.selected || activeItemIndex === -1) && (activeItemIndex = index6), activeItemIndex === index6 && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight) && (activeItemIndex += 1, activeItemIndex >= children.length && (activeItemIndex = -1));
  });
  let items = React58.Children.map(children, (child, index6) => {
    if (index6 === activeItemIndex) {
      let newChildProps = {};
      return autoFocusItem && (newChildProps.autoFocus = !0), child.props.tabIndex === void 0 && variant === "selectedMenu" && (newChildProps.tabIndex = 0), /* @__PURE__ */ React58.cloneElement(child, newChildProps);
    }
    return child;
  });
  return /* @__PURE__ */ _jsx45(List_default, _extends54({
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other, {
    children: items
  }));
});
MenuList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: PropTypes47.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: PropTypes47.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: PropTypes47.node,
  /**
   * @ignore
   */
  className: PropTypes47.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: PropTypes47.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: PropTypes47.bool,
  /**
   * @ignore
   */
  onKeyDown: PropTypes47.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: PropTypes47.oneOf(["menu", "selectedMenu"])
};
var MenuList_default = MenuList;

// node_modules/@mui/material/Popover/Popover.js
import _extends56 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose46 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React60 from "react";
import PropTypes49 from "prop-types";
import clsx35 from "clsx";
import { unstable_composeClasses as composeClasses3, useSlotProps as useSlotProps3, isHostComponent as isHostComponent4 } from "@mui/base";
import { chainPropTypes as chainPropTypes5, integerPropType as integerPropType3, elementTypeAcceptingRef as elementTypeAcceptingRef4, refType as refType6, HTMLElementType as HTMLElementType4 } from "@mui/utils";

// node_modules/@mui/material/Grow/Grow.js
import _extends55 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose45 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React59 from "react";
import PropTypes48 from "prop-types";
import { elementAcceptingRef as elementAcceptingRef5 } from "@mui/utils";
import { Transition as Transition3 } from "react-transition-group";
import { jsx as _jsx46 } from "react/jsx-runtime";
var _excluded47 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
var styles3 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, isWebKit154 = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Grow = /* @__PURE__ */ React59.forwardRef(function(props, ref) {
  let {
    addEndListener,
    appear = !0,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition3
  } = props, other = _objectWithoutPropertiesLoose45(props, _excluded47), timer = React59.useRef(), autoTimeout = React59.useRef(), theme = useTheme(), nodeRef = React59.useRef(null), handleRef = useForkRef_default(nodeRef, children.ref, ref), normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      let node = nodeRef.current;
      maybeIsAppearing === void 0 ? callback(node) : callback(node, maybeIsAppearing);
    }
  }, handleEntering = normalizedTransitionCallback(onEntering), handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    let {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    }), duration2;
    timeout === "auto" ? (duration2 = theme.transitions.getAutoHeightDuration(node.clientHeight), autoTimeout.current = duration2) : duration2 = transitionDuration, node.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration2 : duration2 * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(","), onEnter && onEnter(node, isAppearing);
  }), handleEntered = normalizedTransitionCallback(onEntered), handleExiting = normalizedTransitionCallback(onExiting), handleExit = normalizedTransitionCallback((node) => {
    let {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    }), duration2;
    timeout === "auto" ? (duration2 = theme.transitions.getAutoHeightDuration(node.clientHeight), autoTimeout.current = duration2) : duration2 = transitionDuration, node.style.transition = [theme.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme.transitions.create("transform", {
      duration: isWebKit154 ? duration2 : duration2 * 0.666,
      delay: isWebKit154 ? delay : delay || duration2 * 0.333,
      easing: transitionTimingFunction
    })].join(","), node.style.opacity = 0, node.style.transform = getScale(0.75), onExit && onExit(node);
  }), handleExited = normalizedTransitionCallback(onExited), handleAddEndListener = (next) => {
    timeout === "auto" && (timer.current = setTimeout(next, autoTimeout.current || 0)), addEndListener && addEndListener(nodeRef.current, next);
  };
  return React59.useEffect(() => () => {
    clearTimeout(timer.current);
  }, []), /* @__PURE__ */ _jsx46(TransitionComponent, _extends55({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === "auto" ? null : timeout
  }, other, {
    children: (state, childProps) => /* @__PURE__ */ React59.cloneElement(children, _extends55({
      style: _extends55({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === "exited" && !inProp ? "hidden" : void 0
      }, styles3[state], style, children.props.style),
      ref: handleRef
    }, childProps))
  }));
});
Grow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes48.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes48.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef5.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: PropTypes48.oneOfType([PropTypes48.shape({
    enter: PropTypes48.string,
    exit: PropTypes48.string
  }), PropTypes48.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes48.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes48.func,
  /**
   * @ignore
   */
  onEntered: PropTypes48.func,
  /**
   * @ignore
   */
  onEntering: PropTypes48.func,
  /**
   * @ignore
   */
  onExit: PropTypes48.func,
  /**
   * @ignore
   */
  onExited: PropTypes48.func,
  /**
   * @ignore
   */
  onExiting: PropTypes48.func,
  /**
   * @ignore
   */
  style: PropTypes48.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: PropTypes48.oneOfType([PropTypes48.oneOf(["auto"]), PropTypes48.number, PropTypes48.shape({
    appear: PropTypes48.number,
    enter: PropTypes48.number,
    exit: PropTypes48.number
  })])
};
Grow.muiSupportAuto = !0;
var Grow_default = Grow;

// node_modules/@mui/material/Popover/popoverClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses37 } from "@mui/utils";
function getPopoverUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiPopover", slot);
}
var popoverClasses = generateUtilityClasses37("MuiPopover", ["root", "paper"]);

// node_modules/@mui/material/Popover/Popover.js
import { jsx as _jsx47 } from "react/jsx-runtime";
var _excluded48 = ["onEntering"], _excluded210 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], _excluded310 = ["slotProps"];
function getOffsetTop(rect, vertical) {
  let offset = 0;
  return typeof vertical == "number" ? offset = vertical : vertical === "center" ? offset = rect.height / 2 : vertical === "bottom" && (offset = rect.height), offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  return typeof horizontal == "number" ? offset = horizontal : horizontal === "center" ? offset = rect.width / 2 : horizontal === "right" && (offset = rect.width), offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n) => typeof n == "number" ? `${n}px` : n).join(" ");
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl == "function" ? anchorEl() : anchorEl;
}
var useUtilityClasses35 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return composeClasses3({
    root: ["root"],
    paper: ["paper"]
  }, getPopoverUtilityClass, classes);
}, PopoverRoot = styled_default(Modal_default, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({}), PopoverPaper = styled_default(Paper_default, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (props, styles4) => styles4.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Popover = /* @__PURE__ */ React60.forwardRef(function(inProps, ref) {
  var _slotProps$paper, _slots$root, _slots$paper;
  let props = useThemeProps({
    props: inProps,
    name: "MuiPopover"
  }), {
    action: action12,
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition,
    anchorReference = "anchorEl",
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps: PaperPropsProp = {},
    slots,
    slotProps,
    transformOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent = Grow_default,
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps: {
      onEntering
    } = {},
    disableScrollLock = !1
  } = props, TransitionProps = _objectWithoutPropertiesLoose46(props.TransitionProps, _excluded48), other = _objectWithoutPropertiesLoose46(props, _excluded210), externalPaperSlotProps = (_slotProps$paper = slotProps?.paper) != null ? _slotProps$paper : PaperPropsProp, paperRef = React60.useRef(), handlePaperRef = useForkRef_default(paperRef, externalPaperSlotProps.ref), ownerState = _extends56({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    externalPaperSlotProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  }), classes = useUtilityClasses35(ownerState), getAnchorOffset = React60.useCallback(() => {
    if (anchorReference === "anchorPosition")
      return anchorPosition || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.'), anchorPosition;
    let resolvedAnchorEl = resolveAnchorEl(anchorEl), anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument_default(paperRef.current).body, anchorRect = anchorElement.getBoundingClientRect();
    {
      let box = anchorElement.getBoundingClientRect();
      box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]), getTransformOrigin = React60.useCallback((elemRect) => ({
    vertical: getOffsetTop(elemRect, transformOrigin.vertical),
    horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
  }), [transformOrigin.horizontal, transformOrigin.vertical]), getPositioningStyle = React60.useCallback((element) => {
    let elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    }, elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === "none")
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    let anchorOffset = getAnchorOffset(), top = anchorOffset.top - elemTransformOrigin.vertical, left = anchorOffset.left - elemTransformOrigin.horizontal, bottom = top + elemRect.height, right = left + elemRect.width, containerWindow = ownerWindow_default(resolveAnchorEl(anchorEl)), heightThreshold = containerWindow.innerHeight - marginThreshold, widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (marginThreshold !== null && top < marginThreshold) {
      let diff = top - marginThreshold;
      top -= diff, elemTransformOrigin.vertical += diff;
    } else if (marginThreshold !== null && bottom > heightThreshold) {
      let diff = bottom - heightThreshold;
      top -= diff, elemTransformOrigin.vertical += diff;
    }
    if (elemRect.height > heightThreshold && elemRect.height && heightThreshold && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${elemRect.height - heightThreshold}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), marginThreshold !== null && left < marginThreshold) {
      let diff = left - marginThreshold;
      left -= diff, elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      let diff = right - widthThreshold;
      left -= diff, elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]), [isPositioned, setIsPositioned] = React60.useState(open), setPositioningStyles = React60.useCallback(() => {
    let element = paperRef.current;
    if (!element)
      return;
    let positioning = getPositioningStyle(element);
    positioning.top !== null && (element.style.top = positioning.top), positioning.left !== null && (element.style.left = positioning.left), element.style.transformOrigin = positioning.transformOrigin, setIsPositioned(!0);
  }, [getPositioningStyle]);
  React60.useEffect(() => (disableScrollLock && window.addEventListener("scroll", setPositioningStyles), () => window.removeEventListener("scroll", setPositioningStyles)), [anchorEl, disableScrollLock, setPositioningStyles]);
  let handleEntering = (element, isAppearing) => {
    onEntering && onEntering(element, isAppearing), setPositioningStyles();
  }, handleExited = () => {
    setIsPositioned(!1);
  };
  React60.useEffect(() => {
    open && setPositioningStyles();
  }), React60.useImperativeHandle(action12, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]), React60.useEffect(() => {
    if (!open)
      return;
    let handleResize = debounce_default(() => {
      setPositioningStyles();
    }), containerWindow = ownerWindow_default(anchorEl);
    return containerWindow.addEventListener("resize", handleResize), () => {
      handleResize.clear(), containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto && (transitionDuration = void 0);
  let container = containerProp || (anchorEl ? ownerDocument_default(resolveAnchorEl(anchorEl)).body : void 0), RootSlot = (_slots$root = slots?.root) != null ? _slots$root : PopoverRoot, PaperSlot = (_slots$paper = slots?.paper) != null ? _slots$paper : PopoverPaper, paperProps = useSlotProps3({
    elementType: PaperSlot,
    externalSlotProps: _extends56({}, externalPaperSlotProps, {
      style: isPositioned ? externalPaperSlotProps.style : _extends56({}, externalPaperSlotProps.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation,
      ref: handlePaperRef
    },
    ownerState,
    className: clsx35(classes.paper, externalPaperSlotProps?.className)
  }), _useSlotProps = useSlotProps3({
    elementType: RootSlot,
    externalSlotProps: slotProps?.root || {},
    externalForwardedProps: other,
    additionalProps: {
      ref,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container,
      open
    },
    ownerState,
    className: clsx35(classes.root, className)
  }), {
    slotProps: rootSlotPropsProp
  } = _useSlotProps, rootProps = _objectWithoutPropertiesLoose46(_useSlotProps, _excluded310);
  return /* @__PURE__ */ _jsx47(RootSlot, _extends56({}, rootProps, !isHostComponent4(RootSlot) && {
    slotProps: rootSlotPropsProp,
    disableScrollLock
  }, {
    children: /* @__PURE__ */ _jsx47(TransitionComponent, _extends56({
      appear: !0,
      in: open,
      onEntering: handleEntering,
      onExited: handleExited,
      timeout: transitionDuration
    }, TransitionProps, {
      children: /* @__PURE__ */ _jsx47(PaperSlot, _extends56({}, paperProps, {
        children
      }))
    }))
  }));
});
Popover.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: refType6,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: chainPropTypes5(PropTypes49.oneOfType([HTMLElementType4, PropTypes49.func]), (props) => {
    if (props.open && (!props.anchorReference || props.anchorReference === "anchorEl")) {
      let resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        let box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${resolvedAnchorEl}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: PropTypes49.shape({
    horizontal: PropTypes49.oneOfType([PropTypes49.oneOf(["center", "left", "right"]), PropTypes49.number]).isRequired,
    vertical: PropTypes49.oneOfType([PropTypes49.oneOf(["bottom", "center", "top"]), PropTypes49.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: PropTypes49.shape({
    left: PropTypes49.number.isRequired,
    top: PropTypes49.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: PropTypes49.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: PropTypes49.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes49.object,
  /**
   * @ignore
   */
  className: PropTypes49.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes49.oneOfType([HTMLElementType4, PropTypes49.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: PropTypes49.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: integerPropType3,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: PropTypes49.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: PropTypes49.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes49.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: PropTypes49.shape({
    component: elementTypeAcceptingRef4
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: PropTypes49.shape({
    paper: PropTypes49.oneOfType([PropTypes49.func, PropTypes49.object]),
    root: PropTypes49.oneOfType([PropTypes49.func, PropTypes49.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: PropTypes49.shape({
    paper: PropTypes49.elementType,
    root: PropTypes49.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes49.oneOfType([PropTypes49.arrayOf(PropTypes49.oneOfType([PropTypes49.func, PropTypes49.object, PropTypes49.bool])), PropTypes49.func, PropTypes49.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: PropTypes49.shape({
    horizontal: PropTypes49.oneOfType([PropTypes49.oneOf(["center", "left", "right"]), PropTypes49.number]).isRequired,
    vertical: PropTypes49.oneOfType([PropTypes49.oneOf(["bottom", "center", "top"]), PropTypes49.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: PropTypes49.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: PropTypes49.oneOfType([PropTypes49.oneOf(["auto"]), PropTypes49.number, PropTypes49.shape({
    appear: PropTypes49.number,
    enter: PropTypes49.number,
    exit: PropTypes49.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: PropTypes49.object
};
var Popover_default = Popover;

// node_modules/@mui/material/Menu/menuClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses38 } from "@mui/utils";
function getMenuUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiMenu", slot);
}
var menuClasses = generateUtilityClasses38("MuiMenu", ["root", "paper", "list"]);

// node_modules/@mui/material/Menu/Menu.js
import { jsx as _jsx48 } from "react/jsx-runtime";
var _excluded49 = ["onEntering"], _excluded211 = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
}, LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
}, useUtilityClasses36 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, getMenuUtilityClass, classes);
}, MenuRoot = styled_default(Popover_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({}), MenuPaper = styled_default(PopoverPaper, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (props, styles4) => styles4.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), MenuMenuList = styled_default(MenuList_default, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (props, styles4) => styles4.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Menu = /* @__PURE__ */ React61.forwardRef(function(inProps, ref) {
  var _slots$paper, _slotProps$paper;
  let props = useThemeProps({
    props: inProps,
    name: "MuiMenu"
  }), {
    autoFocus = !0,
    children,
    className,
    disableAutoFocusItem = !1,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = "auto",
    TransitionProps: {
      onEntering
    } = {},
    variant = "selectedMenu",
    slots = {},
    slotProps = {}
  } = props, TransitionProps = _objectWithoutPropertiesLoose47(props.TransitionProps, _excluded49), other = _objectWithoutPropertiesLoose47(props, _excluded211), theme = useTheme(), isRtl = theme.direction === "rtl", ownerState = _extends57({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  }), classes = useUtilityClasses36(ownerState), autoFocusItem = autoFocus && !disableAutoFocusItem && open, menuListActionsRef = React61.useRef(null), handleEntering = (element, isAppearing) => {
    menuListActionsRef.current && menuListActionsRef.current.adjustStyleForScrollbar(element, theme), onEntering && onEntering(element, isAppearing);
  }, handleListKeyDown = (event) => {
    event.key === "Tab" && (event.preventDefault(), onClose && onClose(event, "tabKeyDown"));
  }, activeItemIndex = -1;
  React61.Children.map(children, (child, index6) => {
    /* @__PURE__ */ React61.isValidElement(child) && (isFragment2(child) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), child.props.disabled || (variant === "selectedMenu" && child.props.selected || activeItemIndex === -1) && (activeItemIndex = index6));
  });
  let PaperSlot = (_slots$paper = slots.paper) != null ? _slots$paper : MenuPaper, paperExternalSlotProps = (_slotProps$paper = slotProps.paper) != null ? _slotProps$paper : PaperProps, rootSlotProps = useSlotProps({
    elementType: slots.root,
    externalSlotProps: slotProps.root,
    ownerState,
    className: [classes.root, className]
  }), paperSlotProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: paperExternalSlotProps,
    ownerState,
    className: classes.paper
  });
  return /* @__PURE__ */ _jsx48(MenuRoot, _extends57({
    onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: isRtl ? "right" : "left"
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    slots: {
      paper: PaperSlot,
      root: slots.root
    },
    slotProps: {
      root: rootSlotProps,
      paper: paperSlotProps
    },
    open,
    ref,
    transitionDuration,
    TransitionProps: _extends57({
      onEntering: handleEntering
    }, TransitionProps),
    ownerState
  }, other, {
    classes: PopoverClasses,
    children: /* @__PURE__ */ _jsx48(MenuMenuList, _extends57({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant
    }, MenuListProps, {
      className: clsx36(classes.list, MenuListProps.className),
      children
    }))
  }));
});
Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: PropTypes50.oneOfType([HTMLElementType5, PropTypes50.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: PropTypes50.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: PropTypes50.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes50.object,
  /**
   * @ignore
   */
  className: PropTypes50.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: PropTypes50.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: PropTypes50.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: PropTypes50.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes50.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: PropTypes50.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: PropTypes50.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: PropTypes50.shape({
    paper: PropTypes50.oneOfType([PropTypes50.func, PropTypes50.object]),
    root: PropTypes50.oneOfType([PropTypes50.func, PropTypes50.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: PropTypes50.shape({
    paper: PropTypes50.elementType,
    root: PropTypes50.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes50.oneOfType([PropTypes50.arrayOf(PropTypes50.oneOfType([PropTypes50.func, PropTypes50.object, PropTypes50.bool])), PropTypes50.func, PropTypes50.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: PropTypes50.oneOfType([PropTypes50.oneOf(["auto"]), PropTypes50.number, PropTypes50.shape({
    appear: PropTypes50.number,
    enter: PropTypes50.number,
    exit: PropTypes50.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: PropTypes50.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: PropTypes50.oneOf(["menu", "selectedMenu"])
};
var Menu_default = Menu;

// node_modules/@mui/material/NativeSelect/NativeSelectInput.js
import _objectWithoutPropertiesLoose48 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends58 from "@babel/runtime/helpers/esm/extends";
import * as React62 from "react";
import PropTypes51 from "prop-types";
import clsx37 from "clsx";
import { refType as refType7 } from "@mui/utils";

// node_modules/@mui/material/NativeSelect/nativeSelectClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses39 } from "@mui/utils";
function getNativeSelectUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiNativeSelect", slot);
}
var nativeSelectClasses = generateUtilityClasses39("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), nativeSelectClasses_default = nativeSelectClasses;

// node_modules/@mui/material/NativeSelect/NativeSelectInput.js
import { jsx as _jsx49 } from "react/jsx-runtime";
import { jsxs as _jsxs13 } from "react/jsx-runtime";
var _excluded50 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], useUtilityClasses37 = (ownerState) => {
  let {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState, slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize_default(variant)}`, open && "iconOpen", disabled && "disabled"]
  };
  return unstable_composeClasses(slots, getNativeSelectUtilityClasses, classes);
}, nativeSelectSelectStyles = ({
  ownerState,
  theme
}) => _extends58({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": _extends58({}, theme.vars ? {
    backgroundColor: `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${nativeSelectClasses_default.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, ownerState.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, ownerState.variant === "outlined" && {
  borderRadius: (theme.vars || theme).shape.borderRadius,
  "&:focus": {
    borderRadius: (theme.vars || theme).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), NativeSelectSelect = styled_default("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: rootShouldForwardProp,
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.select, styles4[ownerState.variant], ownerState.error && styles4.error, {
      [`&.${nativeSelectClasses_default.multiple}`]: styles4.multiple
    }];
  }
})(nativeSelectSelectStyles), nativeSelectIconStyles = ({
  ownerState,
  theme
}) => _extends58({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (theme.vars || theme).palette.action.active,
  [`&.${nativeSelectClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}, ownerState.open && {
  transform: "rotate(180deg)"
}, ownerState.variant === "filled" && {
  right: 7
}, ownerState.variant === "outlined" && {
  right: 7
}), NativeSelectIcon = styled_default("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.icon, ownerState.variant && styles4[`icon${capitalize_default(ownerState.variant)}`], ownerState.open && styles4.iconOpen];
  }
})(nativeSelectIconStyles), NativeSelectInput = /* @__PURE__ */ React62.forwardRef(function(props, ref) {
  let {
    className,
    disabled,
    error,
    IconComponent,
    inputRef,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose48(props, _excluded50), ownerState = _extends58({}, props, {
    disabled,
    variant,
    error
  }), classes = useUtilityClasses37(ownerState);
  return /* @__PURE__ */ _jsxs13(React62.Fragment, {
    children: [/* @__PURE__ */ _jsx49(NativeSelectSelect, _extends58({
      ownerState,
      className: clsx37(classes.select, className),
      disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : /* @__PURE__ */ _jsx49(NativeSelectIcon, {
      as: IconComponent,
      ownerState,
      className: classes.icon
    })]
  });
});
NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: PropTypes51.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes51.object,
  /**
   * The CSS class name of the select element.
   */
  className: PropTypes51.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: PropTypes51.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: PropTypes51.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes51.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: refType7,
  /**
   * @ignore
   */
  multiple: PropTypes51.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes51.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes51.func,
  /**
   * The input value.
   */
  value: PropTypes51.any,
  /**
   * The variant to use.
   */
  variant: PropTypes51.oneOf(["standard", "outlined", "filled"])
};
var NativeSelectInput_default = NativeSelectInput;

// node_modules/@mui/material/Select/selectClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses40 } from "@mui/utils";
function getSelectUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiSelect", slot);
}
var selectClasses = generateUtilityClasses40("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), selectClasses_default = selectClasses;

// node_modules/@mui/material/Select/SelectInput.js
import { jsx as _jsx50 } from "react/jsx-runtime";
import { jsxs as _jsxs14 } from "react/jsx-runtime";
var _span3, _excluded51 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], SelectSelect = styled_default("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [
      // Win specificity over the input base
      {
        [`&.${selectClasses_default.select}`]: styles4.select
      },
      {
        [`&.${selectClasses_default.select}`]: styles4[ownerState.variant]
      },
      {
        [`&.${selectClasses_default.error}`]: styles4.error
      },
      {
        [`&.${selectClasses_default.multiple}`]: styles4.multiple
      }
    ];
  }
})(nativeSelectSelectStyles, {
  // Win specificity over the input base
  [`&.${selectClasses_default.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), SelectIcon = styled_default("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.icon, ownerState.variant && styles4[`icon${capitalize_default(ownerState.variant)}`], ownerState.open && styles4.iconOpen];
  }
})(nativeSelectIconStyles), SelectNativeInput = styled_default("input", {
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (props, styles4) => styles4.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function areEqualValues(a, b) {
  return typeof b == "object" && b !== null ? a === b : String(a) === String(b);
}
function isEmpty(display) {
  return display == null || typeof display == "string" && !display.trim();
}
var useUtilityClasses38 = (ownerState) => {
  let {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState, slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize_default(variant)}`, open && "iconOpen", disabled && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return unstable_composeClasses(slots, getSelectUtilityClasses, classes);
}, SelectInput = /* @__PURE__ */ React63.forwardRef(function(props, ref) {
  var _MenuProps$slotProps;
  let {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    autoFocus,
    autoWidth,
    children,
    className,
    defaultOpen,
    defaultValue,
    disabled,
    displayEmpty,
    error = !1,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    value: valueProp,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose49(props, _excluded51), [value, setValueState] = useControlled_default({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  }), [openState, setOpenState] = useControlled_default({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  }), inputRef = React63.useRef(null), displayRef = React63.useRef(null), [displayNode, setDisplayNode] = React63.useState(null), {
    current: isOpenControlled
  } = React63.useRef(openProp != null), [menuMinWidthState, setMenuMinWidthState] = React63.useState(), handleRef = useForkRef_default(ref, inputRefProp), handleDisplayRef = React63.useCallback((node) => {
    displayRef.current = node, node && setDisplayNode(node);
  }, []), anchorElement = displayNode?.parentNode;
  React63.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]), React63.useEffect(() => {
    defaultOpen && openState && displayNode && !isOpenControlled && (setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth), displayRef.current.focus());
  }, [displayNode, autoWidth]), React63.useEffect(() => {
    autoFocus && displayRef.current.focus();
  }, [autoFocus]), React63.useEffect(() => {
    if (!labelId)
      return;
    let label = ownerDocument_default(displayRef.current).getElementById(labelId);
    if (label) {
      let handler = () => {
        getSelection().isCollapsed && displayRef.current.focus();
      };
      return label.addEventListener("click", handler), () => {
        label.removeEventListener("click", handler);
      };
    }
  }, [labelId]);
  let update = (open2, event) => {
    open2 ? onOpen && onOpen(event) : onClose && onClose(event), isOpenControlled || (setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth), setOpenState(open2));
  }, handleMouseDown = (event) => {
    event.button === 0 && (event.preventDefault(), displayRef.current.focus(), update(!0, event));
  }, handleClose = (event) => {
    update(!1, event);
  }, childrenArray = React63.Children.toArray(children), handleChange = (event) => {
    let child = childrenArray.find((childItem) => childItem.props.value === event.target.value);
    child !== void 0 && (setValueState(child.props.value), onChange && onChange(event, child));
  }, handleItemClick = (child) => (event) => {
    let newValue;
    if (event.currentTarget.hasAttribute("tabindex")) {
      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        let itemIndex = value.indexOf(child.props.value);
        itemIndex === -1 ? newValue.push(child.props.value) : newValue.splice(itemIndex, 1);
      } else
        newValue = child.props.value;
      if (child.props.onClick && child.props.onClick(event), value !== newValue && (setValueState(newValue), onChange)) {
        let nativeEvent = event.nativeEvent || event, clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, "target", {
          writable: !0,
          value: {
            value: newValue,
            name
          }
        }), onChange(clonedEvent, child);
      }
      multiple || update(!1, event);
    }
  }, handleKeyDown = (event) => {
    readOnly || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(event.key) !== -1 && (event.preventDefault(), update(!0, event));
  }, open = displayNode !== null && openState, handleBlur = (event) => {
    !open && onBlur && (Object.defineProperty(event, "target", {
      writable: !0,
      value: {
        value,
        name
      }
    }), onBlur(event));
  };
  delete other["aria-invalid"];
  let display, displaySingle, displayMultiple = [], computeDisplay = !1, foundMatch = !1;
  (isFilled({
    value
  }) || displayEmpty) && (renderValue ? display = renderValue(value) : computeDisplay = !0);
  let items = childrenArray.map((child) => {
    if (!/* @__PURE__ */ React63.isValidElement(child))
      return null;
    isFragment3(child) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let selected;
    if (multiple) {
      if (!Array.isArray(value))
        throw new Error("MUI: The `value` prop must be an array when using the `Select` component with `multiple`.");
      selected = value.some((v) => areEqualValues(v, child.props.value)), selected && computeDisplay && displayMultiple.push(child.props.children);
    } else
      selected = areEqualValues(value, child.props.value), selected && computeDisplay && (displaySingle = child.props.children);
    return selected && (foundMatch = !0), /* @__PURE__ */ React63.cloneElement(child, {
      "aria-selected": selected ? "true" : "false",
      onClick: handleItemClick(child),
      onKeyUp: (event) => {
        event.key === " " && event.preventDefault(), child.props.onKeyUp && child.props.onKeyUp(event);
      },
      role: "option",
      selected,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": child.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  React63.useEffect(() => {
    if (!foundMatch && !multiple && value !== "") {
      let values = childrenArray.map((child) => child.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${value}\` for the select ${name ? `(name="${name}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${values.filter((x) => x != null).map((x) => `\`${x}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [foundMatch, childrenArray, multiple, name, value]), computeDisplay && (multiple ? displayMultiple.length === 0 ? display = null : display = displayMultiple.reduce((output, child, index6) => (output.push(child), index6 < displayMultiple.length - 1 && output.push(", "), output), []) : display = displaySingle);
  let menuMinWidth = menuMinWidthState;
  !autoWidth && isOpenControlled && displayNode && (menuMinWidth = anchorElement.clientWidth);
  let tabIndex;
  typeof tabIndexProp < "u" ? tabIndex = tabIndexProp : tabIndex = disabled ? null : 0;
  let buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : void 0), ownerState = _extends59({}, props, {
    variant,
    value,
    open,
    error
  }), classes = useUtilityClasses38(ownerState), paperProps = _extends59({}, MenuProps.PaperProps, (_MenuProps$slotProps = MenuProps.slotProps) == null ? void 0 : _MenuProps$slotProps.paper), listboxId = useId2(), hiddenInputId = useId2();
  return /* @__PURE__ */ _jsxs14(React63.Fragment, {
    children: [/* @__PURE__ */ _jsx50(SelectSelect, _extends59({
      ref: handleDisplayRef,
      tabIndex,
      role: "combobox",
      "aria-controls": listboxId,
      "aria-disabled": disabled ? "true" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
      "aria-describedby": ariaDescribedby,
      onKeyDown: handleKeyDown,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus
    }, SelectDisplayProps, {
      ownerState,
      className: clsx38(SelectDisplayProps.className, classes.select, className),
      id: buttonId,
      children: isEmpty(display) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span3 || (_span3 = /* @__PURE__ */ _jsx50("span", {
          className: "notranslate",
          children: "\u200B"
        }))
      ) : display
    })), /* @__PURE__ */ _jsx50(SelectNativeInput, _extends59({
      "aria-invalid": error,
      value: Array.isArray(value) ? value.join(",") : value,
      name: name ?? hiddenInputId,
      ref: inputRef,
      "aria-hidden": !0,
      onChange: handleChange,
      tabIndex: -1,
      disabled,
      className: classes.nativeInput,
      autoFocus,
      ownerState
    }, other)), /* @__PURE__ */ _jsx50(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), /* @__PURE__ */ _jsx50(Menu_default, _extends59({
      id: `menu-${name || ""}`,
      anchorEl: anchorElement,
      open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, MenuProps, {
      MenuListProps: _extends59({
        "aria-labelledby": labelId,
        role: "listbox",
        "aria-multiselectable": multiple ? "true" : void 0,
        disableListWrap: !0,
        id: listboxId
      }, MenuProps.MenuListProps),
      slotProps: _extends59({}, MenuProps.slotProps, {
        paper: _extends59({}, paperProps, {
          style: _extends59({
            minWidth: menuMinWidth
          }, paperProps != null ? paperProps.style : null)
        })
      }),
      children: items
    }))]
  });
});
SelectInput.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": PropTypes52.string,
  /**
   * @ignore
   */
  "aria-label": PropTypes52.string,
  /**
   * @ignore
   */
  autoFocus: PropTypes52.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: PropTypes52.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: PropTypes52.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes52.object,
  /**
   * The CSS class name of the select element.
   */
  className: PropTypes52.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: PropTypes52.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes52.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: PropTypes52.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: PropTypes52.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: PropTypes52.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes52.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: refType8,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: PropTypes52.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: PropTypes52.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: PropTypes52.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes52.string,
  /**
   * @ignore
   */
  onBlur: PropTypes52.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: PropTypes52.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes52.func,
  /**
   * @ignore
   */
  onFocus: PropTypes52.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: PropTypes52.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes52.bool,
  /**
   * @ignore
   */
  readOnly: PropTypes52.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: PropTypes52.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: PropTypes52.object,
  /**
   * @ignore
   */
  tabIndex: PropTypes52.oneOfType([PropTypes52.number, PropTypes52.string]),
  /**
   * @ignore
   */
  type: PropTypes52.any,
  /**
   * The input value.
   */
  value: PropTypes52.any,
  /**
   * The variant to use.
   */
  variant: PropTypes52.oneOf(["standard", "outlined", "filled"])
};
var SelectInput_default = SelectInput;

// node_modules/@mui/material/internal/svg-icons/ArrowDropDown.js
import "react";
import { jsx as _jsx51 } from "react/jsx-runtime";
var ArrowDropDown_default = createSvgIcon(/* @__PURE__ */ _jsx51("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");

// node_modules/@mui/material/Select/Select.js
import { jsx as _jsx52 } from "react/jsx-runtime";
var _excluded52 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], _excluded212 = ["root"], useUtilityClasses39 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return classes;
}, styledRootConfig = {
  name: "MuiSelect",
  overridesResolver: (props, styles4) => styles4.root,
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant",
  slot: "Root"
}, StyledInput = styled_default(Input_default, styledRootConfig)(""), StyledOutlinedInput = styled_default(OutlinedInput_default, styledRootConfig)(""), StyledFilledInput = styled_default(FilledInput_default, styledRootConfig)(""), Select = /* @__PURE__ */ React65.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    name: "MuiSelect",
    props: inProps
  }), {
    autoWidth = !1,
    children,
    classes: classesProp = {},
    className,
    defaultOpen = !1,
    displayEmpty = !1,
    IconComponent = ArrowDropDown_default,
    id,
    input,
    inputProps,
    label,
    labelId,
    MenuProps,
    multiple = !1,
    native = !1,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProp = "outlined"
  } = props, other = _objectWithoutPropertiesLoose50(props, _excluded52), inputComponent = native ? NativeSelectInput_default : SelectInput_default, muiFormControl = useFormControl(), fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "error"]
  }), variant = fcs.variant || variantProp, ownerState = _extends60({}, props, {
    variant,
    classes: classesProp
  }), classes = useUtilityClasses39(ownerState), restOfClasses = _objectWithoutPropertiesLoose50(classes, _excluded212), InputComponent = input || {
    standard: /* @__PURE__ */ _jsx52(StyledInput, {
      ownerState
    }),
    outlined: /* @__PURE__ */ _jsx52(StyledOutlinedInput, {
      label,
      ownerState
    }),
    filled: /* @__PURE__ */ _jsx52(StyledFilledInput, {
      ownerState
    })
  }[variant], inputComponentRef = useForkRef_default(ref, InputComponent.ref);
  return /* @__PURE__ */ _jsx52(React65.Fragment, {
    children: /* @__PURE__ */ React65.cloneElement(InputComponent, _extends60({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: _extends60({
        children,
        error: fcs.error,
        IconComponent,
        variant,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple
      }, native ? {
        id
      } : {
        autoWidth,
        defaultOpen,
        displayEmpty,
        labelId,
        MenuProps,
        onClose,
        onOpen,
        open,
        renderValue,
        SelectDisplayProps: _extends60({
          id
        }, SelectDisplayProps)
      }, inputProps, {
        classes: inputProps ? deepmerge6(restOfClasses, inputProps.classes) : restOfClasses
      }, input ? input.props.inputProps : {})
    }, multiple && native && variant === "outlined" ? {
      notched: !0
    } : {}, {
      ref: inputComponentRef,
      className: clsx39(InputComponent.props.className, className, classes.root)
    }, !input && {
      variant
    }, other))
  });
});
Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: PropTypes53.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: PropTypes53.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: PropTypes53.object,
  /**
   * @ignore
   */
  className: PropTypes53.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: PropTypes53.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes53.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: PropTypes53.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: PropTypes53.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: PropTypes53.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: PropTypes53.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: PropTypes53.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: PropTypes53.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: PropTypes53.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: PropTypes53.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: PropTypes53.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: PropTypes53.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: PropTypes53.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes53.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: PropTypes53.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: PropTypes53.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: PropTypes53.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: PropTypes53.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes53.oneOfType([PropTypes53.arrayOf(PropTypes53.oneOfType([PropTypes53.func, PropTypes53.object, PropTypes53.bool])), PropTypes53.func, PropTypes53.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: PropTypes53.oneOfType([PropTypes53.oneOf([""]), PropTypes53.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes53.oneOf(["filled", "outlined", "standard"])
};
Select.muiName = "Select";
var Select_default = Select;

// node_modules/@mui/material/TextField/textFieldClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses41 } from "@mui/utils";
function getTextFieldUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTextField", slot);
}
var textFieldClasses = generateUtilityClasses41("MuiTextField", ["root"]);

// node_modules/@mui/material/TextField/TextField.js
import { jsx as _jsx53 } from "react/jsx-runtime";
import { jsxs as _jsxs15 } from "react/jsx-runtime";
var _excluded53 = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], variantComponent = {
  standard: Input_default,
  filled: FilledInput_default,
  outlined: OutlinedInput_default
}, useUtilityClasses40 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root"]
  }, getTextFieldUtilityClass, classes);
}, TextFieldRoot = styled_default(FormControl_default, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({}), TextField = /* @__PURE__ */ React66.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTextField"
  }), {
    autoComplete,
    autoFocus = !1,
    children,
    className,
    color = "primary",
    defaultValue,
    disabled = !1,
    error = !1,
    FormHelperTextProps,
    fullWidth = !1,
    helperText,
    id: idOverride,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = !1,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = !1,
    rows,
    select = !1,
    SelectProps,
    type,
    value,
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose51(props, _excluded53), ownerState = _extends61({}, props, {
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  }), classes = useUtilityClasses40(ownerState);
  select && !children && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  let InputMore = {};
  variant === "outlined" && (InputLabelProps && typeof InputLabelProps.shrink < "u" && (InputMore.notched = InputLabelProps.shrink), InputMore.label = label), select && ((!SelectProps || !SelectProps.native) && (InputMore.id = void 0), InputMore["aria-describedby"] = void 0);
  let id = useId3(idOverride), helperTextId = helperText && id ? `${id}-helper-text` : void 0, inputLabelId = label && id ? `${id}-label` : void 0, InputComponent = variantComponent[variant], InputElement = /* @__PURE__ */ _jsx53(InputComponent, _extends61({
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name,
    rows,
    maxRows,
    minRows,
    type,
    value,
    id,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps
  }, InputMore, InputProps));
  return /* @__PURE__ */ _jsxs15(TextFieldRoot, _extends61({
    className: clsx40(classes.root, className),
    disabled,
    error,
    fullWidth,
    ref,
    required,
    color,
    variant,
    ownerState
  }, other, {
    children: [label != null && label !== "" && /* @__PURE__ */ _jsx53(InputLabel_default, _extends61({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? /* @__PURE__ */ _jsx53(Select_default, _extends61({
      "aria-describedby": helperTextId,
      id,
      labelId: inputLabelId,
      value,
      input: InputElement
    }, SelectProps, {
      children
    })) : InputElement, helperText && /* @__PURE__ */ _jsx53(FormHelperText_default, _extends61({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
TextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes54.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: PropTypes54.bool,
  /**
   * @ignore
   */
  children: PropTypes54.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes54.object,
  /**
   * @ignore
   */
  className: PropTypes54.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes54.oneOfType([PropTypes54.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), PropTypes54.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes54.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes54.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: PropTypes54.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: PropTypes54.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes54.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes54.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: PropTypes54.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: PropTypes54.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: PropTypes54.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: PropTypes54.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType9,
  /**
   * The label content.
   */
  label: PropTypes54.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: PropTypes54.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes54.oneOfType([PropTypes54.number, PropTypes54.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes54.oneOfType([PropTypes54.number, PropTypes54.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: PropTypes54.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes54.string,
  /**
   * @ignore
   */
  onBlur: PropTypes54.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes54.func,
  /**
   * @ignore
   */
  onFocus: PropTypes54.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes54.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: PropTypes54.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes54.oneOfType([PropTypes54.number, PropTypes54.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: PropTypes54.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: PropTypes54.object,
  /**
   * The size of the component.
   */
  size: PropTypes54.oneOfType([PropTypes54.oneOf(["medium", "small"]), PropTypes54.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes54.oneOfType([PropTypes54.arrayOf(PropTypes54.oneOfType([PropTypes54.func, PropTypes54.object, PropTypes54.bool])), PropTypes54.func, PropTypes54.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: PropTypes54.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes54.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes54.oneOf(["filled", "outlined", "standard"])
};
var TextField_default = TextField;

// node_modules/@mui/material/Autocomplete/Autocomplete.js
import _objectWithoutPropertiesLoose56 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends66 from "@babel/runtime/helpers/esm/extends";
import * as React73 from "react";
import PropTypes59 from "prop-types";
import clsx43 from "clsx";
import { chainPropTypes as chainPropTypes7, integerPropType as integerPropType4 } from "@mui/utils";
import { unstable_composeClasses as composeClasses4, useAutocomplete, createFilterOptions } from "@mui/base";
import { alpha as alpha11 } from "@mui/system";

// node_modules/@mui/material/Popper/Popper.js
import _extends63 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose53 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

// node_modules/@mui/base/Popper/Popper.js
import _extends62 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose52 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React67 from "react";
import { chainPropTypes as chainPropTypes6, HTMLElementType as HTMLElementType6, refType as refType10, unstable_ownerDocument as ownerDocument5, unstable_useEnhancedEffect as useEnhancedEffect3, unstable_useForkRef as useForkRef6 } from "@mui/utils";
import { createPopper } from "@popperjs/core";
import PropTypes55 from "prop-types";

// node_modules/@mui/base/generateUtilityClass/index.js
import { unstable_generateUtilityClass as unstable_generateUtilityClass2 } from "@mui/utils";

// node_modules/@mui/base/generateUtilityClasses/index.js
import { unstable_generateUtilityClasses } from "@mui/utils";

// node_modules/@mui/base/Popper/popperClasses.js
function getPopperUtilityClass(slot) {
  return unstable_generateUtilityClass2("MuiPopper", slot);
}
var popperClasses = unstable_generateUtilityClasses("MuiPopper", ["root"]);

// node_modules/@mui/base/Popper/Popper.js
import { jsx as _jsx54 } from "react/jsx-runtime";
var _excluded54 = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], _excluded213 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function flipPlacement(placement, direction) {
  if (direction === "ltr")
    return placement;
  switch (placement) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return placement;
  }
}
function resolveAnchorEl2(anchorEl) {
  return typeof anchorEl == "function" ? anchorEl() : anchorEl;
}
function isHTMLElement(element) {
  return element.nodeType !== void 0;
}
function isVirtualElement(element) {
  return !isHTMLElement(element);
}
var useUtilityClasses41 = () => unstable_composeClasses({
  root: ["root"]
}, useClassNamesOverride(getPopperUtilityClass)), defaultPopperOptions = {}, PopperTooltip = /* @__PURE__ */ React67.forwardRef(function(props, forwardedRef) {
  var _slots$root;
  let {
    anchorEl,
    children,
    direction,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    slotProps = {},
    slots = {},
    TransitionProps
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = props, other = _objectWithoutPropertiesLoose52(props, _excluded54), tooltipRef = React67.useRef(null), ownRef = useForkRef6(tooltipRef, forwardedRef), popperRef = React67.useRef(null), handlePopperRef = useForkRef6(popperRef, popperRefProp), handlePopperRefRef = React67.useRef(handlePopperRef);
  useEnhancedEffect3(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]), React67.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  let rtlPlacement = flipPlacement(initialPlacement, direction), [placement, setPlacement] = React67.useState(rtlPlacement), [resolvedAnchorElement, setResolvedAnchorElement] = React67.useState(resolveAnchorEl2(anchorEl));
  React67.useEffect(() => {
    popperRef.current && popperRef.current.forceUpdate();
  }), React67.useEffect(() => {
    anchorEl && setResolvedAnchorElement(resolveAnchorEl2(anchorEl));
  }, [anchorEl]), useEnhancedEffect3(() => {
    if (!resolvedAnchorElement || !open)
      return;
    let handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };
    if (resolvedAnchorElement && isHTMLElement(resolvedAnchorElement) && resolvedAnchorElement.nodeType === 1) {
      let box = resolvedAnchorElement.getBoundingClientRect();
      box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let popperModifiers = [{
      name: "preventOverflow",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "flip",
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    modifiers != null && (popperModifiers = popperModifiers.concat(modifiers)), popperOptions && popperOptions.modifiers != null && (popperModifiers = popperModifiers.concat(popperOptions.modifiers));
    let popper = createPopper(resolvedAnchorElement, tooltipRef.current, _extends62({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    return handlePopperRefRef.current(popper), () => {
      popper.destroy(), handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  let childProps = {
    placement
  };
  TransitionProps !== null && (childProps.TransitionProps = TransitionProps);
  let classes = useUtilityClasses41(), Root = (_slots$root = slots.root) != null ? _slots$root : "div", rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: "tooltip",
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return /* @__PURE__ */ _jsx54(Root, _extends62({}, rootProps, {
    children: typeof children == "function" ? children(childProps) : children
  }));
}), Popper = /* @__PURE__ */ React67.forwardRef(function(props, forwardedRef) {
  let {
    anchorEl,
    children,
    container: containerProp,
    direction = "ltr",
    disablePortal = !1,
    keepMounted = !1,
    modifiers,
    open,
    placement = "bottom",
    popperOptions = defaultPopperOptions,
    popperRef,
    style,
    transition = !1,
    slotProps = {},
    slots = {}
  } = props, other = _objectWithoutPropertiesLoose52(props, _excluded213), [exited, setExited] = React67.useState(!0), handleEnter = () => {
    setExited(!1);
  }, handleExited = () => {
    setExited(!0);
  };
  if (!keepMounted && !open && (!transition || exited))
    return null;
  let container;
  if (containerProp)
    container = containerProp;
  else if (anchorEl) {
    let resolvedAnchorEl = resolveAnchorEl2(anchorEl);
    container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? ownerDocument5(resolvedAnchorEl).body : ownerDocument5(null).body;
  }
  let display = !open && keepMounted && (!transition || exited) ? "none" : void 0, transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : void 0;
  return /* @__PURE__ */ _jsx54(Portal, {
    disablePortal,
    container,
    children: /* @__PURE__ */ _jsx54(PopperTooltip, _extends62({
      anchorEl,
      direction,
      disablePortal,
      modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement,
      popperOptions,
      popperRef,
      slotProps,
      slots
    }, other, {
      style: _extends62({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display
      }, style),
      TransitionProps: transitionProps,
      children
    }))
  });
});
Popper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: chainPropTypes6(PropTypes55.oneOfType([HTMLElementType6, PropTypes55.object, PropTypes55.func]), (props) => {
    if (props.open) {
      let resolvedAnchorEl = resolveAnchorEl2(props.anchorEl);
      if (resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) && resolvedAnchorEl.nodeType === 1) {
        let box = resolvedAnchorEl.getBoundingClientRect();
        if (box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect != "function" || isVirtualElement(resolvedAnchorEl) && resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: PropTypes55.oneOfType([PropTypes55.node, PropTypes55.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes55.oneOfType([HTMLElementType6, PropTypes55.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: PropTypes55.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes55.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: PropTypes55.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: PropTypes55.arrayOf(PropTypes55.shape({
    data: PropTypes55.object,
    effect: PropTypes55.func,
    enabled: PropTypes55.bool,
    fn: PropTypes55.func,
    name: PropTypes55.any,
    options: PropTypes55.object,
    phase: PropTypes55.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: PropTypes55.arrayOf(PropTypes55.string),
    requiresIfExists: PropTypes55.arrayOf(PropTypes55.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes55.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: PropTypes55.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: PropTypes55.shape({
    modifiers: PropTypes55.array,
    onFirstUpdate: PropTypes55.func,
    placement: PropTypes55.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: PropTypes55.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType10,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: PropTypes55.shape({
    root: PropTypes55.oneOfType([PropTypes55.func, PropTypes55.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes55.shape({
    root: PropTypes55.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: PropTypes55.bool
};

// node_modules/@mui/material/Popper/Popper.js
import { useThemeWithoutDefault as useTheme2 } from "@mui/system";
import { HTMLElementType as HTMLElementType7, refType as refType11 } from "@mui/utils";
import PropTypes56 from "prop-types";
import * as React68 from "react";
import { jsx as _jsx55 } from "react/jsx-runtime";
var _excluded55 = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], PopperRoot = styled_default(Popper, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({}), Popper3 = /* @__PURE__ */ React68.forwardRef(function(inProps, ref) {
  var _slots$root;
  let theme = useTheme2(), props = useThemeProps({
    props: inProps,
    name: "MuiPopper"
  }), {
    anchorEl,
    component,
    components,
    componentsProps,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose53(props, _excluded55), RootComponent = (_slots$root = slots?.root) != null ? _slots$root : components?.Root, otherProps = _extends63({
    anchorEl,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition
  }, other);
  return /* @__PURE__ */ _jsx55(PopperRoot, _extends63({
    as: component,
    direction: theme?.direction,
    slots: {
      root: RootComponent
    },
    slotProps: slotProps ?? componentsProps
  }, otherProps, {
    ref
  }));
});
Popper3.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: PropTypes56.oneOfType([HTMLElementType7, PropTypes56.object, PropTypes56.func]),
  /**
   * Popper render function or node.
   */
  children: PropTypes56.oneOfType([PropTypes56.node, PropTypes56.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes56.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes56.shape({
    Root: PropTypes56.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: PropTypes56.shape({
    root: PropTypes56.oneOfType([PropTypes56.func, PropTypes56.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes56.oneOfType([HTMLElementType7, PropTypes56.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes56.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: PropTypes56.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: PropTypes56.arrayOf(PropTypes56.shape({
    data: PropTypes56.object,
    effect: PropTypes56.func,
    enabled: PropTypes56.bool,
    fn: PropTypes56.func,
    name: PropTypes56.any,
    options: PropTypes56.object,
    phase: PropTypes56.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: PropTypes56.arrayOf(PropTypes56.string),
    requiresIfExists: PropTypes56.arrayOf(PropTypes56.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes56.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: PropTypes56.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: PropTypes56.shape({
    modifiers: PropTypes56.array,
    onFirstUpdate: PropTypes56.func,
    placement: PropTypes56.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: PropTypes56.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType11,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: PropTypes56.shape({
    root: PropTypes56.oneOfType([PropTypes56.func, PropTypes56.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes56.shape({
    root: PropTypes56.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes56.oneOfType([PropTypes56.arrayOf(PropTypes56.oneOfType([PropTypes56.func, PropTypes56.object, PropTypes56.bool])), PropTypes56.func, PropTypes56.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: PropTypes56.bool
};
var Popper_default = Popper3;

// node_modules/@mui/material/ListSubheader/ListSubheader.js
import _objectWithoutPropertiesLoose54 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends64 from "@babel/runtime/helpers/esm/extends";
import * as React69 from "react";
import PropTypes57 from "prop-types";
import clsx41 from "clsx";

// node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
var defaultGenerator = (componentName) => componentName, createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
}, ClassNameGenerator = createClassNameGenerator(), ClassNameGenerator_default = ClassNameGenerator;

// node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var globalStateClassesMapping = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  let globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_default.generate(componentName)}-${slot}`;
}

// node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
function generateUtilityClasses42(componentName, slots, globalStatePrefix = "Mui") {
  let result = {};
  return slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  }), result;
}

// node_modules/@mui/material/ListSubheader/listSubheaderClasses.js
function getListSubheaderUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListSubheader", slot);
}
var listSubheaderClasses = generateUtilityClasses42("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);

// node_modules/@mui/material/ListSubheader/ListSubheader.js
import { jsx as _jsx56 } from "react/jsx-runtime";
var _excluded56 = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], useUtilityClasses42 = (ownerState) => {
  let {
    classes,
    color,
    disableGutters,
    inset,
    disableSticky
  } = ownerState, slots = {
    root: ["root", color !== "default" && `color${capitalize_default(color)}`, !disableGutters && "gutters", inset && "inset", !disableSticky && "sticky"]
  };
  return unstable_composeClasses(slots, getListSubheaderUtilityClass, classes);
}, ListSubheaderRoot = styled_default("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.color !== "default" && styles4[`color${capitalize_default(ownerState.color)}`], !ownerState.disableGutters && styles4.gutters, ownerState.inset && styles4.inset, !ownerState.disableSticky && styles4.sticky];
  }
})(({
  theme,
  ownerState
}) => _extends64({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (theme.vars || theme).palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(14)
}, ownerState.color === "primary" && {
  color: (theme.vars || theme).palette.primary.main
}, ownerState.color === "inherit" && {
  color: "inherit"
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.inset && {
  paddingLeft: 72
}, !ownerState.disableSticky && {
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: (theme.vars || theme).palette.background.paper
})), ListSubheader = /* @__PURE__ */ React69.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiListSubheader"
  }), {
    className,
    color = "default",
    component = "li",
    disableGutters = !1,
    disableSticky = !1,
    inset = !1
  } = props, other = _objectWithoutPropertiesLoose54(props, _excluded56), ownerState = _extends64({}, props, {
    color,
    component,
    disableGutters,
    disableSticky,
    inset
  }), classes = useUtilityClasses42(ownerState);
  return /* @__PURE__ */ _jsx56(ListSubheaderRoot, _extends64({
    as: component,
    className: clsx41(classes.root, className),
    ref,
    ownerState
  }, other));
});
ListSubheader.muiSkipListHighlight = !0;
ListSubheader.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes57.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes57.object,
  /**
   * @ignore
   */
  className: PropTypes57.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: PropTypes57.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes57.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: PropTypes57.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: PropTypes57.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: PropTypes57.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes57.oneOfType([PropTypes57.arrayOf(PropTypes57.oneOfType([PropTypes57.func, PropTypes57.object, PropTypes57.bool])), PropTypes57.func, PropTypes57.object])
};
var ListSubheader_default = ListSubheader;

// node_modules/@mui/material/Chip/Chip.js
import _objectWithoutPropertiesLoose55 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends65 from "@babel/runtime/helpers/esm/extends";
import * as React71 from "react";
import PropTypes58 from "prop-types";
import clsx42 from "clsx";
import { alpha as alpha10 } from "@mui/system";

// node_modules/@mui/material/internal/svg-icons/Cancel.js
import "react";
import { jsx as _jsx57 } from "react/jsx-runtime";
var Cancel_default = createSvgIcon(/* @__PURE__ */ _jsx57("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");

// node_modules/@mui/material/Chip/chipClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses43 } from "@mui/utils";
function getChipUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiChip", slot);
}
var chipClasses = generateUtilityClasses43("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), chipClasses_default = chipClasses;

// node_modules/@mui/material/Chip/Chip.js
import { jsx as _jsx58 } from "react/jsx-runtime";
import { jsxs as _jsxs16 } from "react/jsx-runtime";
var _excluded57 = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], useUtilityClasses43 = (ownerState) => {
  let {
    classes,
    disabled,
    size,
    color,
    iconColor,
    onDelete,
    clickable,
    variant
  } = ownerState, slots = {
    root: ["root", variant, disabled && "disabled", `size${capitalize_default(size)}`, `color${capitalize_default(color)}`, clickable && "clickable", clickable && `clickableColor${capitalize_default(color)}`, onDelete && "deletable", onDelete && `deletableColor${capitalize_default(color)}`, `${variant}${capitalize_default(color)}`],
    label: ["label", `label${capitalize_default(size)}`],
    avatar: ["avatar", `avatar${capitalize_default(size)}`, `avatarColor${capitalize_default(color)}`],
    icon: ["icon", `icon${capitalize_default(size)}`, `iconColor${capitalize_default(iconColor)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${capitalize_default(size)}`, `deleteIconColor${capitalize_default(color)}`, `deleteIcon${capitalize_default(variant)}Color${capitalize_default(color)}`]
  };
  return unstable_composeClasses(slots, getChipUtilityClass, classes);
}, ChipRoot = styled_default("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props, {
      color,
      iconColor,
      clickable,
      onDelete,
      size,
      variant
    } = ownerState;
    return [{
      [`& .${chipClasses_default.avatar}`]: styles4.avatar
    }, {
      [`& .${chipClasses_default.avatar}`]: styles4[`avatar${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.avatar}`]: styles4[`avatarColor${capitalize_default(color)}`]
    }, {
      [`& .${chipClasses_default.icon}`]: styles4.icon
    }, {
      [`& .${chipClasses_default.icon}`]: styles4[`icon${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.icon}`]: styles4[`iconColor${capitalize_default(iconColor)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles4.deleteIcon
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles4[`deleteIcon${capitalize_default(size)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles4[`deleteIconColor${capitalize_default(color)}`]
    }, {
      [`& .${chipClasses_default.deleteIcon}`]: styles4[`deleteIcon${capitalize_default(variant)}Color${capitalize_default(color)}`]
    }, styles4.root, styles4[`size${capitalize_default(size)}`], styles4[`color${capitalize_default(color)}`], clickable && styles4.clickable, clickable && color !== "default" && styles4[`clickableColor${capitalize_default(color)})`], onDelete && styles4.deletable, onDelete && color !== "default" && styles4[`deletableColor${capitalize_default(color)}`], styles4[variant], styles4[`${variant}${capitalize_default(color)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  let textColor = theme.palette.mode === "light" ? theme.palette.grey[700] : theme.palette.grey[300];
  return _extends65({
    maxWidth: "100%",
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${chipClasses_default.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${chipClasses_default.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
      fontSize: theme.typography.pxToRem(12)
    },
    [`& .${chipClasses_default.avatarColorPrimary}`]: {
      color: (theme.vars || theme).palette.primary.contrastText,
      backgroundColor: (theme.vars || theme).palette.primary.dark
    },
    [`& .${chipClasses_default.avatarColorSecondary}`]: {
      color: (theme.vars || theme).palette.secondary.contrastText,
      backgroundColor: (theme.vars || theme).palette.secondary.dark
    },
    [`& .${chipClasses_default.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    [`& .${chipClasses_default.icon}`]: _extends65({
      marginLeft: 5,
      marginRight: -6
    }, ownerState.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, ownerState.iconColor === ownerState.color && _extends65({
      color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
    }, ownerState.color !== "default" && {
      color: "inherit"
    })),
    [`& .${chipClasses_default.deleteIcon}`]: _extends65({
      WebkitTapHighlightColor: "transparent",
      color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.26)` : alpha10(theme.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : alpha10(theme.palette.text.primary, 0.4)
      }
    }, ownerState.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, ownerState.color !== "default" && {
      color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].contrastTextChannel} / 0.7)` : alpha10(theme.palette[ownerState.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (theme.vars || theme).palette[ownerState.color].contrastText
      }
    })
  }, ownerState.size === "small" && {
    height: 24
  }, ownerState.color !== "default" && {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
    color: (theme.vars || theme).palette[ownerState.color].contrastText
  }, ownerState.onDelete && {
    [`&.${chipClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha10(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  }, ownerState.onDelete && ownerState.color !== "default" && {
    [`&.${chipClasses_default.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
    }
  });
}, ({
  theme,
  ownerState
}) => _extends65({}, ownerState.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha10(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
  },
  [`&.${chipClasses_default.focusVisible}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha10(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (theme.vars || theme).shadows[1]
  }
}, ownerState.clickable && ownerState.color !== "default" && {
  [`&:hover, &.${chipClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
  }
}), ({
  theme,
  ownerState
}) => _extends65({}, ownerState.variant === "outlined" && {
  backgroundColor: "transparent",
  border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.grey[700]}`,
  [`&.${chipClasses_default.clickable}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${chipClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`& .${chipClasses_default.avatar}`]: {
    marginLeft: 4
  },
  [`& .${chipClasses_default.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${chipClasses_default.icon}`]: {
    marginLeft: 4
  },
  [`& .${chipClasses_default.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${chipClasses_default.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${chipClasses_default.deleteIconSmall}`]: {
    marginRight: 3
  }
}, ownerState.variant === "outlined" && ownerState.color !== "default" && {
  color: (theme.vars || theme).palette[ownerState.color].main,
  border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : alpha10(theme.palette[ownerState.color].main, 0.7)}`,
  [`&.${chipClasses_default.clickable}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha10(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity)
  },
  [`&.${chipClasses_default.focusVisible}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha10(theme.palette[ownerState.color].main, theme.palette.action.focusOpacity)
  },
  [`& .${chipClasses_default.deleteIcon}`]: {
    color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : alpha10(theme.palette[ownerState.color].main, 0.7),
    "&:hover, &:active": {
      color: (theme.vars || theme).palette[ownerState.color].main
    }
  }
})), ChipLabel = styled_default("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props, {
      size
    } = ownerState;
    return [styles4.label, styles4[`label${capitalize_default(size)}`]];
  }
})(({
  ownerState
}) => _extends65({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, ownerState.variant === "outlined" && {
  paddingLeft: 11,
  paddingRight: 11
}, ownerState.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}, ownerState.size === "small" && ownerState.variant === "outlined" && {
  paddingLeft: 7,
  paddingRight: 7
}));
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
var Chip = /* @__PURE__ */ React71.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiChip"
  }), {
    avatar: avatarProp,
    className,
    clickable: clickableProp,
    color = "default",
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = !1,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size = "medium",
    variant = "filled",
    tabIndex,
    skipFocusWhenDisabled = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = props, other = _objectWithoutPropertiesLoose55(props, _excluded57), chipRef = React71.useRef(null), handleRef = useForkRef_default(chipRef, ref), handleDeleteIconClick = (event) => {
    event.stopPropagation(), onDelete && onDelete(event);
  }, handleKeyDown = (event) => {
    event.currentTarget === event.target && isDeleteKeyboardEvent(event) && event.preventDefault(), onKeyDown && onKeyDown(event);
  }, handleKeyUp = (event) => {
    event.currentTarget === event.target && (onDelete && isDeleteKeyboardEvent(event) ? onDelete(event) : event.key === "Escape" && chipRef.current && chipRef.current.blur()), onKeyUp && onKeyUp(event);
  }, clickable = clickableProp !== !1 && onClick ? !0 : clickableProp, component = clickable || onDelete ? ButtonBase_default : ComponentProp || "div", ownerState = _extends65({}, props, {
    component,
    disabled,
    size,
    color,
    iconColor: /* @__PURE__ */ React71.isValidElement(iconProp) && iconProp.props.color || color,
    onDelete: !!onDelete,
    clickable,
    variant
  }), classes = useUtilityClasses43(ownerState), moreProps = component === ButtonBase_default ? _extends65({
    component: ComponentProp || "div",
    focusVisibleClassName: classes.focusVisible
  }, onDelete && {
    disableRipple: !0
  }) : {}, deleteIcon = null;
  onDelete && (deleteIcon = deleteIconProp && /* @__PURE__ */ React71.isValidElement(deleteIconProp) ? /* @__PURE__ */ React71.cloneElement(deleteIconProp, {
    className: clsx42(deleteIconProp.props.className, classes.deleteIcon),
    onClick: handleDeleteIconClick
  }) : /* @__PURE__ */ _jsx58(Cancel_default, {
    className: clsx42(classes.deleteIcon),
    onClick: handleDeleteIconClick
  }));
  let avatar = null;
  avatarProp && /* @__PURE__ */ React71.isValidElement(avatarProp) && (avatar = /* @__PURE__ */ React71.cloneElement(avatarProp, {
    className: clsx42(classes.avatar, avatarProp.props.className)
  }));
  let icon = null;
  return iconProp && /* @__PURE__ */ React71.isValidElement(iconProp) && (icon = /* @__PURE__ */ React71.cloneElement(iconProp, {
    className: clsx42(classes.icon, iconProp.props.className)
  })), avatar && icon && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ _jsxs16(ChipRoot, _extends65({
    as: component,
    className: clsx42(classes.root, className),
    disabled: clickable && disabled ? !0 : void 0,
    onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef,
    tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
    ownerState
  }, moreProps, other, {
    children: [avatar || icon, /* @__PURE__ */ _jsx58(ChipLabel, {
      className: clsx42(classes.label),
      ownerState,
      children: label
    }), deleteIcon]
  }));
});
Chip.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The Avatar element to display.
   */
  avatar: PropTypes58.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: unsupportedProp_default,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes58.object,
  /**
   * @ignore
   */
  className: PropTypes58.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: PropTypes58.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: PropTypes58.oneOfType([PropTypes58.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), PropTypes58.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes58.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: PropTypes58.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes58.bool,
  /**
   * Icon element.
   */
  icon: PropTypes58.element,
  /**
   * The content of the component.
   */
  label: PropTypes58.node,
  /**
   * @ignore
   */
  onClick: PropTypes58.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: PropTypes58.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes58.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes58.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes58.oneOfType([PropTypes58.oneOf(["medium", "small"]), PropTypes58.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: PropTypes58.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes58.oneOfType([PropTypes58.arrayOf(PropTypes58.oneOfType([PropTypes58.func, PropTypes58.object, PropTypes58.bool])), PropTypes58.func, PropTypes58.object]),
  /**
   * @ignore
   */
  tabIndex: PropTypes58.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: PropTypes58.oneOfType([PropTypes58.oneOf(["filled", "outlined"]), PropTypes58.string])
};
var Chip_default = Chip;

// node_modules/@mui/material/internal/svg-icons/Close.js
import "react";
import { jsx as _jsx59 } from "react/jsx-runtime";
var Close_default = createSvgIcon(/* @__PURE__ */ _jsx59("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");

// node_modules/@mui/material/Autocomplete/autocompleteClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses44 } from "@mui/utils";
function getAutocompleteUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiAutocomplete", slot);
}
var autocompleteClasses = generateUtilityClasses44("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), autocompleteClasses_default = autocompleteClasses;

// node_modules/@mui/material/Autocomplete/Autocomplete.js
import { jsx as _jsx60 } from "react/jsx-runtime";
import { jsxs as _jsxs17 } from "react/jsx-runtime";
var _ClearIcon, _ArrowDropDownIcon, _excluded58 = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionKey", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], _excluded214 = ["ref"], _excluded311 = ["key"], useUtilityClasses44 = (ownerState) => {
  let {
    classes,
    disablePortal,
    expanded,
    focused,
    fullWidth,
    hasClearIcon,
    hasPopupIcon,
    inputFocused,
    popupOpen,
    size
  } = ownerState, slots = {
    root: ["root", expanded && "expanded", focused && "focused", fullWidth && "fullWidth", hasClearIcon && "hasClearIcon", hasPopupIcon && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", inputFocused && "inputFocused"],
    tag: ["tag", `tagSize${capitalize_default(size)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", popupOpen && "popupIndicatorOpen"],
    popper: ["popper", disablePortal && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return composeClasses4(slots, getAutocompleteUtilityClass, classes);
}, AutocompleteRoot = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props, {
      fullWidth,
      hasClearIcon,
      hasPopupIcon,
      inputFocused,
      size
    } = ownerState;
    return [{
      [`& .${autocompleteClasses_default.tag}`]: styles4.tag
    }, {
      [`& .${autocompleteClasses_default.tag}`]: styles4[`tagSize${capitalize_default(size)}`]
    }, {
      [`& .${autocompleteClasses_default.inputRoot}`]: styles4.inputRoot
    }, {
      [`& .${autocompleteClasses_default.input}`]: styles4.input
    }, {
      [`& .${autocompleteClasses_default.input}`]: inputFocused && styles4.inputFocused
    }, styles4.root, fullWidth && styles4.fullWidth, hasPopupIcon && styles4.hasPopupIcon, hasClearIcon && styles4.hasClearIcon];
  }
})(({
  ownerState
}) => _extends66({
  [`&.${autocompleteClasses_default.focused} .${autocompleteClasses_default.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${autocompleteClasses_default.clearIndicator}`]: {
      visibility: "visible"
    }
  }
}, ownerState.fullWidth && {
  width: "100%"
}, {
  [`& .${autocompleteClasses_default.tag}`]: _extends66({
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  }, ownerState.size === "small" && {
    margin: 2,
    maxWidth: "calc(100% - 4px)"
  }),
  [`& .${autocompleteClasses_default.inputRoot}`]: {
    flexWrap: "wrap",
    [`.${autocompleteClasses_default.hasPopupIcon}&, .${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 26 + 4
    },
    [`.${autocompleteClasses_default.hasPopupIcon}.${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 52 + 4
    },
    [`& .${autocompleteClasses_default.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${inputClasses_default.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${inputClasses_default.root}.${inputBaseClasses_default.sizeSmall}`]: {
    [`& .${inputClasses_default.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${outlinedInputClasses_default.root}`]: {
    padding: 9,
    [`.${autocompleteClasses_default.hasPopupIcon}&, .${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${autocompleteClasses_default.hasPopupIcon}.${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${autocompleteClasses_default.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${autocompleteClasses_default.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${outlinedInputClasses_default.root}.${inputBaseClasses_default.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${autocompleteClasses_default.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${filledInputClasses_default.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${autocompleteClasses_default.hasPopupIcon}&, .${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${autocompleteClasses_default.hasPopupIcon}.${autocompleteClasses_default.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${filledInputClasses_default.input}`]: {
      padding: "7px 4px"
    },
    [`& .${autocompleteClasses_default.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${filledInputClasses_default.root}.${inputBaseClasses_default.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${filledInputClasses_default.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${inputBaseClasses_default.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${filledInputClasses_default.root}.${inputBaseClasses_default.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${autocompleteClasses_default.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${filledInputClasses_default.root}.${inputBaseClasses_default.hiddenLabel}.${inputBaseClasses_default.sizeSmall}`]: {
    [`& .${autocompleteClasses_default.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${autocompleteClasses_default.input}`]: _extends66({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, ownerState.inputFocused && {
    opacity: 1
  })
})), AutocompleteEndAdornment = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (props, styles4) => styles4.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "calc(50% - 14px)"
  // Center vertically
}), AutocompleteClearIndicator = styled_default(IconButton_default, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (props, styles4) => styles4.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), AutocompletePopupIndicator = styled_default(IconButton_default, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState
  }, styles4) => _extends66({}, styles4.popupIndicator, ownerState.popupOpen && styles4.popupIndicatorOpen)
})(({
  ownerState
}) => _extends66({
  padding: 2,
  marginRight: -2
}, ownerState.popupOpen && {
  transform: "rotate(180deg)"
})), AutocompletePopper = styled_default(Popper_default, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [{
      [`& .${autocompleteClasses_default.option}`]: styles4.option
    }, styles4.popper, ownerState.disablePortal && styles4.popperDisablePortal];
  }
})(({
  theme,
  ownerState
}) => _extends66({
  zIndex: (theme.vars || theme).zIndex.modal
}, ownerState.disablePortal && {
  position: "absolute"
})), AutocompletePaper = styled_default(Paper_default, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (props, styles4) => styles4.paper
})(({
  theme
}) => _extends66({}, theme.typography.body1, {
  overflow: "auto"
})), AutocompleteLoading = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (props, styles4) => styles4.loading
})(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  padding: "14px 16px"
})), AutocompleteNoOptions = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (props, styles4) => styles4.noOptions
})(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary,
  padding: "14px 16px"
})), AutocompleteListbox = styled_default("div", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (props, styles4) => styles4.listbox
})(({
  theme
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${autocompleteClasses_default.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [theme.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${autocompleteClasses_default.focused}`]: {
      backgroundColor: (theme.vars || theme).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${autocompleteClasses_default.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha11(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      [`&.${autocompleteClasses_default.focused}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha11(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (theme.vars || theme).palette.action.selected
        }
      },
      [`&.${autocompleteClasses_default.focusVisible}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha11(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
      }
    }
  }
})), AutocompleteGroupLabel = styled_default(ListSubheader_default, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (props, styles4) => styles4.groupLabel
})(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  top: -8
})), AutocompleteGroupUl = styled_default("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (props, styles4) => styles4.groupUl
})({
  padding: 0,
  [`& .${autocompleteClasses_default.option}`]: {
    paddingLeft: 24
  }
});
var Autocomplete = /* @__PURE__ */ React73.forwardRef(function(inProps, ref) {
  var _slotProps$clearIndic, _slotProps$paper, _slotProps$popper, _slotProps$popupIndic;
  let props = useThemeProps({
    props: inProps,
    name: "MuiAutocomplete"
  }), {
    autoComplete = !1,
    autoHighlight = !1,
    autoSelect = !1,
    blurOnSelect = !1,
    ChipProps,
    className,
    clearIcon = _ClearIcon || (_ClearIcon = /* @__PURE__ */ _jsx60(Close_default, {
      fontSize: "small"
    })),
    clearOnBlur = !props.freeSolo,
    clearOnEscape = !1,
    clearText = "Clear",
    closeText = "Close",
    componentsProps = {},
    defaultValue = props.multiple ? [] : null,
    disableClearable = !1,
    disableCloseOnSelect = !1,
    disabled = !1,
    disabledItemsFocusable = !1,
    disableListWrap = !1,
    disablePortal = !1,
    filterSelectedOptions = !1,
    forcePopupIcon = "auto",
    freeSolo = !1,
    fullWidth = !1,
    getLimitTagsText = (more) => `+${more}`,
    getOptionLabel: getOptionLabelProp,
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    includeInputInList = !1,
    limitTags = -1,
    ListboxComponent = "ul",
    ListboxProps,
    loading = !1,
    loadingText = "Loading\u2026",
    multiple = !1,
    noOptionsText = "No options",
    openOnFocus = !1,
    openText = "Open",
    PaperComponent = Paper_default,
    PopperComponent = Popper_default,
    popupIcon = _ArrowDropDownIcon || (_ArrowDropDownIcon = /* @__PURE__ */ _jsx60(ArrowDropDown_default, {})),
    readOnly = !1,
    renderGroup: renderGroupProp,
    renderInput,
    renderOption: renderOptionProp,
    renderTags,
    selectOnFocus = !props.freeSolo,
    size = "medium",
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose56(props, _excluded58), {
    getRootProps,
    getInputProps,
    getInputLabelProps,
    getPopupIndicatorProps,
    getClearProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    value,
    dirty,
    expanded,
    id,
    popupOpen,
    focused,
    focusedTag,
    anchorEl,
    setAnchorEl,
    inputValue,
    groupedOptions
  } = useAutocomplete(_extends66({}, props, {
    componentName: "Autocomplete"
  })), hasClearIcon = !disableClearable && !disabled && dirty && !readOnly, hasPopupIcon = (!freeSolo || forcePopupIcon === !0) && forcePopupIcon !== !1, {
    onMouseDown: handleInputMouseDown
  } = getInputProps(), {
    ref: externalListboxRef
  } = ListboxProps ?? {}, _getListboxProps = getListboxProps(), {
    ref: listboxRef
  } = _getListboxProps, otherListboxProps = _objectWithoutPropertiesLoose56(_getListboxProps, _excluded214), combinedListboxRef = useForkRef_default(listboxRef, externalListboxRef), getOptionLabel = getOptionLabelProp || ((option) => {
    var _option$label;
    return (_option$label = option.label) != null ? _option$label : option;
  }), ownerState = _extends66({}, props, {
    disablePortal,
    expanded,
    focused,
    fullWidth,
    getOptionLabel,
    hasClearIcon,
    hasPopupIcon,
    inputFocused: focusedTag === -1,
    popupOpen,
    size
  }), classes = useUtilityClasses44(ownerState), startAdornment;
  if (multiple && value.length > 0) {
    let getCustomizedTagProps = (params) => _extends66({
      className: classes.tag,
      disabled
    }, getTagProps(params));
    renderTags ? startAdornment = renderTags(value, getCustomizedTagProps, ownerState) : startAdornment = value.map((option, index6) => /* @__PURE__ */ _jsx60(Chip_default, _extends66({
      label: getOptionLabel(option),
      size
    }, getCustomizedTagProps({
      index: index6
    }), ChipProps)));
  }
  if (limitTags > -1 && Array.isArray(startAdornment)) {
    let more = startAdornment.length - limitTags;
    !focused && more > 0 && (startAdornment = startAdornment.splice(0, limitTags), startAdornment.push(/* @__PURE__ */ _jsx60("span", {
      className: classes.tag,
      children: getLimitTagsText(more)
    }, startAdornment.length)));
  }
  let renderGroup = renderGroupProp || ((params) => /* @__PURE__ */ _jsxs17("li", {
    children: [/* @__PURE__ */ _jsx60(AutocompleteGroupLabel, {
      className: classes.groupLabel,
      ownerState,
      component: "div",
      children: params.group
    }), /* @__PURE__ */ _jsx60(AutocompleteGroupUl, {
      className: classes.groupUl,
      ownerState,
      children: params.children
    })]
  }, params.key)), renderOption = renderOptionProp || ((props2, option) => {
    let {
      key
    } = props2, otherProps = _objectWithoutPropertiesLoose56(props2, _excluded311);
    return /* @__PURE__ */ _jsx60("li", _extends66({}, otherProps, {
      children: getOptionLabel(option)
    }), key);
  }), renderListOption = (option, index6) => {
    let optionProps = getOptionProps({
      option,
      index: index6
    });
    return renderOption(_extends66({}, optionProps, {
      className: classes.option
    }), option, {
      selected: optionProps["aria-selected"],
      index: index6,
      inputValue
    }, ownerState);
  }, clearIndicatorSlotProps = (_slotProps$clearIndic = slotProps.clearIndicator) != null ? _slotProps$clearIndic : componentsProps.clearIndicator, paperSlotProps = (_slotProps$paper = slotProps.paper) != null ? _slotProps$paper : componentsProps.paper, popperSlotProps = (_slotProps$popper = slotProps.popper) != null ? _slotProps$popper : componentsProps.popper, popupIndicatorSlotProps = (_slotProps$popupIndic = slotProps.popupIndicator) != null ? _slotProps$popupIndic : componentsProps.popupIndicator;
  return /* @__PURE__ */ _jsxs17(React73.Fragment, {
    children: [/* @__PURE__ */ _jsx60(AutocompleteRoot, _extends66({
      ref,
      className: clsx43(classes.root, className),
      ownerState
    }, getRootProps(other), {
      children: renderInput({
        id,
        disabled,
        fullWidth: !0,
        size: size === "small" ? "small" : void 0,
        InputLabelProps: getInputLabelProps(),
        InputProps: _extends66({
          ref: setAnchorEl,
          className: classes.inputRoot,
          startAdornment,
          onClick: (event) => {
            event.target === event.currentTarget && handleInputMouseDown(event);
          }
        }, (hasClearIcon || hasPopupIcon) && {
          endAdornment: /* @__PURE__ */ _jsxs17(AutocompleteEndAdornment, {
            className: classes.endAdornment,
            ownerState,
            children: [hasClearIcon ? /* @__PURE__ */ _jsx60(AutocompleteClearIndicator, _extends66({}, getClearProps(), {
              "aria-label": clearText,
              title: clearText,
              ownerState
            }, clearIndicatorSlotProps, {
              className: clsx43(classes.clearIndicator, clearIndicatorSlotProps?.className),
              children: clearIcon
            })) : null, hasPopupIcon ? /* @__PURE__ */ _jsx60(AutocompletePopupIndicator, _extends66({}, getPopupIndicatorProps(), {
              disabled,
              "aria-label": popupOpen ? closeText : openText,
              title: popupOpen ? closeText : openText,
              ownerState
            }, popupIndicatorSlotProps, {
              className: clsx43(classes.popupIndicator, popupIndicatorSlotProps?.className),
              children: popupIcon
            })) : null]
          })
        }),
        inputProps: _extends66({
          className: classes.input,
          disabled,
          readOnly
        }, getInputProps())
      })
    })), anchorEl ? /* @__PURE__ */ _jsx60(AutocompletePopper, _extends66({
      as: PopperComponent,
      disablePortal,
      style: {
        width: anchorEl ? anchorEl.clientWidth : null
      },
      ownerState,
      role: "presentation",
      anchorEl,
      open: popupOpen
    }, popperSlotProps, {
      className: clsx43(classes.popper, popperSlotProps?.className),
      children: /* @__PURE__ */ _jsxs17(AutocompletePaper, _extends66({
        ownerState,
        as: PaperComponent
      }, paperSlotProps, {
        className: clsx43(classes.paper, paperSlotProps?.className),
        children: [loading && groupedOptions.length === 0 ? /* @__PURE__ */ _jsx60(AutocompleteLoading, {
          className: classes.loading,
          ownerState,
          children: loadingText
        }) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /* @__PURE__ */ _jsx60(AutocompleteNoOptions, {
          className: classes.noOptions,
          ownerState,
          role: "presentation",
          onMouseDown: (event) => {
            event.preventDefault();
          },
          children: noOptionsText
        }) : null, groupedOptions.length > 0 ? /* @__PURE__ */ _jsx60(AutocompleteListbox, _extends66({
          as: ListboxComponent,
          className: classes.listbox,
          ownerState
        }, otherListboxProps, ListboxProps, {
          ref: combinedListboxRef,
          children: groupedOptions.map((option, index6) => groupBy ? renderGroup({
            key: option.key,
            group: option.group,
            children: option.options.map((option2, index22) => renderListOption(option2, option.index + index22))
          }) : renderListOption(option, index6))
        })) : null]
      }))
    })) : null]
  });
});
Autocomplete.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: PropTypes59.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: PropTypes59.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: PropTypes59.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: PropTypes59.oneOfType([PropTypes59.oneOf(["mouse", "touch"]), PropTypes59.bool]),
  /**
   * Props applied to the [`Chip`](/material-ui/api/chip/) element.
   */
  ChipProps: PropTypes59.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes59.object,
  /**
   * @ignore
   */
  className: PropTypes59.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: PropTypes59.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: PropTypes59.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: PropTypes59.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: PropTypes59.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: PropTypes59.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: PropTypes59.shape({
    clearIndicator: PropTypes59.object,
    paper: PropTypes59.object,
    popper: PropTypes59.object,
    popupIndicator: PropTypes59.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: chainPropTypes7(PropTypes59.any, (props) => props.multiple && props.defaultValue !== void 0 && !Array.isArray(props.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${props.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: PropTypes59.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: PropTypes59.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes59.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: PropTypes59.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: PropTypes59.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes59.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: PropTypes59.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: PropTypes59.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: PropTypes59.oneOfType([PropTypes59.oneOf(["auto"]), PropTypes59.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: PropTypes59.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes59.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: PropTypes59.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: PropTypes59.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: PropTypes59.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: PropTypes59.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: PropTypes59.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: PropTypes59.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: PropTypes59.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: PropTypes59.bool,
  /**
   * The input value.
   */
  inputValue: PropTypes59.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: PropTypes59.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: integerPropType4,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: PropTypes59.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: PropTypes59.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading: PropTypes59.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: PropTypes59.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: PropTypes59.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: PropTypes59.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: PropTypes59.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: PropTypes59.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: PropTypes59.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: PropTypes59.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes59.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: PropTypes59.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes59.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: PropTypes59.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: PropTypes59.string,
  /**
   * Array of options.
   */
  options: PropTypes59.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: PropTypes59.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: PropTypes59.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: PropTypes59.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: PropTypes59.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: PropTypes59.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: PropTypes59.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: PropTypes59.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: PropTypes59.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: PropTypes59.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes59.oneOfType([PropTypes59.oneOf(["small", "medium"]), PropTypes59.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes59.shape({
    clearIndicator: PropTypes59.object,
    paper: PropTypes59.object,
    popper: PropTypes59.object,
    popupIndicator: PropTypes59.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes59.oneOfType([PropTypes59.arrayOf(PropTypes59.oneOfType([PropTypes59.func, PropTypes59.object, PropTypes59.bool])), PropTypes59.func, PropTypes59.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: chainPropTypes7(PropTypes59.any, (props) => props.multiple && props.value !== void 0 && !Array.isArray(props.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${props.value} was provided.`].join(`
`)) : null)
};
var Autocomplete_default = Autocomplete;

// node_modules/@mui/material/Fab/Fab.js
import _objectWithoutPropertiesLoose57 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends67 from "@babel/runtime/helpers/esm/extends";
import * as React74 from "react";
import PropTypes60 from "prop-types";
import clsx44 from "clsx";

// node_modules/@mui/material/Fab/fabClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses45 } from "@mui/utils";
function getFabUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiFab", slot);
}
var fabClasses = generateUtilityClasses45("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), fabClasses_default = fabClasses;

// node_modules/@mui/material/Fab/Fab.js
import { jsx as _jsx61 } from "react/jsx-runtime";
var _excluded59 = ["children", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"], useUtilityClasses45 = (ownerState) => {
  let {
    color,
    variant,
    classes,
    size
  } = ownerState, slots = {
    root: ["root", variant, `size${capitalize_default(size)}`, color === "inherit" ? "colorInherit" : color]
  }, composedClasses = unstable_composeClasses(slots, getFabUtilityClass, classes);
  return _extends67({}, classes, composedClasses);
}, FabRoot = styled_default(ButtonBase_default, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, styles4[ownerState.variant], styles4[`size${capitalize_default(ownerState.size)}`], ownerState.color === "inherit" && styles4.colorInherit, styles4[capitalize_default(ownerState.size)], styles4[ownerState.color]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;
  return _extends67({}, theme.typography.button, {
    minHeight: 36,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: theme.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (theme.vars || theme).zIndex.fab,
    boxShadow: (theme.vars || theme).shadows[6],
    "&:active": {
      boxShadow: (theme.vars || theme).shadows[12]
    },
    color: theme.vars ? theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
    backgroundColor: (theme.vars || theme).palette.grey[300],
    "&:hover": {
      backgroundColor: (theme.vars || theme).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${fabClasses_default.focusVisible}`]: {
      boxShadow: (theme.vars || theme).shadows[6]
    }
  }, ownerState.size === "small" && {
    width: 40,
    height: 40
  }, ownerState.size === "medium" && {
    width: 48,
    height: 48
  }, ownerState.variant === "extended" && {
    borderRadius: 48 / 2,
    padding: "0 16px",
    width: "auto",
    minHeight: "auto",
    minWidth: 48,
    height: 48
  }, ownerState.variant === "extended" && ownerState.size === "small" && {
    width: "auto",
    padding: "0 8px",
    borderRadius: 34 / 2,
    minWidth: 34,
    height: 34
  }, ownerState.variant === "extended" && ownerState.size === "medium" && {
    width: "auto",
    padding: "0 16px",
    borderRadius: 40 / 2,
    minWidth: 40,
    height: 40
  }, ownerState.color === "inherit" && {
    color: "inherit"
  });
}, ({
  theme,
  ownerState
}) => _extends67({}, ownerState.color !== "inherit" && ownerState.color !== "default" && (theme.vars || theme).palette[ownerState.color] != null && {
  color: (theme.vars || theme).palette[ownerState.color].contrastText,
  backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].main
    }
  }
}), ({
  theme
}) => ({
  [`&.${fabClasses_default.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    boxShadow: (theme.vars || theme).shadows[0],
    backgroundColor: (theme.vars || theme).palette.action.disabledBackground
  }
})), Fab = /* @__PURE__ */ React74.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiFab"
  }), {
    children,
    className,
    color = "default",
    component = "button",
    disabled = !1,
    disableFocusRipple = !1,
    focusVisibleClassName,
    size = "large",
    variant = "circular"
  } = props, other = _objectWithoutPropertiesLoose57(props, _excluded59), ownerState = _extends67({}, props, {
    color,
    component,
    disabled,
    disableFocusRipple,
    size,
    variant
  }), classes = useUtilityClasses45(ownerState);
  return /* @__PURE__ */ _jsx61(FabRoot, _extends67({
    className: clsx44(classes.root, className),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx44(classes.focusVisible, focusVisibleClassName),
    ownerState,
    ref
  }, other, {
    classes,
    children
  }));
});
Fab.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes60.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes60.object,
  /**
   * @ignore
   */
  className: PropTypes60.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: PropTypes60.oneOfType([PropTypes60.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), PropTypes60.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes60.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes60.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes60.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: PropTypes60.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes60.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes60.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: PropTypes60.oneOfType([PropTypes60.oneOf(["small", "medium", "large"]), PropTypes60.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes60.oneOfType([PropTypes60.arrayOf(PropTypes60.oneOfType([PropTypes60.func, PropTypes60.object, PropTypes60.bool])), PropTypes60.func, PropTypes60.object]),
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: PropTypes60.oneOfType([PropTypes60.oneOf(["circular", "extended"]), PropTypes60.string])
};
var Fab_default = Fab;

// app/routes/sales_alt_1(not_used).tsx
import { useSubmit } from "@remix-run/react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Snackbar as Snackbar2, Alert as Alert2 } from "@mui/material";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
async function loader2({ request }) {
  await requireUserSession(request);
  let session = await getSession(request.headers.get("Cookie")), storageSessions = session.has("voucher") ? session.get("voucher") : {}, message = session.has("message") ? session.get("message") : null, alert = session.has("alert") ? session.get("alert") : null, object = session.has("object") ? session.get("object") : null, act = session.has("act") ? session.get("act") : null, secret = session.has("keySec") ? session.get("keySec") : null, users = await getUsers(secret?.toString()), payment = await getPayments(secret?.toString());
  return json4({
    users: await users.json(),
    payment: await payment.json(),
    sessions: storageSessions,
    message,
    alert,
    object,
    act
  }, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
async function action({ request }) {
  let session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null, body2 = await request.formData(), type = String(body2.get("type"));
  if (request.method == "POST") {
    if (type == "checkout") {
      let checkout = String(body2.get("checkout")), response = await createTransaction(checkout, secret?.toString());
      if (response.meta.code != 200)
        session.flash("message", response.meta.message), session.flash("alert", 0);
      else
        return session.flash("act", "order_complete"), redirect2(
          "/order/" + response.data.id,
          {
            headers: {
              "Set-Cookie": await commitSession(session)
            }
          }
        );
    }
    if (type == "check_voucher") {
      let checkout = String(body2.get("checkout")), response = await createTransaction(checkout, secret?.toString());
      if (response.meta.code != 200)
        session.flash("message", response.meta.message), session.flash("alert", 0);
      else
        return session.flash("object", response.data), session.flash("message", "Voucher apllied."), session.flash("alert", 1), redirect2("/sales", {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
    }
    if (type == "delete_voucher" && session.flash("act", "delete_voucher"), type == "calling_alert") {
      let type_alert = String(body2.get("type_alert")), message_alert = String(body2.get("message_alert"));
      session.flash("message", message_alert), session.flash("alert", type_alert == "error" ? 0 : 1);
    }
  }
  return redirect2("/sales", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
var meta = () => [
  {
    title: "ECCS POS - Sales"
  },
  {
    name: "description",
    content: "Welcome to eccs-pos!"
  }
];
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function index(props = !1) {
  let [cart, setCart] = React75.useState({}), [total, setTotal] = React75.useState(0), [discount, setDiscount] = React75.useState(0), [voucher, setVoucher] = React75.useState(""), [useVoucher, setuseVoucher] = React75.useState(!1), [delCart, setDeleteCart] = React75.useState(0), [triggerUse, settriggerUse] = React75.useState(props), [snack, setSnack] = React75.useState(!1), [paymentList, setPaymentList] = React75.useState(), [keyPaymentList, setKeyPaymentList] = React75.useState(), myusers = useLoaderData3();
  React75.useEffect(() => {
    myusers?.act && myusers?.act == "delete_voucher" && (setVoucher(""), setDiscount(0), setuseVoucher(!1), localStorage.removeItem("voucher"));
    let getData = JSON.parse(localStorage.getItem("cart") || "{}"), UpdateData = [];
    if (getData instanceof Array) {
      if (getData.map((val, idx, []) => {
        val.idproduk != delCart && UpdateData.push(val);
      }), myusers.object != null) {
        let obj = myusers.object;
        obj.voucher && localStorage.setItem("voucher", JSON.stringify(obj.voucher));
      }
      localStorage.removeItem("cart"), localStorage.setItem("cart", JSON.stringify(UpdateData));
    }
    if (JSON.parse(localStorage.getItem("cart") || "{}") instanceof Array) {
      let data2 = JSON.parse(localStorage.getItem("cart") || "{}"), dtprod = [], getTotal = 0;
      data2.map((val, idx, []) => {
        let opsdata = {
          product_name: val.nama_produk,
          price: val.pidr_string,
          qty: val.qty_checkout,
          total: parseInt(val.pidr) * parseInt(val.qty_checkout)
        };
        getTotal += parseInt(val.pidr) * parseInt(val.qty_checkout), dtprod.push(opsdata);
      });
      let finalGetdiscount = 0, getVoucher = JSON.parse(localStorage.getItem("voucher") || "0");
      if (getVoucher?.voucher_type)
        switch (setVoucher(getVoucher.voucher_code), setuseVoucher(!0), getVoucher.voucher_type) {
          case "percent":
            let find = getTotal * parseInt(getVoucher.value_total) / 100;
            finalGetdiscount = getVoucher.max_voucher_total > 0 && find > getVoucher.max_voucher_total ? getVoucher.max_voucher_total : find;
            break;
          case "value":
            finalGetdiscount = parseInt(getVoucher.value_total);
            break;
          default:
            break;
        }
      setCart(data2), setTotal(getTotal), setDiscount(finalGetdiscount);
    }
    let key_temp = [], val_temp = [];
    myusers.payment.result?.data && (myusers.payment.result.data.map((payment) => {
      payment.value.map((code) => {
        val_temp.push({
          label: code.name,
          id: code.code
        }), key_temp.push({
          id: code.code,
          key: payment.key,
          label: code.name
        });
      });
    }), setPaymentList(val_temp), setKeyPaymentList(key_temp)), cart && handleOpenSnack();
  }, [triggerUse, myusers]);
  let handleCloseSnack = () => {
    setSnack(!1);
  }, handleOpenSnack = () => {
    setSnack(!0);
  }, deleteCart = (e) => {
    setDeleteCart(e), settriggerUse(!triggerUse);
  }, TableProductCheckout = (data, total2, discount2, deleteCart2) => {
    let dtprod = [];
    data instanceof Array && data.map((val, idx, []) => {
      let opsdata = {
        idproduk: val.idproduk,
        product_name: val.nama_produk,
        attribute_name: val.attribute_name ? val.attribute_name : null,
        price: val.pidr_string,
        qty: val.qty_checkout,
        total: parseInt(val.pidr) * parseInt(val.qty_checkout)
      };
      dtprod.push(opsdata);
    });
    let [openAlert, setOpenAlert] = React75.useState(!1), [productTarget, setProductTarget] = React75.useState(0), handleClickOpenAlert = (e) => {
      setOpenAlert(!0);
    }, handleCloseAlert = (e) => {
      setOpenAlert(!1);
    }, handleSubmitDelCart = (e) => {
      e.preventDefault(), deleteCart2(productTarget), handleCloseAlert(e);
    };
    return /* @__PURE__ */ jsxDEV4("div", { children: [
      /* @__PURE__ */ jsxDEV4(Box_default, { sx: { marginTop: "1em", textAlign: "center" }, children: [
        " ",
        /* @__PURE__ */ jsxDEV4(Typography_default, { gutterBottom: !0, variant: "h4", component: "h4", children: " Checkout" }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 347,
          columnNumber: 68
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sales_alt_1(not_used).tsx",
        lineNumber: 347,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4(Box_default, { children: [
        /* @__PURE__ */ jsxDEV4(TableContainer_default, { component: Paper_default, children: /* @__PURE__ */ jsxDEV4(Table_default, { sx: { minWidth: 650, width: "100%" }, "aria-label": "simple table", children: [
          /* @__PURE__ */ jsxDEV4(TableHead_default, { children: /* @__PURE__ */ jsxDEV4(TableRow_default, { children: [
            /* @__PURE__ */ jsxDEV4(TableCell_default, {}, void 0, !1, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 353,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV4(TableCell_default, { children: " List Item" }, void 0, !1, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 354,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV4(TableCell_default, { align: "right", children: " Price" }, void 0, !1, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 355,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV4(TableCell_default, { align: "right", children: " Quantity" }, void 0, !1, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 356,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV4(TableCell_default, { align: "right", children: " Total" }, void 0, !1, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 357,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 352,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 351,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV4(TableBody_default, { children: dtprod.map((row) => /* @__PURE__ */ jsxDEV4(TableRow_default, { sx: { "&:last-child td, &:last-child th": { border: 0 } }, children: [
            " ",
            /* @__PURE__ */ jsxDEV4(TableCell_default, { component: "th", scope: "row", children: [
              " ",
              /* @__PURE__ */ jsxDEV4(Stack_default, { spacing: 1, direction: "row", children: /* @__PURE__ */ jsxDEV4(
                Button_default,
                {
                  onClick: () => {
                    handleClickOpenAlert("delete"), setProductTarget(row.idproduk);
                  },
                  color: "error",
                  size: "small",
                  variant: "contained",
                  children: [
                    " ",
                    /* @__PURE__ */ jsxDEV4(Icon_default, { children: " delete" }, void 0, !1, {
                      fileName: "app/routes/sales_alt_1(not_used).tsx",
                      lineNumber: 366,
                      columnNumber: 88
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/sales_alt_1(not_used).tsx",
                  lineNumber: 362,
                  columnNumber: 33
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/sales_alt_1(not_used).tsx",
                lineNumber: 361,
                columnNumber: 204
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 361,
              columnNumber: 160
            }, this),
            /* @__PURE__ */ jsxDEV4(TableCell_default, { component: "th", scope: "row", children: [
              " ",
              row.product_name + (row.attribute_name ? " - " + row.attribute_name : "")
            ] }, void 0, !0, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 374,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV4(TableCell_default, { align: "right", children: [
              " ",
              row.price
            ] }, void 0, !0, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 375,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV4(TableCell_default, { align: "right", children: [
              " ",
              row.qty
            ] }, void 0, !0, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 376,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV4(TableCell_default, { align: "right", children: [
              " Rp.",
              numberWithCommas(row.total)
            ] }, void 0, !0, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 377,
              columnNumber: 33
            }, this)
          ] }, row.product_name, !0, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 361,
            columnNumber: 61
          }, this)) }, void 0, !1, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 360,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 350,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 349,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4(Stack_default, { useFlexGap: !0, flexWrap: "wrap", direction: "row", sx: { bgcolor: "#1976d2", color: "white" }, children: [
          /* @__PURE__ */ jsxDEV4(Grid_default, { xs: 6, md: 6, lg: 6, children: /* @__PURE__ */ jsxDEV4(Box_default, { children: [
            /* @__PURE__ */ jsxDEV4(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "caption", component: "h5", children: " Total Before Discount" }, void 0, !1, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 385,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV4(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "caption", component: "h5", children: " Discount " }, void 0, !1, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 386,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV4(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "h5", component: "h5", children: " Total" }, void 0, !1, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 387,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 384,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 383,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV4(Grid_default, { xs: 6, md: 6, lg: 6, children: /* @__PURE__ */ jsxDEV4(Box_default, { children: [
            /* @__PURE__ */ jsxDEV4(Typography_default, { margin: "0.5em", textAlign: "right", gutterBottom: !0, variant: "caption", component: "h5", children: [
              " Rp.",
              numberWithCommas(parseInt(total2))
            ] }, void 0, !0, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 392,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV4(Typography_default, { margin: "0.5em", textAlign: "right", gutterBottom: !0, variant: "caption", component: "h5", children: [
              " Rp.",
              numberWithCommas(discount2 ? parseInt(discount2) : 0)
            ] }, void 0, !0, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 393,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV4(Typography_default, { margin: "0.5em", textAlign: "right", gutterBottom: !0, variant: "h5", component: "h5", children: [
              " Rp.",
              numberWithCommas(parseInt(total2) - (discount2 ? parseInt(discount2) : 0))
            ] }, void 0, !0, {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 394,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 391,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 390,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 382,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sales_alt_1(not_used).tsx",
        lineNumber: 348,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV4(Dialog, { open: openAlert, onClose: handleCloseAlert, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", children: [
        /* @__PURE__ */ jsxDEV4(DialogTitle, { id: "alert-dialog-title", children: [
          " ",
          "Delete Product from cart"
        ] }, void 0, !0, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 401,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV4(DialogContent, { children: /* @__PURE__ */ jsxDEV4(DialogContentText, { id: "alert-dialog-description", children: " Remove this product from your cart,are you agree ? " }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 403,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 402,
          columnNumber: 22
        }, this),
        /* @__PURE__ */ jsxDEV4(DialogActions, { children: [
          /* @__PURE__ */ jsxDEV4(Button_default, { onClick: handleCloseAlert, children: " Disagree" }, void 0, !1, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 406,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV4(Form, { onSubmit: (e) => {
            handleSubmitDelCart(e);
          }, children: /* @__PURE__ */ jsxDEV4(Button_default, { type: "submit", autoFocus: !0, children: " Agree" }, void 0, !1, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 408,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 407,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 405,
          columnNumber: 22
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sales_alt_1(not_used).tsx",
        lineNumber: 400,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sales_alt_1(not_used).tsx",
      lineNumber: 345,
      columnNumber: 13
    }, this);
  }, TableTotalCheckout = (voucher2, paymentList2, keypaymentList) => {
    let submit = useSubmit(), [customer, setCustomer] = React75.useState(0), [preText, setPreText] = React75.useState(voucher2.toString()), [UsePayment, setUsePayment] = React75.useState(""), [UsePaymentName, setUsePaymentName] = React75.useState(""), users = useLoaderData3().users.result.map((record) => ({
      label: record.nama_lengkap != null ? record.nama_lengkap : "No name",
      id: record.id
    })), onTagsChange = (event, values, reason) => {
      reason === "reset" && setCustomer(0), setCustomer(values.id);
    }, filterOptions = createFilterOptions(
      { ignoreCase: !0, matchFrom: "start" }
    ), handleUsePayment = (event, values, reason) => {
      reason === "clear" ? (setUsePayment(""), setUsePaymentName("")) : (setUsePayment(values.id), setUsePaymentName(values.label));
    };
    async function handleSubmit(event, data, type, option) {
      event.preventDefault();
      let formData = new FormData();
      (data.length ? data : !1) == !1 && (formData.append("type", "calling_alert"), formData.append("type_alert", "error"), formData.append("message_alert", "Cart is empty"), submit(formData, {
        action: "/sales",
        method: "post",
        encType: "application/x-www-form-urlencoded",
        preventScrollReset: !1,
        replace: !1,
        relative: "route"
      })), UsePayment == "" && (formData.append("type", "calling_alert"), formData.append("type_alert", "error"), formData.append("message_alert", "Choose Payment!"), submit(formData, {
        action: "/sales",
        method: "post",
        encType: "application/x-www-form-urlencoded",
        preventScrollReset: !1,
        replace: !1,
        relative: "route"
      }));
      let checkoutData = {
        customer_id: customer,
        payment_key: "",
        payment_name: "",
        payment_code: "",
        cash_payment: total,
        cart: [],
        type
      };
      checkoutData.payment_code = UsePayment, checkoutData.payment_name = UsePaymentName, keypaymentList.map((e) => {
        e.label == UsePaymentName && (checkoutData.payment_key = e.key);
      }), data.map((product) => {
        let ready = {
          product_id: product.idproduk,
          qty: parseInt(product.qty_checkout),
          attribute: product.attribute ? product.attribute : [],
          attribute_note: ""
        };
        checkoutData.cart.push(ready);
      }), type == "check_voucher" && Object.assign(checkoutData, { use_voucher: 1, voucher_code: preText }), useVoucher === !0 && Object.assign(checkoutData, { use_voucher: 1, voucher_code: voucher2 }), formData.append("checkout", JSON.stringify(checkoutData)), formData.append("type", type), submit(formData, {
        action: "/sales",
        method: "post",
        encType: "application/x-www-form-urlencoded",
        preventScrollReset: !1,
        replace: !1,
        relative: "route"
      });
    }
    return /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4(Stack_default, { direction: "column", justifyContent: "space-around", alignItems: "stretch", spacing: 0.5, sx: { marginTop: "4.5em" }, children: [
      " ",
      /* @__PURE__ */ jsxDEV4(Box_default, { bgcolor: "#f7f7f7", children: /* @__PURE__ */ jsxDEV4(Stack_default, { useFlexGap: !0, flexWrap: "wrap", direction: "row", children: [
        /* @__PURE__ */ jsxDEV4(Grid_default, { xs: 6, md: 6, lg: 6, children: /* @__PURE__ */ jsxDEV4(Box_default, { children: /* @__PURE__ */ jsxDEV4(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "h5", component: "h5", children: " Total " }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 564,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 563,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 562,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV4(Grid_default, { xs: 6, md: 6, lg: 6, children: /* @__PURE__ */ jsxDEV4(Box_default, { children: /* @__PURE__ */ jsxDEV4(Typography_default, { margin: "0.5em", textAlign: "right", gutterBottom: !0, variant: "h5", component: "h5", children: [
          " Rp.",
          numberWithCommas(parseInt(total) - (discount ? parseInt(discount) : 0))
        ] }, void 0, !0, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 569,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 568,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 567,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV4(Grid_default, { xs: 12, md: 12, lg: 12, children: /* @__PURE__ */ jsxDEV4(Box_default, { children: /* @__PURE__ */ jsxDEV4(
          Autocomplete_default,
          {
            size: "small",
            freeSolo: !0,
            disablePortal: !0,
            id: "combo-box-demo",
            filterOptions,
            options: users,
            sx: { width: 300 },
            renderInput: (params) => /* @__PURE__ */ jsxDEV4(
              TextField_default,
              {
                sx: { margin: "0.5em" },
                ...params,
                label: "Customer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/sales_alt_1(not_used).tsx",
                lineNumber: 576,
                columnNumber: 49
              },
              this
            ),
            onChange: onTagsChange
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 574,
            columnNumber: 33
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 573,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 572,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV4(Grid_default, { xs: 12, md: 12, lg: 12, children: /* @__PURE__ */ jsxDEV4(Form, { method: "POST", onSubmit: (e) => {
          handleSubmit(e, cart, voucher2 == "" ? "check_voucher" : "delete_voucher", !1);
        }, children: /* @__PURE__ */ jsxDEV4(Box_default, { children: [
          useVoucher === !0 ? /* @__PURE__ */ jsxDEV4(
            TextField_default,
            {
              size: "small",
              variant: "outlined",
              sx: { margin: "0.5em" },
              id: "outlined-required",
              label: "Voucher",
              defaultValue: preText,
              value: voucher2,
              style: { color: "white" },
              onChange: (e) => setPreText(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 592,
              columnNumber: 37
            },
            this
          ) : /* @__PURE__ */ jsxDEV4(
            TextField_default,
            {
              size: "small",
              variant: "outlined",
              sx: { margin: "0.5em" },
              id: "outlined-required",
              label: "Voucher",
              defaultValue: preText,
              style: { color: "white" },
              onChange: (e) => setPreText(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/sales_alt_1(not_used).tsx",
              lineNumber: 597,
              columnNumber: 37
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(Button_default, { type: "submit", sx: { alignContent: "flex-start", marginTop: "1em" }, color: voucher2 == "" ? "primary" : "error", size: "large", children: voucher2 == "" ? "Use" : "Remove" }, void 0, !1, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 604,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 590,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 587,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 586,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV4(Grid_default, { xs: 12, md: 12, lg: 12, children: /* @__PURE__ */ jsxDEV4(
          Autocomplete_default,
          {
            size: "small",
            freeSolo: !0,
            disablePortal: !0,
            id: "combo-box-demo",
            filterOptions,
            options: paymentList2,
            sx: { width: 300 },
            renderInput: (params) => /* @__PURE__ */ jsxDEV4(
              TextField_default,
              {
                sx: { margin: "0.5em" },
                ...params,
                label: "Payment"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/sales_alt_1(not_used).tsx",
                lineNumber: 611,
                columnNumber: 49
              },
              this
            ),
            onChange: handleUsePayment
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 609,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 608,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV4(Divider_default, { variant: "middle" }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 622,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV4(Grid_default, { xs: 12, md: 12, lg: 12, children: /* @__PURE__ */ jsxDEV4(Box_default, { sx: { margin: "0em", marginTop: "0.5em" }, children: /* @__PURE__ */ jsxDEV4(Form, { method: "POST", action: "checkout", onSubmit: (e) => {
          handleSubmit(e, cart, "checkout", !1);
        }, children: [
          /* @__PURE__ */ jsxDEV4(Input_default, { type: "hidden", size: "small", name: "email", id: "email", defaultValue: "wasdas@asdas.com" }, void 0, !1, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 630,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV4(Button_default, { type: "submit", size: "large", fullWidth: !0, variant: "contained", color: "success", children: " Pay" }, void 0, !1, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 631,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 625,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 624,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 623,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sales_alt_1(not_used).tsx",
        lineNumber: 561,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/sales_alt_1(not_used).tsx",
        lineNumber: 560,
        columnNumber: 146
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sales_alt_1(not_used).tsx",
      lineNumber: 560,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales_alt_1(not_used).tsx",
      lineNumber: 559,
      columnNumber: 13
    }, this);
  };
  return /* @__PURE__ */ jsxDEV4("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsxDEV4(
      Grid_default,
      {
        container: !0,
        spacing: 2,
        sx: { marginTop: "0.5em", width: "100%", height: "100%" },
        children: [
          " ",
          /* @__PURE__ */ jsxDEV4(Grid_default, { item: !0, xs: 12, md: 8, lg: 8, children: [
            " ",
            TableProductCheckout(cart, total, discount, deleteCart)
          ] }, void 0, !0, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 646,
            columnNumber: 65
          }, this),
          " ",
          /* @__PURE__ */ jsxDEV4(Grid_default, { item: !0, xs: 12, md: 4, lg: 4, children: [
            " ",
            TableTotalCheckout(voucher, paymentList, keyPaymentList)
          ] }, void 0, !0, {
            fileName: "app/routes/sales_alt_1(not_used).tsx",
            lineNumber: 648,
            columnNumber: 18
          }, this),
          " ",
          AddProduct()
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/sales_alt_1(not_used).tsx",
        lineNumber: 645,
        columnNumber: 9
      },
      this
    ),
    myusers.message != null ? /* @__PURE__ */ jsxDEV4(Stack_default, { spacing: 2, sx: { width: "100%" }, children: /* @__PURE__ */ jsxDEV4(Snackbar2, { anchorOrigin: { vertical: "bottom", horizontal: "center" }, open: snack, autoHideDuration: 6e3, onClose: handleCloseSnack, children: /* @__PURE__ */ jsxDEV4(Alert2, { variant: "filled", onClose: handleCloseSnack, severity: myusers.alert && myusers.alert == 1 ? "success" : "error", sx: { width: "100%" }, children: myusers.message && myusers.message != null ? myusers.message : "" }, void 0, !1, {
      fileName: "app/routes/sales_alt_1(not_used).tsx",
      lineNumber: 657,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales_alt_1(not_used).tsx",
      lineNumber: 656,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales_alt_1(not_used).tsx",
      lineNumber: 655,
      columnNumber: 13
    }, this) : ""
  ] }, void 0, !0, {
    fileName: "app/routes/sales_alt_1(not_used).tsx",
    lineNumber: 644,
    columnNumber: 9
  }, this);
}
var AddProduct = () => {
  let navigate = useNavigate();
  return /* @__PURE__ */ jsxDEV4("div", { children: /* @__PURE__ */ jsxDEV4(Box_default, { sx: { "& > :not(style)": { m: 1 } }, children: /* @__PURE__ */ jsxDEV4(
    Fab_default,
    {
      sx: {
        position: "fixed",
        bottom: (theme) => theme.spacing(2),
        right: (theme) => theme.spacing(2)
      },
      color: "primary",
      "aria-label": "add",
      onClick: () => {
        navigate("add/1");
      },
      children: [
        " ",
        /* @__PURE__ */ jsxDEV4(Icon_default, { children: " add" }, void 0, !1, {
          fileName: "app/routes/sales_alt_1(not_used).tsx",
          lineNumber: 688,
          columnNumber: 14
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/sales_alt_1(not_used).tsx",
      lineNumber: 681,
      columnNumber: 15
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/sales_alt_1(not_used).tsx",
    lineNumber: 680,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/sales_alt_1(not_used).tsx",
    lineNumber: 679,
    columnNumber: 9
  }, this);
};

// app/routes/sales_.add_.$page.tsx
var sales_add_page_exports = {};
__export(sales_add_page_exports, {
  action: () => action2,
  default: () => Productadd,
  loader: () => loader3,
  meta: () => meta2
});
import * as React87 from "react";

// node_modules/@mui/material/Card/Card.js
import _extends68 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose58 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React76 from "react";
import PropTypes61 from "prop-types";
import clsx45 from "clsx";
import { chainPropTypes as chainPropTypes8 } from "@mui/utils";

// node_modules/@mui/material/Card/cardClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses46 } from "@mui/utils";
function getCardUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiCard", slot);
}
var cardClasses = generateUtilityClasses46("MuiCard", ["root"]);

// node_modules/@mui/material/Card/Card.js
import { jsx as _jsx62 } from "react/jsx-runtime";
var _excluded60 = ["className", "raised"], useUtilityClasses46 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root"]
  }, getCardUtilityClass, classes);
}, CardRoot = styled_default(Paper_default, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})(() => ({
  overflow: "hidden"
})), Card = /* @__PURE__ */ React76.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiCard"
  }), {
    className,
    raised = !1
  } = props, other = _objectWithoutPropertiesLoose58(props, _excluded60), ownerState = _extends68({}, props, {
    raised
  }), classes = useUtilityClasses46(ownerState);
  return /* @__PURE__ */ _jsx62(CardRoot, _extends68({
    className: clsx45(classes.root, className),
    elevation: raised ? 8 : void 0,
    ref,
    ownerState
  }, other));
});
Card.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes61.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes61.object,
  /**
   * @ignore
   */
  className: PropTypes61.string,
  /**
   * If `true`, the card will use raised styling.
   * @default false
   */
  raised: chainPropTypes8(PropTypes61.bool, (props) => props.raised && props.variant === "outlined" ? new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.') : null),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes61.oneOfType([PropTypes61.arrayOf(PropTypes61.oneOfType([PropTypes61.func, PropTypes61.object, PropTypes61.bool])), PropTypes61.func, PropTypes61.object])
};
var Card_default = Card;

// node_modules/@mui/material/CardHeader/CardHeader.js
import _objectWithoutPropertiesLoose59 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends69 from "@babel/runtime/helpers/esm/extends";
import * as React77 from "react";
import PropTypes62 from "prop-types";
import clsx46 from "clsx";

// node_modules/@mui/material/CardHeader/cardHeaderClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses47 } from "@mui/utils";
function getCardHeaderUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiCardHeader", slot);
}
var cardHeaderClasses = generateUtilityClasses47("MuiCardHeader", ["root", "avatar", "action", "content", "title", "subheader"]), cardHeaderClasses_default = cardHeaderClasses;

// node_modules/@mui/material/CardHeader/CardHeader.js
import { jsx as _jsx63 } from "react/jsx-runtime";
import { jsxs as _jsxs18 } from "react/jsx-runtime";
var _excluded61 = ["action", "avatar", "className", "component", "disableTypography", "subheader", "subheaderTypographyProps", "title", "titleTypographyProps"], useUtilityClasses47 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root"],
    avatar: ["avatar"],
    action: ["action"],
    content: ["content"],
    title: ["title"],
    subheader: ["subheader"]
  }, getCardHeaderUtilityClass, classes);
}, CardHeaderRoot = styled_default("div", {
  name: "MuiCardHeader",
  slot: "Root",
  overridesResolver: (props, styles4) => _extends69({
    [`& .${cardHeaderClasses_default.title}`]: styles4.title,
    [`& .${cardHeaderClasses_default.subheader}`]: styles4.subheader
  }, styles4.root)
})({
  display: "flex",
  alignItems: "center",
  padding: 16
}), CardHeaderAvatar = styled_default("div", {
  name: "MuiCardHeader",
  slot: "Avatar",
  overridesResolver: (props, styles4) => styles4.avatar
})({
  display: "flex",
  flex: "0 0 auto",
  marginRight: 16
}), CardHeaderAction = styled_default("div", {
  name: "MuiCardHeader",
  slot: "Action",
  overridesResolver: (props, styles4) => styles4.action
})({
  flex: "0 0 auto",
  alignSelf: "flex-start",
  marginTop: -4,
  marginRight: -8,
  marginBottom: -4
}), CardHeaderContent = styled_default("div", {
  name: "MuiCardHeader",
  slot: "Content",
  overridesResolver: (props, styles4) => styles4.content
})({
  flex: "1 1 auto"
}), CardHeader = /* @__PURE__ */ React77.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiCardHeader"
  }), {
    action: action12,
    avatar,
    className,
    component = "div",
    disableTypography = !1,
    subheader: subheaderProp,
    subheaderTypographyProps,
    title: titleProp,
    titleTypographyProps
  } = props, other = _objectWithoutPropertiesLoose59(props, _excluded61), ownerState = _extends69({}, props, {
    component,
    disableTypography
  }), classes = useUtilityClasses47(ownerState), title = titleProp;
  title != null && title.type !== Typography_default && !disableTypography && (title = /* @__PURE__ */ _jsx63(Typography_default, _extends69({
    variant: avatar ? "body2" : "h5",
    className: classes.title,
    component: "span",
    display: "block"
  }, titleTypographyProps, {
    children: title
  })));
  let subheader = subheaderProp;
  return subheader != null && subheader.type !== Typography_default && !disableTypography && (subheader = /* @__PURE__ */ _jsx63(Typography_default, _extends69({
    variant: avatar ? "body2" : "body1",
    className: classes.subheader,
    color: "text.secondary",
    component: "span",
    display: "block"
  }, subheaderTypographyProps, {
    children: subheader
  }))), /* @__PURE__ */ _jsxs18(CardHeaderRoot, _extends69({
    className: clsx46(classes.root, className),
    as: component,
    ref,
    ownerState
  }, other, {
    children: [avatar && /* @__PURE__ */ _jsx63(CardHeaderAvatar, {
      className: classes.avatar,
      ownerState,
      children: avatar
    }), /* @__PURE__ */ _jsxs18(CardHeaderContent, {
      className: classes.content,
      ownerState,
      children: [title, subheader]
    }), action12 && /* @__PURE__ */ _jsx63(CardHeaderAction, {
      className: classes.action,
      ownerState,
      children: action12
    })]
  }));
});
CardHeader.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The action to display in the card header.
   */
  action: PropTypes62.node,
  /**
   * The Avatar element to display.
   */
  avatar: PropTypes62.node,
  /**
   * @ignore
   */
  children: PropTypes62.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes62.object,
  /**
   * @ignore
   */
  className: PropTypes62.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes62.elementType,
  /**
   * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   * @default false
   */
  disableTypography: PropTypes62.bool,
  /**
   * The content of the component.
   */
  subheader: PropTypes62.node,
  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps: PropTypes62.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes62.oneOfType([PropTypes62.arrayOf(PropTypes62.oneOfType([PropTypes62.func, PropTypes62.object, PropTypes62.bool])), PropTypes62.func, PropTypes62.object]),
  /**
   * The content of the component.
   */
  title: PropTypes62.node,
  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps: PropTypes62.object
};
var CardHeader_default = CardHeader;

// node_modules/@mui/material/CardMedia/CardMedia.js
import _objectWithoutPropertiesLoose60 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends70 from "@babel/runtime/helpers/esm/extends";
import * as React78 from "react";
import PropTypes63 from "prop-types";
import clsx47 from "clsx";
import { chainPropTypes as chainPropTypes9 } from "@mui/utils";

// node_modules/@mui/material/CardMedia/cardMediaClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses48 } from "@mui/utils";
function getCardMediaUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiCardMedia", slot);
}
var cardMediaClasses = generateUtilityClasses48("MuiCardMedia", ["root", "media", "img"]);

// node_modules/@mui/material/CardMedia/CardMedia.js
import { jsx as _jsx64 } from "react/jsx-runtime";
var _excluded62 = ["children", "className", "component", "image", "src", "style"], useUtilityClasses48 = (ownerState) => {
  let {
    classes,
    isMediaComponent,
    isImageComponent
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", isMediaComponent && "media", isImageComponent && "img"]
  }, getCardMediaUtilityClass, classes);
}, CardMediaRoot = styled_default("div", {
  name: "MuiCardMedia",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props, {
      isMediaComponent,
      isImageComponent
    } = ownerState;
    return [styles4.root, isMediaComponent && styles4.media, isImageComponent && styles4.img];
  }
})(({
  ownerState
}) => _extends70({
  display: "block",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}, ownerState.isMediaComponent && {
  width: "100%"
}, ownerState.isImageComponent && {
  // ⚠️ object-fit is not supported by IE11.
  objectFit: "cover"
})), MEDIA_COMPONENTS = ["video", "audio", "picture", "iframe", "img"], IMAGE_COMPONENTS = ["picture", "img"], CardMedia = /* @__PURE__ */ React78.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiCardMedia"
  }), {
    children,
    className,
    component = "div",
    image,
    src,
    style
  } = props, other = _objectWithoutPropertiesLoose60(props, _excluded62), isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1, composedStyle = !isMediaComponent && image ? _extends70({
    backgroundImage: `url("${image}")`
  }, style) : style, ownerState = _extends70({}, props, {
    component,
    isMediaComponent,
    isImageComponent: IMAGE_COMPONENTS.indexOf(component) !== -1
  }), classes = useUtilityClasses48(ownerState);
  return /* @__PURE__ */ _jsx64(CardMediaRoot, _extends70({
    className: clsx47(classes.root, className),
    as: component,
    role: !isMediaComponent && image ? "img" : void 0,
    ref,
    style: composedStyle,
    ownerState,
    src: isMediaComponent ? image || src : void 0
  }, other, {
    children
  }));
});
CardMedia.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: chainPropTypes9(PropTypes63.node, (props) => !props.children && !props.image && !props.src && !props.component ? new Error("MUI: Either `children`, `image`, `src` or `component` prop must be specified.") : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes63.object,
  /**
   * @ignore
   */
  className: PropTypes63.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes63.elementType,
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: PropTypes63.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: PropTypes63.string,
  /**
   * @ignore
   */
  style: PropTypes63.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes63.oneOfType([PropTypes63.arrayOf(PropTypes63.oneOfType([PropTypes63.func, PropTypes63.object, PropTypes63.bool])), PropTypes63.func, PropTypes63.object])
};
var CardMedia_default = CardMedia;

// node_modules/@mui/material/CardContent/CardContent.js
import _extends71 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose61 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React79 from "react";
import PropTypes64 from "prop-types";
import clsx48 from "clsx";

// node_modules/@mui/material/CardContent/cardContentClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses49 } from "@mui/utils";
function getCardContentUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiCardContent", slot);
}
var cardContentClasses = generateUtilityClasses49("MuiCardContent", ["root"]);

// node_modules/@mui/material/CardContent/CardContent.js
import { jsx as _jsx65 } from "react/jsx-runtime";
var _excluded63 = ["className", "component"], useUtilityClasses49 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root"]
  }, getCardContentUtilityClass, classes);
}, CardContentRoot = styled_default("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})(() => ({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
})), CardContent = /* @__PURE__ */ React79.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiCardContent"
  }), {
    className,
    component = "div"
  } = props, other = _objectWithoutPropertiesLoose61(props, _excluded63), ownerState = _extends71({}, props, {
    component
  }), classes = useUtilityClasses49(ownerState);
  return /* @__PURE__ */ _jsx65(CardContentRoot, _extends71({
    as: component,
    className: clsx48(classes.root, className),
    ownerState,
    ref
  }, other));
});
CardContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes64.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes64.object,
  /**
   * @ignore
   */
  className: PropTypes64.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes64.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes64.oneOfType([PropTypes64.arrayOf(PropTypes64.oneOfType([PropTypes64.func, PropTypes64.object, PropTypes64.bool])), PropTypes64.func, PropTypes64.object])
};
var CardContent_default = CardContent;

// node_modules/@mui/material/CardActions/CardActions.js
import _objectWithoutPropertiesLoose62 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends72 from "@babel/runtime/helpers/esm/extends";
import * as React80 from "react";
import PropTypes65 from "prop-types";
import clsx49 from "clsx";

// node_modules/@mui/material/CardActions/cardActionsClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses50 } from "@mui/utils";
function getCardActionsUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiCardActions", slot);
}
var cardActionsClasses = generateUtilityClasses50("MuiCardActions", ["root", "spacing"]);

// node_modules/@mui/material/CardActions/CardActions.js
import { jsx as _jsx66 } from "react/jsx-runtime";
var _excluded64 = ["disableSpacing", "className"], useUtilityClasses50 = (ownerState) => {
  let {
    classes,
    disableSpacing
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", !disableSpacing && "spacing"]
  }, getCardActionsUtilityClass, classes);
}, CardActionsRoot = styled_default("div", {
  name: "MuiCardActions",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, !ownerState.disableSpacing && styles4.spacing];
  }
})(({
  ownerState
}) => _extends72({
  display: "flex",
  alignItems: "center",
  padding: 8
}, !ownerState.disableSpacing && {
  "& > :not(:first-of-type)": {
    marginLeft: 8
  }
})), CardActions = /* @__PURE__ */ React80.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiCardActions"
  }), {
    disableSpacing = !1,
    className
  } = props, other = _objectWithoutPropertiesLoose62(props, _excluded64), ownerState = _extends72({}, props, {
    disableSpacing
  }), classes = useUtilityClasses50(ownerState);
  return /* @__PURE__ */ _jsx66(CardActionsRoot, _extends72({
    className: clsx49(classes.root, className),
    ownerState,
    ref
  }, other));
});
CardActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes65.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes65.object,
  /**
   * @ignore
   */
  className: PropTypes65.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: PropTypes65.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes65.oneOfType([PropTypes65.arrayOf(PropTypes65.oneOfType([PropTypes65.func, PropTypes65.object, PropTypes65.bool])), PropTypes65.func, PropTypes65.object])
};
var CardActions_default = CardActions;

// app/routes/sales_.add_.$page.tsx
import { json as json5, redirect as redirect3 } from "@remix-run/node";
import { useLoaderData as useLoaderData4, useNavigate as useNavigate2, useSubmit as useSubmit2 } from "@remix-run/react";
import { Badge, Box as Box2, Button as Button3, Dialog as Dialog2, DialogActions as DialogActions2, DialogContent as DialogContent2, DialogContentText as DialogContentText2, DialogTitle as DialogTitle2, Fab as Fab3, FormControl as FormControl3, FormHelperText as FormHelperText3, InputBase as InputBase3, InputLabel as InputLabel3, List as List3, ListItem as ListItem3, ListItemText as ListItemText3, MenuItem, Select as Select3, TextField as TextField3, ToggleButton, ToggleButtonGroup, alpha as alpha13 } from "@mui/material";

// node_modules/@mui/material/Pagination/Pagination.js
import _extends75 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose65 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React86 from "react";
import PropTypes67 from "prop-types";
import clsx51 from "clsx";
import { integerPropType as integerPropType5 } from "@mui/utils";

// node_modules/@mui/material/Pagination/paginationClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses51 } from "@mui/utils";
function getPaginationUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiPagination", slot);
}
var paginationClasses = generateUtilityClasses51("MuiPagination", ["root", "ul", "outlined", "text"]);

// node_modules/@mui/material/usePagination/usePagination.js
import _extends73 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose63 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import { unstable_useControlled as useControlled2 } from "@mui/utils";
var _excluded65 = ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"];
function usePagination(props = {}) {
  let {
    boundaryCount = 1,
    componentName = "usePagination",
    count = 1,
    defaultPage = 1,
    disabled = !1,
    hideNextButton = !1,
    hidePrevButton = !1,
    onChange: handleChange,
    page: pageProp,
    showFirstButton = !1,
    showLastButton = !1,
    siblingCount = 1
  } = props, other = _objectWithoutPropertiesLoose63(props, _excluded65), [page, setPageState] = useControlled2({
    controlled: pageProp,
    default: defaultPage,
    name: componentName,
    state: "page"
  }), handleClick = (event, value) => {
    pageProp || setPageState(value), handleChange && handleChange(event, value);
  }, range = (start, end) => {
    let length = end - start + 1;
    return Array.from({
      length
    }, (_2, i) => start + i);
  }, startPages = range(1, Math.min(boundaryCount, count)), endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count), siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  ), siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  ), itemList = [
    ...showFirstButton ? ["first"] : [],
    ...hidePrevButton ? [] : ["previous"],
    ...startPages,
    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...siblingsStart > boundaryCount + 2 ? ["start-ellipsis"] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : [],
    // Sibling pages
    ...range(siblingsStart, siblingsEnd),
    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...siblingsEnd < count - boundaryCount - 1 ? ["end-ellipsis"] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : [],
    ...endPages,
    ...hideNextButton ? [] : ["next"],
    ...showLastButton ? ["last"] : []
  ], buttonPage = (type) => {
    switch (type) {
      case "first":
        return 1;
      case "previous":
        return page - 1;
      case "next":
        return page + 1;
      case "last":
        return count;
      default:
        return null;
    }
  }, items = itemList.map((item) => typeof item == "number" ? {
    onClick: (event) => {
      handleClick(event, item);
    },
    type: "page",
    page: item,
    selected: item === page,
    disabled,
    "aria-current": item === page ? "true" : void 0
  } : {
    onClick: (event) => {
      handleClick(event, buttonPage(item));
    },
    type: item,
    page: buttonPage(item),
    selected: !1,
    disabled: disabled || item.indexOf("ellipsis") === -1 && (item === "next" || item === "last" ? page >= count : page <= 1)
  });
  return _extends73({
    items
  }, other);
}

// node_modules/@mui/material/PaginationItem/PaginationItem.js
import _objectWithoutPropertiesLoose64 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends74 from "@babel/runtime/helpers/esm/extends";
import * as React85 from "react";
import PropTypes66 from "prop-types";
import clsx50 from "clsx";
import { alpha as alpha12 } from "@mui/system";

// node_modules/@mui/material/PaginationItem/paginationItemClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses52 } from "@mui/utils";
function getPaginationItemUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiPaginationItem", slot);
}
var paginationItemClasses = generateUtilityClasses52("MuiPaginationItem", ["root", "page", "sizeSmall", "sizeLarge", "text", "textPrimary", "textSecondary", "outlined", "outlinedPrimary", "outlinedSecondary", "rounded", "ellipsis", "firstLast", "previousNext", "focusVisible", "disabled", "selected", "icon"]), paginationItemClasses_default = paginationItemClasses;

// node_modules/@mui/material/internal/svg-icons/FirstPage.js
import "react";
import { jsx as _jsx67 } from "react/jsx-runtime";
var FirstPage_default = createSvgIcon(/* @__PURE__ */ _jsx67("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage");

// node_modules/@mui/material/internal/svg-icons/LastPage.js
import "react";
import { jsx as _jsx68 } from "react/jsx-runtime";
var LastPage_default = createSvgIcon(/* @__PURE__ */ _jsx68("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage");

// node_modules/@mui/material/internal/svg-icons/NavigateBefore.js
import "react";
import { jsx as _jsx69 } from "react/jsx-runtime";
var NavigateBefore_default = createSvgIcon(/* @__PURE__ */ _jsx69("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), "NavigateBefore");

// node_modules/@mui/material/internal/svg-icons/NavigateNext.js
import "react";
import { jsx as _jsx70 } from "react/jsx-runtime";
var NavigateNext_default = createSvgIcon(/* @__PURE__ */ _jsx70("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "NavigateNext");

// node_modules/@mui/material/PaginationItem/PaginationItem.js
import { jsx as _jsx71 } from "react/jsx-runtime";
import { jsxs as _jsxs19 } from "react/jsx-runtime";
var _excluded66 = ["className", "color", "component", "components", "disabled", "page", "selected", "shape", "size", "slots", "type", "variant"], overridesResolver4 = (props, styles4) => {
  let {
    ownerState
  } = props;
  return [styles4.root, styles4[ownerState.variant], styles4[`size${capitalize_default(ownerState.size)}`], ownerState.variant === "text" && styles4[`text${capitalize_default(ownerState.color)}`], ownerState.variant === "outlined" && styles4[`outlined${capitalize_default(ownerState.color)}`], ownerState.shape === "rounded" && styles4.rounded, ownerState.type === "page" && styles4.page, (ownerState.type === "start-ellipsis" || ownerState.type === "end-ellipsis") && styles4.ellipsis, (ownerState.type === "previous" || ownerState.type === "next") && styles4.previousNext, (ownerState.type === "first" || ownerState.type === "last") && styles4.firstLast];
}, useUtilityClasses51 = (ownerState) => {
  let {
    classes,
    color,
    disabled,
    selected,
    size,
    shape,
    type,
    variant
  } = ownerState, slots = {
    root: ["root", `size${capitalize_default(size)}`, variant, shape, color !== "standard" && `${variant}${capitalize_default(color)}`, disabled && "disabled", selected && "selected", {
      page: "page",
      first: "firstLast",
      last: "firstLast",
      "start-ellipsis": "ellipsis",
      "end-ellipsis": "ellipsis",
      previous: "previousNext",
      next: "previousNext"
    }[type]],
    icon: ["icon"]
  };
  return unstable_composeClasses(slots, getPaginationItemUtilityClass, classes);
}, PaginationItemEllipsis = styled_default("div", {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver: overridesResolver4
})(({
  theme,
  ownerState
}) => _extends74({}, theme.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: "center",
  boxSizing: "border-box",
  minWidth: 32,
  padding: "0 6px",
  margin: "0 3px",
  color: (theme.vars || theme).palette.text.primary,
  height: "auto",
  [`&.${paginationItemClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.size === "small" && {
  minWidth: 26,
  borderRadius: 26 / 2,
  margin: "0 1px",
  padding: "0 4px"
}, ownerState.size === "large" && {
  minWidth: 40,
  borderRadius: 40 / 2,
  padding: "0 10px",
  fontSize: theme.typography.pxToRem(15)
})), PaginationItemPage = styled_default(ButtonBase_default, {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver: overridesResolver4
})(({
  theme,
  ownerState
}) => _extends74({}, theme.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: "center",
  boxSizing: "border-box",
  minWidth: 32,
  height: 32,
  padding: "0 6px",
  margin: "0 3px",
  color: (theme.vars || theme).palette.text.primary,
  [`&.${paginationItemClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${paginationItemClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  transition: theme.transitions.create(["color", "background-color"], {
    duration: theme.transitions.duration.short
  }),
  "&:hover": {
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${paginationItemClasses_default.selected}`]: {
    backgroundColor: (theme.vars || theme).palette.action.selected,
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha12(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette.action.selected
      }
    },
    [`&.${paginationItemClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha12(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    },
    [`&.${paginationItemClasses_default.disabled}`]: {
      opacity: 1,
      color: (theme.vars || theme).palette.action.disabled,
      backgroundColor: (theme.vars || theme).palette.action.selected
    }
  }
}, ownerState.size === "small" && {
  minWidth: 26,
  height: 26,
  borderRadius: 26 / 2,
  margin: "0 1px",
  padding: "0 4px"
}, ownerState.size === "large" && {
  minWidth: 40,
  height: 40,
  borderRadius: 40 / 2,
  padding: "0 10px",
  fontSize: theme.typography.pxToRem(15)
}, ownerState.shape === "rounded" && {
  borderRadius: (theme.vars || theme).shape.borderRadius
}), ({
  theme,
  ownerState
}) => _extends74({}, ownerState.variant === "text" && {
  [`&.${paginationItemClasses_default.selected}`]: _extends74({}, ownerState.color !== "standard" && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
    "&:hover": {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    },
    [`&.${paginationItemClasses_default.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
    }
  }, {
    [`&.${paginationItemClasses_default.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    }
  })
}, ownerState.variant === "outlined" && {
  border: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
  [`&.${paginationItemClasses_default.selected}`]: _extends74({}, ownerState.color !== "standard" && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : alpha12(theme.palette[ownerState.color].main, 0.5)}`,
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.activatedOpacity})` : alpha12(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity),
    "&:hover": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha12(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${paginationItemClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / calc(${theme.vars.palette.action.activatedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha12(theme.palette[ownerState.color].main, theme.palette.action.activatedOpacity + theme.palette.action.focusOpacity)
    }
  }, {
    [`&.${paginationItemClasses_default.disabled}`]: {
      borderColor: (theme.vars || theme).palette.action.disabledBackground,
      color: (theme.vars || theme).palette.action.disabled
    }
  })
})), PaginationItemPageIcon = styled_default("div", {
  name: "MuiPaginationItem",
  slot: "Icon",
  overridesResolver: (props, styles4) => styles4.icon
})(({
  theme,
  ownerState
}) => _extends74({
  fontSize: theme.typography.pxToRem(20),
  margin: "0 -8px"
}, ownerState.size === "small" && {
  fontSize: theme.typography.pxToRem(18)
}, ownerState.size === "large" && {
  fontSize: theme.typography.pxToRem(22)
})), PaginationItem = /* @__PURE__ */ React85.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiPaginationItem"
  }), {
    className,
    color = "standard",
    component,
    components = {},
    disabled = !1,
    page,
    selected = !1,
    shape = "circular",
    size = "medium",
    slots = {},
    type = "page",
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose64(props, _excluded66), ownerState = _extends74({}, props, {
    color,
    disabled,
    selected,
    shape,
    size,
    type,
    variant
  }), theme = useTheme(), classes = useUtilityClasses51(ownerState), Icon7 = (theme.direction === "rtl" ? {
    previous: slots.next || components.next || NavigateNext_default,
    next: slots.previous || components.previous || NavigateBefore_default,
    last: slots.first || components.first || FirstPage_default,
    first: slots.last || components.last || LastPage_default
  } : {
    previous: slots.previous || components.previous || NavigateBefore_default,
    next: slots.next || components.next || NavigateNext_default,
    first: slots.first || components.first || FirstPage_default,
    last: slots.last || components.last || LastPage_default
  })[type];
  return type === "start-ellipsis" || type === "end-ellipsis" ? /* @__PURE__ */ _jsx71(PaginationItemEllipsis, {
    ref,
    ownerState,
    className: clsx50(classes.root, className),
    children: "\u2026"
  }) : /* @__PURE__ */ _jsxs19(PaginationItemPage, _extends74({
    ref,
    ownerState,
    component,
    disabled,
    className: clsx50(classes.root, className)
  }, other, {
    children: [type === "page" && page, Icon7 ? /* @__PURE__ */ _jsx71(PaginationItemPageIcon, {
      as: Icon7,
      ownerState,
      className: classes.icon
    }) : null]
  }));
});
PaginationItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: PropTypes66.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes66.object,
  /**
   * @ignore
   */
  className: PropTypes66.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: PropTypes66.oneOfType([PropTypes66.oneOf(["primary", "secondary", "standard"]), PropTypes66.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes66.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes66.shape({
    first: PropTypes66.elementType,
    last: PropTypes66.elementType,
    next: PropTypes66.elementType,
    previous: PropTypes66.elementType
  }),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes66.bool,
  /**
   * The current page number.
   */
  page: PropTypes66.node,
  /**
   * If `true` the pagination item is selected.
   * @default false
   */
  selected: PropTypes66.bool,
  /**
   * The shape of the pagination item.
   * @default 'circular'
   */
  shape: PropTypes66.oneOf(["circular", "rounded"]),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes66.oneOfType([PropTypes66.oneOf(["small", "medium", "large"]), PropTypes66.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes66.shape({
    first: PropTypes66.elementType,
    last: PropTypes66.elementType,
    next: PropTypes66.elementType,
    previous: PropTypes66.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes66.oneOfType([PropTypes66.arrayOf(PropTypes66.oneOfType([PropTypes66.func, PropTypes66.object, PropTypes66.bool])), PropTypes66.func, PropTypes66.object]),
  /**
   * The type of pagination item.
   * @default 'page'
   */
  type: PropTypes66.oneOf(["end-ellipsis", "first", "last", "next", "page", "previous", "start-ellipsis"]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes66.oneOfType([PropTypes66.oneOf(["outlined", "text"]), PropTypes66.string])
};
var PaginationItem_default = PaginationItem;

// node_modules/@mui/material/Pagination/Pagination.js
import { jsx as _jsx72 } from "react/jsx-runtime";
var _excluded67 = ["boundaryCount", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"], useUtilityClasses52 = (ownerState) => {
  let {
    classes,
    variant
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", variant],
    ul: ["ul"]
  }, getPaginationUtilityClass, classes);
}, PaginationRoot = styled_default("nav", {
  name: "MuiPagination",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, styles4[ownerState.variant]];
  }
})({}), PaginationUl = styled_default("ul", {
  name: "MuiPagination",
  slot: "Ul",
  overridesResolver: (props, styles4) => styles4.ul
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
});
function defaultGetAriaLabel(type, page, selected) {
  return type === "page" ? `${selected ? "" : "Go to "}page ${page}` : `Go to ${type} page`;
}
var Pagination = /* @__PURE__ */ React86.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiPagination"
  }), {
    boundaryCount = 1,
    className,
    color = "standard",
    count = 1,
    defaultPage = 1,
    disabled = !1,
    getItemAriaLabel = defaultGetAriaLabel,
    hideNextButton = !1,
    hidePrevButton = !1,
    renderItem = (item) => /* @__PURE__ */ _jsx72(PaginationItem_default, _extends75({}, item)),
    shape = "circular",
    showFirstButton = !1,
    showLastButton = !1,
    siblingCount = 1,
    size = "medium",
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose65(props, _excluded67), {
    items
  } = usePagination(_extends75({}, props, {
    componentName: "Pagination"
  })), ownerState = _extends75({}, props, {
    boundaryCount,
    color,
    count,
    defaultPage,
    disabled,
    getItemAriaLabel,
    hideNextButton,
    hidePrevButton,
    renderItem,
    shape,
    showFirstButton,
    showLastButton,
    siblingCount,
    size,
    variant
  }), classes = useUtilityClasses52(ownerState);
  return /* @__PURE__ */ _jsx72(PaginationRoot, _extends75({
    "aria-label": "pagination navigation",
    className: clsx51(classes.root, className),
    ownerState,
    ref
  }, other, {
    children: /* @__PURE__ */ _jsx72(PaginationUl, {
      className: classes.ul,
      ownerState,
      children: items.map((item, index6) => /* @__PURE__ */ _jsx72("li", {
        children: renderItem(_extends75({}, item, {
          color,
          "aria-label": getItemAriaLabel(item.type, item.page, item.selected),
          shape,
          size,
          variant
        }))
      }, index6))
    })
  }));
});
Pagination.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount: integerPropType5,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes67.object,
  /**
   * @ignore
   */
  className: PropTypes67.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: PropTypes67.oneOfType([PropTypes67.oneOf(["primary", "secondary", "standard"]), PropTypes67.string]),
  /**
   * The total number of pages.
   * @default 1
   */
  count: integerPropType5,
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage: integerPropType5,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes67.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @param {bool} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel: PropTypes67.func,
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton: PropTypes67.bool,
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton: PropTypes67.bool,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange: PropTypes67.func,
  /**
   * The current page.
   */
  page: integerPropType5,
  /**
   * Render the item.
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   * @default (item) => <PaginationItem {...item} />
   */
  renderItem: PropTypes67.func,
  /**
   * The shape of the pagination items.
   * @default 'circular'
   */
  shape: PropTypes67.oneOf(["circular", "rounded"]),
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: PropTypes67.bool,
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: PropTypes67.bool,
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount: integerPropType5,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes67.oneOfType([PropTypes67.oneOf(["small", "medium", "large"]), PropTypes67.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes67.oneOfType([PropTypes67.arrayOf(PropTypes67.oneOfType([PropTypes67.func, PropTypes67.object, PropTypes67.bool])), PropTypes67.func, PropTypes67.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes67.oneOfType([PropTypes67.oneOf(["outlined", "text"]), PropTypes67.string])
};
var Pagination_default = Pagination;

// app/routes/sales_.add_.$page.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "ECCS POS - Choose Product" },
  { name: "description", content: "Welcome to eccs-pos!" }
];
async function loader3({
  params,
  request
}) {
  let session = await getSession(
    request.headers.get("Cookie")
  );
  session.set("userId", "90000");
  let url = new URL(request.url), secret = session.has("keySec") ? session.get("keySec") : null, search = url.searchParams.get("search"), page = params.page, product = await getProducts(secret, search?.toString(), parseInt(page));
  return json5({
    product,
    params: search
  });
}
function Productadd() {
  let loadData = useLoaderData4(), [pagination, setPagination] = React87.useState(loadData.product.pagination), navigate = useNavigate2(), navigates = () => {
    navigate("/sales");
  };
  console.log(loadData);
  let changePage = (page) => {
    navigate("/sales/add/" + page);
  }, Search = styled_default("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha13(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha13(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  })), SearchIconWrapper = styled_default("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })), StyledInputBase = styled_default(InputBase3)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch"
        }
      }
    }
  }));
  React87.useEffect(() => {
    console.log("use effect in sales add");
    let cart = JSON.parse(localStorage.getItem("cart") || "{}");
    setBadges(cart.length);
  });
  let submit = useSubmit2(), [open, setOpen] = React87.useState(!1), [openProduct, setOpenProduct] = React87.useState({}), [qty, setQty] = React87.useState(1), [badges, setBadges] = React87.useState(0), [attributes, setAttributes] = React87.useState({}), [attributesID, setAttributID] = React87.useState(0), [attributesDetail, setAttributesDetails] = React87.useState(0), AddToCart = async (item) => {
    let oldcart = JSON.parse(localStorage.getItem("cart") || "{}"), cart = [];
    if (setAttributes.length > 0 && attributesID > 0 && attributesDetail > 0) {
      Object.assign(item, { attribute: [{ attribute_id: attributesID, value: attributesDetail }] });
      let attr = attributes;
      attr[0].data.map((vv) => {
        vv.product_attributes_detail_id == attributesDetail && (Object.assign(item, { attribute_name: attr[0].name + " : " + vv.name }), Object.assign(item, { pidr: parseFloat(vv.price) }), Object.assign(item, { pidr_string: vv.price_string }));
      });
    }
    oldcart?.length > 0 ? (oldcart.map((e) => {
      cart.push(e);
    }), Object.assign(item, { qty_checkout: qty }), cart.push(item)) : (Object.assign(item, { qty_checkout: qty }), cart.push(item)), setBadges(cart.length), localStorage.setItem("cart", JSON.stringify(cart)), setAttributID(0), setAttributes({}), setAttributesDetails(0), handleClose();
  }, qtyInput = (v) => {
    setQty(v);
  }, handleClickOpen = (product) => {
    setOpen(!0), setOpenProduct(product), setAttributes(product.attributes);
  }, handleClose = () => {
    setOpen(!1);
  }, AddProduct2 = (attr) => /* @__PURE__ */ jsxDEV5(React87.Fragment, { children: /* @__PURE__ */ jsxDEV5(
    Dialog2,
    {
      open,
      onClose: handleClose,
      children: [
        /* @__PURE__ */ jsxDEV5(DialogTitle2, { children: "Add To Cart" }, void 0, !1, {
          fileName: "app/routes/sales_.add_.$page.tsx",
          lineNumber: 201,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5(DialogContent2, { children: [
          /* @__PURE__ */ jsxDEV5(DialogContentText2, { children: "Please insert Quantity and choose variant if available." }, void 0, !1, {
            fileName: "app/routes/sales_.add_.$page.tsx",
            lineNumber: 203,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5(
            Box2,
            {
              noValidate: !0,
              component: "form",
              sx: {
                display: "flex",
                flexDirection: "column",
                m: "auto",
                width: "fit-content",
                float: "left"
              },
              children: [
                attr.length > 0 ? /* @__PURE__ */ jsxDEV5(FormControl3, { sx: { marginTop: 1, minWidth: 120 }, children: [
                  /* @__PURE__ */ jsxDEV5(InputLabel3, { id: "demo-simple-select-helper-label", children: attr[0].name }, void 0, !1, {
                    fileName: "app/routes/sales_.add_.$page.tsx",
                    lineNumber: 220,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV5(
                    Select3,
                    {
                      required: !0,
                      labelId: "demo-simple-select-helper-label",
                      id: "demo-simple-select-helper",
                      value: attributesDetail,
                      label: "Age",
                      onChange: (e, v) => {
                        let val_attr = v.props.value;
                        setAttributesDetails(val_attr), setAttributID(attr[0].id);
                      },
                      children: attr[0].data.map((es) => /* @__PURE__ */ jsxDEV5(MenuItem, { value: es.product_attributes_detail_id, children: es.name + " - " + es.price_string }, void 0, !1, {
                        fileName: "app/routes/sales_.add_.$page.tsx",
                        lineNumber: 236,
                        columnNumber: 32
                      }, this))
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/sales_.add_.$page.tsx",
                      lineNumber: 221,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV5(FormHelperText3, { children: "Choose Attributes" }, void 0, !1, {
                    fileName: "app/routes/sales_.add_.$page.tsx",
                    lineNumber: 240,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/sales_.add_.$page.tsx",
                  lineNumber: 219,
                  columnNumber: 36
                }, this) : "",
                /* @__PURE__ */ jsxDEV5(FormControl3, { sx: { mt: 2, minWidth: 120 }, children: /* @__PURE__ */ jsxDEV5(TextField3, { label: "Qty", id: "outlined-size-normal", defaultValue: "1", type: "number", onChange: (event) => {
                  console.log(event.target.value), qtyInput(event.target.value);
                } }, void 0, !1, {
                  fileName: "app/routes/sales_.add_.$page.tsx",
                  lineNumber: 246,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/routes/sales_.add_.$page.tsx",
                  lineNumber: 245,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/sales_.add_.$page.tsx",
              lineNumber: 206,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/sales_.add_.$page.tsx",
          lineNumber: 202,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5(DialogActions2, { children: [
          /* @__PURE__ */ jsxDEV5(Button3, { onClick: () => {
            AddToCart(openProduct);
          }, children: "Add To Cart" }, void 0, !1, {
            fileName: "app/routes/sales_.add_.$page.tsx",
            lineNumber: 254,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV5(Button3, { onClick: handleClose, children: "Close" }, void 0, !1, {
            fileName: "app/routes/sales_.add_.$page.tsx",
            lineNumber: 257,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales_.add_.$page.tsx",
          lineNumber: 253,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 197,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/sales_.add_.$page.tsx",
    lineNumber: 196,
    columnNumber: 7
  }, this), searchProduct = (v) => {
    console.log("search " + v);
    let formData = new FormData();
    formData.append("search", v);
    let currentPage = pagination.next_page - 1;
    submit(formData, {
      action: "/sales/add/" + currentPage,
      method: "GET",
      encType: "application/x-www-form-urlencoded",
      preventScrollReset: !1,
      replace: !1,
      relative: "route"
    });
  }, [alignment, setAlignment] = React87.useState("grid");
  return /* @__PURE__ */ jsxDEV5("div", { style: { marginBottom: "4em" }, children: [
    /* @__PURE__ */ jsxDEV5(Box2, { sx: { "& > :not(style)": { m: 1 } }, children: /* @__PURE__ */ jsxDEV5(Badge, { sx: {
      position: "fixed",
      bottom: (theme) => theme.spacing(2),
      right: (theme) => theme.spacing(2)
    }, badgeContent: badges, color: "primary", children: /* @__PURE__ */ jsxDEV5(
      Fab3,
      {
        color: "primary",
        "aria-label": "add",
        onClick: navigates,
        children: /* @__PURE__ */ jsxDEV5(Icon_default, { children: "shopping_basket" }, void 0, !1, {
          fileName: "app/routes/sales_.add_.$page.tsx",
          lineNumber: 308,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/sales_.add_.$page.tsx",
        lineNumber: 303,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 298,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 297,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5(Grid_default, { container: !0, style: { marginTop: "1em" }, children: /* @__PURE__ */ jsxDEV5(Grid_default, { item: !0, xs: 12, style: { textAlign: "center", marginBottom: "1em" }, children: [
      /* @__PURE__ */ jsxDEV5(Typography_default, { variant: "h4", children: "Choose Product" }, void 0, !1, {
        fileName: "app/routes/sales_.add_.$page.tsx",
        lineNumber: 316,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { children: /* @__PURE__ */ jsxDEV5(
        ToggleButtonGroup,
        {
          color: "primary",
          value: alignment,
          exclusive: !0,
          onChange: (event, newAlignment) => {
            setAlignment(newAlignment), console.log(newAlignment);
          },
          "aria-label": "Platform",
          children: [
            /* @__PURE__ */ jsxDEV5(ToggleButton, { value: "grid", children: /* @__PURE__ */ jsxDEV5(Icon_default, { children: "grid_on" }, void 0, !1, {
              fileName: "app/routes/sales_.add_.$page.tsx",
              lineNumber: 328,
              columnNumber: 48
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales_.add_.$page.tsx",
              lineNumber: 328,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV5(ToggleButton, { value: "list", children: /* @__PURE__ */ jsxDEV5(Icon_default, { children: "view_list" }, void 0, !1, {
              fileName: "app/routes/sales_.add_.$page.tsx",
              lineNumber: 329,
              columnNumber: 48
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales_.add_.$page.tsx",
              lineNumber: 329,
              columnNumber: 21
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/sales_.add_.$page.tsx",
          lineNumber: 321,
          columnNumber: 19
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/sales_.add_.$page.tsx",
        lineNumber: 320,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV5(Search, { children: [
        /* @__PURE__ */ jsxDEV5(SearchIconWrapper, { children: /* @__PURE__ */ jsxDEV5(Icon_default, { children: "search" }, void 0, !1, {
          fileName: "app/routes/sales_.add_.$page.tsx",
          lineNumber: 335,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_.add_.$page.tsx",
          lineNumber: 334,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV5(
          StyledInputBase,
          {
            placeholder: "Search\u2026",
            inputProps: { "aria-label": "search" },
            onKeyUp: (e) => {
              e.key === "Enter" && (searchProduct(e.target.value), e.preventDefault());
            },
            defaultValue: loadData.params
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sales_.add_.$page.tsx",
            lineNumber: 337,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/sales_.add_.$page.tsx",
        lineNumber: 333,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 315,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 314,
      columnNumber: 9
    }, this),
    loadData.product.data.length && alignment == "grid" ? /* @__PURE__ */ jsxDEV5(Grid_default, { container: !0, xs: 12, spacing: 2, children: loadData.product.data.map((item) => /* @__PURE__ */ jsxDEV5(Grid_default, { item: !0, xs: 6, md: 3, lg: 3, children: /* @__PURE__ */ jsxDEV5(Card_default, { sx: { maxWidth: 345 }, children: [
      /* @__PURE__ */ jsxDEV5(
        CardHeader_default,
        {
          action: /* @__PURE__ */ jsxDEV5(IconButton_default, { "aria-label": "settings", children: /* @__PURE__ */ jsxDEV5(Icon_default, { children: "more_vert" }, void 0, !1, {
            fileName: "app/routes/sales_.add_.$page.tsx",
            lineNumber: 361,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/sales_.add_.$page.tsx",
            lineNumber: 360,
            columnNumber: 29
          }, this),
          title: item.nama_produk,
          subheader: "Rp" + numberWithCommas2(item.pidr)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/sales_.add_.$page.tsx",
          lineNumber: 358,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(
        CardMedia_default,
        {
          component: "img",
          height: "194",
          image: item.imageList,
          onLoad: (e) => /* @__PURE__ */ jsxDEV5("p", { children: "POP" }, void 0, !1, {
            fileName: "app/routes/sales_.add_.$page.tsx",
            lineNumber: 373,
            columnNumber: 38
          }, this),
          alt: item.nama_produk
        },
        void 0,
        !1,
        {
          fileName: "app/routes/sales_.add_.$page.tsx",
          lineNumber: 367,
          columnNumber: 25
        },
        this
      ),
      /* @__PURE__ */ jsxDEV5(CardContent_default, {}, void 0, !1, {
        fileName: "app/routes/sales_.add_.$page.tsx",
        lineNumber: 378,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV5(CardActions_default, { disableSpacing: !0, children: /* @__PURE__ */ jsxDEV5(IconButton_default, { onClick: () => {
        handleClickOpen(item);
      }, "aria-label": "add to favorites", children: /* @__PURE__ */ jsxDEV5(Icon_default, { children: "add_shopping_cart" }, void 0, !1, {
        fileName: "app/routes/sales_.add_.$page.tsx",
        lineNumber: 386,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/sales_.add_.$page.tsx",
        lineNumber: 382,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/sales_.add_.$page.tsx",
        lineNumber: 381,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 357,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 356,
      columnNumber: 19
    }, this)) }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 354,
      columnNumber: 15
    }, this) : alignment == "grid" ? /* @__PURE__ */ jsxDEV5("p", { children: /* @__PURE__ */ jsxDEV5("i", { children: "No Product" }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 398,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 397,
      columnNumber: 15
    }, this) : "",
    loadData.product.data.length && alignment == "list" ? /* @__PURE__ */ jsxDEV5(Grid_default, { container: !0, xs: 12, lg: 12, spacing: 2, children: /* @__PURE__ */ jsxDEV5(List3, { sx: { width: "100%", maxWidth: 1500 }, children: loadData.product.data.map((item) => /* @__PURE__ */ jsxDEV5(
      ListItem3,
      {
        sx: { margin: "1em" },
        disableGutters: !0,
        secondaryAction: /* @__PURE__ */ jsxDEV5(IconButton_default, { onClick: () => {
          handleClickOpen(item);
        }, "aria-label": "add to favorites", children: /* @__PURE__ */ jsxDEV5(Icon_default, { children: "add_shopping_cart" }, void 0, !1, {
          fileName: "app/routes/sales_.add_.$page.tsx",
          lineNumber: 415,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales_.add_.$page.tsx",
          lineNumber: 411,
          columnNumber: 25
        }, this),
        children: [
          /* @__PURE__ */ jsxDEV5(ListItemText3, { primary: `${item.nama_produk}` }, void 0, !1, {
            fileName: "app/routes/sales_.add_.$page.tsx",
            lineNumber: 419,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV5(ListItemText3, { primary: "" }, void 0, !1, {
            fileName: "app/routes/sales_.add_.$page.tsx",
            lineNumber: 420,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV5(ListItemText3, { primary: `${"Rp" + numberWithCommas2(item.pidr)}`, sx: { textAlign: "right" } }, void 0, !1, {
            fileName: "app/routes/sales_.add_.$page.tsx",
            lineNumber: 421,
            columnNumber: 23
          }, this)
        ]
      },
      item.nama_produk,
      !0,
      {
        fileName: "app/routes/sales_.add_.$page.tsx",
        lineNumber: 406,
        columnNumber: 23
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 404,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 403,
      columnNumber: 15
    }, this) : alignment == "list" ? /* @__PURE__ */ jsxDEV5("p", { children: /* @__PURE__ */ jsxDEV5("i", { children: "No Product" }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 430,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 429,
      columnNumber: 13
    }, this) : "",
    /* @__PURE__ */ jsxDEV5(Stack_default, { sx: { alignItems: "center", margin: "2em" }, spacing: 3, children: /* @__PURE__ */ jsxDEV5(
      Pagination_default,
      {
        defaultPage: pagination.next_page - 1,
        count: pagination.total_page,
        onChange: (e, value) => {
          console.log(e), console.log(value), changePage(value);
        },
        variant: "outlined",
        shape: "rounded"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/sales_.add_.$page.tsx",
        lineNumber: 435,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/sales_.add_.$page.tsx",
      lineNumber: 434,
      columnNumber: 9
    }, this),
    AddProduct2(attributes)
  ] }, void 0, !0, {
    fileName: "app/routes/sales_.add_.$page.tsx",
    lineNumber: 295,
    columnNumber: 5
  }, this);
}
async function action2({ request }) {
  console.log("action function in sales add");
  let body2 = await request.formData(), search = String(body2.get("search"));
  return search != "" ? redirect3("/sales/add/1?search=" + search) : !0;
}
function numberWithCommas2(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// app/routes/order_.$Idorder.tsx
var order_Idorder_exports = {};
__export(order_Idorder_exports, {
  action: () => action3,
  default: () => index2,
  loader: () => loader4,
  meta: () => meta3
});
import { TableContainer as TableContainer3, Paper as Paper3, Table as Table3, TableHead as TableHead3, TableRow as TableRow3, TableCell as TableCell3, TableBody as TableBody3, Typography as Typography4, Grid as Grid3, Stack as Stack2, Breadcrumbs, Button as Button4, Dialog as Dialog3, DialogActions as DialogActions3, DialogContent as DialogContent3, DialogContentText as DialogContentText3, DialogTitle as DialogTitle3, createFilterOptions as createFilterOptions2, FormControl as FormControl4, InputLabel as InputLabel4, MenuItem as MenuItem2, Select as Select4, Box as Box3 } from "@mui/material";
import { json as json6, redirect as redirect4 } from "@remix-run/node";
import { useLoaderData as useLoaderData5, useNavigate as useNavigate3, NavLink as NavLink2, useSubmit as useSubmit3 } from "@remix-run/react";
import invariant from "tiny-invariant";
import React88 from "react";
import { Fragment as Fragment11, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "ECCS POS - Order " },
  { name: "description", content: "Welcome to eccs-pos!" }
];
async function loader4({
  params,
  request
}) {
  await requireUserSession(request);
  let session = await getSession(request.headers.get("Cookie"));
  session.has("act") && session.get("act") == "order_complete" && session.flash("act", "delete_cart");
  let flash = session.has("act") ? session.get("act") : null, secret = session.has("keySec") ? session.get("keySec") : null;
  invariant(params.Idorder, "Missing Idorder param");
  let idorder = parseInt(params.Idorder), getOrder = await getTransaction(secret, "", 1, 10, idorder), payment = await getPayments(secret?.toString());
  return json6({
    getOrder: await getOrder,
    payment: await payment.json(),
    flash
  }, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
async function action3({ request }) {
  let session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null, body2 = await request.formData(), type = String(body2.get("type"));
  if (console.log(type), request.method == "POST") {
    if (type == "change_payment") {
      let id = body2.get("id"), data = body2.get("data"), changePay = await changePayment(data, secret);
      return changePay.meta.code != 200 && console.log(changePay), redirect4("/order/" + id, {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      });
    }
    if (type == "simulate_pay") {
      let id = body2.get("id"), data = body2.get("data"), simulate = await simulatePay(data, secret);
      simulate.meta.code != 200 && console.log(simulate), setTimeout(() => redirect4("/order/" + id), 2e3);
    }
  }
  return !0;
}
function index2() {
  let order = useLoaderData5(), submit = useSubmit3(), [paymentList, setPaymentList] = React88.useState(), [keyPaymentList, setKeyPaymentList] = React88.useState(), [open, setOpen] = React88.useState(!1), [changPayment, setchangPayment] = React88.useState(""), handleClickOpen = () => {
    setOpen(!0);
  }, handleClose = () => {
    setOpen(!1);
  }, navigate = useNavigate3();
  React88.useEffect(() => {
    order?.flash && order.flash == "delete_cart" && (localStorage.removeItem("cart"), localStorage.removeItem("voucher"));
    let key_temp = [], val_temp = [];
    order.payment?.result.data && ((order.payment?.result.data).map((payment) => {
      payment.value.map((code) => {
        val_temp.push({
          label: code.name,
          id: code.code
        }), key_temp.push({
          id: code.code,
          key: payment.key,
          label: code.name
        });
      });
    }), setPaymentList(val_temp), setKeyPaymentList(key_temp));
  }, []);
  let dtprod = [];
  order.getOrder.data.detail instanceof Array && order.getOrder.data.detail.map((val, idx, []) => {
    let opsdata = {
      product_name: val.nama,
      price: val.harga,
      qty: val.qty,
      total: parseInt(val.harga) * parseInt(val.qty),
      attribute: val.attribute ? val.attribute : []
    };
    dtprod.push(opsdata);
  });
  let filterOptions = createFilterOptions2(
    { ignoreCase: !0, matchFrom: "start" }
  ), handleChange = (event) => {
    setchangPayment(event.target.value);
  }, simulatePays = () => {
    let formData = new FormData(), data = {
      order_id: parseInt(order.getOrder.data.id)
    };
    formData.append("id", order.getOrder.data.id), formData.append("data", JSON.stringify(data)), formData.append("type", "simulate_pay"), submit(formData, {
      action: "/order/" + order.getOrder.data.id,
      method: "POST",
      preventScrollReset: !1,
      replace: !1,
      relative: "route"
    });
  }, handleSubmit = (e) => {
    e.preventDefault();
    let dt_cp = {
      order_id: order.getOrder.data.id,
      payment_key: "E-WALLET",
      payment_name: "QRIS",
      payment_code: "1_xendit",
      cash_payment: order.getOrder.data.total
    };
    keyPaymentList.map((e2) => {
      e2.label == changPayment && (dt_cp.payment_key = e2.key, dt_cp.payment_name = changPayment, dt_cp.payment_code = e2.id);
    });
    let formData = new FormData();
    formData.append("data", JSON.stringify(dt_cp)), formData.append("id", order.getOrder.data.id), formData.append("type", "change_payment"), handleClose(), submit(formData, {
      action: "/order/" + order.getOrder.data.id,
      method: "POST",
      preventScrollReset: !1,
      replace: !1,
      relative: "route"
    });
  }, modalChangepayment = () => {
    let key_temp = [], val_temp = [];
    return order.payment?.result.data && (order.payment?.result.data).map((payment) => {
      payment.value.map((code) => {
        val_temp.push({
          label: code.name,
          id: code.code
        }), key_temp.push({
          id: code.code,
          key: payment.key,
          label: code.name
        });
      });
    }), /* @__PURE__ */ jsxDEV6(Dialog3, { open, onClose: handleClose, children: /* @__PURE__ */ jsxDEV6(Box3, { component: "form", method: "post", onSubmit: handleSubmit, action: "/order/" + order.getOrder.data.id, children: [
      /* @__PURE__ */ jsxDEV6(DialogTitle3, { children: "Change Payment" }, void 0, !1, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 259,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6(DialogContent3, { children: [
        /* @__PURE__ */ jsxDEV6(DialogContentText3, { children: "Change payment, will change your payment method. Please carefully when you changed." }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 261,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6(FormControl4, { fullWidth: !0, sx: { marginTop: "1em" }, children: [
          /* @__PURE__ */ jsxDEV6(InputLabel4, { id: "demo-simple-select-label", children: "Payment" }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 266,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV6(
            Select4,
            {
              name: "changePayment",
              labelId: "demo-simple-select-label",
              id: "demo-simple-select",
              value: changPayment,
              label: "Payment",
              onChange: handleChange,
              children: val_temp.map((payment) => /* @__PURE__ */ jsxDEV6(MenuItem2, { value: payment.label, children: payment.label }, void 0, !1, {
                fileName: "app/routes/order_.$Idorder.tsx",
                lineNumber: 277,
                columnNumber: 32
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 267,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 265,
          columnNumber: 14
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 260,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6(DialogActions3, { children: [
        /* @__PURE__ */ jsxDEV6(Button4, { onClick: handleClose, children: "Cancel" }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 285,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6(Button4, { type: "submit", children: "Change Payment" }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 286,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 284,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/order_.$Idorder.tsx",
      lineNumber: 258,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/order_.$Idorder.tsx",
      lineNumber: 257,
      columnNumber: 13
    }, this);
  };
  return /* @__PURE__ */ jsxDEV6("div", { children: [
    /* @__PURE__ */ jsxDEV6(Grid3, { container: !0, xs: 12, lg: 12, spacing: 2, children: [
      order.getOrder.meta.code == 200 ? /* @__PURE__ */ jsxDEV6(Grid3, { item: !0, xs: 12, lg: 12, sx: { marginTop: "0.5em" }, children: /* @__PURE__ */ jsxDEV6(Breadcrumbs, { "aria-label": "breadcrumb", children: [
        /* @__PURE__ */ jsxDEV6(NavLink2, { to: "/order", children: "List Order" }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 302,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6(Typography4, { color: "text.primary", children: order.getOrder.data.id }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 305,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 301,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 300,
        columnNumber: 15
      }, this) : "",
      /* @__PURE__ */ jsxDEV6(Grid3, { item: !0, xs: 12, lg: order.getOrder.data.status != 33 ? 12 : 8, children: /* @__PURE__ */ jsxDEV6(TableContainer3, { sx: {
        marginTop: "0em"
      }, component: Paper3, children: /* @__PURE__ */ jsxDEV6("div", { hidden: order.getOrder.meta.code != 200, children: /* @__PURE__ */ jsxDEV6(Table3, { sx: { minWidth: 700 }, "aria-label": "spanning table", children: [
        /* @__PURE__ */ jsxDEV6(TableHead3, { children: /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { align: "left", colSpan: 3, children: "Data Order" }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 318,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 317,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 316,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6(TableBody3, { children: [
          /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { children: [
            "Order ID : ",
            order.getOrder.data.id
          ] }, void 0, !0, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 325,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 324,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { children: [
            "No Invoice : ",
            order.getOrder.data.invoice_no
          ] }, void 0, !0, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 328,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 327,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { children: [
            "Date : ",
            order.getOrder.data?.tanggal
          ] }, void 0, !0, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 331,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 330,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { children: [
            "Name : ",
            order.getOrder.data.nama_pelanggan
          ] }, void 0, !0, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 334,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 333,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { children: [
            "Payment : ",
            order.getOrder.data.payment_method == null ? "Cash" : order.getOrder.data.payment_method + " - " + order.getOrder.data.payment.payment_channel
          ] }, void 0, !0, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 337,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 336,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { children: [
            "Status : ",
            order.getOrder.data.status == 33 ? "Waiting Payment" : order.getOrder.data.status == 5 ? "Completed" : "Status unknown"
          ] }, void 0, !0, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 340,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 339,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 323,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 315,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 314,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 311,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 310,
        columnNumber: 17
      }, this),
      order.getOrder.data.status == 33 ? /* @__PURE__ */ jsxDEV6(Grid3, { item: !0, xs: 12, lg: 4, children: [
        /* @__PURE__ */ jsxDEV6(TableContainer3, { sx: {
          marginTop: "0em"
        }, component: Paper3, children: /* @__PURE__ */ jsxDEV6("div", { hidden: order.getOrder.meta.code != 200, children: /* @__PURE__ */ jsxDEV6(Table3, { sx: { minWidth: 100 }, "aria-label": "spanning table", children: [
          /* @__PURE__ */ jsxDEV6(TableHead3, { children: /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { align: "left", colSpan: 3, children: "Payment Method" }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 358,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 357,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 356,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV6(TableBody3, { children: order.getOrder.data.payment.type == "img" ? /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { children: [
            /* @__PURE__ */ jsxDEV6("img", { style: { width: "45%", textAlign: "center" }, src: order.getOrder.data.payment.payment_link }, void 0, !1, {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 367,
              columnNumber: 44
            }, this),
            /* @__PURE__ */ jsxDEV6(Typography4, { variant: "h5", sx: { marginLeft: "1em" }, children: order.getOrder.data.payment.payment_channel }, void 0, !1, {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 368,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 367,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 366,
            columnNumber: 29
          }, this) : /* @__PURE__ */ jsxDEV6(Fragment11, { children: [
            /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { children: [
              "Ref Number : ",
              order.getOrder.data.payment.payment_link
            ] }, void 0, !0, {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 372,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 371,
              columnNumber: 32
            }, this),
            /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { children: [
              "Channel : ",
              order.getOrder.data.payment_method,
              " - ",
              order.getOrder.data.payment.payment_channel
            ] }, void 0, !0, {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 375,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 374,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV6(TableRow3, { children: /* @__PURE__ */ jsxDEV6(TableCell3, { children: /* @__PURE__ */ jsxDEV6(Typography4, { variant: "h6", children: "Please transfer amount of total to ref number." }, void 0, !1, {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 378,
              columnNumber: 48
            }, this) }, void 0, !1, {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 378,
              columnNumber: 37
            }, this) }, void 0, !1, {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 377,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 371,
            columnNumber: 30
          }, this) }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 363,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 355,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 354,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 351,
          columnNumber: 21
        }, this),
        order.getOrder.data.status == 33 ? /* @__PURE__ */ jsxDEV6(Stack2, { direction: "row", sx: { marginTop: "0.5em" }, spacing: 1, children: [
          /* @__PURE__ */ jsxDEV6(Button4, { variant: "contained", color: "primary", onClick: handleClickOpen, children: "Change Payment" }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 389,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV6(Button4, { variant: "contained", color: "secondary", onClick: simulatePays, children: "Simulate Payment" }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 390,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 388,
          columnNumber: 57
        }, this) : ""
      ] }, void 0, !0, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 350,
        columnNumber: 17
      }, this) : ""
    ] }, void 0, !0, {
      fileName: "app/routes/order_.$Idorder.tsx",
      lineNumber: 297,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ jsxDEV6(TableContainer3, { sx: { marginTop: "1em" }, component: Paper3, children: /* @__PURE__ */ jsxDEV6("div", { hidden: order.getOrder.meta.code != 200, children: /* @__PURE__ */ jsxDEV6(Table3, { sx: { minWidth: 700 }, "aria-label": "spanning table", children: [
      /* @__PURE__ */ jsxDEV6(TableHead3, { children: /* @__PURE__ */ jsxDEV6(TableRow3, { children: [
        /* @__PURE__ */ jsxDEV6(TableCell3, { children: "Product Name" }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 405,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6(TableCell3, { align: "right", children: "Qty." }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 406,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6(TableCell3, { align: "right", children: "Price" }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 407,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6(TableCell3, { align: "right", children: "Total" }, void 0, !1, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 408,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 404,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 403,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV6(TableBody3, { children: [
        dtprod.map((row) => /* @__PURE__ */ jsxDEV6(TableRow3, { children: [
          /* @__PURE__ */ jsxDEV6(TableCell3, { children: /* @__PURE__ */ jsxDEV6(Stack2, { direction: "column", children: [
            /* @__PURE__ */ jsxDEV6(Typography4, { variant: "caption", children: row.product_name }, void 0, !1, {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 416,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV6(Typography4, { variant: "caption", children: row.attribute[0].nama_attribute }, void 0, !1, {
              fileName: "app/routes/order_.$Idorder.tsx",
              lineNumber: 417,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 415,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 414,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV6(TableCell3, { align: "right", children: row.qty }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 420,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV6(TableCell3, { align: "right", children: [
            "Rp ",
            row.attribute.length > 0 ? numberWithCommas3(row.attribute[0].price) : numberWithCommas3(row.price)
          ] }, void 0, !0, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 421,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV6(TableCell3, { align: "right", children: [
            "Rp ",
            row.attribute.length > 0 ? numberWithCommas3(row.attribute[0].price * row.qty) : numberWithCommas3(row.total)
          ] }, void 0, !0, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 424,
            columnNumber: 29
          }, this)
        ] }, row.product_name, !0, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 413,
          columnNumber: 25
        }, this)),
        /* @__PURE__ */ jsxDEV6(TableRow3, { children: [
          /* @__PURE__ */ jsxDEV6(TableCell3, { rowSpan: 3 }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 430,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV6(TableCell3, { colSpan: 2, children: "Subtotal" }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 431,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV6(TableCell3, { align: "right", children: order.getOrder.data.total_barang_string }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 432,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 429,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6(TableRow3, { children: [
          /* @__PURE__ */ jsxDEV6(TableCell3, { children: "Discount" }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 435,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV6(TableCell3, { align: "right" }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 436,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV6(TableCell3, { align: "right", children: order.getOrder.data.voucher_nominal_string }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 437,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 434,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV6(TableRow3, { children: [
          /* @__PURE__ */ jsxDEV6(TableCell3, { colSpan: 2, children: "Total" }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 440,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV6(TableCell3, { align: "right", children: order.getOrder.data.total_string }, void 0, !1, {
            fileName: "app/routes/order_.$Idorder.tsx",
            lineNumber: 441,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/order_.$Idorder.tsx",
          lineNumber: 439,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/order_.$Idorder.tsx",
        lineNumber: 411,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/order_.$Idorder.tsx",
      lineNumber: 402,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/order_.$Idorder.tsx",
      lineNumber: 401,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/order_.$Idorder.tsx",
      lineNumber: 400,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { hidden: order.getOrder.meta.code == 200, children: /* @__PURE__ */ jsxDEV6(Typography4, { variant: "h3", sx: { textAlign: "center", marginTop: "3em" }, children: order.getOrder.meta.message }, void 0, !1, {
      fileName: "app/routes/order_.$Idorder.tsx",
      lineNumber: 450,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/order_.$Idorder.tsx",
      lineNumber: 449,
      columnNumber: 13
    }, this),
    modalChangepayment()
  ] }, void 0, !0, {
    fileName: "app/routes/order_.$Idorder.tsx",
    lineNumber: 296,
    columnNumber: 9
  }, this);
}
function numberWithCommas3(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// app/routes/sales_.checkout.tsx
var sales_checkout_exports = {};
__export(sales_checkout_exports, {
  action: () => action4,
  loader: () => loader5
});
async function loader5({
  request
}) {
  return !0;
}
async function action4({ request }) {
  console.log(request);
  let body2 = await request.formData(), email = String(body2.get("email")), ss = String(body2.get("myKey"));
  return console.log(email), console.log(ss), console.log("masuk sales checkout"), !0;
}

// app/routes/sales_.response.tsx
var sales_response_exports = {};
__export(sales_response_exports, {
  default: () => index3
});
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function index3() {
  return /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7("p", { children: "Golang" }, void 0, !1, {
    fileName: "app/routes/sales_.response.tsx",
    lineNumber: 4,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/sales_.response.tsx",
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

// app/routes/sales_.create.tsx
var sales_create_exports = {};
__export(sales_create_exports, {
  default: () => index4
});
import { useMatches as useMatches2, Outlet as Outlet3 } from "@remix-run/react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function index4() {
  let ums = useMatches2();
  return console.log(ums), /* @__PURE__ */ jsxDEV8("div", { children: [
    /* @__PURE__ */ jsxDEV8("p", { children: "Sales/create" }, void 0, !1, {
      fileName: "app/routes/sales_.create.tsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV8(Outlet3, {}, void 0, !1, {
      fileName: "app/routes/sales_.create.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sales_.create.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/routes/users_.create.tsx
var users_create_exports = {};
__export(users_create_exports, {
  action: () => action5
});
import { redirect as redirect5 } from "@remix-run/node";
async function action5({ request }) {
  console.log("Masuk user_create");
  let formData = await request.formData(), email = String(formData.get("email")), nama_depan = String(formData.get("nama_depan")), nama_belakang = String(formData.get("nama_belakang")), phone = String(formData.get("phone")), alamat = String(formData.get("alamat")), data = {
    email,
    nama_depan,
    nama_belakang,
    phone,
    alamat
  }, session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null, response = await createUsers(secret, data);
  return response.meta.code != 200 ? response.meta.message : redirect5("/users");
}

// app/routes/users_.delete.tsx
var users_delete_exports = {};
__export(users_delete_exports, {
  action: () => action6
});
import { redirect as redirect6 } from "@remix-run/node";
async function action6({ request }) {
  let session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null, formData = await request.formData(), id = String(formData.get("id")), response = await deleteUsers(secret, parseInt(id));
  if (response.meta.code != 200)
    console.log(response.meta.message);
  else
    return console.log(response.meta.message), redirect6("/users");
}

// app/routes/users_.update.tsx
var users_update_exports = {};
__export(users_update_exports, {
  action: () => action7
});
import { redirect as redirect7 } from "@remix-run/node";
async function action7({ request }) {
  let formData = await request.formData(), id = String(formData.get("id")), nama_depan = String(formData.get("nama_depan")), nama_belakang = String(formData.get("nama_belakang")), phone = String(formData.get("phone")), alamat = String(formData.get("alamat")), data = {
    id,
    nama_depan,
    nama_belakang,
    phone,
    alamat
  }, session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null, response = await updateUsers(secret, parseInt(id), data);
  return response.meta.code != 200 ? (console.log(data), console.log(response.meta.message), response.meta.message) : (console.log(response.meta.message), redirect7("/users"));
}

// app/routes/products.tsx
var products_exports = {};
__export(products_exports, {
  default: () => Index,
  loader: () => loader6,
  meta: () => meta4
});
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useLoaderData as useLoaderData6 } from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var loader6 = async ({ request }) => {
  await requireUserSession(request);
  let session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null;
  return await getProduct(secret);
}, meta4 = () => [
  {
    title: "ECCS POS - Products"
  },
  {
    name: "description",
    content: "Welcome to eccs-pos!"
  }
], columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1
  },
  {
    field: "image",
    headerName: "Image",
    flex: 1,
    renderCell: (params) => /* @__PURE__ */ jsxDEV9(
      "img",
      {
        style: {
          width: "25%"
        },
        src: params.value
      },
      void 0,
      !1,
      {
        fileName: "app/routes/products.tsx",
        lineNumber: 45,
        columnNumber: 33
      },
      this
    )
  },
  {
    field: "barcode",
    headerName: "SKU",
    flex: 1
  },
  {
    field: "product_name",
    headerName: "Name",
    flex: 1
  },
  {
    field: "category",
    headerName: "Category",
    flex: 1
  },
  {
    field: "price",
    headerName: "Price",
    flex: 1
  },
  {
    field: "stock",
    headerName: "Stock",
    flex: 1
  },
  {
    field: "weight",
    headerName: "Weight",
    flex: 1
  }
];
function Index() {
  let myusers = useLoaderData6();
  return /* @__PURE__ */ jsxDEV9(
    "div",
    {
      style: {
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8"
      },
      children: [
        /* @__PURE__ */ jsxDEV9(
          Box_default,
          {
            sx: {
              marginTop: "1em",
              textAlign: "center"
            },
            children: /* @__PURE__ */ jsxDEV9(Typography_default, { gutterBottom: !0, variant: "h5", component: "h5", children: "List Product" }, void 0, !1, {
              fileName: "app/routes/products.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/products.tsx",
            lineNumber: 90,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV9(Box_default, { sx: {
          boxShadow: 1
        }, children: /* @__PURE__ */ jsxDEV9(
          "div",
          {
            style: {
              height: "100%",
              width: "100%"
            },
            children: /* @__PURE__ */ jsxDEV9(
              DataGrid,
              {
                rows: myusers.result,
                columns,
                initialState: {
                  pagination: {
                    paginationModel: {
                      page: 0,
                      pageSize: 10
                    }
                  },
                  filter: {}
                },
                slots: {
                  toolbar: GridToolbar
                },
                slotProps: {
                  toolbar: {
                    showQuickFilter: !0
                  }
                },
                pageSizeOptions: [10, 50]
              },
              void 0,
              !1,
              {
                fileName: "app/routes/products.tsx",
                lineNumber: 108,
                columnNumber: 21
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/products.tsx",
            lineNumber: 103,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/products.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/products.tsx",
      lineNumber: 84,
      columnNumber: 9
    },
    this
  );
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader7
});
import { redirect as redirect8 } from "@remix-run/node";
var loader7 = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  return session.unset("keySec"), session.unset("userId"), session.unset("voucher"), session.unset("companyid"), redirect8("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// app/routes/report.tsx
var report_exports = {};
__export(report_exports, {
  default: () => Index2,
  meta: () => meta5
});
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "ECCS POS - Report" },
  { name: "description", content: "Welcome to eccs-pos!" }
];
function Index2() {
  return /* @__PURE__ */ jsxDEV10("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ jsxDEV10("p", { children: "This is Report" }, void 0, !1, {
    fileName: "app/routes/report.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/report.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index3,
  loader: () => loader8,
  meta: () => meta6
});
import { json as json11 } from "@remix-run/node";
import { useLoaderData as useLoaderData7 } from "@remix-run/react";

// app/components/dashboard/displayPanel.tsx
import { Grid as Grid4, Box as Box4, Typography as Typography5, Stack as Stack3, Icon as Icon3 } from "@mui/material";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function DisplayPanel(data_dashboard) {
  return /* @__PURE__ */ jsxDEV11("div", { children: /* @__PURE__ */ jsxDEV11(Grid4, { container: !0, spacing: 2, children: [
    /* @__PURE__ */ jsxDEV11(Grid4, { item: !0, xs: 12, lg: 3, children: /* @__PURE__ */ jsxDEV11(Box4, { sx: {
      "& > :not(style)": { m: 1, width: "24ch" },
      padding: "0.5em",
      boxShadow: 2
    }, children: [
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "subtitle1", children: "Today Transaction" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 17,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Stack3, { direction: "row", spacing: 3, children: [
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", children: data_dashboard.today_transaction?.today }, void 0, !1, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 19,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", color: parseInt(data_dashboard.today_transaction?.percentage.replace("%", "")) > 1 ? "green" : "red", children: [
          data_dashboard.today_transaction?.percentage,
          /* @__PURE__ */ jsxDEV11(Icon3, { children: parseInt(data_dashboard.today_transaction?.percentage.replace("%", "")) > 1 ? "trending_up" : "trending_down" }, void 0, !1, {
            fileName: "app/components/dashboard/displayPanel.tsx",
            lineNumber: 22,
            columnNumber: 18
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 20,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 18,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "body2", children: [
        "Yesterday : ",
        data_dashboard.today_transaction?.yesterday
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 26,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 11,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11(Grid4, { item: !0, xs: 12, lg: 2, children: /* @__PURE__ */ jsxDEV11(Box4, { sx: {
      "& > :not(style)": { m: 1, width: "24ch" },
      padding: "0.5em",
      boxShadow: 2
    }, children: [
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "subtitle1", children: "Today Repeat Customers" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 36,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Stack3, { direction: "row", spacing: 3, children: /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", children: data_dashboard.today_repeat_customers }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "body2", children: "\xA0" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 40,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11(Grid4, { item: !0, xs: 12, lg: 2, children: /* @__PURE__ */ jsxDEV11(Box4, { sx: {
      "& > :not(style)": { m: 1, width: "24ch" },
      padding: "0.5em",
      boxShadow: 2
    }, children: [
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "subtitle1", children: "Total Transaction" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 51,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Stack3, { direction: "row", spacing: 3, children: /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", children: data_dashboard.total_transaction }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "body2", children: "\xA0" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11(Grid4, { item: !0, xs: 12, lg: 3, children: /* @__PURE__ */ jsxDEV11(Box4, { sx: {
      "& > :not(style)": { m: 1, width: "24ch" },
      padding: "0.5em",
      boxShadow: 2
    }, children: [
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "subtitle1", children: "Total Revenue(Rp)" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Stack3, { direction: "row", spacing: 3, children: /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", children: data_dashboard.total_revenue }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "body2", children: "\xA0" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 69,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11(Grid4, { item: !0, xs: 12, lg: 2, children: /* @__PURE__ */ jsxDEV11(Box4, { sx: {
      "& > :not(style)": { m: 1, width: "15ch" },
      padding: "0.5em",
      boxShadow: 2
    }, children: [
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "subtitle1", children: "Total Members" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Stack3, { direction: "row", spacing: 3, children: /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", children: data_dashboard.total_member }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 80,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "body2", children: "\xA0" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 83,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11(Grid4, { item: !0, xs: 12, lg: 3, children: /* @__PURE__ */ jsxDEV11(Box4, { sx: {
      "& > :not(style)": { m: 1, width: "28ch" },
      padding: "0.5em",
      boxShadow: 2
    }, children: [
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "subtitle1", children: "Today Revenue(Rp)" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 95,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Stack3, { direction: "row", spacing: 3, children: [
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", children: data_dashboard.today_revenue.today }, void 0, !1, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 97,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", color: parseInt(data_dashboard.today_revenue.percentage.replace("%", "")) > 1 ? "green" : "red", children: [
          data_dashboard.today_revenue.percentage,
          /* @__PURE__ */ jsxDEV11(Icon3, { children: parseInt(data_dashboard.today_revenue.percentage.replace("%", "")) > 1 ? "trending_up" : "trending_down" }, void 0, !1, {
            fileName: "app/components/dashboard/displayPanel.tsx",
            lineNumber: 100,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 96,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "body2", children: [
        "Yesterday : ",
        data_dashboard.today_revenue.yesterday
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 103,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 90,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 89,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11(Grid4, { item: !0, xs: 12, lg: 2, children: /* @__PURE__ */ jsxDEV11(Box4, { sx: {
      "& > :not(style)": { m: 1, width: "24ch" },
      padding: "0.5em",
      boxShadow: 2
    }, children: [
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "subtitle1", children: "Total Product Sold" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 113,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Stack3, { direction: "row", spacing: 3, children: [
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", children: data_dashboard.today_product.today }, void 0, !1, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", color: parseInt(data_dashboard.today_product.percentage.replace("%", "")) > 1 ? "green" : "red", children: [
          data_dashboard.today_product.percentage,
          /* @__PURE__ */ jsxDEV11(Icon3, { children: parseInt(data_dashboard.today_product.percentage.replace("%", "")) > 1 ? "trending_up" : "trending_down" }, void 0, !1, {
            fileName: "app/components/dashboard/displayPanel.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 114,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "body2", children: [
        "Yesterday : ",
        data_dashboard.today_product.yesterday
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 121,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 108,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11(Grid4, { item: !0, xs: 12, lg: 2, children: /* @__PURE__ */ jsxDEV11(Box4, { sx: {
      "& > :not(style)": { m: 1, width: "24ch" },
      padding: "0.5em",
      boxShadow: 2
    }, children: [
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "subtitle1", children: "This Month Transactions" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 131,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Stack3, { direction: "row", spacing: 3, children: [
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", children: data_dashboard.monthly_transacion.this_month }, void 0, !1, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", color: parseInt(data_dashboard.monthly_transacion.percentage.replace("%", "")) > 1 ? "green" : "red", children: [
          data_dashboard.monthly_transacion.percentage,
          /* @__PURE__ */ jsxDEV11(Icon3, { children: parseInt(data_dashboard.monthly_transacion.percentage.replace("%", "")) > 1 ? "trending_up" : "trending_down" }, void 0, !1, {
            fileName: "app/components/dashboard/displayPanel.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 132,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "body2", children: [
        "Last Month : ",
        data_dashboard.monthly_transacion.last_month
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 139,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 126,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 125,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11(Grid4, { item: !0, xs: 12, lg: 3, children: /* @__PURE__ */ jsxDEV11(Box4, { sx: {
      "& > :not(style)": { m: 1, width: "30ch" },
      padding: "0.5em",
      boxShadow: 2
    }, children: [
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "subtitle1", children: "This Month Revenue(Rp)" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 149,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Stack3, { direction: "row", spacing: 3, children: [
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", children: data_dashboard.monthly_revenue.this_month }, void 0, !1, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 151,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", color: parseInt(data_dashboard.monthly_revenue.percentage.replace("%", "")) > 1 ? "green" : "red", children: [
          data_dashboard.monthly_revenue.percentage,
          /* @__PURE__ */ jsxDEV11(Icon3, { children: parseInt(data_dashboard.monthly_revenue.percentage.replace("%", "")) > 1 ? "trending_up" : "trending_down" }, void 0, !1, {
            fileName: "app/components/dashboard/displayPanel.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 150,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "body2", children: [
        "Last Month : ",
        data_dashboard.monthly_revenue.last_month
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 157,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 144,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 143,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11(Grid4, { item: !0, xs: 12, lg: 2, children: /* @__PURE__ */ jsxDEV11(Box4, { sx: {
      "& > :not(style)": { m: 1, width: "24ch" },
      padding: "0.5em",
      boxShadow: 2
    }, children: [
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "subtitle1", children: "This Month Members" }, void 0, !1, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 167,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Stack3, { direction: "row", spacing: 3, children: [
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", children: data_dashboard.monthly_member.this_month }, void 0, !1, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV11(Typography5, { variant: "h6", color: parseInt(data_dashboard.monthly_member.percentage.replace("%", "")) > 1 ? "green" : "red", children: [
          data_dashboard.monthly_member.percentage,
          /* @__PURE__ */ jsxDEV11(Icon3, { children: parseInt(data_dashboard.monthly_member.percentage.replace("%", "")) > 1 ? "trending_up" : "trending_down" }, void 0, !1, {
            fileName: "app/components/dashboard/displayPanel.tsx",
            lineNumber: 172,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/dashboard/displayPanel.tsx",
          lineNumber: 170,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 168,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV11(Typography5, { variant: "body2", children: [
        "Last Month : ",
        data_dashboard.monthly_member.last_month
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/displayPanel.tsx",
        lineNumber: 175,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 162,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/displayPanel.tsx",
      lineNumber: 161,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/displayPanel.tsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/dashboard/displayPanel.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/components/dashboard/activeOrder.tsx
import { DataGrid as DataGrid2 } from "@mui/x-data-grid";
import { Button as Button5, Divider as Divider3, Icon as Icon4, Stack as Stack4, Typography as Typography6 } from "@mui/material";
import { useNavigate as useNavigate4 } from "@remix-run/react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var columns2 = [
  { field: "id", headerName: "ID Order", width: 250 },
  { field: "invoice_no", headerName: "Invoice", width: 250 },
  { field: "tanggal", headerName: "Date", width: 250 },
  { field: "total", headerName: "Total", width: 250 },
  {
    field: "status",
    headerName: "Status",
    width: 250,
    renderCell: (param) => /* @__PURE__ */ jsxDEV12(Typography6, { children: param.value == 33 ? "Waiting Payment" : "Unknown Status" }, void 0, !1, {
      fileName: "app/components/dashboard/activeOrder.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this)
  },
  {
    field: "action",
    headerName: "Action",
    width: 250,
    renderCell(params) {
      let navigate = useNavigate4();
      return /* @__PURE__ */ jsxDEV12(
        Stack4,
        {
          direction: "row",
          divider: /* @__PURE__ */ jsxDEV12(Divider3, { orientation: "vertical", flexItem: !0 }, void 0, !1, {
            fileName: "app/components/dashboard/activeOrder.tsx",
            lineNumber: 34,
            columnNumber: 22
          }, this),
          spacing: 2,
          children: /* @__PURE__ */ jsxDEV12(Button5, { onClick: () => {
            navigate("/order/" + params.id);
          }, children: /* @__PURE__ */ jsxDEV12(Icon4, { children: "rate_review" }, void 0, !1, {
            fileName: "app/components/dashboard/activeOrder.tsx",
            lineNumber: 40,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/dashboard/activeOrder.tsx",
            lineNumber: 37,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/dashboard/activeOrder.tsx",
          lineNumber: 32,
          columnNumber: 13
        },
        this
      );
    }
  }
];
function ActiveOrder(data) {
  return /* @__PURE__ */ jsxDEV12("div", { style: { height: 400, width: "100%", marginTop: "1.5em", marginBottom: "3em" }, children: [
    /* @__PURE__ */ jsxDEV12(Typography6, { variant: "h5", sx: { textAlign: "center" }, children: "Active Orders" }, void 0, !1, {
      fileName: "app/components/dashboard/activeOrder.tsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV12(
      DataGrid2,
      {
        rows: data,
        columns: columns2,
        initialState: {
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        },
        pageSizeOptions: [5, 10]
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/activeOrder.tsx",
        lineNumber: 60,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/activeOrder.tsx",
    lineNumber: 56,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var loader8 = async ({ request }) => {
  await requireUserSession(request);
  let session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null, dashboard = await getDataDashboard(secret, 1);
  return json11({
    dashboard: await dashboard.json()
  }, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}, meta6 = () => [
  { title: "ECCS POS - Dashboard" },
  { name: "description", content: "Welcome to eccs-pos!" }
];
function Index3() {
  let data_dashboard = useLoaderData7().dashboard.result.data;
  return /* @__PURE__ */ jsxDEV13("div", { children: /* @__PURE__ */ jsxDEV13(Box_default, { sx: { flexGrow: 1, marginTop: "1em" }, children: [
    DisplayPanel(data_dashboard),
    ActiveOrder(data_dashboard.active_order.data)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action8,
  default: () => Login,
  loader: () => loader9,
  meta: () => meta7
});
import { json as json12, redirect as redirect10 } from "@remix-run/node";
import { useActionData, useLoaderData as useLoaderData8 } from "@remix-run/react";
import { Box as Box5, Button as Button6, Grid as Grid5, Stack as Stack5, TextField as TextField5, Typography as Typography7 } from "@mui/material";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var meta7 = () => [
  { title: "ECCS POS - Login " },
  { name: "description", content: "Welcome to eccs-pos!" }
], loader9 = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  if (session.has("userId"))
    return redirect10("/");
  let data = {
    error: session.get("error")
  };
  return json12(data, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
async function action8({ request }) {
  let session = await getSession(request.headers.get("Cookie")), form = await request.formData(), email = form.get("email"), password = form.get("password"), login = await authLogin({
    email,
    password
  });
  return login.meta.code != 200 ? (session.flash("error", login.meta.message), redirect10("/login", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })) : (session.set("userId", login.data[0].id), session.set("keySec", login.data[0].token), session.set("companyid", login.data[0].pcompany_id), redirect10("/", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  }));
}
function Login() {
  let { error } = useLoaderData8(), actionData = useActionData();
  return /* @__PURE__ */ jsxDEV14("div", { children: /* @__PURE__ */ jsxDEV14(
    Grid5,
    {
      container: !0,
      spacing: 0,
      direction: "column",
      alignItems: "center",
      justifyContent: "center",
      sx: {
        minHeight: "80vh",
        // backgroundColor:"orange",
        marginTop: "2em"
      },
      children: /* @__PURE__ */ jsxDEV14(Grid5, { item: !0, xs: 12, children: /* @__PURE__ */ jsxDEV14(
        Box5,
        {
          component: "form",
          sx: {
            "& > :not(style)": { m: 1, width: "30ch" },
            padding: "2em",
            boxShadow: 2
          },
          noValidate: !0,
          autoComplete: "off",
          method: "post",
          action: "/login",
          children: /* @__PURE__ */ jsxDEV14(
            Stack5,
            {
              direction: "column",
              spacing: "1",
              useFlexGap: !0,
              sx: {
                margin: "2em"
              },
              children: [
                /* @__PURE__ */ jsxDEV14(Typography7, { variant: "h6", sx: {
                  textAlign: "center"
                }, children: "ECCS POS LOGIN" }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 137,
                  columnNumber: 29
                }, this),
                error ? /* @__PURE__ */ jsxDEV14(Typography7, { variant: "body1", sx: { textAlign: "center", color: "red", marginTop: "1em", marginBottom: "1em" }, children: error }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 143,
                  columnNumber: 39
                }, this) : null,
                /* @__PURE__ */ jsxDEV14(TextField5, { required: !0, name: "email", type: "email", margin: "normal", id: "email", label: "Email", variant: "outlined" }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 147,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV14(TextField5, { required: !0, name: "password", type: "password", margin: "normal", id: "password", label: "Password", variant: "outlined" }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 148,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV14(Button6, { type: "submit", variant: "contained", color: "primary", children: "Login" }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 149,
                  columnNumber: 29
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 128,
              columnNumber: 25
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 116,
          columnNumber: 21
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 97,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/login.tsx",
      lineNumber: 85,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 83,
    columnNumber: 9
  }, this);
}

// app/routes/order.tsx
var order_exports = {};
__export(order_exports, {
  action: () => action9,
  default: () => Index4,
  loader: () => loader10,
  meta: () => meta8
});
import { DataGrid as DataGrid3, GridToolbar as GridToolbar2 } from "@mui/x-data-grid";
import { json as json13 } from "@remix-run/node";
import { useLoaderData as useLoaderData9, useNavigate as useNavigate5, useSubmit as useSubmit4 } from "@remix-run/react";
import { Button as Button7, Divider as Divider4, Icon as Icon5 } from "@mui/material";
import React89 from "react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var loader10 = async ({ request }) => {
  await requireUserSession(request);
  let session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null, page = 1, pagesize = 20, search = "";
  session.has("nextpage") && (page = session.get("nextpage")), session.has("search") && (search = session.get("search"));
  let order = await getTransaction(secret, search, page, pagesize, 0), total = order.pagination.total_page * pagesize;
  return json13({
    flash: secret,
    order,
    total
  }, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};
async function action9({ request }) {
  let session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null, body2 = await request.formData(), type = String(body2.get("type"));
  if (request.method == "POST") {
    if (type == "changepage") {
      let nextpage = body2.get("next"), pagesize = body2.get("pagesize");
      return session.flash("nextpage", nextpage), session.flash("pagesize", pagesize), json13({}, {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      });
    }
    if (type == "searchorder") {
      let search = body2.get("search");
      return session.flash("search", search), json13({}, {
        headers: {
          "Set-Cookie": await commitSession(session)
        }
      });
    }
  }
  return !0;
}
var meta8 = () => [
  {
    title: "ECCS POS - Order"
  },
  {
    name: "description",
    content: "Welcome to eccs-pos!"
  }
], columns3 = [
  {
    field: "id",
    headerName: "ID",
    flex: 1
  },
  {
    field: "invoice_no",
    headerName: "Invoice",
    flex: 1
  },
  {
    field: "nama_pelanggan",
    headerName: "Customer",
    flex: 1
  },
  {
    field: "tanggal",
    headerName: "Date",
    flex: 1
  },
  {
    field: "total_string",
    headerName: "Total",
    flex: 1,
    renderCell(params) {
      return /* @__PURE__ */ jsxDEV15("p", { children: params.value }, void 0, !1, {
        fileName: "app/routes/order.tsx",
        lineNumber: 137,
        columnNumber: 17
      }, this);
    }
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell(params) {
      return /* @__PURE__ */ jsxDEV15(Typography_default, { variant: "button", color: params.value == 33 ? "lightcoral" : params.value == 6 ? "red" : "green", children: params.value == 33 ? "Waiting Payment" : params.value == 6 ? "Cancelled" : "Completed" }, void 0, !1, {
        fileName: "app/routes/order.tsx",
        lineNumber: 146,
        columnNumber: 17
      }, this);
    }
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    renderCell(params) {
      let navigate = useNavigate5();
      return /* @__PURE__ */ jsxDEV15(
        Stack_default,
        {
          direction: "row",
          divider: /* @__PURE__ */ jsxDEV15(Divider4, { orientation: "vertical", flexItem: !0 }, void 0, !1, {
            fileName: "app/routes/order.tsx",
            lineNumber: 162,
            columnNumber: 26
          }, this),
          spacing: 2,
          children: /* @__PURE__ */ jsxDEV15(Button7, { onClick: () => {
            navigate("/order/" + params.id);
          }, children: /* @__PURE__ */ jsxDEV15(Icon5, { children: "rate_review" }, void 0, !1, {
            fileName: "app/routes/order.tsx",
            lineNumber: 168,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/routes/order.tsx",
            lineNumber: 165,
            columnNumber: 21
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/order.tsx",
          lineNumber: 160,
          columnNumber: 17
        },
        this
      );
    }
  }
];
function Index4() {
  let order = useLoaderData9(), submit = useSubmit4(), [paginationModel, setPaginationModel] = React89.useState({
    page: 0,
    pageSize: 5
  }), [loading, setLoading] = React89.useState(!1), [rowCount, setRowCount] = React89.useState(order.total), [search, setSearch] = React89.useState("");
  console.log(order);
  let handleSearchOrder = (query) => {
    let formData = new FormData();
    formData.append("search", query.toString()), formData.append("type", "searchorder"), console.log(query), submit(formData, {
      action: "/order",
      method: "POST",
      preventScrollReset: !1,
      replace: !1,
      relative: "route"
    });
  }, handleChangePage = (nextp) => {
    let formData = new FormData();
    setPaginationModel(nextp);
    let pageNext = paginationModel.page + 1;
    formData.append("next", pageNext.toString()), formData.append("pagesize", nextp.pageSize.toString()), formData.append("type", "changepage"), submit(formData, {
      action: "/order",
      method: "POST",
      preventScrollReset: !1,
      replace: !1,
      relative: "route"
    });
  };
  return /* @__PURE__ */ jsxDEV15(
    "div",
    {
      style: {
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8"
      },
      children: [
        /* @__PURE__ */ jsxDEV15(
          Box_default,
          {
            sx: {
              marginTop: "1em",
              textAlign: "center"
            },
            children: /* @__PURE__ */ jsxDEV15(Typography_default, { gutterBottom: !0, variant: "h5", component: "h5", children: "List Order" }, void 0, !1, {
              fileName: "app/routes/order.tsx",
              lineNumber: 253,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/order.tsx",
            lineNumber: 248,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV15(Box_default, { sx: {
          boxShadow: 1
        }, children: /* @__PURE__ */ jsxDEV15(
          "div",
          {
            style: {
              height: "100%",
              width: "100%"
            },
            children: /* @__PURE__ */ jsxDEV15(
              DataGrid3,
              {
                paginationMode: "server",
                rowCount,
                rows: order.order ? order.order.data : [],
                columns: columns3,
                initialState: {
                  pagination: {
                    paginationModel: {
                      page: 0,
                      pageSize: 20
                    }
                  },
                  filter: {}
                },
                slots: {
                  toolbar: GridToolbar2
                },
                slotProps: {
                  toolbar: {
                    showQuickFilter: !0
                  }
                },
                pageSizeOptions: [20, 50, 100],
                onPaginationModelChange: (p) => {
                  handleChangePage(p);
                },
                loading,
                onFilterModelChange: (e) => {
                  handleSearchOrder(e.quickFilterValues[0]);
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/order.tsx",
                lineNumber: 266,
                columnNumber: 21
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/order.tsx",
            lineNumber: 261,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/order.tsx",
          lineNumber: 258,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/order.tsx",
      lineNumber: 242,
      columnNumber: 9
    },
    this
  );
}

// app/routes/sales.tsx
var sales_exports = {};
__export(sales_exports, {
  action: () => action10,
  default: () => index5,
  loader: () => loader11,
  meta: () => meta9
});
import * as React91 from "react";
import { redirect as redirect11, json as json15 } from "@remix-run/node";
import { useLoaderData as useLoaderData11, Form as Form3 } from "@remix-run/react";
import { useSubmit as useSubmit5 } from "@remix-run/react";
import { Dialog as Dialog5, DialogTitle as DialogTitle5, DialogContent as DialogContent5, DialogContentText as DialogContentText5, DialogActions as DialogActions5, Snackbar as Snackbar3, Alert as Alert3 } from "@mui/material";

// app/components/product/addProduct.tsx
import { Box as Box6, Button as Button8, CircularProgress as CircularProgress4, Dialog as Dialog4, DialogActions as DialogActions4, DialogContent as DialogContent4, DialogContentText as DialogContentText4, DialogTitle as DialogTitle4, FormControl as FormControl5, FormHelperText as FormHelperText4, Grid as Grid6, Icon as Icon6, InputBase as InputBase4, InputLabel as InputLabel5, MenuItem as MenuItem3, Pagination as Pagination3, Select as Select5, Stack as Stack6, TextField as TextField6, Typography as Typography8, alpha as alpha14, styled as styled2 } from "@mui/material";
import { json as json14 } from "@remix-run/node";
import { useLoaderData as useLoaderData10, useRevalidator as useRevalidator3 } from "@remix-run/react";
import React90 from "react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function addProduct() {
  let loadata = useLoaderData10(), revalidator = useRevalidator3(), Search = styled2("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha14(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha14(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  })), SearchIconWrapper = styled2("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })), StyledInputBase = styled2(InputBase4)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch"
        }
      }
    }
  })), [myproduct, setMyProduct] = React90.useState([]), [totalPage, setTotalPage] = React90.useState(), [page, setpage] = React90.useState(1), [loading, setLoading] = React90.useState(!0), [open, setOpen] = React90.useState(!1), [openProduct, setOpenProduct] = React90.useState({}), [qty, setQty] = React90.useState(1), [badges, setBadges] = React90.useState(0), [attributes, setAttributes] = React90.useState({}), [attributesID, setAttributID] = React90.useState(0), [attributesDetail, setAttributesDetails] = React90.useState(0), [search, setSearch] = React90.useState(""), AddToCart = async (item) => {
    let oldcart = JSON.parse(localStorage.getItem("cart") || "{}"), cart = [];
    if (Object.assign(item, { qty_checkout: qty }), setAttributes.length > 0 && attributesID > 0 && attributesDetail > 0) {
      Object.assign(item, { attribute: [{ attribute_id: attributesID, value: attributesDetail }] });
      let attr = attributes;
      attr[0].data.map((vv) => {
        vv.product_attributes_detail_id == attributesDetail && (Object.assign(item, { attribute_name: attr[0].name + " : " + vv.name }), Object.assign(item, { pidr: parseFloat(vv.price) }), Object.assign(item, { pidr_string: vv.price_string }));
      });
    }
    if (oldcart?.length > 0) {
      let skip = !1, new_prod = !1;
      oldcart.map((e) => {
        if (skip = !1, item.idproduk === e.idproduk)
          if (console.log("same ID produk"), parseInt(item.attribute[0]?.attribute_id) === parseInt(e.attribute[0]?.attribute_id) && parseInt(item.attribute[0]?.value) === parseInt(e.attribute[0]?.value)) {
            let final_checkout_qty = parseInt(e.qty_checkout) + parseInt(item.qty_checkout);
            Object.assign(e, { qty_checkout: final_checkout_qty }), cart.push(e), skip = !0, console.log("log push to cart");
          } else
            skip == !1 && (console.log("same id produk but different attr"), cart.push(item));
        else
          skip == !1 && (console.log("not same"), cart.push(item));
        skip == !1 && new_prod == !1 && (console.log("push cart outside"), cart.push(e));
      });
    } else
      console.log("new cart"), Object.assign(item, { qty_checkout: qty }), cart.push(item);
    console.log("END"), setBadges(cart.length), localStorage.setItem("cart", JSON.stringify(cart)), setAttributID(0), setAttributes({}), setAttributesDetails(0), setQty(1), revalidator.revalidate(), handleClose();
  }, qtyInput = (v) => {
    setQty(v);
  }, handleClickOpen = (product) => {
    setOpen(!0), setOpenProduct(product), setAttributes(product.attributes);
  }, handleClose = () => {
    setOpen(!1);
  }, AddProduct2 = (attr) => /* @__PURE__ */ jsxDEV16(React90.Fragment, { children: /* @__PURE__ */ jsxDEV16(
    Dialog4,
    {
      open,
      onClose: handleClose,
      children: [
        /* @__PURE__ */ jsxDEV16(DialogTitle4, { children: "Add To Cart" }, void 0, !1, {
          fileName: "app/components/product/addProduct.tsx",
          lineNumber: 207,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV16(DialogContent4, { children: [
          /* @__PURE__ */ jsxDEV16(DialogContentText4, { children: "Please insert Quantity and choose variant if available." }, void 0, !1, {
            fileName: "app/components/product/addProduct.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV16(
            Box6,
            {
              noValidate: !0,
              component: "form",
              sx: {
                display: "flex",
                flexDirection: "column",
                m: "auto",
                width: "fit-content",
                float: "left"
              },
              children: [
                attr.length > 0 ? /* @__PURE__ */ jsxDEV16(FormControl5, { sx: { marginTop: 1, minWidth: 120 }, children: [
                  /* @__PURE__ */ jsxDEV16(InputLabel5, { id: "demo-simple-select-helper-label", children: attr[0].name }, void 0, !1, {
                    fileName: "app/components/product/addProduct.tsx",
                    lineNumber: 226,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV16(
                    Select5,
                    {
                      required: !0,
                      labelId: "demo-simple-select-helper-label",
                      id: "demo-simple-select-helper",
                      value: attributesDetail,
                      label: "Age",
                      onChange: (e, v) => {
                        let val_attr = v.props.value;
                        setAttributesDetails(val_attr), setAttributID(attr[0].id);
                      },
                      children: attr[0].data.map((es) => /* @__PURE__ */ jsxDEV16(MenuItem3, { value: es.product_attributes_detail_id, children: es.name + " - " + es.price_string }, void 0, !1, {
                        fileName: "app/components/product/addProduct.tsx",
                        lineNumber: 242,
                        columnNumber: 36
                      }, this))
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/product/addProduct.tsx",
                      lineNumber: 227,
                      columnNumber: 23
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV16(FormHelperText4, { children: "Choose Attributes" }, void 0, !1, {
                    fileName: "app/components/product/addProduct.tsx",
                    lineNumber: 246,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/product/addProduct.tsx",
                  lineNumber: 225,
                  columnNumber: 40
                }, this) : "",
                /* @__PURE__ */ jsxDEV16(FormControl5, { sx: { mt: 2, minWidth: 120 }, children: /* @__PURE__ */ jsxDEV16(TextField6, { label: "Qty", id: "outlined-size-normal", defaultValue: "1", type: "number", onChange: (event) => {
                  console.log(event.target.value), qtyInput(event.target.value);
                } }, void 0, !1, {
                  fileName: "app/components/product/addProduct.tsx",
                  lineNumber: 252,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/components/product/addProduct.tsx",
                  lineNumber: 251,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/product/addProduct.tsx",
              lineNumber: 212,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/product/addProduct.tsx",
          lineNumber: 208,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV16(DialogActions4, { children: [
          /* @__PURE__ */ jsxDEV16(Button8, { onClick: () => {
            AddToCart(openProduct);
          }, children: "Add To Cart" }, void 0, !1, {
            fileName: "app/components/product/addProduct.tsx",
            lineNumber: 260,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV16(Button8, { onClick: handleClose, children: "Close" }, void 0, !1, {
            fileName: "app/components/product/addProduct.tsx",
            lineNumber: 263,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/product/addProduct.tsx",
          lineNumber: 259,
          columnNumber: 15
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/product/addProduct.tsx",
      lineNumber: 203,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/product/addProduct.tsx",
    lineNumber: 202,
    columnNumber: 11
  }, this), searchProduct = async (v) => {
    console.log("search " + v), setSearch(v);
  };
  return React90.useEffect(() => {
    (async () => {
      console.log("use efect call");
      let jk = await getProducts(loadata.secret, search, page, 12), dataprod = [];
      jk.data.map((el) => {
        dataprod.push(el);
      }), setTotalPage(jk.pagination.total_page), setMyProduct(dataprod), setLoading(!1);
    })();
  }, [search, badges, page]), /* @__PURE__ */ jsxDEV16("div", { children: [
    /* @__PURE__ */ jsxDEV16(Box6, { sx: { marginTop: "1em", textAlign: "center" }, children: [
      " ",
      /* @__PURE__ */ jsxDEV16(Typography8, { gutterBottom: !0, variant: "h4", component: "h4", children: "\xA0" }, void 0, !1, {
        fileName: "app/components/product/addProduct.tsx",
        lineNumber: 299,
        columnNumber: 64
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product/addProduct.tsx",
      lineNumber: 299,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { style: { marginLeft: "1em" }, children: /* @__PURE__ */ jsxDEV16(Box6, { boxShadow: 2, children: /* @__PURE__ */ jsxDEV16(Grid6, { container: !0, sx: { margin: "0.5em" }, xs: 12, md: 12, lg: 12, children: [
      /* @__PURE__ */ jsxDEV16(Grid6, { item: !0, xs: 12, md: 12, sx: {
        marginBottom: "1em",
        marginLeft: "-1em",
        minWidth: { sx: "34ch", md: "97ch" }
      }, children: /* @__PURE__ */ jsxDEV16(Search, { children: [
        /* @__PURE__ */ jsxDEV16(SearchIconWrapper, { children: /* @__PURE__ */ jsxDEV16(Icon6, { children: "search" }, void 0, !1, {
          fileName: "app/components/product/addProduct.tsx",
          lineNumber: 314,
          columnNumber: 37
        }, this) }, void 0, !1, {
          fileName: "app/components/product/addProduct.tsx",
          lineNumber: 313,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ jsxDEV16(
          StyledInputBase,
          {
            placeholder: "Search\u2026",
            inputProps: { "aria-label": "search" },
            onKeyUp: (e) => {
              e.key === "Enter" && (searchProduct(e.target.value), e.preventDefault());
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/product/addProduct.tsx",
            lineNumber: 316,
            columnNumber: 33
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/product/addProduct.tsx",
        lineNumber: 312,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/product/addProduct.tsx",
        lineNumber: 307,
        columnNumber: 25
      }, this),
      loading == !0 ? /* @__PURE__ */ jsxDEV16(Grid6, { item: !0, xs: 12, md: 12, children: /* @__PURE__ */ jsxDEV16(Stack6, { alignItems: "center", children: /* @__PURE__ */ jsxDEV16(CircularProgress4, {}, void 0, !1, {
        fileName: "app/components/product/addProduct.tsx",
        lineNumber: 335,
        columnNumber: 37
      }, this) }, void 0, !1, {
        fileName: "app/components/product/addProduct.tsx",
        lineNumber: 334,
        columnNumber: 33
      }, this) }, void 0, !1, {
        fileName: "app/components/product/addProduct.tsx",
        lineNumber: 333,
        columnNumber: 29
      }, this) : myproduct.map((item) => /* @__PURE__ */ jsxDEV16(Grid6, { item: !0, xs: 6, md: 2, lg: 2, sx: {
        textAlign: "center"
      }, children: /* @__PURE__ */ jsxDEV16("div", { onClick: () => {
        handleClickOpen(item);
      }, children: /* @__PURE__ */ jsxDEV16(
        Box6,
        {
          boxShadow: 1,
          sx: {
            // margin:"0.2em",
            // width:"10ch",
            // backgroundColor:"orangered"
            alignItems: "center",
            padding: "1em"
          },
          children: [
            /* @__PURE__ */ jsxDEV16(
              Box6,
              {
                component: "img",
                sx: {
                  maxHeight: { xs: 60, md: 100 },
                  maxWidth: { xs: 350, md: 250 }
                  // backgroundColor:"yellow"
                },
                alt: item.nama_produk,
                src: item.imageList
              },
              void 0,
              !1,
              {
                fileName: "app/components/product/addProduct.tsx",
                lineNumber: 354,
                columnNumber: 45
              },
              this
            ),
            /* @__PURE__ */ jsxDEV16(Typography8, { noWrap: !0, variant: "body2", fontSize: 10, children: item.nama_produk }, void 0, !1, {
              fileName: "app/components/product/addProduct.tsx",
              lineNumber: 365,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ jsxDEV16(Typography8, { variant: "caption", children: item.pidr_string }, void 0, !1, {
              fileName: "app/components/product/addProduct.tsx",
              lineNumber: 368,
              columnNumber: 45
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/product/addProduct.tsx",
          lineNumber: 345,
          columnNumber: 41
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/product/addProduct.tsx",
        lineNumber: 342,
        columnNumber: 37
      }, this) }, void 0, !1, {
        fileName: "app/components/product/addProduct.tsx",
        lineNumber: 339,
        columnNumber: 33
      }, this)),
      /* @__PURE__ */ jsxDEV16(Grid6, { item: !0, xs: 12, md: 12, children: /* @__PURE__ */ jsxDEV16(Stack6, { spacing: 3, sx: { alignItems: "center", margin: "2em" }, children: /* @__PURE__ */ jsxDEV16(
        Pagination3,
        {
          count: totalPage,
          showFirstButton: !0,
          showLastButton: !0,
          onChange: (e, value) => {
            setpage(value), setSearch(""), setLoading(!0);
          },
          variant: "outlined",
          shape: "rounded"
        },
        void 0,
        !1,
        {
          fileName: "app/components/product/addProduct.tsx",
          lineNumber: 380,
          columnNumber: 33
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/product/addProduct.tsx",
        lineNumber: 379,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/components/product/addProduct.tsx",
        lineNumber: 378,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/product/addProduct.tsx",
      lineNumber: 304,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/components/product/addProduct.tsx",
      lineNumber: 301,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/product/addProduct.tsx",
      lineNumber: 300,
      columnNumber: 13
    }, this),
    AddProduct2(attributes)
  ] }, void 0, !0, {
    fileName: "app/components/product/addProduct.tsx",
    lineNumber: 298,
    columnNumber: 9
  }, this);
}

// app/routes/sales.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
async function loader11({ request }) {
  await requireUserSession(request);
  let session = await getSession(request.headers.get("Cookie")), storageSessions = session.has("voucher") ? session.get("voucher") : {}, message = session.has("message") ? session.get("message") : null, alert = session.has("alert") ? session.get("alert") : null, object = session.has("object") ? session.get("object") : null, act = session.has("act") ? session.get("act") : null, secret = session.has("keySec") ? session.get("keySec") : null, users = await getUsers(secret?.toString()), payment = await getPayments(secret?.toString());
  return json15({
    users: await users.json(),
    payment: await payment.json(),
    // product: product,
    sessions: storageSessions,
    message,
    alert,
    object,
    act,
    secret
  }, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
async function action10({ request }) {
  let session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null, body2 = await request.formData(), type = String(body2.get("type"));
  if (request.method == "POST") {
    if (type == "checkout") {
      let checkout = String(body2.get("checkout")), response = await createTransaction(checkout, secret?.toString());
      if (response.meta.code != 200)
        session.flash("message", response.meta.message), session.flash("alert", 0);
      else
        return session.flash("act", "order_complete"), redirect11(
          "/order/" + response.data.id,
          {
            headers: {
              "Set-Cookie": await commitSession(session)
            }
          }
        );
    }
    if (type == "check_voucher") {
      let checkout = String(body2.get("checkout")), response = await createTransaction(checkout, secret?.toString());
      if (response.meta.code != 200)
        session.flash("message", response.meta.message), session.flash("alert", 0);
      else
        return session.flash("object", response.data), session.flash("message", "Voucher apllied."), session.flash("alert", 1), redirect11("/sales", {
          headers: {
            "Set-Cookie": await commitSession(session)
          }
        });
    }
    if (type == "delete_voucher" && session.flash("act", "delete_voucher"), type == "calling_alert") {
      let type_alert = String(body2.get("type_alert")), message_alert = String(body2.get("message_alert"));
      session.flash("message", message_alert), session.flash("alert", type_alert == "error" ? 0 : 1);
    }
  }
  return redirect11("/sales", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}
var meta9 = () => [
  {
    title: "ECCS POS - Sales"
  },
  {
    name: "description",
    content: "Welcome to eccs-pos!"
  }
];
function numberWithCommas4(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function index5(props = !1) {
  let myusers = useLoaderData11(), [cart, setCart] = React91.useState({}), [total, setTotal] = React91.useState(0), [discount, setDiscount] = React91.useState(0), [voucher, setVoucher] = React91.useState(""), [useVoucher, setuseVoucher] = React91.useState(!1), [delCart, setDeleteCart] = React91.useState(0), [triggerUse, settriggerUse] = React91.useState(props), [snack, setSnack] = React91.useState(!1), [paymentList, setPaymentList] = React91.useState(), [keyPaymentList, setKeyPaymentList] = React91.useState(), [product, setProduct] = React91.useState(myusers.product), [addProd, setAddProd] = React91.useState(!1);
  React91.useEffect(() => {
    myusers?.act && myusers?.act == "delete_voucher" && (setVoucher(""), setDiscount(0), setuseVoucher(!1), localStorage.removeItem("voucher"));
    let getData = JSON.parse(localStorage.getItem("cart") || "{}"), UpdateData = [];
    if (getData instanceof Array) {
      if (getData.map((val, idx, []) => {
        val.idproduk != delCart && UpdateData.push(val);
      }), myusers.object != null) {
        let obj = myusers.object;
        obj.voucher && localStorage.setItem("voucher", JSON.stringify(obj.voucher));
      }
      localStorage.removeItem("cart"), localStorage.setItem("cart", JSON.stringify(UpdateData));
    }
    if (JSON.parse(localStorage.getItem("cart") || "{}") instanceof Array) {
      let data2 = JSON.parse(localStorage.getItem("cart") || "{}"), dtprod = [], getTotal = 0;
      data2.map((val, idx, []) => {
        let opsdata = {
          product_name: val.nama_produk,
          price: val.pidr_string,
          qty: val.qty_checkout,
          total: parseInt(val.pidr) * parseInt(val.qty_checkout)
        };
        getTotal += parseInt(val.pidr) * parseInt(val.qty_checkout), dtprod.push(opsdata);
      });
      let finalGetdiscount = 0, getVoucher = JSON.parse(localStorage.getItem("voucher") || "0");
      if (getVoucher?.voucher_type)
        switch (setVoucher(getVoucher.voucher_code), setuseVoucher(!0), getVoucher.voucher_type) {
          case "percent":
            let find = getTotal * parseInt(getVoucher.value_total) / 100;
            finalGetdiscount = getVoucher.max_voucher_total > 0 && find > getVoucher.max_voucher_total ? getVoucher.max_voucher_total : find;
            break;
          case "value":
            finalGetdiscount = parseInt(getVoucher.value_total);
            break;
          default:
            break;
        }
      setCart(data2), setTotal(getTotal), setDiscount(finalGetdiscount);
    }
    let key_temp = [], val_temp = [];
    myusers.payment.result?.data && (myusers.payment.result.data.map((payment) => {
      payment.value.map((code) => {
        val_temp.push({
          label: code.name,
          id: code.code
        }), key_temp.push({
          id: code.code,
          key: payment.key,
          label: code.name
        });
      });
    }), setPaymentList(val_temp), setKeyPaymentList(key_temp)), cart && handleOpenSnack();
  }, [addProd, triggerUse, myusers, delCart]);
  let handleCloseSnack = () => {
    setSnack(!1);
  }, handleOpenSnack = () => {
    setSnack(!0);
  }, deleteCart = (e) => {
    setDeleteCart(e), settriggerUse(!triggerUse);
  }, TableProductCheckout = (data, total2, discount2, deleteCart2) => {
    let dtprod = [];
    data instanceof Array && data.map((val, idx, []) => {
      let opsdata = {
        idproduk: val.idproduk,
        product_name: val.nama_produk,
        attribute_name: val.attribute_name ? val.attribute_name : null,
        price: val.pidr_string,
        qty: val.qty_checkout,
        total: parseInt(val.pidr) * parseInt(val.qty_checkout)
      };
      dtprod.push(opsdata);
    });
    let [openAlert, setOpenAlert] = React91.useState(!1), [productTarget, setProductTarget] = React91.useState(0), handleClickOpenAlert = (e) => {
      setOpenAlert(!0);
    }, handleCloseAlert = (e) => {
      setOpenAlert(!1);
    }, handleSubmitDelCart = (e) => {
      e.preventDefault(), deleteCart2(productTarget), handleCloseAlert(e);
    };
    return /* @__PURE__ */ jsxDEV17("div", { children: [
      /* @__PURE__ */ jsxDEV17(Box_default, { sx: { marginTop: "1em", textAlign: "center" }, children: [
        " ",
        /* @__PURE__ */ jsxDEV17(Typography_default, { gutterBottom: !0, variant: "h4", component: "h4", children: " Checkout" }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 352,
          columnNumber: 68
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sales.tsx",
        lineNumber: 352,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV17(Box_default, { sx: { height: "50ch" }, children: [
        /* @__PURE__ */ jsxDEV17(TableContainer_default, { component: Paper_default, sx: { maxHeight: "76%" }, children: /* @__PURE__ */ jsxDEV17(Table_default, { sx: { minWidth: "auto", width: "100%", height: "38ch" }, stickyHeader: !0, "aria-label": "sticky table", children: [
          /* @__PURE__ */ jsxDEV17(TableHead_default, { children: /* @__PURE__ */ jsxDEV17(TableRow_default, { children: [
            /* @__PURE__ */ jsxDEV17(TableCell_default, { width: "4ch" }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 358,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV17(TableCell_default, { children: " List Item" }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 359,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ jsxDEV17(TableCell_default, { align: "right", children: " Total" }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 362,
              columnNumber: 37
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 357,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 356,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV17(TableBody_default, { children: dtprod.map((row) => /* @__PURE__ */ jsxDEV17(TableRow_default, { sx: { "&:last-child td, &:last-child th": { border: 0 } }, children: [
            /* @__PURE__ */ jsxDEV17(TableCell_default, { component: "th", scope: "row", children: /* @__PURE__ */ jsxDEV17(Stack_default, { spacing: 1, direction: "row", children: /* @__PURE__ */ jsxDEV17(
              Button_default,
              {
                style: { minWidth: "4ch" },
                onClick: () => {
                  handleClickOpenAlert("delete"), setProductTarget(row.idproduk);
                },
                color: "error",
                size: "small",
                variant: "contained",
                children: " X"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/sales.tsx",
                lineNumber: 370,
                columnNumber: 37
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 369,
              columnNumber: 35
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 368,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV17(TableCell_default, { component: "th", scope: "row", children: [
              /* @__PURE__ */ jsxDEV17(Typography_default, { variant: "body2", children: row.product_name }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 379,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV17(Typography_default, { variant: "caption", children: row.attribute_name ? " - " + row.attribute_name : "" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 380,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ jsxDEV17(Typography_default, { variant: "body2", children: [
                row.price,
                " x ",
                row.qty,
                " Pcs"
              ] }, void 0, !0, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 381,
                columnNumber: 37
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 378,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV17(TableCell_default, { align: "right", children: [
              " Rp.",
              numberWithCommas4(row.total)
            ] }, void 0, !0, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 385,
              columnNumber: 33
            }, this)
          ] }, row.product_name, !0, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 367,
            columnNumber: 33
          }, this)) }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 365,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 355,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 354,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV17(Stack_default, { useFlexGap: !0, flexWrap: "wrap", direction: "row", sx: { bgcolor: "#1976d2", color: "white" }, children: [
          /* @__PURE__ */ jsxDEV17(Grid_default, { xs: 6, md: 6, lg: 6, children: /* @__PURE__ */ jsxDEV17(Box_default, { children: [
            /* @__PURE__ */ jsxDEV17(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "caption", component: "h5", children: " Total Before Discount" }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 393,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV17(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "caption", component: "h5", children: " Discount " }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 394,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV17(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "h5", component: "h5", children: " Total" }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 395,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 392,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 391,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV17(Grid_default, { xs: 6, md: 6, lg: 6, children: /* @__PURE__ */ jsxDEV17(Box_default, { children: [
            /* @__PURE__ */ jsxDEV17(Typography_default, { margin: "0.5em", textAlign: "right", gutterBottom: !0, variant: "caption", component: "h5", children: [
              " Rp.",
              numberWithCommas4(parseInt(total2))
            ] }, void 0, !0, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 400,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV17(Typography_default, { margin: "0.5em", textAlign: "right", gutterBottom: !0, variant: "caption", component: "h5", children: [
              " Rp.",
              numberWithCommas4(discount2 ? parseInt(discount2) : 0)
            ] }, void 0, !0, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 401,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV17(Typography_default, { margin: "0.5em", textAlign: "right", gutterBottom: !0, variant: "h5", component: "h5", children: [
              " Rp.",
              numberWithCommas4(parseInt(total2) - (discount2 ? parseInt(discount2) : 0))
            ] }, void 0, !0, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 402,
              columnNumber: 33
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 399,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 398,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 390,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sales.tsx",
        lineNumber: 353,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV17(Dialog5, { open: openAlert, onClose: handleCloseAlert, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description", children: [
        /* @__PURE__ */ jsxDEV17(DialogTitle5, { id: "alert-dialog-title", children: [
          " ",
          "Delete Product from cart"
        ] }, void 0, !0, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 409,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV17(DialogContent5, { children: /* @__PURE__ */ jsxDEV17(DialogContentText5, { id: "alert-dialog-description", children: " Remove this product from your cart,are you agree ? " }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 411,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 410,
          columnNumber: 22
        }, this),
        /* @__PURE__ */ jsxDEV17(DialogActions5, { children: [
          /* @__PURE__ */ jsxDEV17(Button_default, { onClick: handleCloseAlert, children: " Disagree" }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 414,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDEV17(Form3, { onSubmit: (e) => {
            handleSubmitDelCart(e);
          }, children: /* @__PURE__ */ jsxDEV17(Button_default, { type: "submit", autoFocus: !0, children: " Agree" }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 416,
            columnNumber: 33
          }, this) }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 415,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 413,
          columnNumber: 22
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sales.tsx",
        lineNumber: 408,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sales.tsx",
      lineNumber: 350,
      columnNumber: 13
    }, this);
  }, TableTotalCheckout = (voucher2, paymentList2, keypaymentList) => {
    let submit = useSubmit5(), [customer, setCustomer] = React91.useState(0), [preText, setPreText] = React91.useState(voucher2.toString()), [UsePayment, setUsePayment] = React91.useState(""), [UsePaymentName, setUsePaymentName] = React91.useState(""), users = useLoaderData11().users.result.map((record) => ({
      label: record.nama_lengkap != null ? record.nama_lengkap : "No name",
      id: record.id
    })), onTagsChange = (event, values, reason) => {
      reason === "reset" && setCustomer(0), setCustomer(values.id);
    }, filterOptions = createFilterOptions(
      { ignoreCase: !0, matchFrom: "start" }
    ), handleUsePayment = (event, values, reason) => {
      reason === "clear" ? (setUsePayment(""), setUsePaymentName("")) : (setUsePayment(values.id), setUsePaymentName(values.label));
    };
    async function handleSubmit(event, data, type, option) {
      event.preventDefault();
      let formData = new FormData();
      (data.length ? data : !1) == !1 && (formData.append("type", "calling_alert"), formData.append("type_alert", "error"), formData.append("message_alert", "Cart is empty"), submit(formData, {
        action: "/sales",
        method: "post",
        encType: "application/x-www-form-urlencoded",
        preventScrollReset: !1,
        replace: !1,
        relative: "route"
      })), UsePayment == "" && (formData.append("type", "calling_alert"), formData.append("type_alert", "error"), formData.append("message_alert", "Choose Payment!"), submit(formData, {
        action: "/sales",
        method: "post",
        encType: "application/x-www-form-urlencoded",
        preventScrollReset: !1,
        replace: !1,
        relative: "route"
      }));
      let checkoutData = {
        customer_id: customer,
        payment_key: "",
        payment_name: "",
        payment_code: "",
        cash_payment: total,
        cart: [],
        type
      };
      checkoutData.payment_code = UsePayment, checkoutData.payment_name = UsePaymentName, keypaymentList.map((e) => {
        e.label == UsePaymentName && (checkoutData.payment_key = e.key);
      }), data.map((product2) => {
        let ready = {
          product_id: product2.idproduk,
          qty: parseInt(product2.qty_checkout),
          attribute: product2.attribute ? product2.attribute : [],
          attribute_note: ""
        };
        checkoutData.cart.push(ready);
      }), type == "check_voucher" && Object.assign(checkoutData, { use_voucher: 1, voucher_code: preText }), useVoucher === !0 && Object.assign(checkoutData, { use_voucher: 1, voucher_code: voucher2 }), formData.append("checkout", JSON.stringify(checkoutData)), formData.append("type", type), submit(formData, {
        action: "/sales",
        method: "post",
        encType: "application/x-www-form-urlencoded",
        preventScrollReset: !1,
        replace: !1,
        relative: "route"
      });
    }
    return /* @__PURE__ */ jsxDEV17("div", { children: /* @__PURE__ */ jsxDEV17(Stack_default, { direction: "column", justifyContent: "space-around", alignItems: "stretch", spacing: 0.5, children: [
      " ",
      /* @__PURE__ */ jsxDEV17(Box_default, { bgcolor: "#f5f5f5", children: /* @__PURE__ */ jsxDEV17(Stack_default, { useFlexGap: !0, flexWrap: "wrap", direction: "row", children: [
        /* @__PURE__ */ jsxDEV17(Grid_default, { xs: 12, md: 12, lg: 12, children: /* @__PURE__ */ jsxDEV17(Box_default, { children: /* @__PURE__ */ jsxDEV17(
          Autocomplete_default,
          {
            size: "small",
            freeSolo: !0,
            disablePortal: !0,
            id: "combo-box-demo",
            filterOptions,
            options: users,
            sx: { width: 300 },
            renderInput: (params) => /* @__PURE__ */ jsxDEV17(
              TextField_default,
              {
                sx: { margin: "0.5em" },
                ...params,
                label: "Customer"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/sales.tsx",
                lineNumber: 574,
                columnNumber: 49
              },
              this
            ),
            onChange: onTagsChange
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sales.tsx",
            lineNumber: 572,
            columnNumber: 33
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 571,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 570,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV17(Grid_default, { xs: 12, md: 12, lg: 12, children: /* @__PURE__ */ jsxDEV17(Form3, { method: "POST", onSubmit: (e) => {
          handleSubmit(e, cart, voucher2 == "" ? "check_voucher" : "delete_voucher", !1);
        }, children: /* @__PURE__ */ jsxDEV17(Box_default, { children: [
          useVoucher === !0 ? /* @__PURE__ */ jsxDEV17(
            TextField_default,
            {
              size: "small",
              variant: "outlined",
              sx: { margin: "0.5em" },
              id: "outlined-required",
              label: "Voucher",
              defaultValue: preText,
              value: voucher2,
              style: { color: "white" },
              onChange: (e) => setPreText(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/sales.tsx",
              lineNumber: 590,
              columnNumber: 37
            },
            this
          ) : /* @__PURE__ */ jsxDEV17(
            TextField_default,
            {
              size: "small",
              variant: "outlined",
              sx: { margin: "0.5em" },
              id: "outlined-required",
              label: "Voucher",
              defaultValue: preText,
              style: { color: "white" },
              onChange: (e) => setPreText(e.target.value)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/sales.tsx",
              lineNumber: 595,
              columnNumber: 37
            },
            this
          ),
          /* @__PURE__ */ jsxDEV17(Button_default, { type: "submit", sx: { alignContent: "flex-start", marginTop: "1em" }, color: voucher2 == "" ? "primary" : "error", size: "large", children: voucher2 == "" ? "Use" : "Remove" }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 602,
            columnNumber: 37
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 588,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 585,
          columnNumber: 29
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 584,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV17(Grid_default, { xs: 12, md: 12, lg: 12, children: /* @__PURE__ */ jsxDEV17(
          Autocomplete_default,
          {
            size: "small",
            freeSolo: !0,
            disablePortal: !0,
            id: "combo-box-demo",
            filterOptions,
            options: paymentList2,
            sx: { width: 300 },
            renderInput: (params) => /* @__PURE__ */ jsxDEV17(
              TextField_default,
              {
                sx: { margin: "0.5em" },
                ...params,
                label: "Payment"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/sales.tsx",
                lineNumber: 609,
                columnNumber: 49
              },
              this
            ),
            onChange: handleUsePayment
          },
          void 0,
          !1,
          {
            fileName: "app/routes/sales.tsx",
            lineNumber: 607,
            columnNumber: 29
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 606,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV17(Divider_default, { variant: "middle" }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 620,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV17(Grid_default, { xs: 12, md: 12, lg: 12, children: /* @__PURE__ */ jsxDEV17(Box_default, { sx: { margin: "0em", marginTop: "0.5em" }, children: /* @__PURE__ */ jsxDEV17(Form3, { method: "POST", action: "checkout", onSubmit: (e) => {
          handleSubmit(e, cart, "checkout", !1);
        }, children: [
          /* @__PURE__ */ jsxDEV17(Input_default, { type: "hidden", size: "small", name: "email", id: "email", defaultValue: "wasdas@asdas.com" }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 628,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV17(Button_default, { type: "submit", size: "large", fullWidth: !0, variant: "contained", color: "success", children: " Pay" }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 629,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 623,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 622,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 621,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sales.tsx",
        lineNumber: 569,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/sales.tsx",
        lineNumber: 568,
        columnNumber: 118
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sales.tsx",
      lineNumber: 568,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales.tsx",
      lineNumber: 567,
      columnNumber: 13
    }, this);
  };
  return /* @__PURE__ */ jsxDEV17("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsxDEV17(Grid_default, { container: !0, spacing: 2, sx: { marginTop: "0.5em", width: "100%", height: "100%" }, children: [
      /* @__PURE__ */ jsxDEV17(Grid_default, { container: !0, xs: 12, md: 6, lg: 5, children: /* @__PURE__ */ jsxDEV17(Grid_default, { item: !0, xs: 12, md: 12, lg: 12, children: [
        TableProductCheckout(cart, total, discount, deleteCart),
        TableTotalCheckout(voucher, paymentList, keyPaymentList)
      ] }, void 0, !0, {
        fileName: "app/routes/sales.tsx",
        lineNumber: 645,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/sales.tsx",
        lineNumber: 644,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV17(Grid_default, { container: !0, xs: 12, md: 4, lg: 7, children: /* @__PURE__ */ jsxDEV17(Grid_default, { item: !0, xs: 12, md: 12, lg: 12, children: addProduct() }, void 0, !1, {
        fileName: "app/routes/sales.tsx",
        lineNumber: 652,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/sales.tsx",
        lineNumber: 651,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sales.tsx",
      lineNumber: 643,
      columnNumber: 9
    }, this),
    myusers.message != null ? /* @__PURE__ */ jsxDEV17(Stack_default, { spacing: 2, sx: { width: "100%" }, children: /* @__PURE__ */ jsxDEV17(Snackbar3, { anchorOrigin: { vertical: "bottom", horizontal: "center" }, open: snack, autoHideDuration: 6e3, onClose: handleCloseSnack, children: /* @__PURE__ */ jsxDEV17(Alert3, { variant: "filled", onClose: handleCloseSnack, severity: myusers.alert && myusers.alert == 1 ? "success" : "error", sx: { width: "100%" }, children: myusers.message && myusers.message != null ? myusers.message : "" }, void 0, !1, {
      fileName: "app/routes/sales.tsx",
      lineNumber: 662,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales.tsx",
      lineNumber: 661,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/sales.tsx",
      lineNumber: 660,
      columnNumber: 13
    }, this) : ""
  ] }, void 0, !0, {
    fileName: "app/routes/sales.tsx",
    lineNumber: 642,
    columnNumber: 9
  }, this);
}

// app/routes/users.tsx
var users_exports = {};
__export(users_exports, {
  action: () => action11,
  default: () => Index5,
  loader: () => loader12,
  meta: () => meta10
});
import * as React99 from "react";
import { DataGrid as DataGrid4, GridToolbar as GridToolbar3 } from "@mui/x-data-grid";

// node_modules/@mui/material/Tooltip/Tooltip.js
import _objectWithoutPropertiesLoose66 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends76 from "@babel/runtime/helpers/esm/extends";
import * as React92 from "react";
import PropTypes68 from "prop-types";
import clsx52 from "clsx";
import { elementAcceptingRef as elementAcceptingRef6 } from "@mui/utils";
import { unstable_composeClasses as composeClasses5, appendOwnerState as appendOwnerState2 } from "@mui/base";
import { alpha as alpha15 } from "@mui/system";

// node_modules/@mui/material/Tooltip/tooltipClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses53 } from "@mui/utils";
function getTooltipUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTooltip", slot);
}
var tooltipClasses = generateUtilityClasses53("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), tooltipClasses_default = tooltipClasses;

// node_modules/@mui/material/Tooltip/Tooltip.js
import { jsx as _jsx73 } from "react/jsx-runtime";
import { jsxs as _jsxs20 } from "react/jsx-runtime";
var _excluded68 = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function round2(value) {
  return Math.round(value * 1e5) / 1e5;
}
var useUtilityClasses53 = (ownerState) => {
  let {
    classes,
    disableInteractive,
    arrow,
    touch,
    placement
  } = ownerState, slots = {
    popper: ["popper", !disableInteractive && "popperInteractive", arrow && "popperArrow"],
    tooltip: ["tooltip", arrow && "tooltipArrow", touch && "touch", `tooltipPlacement${capitalize_default(placement.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return composeClasses5(slots, getTooltipUtilityClass, classes);
}, TooltipPopper = styled_default(Popper_default, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.popper, !ownerState.disableInteractive && styles4.popperInteractive, ownerState.arrow && styles4.popperArrow, !ownerState.open && styles4.popperClose];
  }
})(({
  theme,
  ownerState,
  open
}) => _extends76({
  zIndex: (theme.vars || theme).zIndex.tooltip,
  pointerEvents: "none"
}, !ownerState.disableInteractive && {
  pointerEvents: "auto"
}, !open && {
  pointerEvents: "none"
}, ownerState.arrow && {
  [`&[data-popper-placement*="bottom"] .${tooltipClasses_default.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${tooltipClasses_default.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${tooltipClasses_default.arrow}`]: _extends76({}, ownerState.isRtl ? {
    right: 0,
    marginRight: "-0.71em"
  } : {
    left: 0,
    marginLeft: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "100% 100%"
    }
  }),
  [`&[data-popper-placement*="left"] .${tooltipClasses_default.arrow}`]: _extends76({}, ownerState.isRtl ? {
    left: 0,
    marginLeft: "-0.71em"
  } : {
    right: 0,
    marginRight: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "0 0"
    }
  })
})), TooltipTooltip = styled_default("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.tooltip, ownerState.touch && styles4.touch, ownerState.arrow && styles4.tooltipArrow, styles4[`tooltipPlacement${capitalize_default(ownerState.placement.split("-")[0])}`]];
  }
})(({
  theme,
  ownerState
}) => _extends76({
  backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : alpha15(theme.palette.grey[700], 0.92),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  color: (theme.vars || theme).palette.common.white,
  fontFamily: theme.typography.fontFamily,
  padding: "4px 8px",
  fontSize: theme.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: theme.typography.fontWeightMedium
}, ownerState.arrow && {
  position: "relative",
  margin: 0
}, ownerState.touch && {
  padding: "8px 16px",
  fontSize: theme.typography.pxToRem(14),
  lineHeight: `${round2(16 / 14)}em`,
  fontWeight: theme.typography.fontWeightRegular
}, {
  [`.${tooltipClasses_default.popper}[data-popper-placement*="left"] &`]: _extends76({
    transformOrigin: "right center"
  }, ownerState.isRtl ? _extends76({
    marginLeft: "14px"
  }, ownerState.touch && {
    marginLeft: "24px"
  }) : _extends76({
    marginRight: "14px"
  }, ownerState.touch && {
    marginRight: "24px"
  })),
  [`.${tooltipClasses_default.popper}[data-popper-placement*="right"] &`]: _extends76({
    transformOrigin: "left center"
  }, ownerState.isRtl ? _extends76({
    marginRight: "14px"
  }, ownerState.touch && {
    marginRight: "24px"
  }) : _extends76({
    marginLeft: "14px"
  }, ownerState.touch && {
    marginLeft: "24px"
  })),
  [`.${tooltipClasses_default.popper}[data-popper-placement*="top"] &`]: _extends76({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, ownerState.touch && {
    marginBottom: "24px"
  }),
  [`.${tooltipClasses_default.popper}[data-popper-placement*="bottom"] &`]: _extends76({
    transformOrigin: "center top",
    marginTop: "14px"
  }, ownerState.touch && {
    marginTop: "24px"
  })
})), TooltipArrow = styled_default("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (props, styles4) => styles4.arrow
})(({
  theme
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: theme.vars ? theme.vars.palette.Tooltip.bg : alpha15(theme.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})), hystersisOpen = !1, hystersisTimer = null, cursorPosition = {
  x: 0,
  y: 0
};
function composeEventHandler(handler, eventHandler) {
  return (event) => {
    eventHandler && eventHandler(event), handler(event);
  };
}
var Tooltip = /* @__PURE__ */ React92.forwardRef(function(inProps, ref) {
  var _ref, _slots$popper, _ref2, _ref3, _slots$transition, _ref4, _slots$tooltip, _ref5, _slots$arrow, _slotProps$popper, _ref6, _slotProps$popper2, _slotProps$transition, _slotProps$tooltip, _ref7, _slotProps$tooltip2, _slotProps$arrow, _ref8, _slotProps$arrow2;
  let props = useThemeProps({
    props: inProps,
    name: "MuiTooltip"
  }), {
    arrow = !1,
    children: childrenProp,
    components = {},
    componentsProps = {},
    describeChild = !1,
    disableFocusListener = !1,
    disableHoverListener = !1,
    disableInteractive: disableInteractiveProp = !1,
    disableTouchListener = !1,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor = !1,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = "bottom",
    PopperComponent: PopperComponentProp,
    PopperProps = {},
    slotProps = {},
    slots = {},
    title,
    TransitionComponent: TransitionComponentProp = Grow_default,
    TransitionProps
  } = props, other = _objectWithoutPropertiesLoose66(props, _excluded68), children = /* @__PURE__ */ React92.isValidElement(childrenProp) ? childrenProp : /* @__PURE__ */ _jsx73("span", {
    children: childrenProp
  }), theme = useTheme(), isRtl = theme.direction === "rtl", [childNode, setChildNode] = React92.useState(), [arrowRef, setArrowRef] = React92.useState(null), ignoreNonTouchEvents = React92.useRef(!1), disableInteractive = disableInteractiveProp || followCursor, closeTimer = React92.useRef(), enterTimer = React92.useRef(), leaveTimer = React92.useRef(), touchTimer = React92.useRef(), [openState, setOpenState] = useControlled_default({
    controlled: openProp,
    default: !1,
    name: "Tooltip",
    state: "open"
  }), open = openState;
  {
    let {
      current: isControlled
    } = React92.useRef(openProp !== void 0);
    React92.useEffect(() => {
      childNode && childNode.disabled && !isControlled && title !== "" && childNode.tagName.toLowerCase() === "button" && console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [title, childNode, isControlled]);
  }
  let id = useId_default(idProp), prevUserSelect = React92.useRef(), stopTouchInteraction = React92.useCallback(() => {
    prevUserSelect.current !== void 0 && (document.body.style.WebkitUserSelect = prevUserSelect.current, prevUserSelect.current = void 0), clearTimeout(touchTimer.current);
  }, []);
  React92.useEffect(() => () => {
    clearTimeout(closeTimer.current), clearTimeout(enterTimer.current), clearTimeout(leaveTimer.current), stopTouchInteraction();
  }, [stopTouchInteraction]);
  let handleOpen = (event) => {
    clearTimeout(hystersisTimer), hystersisOpen = !0, setOpenState(!0), onOpen && !open && onOpen(event);
  }, handleClose = useEventCallback_default(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (event) => {
      clearTimeout(hystersisTimer), hystersisTimer = setTimeout(() => {
        hystersisOpen = !1;
      }, 800 + leaveDelay), setOpenState(!1), onClose && open && onClose(event), clearTimeout(closeTimer.current), closeTimer.current = setTimeout(() => {
        ignoreNonTouchEvents.current = !1;
      }, theme.transitions.duration.shortest);
    }
  ), handleEnter = (event) => {
    ignoreNonTouchEvents.current && event.type !== "touchstart" || (childNode && childNode.removeAttribute("title"), clearTimeout(enterTimer.current), clearTimeout(leaveTimer.current), enterDelay || hystersisOpen && enterNextDelay ? enterTimer.current = setTimeout(() => {
      handleOpen(event);
    }, hystersisOpen ? enterNextDelay : enterDelay) : handleOpen(event));
  }, handleLeave = (event) => {
    clearTimeout(enterTimer.current), clearTimeout(leaveTimer.current), leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  }, {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible_default(), [, setChildIsFocusVisible] = React92.useState(!1), handleBlur = (event) => {
    handleBlurVisible(event), isFocusVisibleRef.current === !1 && (setChildIsFocusVisible(!1), handleLeave(event));
  }, handleFocus = (event) => {
    childNode || setChildNode(event.currentTarget), handleFocusVisible(event), isFocusVisibleRef.current === !0 && (setChildIsFocusVisible(!0), handleEnter(event));
  }, detectTouchStart = (event) => {
    ignoreNonTouchEvents.current = !0;
    let childrenProps2 = children.props;
    childrenProps2.onTouchStart && childrenProps2.onTouchStart(event);
  }, handleMouseOver = handleEnter, handleMouseLeave = handleLeave, handleTouchStart = (event) => {
    detectTouchStart(event), clearTimeout(leaveTimer.current), clearTimeout(closeTimer.current), stopTouchInteraction(), prevUserSelect.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", touchTimer.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = prevUserSelect.current, handleEnter(event);
    }, enterTouchDelay);
  }, handleTouchEnd = (event) => {
    children.props.onTouchEnd && children.props.onTouchEnd(event), stopTouchInteraction(), clearTimeout(leaveTimer.current), leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveTouchDelay);
  };
  React92.useEffect(() => {
    if (!open)
      return;
    function handleKeyDown(nativeEvent) {
      (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") && handleClose(nativeEvent);
    }
    return document.addEventListener("keydown", handleKeyDown), () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, open]);
  let handleRef = useForkRef_default(children.ref, focusVisibleRef, setChildNode, ref);
  !title && title !== 0 && (open = !1);
  let popperRef = React92.useRef(), handleMouseMove = (event) => {
    let childrenProps2 = children.props;
    childrenProps2.onMouseMove && childrenProps2.onMouseMove(event), cursorPosition = {
      x: event.clientX,
      y: event.clientY
    }, popperRef.current && popperRef.current.update();
  }, nameOrDescProps = {}, titleIsString = typeof title == "string";
  describeChild ? (nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null, nameOrDescProps["aria-describedby"] = open ? id : null) : (nameOrDescProps["aria-label"] = titleIsString ? title : null, nameOrDescProps["aria-labelledby"] = open && !titleIsString ? id : null);
  let childrenProps = _extends76({}, nameOrDescProps, other, children.props, {
    className: clsx52(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  }, followCursor ? {
    onMouseMove: handleMouseMove
  } : {});
  childrenProps["data-mui-internal-clone-element"] = !0, React92.useEffect(() => {
    childNode && !childNode.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [childNode]);
  let interactiveWrapperListeners = {};
  disableTouchListener || (childrenProps.onTouchStart = handleTouchStart, childrenProps.onTouchEnd = handleTouchEnd), disableHoverListener || (childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver), childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave), disableInteractive || (interactiveWrapperListeners.onMouseOver = handleMouseOver, interactiveWrapperListeners.onMouseLeave = handleMouseLeave)), disableFocusListener || (childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus), childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur), disableInteractive || (interactiveWrapperListeners.onFocus = handleFocus, interactiveWrapperListeners.onBlur = handleBlur)), children.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${children.props.title}\` or the Tooltip component.`].join(`
`));
  let popperOptions = React92.useMemo(() => {
    var _PopperProps$popperOp;
    let tooltipModifiers = [{
      name: "arrow",
      enabled: Boolean(arrowRef),
      options: {
        element: arrowRef,
        padding: 4
      }
    }];
    return (_PopperProps$popperOp = PopperProps.popperOptions) != null && _PopperProps$popperOp.modifiers && (tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers)), _extends76({}, PopperProps.popperOptions, {
      modifiers: tooltipModifiers
    });
  }, [arrowRef, PopperProps]), ownerState = _extends76({}, props, {
    isRtl,
    arrow,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current
  }), classes = useUtilityClasses53(ownerState), PopperComponent = (_ref = (_slots$popper = slots.popper) != null ? _slots$popper : components.Popper) != null ? _ref : TooltipPopper, TransitionComponent = (_ref2 = (_ref3 = (_slots$transition = slots.transition) != null ? _slots$transition : components.Transition) != null ? _ref3 : TransitionComponentProp) != null ? _ref2 : Grow_default, TooltipComponent = (_ref4 = (_slots$tooltip = slots.tooltip) != null ? _slots$tooltip : components.Tooltip) != null ? _ref4 : TooltipTooltip, ArrowComponent = (_ref5 = (_slots$arrow = slots.arrow) != null ? _slots$arrow : components.Arrow) != null ? _ref5 : TooltipArrow, popperProps = appendOwnerState2(PopperComponent, _extends76({}, PopperProps, (_slotProps$popper = slotProps.popper) != null ? _slotProps$popper : componentsProps.popper, {
    className: clsx52(classes.popper, PopperProps?.className, (_ref6 = (_slotProps$popper2 = slotProps.popper) != null ? _slotProps$popper2 : componentsProps.popper) == null ? void 0 : _ref6.className)
  }), ownerState), transitionProps = appendOwnerState2(TransitionComponent, _extends76({}, TransitionProps, (_slotProps$transition = slotProps.transition) != null ? _slotProps$transition : componentsProps.transition), ownerState), tooltipProps = appendOwnerState2(TooltipComponent, _extends76({}, (_slotProps$tooltip = slotProps.tooltip) != null ? _slotProps$tooltip : componentsProps.tooltip, {
    className: clsx52(classes.tooltip, (_ref7 = (_slotProps$tooltip2 = slotProps.tooltip) != null ? _slotProps$tooltip2 : componentsProps.tooltip) == null ? void 0 : _ref7.className)
  }), ownerState), tooltipArrowProps = appendOwnerState2(ArrowComponent, _extends76({}, (_slotProps$arrow = slotProps.arrow) != null ? _slotProps$arrow : componentsProps.arrow, {
    className: clsx52(classes.arrow, (_ref8 = (_slotProps$arrow2 = slotProps.arrow) != null ? _slotProps$arrow2 : componentsProps.arrow) == null ? void 0 : _ref8.className)
  }), ownerState);
  return /* @__PURE__ */ _jsxs20(React92.Fragment, {
    children: [/* @__PURE__ */ React92.cloneElement(children, childrenProps), /* @__PURE__ */ _jsx73(PopperComponent, _extends76({
      as: PopperComponentProp ?? Popper_default,
      placement,
      anchorEl: followCursor ? {
        getBoundingClientRect: () => ({
          top: cursorPosition.y,
          left: cursorPosition.x,
          right: cursorPosition.x,
          bottom: cursorPosition.y,
          width: 0,
          height: 0
        })
      } : childNode,
      popperRef,
      open: childNode ? open : !1,
      id,
      transition: !0
    }, interactiveWrapperListeners, popperProps, {
      popperOptions,
      children: ({
        TransitionProps: TransitionPropsInner
      }) => /* @__PURE__ */ _jsx73(TransitionComponent, _extends76({
        timeout: theme.transitions.duration.shorter
      }, TransitionPropsInner, transitionProps, {
        children: /* @__PURE__ */ _jsxs20(TooltipComponent, _extends76({}, tooltipProps, {
          children: [title, arrow ? /* @__PURE__ */ _jsx73(ArrowComponent, _extends76({}, tooltipArrowProps, {
            ref: setArrowRef
          })) : null]
        }))
      }))
    }))]
  });
});
Tooltip.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: PropTypes68.bool,
  /**
   * Tooltip reference element.
   */
  children: elementAcceptingRef6.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes68.object,
  /**
   * @ignore
   */
  className: PropTypes68.string,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes68.shape({
    Arrow: PropTypes68.elementType,
    Popper: PropTypes68.elementType,
    Tooltip: PropTypes68.elementType,
    Transition: PropTypes68.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: PropTypes68.shape({
    arrow: PropTypes68.object,
    popper: PropTypes68.object,
    tooltip: PropTypes68.object,
    transition: PropTypes68.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: PropTypes68.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: PropTypes68.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: PropTypes68.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: PropTypes68.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: PropTypes68.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: PropTypes68.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: PropTypes68.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: PropTypes68.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: PropTypes68.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: PropTypes68.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: PropTypes68.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: PropTypes68.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: PropTypes68.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: PropTypes68.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes68.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: PropTypes68.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @default Popper
   */
  PopperComponent: PropTypes68.elementType,
  /**
   * Props applied to the [`Popper`](/material-ui/api/popper/) element.
   * @default {}
   */
  PopperProps: PropTypes68.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes68.shape({
    arrow: PropTypes68.object,
    popper: PropTypes68.object,
    tooltip: PropTypes68.object,
    transition: PropTypes68.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes68.shape({
    arrow: PropTypes68.elementType,
    popper: PropTypes68.elementType,
    tooltip: PropTypes68.elementType,
    transition: PropTypes68.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes68.oneOfType([PropTypes68.arrayOf(PropTypes68.oneOfType([PropTypes68.func, PropTypes68.object, PropTypes68.bool])), PropTypes68.func, PropTypes68.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: PropTypes68.node,
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: PropTypes68.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: PropTypes68.object
};
var Tooltip_default = Tooltip;

// app/routes/users.tsx
import { useLoaderData as useLoaderData12 } from "@remix-run/react";
import { json as json16 } from "@remix-run/node";

// node_modules/@mui/material/Dialog/Dialog.js
import _objectWithoutPropertiesLoose67 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends77 from "@babel/runtime/helpers/esm/extends";
import * as React94 from "react";
import PropTypes69 from "prop-types";
import clsx53 from "clsx";
import { unstable_useId as useId4 } from "@mui/utils";

// node_modules/@mui/material/Dialog/dialogClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses54 } from "@mui/utils";
function getDialogUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiDialog", slot);
}
var dialogClasses = generateUtilityClasses54("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), dialogClasses_default = dialogClasses;

// node_modules/@mui/material/Dialog/DialogContext.js
import * as React93 from "react";
var DialogContext = /* @__PURE__ */ React93.createContext({});
DialogContext.displayName = "DialogContext";
var DialogContext_default = DialogContext;

// node_modules/@mui/material/Dialog/Dialog.js
import { jsx as _jsx74 } from "react/jsx-runtime";
var _excluded69 = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], DialogBackdrop = styled_default(Backdrop_default, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (props, styles4) => styles4.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), useUtilityClasses54 = (ownerState) => {
  let {
    classes,
    scroll,
    maxWidth,
    fullWidth,
    fullScreen
  } = ownerState, slots = {
    root: ["root"],
    container: ["container", `scroll${capitalize_default(scroll)}`],
    paper: ["paper", `paperScroll${capitalize_default(scroll)}`, `paperWidth${capitalize_default(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen"]
  };
  return unstable_composeClasses(slots, getDialogUtilityClass, classes);
}, DialogRoot = styled_default(Modal_default, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), DialogContainer = styled_default("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.container, styles4[`scroll${capitalize_default(ownerState.scroll)}`]];
  }
})(({
  ownerState
}) => _extends77({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, ownerState.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, ownerState.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&:after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), DialogPaper = styled_default(Paper_default, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.paper, styles4[`scrollPaper${capitalize_default(ownerState.scroll)}`], styles4[`paperWidth${capitalize_default(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles4.paperFullWidth, ownerState.fullScreen && styles4.paperFullScreen];
  }
})(({
  theme,
  ownerState
}) => _extends77({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, ownerState.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, ownerState.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !ownerState.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, ownerState.maxWidth === "xs" && {
  maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
  [`&.${dialogClasses_default.paperScrollBody}`]: {
    [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, ownerState.maxWidth && ownerState.maxWidth !== "xs" && {
  maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
  [`&.${dialogClasses_default.paperScrollBody}`]: {
    [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, ownerState.fullWidth && {
  width: "calc(100% - 64px)"
}, ownerState.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${dialogClasses_default.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), Dialog6 = /* @__PURE__ */ React94.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiDialog"
  }), theme = useTheme(), defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  }, {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledbyProp,
    BackdropComponent,
    BackdropProps,
    children,
    className,
    disableEscapeKeyDown = !1,
    fullScreen = !1,
    fullWidth = !1,
    maxWidth = "sm",
    onBackdropClick,
    onClose,
    open,
    PaperComponent = Paper_default,
    PaperProps = {},
    scroll = "paper",
    TransitionComponent = Fade_default,
    transitionDuration = defaultTransitionDuration,
    TransitionProps
  } = props, other = _objectWithoutPropertiesLoose67(props, _excluded69), ownerState = _extends77({}, props, {
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  }), classes = useUtilityClasses54(ownerState), backdropClick = React94.useRef(), handleMouseDown = (event) => {
    backdropClick.current = event.target === event.currentTarget;
  }, handleBackdropClick = (event) => {
    backdropClick.current && (backdropClick.current = null, onBackdropClick && onBackdropClick(event), onClose && onClose(event, "backdropClick"));
  }, ariaLabelledby = useId4(ariaLabelledbyProp), dialogContextValue = React94.useMemo(() => ({
    titleId: ariaLabelledby
  }), [ariaLabelledby]);
  return /* @__PURE__ */ _jsx74(DialogRoot, _extends77({
    className: clsx53(classes.root, className),
    closeAfterTransition: !0,
    components: {
      Backdrop: DialogBackdrop
    },
    componentsProps: {
      backdrop: _extends77({
        transitionDuration,
        as: BackdropComponent
      }, BackdropProps)
    },
    disableEscapeKeyDown,
    onClose,
    open,
    ref,
    onClick: handleBackdropClick,
    ownerState
  }, other, {
    children: /* @__PURE__ */ _jsx74(TransitionComponent, _extends77({
      appear: !0,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }, TransitionProps, {
      children: /* @__PURE__ */ _jsx74(DialogContainer, {
        className: clsx53(classes.container),
        onMouseDown: handleMouseDown,
        ownerState,
        children: /* @__PURE__ */ _jsx74(DialogPaper, _extends77({
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby
        }, PaperProps, {
          className: clsx53(classes.paper, PaperProps.className),
          ownerState,
          children: /* @__PURE__ */ _jsx74(DialogContext_default.Provider, {
            value: dialogContextValue,
            children
          })
        }))
      })
    }))
  }));
});
Dialog6.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": PropTypes69.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": PropTypes69.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: PropTypes69.elementType,
  /**
   * @ignore
   */
  BackdropProps: PropTypes69.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes69.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes69.object,
  /**
   * @ignore
   */
  className: PropTypes69.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: PropTypes69.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: PropTypes69.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: PropTypes69.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: PropTypes69.oneOfType([PropTypes69.oneOf(["xs", "sm", "md", "lg", "xl", !1]), PropTypes69.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: PropTypes69.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes69.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes69.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: PropTypes69.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: PropTypes69.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: PropTypes69.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes69.oneOfType([PropTypes69.arrayOf(PropTypes69.oneOfType([PropTypes69.func, PropTypes69.object, PropTypes69.bool])), PropTypes69.func, PropTypes69.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: PropTypes69.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: PropTypes69.oneOfType([PropTypes69.number, PropTypes69.shape({
    appear: PropTypes69.number,
    enter: PropTypes69.number,
    exit: PropTypes69.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: PropTypes69.object
};
var Dialog_default = Dialog6;

// node_modules/@mui/material/DialogActions/DialogActions.js
import _objectWithoutPropertiesLoose68 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends78 from "@babel/runtime/helpers/esm/extends";
import * as React95 from "react";
import PropTypes70 from "prop-types";
import clsx54 from "clsx";

// node_modules/@mui/material/DialogActions/dialogActionsClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses55 } from "@mui/utils";
function getDialogActionsUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiDialogActions", slot);
}
var dialogActionsClasses = generateUtilityClasses55("MuiDialogActions", ["root", "spacing"]);

// node_modules/@mui/material/DialogActions/DialogActions.js
import { jsx as _jsx75 } from "react/jsx-runtime";
var _excluded70 = ["className", "disableSpacing"], useUtilityClasses55 = (ownerState) => {
  let {
    classes,
    disableSpacing
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", !disableSpacing && "spacing"]
  }, getDialogActionsUtilityClass, classes);
}, DialogActionsRoot = styled_default("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, !ownerState.disableSpacing && styles4.spacing];
  }
})(({
  ownerState
}) => _extends78({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !ownerState.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), DialogActions6 = /* @__PURE__ */ React95.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiDialogActions"
  }), {
    className,
    disableSpacing = !1
  } = props, other = _objectWithoutPropertiesLoose68(props, _excluded70), ownerState = _extends78({}, props, {
    disableSpacing
  }), classes = useUtilityClasses55(ownerState);
  return /* @__PURE__ */ _jsx75(DialogActionsRoot, _extends78({
    className: clsx54(classes.root, className),
    ownerState,
    ref
  }, other));
});
DialogActions6.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes70.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes70.object,
  /**
   * @ignore
   */
  className: PropTypes70.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: PropTypes70.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes70.oneOfType([PropTypes70.arrayOf(PropTypes70.oneOfType([PropTypes70.func, PropTypes70.object, PropTypes70.bool])), PropTypes70.func, PropTypes70.object])
};
var DialogActions_default = DialogActions6;

// node_modules/@mui/material/DialogContent/DialogContent.js
import _objectWithoutPropertiesLoose69 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends79 from "@babel/runtime/helpers/esm/extends";
import * as React96 from "react";
import PropTypes71 from "prop-types";
import clsx55 from "clsx";

// node_modules/@mui/material/DialogContent/dialogContentClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses56 } from "@mui/utils";
function getDialogContentUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiDialogContent", slot);
}
var dialogContentClasses = generateUtilityClasses56("MuiDialogContent", ["root", "dividers"]);

// node_modules/@mui/material/DialogTitle/dialogTitleClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses57 } from "@mui/utils";
function getDialogTitleUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiDialogTitle", slot);
}
var dialogTitleClasses = generateUtilityClasses57("MuiDialogTitle", ["root"]), dialogTitleClasses_default = dialogTitleClasses;

// node_modules/@mui/material/DialogContent/DialogContent.js
import { jsx as _jsx76 } from "react/jsx-runtime";
var _excluded71 = ["className", "dividers"], useUtilityClasses56 = (ownerState) => {
  let {
    classes,
    dividers
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", dividers && "dividers"]
  }, getDialogContentUtilityClass, classes);
}, DialogContentRoot = styled_default("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, ownerState.dividers && styles4.dividers];
  }
})(({
  theme,
  ownerState
}) => _extends79({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, ownerState.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
} : {
  [`.${dialogTitleClasses_default.root} + &`]: {
    paddingTop: 0
  }
})), DialogContent6 = /* @__PURE__ */ React96.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiDialogContent"
  }), {
    className,
    dividers = !1
  } = props, other = _objectWithoutPropertiesLoose69(props, _excluded71), ownerState = _extends79({}, props, {
    dividers
  }), classes = useUtilityClasses56(ownerState);
  return /* @__PURE__ */ _jsx76(DialogContentRoot, _extends79({
    className: clsx55(classes.root, className),
    ownerState,
    ref
  }, other));
});
DialogContent6.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes71.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes71.object,
  /**
   * @ignore
   */
  className: PropTypes71.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: PropTypes71.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes71.oneOfType([PropTypes71.arrayOf(PropTypes71.oneOfType([PropTypes71.func, PropTypes71.object, PropTypes71.bool])), PropTypes71.func, PropTypes71.object])
};
var DialogContent_default = DialogContent6;

// node_modules/@mui/material/DialogContentText/DialogContentText.js
import _objectWithoutPropertiesLoose70 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends80 from "@babel/runtime/helpers/esm/extends";
import * as React97 from "react";
import PropTypes72 from "prop-types";
import clsx56 from "clsx";

// node_modules/@mui/material/DialogContentText/dialogContentTextClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses58 } from "@mui/utils";
function getDialogContentTextUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiDialogContentText", slot);
}
var dialogContentTextClasses = generateUtilityClasses58("MuiDialogContentText", ["root"]);

// node_modules/@mui/material/DialogContentText/DialogContentText.js
import { jsx as _jsx77 } from "react/jsx-runtime";
var _excluded72 = ["children", "className"], useUtilityClasses57 = (ownerState) => {
  let {
    classes
  } = ownerState, composedClasses = unstable_composeClasses({
    root: ["root"]
  }, getDialogContentTextUtilityClass, classes);
  return _extends80({}, classes, composedClasses);
}, DialogContentTextRoot = styled_default(Typography_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiDialogContentText",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({}), DialogContentText6 = /* @__PURE__ */ React97.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiDialogContentText"
  }), {
    className
  } = props, ownerState = _objectWithoutPropertiesLoose70(props, _excluded72), classes = useUtilityClasses57(ownerState);
  return /* @__PURE__ */ _jsx77(DialogContentTextRoot, _extends80({
    component: "p",
    variant: "body1",
    color: "text.secondary",
    ref,
    ownerState,
    className: clsx56(classes.root, className)
  }, props, {
    classes
  }));
});
DialogContentText6.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes72.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes72.object,
  /**
   * @ignore
   */
  className: PropTypes72.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes72.oneOfType([PropTypes72.arrayOf(PropTypes72.oneOfType([PropTypes72.func, PropTypes72.object, PropTypes72.bool])), PropTypes72.func, PropTypes72.object])
};
var DialogContentText_default = DialogContentText6;

// node_modules/@mui/material/DialogTitle/DialogTitle.js
import _extends81 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose71 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React98 from "react";
import PropTypes73 from "prop-types";
import clsx57 from "clsx";
import { jsx as _jsx78 } from "react/jsx-runtime";
var _excluded73 = ["className", "id"], useUtilityClasses58 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return unstable_composeClasses({
    root: ["root"]
  }, getDialogTitleUtilityClass, classes);
}, DialogTitleRoot = styled_default(Typography_default, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (props, styles4) => styles4.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), DialogTitle6 = /* @__PURE__ */ React98.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiDialogTitle"
  }), {
    className,
    id: idProp
  } = props, other = _objectWithoutPropertiesLoose71(props, _excluded73), ownerState = props, classes = useUtilityClasses58(ownerState), {
    titleId = idProp
  } = React98.useContext(DialogContext_default);
  return /* @__PURE__ */ _jsx78(DialogTitleRoot, _extends81({
    component: "h2",
    className: clsx57(classes.root, className),
    ownerState,
    ref,
    variant: "h6",
    id: idProp ?? titleId
  }, other));
});
DialogTitle6.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: PropTypes73.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes73.object,
  /**
   * @ignore
   */
  className: PropTypes73.string,
  /**
   * @ignore
   */
  id: PropTypes73.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes73.oneOfType([PropTypes73.arrayOf(PropTypes73.oneOfType([PropTypes73.func, PropTypes73.object, PropTypes73.bool])), PropTypes73.func, PropTypes73.object])
};
var DialogTitle_default = DialogTitle6;

// app/routes/users.tsx
import { Form as Form4, useActionData as useActionData2 } from "@remix-run/react";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var meta10 = () => [
  {
    title: "ECCS POS - Users"
  },
  {
    name: "description",
    content: "Welcome to eccs-pos!"
  }
];
async function action11({ request }) {
  let formData = await request.formData(), email = String(formData.get("email")), nama_depan = String(formData.get("nama_depan")), nama_belakang = String(formData.get("nama_belakang")), phone = String(formData.get("phone")), alamat = String(formData.get("alamat")), mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, onlychar = /^[a-zA-Z]+$/, onlynumber = /^\d+$/, data = {
    email,
    nama_depan,
    nama_belakang,
    phone,
    alamat
  }, errors = {}, session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null;
  if (Object.keys(errors).length > 0)
    return json16({ errors });
  {
    let response = await createUsers(secret, data);
    if (response.meta.code != 200)
      console.log(response.meta.message);
    else
      return !0;
  }
}
function createUserComponent() {
  let actionData = useActionData2(), [open, setOpen] = React99.useState(!1), handleClickOpen = () => {
    setOpen(!0);
  }, handleClose = () => {
    setTimeout(function() {
      setOpen(!1);
    }, 1e3);
  };
  return /* @__PURE__ */ jsxDEV18("div", { children: [
    /* @__PURE__ */ jsxDEV18(Box_default, { sx: { "& > :not(style)": { m: 1 } }, children: /* @__PURE__ */ jsxDEV18(
      Fab_default,
      {
        sx: {
          position: "fixed",
          bottom: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(2)
        },
        color: "primary",
        "aria-label": "add",
        onClick: handleClickOpen,
        children: /* @__PURE__ */ jsxDEV18(Icon_default, { children: "add" }, void 0, !1, {
          fileName: "app/routes/users.tsx",
          lineNumber: 122,
          columnNumber: 25
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/users.tsx",
        lineNumber: 113,
        columnNumber: 21
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/users.tsx",
      lineNumber: 112,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV18(
      Dialog_default,
      {
        open,
        onClose: handleClose,
        children: [
          /* @__PURE__ */ jsxDEV18(DialogTitle_default, { id: "alert-dialog-title", children: "Create new user" }, void 0, !1, {
            fileName: "app/routes/users.tsx",
            lineNumber: 130,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV18(DialogContent_default, { children: /* @__PURE__ */ jsxDEV18(Form4, { method: "post", action: "create", onSubmit: () => {
            handleClose();
          }, children: [
            /* @__PURE__ */ jsxDEV18(Grid_default, { item: !0, xs: 12, md: 12, style: { marginBottom: "0.3em" }, children: /* @__PURE__ */ jsxDEV18(FormControl_default, { variant: "standard", children: [
              /* @__PURE__ */ jsxDEV18(InputLabel_default, { htmlFor: "nama_depan", children: "First Name" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 136,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV18(Input_default, { required: !0, size: "small", name: "nama_depan", id: "nama_depan", defaultValue: "" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 137,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/users.tsx",
              lineNumber: 135,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/users.tsx",
              lineNumber: 134,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV18(Grid_default, { item: !0, xs: 12, md: 12, style: { marginBottom: "0.3em" }, children: /* @__PURE__ */ jsxDEV18(FormControl_default, { variant: "standard", children: [
              /* @__PURE__ */ jsxDEV18(InputLabel_default, { htmlFor: "nama_belakang", children: "Last Name" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 143,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV18(Input_default, { required: !0, size: "small", name: "nama_belakang", id: "nama_belakang", defaultValue: "" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 144,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/users.tsx",
              lineNumber: 142,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/users.tsx",
              lineNumber: 141,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV18(Grid_default, { item: !0, xs: 12, md: 12, style: { marginBottom: "0.3em" }, children: /* @__PURE__ */ jsxDEV18(FormControl_default, { variant: "standard", children: [
              /* @__PURE__ */ jsxDEV18(InputLabel_default, { htmlFor: "email", children: "Email" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 150,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV18(Input_default, { required: !0, size: "small", name: "email", id: "email", defaultValue: "" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 151,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/users.tsx",
              lineNumber: 149,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/users.tsx",
              lineNumber: 148,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV18(Grid_default, { item: !0, xs: 12, md: 12, style: { marginBottom: "0.3em" }, children: /* @__PURE__ */ jsxDEV18(FormControl_default, { variant: "standard", children: [
              /* @__PURE__ */ jsxDEV18(InputLabel_default, { htmlFor: "phone", children: "Phone" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 157,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV18(Input_default, { required: !0, size: "small", name: "phone", id: "phone", defaultValue: "" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 158,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/users.tsx",
              lineNumber: 156,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/users.tsx",
              lineNumber: 155,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV18(Grid_default, { item: !0, xs: 12, md: 12, style: { marginBottom: "0.3em" }, children: /* @__PURE__ */ jsxDEV18(FormControl_default, { variant: "standard", children: [
              /* @__PURE__ */ jsxDEV18(InputLabel_default, { htmlFor: "alamat", children: "Address" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 164,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ jsxDEV18(Input_default, { size: "small", name: "alamat", id: "alamat", defaultValue: "" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 165,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/users.tsx",
              lineNumber: 163,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/users.tsx",
              lineNumber: 162,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ jsxDEV18(DialogActions_default, { children: /* @__PURE__ */ jsxDEV18(Button_default, { type: "submit", children: "Create" }, void 0, !1, {
              fileName: "app/routes/users.tsx",
              lineNumber: 170,
              columnNumber: 29
            }, this) }, void 0, !1, {
              fileName: "app/routes/users.tsx",
              lineNumber: 169,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/users.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/users.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/users.tsx",
        lineNumber: 126,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/users.tsx",
    lineNumber: 109,
    columnNumber: 9
  }, this);
}
var columns4 = [
  {
    field: "id",
    headerName: "ID"
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    align: "left",
    headerAlign: "left"
  },
  {
    field: "nama_lengkap",
    headerName: "Full Name",
    flex: 1,
    align: "left",
    headerAlign: "left"
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    flex: 1,
    align: "left",
    headerAlign: "left"
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      let id = params.id, [openAlertDel, setAlertDel] = React99.useState(!1), handleClosedelete = () => {
        setAlertDel(!1);
      }, handleOpem = () => {
        setAlertDel(!0);
      }, [openAlertUpd, setAlertUpd] = React99.useState(!1), handleCloseUpd = () => {
        setAlertUpd(!1);
      };
      return /* @__PURE__ */ jsxDEV18(Stack_default, { direction: "row", spacing: "1", children: [
        /* @__PURE__ */ jsxDEV18(Tooltip_default, { title: "Edit this user", arrow: !0, placement: "bottom-start", children: /* @__PURE__ */ jsxDEV18(Button_default, { onClick: (id2) => {
          setAlertUpd(!0);
        }, size: "small", variant: "contained", color: "success", children: "Edit" }, void 0, !1, {
          fileName: "app/routes/users.tsx",
          lineNumber: 238,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/users.tsx",
          lineNumber: 237,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV18(Tooltip_default, { title: "Delete this user", arrow: !0, placement: "bottom-start", children: /* @__PURE__ */ jsxDEV18(Button_default, { onClick: handleOpem, size: "small", variant: "contained", color: "error", children: "Delete" }, void 0, !1, {
          fileName: "app/routes/users.tsx",
          lineNumber: 243,
          columnNumber: 25
        }, this) }, void 0, !1, {
          fileName: "app/routes/users.tsx",
          lineNumber: 242,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV18(
          Dialog_default,
          {
            open: openAlertDel,
            onClose: handleClosedelete,
            "aria-labelledby": "alert-dialog-title",
            "aria-describedby": "alert-dialog-description",
            children: [
              /* @__PURE__ */ jsxDEV18(DialogTitle_default, { id: "alert-dialog-title", children: "Are you sure want delete this user ?" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 255,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV18(DialogContent_default, { children: /* @__PURE__ */ jsxDEV18(DialogContentText_default, { id: "alert-dialog-description", children: "This action can't rollback after you agree to delete." }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 259,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 258,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV18(DialogActions_default, { children: [
                /* @__PURE__ */ jsxDEV18(Button_default, { onClick: handleClosedelete, children: "Cancel" }, void 0, !1, {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 264,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ jsxDEV18(
                  Form4,
                  {
                    action: "delete",
                    method: "post",
                    children: [
                      /* @__PURE__ */ jsxDEV18("input", { name: "id", type: "hidden", value: id }, void 0, !1, {
                        fileName: "app/routes/users.tsx",
                        lineNumber: 269,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV18(Button_default, { type: "submit", onClick: handleClosedelete, children: "Delete" }, void 0, !1, {
                        fileName: "app/routes/users.tsx",
                        lineNumber: 270,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 265,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/users.tsx",
                lineNumber: 263,
                columnNumber: 25
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/users.tsx",
            lineNumber: 249,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ jsxDEV18(
          Dialog_default,
          {
            open: openAlertUpd,
            onClose: handleCloseUpd,
            "aria-labelledby": "alert-dialog-title",
            "aria-describedby": "alert-dialog-description",
            children: [
              /* @__PURE__ */ jsxDEV18(DialogTitle_default, { id: "alert-dialog-title", children: "Update Data Customer" }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 284,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV18(DialogContent_default, { children: /* @__PURE__ */ jsxDEV18(Form4, { action: "update", method: "post", onSubmit: handleCloseUpd, children: [
                /* @__PURE__ */ jsxDEV18(Grid_default, { item: !0, xs: 12, md: 12, style: { marginBottom: "0.3em" }, children: [
                  /* @__PURE__ */ jsxDEV18("input", { name: "id", type: "hidden", value: params.id }, void 0, !1, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 290,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ jsxDEV18(FormControl_default, { variant: "standard", children: [
                    /* @__PURE__ */ jsxDEV18(InputLabel_default, { htmlFor: "nama_depan", children: "First Name" }, void 0, !1, {
                      fileName: "app/routes/users.tsx",
                      lineNumber: 292,
                      columnNumber: 37
                    }, this),
                    /* @__PURE__ */ jsxDEV18(Input_default, { required: !0, size: "small", name: "nama_depan", id: "nama_depan", defaultValue: params.row.nama_depan }, void 0, !1, {
                      fileName: "app/routes/users.tsx",
                      lineNumber: 293,
                      columnNumber: 37
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 291,
                    columnNumber: 33
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 289,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV18(Grid_default, { item: !0, xs: 12, md: 12, style: { marginBottom: "0.3em" }, children: /* @__PURE__ */ jsxDEV18(FormControl_default, { variant: "standard", children: [
                  /* @__PURE__ */ jsxDEV18(InputLabel_default, { htmlFor: "nama_depan", children: "Last Name" }, void 0, !1, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 299,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV18(Input_default, { required: !0, size: "small", name: "nama_belakang", id: "nama_belakang", defaultValue: params.row.nama_belakang }, void 0, !1, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 300,
                    columnNumber: 37
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 298,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 297,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV18(Grid_default, { item: !0, xs: 12, md: 12, style: { marginBottom: "0.3em" }, children: /* @__PURE__ */ jsxDEV18(FormControl_default, { variant: "standard", children: [
                  /* @__PURE__ */ jsxDEV18(InputLabel_default, { htmlFor: "phone", children: "Phone" }, void 0, !1, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 306,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV18(Input_default, { required: !0, size: "small", name: "phone", id: "phone", defaultValue: params.row.phone }, void 0, !1, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 307,
                    columnNumber: 37
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 305,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 304,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV18(Grid_default, { item: !0, xs: 12, md: 12, style: { marginBottom: "0.3em" }, children: /* @__PURE__ */ jsxDEV18(FormControl_default, { variant: "standard", children: [
                  /* @__PURE__ */ jsxDEV18(InputLabel_default, { htmlFor: "alamat", children: "Address" }, void 0, !1, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 313,
                    columnNumber: 37
                  }, this),
                  /* @__PURE__ */ jsxDEV18(Input_default, { required: !0, size: "small", name: "alamat", id: "alamat", defaultValue: params.row.alamat }, void 0, !1, {
                    fileName: "app/routes/users.tsx",
                    lineNumber: 314,
                    columnNumber: 37
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 312,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 311,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ jsxDEV18(DialogActions_default, { children: /* @__PURE__ */ jsxDEV18(Button_default, { type: "submit", children: "Update" }, void 0, !1, {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 319,
                  columnNumber: 33
                }, this) }, void 0, !1, {
                  fileName: "app/routes/users.tsx",
                  lineNumber: 318,
                  columnNumber: 29
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/users.tsx",
                lineNumber: 288,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/users.tsx",
                lineNumber: 287,
                columnNumber: 25
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/users.tsx",
            lineNumber: 278,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/users.tsx",
        lineNumber: 236,
        columnNumber: 17
      }, this);
    }
  }
], loader12 = async ({ request }) => {
  await requireUserSession(request);
  let session = await getSession(request.headers.get("Cookie")), secret = session.has("keySec") ? session.get("keySec") : null;
  return await getUsers(secret);
};
function Index5() {
  let myusers = useLoaderData12();
  return /* @__PURE__ */ jsxDEV18(
    "div",
    {
      style: {
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8"
      },
      children: [
        /* @__PURE__ */ jsxDEV18(
          Box_default,
          {
            sx: {
              marginTop: "1em",
              textAlign: "center"
            },
            children: /* @__PURE__ */ jsxDEV18(Typography_default, { gutterBottom: !0, variant: "h5", component: "h5", children: "List Users" }, void 0, !1, {
              fileName: "app/routes/users.tsx",
              lineNumber: 363,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/users.tsx",
            lineNumber: 358,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV18(Box_default, { sx: {
          boxShadow: 1
        }, children: /* @__PURE__ */ jsxDEV18(
          "div",
          {
            className: "custom-toolbar",
            style: {
              height: "100%",
              width: "100%"
            },
            children: /* @__PURE__ */ jsxDEV18(
              DataGrid4,
              {
                rows: myusers.result,
                columns: columns4,
                initialState: {
                  pagination: {
                    paginationModel: {
                      page: 0,
                      pageSize: 10
                    }
                  },
                  filter: {}
                },
                slots: {
                  toolbar: GridToolbar3
                },
                slotProps: {
                  toolbar: {
                    showQuickFilter: !0
                  }
                },
                pageSizeOptions: [10, 50]
              },
              void 0,
              !1,
              {
                fileName: "app/routes/users.tsx",
                lineNumber: 378,
                columnNumber: 21
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/users.tsx",
            lineNumber: 371,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/users.tsx",
          lineNumber: 368,
          columnNumber: 13
        }, this),
        createUserComponent()
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/users.tsx",
      lineNumber: 351,
      columnNumber: 9
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HUGNBCBE.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-FDLQP7LX.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-VEKSHEMC.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WUIYPHGV.js", imports: ["/build/_shared/chunk-42I6LQGI.js", "/build/_shared/chunk-VI6OLG7S.js", "/build/_shared/chunk-QVKQS54O.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-KZMZ6HNW.js", imports: ["/build/_shared/chunk-H7NGHTMW.js", "/build/_shared/chunk-BURO4B2S.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-JAYNGK2D.js", imports: ["/build/_shared/chunk-BURO4B2S.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/order": { id: "routes/order", parentId: "root", path: "order", index: void 0, caseSensitive: void 0, module: "/build/routes/order-UASG3XL6.js", imports: ["/build/_shared/chunk-I2ZBDVXW.js", "/build/_shared/chunk-H7NGHTMW.js", "/build/_shared/chunk-BURO4B2S.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/order_.$Idorder": { id: "routes/order_.$Idorder", parentId: "root", path: "order/:Idorder", index: void 0, caseSensitive: void 0, module: "/build/routes/order_.$Idorder-KNLRQ2AK.js", imports: ["/build/_shared/chunk-BURO4B2S.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/products": { id: "routes/products", parentId: "root", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/products-HZ2HOUNS.js", imports: ["/build/_shared/chunk-I2ZBDVXW.js", "/build/_shared/chunk-H7NGHTMW.js", "/build/_shared/chunk-BURO4B2S.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/report": { id: "routes/report", parentId: "root", path: "report", index: void 0, caseSensitive: void 0, module: "/build/routes/report-7PGS3RB2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/sales": { id: "routes/sales", parentId: "root", path: "sales", index: void 0, caseSensitive: void 0, module: "/build/routes/sales-ZKB2DYZX.js", imports: ["/build/_shared/chunk-BURO4B2S.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/sales_.add_.$page": { id: "routes/sales_.add_.$page", parentId: "root", path: "sales/add/:page", index: void 0, caseSensitive: void 0, module: "/build/routes/sales_.add_.$page-RH664K36.js", imports: ["/build/_shared/chunk-BURO4B2S.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/sales_.checkout": { id: "routes/sales_.checkout", parentId: "root", path: "sales/checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/sales_.checkout-BONFQN3S.js", imports: void 0, hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/sales_.create": { id: "routes/sales_.create", parentId: "root", path: "sales/create", index: void 0, caseSensitive: void 0, module: "/build/routes/sales_.create-V3GUYGYN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/sales_.response": { id: "routes/sales_.response", parentId: "root", path: "sales/response", index: void 0, caseSensitive: void 0, module: "/build/routes/sales_.response-TB6LHDTH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/sales_alt_1(not_used)": { id: "routes/sales_alt_1(not_used)", parentId: "root", path: "sales_alt_1not_used?", index: void 0, caseSensitive: void 0, module: "/build/routes/sales_alt_1(not_used)-TASRPSU7.js", imports: ["/build/_shared/chunk-BURO4B2S.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/users": { id: "routes/users", parentId: "root", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/users-B6H4IY7S.js", imports: ["/build/_shared/chunk-I2ZBDVXW.js", "/build/_shared/chunk-H7NGHTMW.js", "/build/_shared/chunk-BURO4B2S.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/users_.create": { id: "routes/users_.create", parentId: "root", path: "users/create", index: void 0, caseSensitive: void 0, module: "/build/routes/users_.create-PD2GJO4W.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/users_.delete": { id: "routes/users_.delete", parentId: "root", path: "users/delete", index: void 0, caseSensitive: void 0, module: "/build/routes/users_.delete-HY7BYTYZ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/users_.update": { id: "routes/users_.update", parentId: "root", path: "users/update", index: void 0, caseSensitive: void 0, module: "/build/routes/users_.update-J3C76CCL.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "e65e83e1", hmr: { runtime: "/build/_shared\\chunk-VEKSHEMC.js", timestamp: 1704968903302 }, url: "/build/manifest-E65E83E1.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/sales_alt_1(not_used)": {
    id: "routes/sales_alt_1(not_used)",
    parentId: "root",
    path: "sales_alt_1not_used?",
    index: void 0,
    caseSensitive: void 0,
    module: sales_alt_1_not_used_exports
  },
  "routes/sales_.add_.$page": {
    id: "routes/sales_.add_.$page",
    parentId: "root",
    path: "sales/add/:page",
    index: void 0,
    caseSensitive: void 0,
    module: sales_add_page_exports
  },
  "routes/order_.$Idorder": {
    id: "routes/order_.$Idorder",
    parentId: "root",
    path: "order/:Idorder",
    index: void 0,
    caseSensitive: void 0,
    module: order_Idorder_exports
  },
  "routes/sales_.checkout": {
    id: "routes/sales_.checkout",
    parentId: "root",
    path: "sales/checkout",
    index: void 0,
    caseSensitive: void 0,
    module: sales_checkout_exports
  },
  "routes/sales_.response": {
    id: "routes/sales_.response",
    parentId: "root",
    path: "sales/response",
    index: void 0,
    caseSensitive: void 0,
    module: sales_response_exports
  },
  "routes/sales_.create": {
    id: "routes/sales_.create",
    parentId: "root",
    path: "sales/create",
    index: void 0,
    caseSensitive: void 0,
    module: sales_create_exports
  },
  "routes/users_.create": {
    id: "routes/users_.create",
    parentId: "root",
    path: "users/create",
    index: void 0,
    caseSensitive: void 0,
    module: users_create_exports
  },
  "routes/users_.delete": {
    id: "routes/users_.delete",
    parentId: "root",
    path: "users/delete",
    index: void 0,
    caseSensitive: void 0,
    module: users_delete_exports
  },
  "routes/users_.update": {
    id: "routes/users_.update",
    parentId: "root",
    path: "users/update",
    index: void 0,
    caseSensitive: void 0,
    module: users_update_exports
  },
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/report": {
    id: "routes/report",
    parentId: "root",
    path: "report",
    index: void 0,
    caseSensitive: void 0,
    module: report_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/order": {
    id: "routes/order",
    parentId: "root",
    path: "order",
    index: void 0,
    caseSensitive: void 0,
    module: order_exports
  },
  "routes/sales": {
    id: "routes/sales",
    parentId: "root",
    path: "sales",
    index: void 0,
    caseSensitive: void 0,
    module: sales_exports
  },
  "routes/users": {
    id: "routes/users",
    parentId: "root",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: users_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
