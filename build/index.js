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
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// node_modules/@mui/material/CssBaseline/CssBaseline.js
import _extends7 from "@babel/runtime/helpers/esm/extends";
import * as React2 from "react";
import PropTypes2 from "prop-types";

// node_modules/@mui/material/styles/useThemeProps.js
import { useThemeProps as systemUseThemeProps } from "@mui/system";

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

// node_modules/@mui/material/styles/useThemeProps.js
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

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
import _extends6 from "@babel/runtime/helpers/esm/extends";
import "react";
import PropTypes from "prop-types";
import { GlobalStyles as SystemGlobalStyles } from "@mui/system";
import { jsx as _jsx } from "react/jsx-runtime";
function GlobalStyles(props) {
  return /* @__PURE__ */ _jsx(SystemGlobalStyles, _extends6({}, props, {
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
  styles: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.number, PropTypes.object, PropTypes.string, PropTypes.bool])
};
var GlobalStyles_default = GlobalStyles;

// node_modules/@mui/material/CssBaseline/CssBaseline.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var html = (theme, enableColorScheme) => _extends7({
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
}), body = (theme) => _extends7({
  color: (theme.vars || theme).palette.text.primary
}, theme.typography.body1, {
  backgroundColor: (theme.vars || theme).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (theme.vars || theme).palette.common.white
  }
}), styles = (theme, enableColorScheme = !1) => {
  var _theme$components;
  let colorSchemeStyles = {};
  enableColorScheme && theme.colorSchemes && Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
    var _scheme$palette;
    colorSchemeStyles[theme.getColorSchemeSelector(key).replace(/\s*&/, "")] = {
      colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
    };
  });
  let defaultStyles = _extends7({
    html: html(theme, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme.typography.fontWeightBold
    },
    body: _extends7({
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
  return /* @__PURE__ */ _jsxs(React2.Fragment, {
    children: [/* @__PURE__ */ _jsx2(GlobalStyles_default, {
      styles: (theme) => styles(theme, enableColorScheme)
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
  children: PropTypes2.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: PropTypes2.bool
};
var CssBaseline_default = CssBaseline;

// node_modules/@mui/material/Container/Container.js
import PropTypes3 from "prop-types";
import { createContainer } from "@mui/system";

// node_modules/@mui/material/utils/capitalize.js
import { unstable_capitalize as capitalize } from "@mui/utils";
var capitalize_default = capitalize;

// node_modules/@mui/material/styles/styled.js
import { createStyled, shouldForwardProp } from "@mui/system";
var rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
var styled = createStyled({
  themeId: identifier_default,
  defaultTheme: defaultTheme_default,
  rootShouldForwardProp
}), styled_default = styled;

// node_modules/@mui/material/Container/Container.js
var Container = createContainer({
  createStyledComponent: styled_default("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (props, styles2) => {
      let {
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
Container.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: PropTypes3.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes3.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes3.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes3.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: PropTypes3.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: PropTypes3.oneOfType([PropTypes3.oneOf(["xs", "sm", "md", "lg", "xl", !1]), PropTypes3.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes3.oneOfType([PropTypes3.arrayOf(PropTypes3.oneOfType([PropTypes3.func, PropTypes3.object, PropTypes3.bool])), PropTypes3.func, PropTypes3.object])
};
var Container_default = Container;

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: !0 }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(CssBaseline_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Container_default, { maxWidth: "md", children: [
        /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});

// node_modules/@mui/material/Button/Button.js
import _objectWithoutPropertiesLoose7 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends10 from "@babel/runtime/helpers/esm/extends";
import * as React8 from "react";
import PropTypes7 from "prop-types";
import clsx4 from "clsx";
import { internal_resolveProps as resolveProps } from "@mui/utils";

// node_modules/@mui/base/composeClasses/index.js
import { unstable_composeClasses } from "@mui/utils";

// node_modules/@mui/material/Button/Button.js
import { alpha } from "@mui/system";

// node_modules/@mui/material/ButtonBase/ButtonBase.js
import _extends9 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose6 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React5 from "react";
import PropTypes6 from "prop-types";
import clsx3 from "clsx";
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
import _extends8 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose5 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React4 from "react";
import PropTypes5 from "prop-types";
import { TransitionGroup } from "react-transition-group";
import clsx2 from "clsx";
import { keyframes } from "@mui/system";

// node_modules/@mui/material/ButtonBase/Ripple.js
import * as React3 from "react";
import PropTypes4 from "prop-types";
import clsx from "clsx";
import { jsx as _jsx3 } from "react/jsx-runtime";
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
  } = props, [leaving, setLeaving] = React3.useState(!1), rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate), rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  }, childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  return !inProp && !leaving && setLeaving(!0), React3.useEffect(() => {
    if (!inProp && onExited != null) {
      let timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [onExited, inProp, timeout]), /* @__PURE__ */ _jsx3("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ _jsx3("span", {
      className: childClassName
    })
  });
}
Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes4.object.isRequired,
  className: PropTypes4.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: PropTypes4.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: PropTypes4.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: PropTypes4.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: PropTypes4.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: PropTypes4.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: PropTypes4.number,
  /**
   * exit delay
   */
  timeout: PropTypes4.number.isRequired
};
var Ripple_default = Ripple;

// node_modules/@mui/material/ButtonBase/touchRippleClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses } from "@mui/utils";
var touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), touchRippleClasses_default = touchRippleClasses;

// node_modules/@mui/material/ButtonBase/TouchRipple.js
import { jsx as _jsx4 } from "react/jsx-runtime";
var _excluded5 = ["center", "classes", "className"], _ = (t) => t, _t, _t2, _t3, _t4, DURATION = 550, DELAY_RIPPLE = 80, enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), pulsateKeyframe = keyframes(_t3 || (_t3 = _`
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
}) => theme.transitions.easing.easeInOut), TouchRipple = /* @__PURE__ */ React4.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTouchRipple"
  }), {
    center: centerProp = !1,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose5(props, _excluded5), [ripples, setRipples] = React4.useState([]), nextKey = React4.useRef(0), rippleCallback = React4.useRef(null);
  React4.useEffect(() => {
    rippleCallback.current && (rippleCallback.current(), rippleCallback.current = null);
  }, [ripples]);
  let ignoringMouseDown = React4.useRef(!1), startTimer = React4.useRef(0), startTimerCommit = React4.useRef(null), container = React4.useRef(null);
  React4.useEffect(() => () => {
    startTimer.current && clearTimeout(startTimer.current);
  }, []);
  let startCommit = React4.useCallback((params) => {
    let {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ _jsx4(TouchRippleRipple, {
      classes: {
        ripple: clsx2(classes.ripple, touchRippleClasses_default.ripple),
        rippleVisible: clsx2(classes.rippleVisible, touchRippleClasses_default.rippleVisible),
        ripplePulsate: clsx2(classes.ripplePulsate, touchRippleClasses_default.ripplePulsate),
        child: clsx2(classes.child, touchRippleClasses_default.child),
        childLeaving: clsx2(classes.childLeaving, touchRippleClasses_default.childLeaving),
        childPulsate: clsx2(classes.childPulsate, touchRippleClasses_default.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]), nextKey.current += 1, rippleCallback.current = cb;
  }, [classes]), start = React4.useCallback((event = {}, options = {}, cb = () => {
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
  }, [centerProp, startCommit]), pulsate = React4.useCallback(() => {
    start({}, {
      pulsate: !0
    });
  }, [start]), stop = React4.useCallback((event, cb) => {
    if (clearTimeout(startTimer.current), event?.type === "touchend" && startTimerCommit.current) {
      startTimerCommit.current(), startTimerCommit.current = null, startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null, setRipples((oldRipples) => oldRipples.length > 0 ? oldRipples.slice(1) : oldRipples), rippleCallback.current = cb;
  }, []);
  return React4.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]), /* @__PURE__ */ _jsx4(TouchRippleRoot, _extends8({
    className: clsx2(touchRippleClasses_default.root, classes.root, className),
    ref: container
  }, other, {
    children: /* @__PURE__ */ _jsx4(TransitionGroup, {
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
  center: PropTypes5.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes5.object,
  /**
   * @ignore
   */
  className: PropTypes5.string
};
var TouchRipple_default = TouchRipple;

// node_modules/@mui/material/ButtonBase/buttonBaseClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses2 } from "@mui/utils";
function getButtonBaseUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiButtonBase", slot);
}
var buttonBaseClasses = generateUtilityClasses2("MuiButtonBase", ["root", "disabled", "focusVisible"]), buttonBaseClasses_default = buttonBaseClasses;

// node_modules/@mui/material/ButtonBase/ButtonBase.js
import { jsx as _jsx5 } from "react/jsx-runtime";
import { jsxs as _jsxs2 } from "react/jsx-runtime";
var _excluded6 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], useUtilityClasses = (ownerState) => {
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
  overridesResolver: (props, styles2) => styles2.root
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
}), ButtonBase = /* @__PURE__ */ React5.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiButtonBase"
  }), {
    action,
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
  } = props, other = _objectWithoutPropertiesLoose6(props, _excluded6), buttonRef = React5.useRef(null), rippleRef = React5.useRef(null), handleRippleRef = useForkRef_default(rippleRef, touchRippleRef), {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible_default(), [focusVisible, setFocusVisible] = React5.useState(!1);
  disabled && focusVisible && setFocusVisible(!1), React5.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(!0), buttonRef.current.focus();
    }
  }), []);
  let [mountedState, setMountedState] = React5.useState(!1);
  React5.useEffect(() => {
    setMountedState(!0);
  }, []);
  let enableTouchRipple = mountedState && !disableRipple && !disabled;
  React5.useEffect(() => {
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
  }, keydownRef = React5.useRef(!1), handleKeyDown = useEventCallback_default((event) => {
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
  React5.useEffect(() => {
    enableTouchRipple && !rippleRef.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [enableTouchRipple]);
  let ownerState = _extends9({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  }), classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ _jsxs2(ButtonBaseRoot, _extends9({
    as: ComponentProp,
    className: clsx3(classes.root, className),
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
      /* @__PURE__ */ _jsx5(TouchRipple_default, _extends9({
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
  centerRipple: PropTypes6.bool,
  /**
   * The content of the component.
   */
  children: PropTypes6.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes6.object,
  /**
   * @ignore
   */
  className: PropTypes6.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes6.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes6.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: PropTypes6.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: PropTypes6.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes6.string,
  /**
   * @ignore
   */
  href: PropTypes6.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: PropTypes6.elementType,
  /**
   * @ignore
   */
  onBlur: PropTypes6.func,
  /**
   * @ignore
   */
  onClick: PropTypes6.func,
  /**
   * @ignore
   */
  onContextMenu: PropTypes6.func,
  /**
   * @ignore
   */
  onDragLeave: PropTypes6.func,
  /**
   * @ignore
   */
  onFocus: PropTypes6.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: PropTypes6.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes6.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes6.func,
  /**
   * @ignore
   */
  onMouseDown: PropTypes6.func,
  /**
   * @ignore
   */
  onMouseLeave: PropTypes6.func,
  /**
   * @ignore
   */
  onMouseUp: PropTypes6.func,
  /**
   * @ignore
   */
  onTouchEnd: PropTypes6.func,
  /**
   * @ignore
   */
  onTouchMove: PropTypes6.func,
  /**
   * @ignore
   */
  onTouchStart: PropTypes6.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes6.oneOfType([PropTypes6.arrayOf(PropTypes6.oneOfType([PropTypes6.func, PropTypes6.object, PropTypes6.bool])), PropTypes6.func, PropTypes6.object]),
  /**
   * @default 0
   */
  tabIndex: PropTypes6.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: PropTypes6.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: PropTypes6.oneOfType([PropTypes6.func, PropTypes6.shape({
    current: PropTypes6.shape({
      pulsate: PropTypes6.func.isRequired,
      start: PropTypes6.func.isRequired,
      stop: PropTypes6.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: PropTypes6.oneOfType([PropTypes6.oneOf(["button", "reset", "submit"]), PropTypes6.string])
};
var ButtonBase_default = ButtonBase;

// node_modules/@mui/material/Button/buttonClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses3 } from "@mui/utils";
function getButtonUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses3("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), buttonClasses_default = buttonClasses;

// node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js
import * as React6 from "react";
var ButtonGroupContext = /* @__PURE__ */ React6.createContext({});
ButtonGroupContext.displayName = "ButtonGroupContext";
var ButtonGroupContext_default = ButtonGroupContext;

// node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.js
import * as React7 from "react";
var ButtonGroupButtonContext = /* @__PURE__ */ React7.createContext(void 0);
ButtonGroupButtonContext.displayName = "ButtonGroupButtonContext";
var ButtonGroupButtonContext_default = ButtonGroupButtonContext;

// node_modules/@mui/material/Button/Button.js
import { jsx as _jsx6 } from "react/jsx-runtime";
import { jsxs as _jsxs3 } from "react/jsx-runtime";
var _excluded7 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], useUtilityClasses2 = (ownerState) => {
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
  return _extends10({}, classes, composedClasses);
}, commonIconStyles = (ownerState) => _extends10({}, ownerState.size === "small" && {
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
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize_default(ownerState.color)}`], styles2[`size${capitalize_default(ownerState.size)}`], styles2[`${ownerState.variant}Size${capitalize_default(ownerState.size)}`], ownerState.color === "inherit" && styles2.colorInherit, ownerState.disableElevation && styles2.disableElevation, ownerState.fullWidth && styles2.fullWidth];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;
  let inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800], inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
  return _extends10({}, theme.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": _extends10({
      textDecoration: "none",
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
      border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
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
    "&:active": _extends10({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[8]
    }),
    [`&.${buttonClasses_default.focusVisible}`]: _extends10({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[6]
    }),
    [`&.${buttonClasses_default.disabled}`]: _extends10({
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
    border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`
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
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.startIcon, styles2[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends10({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === "small" && {
  marginLeft: -2
}, commonIconStyles(ownerState))), ButtonEndIcon = styled_default("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.endIcon, styles2[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends10({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === "small" && {
  marginRight: -2
}, commonIconStyles(ownerState))), Button = /* @__PURE__ */ React8.forwardRef(function(inProps, ref) {
  let contextProps = React8.useContext(ButtonGroupContext_default), buttonGroupButtonContextPositionClassName = React8.useContext(ButtonGroupButtonContext_default), resolvedProps = resolveProps(contextProps, inProps), props = useThemeProps({
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
  } = props, other = _objectWithoutPropertiesLoose7(props, _excluded7), ownerState = _extends10({}, props, {
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  }), classes = useUtilityClasses2(ownerState), startIcon = startIconProp && /* @__PURE__ */ _jsx6(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  }), endIcon = endIconProp && /* @__PURE__ */ _jsx6(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp
  }), positionClassName = buttonGroupButtonContextPositionClassName || "";
  return /* @__PURE__ */ _jsxs3(ButtonRoot, _extends10({
    ownerState,
    className: clsx4(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx4(classes.focusVisible, focusVisibleClassName),
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
  children: PropTypes7.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes7.object,
  /**
   * @ignore
   */
  className: PropTypes7.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes7.oneOfType([PropTypes7.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), PropTypes7.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes7.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes7.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: PropTypes7.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes7.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes7.bool,
  /**
   * Element placed after the children.
   */
  endIcon: PropTypes7.node,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes7.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes7.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes7.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes7.oneOfType([PropTypes7.oneOf(["small", "medium", "large"]), PropTypes7.string]),
  /**
   * Element placed before the children.
   */
  startIcon: PropTypes7.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes7.oneOfType([PropTypes7.arrayOf(PropTypes7.oneOfType([PropTypes7.func, PropTypes7.object, PropTypes7.bool])), PropTypes7.func, PropTypes7.object]),
  /**
   * @ignore
   */
  type: PropTypes7.oneOfType([PropTypes7.oneOf(["button", "reset", "submit"]), PropTypes7.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes7.oneOfType([PropTypes7.oneOf(["contained", "outlined", "text"]), PropTypes7.string])
};
var Button_default = Button;

// node_modules/@mui/material/ButtonGroup/ButtonGroup.js
import _objectWithoutPropertiesLoose8 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends11 from "@babel/runtime/helpers/esm/extends";
import * as React9 from "react";
import PropTypes8 from "prop-types";
import clsx5 from "clsx";
import { alpha as alpha2 } from "@mui/system";
import { getValidReactChildren } from "@mui/utils";

// node_modules/@mui/material/ButtonGroup/buttonGroupClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses4 } from "@mui/utils";
function getButtonGroupUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiButtonGroup", slot);
}
var buttonGroupClasses = generateUtilityClasses4("MuiButtonGroup", ["root", "contained", "outlined", "text", "disableElevation", "disabled", "firstButton", "fullWidth", "vertical", "grouped", "groupedHorizontal", "groupedVertical", "groupedText", "groupedTextHorizontal", "groupedTextVertical", "groupedTextPrimary", "groupedTextSecondary", "groupedOutlined", "groupedOutlinedHorizontal", "groupedOutlinedVertical", "groupedOutlinedPrimary", "groupedOutlinedSecondary", "groupedContained", "groupedContainedHorizontal", "groupedContainedVertical", "groupedContainedPrimary", "groupedContainedSecondary", "lastButton", "middleButton"]), buttonGroupClasses_default = buttonGroupClasses;

// node_modules/@mui/material/ButtonGroup/ButtonGroup.js
import { jsx as _jsx7 } from "react/jsx-runtime";
var _excluded8 = ["children", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "disableRipple", "fullWidth", "orientation", "size", "variant"], overridesResolver = (props, styles2) => {
  let {
    ownerState
  } = props;
  return [{
    [`& .${buttonGroupClasses_default.grouped}`]: styles2.grouped
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles2[`grouped${capitalize_default(ownerState.orientation)}`]
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles2[`grouped${capitalize_default(ownerState.variant)}`]
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles2[`grouped${capitalize_default(ownerState.variant)}${capitalize_default(ownerState.orientation)}`]
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles2[`grouped${capitalize_default(ownerState.variant)}${capitalize_default(ownerState.color)}`]
  }, {
    [`& .${buttonGroupClasses_default.firstButton}`]: styles2.firstButton
  }, {
    [`& .${buttonGroupClasses_default.lastButton}`]: styles2.lastButton
  }, {
    [`& .${buttonGroupClasses_default.middleButton}`]: styles2.middleButton
  }, styles2.root, styles2[ownerState.variant], ownerState.disableElevation === !0 && styles2.disableElevation, ownerState.fullWidth && styles2.fullWidth, ownerState.orientation === "vertical" && styles2.vertical];
}, useUtilityClasses3 = (ownerState) => {
  let {
    classes,
    color,
    disabled,
    disableElevation,
    fullWidth,
    orientation,
    variant
  } = ownerState, slots = {
    root: ["root", variant, orientation === "vertical" && "vertical", fullWidth && "fullWidth", disableElevation && "disableElevation"],
    grouped: ["grouped", `grouped${capitalize_default(orientation)}`, `grouped${capitalize_default(variant)}`, `grouped${capitalize_default(variant)}${capitalize_default(orientation)}`, `grouped${capitalize_default(variant)}${capitalize_default(color)}`, disabled && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return unstable_composeClasses(slots, getButtonGroupUtilityClass, classes);
}, ButtonGroupRoot = styled_default("div", {
  name: "MuiButtonGroup",
  slot: "Root",
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends11({
  display: "inline-flex",
  borderRadius: (theme.vars || theme).shape.borderRadius
}, ownerState.variant === "contained" && {
  boxShadow: (theme.vars || theme).shadows[2]
}, ownerState.disableElevation && {
  boxShadow: "none"
}, ownerState.fullWidth && {
  width: "100%"
}, ownerState.orientation === "vertical" && {
  flexDirection: "column"
}, {
  [`& .${buttonGroupClasses_default.grouped}`]: _extends11({
    minWidth: 40,
    "&:hover": _extends11({}, ownerState.variant === "contained" && {
      boxShadow: "none"
    })
  }, ownerState.variant === "contained" && {
    boxShadow: "none"
  }),
  [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: _extends11({}, ownerState.orientation === "horizontal" && {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }, ownerState.orientation === "vertical" && {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  }, ownerState.variant === "text" && ownerState.orientation === "horizontal" && {
    borderRight: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
    [`&.${buttonGroupClasses_default.disabled}`]: {
      borderRight: `1px solid ${(theme.vars || theme).palette.action.disabled}`
    }
  }, ownerState.variant === "text" && ownerState.orientation === "vertical" && {
    borderBottom: theme.vars ? `1px solid rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
    [`&.${buttonGroupClasses_default.disabled}`]: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.action.disabled}`
    }
  }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
    borderColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : alpha2(theme.palette[ownerState.color].main, 0.5)
  }, ownerState.variant === "outlined" && ownerState.orientation === "horizontal" && {
    borderRightColor: "transparent"
  }, ownerState.variant === "outlined" && ownerState.orientation === "vertical" && {
    borderBottomColor: "transparent"
  }, ownerState.variant === "contained" && ownerState.orientation === "horizontal" && {
    borderRight: `1px solid ${(theme.vars || theme).palette.grey[400]}`,
    [`&.${buttonGroupClasses_default.disabled}`]: {
      borderRight: `1px solid ${(theme.vars || theme).palette.action.disabled}`
    }
  }, ownerState.variant === "contained" && ownerState.orientation === "vertical" && {
    borderBottom: `1px solid ${(theme.vars || theme).palette.grey[400]}`,
    [`&.${buttonGroupClasses_default.disabled}`]: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.action.disabled}`
    }
  }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
    borderColor: (theme.vars || theme).palette[ownerState.color].dark
  }, {
    "&:hover": _extends11({}, ownerState.variant === "outlined" && ownerState.orientation === "horizontal" && {
      borderRightColor: "currentColor"
    }, ownerState.variant === "outlined" && ownerState.orientation === "vertical" && {
      borderBottomColor: "currentColor"
    })
  }),
  [`& .${buttonGroupClasses_default.lastButton},& .${buttonGroupClasses_default.middleButton}`]: _extends11({}, ownerState.orientation === "horizontal" && {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }, ownerState.orientation === "vertical" && {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  }, ownerState.variant === "outlined" && ownerState.orientation === "horizontal" && {
    marginLeft: -1
  }, ownerState.variant === "outlined" && ownerState.orientation === "vertical" && {
    marginTop: -1
  })
})), ButtonGroup = /* @__PURE__ */ React9.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiButtonGroup"
  }), {
    children,
    className,
    color = "primary",
    component = "div",
    disabled = !1,
    disableElevation = !1,
    disableFocusRipple = !1,
    disableRipple = !1,
    fullWidth = !1,
    orientation = "horizontal",
    size = "medium",
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose8(props, _excluded8), ownerState = _extends11({}, props, {
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    disableRipple,
    fullWidth,
    orientation,
    size,
    variant
  }), classes = useUtilityClasses3(ownerState), context = React9.useMemo(() => ({
    className: classes.grouped,
    color,
    disabled,
    disableElevation,
    disableFocusRipple,
    disableRipple,
    fullWidth,
    size,
    variant
  }), [color, disabled, disableElevation, disableFocusRipple, disableRipple, fullWidth, size, variant, classes.grouped]), validChildren = getValidReactChildren(children), childrenCount = validChildren.length, getButtonPositionClassName = (index) => {
    let isFirstButton = index === 0, isLastButton = index === childrenCount - 1;
    return isFirstButton && isLastButton ? "" : isFirstButton ? classes.firstButton : isLastButton ? classes.lastButton : classes.middleButton;
  };
  return /* @__PURE__ */ _jsx7(ButtonGroupRoot, _extends11({
    as: component,
    role: "group",
    className: clsx5(classes.root, className),
    ref,
    ownerState
  }, other, {
    children: /* @__PURE__ */ _jsx7(ButtonGroupContext_default.Provider, {
      value: context,
      children: validChildren.map((child, index) => /* @__PURE__ */ _jsx7(ButtonGroupButtonContext_default.Provider, {
        value: getButtonPositionClassName(index),
        children: child
      }, index))
    })
  }));
});
ButtonGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
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
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes8.oneOfType([PropTypes8.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), PropTypes8.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes8.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes8.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: PropTypes8.bool,
  /**
   * If `true`, the button keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes8.bool,
  /**
   * If `true`, the button ripple effect is disabled.
   * @default false
   */
  disableRipple: PropTypes8.bool,
  /**
   * If `true`, the buttons will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes8.bool,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: PropTypes8.oneOf(["horizontal", "vertical"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes8.oneOfType([PropTypes8.oneOf(["small", "medium", "large"]), PropTypes8.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes8.oneOfType([PropTypes8.arrayOf(PropTypes8.oneOfType([PropTypes8.func, PropTypes8.object, PropTypes8.bool])), PropTypes8.func, PropTypes8.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes8.oneOfType([PropTypes8.oneOf(["contained", "outlined", "text"]), PropTypes8.string])
};
var ButtonGroup_default = ButtonGroup;

// node_modules/@mui/material/Alert/Alert.js
import _objectWithoutPropertiesLoose12 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends16 from "@babel/runtime/helpers/esm/extends";
import * as React20 from "react";
import PropTypes12 from "prop-types";
import clsx9 from "clsx";
import { darken as darken2, lighten as lighten2 } from "@mui/system";

// node_modules/@mui/material/Paper/Paper.js
import _objectWithoutPropertiesLoose9 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends12 from "@babel/runtime/helpers/esm/extends";
import * as React11 from "react";
import PropTypes9 from "prop-types";
import clsx6 from "clsx";
import { chainPropTypes, integerPropType } from "@mui/utils";
import { alpha as alpha3 } from "@mui/system";

// node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = (elevation) => {
  let alphaValue;
  return elevation < 1 ? alphaValue = 5.11916 * elevation ** 2 : alphaValue = 4.5 * Math.log(elevation + 1) + 2, (alphaValue / 100).toFixed(2);
}, getOverlayAlpha_default = getOverlayAlpha;

// node_modules/@mui/material/styles/useTheme.js
import * as React10 from "react";
import { useTheme as useThemeSystem } from "@mui/system";
function useTheme() {
  let theme = useThemeSystem(defaultTheme_default);
  return React10.useDebugValue(theme), theme[identifier_default] || theme;
}

// node_modules/@mui/material/Paper/paperClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses5 } from "@mui/utils";
function getPaperUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiPaper", slot);
}
var paperClasses = generateUtilityClasses5("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);

// node_modules/@mui/material/Paper/Paper.js
import { jsx as _jsx8 } from "react/jsx-runtime";
var _excluded9 = ["className", "component", "elevation", "square", "variant"], useUtilityClasses4 = (ownerState) => {
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
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], !ownerState.square && styles2.rounded, ownerState.variant === "elevation" && styles2[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends12({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${(theme.vars || theme).palette.divider}`
  }, ownerState.variant === "elevation" && _extends12({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha3("#fff", getOverlayAlpha_default(ownerState.elevation))}, ${alpha3("#fff", getOverlayAlpha_default(ownerState.elevation))})`
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
}), Paper = /* @__PURE__ */ React11.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiPaper"
  }), {
    className,
    component = "div",
    elevation = 1,
    square = !1,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose9(props, _excluded9), ownerState = _extends12({}, props, {
    component,
    elevation,
    square,
    variant
  }), classes = useUtilityClasses4(ownerState);
  return useTheme().shadows[elevation] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join(`
`)), /* @__PURE__ */ _jsx8(PaperRoot, _extends12({
    as: component,
    ownerState,
    className: clsx6(classes.root, className),
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
  children: PropTypes9.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes9.object,
  /**
   * @ignore
   */
  className: PropTypes9.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes9.elementType,
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
  square: PropTypes9.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes9.oneOfType([PropTypes9.arrayOf(PropTypes9.oneOfType([PropTypes9.func, PropTypes9.object, PropTypes9.bool])), PropTypes9.func, PropTypes9.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: PropTypes9.oneOfType([PropTypes9.oneOf(["elevation", "outlined"]), PropTypes9.string])
};
var Paper_default = Paper;

// node_modules/@mui/material/Alert/alertClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses6 } from "@mui/utils";
function getAlertUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiAlert", slot);
}
var alertClasses = generateUtilityClasses6("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), alertClasses_default = alertClasses;

// node_modules/@mui/material/IconButton/IconButton.js
import _objectWithoutPropertiesLoose10 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends13 from "@babel/runtime/helpers/esm/extends";
import * as React12 from "react";
import PropTypes10 from "prop-types";
import clsx7 from "clsx";
import { chainPropTypes as chainPropTypes2 } from "@mui/utils";
import { alpha as alpha4 } from "@mui/system";

// node_modules/@mui/material/IconButton/iconButtonClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses7 } from "@mui/utils";
function getIconButtonUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiIconButton", slot);
}
var iconButtonClasses = generateUtilityClasses7("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), iconButtonClasses_default = iconButtonClasses;

// node_modules/@mui/material/IconButton/IconButton.js
import { jsx as _jsx9 } from "react/jsx-runtime";
var _excluded10 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], useUtilityClasses5 = (ownerState) => {
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
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "default" && styles2[`color${capitalize_default(ownerState.color)}`], ownerState.edge && styles2[`edge${capitalize_default(ownerState.edge)}`], styles2[`size${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends13({
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
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha4(theme.palette.action.active, theme.palette.action.hoverOpacity),
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
  return _extends13({}, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && ownerState.color !== "default" && _extends13({
    color: palette?.main
  }, !ownerState.disableRipple && {
    "&:hover": _extends13({}, palette && {
      backgroundColor: theme.vars ? `rgba(${palette.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha4(palette.main, theme.palette.action.hoverOpacity)
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
}), IconButton = /* @__PURE__ */ React12.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose10(props, _excluded10), ownerState = _extends13({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  }), classes = useUtilityClasses5(ownerState);
  return /* @__PURE__ */ _jsx9(IconButtonRoot, _extends13({
    className: clsx7(classes.root, className),
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
  children: chainPropTypes2(PropTypes10.node, (props) => React12.Children.toArray(props.children).some((child) => /* @__PURE__ */ React12.isValidElement(child) && child.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
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
   * @default 'default'
   */
  color: PropTypes10.oneOfType([PropTypes10.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), PropTypes10.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes10.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes10.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes10.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: PropTypes10.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes10.oneOfType([PropTypes10.oneOf(["small", "medium", "large"]), PropTypes10.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes10.oneOfType([PropTypes10.arrayOf(PropTypes10.oneOfType([PropTypes10.func, PropTypes10.object, PropTypes10.bool])), PropTypes10.func, PropTypes10.object])
};
var IconButton_default = IconButton;

// node_modules/@mui/material/internal/svg-icons/SuccessOutlined.js
import "react";

// node_modules/@mui/material/utils/createSvgIcon.js
import _extends15 from "@babel/runtime/helpers/esm/extends";
import * as React14 from "react";

// node_modules/@mui/material/SvgIcon/SvgIcon.js
import _extends14 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose11 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React13 from "react";
import PropTypes11 from "prop-types";
import clsx8 from "clsx";

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses8 } from "@mui/utils";
function getSvgIconUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses8("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/SvgIcon/SvgIcon.js
import { jsx as _jsx10 } from "react/jsx-runtime";
import { jsxs as _jsxs4 } from "react/jsx-runtime";
var _excluded11 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], useUtilityClasses6 = (ownerState) => {
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
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize_default(ownerState.color)}`], styles2[`fontSize${capitalize_default(ownerState.fontSize)}`]];
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
}), SvgIcon = /* @__PURE__ */ React13.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose11(props, _excluded11), hasSvgAsChild = /* @__PURE__ */ React13.isValidElement(children) && children.type === "svg", ownerState = _extends14({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  }), more = {};
  inheritViewBox || (more.viewBox = viewBox);
  let classes = useUtilityClasses6(ownerState);
  return /* @__PURE__ */ _jsxs4(SvgIconRoot, _extends14({
    as: component,
    className: clsx8(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : !0,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ _jsx10("title", {
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
  children: PropTypes11.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes11.object,
  /**
   * @ignore
   */
  className: PropTypes11.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: PropTypes11.oneOfType([PropTypes11.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), PropTypes11.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes11.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: PropTypes11.oneOfType([PropTypes11.oneOf(["inherit", "large", "medium", "small"]), PropTypes11.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes11.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: PropTypes11.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: PropTypes11.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes11.oneOfType([PropTypes11.arrayOf(PropTypes11.oneOfType([PropTypes11.func, PropTypes11.object, PropTypes11.bool])), PropTypes11.func, PropTypes11.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes11.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: PropTypes11.string
};
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// node_modules/@mui/material/utils/createSvgIcon.js
import { jsx as _jsx11 } from "react/jsx-runtime";
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /* @__PURE__ */ _jsx11(SvgIcon_default, _extends15({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  return Component.displayName = `${displayName}Icon`, Component.muiName = SvgIcon_default.muiName, /* @__PURE__ */ React14.memo(/* @__PURE__ */ React14.forwardRef(Component));
}

// node_modules/@mui/material/internal/svg-icons/SuccessOutlined.js
import { jsx as _jsx12 } from "react/jsx-runtime";
var SuccessOutlined_default = createSvgIcon(/* @__PURE__ */ _jsx12("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined");

// node_modules/@mui/material/internal/svg-icons/ReportProblemOutlined.js
import "react";
import { jsx as _jsx13 } from "react/jsx-runtime";
var ReportProblemOutlined_default = createSvgIcon(/* @__PURE__ */ _jsx13("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined");

// node_modules/@mui/material/internal/svg-icons/ErrorOutline.js
import "react";
import { jsx as _jsx14 } from "react/jsx-runtime";
var ErrorOutline_default = createSvgIcon(/* @__PURE__ */ _jsx14("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline");

// node_modules/@mui/material/internal/svg-icons/InfoOutlined.js
import "react";
import { jsx as _jsx15 } from "react/jsx-runtime";
var InfoOutlined_default = createSvgIcon(/* @__PURE__ */ _jsx15("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined");

// node_modules/@mui/material/internal/svg-icons/Close.js
import "react";
import { jsx as _jsx16 } from "react/jsx-runtime";
var Close_default = createSvgIcon(/* @__PURE__ */ _jsx16("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");

// node_modules/@mui/material/Alert/Alert.js
import { jsx as _jsx17 } from "react/jsx-runtime";
import { jsxs as _jsxs5 } from "react/jsx-runtime";
var _excluded12 = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], useUtilityClasses7 = (ownerState) => {
  let {
    variant,
    color,
    severity,
    classes
  } = ownerState, slots = {
    root: ["root", `${variant}${capitalize_default(color || severity)}`, `${variant}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return unstable_composeClasses(slots, getAlertUtilityClass, classes);
}, AlertRoot = styled_default(Paper_default, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    let {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], styles2[`${ownerState.variant}${capitalize_default(ownerState.color || ownerState.severity)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  let getColor = theme.palette.mode === "light" ? darken2 : lighten2, getBackgroundColor = theme.palette.mode === "light" ? lighten2 : darken2, color = ownerState.color || ownerState.severity;
  return _extends16({}, theme.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, color && ownerState.variant === "standard" && {
    color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
    backgroundColor: theme.vars ? theme.vars.palette.Alert[`${color}StandardBg`] : getBackgroundColor(theme.palette[color].light, 0.9),
    [`& .${alertClasses_default.icon}`]: theme.vars ? {
      color: theme.vars.palette.Alert[`${color}IconColor`]
    } : {
      color: theme.palette[color].main
    }
  }, color && ownerState.variant === "outlined" && {
    color: theme.vars ? theme.vars.palette.Alert[`${color}Color`] : getColor(theme.palette[color].light, 0.6),
    border: `1px solid ${(theme.vars || theme).palette[color].light}`,
    [`& .${alertClasses_default.icon}`]: theme.vars ? {
      color: theme.vars.palette.Alert[`${color}IconColor`]
    } : {
      color: theme.palette[color].main
    }
  }, color && ownerState.variant === "filled" && _extends16({
    fontWeight: theme.typography.fontWeightMedium
  }, theme.vars ? {
    color: theme.vars.palette.Alert[`${color}FilledColor`],
    backgroundColor: theme.vars.palette.Alert[`${color}FilledBg`]
  } : {
    backgroundColor: theme.palette.mode === "dark" ? theme.palette[color].dark : theme.palette[color].main,
    color: theme.palette.getContrastText(theme.palette[color].main)
  }));
}), AlertIcon = styled_default("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (props, styles2) => styles2.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), AlertMessage = styled_default("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (props, styles2) => styles2.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), AlertAction = styled_default("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (props, styles2) => styles2.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), defaultIconMapping = {
  success: /* @__PURE__ */ _jsx17(SuccessOutlined_default, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ _jsx17(ReportProblemOutlined_default, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ _jsx17(ErrorOutline_default, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ _jsx17(InfoOutlined_default, {
    fontSize: "inherit"
  })
}, Alert = /* @__PURE__ */ React20.forwardRef(function(inProps, ref) {
  var _ref, _slots$closeButton, _ref2, _slots$closeIcon, _slotProps$closeButto, _slotProps$closeIcon;
  let props = useThemeProps({
    props: inProps,
    name: "MuiAlert"
  }), {
    action,
    children,
    className,
    closeText = "Close",
    color,
    components = {},
    componentsProps = {},
    icon,
    iconMapping = defaultIconMapping,
    onClose,
    role = "alert",
    severity = "success",
    slotProps = {},
    slots = {},
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose12(props, _excluded12), ownerState = _extends16({}, props, {
    color,
    severity,
    variant
  }), classes = useUtilityClasses7(ownerState), AlertCloseButton = (_ref = (_slots$closeButton = slots.closeButton) != null ? _slots$closeButton : components.CloseButton) != null ? _ref : IconButton_default, AlertCloseIcon = (_ref2 = (_slots$closeIcon = slots.closeIcon) != null ? _slots$closeIcon : components.CloseIcon) != null ? _ref2 : Close_default, closeButtonProps = (_slotProps$closeButto = slotProps.closeButton) != null ? _slotProps$closeButto : componentsProps.closeButton, closeIconProps = (_slotProps$closeIcon = slotProps.closeIcon) != null ? _slotProps$closeIcon : componentsProps.closeIcon;
  return /* @__PURE__ */ _jsxs5(AlertRoot, _extends16({
    role,
    elevation: 0,
    ownerState,
    className: clsx9(classes.root, className),
    ref
  }, other, {
    children: [icon !== !1 ? /* @__PURE__ */ _jsx17(AlertIcon, {
      ownerState,
      className: classes.icon,
      children: icon || iconMapping[severity] || defaultIconMapping[severity]
    }) : null, /* @__PURE__ */ _jsx17(AlertMessage, {
      ownerState,
      className: classes.message,
      children
    }), action != null ? /* @__PURE__ */ _jsx17(AlertAction, {
      ownerState,
      className: classes.action,
      children: action
    }) : null, action == null && onClose ? /* @__PURE__ */ _jsx17(AlertAction, {
      ownerState,
      className: classes.action,
      children: /* @__PURE__ */ _jsx17(AlertCloseButton, _extends16({
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose
      }, closeButtonProps, {
        children: /* @__PURE__ */ _jsx17(AlertCloseIcon, _extends16({
          fontSize: "small"
        }, closeIconProps))
      }))
    }) : null]
  }));
});
Alert.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: PropTypes12.node,
  /**
   * The content of the component.
   */
  children: PropTypes12.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes12.object,
  /**
   * @ignore
   */
  className: PropTypes12.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: PropTypes12.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: PropTypes12.oneOfType([PropTypes12.oneOf(["error", "info", "success", "warning"]), PropTypes12.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes12.shape({
    CloseButton: PropTypes12.elementType,
    CloseIcon: PropTypes12.elementType
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
  componentsProps: PropTypes12.shape({
    closeButton: PropTypes12.object,
    closeIcon: PropTypes12.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: PropTypes12.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: PropTypes12.shape({
    error: PropTypes12.node,
    info: PropTypes12.node,
    success: PropTypes12.node,
    warning: PropTypes12.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: PropTypes12.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: PropTypes12.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: PropTypes12.oneOf(["error", "info", "success", "warning"]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes12.shape({
    closeButton: PropTypes12.object,
    closeIcon: PropTypes12.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes12.shape({
    closeButton: PropTypes12.elementType,
    closeIcon: PropTypes12.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes12.oneOfType([PropTypes12.arrayOf(PropTypes12.oneOfType([PropTypes12.func, PropTypes12.object, PropTypes12.bool])), PropTypes12.func, PropTypes12.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: PropTypes12.oneOfType([PropTypes12.oneOf(["filled", "outlined", "standard"]), PropTypes12.string])
};
var Alert_default = Alert;

// node_modules/@mui/material/Stack/Stack.js
import PropTypes13 from "prop-types";
import { createStack } from "@mui/system";
var Stack = createStack({
  createStyledComponent: styled_default("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (props, styles2) => styles2.root
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
  children: PropTypes13.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes13.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: PropTypes13.oneOfType([PropTypes13.oneOf(["column-reverse", "column", "row-reverse", "row"]), PropTypes13.arrayOf(PropTypes13.oneOf(["column-reverse", "column", "row-reverse", "row"])), PropTypes13.object]),
  /**
   * Add an element between each child.
   */
  divider: PropTypes13.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: PropTypes13.oneOfType([PropTypes13.arrayOf(PropTypes13.oneOfType([PropTypes13.number, PropTypes13.string])), PropTypes13.number, PropTypes13.object, PropTypes13.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes13.oneOfType([PropTypes13.arrayOf(PropTypes13.oneOfType([PropTypes13.func, PropTypes13.object, PropTypes13.bool])), PropTypes13.func, PropTypes13.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: PropTypes13.bool
};
var Stack_default = Stack;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV3("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsxDEV3("h1", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(Button_default, { variant: "contained", children: "Hello world" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("ul", { children: [
      /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer",
          children: "15m Quickstart Blog Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 22,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer",
          children: "Deep Dive Jokes App Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 31,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("li", { children: /* @__PURE__ */ jsxDEV3("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(ButtonGroup_default, { variant: "contained", "aria-label": "outlined primary button group", children: [
      /* @__PURE__ */ jsxDEV3(Button_default, { children: "One" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Button_default, { children: "Two" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Button_default, { children: "Three" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(Stack_default, { sx: { width: "100%" }, spacing: 2, children: [
      /* @__PURE__ */ jsxDEV3(Alert_default, { severity: "error", children: "This is an error alert \u2014 check it out!" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Alert_default, { severity: "warning", children: "This is a warning alert \u2014 check it out!" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Alert_default, { severity: "info", children: "This is an info alert \u2014 check it out!" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(Alert_default, { severity: "success", children: "This is a success alert \u2014 check it out!" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-4TL7VMUR.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-BGRA5IH3.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-YAKEP2ZL.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-OAWKSOLH.js", imports: ["/build/_shared/chunk-XXEVKDGZ.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-GPC7QLB6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "d4618c3b", hmr: { runtime: "/build/_shared\\chunk-YAKEP2ZL.js", timestamp: 1701966680086 }, url: "/build/manifest-D4618C3B.js" };

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
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
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
