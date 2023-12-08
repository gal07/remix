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

// app/layout/Appbar.tsx
import * as React26 from "react";

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
var rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
var styled = createStyled({
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, styles3[ownerState.variant], !ownerState.square && styles3.rounded, ownerState.variant === "elevation" && styles3[`elevation${ownerState.elevation}`]];
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, styles3[`position${capitalize_default(ownerState.position)}`], styles3[`color${capitalize_default(ownerState.color)}`]];
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

// node_modules/@mui/material/styles/cssUtils.js
function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function toUnitless(length) {
  return parseFloat(length);
}

// node_modules/@mui/material/styles/index.js
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, !ownerState.disableGutters && styles3.gutters, styles3[ownerState.variant]];
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, ownerState.variant && styles3[ownerState.variant], ownerState.align !== "inherit" && styles3[`align${capitalize_default(ownerState.align)}`], ownerState.noWrap && styles3.noWrap, ownerState.gutterBottom && styles3.gutterBottom, ownerState.paragraph && styles3.paragraph];
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
  overridesResolver: (props, styles3) => styles3.root
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
  } = props, other = _objectWithoutPropertiesLoose10(props, _excluded10), buttonRef = React8.useRef(null), rippleRef = React8.useRef(null), handleRippleRef = useForkRef_default(rippleRef, touchRippleRef), {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible_default(), [focusVisible, setFocusVisible] = React8.useState(!1);
  disabled && focusVisible && setFocusVisible(!1), React8.useImperativeHandle(action, () => ({
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, ownerState.color !== "default" && styles3[`color${capitalize_default(ownerState.color)}`], ownerState.edge && styles3[`edge${capitalize_default(ownerState.edge)}`], styles3[`size${capitalize_default(ownerState.size)}`]];
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, ownerState.color !== "inherit" && styles3[`color${capitalize_default(ownerState.color)}`], styles3[`fontSize${capitalize_default(ownerState.fontSize)}`]];
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
import _objectWithoutPropertiesLoose17 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends19 from "@babel/runtime/helpers/esm/extends";
import * as React18 from "react";
import PropTypes17 from "prop-types";
import clsx12 from "clsx";
import { integerPropType as integerPropType2 } from "@mui/utils";

// node_modules/@mui/base/unstable_useModal/useModal.js
import _extends14 from "@babel/runtime/helpers/esm/extends";
import * as React11 from "react";
import { unstable_ownerDocument as ownerDocument2, unstable_useForkRef as useForkRef2, unstable_useEventCallback as useEventCallback2, unstable_createChainedFunction as createChainedFunction } from "@mui/utils";

// node_modules/@mui/base/utils/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0)
    return {};
  let result = {};
  return Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] == "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  }), result;
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
  return items.some((item, index) => callback(item) ? (idx = index, !0) : !1), idx;
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
  } = parameters, modal = React11.useRef({}), mountNodeRef = React11.useRef(null), modalRef = React11.useRef(null), handleRef = useForkRef2(modalRef, rootRef), [exited, setExited] = React11.useState(!open), hasTransition = getHasTransition(children), ariaHiddenProp = !0;
  (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === !1) && (ariaHiddenProp = !1);
  let getDoc = () => ownerDocument2(mountNodeRef.current), getModal = () => (modal.current.modalRef = modalRef.current, modal.current.mount = mountNodeRef.current, modal.current), handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    }), modalRef.current && (modalRef.current.scrollTop = 0);
  }, handleOpen = useEventCallback2(() => {
    let resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer), modalRef.current && handleMounted();
  }), isTopModal = React11.useCallback(() => manager.isTopModal(getModal()), [manager]), handlePortalRef = useEventCallback2((node) => {
    mountNodeRef.current = node, node && (open && isTopModal() ? handleMounted() : modalRef.current && ariaHidden(modalRef.current, ariaHiddenProp));
  }), handleClose = React11.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp, manager]);
  React11.useEffect(() => () => {
    handleClose();
  }, [handleClose]), React11.useEffect(() => {
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
      let externalEventHandlers = _extends14({}, propsEventHandlers, otherHandlers);
      return _extends14({
        role: "presentation"
      }, externalEventHandlers, {
        onKeyDown: createHandleKeyDown(externalEventHandlers),
        ref: handleRef
      });
    },
    getBackdropProps: (otherHandlers = {}) => {
      let externalEventHandlers = otherHandlers;
      return _extends14({
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
import _objectWithoutPropertiesLoose15 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends17 from "@babel/runtime/helpers/esm/extends";
import * as React16 from "react";
import PropTypes15 from "prop-types";
import clsx11 from "clsx";
import { elementAcceptingRef as elementAcceptingRef3, HTMLElementType as HTMLElementType2 } from "@mui/utils";
import { useSlotProps } from "@mui/base";

// node_modules/@mui/base/FocusTrap/FocusTrap.js
import * as React12 from "react";
import PropTypes11 from "prop-types";
import { exactProp, elementAcceptingRef, unstable_useForkRef as useForkRef3, unstable_ownerDocument as ownerDocument3 } from "@mui/utils";
import { jsx as _jsx10 } from "react/jsx-runtime";
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
  } = props, ignoreNextEnforceFocus = React12.useRef(!1), sentinelStart = React12.useRef(null), sentinelEnd = React12.useRef(null), nodeToRestore = React12.useRef(null), reactFocusEventTarget = React12.useRef(null), activated = React12.useRef(!1), rootRef = React12.useRef(null), handleRef = useForkRef3(children.ref, rootRef), lastKeydown = React12.useRef(null);
  React12.useEffect(() => {
    !open || !rootRef.current || (activated.current = !disableAutoFocus);
  }, [disableAutoFocus, open]), React12.useEffect(() => {
    if (!open || !rootRef.current)
      return;
    let doc = ownerDocument3(rootRef.current);
    return rootRef.current.contains(doc.activeElement) || (rootRef.current.hasAttribute("tabIndex") || (console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), rootRef.current.setAttribute("tabIndex", "-1")), activated.current && rootRef.current.focus()), () => {
      disableRestoreFocus || (nodeToRestore.current && nodeToRestore.current.focus && (ignoreNextEnforceFocus.current = !0, nodeToRestore.current.focus()), nodeToRestore.current = null);
    };
  }, [open]), React12.useEffect(() => {
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
  return /* @__PURE__ */ _jsxs2(React12.Fragment, {
    children: [/* @__PURE__ */ _jsx10("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ React12.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /* @__PURE__ */ _jsx10("div", {
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
import * as React13 from "react";
import * as ReactDOM from "react-dom";
import PropTypes12 from "prop-types";
import { exactProp as exactProp2, HTMLElementType, unstable_useEnhancedEffect as useEnhancedEffect, unstable_useForkRef as useForkRef4, unstable_setRef as setRef } from "@mui/utils";
import { jsx as _jsx11 } from "react/jsx-runtime";
function getContainer2(container) {
  return typeof container == "function" ? container() : container;
}
var Portal = /* @__PURE__ */ React13.forwardRef(function(props, forwardedRef) {
  let {
    children,
    container,
    disablePortal = !1
  } = props, [mountNode, setMountNode] = React13.useState(null), handleRef = useForkRef4(/* @__PURE__ */ React13.isValidElement(children) ? children.ref : null, forwardedRef);
  return useEnhancedEffect(() => {
    disablePortal || setMountNode(getContainer2(container) || document.body);
  }, [container, disablePortal]), useEnhancedEffect(() => {
    if (mountNode && !disablePortal)
      return setRef(forwardedRef, mountNode), () => {
        setRef(forwardedRef, null);
      };
  }, [forwardedRef, mountNode, disablePortal]), disablePortal ? /* @__PURE__ */ React13.isValidElement(children) ? /* @__PURE__ */ React13.cloneElement(children, {
    ref: handleRef
  }) : /* @__PURE__ */ _jsx11(React13.Fragment, {
    children
  }) : /* @__PURE__ */ _jsx11(React13.Fragment, {
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
import _objectWithoutPropertiesLoose14 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends16 from "@babel/runtime/helpers/esm/extends";
import * as React15 from "react";
import PropTypes14 from "prop-types";
import clsx10 from "clsx";

// node_modules/@mui/material/Fade/Fade.js
import _extends15 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose13 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React14 from "react";
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
import { jsx as _jsx12 } from "react/jsx-runtime";
var _excluded13 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Fade = /* @__PURE__ */ React14.forwardRef(function(props, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose13(props, _excluded13), enableStrictModeCompat = !0, nodeRef = React14.useRef(null), handleRef = useForkRef_default(nodeRef, children.ref, ref), normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
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
  return /* @__PURE__ */ _jsx12(TransitionComponent, _extends15({
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
    children: (state, childProps) => /* @__PURE__ */ React14.cloneElement(children, _extends15({
      style: _extends15({
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
import { jsx as _jsx13 } from "react/jsx-runtime";
var _excluded14 = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], useUtilityClasses8 = (ownerState) => {
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, ownerState.invisible && styles3.invisible];
  }
})(({
  ownerState
}) => _extends16({
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
})), Backdrop = /* @__PURE__ */ React15.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose14(props, _excluded14), ownerState = _extends16({}, props, {
    component,
    invisible
  }), classes = useUtilityClasses8(ownerState), rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return /* @__PURE__ */ _jsx13(TransitionComponent, _extends16({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /* @__PURE__ */ _jsx13(BackdropRoot, _extends16({
      "aria-hidden": !0
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: clsx10(classes.root, className, rootSlotProps?.className),
      ownerState: _extends16({}, ownerState, rootSlotProps?.ownerState),
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
import { jsx as _jsx14 } from "react/jsx-runtime";
import { jsxs as _jsxs3 } from "react/jsx-runtime";
var _excluded15 = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], useUtilityClasses9 = (ownerState) => {
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, !ownerState.open && ownerState.exited && styles3.hidden];
  }
})(({
  theme,
  ownerState
}) => _extends17({
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
  overridesResolver: (props, styles3) => styles3.backdrop
})({
  zIndex: -1
}), Modal = /* @__PURE__ */ React16.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose15(props, _excluded15), propsWithDefaults = _extends17({}, props, {
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
  } = useModal(_extends17({}, propsWithDefaults, {
    rootRef: ref
  })), ownerState = _extends17({}, propsWithDefaults, {
    exited
  }), classes = useUtilityClasses9(ownerState), childProps = {};
  if (children.props.tabIndex === void 0 && (childProps.tabIndex = "-1"), hasTransition) {
    let {
      onEnter,
      onExited
    } = getTransitionProps2();
    childProps.onEnter = onEnter, childProps.onExited = onExited;
  }
  let RootSlot = (_ref = (_slots$root = slots?.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot, BackdropSlot = (_ref2 = (_slots$backdrop = slots?.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent, rootSlotProps = (_slotProps$root = slotProps?.root) != null ? _slotProps$root : componentsProps.root, backdropSlotProps = (_slotProps$backdrop = slotProps?.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop, rootProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    additionalProps: {
      ref,
      as: component
    },
    ownerState,
    className: clsx11(className, rootSlotProps?.className, classes?.root, !ownerState.open && ownerState.exited && classes?.hidden)
  }), backdropProps = useSlotProps({
    elementType: BackdropSlot,
    externalSlotProps: backdropSlotProps,
    additionalProps: BackdropProps,
    getSlotProps: (otherHandlers) => getBackdropProps(_extends17({}, otherHandlers, {
      onClick: (e) => {
        onBackdropClick && onBackdropClick(e), otherHandlers != null && otherHandlers.onClick && otherHandlers.onClick(e);
      }
    })),
    className: clsx11(backdropSlotProps?.className, BackdropProps?.className, classes?.backdrop),
    ownerState
  });
  return !keepMounted && !open && (!hasTransition || exited) ? null : /* @__PURE__ */ _jsx14(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: /* @__PURE__ */ _jsxs3(RootSlot, _extends17({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /* @__PURE__ */ _jsx14(BackdropSlot, _extends17({}, backdropProps)) : null, /* @__PURE__ */ _jsx14(FocusTrap, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: /* @__PURE__ */ React16.cloneElement(children, childProps)
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
import _extends18 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose16 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React17 from "react";
import PropTypes16 from "prop-types";
import { Transition as Transition2 } from "react-transition-group";
import { elementAcceptingRef as elementAcceptingRef4, HTMLElementType as HTMLElementType3, chainPropTypes as chainPropTypes3 } from "@mui/utils";

// node_modules/@mui/material/utils/debounce.js
import { unstable_debounce as debounce } from "@mui/utils";
var debounce_default = debounce;

// node_modules/@mui/material/utils/isMuiElement.js
import { unstable_isMuiElement as isMuiElement } from "@mui/utils";
var isMuiElement_default = isMuiElement;

// node_modules/@mui/material/utils/ownerWindow.js
import { unstable_ownerWindow as ownerWindow2 } from "@mui/utils";
var ownerWindow_default = ownerWindow2;

// node_modules/@mui/material/utils/useEnhancedEffect.js
import { unstable_useEnhancedEffect as useEnhancedEffect2 } from "@mui/utils";
var useEnhancedEffect_default = useEnhancedEffect2;

// node_modules/@mui/material/Slide/Slide.js
import { jsx as _jsx15 } from "react/jsx-runtime";
var _excluded16 = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
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
var Slide = /* @__PURE__ */ React17.forwardRef(function(props, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose16(props, _excluded16), childrenRef = React17.useRef(null), handleRef = useForkRef_default(children.ref, childrenRef, ref), normalizedTransitionCallback = (callback) => (isAppearing) => {
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
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", _extends18({}, transitionProps)), node.style.transition = theme.transitions.create("transform", _extends18({}, transitionProps)), node.style.webkitTransform = "none", node.style.transform = "none", onEntering && onEntering(node, isAppearing);
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
  }, updatePosition = React17.useCallback(() => {
    childrenRef.current && setTranslateValue(direction, childrenRef.current, containerProp);
  }, [direction, containerProp]);
  return React17.useEffect(() => {
    if (inProp || direction === "down" || direction === "right")
      return;
    let handleResize = debounce_default(() => {
      childrenRef.current && setTranslateValue(direction, childrenRef.current, containerProp);
    }), containerWindow = ownerWindow_default(childrenRef.current);
    return containerWindow.addEventListener("resize", handleResize), () => {
      handleResize.clear(), containerWindow.removeEventListener("resize", handleResize);
    };
  }, [direction, inProp, containerProp]), React17.useEffect(() => {
    inProp || updatePosition();
  }, [inProp, updatePosition]), /* @__PURE__ */ _jsx15(TransitionComponent, _extends18({
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
    children: (state, childProps) => /* @__PURE__ */ React17.cloneElement(children, _extends18({
      ref: handleRef,
      style: _extends18({
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
  addEndListener: PropTypes16.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes16.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef4.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: chainPropTypes3(PropTypes16.oneOfType([HTMLElementType3, PropTypes16.func]), (props) => {
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
  direction: PropTypes16.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: PropTypes16.oneOfType([PropTypes16.shape({
    enter: PropTypes16.string,
    exit: PropTypes16.string
  }), PropTypes16.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes16.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes16.func,
  /**
   * @ignore
   */
  onEntered: PropTypes16.func,
  /**
   * @ignore
   */
  onEntering: PropTypes16.func,
  /**
   * @ignore
   */
  onExit: PropTypes16.func,
  /**
   * @ignore
   */
  onExited: PropTypes16.func,
  /**
   * @ignore
   */
  onExiting: PropTypes16.func,
  /**
   * @ignore
   */
  style: PropTypes16.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: PropTypes16.oneOfType([PropTypes16.number, PropTypes16.shape({
    appear: PropTypes16.number,
    enter: PropTypes16.number,
    exit: PropTypes16.number
  })])
};
var Slide_default = Slide;

// node_modules/@mui/material/Drawer/drawerClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses12 } from "@mui/utils";
function getDrawerUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiDrawer", slot);
}
var drawerClasses = generateUtilityClasses12("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);

// node_modules/@mui/material/Drawer/Drawer.js
import { jsx as _jsx16 } from "react/jsx-runtime";
var _excluded17 = ["BackdropProps"], _excluded22 = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], overridesResolver = (props, styles3) => {
  let {
    ownerState
  } = props;
  return [styles3.root, (ownerState.variant === "permanent" || ownerState.variant === "persistent") && styles3.docked, styles3.modal];
}, useUtilityClasses10 = (ownerState) => {
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.paper, styles3[`paperAnchor${capitalize_default(ownerState.anchor)}`], ownerState.variant !== "temporary" && styles3[`paperAnchorDocked${capitalize_default(ownerState.anchor)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends19({
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
var Drawer = /* @__PURE__ */ React18.forwardRef(function(inProps, ref) {
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
  } = props, ModalProps = _objectWithoutPropertiesLoose17(props.ModalProps, _excluded17), other = _objectWithoutPropertiesLoose17(props, _excluded22), mounted = React18.useRef(!1);
  React18.useEffect(() => {
    mounted.current = !0;
  }, []);
  let anchorInvariant = getAnchor(theme, anchorProp), ownerState = _extends19({}, props, {
    anchor: anchorProp,
    elevation,
    open,
    variant
  }, other), classes = useUtilityClasses10(ownerState), drawer = /* @__PURE__ */ _jsx16(DrawerPaper, _extends19({
    elevation: variant === "temporary" ? elevation : 0,
    square: !0
  }, PaperProps, {
    className: clsx12(classes.paper, PaperProps.className),
    ownerState,
    children
  }));
  if (variant === "permanent")
    return /* @__PURE__ */ _jsx16(DrawerDockedRoot, _extends19({
      className: clsx12(classes.root, classes.docked, className),
      ownerState,
      ref
    }, other, {
      children: drawer
    }));
  let slidingDrawer = /* @__PURE__ */ _jsx16(TransitionComponent, _extends19({
    in: open,
    direction: oppositeDirection[anchorInvariant],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps, {
    children: drawer
  }));
  return variant === "persistent" ? /* @__PURE__ */ _jsx16(DrawerDockedRoot, _extends19({
    className: clsx12(classes.root, classes.docked, className),
    ownerState,
    ref
  }, other, {
    children: slidingDrawer
  })) : /* @__PURE__ */ _jsx16(DrawerRoot, _extends19({
    BackdropProps: _extends19({}, BackdropProps, BackdropPropsProp, {
      transitionDuration
    }),
    className: clsx12(classes.root, classes.modal, className),
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
  anchor: PropTypes17.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: PropTypes17.object,
  /**
   * The content of the component.
   */
  children: PropTypes17.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes17.object,
  /**
   * @ignore
   */
  className: PropTypes17.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: integerPropType2,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: PropTypes17.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: PropTypes17.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes17.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: PropTypes17.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: PropTypes17.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: PropTypes17.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes17.oneOfType([PropTypes17.arrayOf(PropTypes17.oneOfType([PropTypes17.func, PropTypes17.object, PropTypes17.bool])), PropTypes17.func, PropTypes17.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: PropTypes17.oneOfType([PropTypes17.number, PropTypes17.shape({
    appear: PropTypes17.number,
    enter: PropTypes17.number,
    exit: PropTypes17.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: PropTypes17.oneOf(["permanent", "persistent", "temporary"])
};
var Drawer_default = Drawer;

// node_modules/@mui/material/List/List.js
import _objectWithoutPropertiesLoose18 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends20 from "@babel/runtime/helpers/esm/extends";
import * as React20 from "react";
import PropTypes18 from "prop-types";
import clsx13 from "clsx";

// node_modules/@mui/material/List/ListContext.js
import * as React19 from "react";
var ListContext = /* @__PURE__ */ React19.createContext({});
ListContext.displayName = "ListContext";
var ListContext_default = ListContext;

// node_modules/@mui/material/List/listClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses13 } from "@mui/utils";
function getListUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiList", slot);
}
var listClasses = generateUtilityClasses13("MuiList", ["root", "padding", "dense", "subheader"]);

// node_modules/@mui/material/List/List.js
import { jsxs as _jsxs4 } from "react/jsx-runtime";
import { jsx as _jsx17 } from "react/jsx-runtime";
var _excluded18 = ["children", "className", "component", "dense", "disablePadding", "subheader"], useUtilityClasses11 = (ownerState) => {
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, !ownerState.disablePadding && styles3.padding, ownerState.dense && styles3.dense, ownerState.subheader && styles3.subheader];
  }
})(({
  ownerState
}) => _extends20({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
})), List = /* @__PURE__ */ React20.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose18(props, _excluded18), context = React20.useMemo(() => ({
    dense
  }), [dense]), ownerState = _extends20({}, props, {
    component,
    dense,
    disablePadding
  }), classes = useUtilityClasses11(ownerState);
  return /* @__PURE__ */ _jsx17(ListContext_default.Provider, {
    value: context,
    children: /* @__PURE__ */ _jsxs4(ListRoot, _extends20({
      as: component,
      className: clsx13(classes.root, className),
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes18.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: PropTypes18.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: PropTypes18.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: PropTypes18.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes18.oneOfType([PropTypes18.arrayOf(PropTypes18.oneOfType([PropTypes18.func, PropTypes18.object, PropTypes18.bool])), PropTypes18.func, PropTypes18.object])
};
var List_default = List;

// node_modules/@mui/material/ListItem/ListItem.js
import _objectWithoutPropertiesLoose21 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends23 from "@babel/runtime/helpers/esm/extends";
import * as React23 from "react";
import PropTypes21 from "prop-types";
import clsx16 from "clsx";
import { unstable_composeClasses as composeClasses, isHostComponent } from "@mui/base";
import { chainPropTypes as chainPropTypes4, elementTypeAcceptingRef as elementTypeAcceptingRef2 } from "@mui/utils";
import { alpha as alpha5 } from "@mui/system";

// node_modules/@mui/material/ListItem/listItemClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses14 } from "@mui/utils";
function getListItemUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItem", slot);
}
var listItemClasses = generateUtilityClasses14("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), listItemClasses_default = listItemClasses;

// node_modules/@mui/material/ListItemButton/ListItemButton.js
import _objectWithoutPropertiesLoose19 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends21 from "@babel/runtime/helpers/esm/extends";
import * as React21 from "react";
import PropTypes19 from "prop-types";
import clsx14 from "clsx";
import { alpha as alpha4 } from "@mui/system";

// node_modules/@mui/material/ListItemButton/listItemButtonClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses15 } from "@mui/utils";
function getListItemButtonUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItemButton", slot);
}
var listItemButtonClasses = generateUtilityClasses15("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), listItemButtonClasses_default = listItemButtonClasses;

// node_modules/@mui/material/ListItemButton/ListItemButton.js
import { jsx as _jsx18 } from "react/jsx-runtime";
var _excluded19 = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], overridesResolver2 = (props, styles3) => {
  let {
    ownerState
  } = props;
  return [styles3.root, ownerState.dense && styles3.dense, ownerState.alignItems === "flex-start" && styles3.alignItemsFlexStart, ownerState.divider && styles3.divider, !ownerState.disableGutters && styles3.gutters];
}, useUtilityClasses12 = (ownerState) => {
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
  return _extends21({}, classes, composedClasses);
}, ListItemButtonRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: overridesResolver2
})(({
  theme,
  ownerState
}) => _extends21({
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
})), ListItemButton = /* @__PURE__ */ React21.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose19(props, _excluded19), context = React21.useContext(ListContext_default), childContext = React21.useMemo(() => ({
    dense: dense || context.dense || !1,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]), listItemRef = React21.useRef(null);
  useEnhancedEffect_default(() => {
    autoFocus && (listItemRef.current ? listItemRef.current.focus() : console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [autoFocus]);
  let ownerState = _extends21({}, props, {
    alignItems,
    dense: childContext.dense,
    disableGutters,
    divider,
    selected
  }), classes = useUtilityClasses12(ownerState), handleRef = useForkRef_default(listItemRef, ref);
  return /* @__PURE__ */ _jsx18(ListContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsx18(ListItemButtonRoot, _extends21({
      ref: handleRef,
      href: other.href || other.to,
      component: (other.href || other.to) && component === "div" ? "button" : component,
      focusVisibleClassName: clsx14(classes.focusVisible, focusVisibleClassName),
      ownerState,
      className: clsx14(classes.root, className)
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
  alignItems: PropTypes19.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: PropTypes19.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
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
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: PropTypes19.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes19.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes19.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: PropTypes19.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes19.string,
  /**
   * @ignore
   */
  href: PropTypes19.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: PropTypes19.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes19.oneOfType([PropTypes19.arrayOf(PropTypes19.oneOfType([PropTypes19.func, PropTypes19.object, PropTypes19.bool])), PropTypes19.func, PropTypes19.object])
};
var ListItemButton_default = ListItemButton;

// node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js
import _objectWithoutPropertiesLoose20 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends22 from "@babel/runtime/helpers/esm/extends";
import * as React22 from "react";
import PropTypes20 from "prop-types";
import clsx15 from "clsx";

// node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses16 } from "@mui/utils";
function getListItemSecondaryActionClassesUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItemSecondaryAction", slot);
}
var listItemSecondaryActionClasses = generateUtilityClasses16("MuiListItemSecondaryAction", ["root", "disableGutters"]);

// node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js
import { jsx as _jsx19 } from "react/jsx-runtime";
var _excluded20 = ["className"], useUtilityClasses13 = (ownerState) => {
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, ownerState.disableGutters && styles3.disableGutters];
  }
})(({
  ownerState
}) => _extends22({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, ownerState.disableGutters && {
  right: 0
})), ListItemSecondaryAction = /* @__PURE__ */ React22.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiListItemSecondaryAction"
  }), {
    className
  } = props, other = _objectWithoutPropertiesLoose20(props, _excluded20), context = React22.useContext(ListContext_default), ownerState = _extends22({}, props, {
    disableGutters: context.disableGutters
  }), classes = useUtilityClasses13(ownerState);
  return /* @__PURE__ */ _jsx19(ListItemSecondaryActionRoot, _extends22({
    className: clsx15(classes.root, className),
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes20.oneOfType([PropTypes20.arrayOf(PropTypes20.oneOfType([PropTypes20.func, PropTypes20.object, PropTypes20.bool])), PropTypes20.func, PropTypes20.object])
};
ListItemSecondaryAction.muiName = "ListItemSecondaryAction";
var ListItemSecondaryAction_default = ListItemSecondaryAction;

// node_modules/@mui/material/ListItem/ListItem.js
import { jsx as _jsx20 } from "react/jsx-runtime";
import { jsxs as _jsxs5 } from "react/jsx-runtime";
var _excluded21 = ["className"], _excluded23 = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], overridesResolver3 = (props, styles3) => {
  let {
    ownerState
  } = props;
  return [styles3.root, ownerState.dense && styles3.dense, ownerState.alignItems === "flex-start" && styles3.alignItemsFlexStart, ownerState.divider && styles3.divider, !ownerState.disableGutters && styles3.gutters, !ownerState.disablePadding && styles3.padding, ownerState.button && styles3.button, ownerState.hasSecondaryAction && styles3.secondaryAction];
}, useUtilityClasses14 = (ownerState) => {
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
}) => _extends23({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !ownerState.disablePadding && _extends23({
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
  overridesResolver: (props, styles3) => styles3.container
})({
  position: "relative"
}), ListItem = /* @__PURE__ */ React23.forwardRef(function(inProps, ref) {
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
  } = props, ContainerProps = _objectWithoutPropertiesLoose21(props.ContainerProps, _excluded21), other = _objectWithoutPropertiesLoose21(props, _excluded23), context = React23.useContext(ListContext_default), childContext = React23.useMemo(() => ({
    dense: dense || context.dense || !1,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]), listItemRef = React23.useRef(null);
  useEnhancedEffect_default(() => {
    autoFocus && (listItemRef.current ? listItemRef.current.focus() : console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [autoFocus]);
  let children = React23.Children.toArray(childrenProp), hasSecondaryAction = children.length && isMuiElement_default(children[children.length - 1], ["ListItemSecondaryAction"]), ownerState = _extends23({}, props, {
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
  }), classes = useUtilityClasses14(ownerState), handleRef = useForkRef_default(listItemRef, ref), Root = slots.root || components.Root || ListItemRoot, rootProps = slotProps.root || componentsProps.root || {}, componentProps = _extends23({
    className: clsx16(classes.root, rootProps.className, className),
    disabled
  }, other), Component = componentProp || "li";
  return button && (componentProps.component = componentProp || "div", componentProps.focusVisibleClassName = clsx16(listItemClasses_default.focusVisible, focusVisibleClassName), Component = ButtonBase_default), hasSecondaryAction ? (Component = !componentProps.component && !componentProp ? "div" : Component, ContainerComponent === "li" && (Component === "li" ? Component = "div" : componentProps.component === "li" && (componentProps.component = "div")), /* @__PURE__ */ _jsx20(ListContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsxs5(ListItemContainer, _extends23({
      as: ContainerComponent,
      className: clsx16(classes.container, ContainerClassName),
      ref: handleRef,
      ownerState
    }, ContainerProps, {
      children: [/* @__PURE__ */ _jsx20(Root, _extends23({}, rootProps, !isHostComponent(Root) && {
        as: Component,
        ownerState: _extends23({}, ownerState, rootProps.ownerState)
      }, componentProps, {
        children
      })), children.pop()]
    }))
  })) : /* @__PURE__ */ _jsx20(ListContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsxs5(Root, _extends23({}, rootProps, {
      as: Component,
      ref: handleRef
    }, !isHostComponent(Root) && {
      ownerState: _extends23({}, ownerState, rootProps.ownerState)
    }, componentProps, {
      children: [children, secondaryAction && /* @__PURE__ */ _jsx20(ListItemSecondaryAction_default, {
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
  alignItems: PropTypes21.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: PropTypes21.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: PropTypes21.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: chainPropTypes4(PropTypes21.node, (props) => {
    let children = React23.Children.toArray(props.children), secondaryActionIndex = -1;
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
  classes: PropTypes21.object,
  /**
   * @ignore
   */
  className: PropTypes21.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes21.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes21.shape({
    Root: PropTypes21.elementType
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
  componentsProps: PropTypes21.shape({
    root: PropTypes21.object
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
  ContainerProps: PropTypes21.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: PropTypes21.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: PropTypes21.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes21.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: PropTypes21.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: PropTypes21.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes21.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: PropTypes21.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: PropTypes21.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes21.shape({
    root: PropTypes21.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes21.shape({
    root: PropTypes21.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes21.oneOfType([PropTypes21.arrayOf(PropTypes21.oneOfType([PropTypes21.func, PropTypes21.object, PropTypes21.bool])), PropTypes21.func, PropTypes21.object])
};
var ListItem_default = ListItem;

// node_modules/@mui/material/ListItemIcon/ListItemIcon.js
import _objectWithoutPropertiesLoose22 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends24 from "@babel/runtime/helpers/esm/extends";
import * as React24 from "react";
import PropTypes22 from "prop-types";
import clsx17 from "clsx";

// node_modules/@mui/material/ListItemIcon/listItemIconClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses17 } from "@mui/utils";
function getListItemIconUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItemIcon", slot);
}
var listItemIconClasses = generateUtilityClasses17("MuiListItemIcon", ["root", "alignItemsFlexStart"]);

// node_modules/@mui/material/ListItemIcon/ListItemIcon.js
import { jsx as _jsx21 } from "react/jsx-runtime";
var _excluded24 = ["className"], useUtilityClasses15 = (ownerState) => {
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, ownerState.alignItems === "flex-start" && styles3.alignItemsFlexStart];
  }
})(({
  theme,
  ownerState
}) => _extends24({
  minWidth: 56,
  color: (theme.vars || theme).palette.action.active,
  flexShrink: 0,
  display: "inline-flex"
}, ownerState.alignItems === "flex-start" && {
  marginTop: 8
})), ListItemIcon = /* @__PURE__ */ React24.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiListItemIcon"
  }), {
    className
  } = props, other = _objectWithoutPropertiesLoose22(props, _excluded24), context = React24.useContext(ListContext_default), ownerState = _extends24({}, props, {
    alignItems: context.alignItems
  }), classes = useUtilityClasses15(ownerState);
  return /* @__PURE__ */ _jsx21(ListItemIconRoot, _extends24({
    className: clsx17(classes.root, className),
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
  children: PropTypes22.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes22.object,
  /**
   * @ignore
   */
  className: PropTypes22.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes22.oneOfType([PropTypes22.arrayOf(PropTypes22.oneOfType([PropTypes22.func, PropTypes22.object, PropTypes22.bool])), PropTypes22.func, PropTypes22.object])
};
var ListItemIcon_default = ListItemIcon;

// node_modules/@mui/material/ListItemText/ListItemText.js
import _objectWithoutPropertiesLoose23 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends25 from "@babel/runtime/helpers/esm/extends";
import * as React25 from "react";
import PropTypes23 from "prop-types";
import clsx18 from "clsx";

// node_modules/@mui/material/ListItemText/listItemTextClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses18 } from "@mui/utils";
function getListItemTextUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItemText", slot);
}
var listItemTextClasses = generateUtilityClasses18("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), listItemTextClasses_default = listItemTextClasses;

// node_modules/@mui/material/ListItemText/ListItemText.js
import { jsx as _jsx22 } from "react/jsx-runtime";
import { jsxs as _jsxs6 } from "react/jsx-runtime";
var _excluded25 = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], useUtilityClasses16 = (ownerState) => {
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
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [{
      [`& .${listItemTextClasses_default.primary}`]: styles3.primary
    }, {
      [`& .${listItemTextClasses_default.secondary}`]: styles3.secondary
    }, styles3.root, ownerState.inset && styles3.inset, ownerState.primary && ownerState.secondary && styles3.multiline, ownerState.dense && styles3.dense];
  }
})(({
  ownerState
}) => _extends25({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, ownerState.primary && ownerState.secondary && {
  marginTop: 6,
  marginBottom: 6
}, ownerState.inset && {
  paddingLeft: 56
})), ListItemText = /* @__PURE__ */ React25.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose23(props, _excluded25), {
    dense
  } = React25.useContext(ListContext_default), primary = primaryProp ?? children, secondary = secondaryProp, ownerState = _extends25({}, props, {
    disableTypography,
    inset,
    primary: !!primary,
    secondary: !!secondary,
    dense
  }), classes = useUtilityClasses16(ownerState);
  return primary != null && primary.type !== Typography_default && !disableTypography && (primary = /* @__PURE__ */ _jsx22(Typography_default, _extends25({
    variant: dense ? "body2" : "body1",
    className: classes.primary,
    component: primaryTypographyProps != null && primaryTypographyProps.variant ? void 0 : "span",
    display: "block"
  }, primaryTypographyProps, {
    children: primary
  }))), secondary != null && secondary.type !== Typography_default && !disableTypography && (secondary = /* @__PURE__ */ _jsx22(Typography_default, _extends25({
    variant: "body2",
    className: classes.secondary,
    color: "text.secondary",
    display: "block"
  }, secondaryTypographyProps, {
    children: secondary
  }))), /* @__PURE__ */ _jsxs6(ListItemTextRoot, _extends25({
    className: clsx18(classes.root, className),
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
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: PropTypes23.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: PropTypes23.bool,
  /**
   * The main content element.
   */
  primary: PropTypes23.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: PropTypes23.object,
  /**
   * The secondary content element.
   */
  secondary: PropTypes23.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: PropTypes23.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes23.oneOfType([PropTypes23.arrayOf(PropTypes23.oneOfType([PropTypes23.func, PropTypes23.object, PropTypes23.bool])), PropTypes23.func, PropTypes23.object])
};
var ListItemText_default = ListItemText;

// app/layout/Appbar.tsx
import { NavLink } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Appbar() {
  let [state, setState] = React26.useState({
    top: !1,
    left: !1,
    bottom: !1,
    right: !1
  }), urls = {
    menu1: {
      title: "Dashboard",
      route: "/"
    },
    menu2: {
      title: "Sales",
      route: "sales"
    },
    menu3: {
      title: "Product",
      route: "product"
    },
    menu4: {
      title: "Report",
      route: "report"
    }
  }, toggleDrawer = (anchor, open) => (event) => {
    event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") || setState({ ...state, [anchor]: open });
  }, list = (anchor) => /* @__PURE__ */ jsxDEV2(
    Box_default,
    {
      sx: { width: anchor === "top" || anchor === "bottom" ? "auto" : 250 },
      role: "presentation",
      onClick: toggleDrawer(anchor, !1),
      onKeyDown: toggleDrawer(anchor, !1),
      children: /* @__PURE__ */ jsxDEV2(List_default, { children: ["Dashboard", "Sales", "Products", "Report"].map((text, index) => /* @__PURE__ */ jsxDEV2(ListItem_default, { disablePadding: !0, children: /* @__PURE__ */ jsxDEV2(ListItemButton_default, { children: [
        /* @__PURE__ */ jsxDEV2(ListItemIcon_default, { children: [
          /* @__PURE__ */ jsxDEV2(NavLink, {}, void 0, !1, {
            fileName: "app/layout/Appbar.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          index % 2 === 0 ? /* @__PURE__ */ jsxDEV2(Icon_default, { children: "dashboard" }, void 0, !1, {
            fileName: "app/layout/Appbar.tsx",
            lineNumber: 82,
            columnNumber: 36
          }, this) : /* @__PURE__ */ jsxDEV2(Icon_default, { children: "star" }, void 0, !1, {
            fileName: "app/layout/Appbar.tsx",
            lineNumber: 82,
            columnNumber: 61
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV2(ListItemText_default, { primary: text }, void 0, !1, {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/Appbar.tsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, text, !1, {
        fileName: "app/layout/Appbar.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)) }, void 0, !1, {
        fileName: "app/layout/Appbar.tsx",
        lineNumber: 74,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/layout/Appbar.tsx",
      lineNumber: 68,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ jsxDEV2(Box_default, { sx: { flexGrow: 1 }, children: [
    /* @__PURE__ */ jsxDEV2(AppBar_default, { position: "static", children: /* @__PURE__ */ jsxDEV2(Toolbar_default, { variant: "dense", children: [
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
            lineNumber: 99,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 96,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(Typography_default, { variant: "h6", color: "inherit", component: "div", children: "ECCS-POS" }, void 0, !1, {
        fileName: "app/layout/Appbar.tsx",
        lineNumber: 101,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layout/Appbar.tsx",
      lineNumber: 95,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/layout/Appbar.tsx",
      lineNumber: 94,
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
        lineNumber: 107,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/layout/Appbar.tsx",
    lineNumber: 93,
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
  ScrollRestoration
} from "@remix-run/react";

// node_modules/@mui/material/CssBaseline/CssBaseline.js
import _extends27 from "@babel/runtime/helpers/esm/extends";
import * as React28 from "react";
import PropTypes25 from "prop-types";

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
import _extends26 from "@babel/runtime/helpers/esm/extends";
import "react";
import PropTypes24 from "prop-types";
import { GlobalStyles as SystemGlobalStyles } from "@mui/system";
import { jsx as _jsx23 } from "react/jsx-runtime";
function GlobalStyles(props) {
  return /* @__PURE__ */ _jsx23(SystemGlobalStyles, _extends26({}, props, {
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
  styles: PropTypes24.oneOfType([PropTypes24.array, PropTypes24.func, PropTypes24.number, PropTypes24.object, PropTypes24.string, PropTypes24.bool])
};
var GlobalStyles_default = GlobalStyles;

// node_modules/@mui/material/CssBaseline/CssBaseline.js
import { jsx as _jsx24 } from "react/jsx-runtime";
import { jsxs as _jsxs7 } from "react/jsx-runtime";
var html = (theme, enableColorScheme) => _extends27({
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
}), body = (theme) => _extends27({
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
  let defaultStyles = _extends27({
    html: html(theme, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme.typography.fontWeightBold
    },
    body: _extends27({
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
  return /* @__PURE__ */ _jsxs7(React28.Fragment, {
    children: [/* @__PURE__ */ _jsx24(GlobalStyles_default, {
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
  children: PropTypes25.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: PropTypes25.bool
};
var CssBaseline_default = CssBaseline;

// node_modules/@mui/material/Container/Container.js
import PropTypes26 from "prop-types";
import { createContainer } from "@mui/system";
var Container = createContainer({
  createStyledComponent: styled_default("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (props, styles3) => {
      let {
        ownerState
      } = props;
      return [styles3.root, styles3[`maxWidth${capitalize_default(String(ownerState.maxWidth))}`], ownerState.fixed && styles3.fixed, ownerState.disableGutters && styles3.disableGutters];
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
  children: PropTypes26.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes26.object,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes26.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes26.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: PropTypes26.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: PropTypes26.oneOfType([PropTypes26.oneOf(["xs", "sm", "md", "lg", "xl", !1]), PropTypes26.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes26.oneOfType([PropTypes26.arrayOf(PropTypes26.oneOfType([PropTypes26.func, PropTypes26.object, PropTypes26.bool])), PropTypes26.func, PropTypes26.object])
};
var Container_default = Container;

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
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
          lineNumber: 32,
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
          lineNumber: 36,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(Appbar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Container_default, { maxWidth: "xl", children: [
        /* @__PURE__ */ jsxDEV3(CssBaseline_default, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/products.tsx
var products_exports = {};
__export(products_exports, {
  default: () => Index,
  meta: () => meta
});
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "ECCS POS - Products" },
  { name: "description", content: "Welcome to eccs-pos!" }
];
function Index() {
  return /* @__PURE__ */ jsxDEV4("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ jsxDEV4("p", { children: "This is Products" }, void 0, !1, {
    fileName: "app/routes/products.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/products.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this);
}

// app/routes/report.tsx
var report_exports = {};
__export(report_exports, {
  default: () => Index2,
  meta: () => meta2
});
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta2 = () => [
  { title: "ECCS POS - Report" },
  { name: "description", content: "Welcome to eccs-pos!" }
];
function Index2() {
  return /* @__PURE__ */ jsxDEV5("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ jsxDEV5("p", { children: "This is Report" }, void 0, !1, {
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
  meta: () => meta3
});

// node_modules/@mui/material/Skeleton/Skeleton.js
import _objectWithoutPropertiesLoose24 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends28 from "@babel/runtime/helpers/esm/extends";
import * as React29 from "react";
import clsx19 from "clsx";
import PropTypes27 from "prop-types";
import { keyframes as keyframes3, css as css2 } from "@mui/system";

// node_modules/@mui/material/Skeleton/skeletonClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses19 } from "@mui/utils";
function getSkeletonUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiSkeleton", slot);
}
var skeletonClasses = generateUtilityClasses19("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);

// node_modules/@mui/material/Skeleton/Skeleton.js
import { jsx as _jsx25 } from "react/jsx-runtime";
var _excluded26 = ["animation", "className", "component", "height", "style", "variant", "width"], _2 = (t) => t, _t5, _t22, _t32, _t42, useUtilityClasses17 = (ownerState) => {
  let {
    classes,
    variant,
    animation,
    hasChildren,
    width,
    height
  } = ownerState;
  return unstable_composeClasses({
    root: ["root", variant, animation, hasChildren && "withChildren", hasChildren && !width && "fitContent", hasChildren && !height && "heightAuto"]
  }, getSkeletonUtilityClass, classes);
}, pulseKeyframe = keyframes3(_t5 || (_t5 = _2`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)), waveKeyframe = keyframes3(_t22 || (_t22 = _2`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)), SkeletonRoot = styled_default("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (props, styles3) => {
    let {
      ownerState
    } = props;
    return [styles3.root, styles3[ownerState.variant], ownerState.animation !== !1 && styles3[ownerState.animation], ownerState.hasChildren && styles3.withChildren, ownerState.hasChildren && !ownerState.width && styles3.fitContent, ownerState.hasChildren && !ownerState.height && styles3.heightAuto];
  }
})(({
  theme,
  ownerState
}) => {
  let radiusUnit = getUnit(theme.shape.borderRadius) || "px", radiusValue = toUnitless(theme.shape.borderRadius);
  return _extends28({
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: theme.vars ? theme.vars.palette.Skeleton.bg : alpha2(theme.palette.text.primary, theme.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em"
  }, ownerState.variant === "text" && {
    marginTop: 0,
    marginBottom: 0,
    height: "auto",
    transformOrigin: "0 55%",
    transform: "scale(1, 0.60)",
    borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
    "&:empty:before": {
      content: '"\\00a0"'
    }
  }, ownerState.variant === "circular" && {
    borderRadius: "50%"
  }, ownerState.variant === "rounded" && {
    borderRadius: (theme.vars || theme).shape.borderRadius
  }, ownerState.hasChildren && {
    "& > *": {
      visibility: "hidden"
    }
  }, ownerState.hasChildren && !ownerState.width && {
    maxWidth: "fit-content"
  }, ownerState.hasChildren && !ownerState.height && {
    height: "auto"
  });
}, ({
  ownerState
}) => ownerState.animation === "pulse" && css2(_t32 || (_t32 = _2`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `), pulseKeyframe), ({
  ownerState,
  theme
}) => ownerState.animation === "wave" && css2(_t42 || (_t42 = _2`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), waveKeyframe, (theme.vars || theme).palette.action.hover)), Skeleton = /* @__PURE__ */ React29.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiSkeleton"
  }), {
    animation = "pulse",
    className,
    component = "span",
    height,
    style,
    variant = "text",
    width
  } = props, other = _objectWithoutPropertiesLoose24(props, _excluded26), ownerState = _extends28({}, props, {
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  }), classes = useUtilityClasses17(ownerState);
  return /* @__PURE__ */ _jsx25(SkeletonRoot, _extends28({
    as: component,
    ref,
    className: clsx19(classes.root, className),
    ownerState
  }, other, {
    style: _extends28({
      width,
      height
    }, style)
  }));
});
Skeleton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation: PropTypes27.oneOf(["pulse", "wave", !1]),
  /**
   * Optional children to infer width and height from.
   */
  children: PropTypes27.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes27.object,
  /**
   * @ignore
   */
  className: PropTypes27.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes27.elementType,
  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: PropTypes27.oneOfType([PropTypes27.number, PropTypes27.string]),
  /**
   * @ignore
   */
  style: PropTypes27.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes27.oneOfType([PropTypes27.arrayOf(PropTypes27.oneOfType([PropTypes27.func, PropTypes27.object, PropTypes27.bool])), PropTypes27.func, PropTypes27.object]),
  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant: PropTypes27.oneOfType([PropTypes27.oneOf(["circular", "rectangular", "rounded", "text"]), PropTypes27.string]),
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: PropTypes27.oneOfType([PropTypes27.number, PropTypes27.string])
};
var Skeleton_default = Skeleton;

// node_modules/@mui/material/Stack/Stack.js
import PropTypes28 from "prop-types";
import { createStack } from "@mui/system";
var Stack = createStack({
  createStyledComponent: styled_default("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (props, styles3) => styles3.root
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

// app/routes/_index.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "ECCS POS - Dashboard" },
  { name: "description", content: "Welcome to eccs-pos!" }
];
function Index3() {
  return /* @__PURE__ */ jsxDEV6("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsxDEV6("p", { children: "This is dashboard" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV6(Stack_default, { spacing: 1, children: [
      /* @__PURE__ */ jsxDEV6(Skeleton_default, { variant: "text", sx: { fontSize: "1rem" } }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6(Skeleton_default, { variant: "circular", width: 40, height: 40 }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6(Skeleton_default, { variant: "rectangular", width: 210, height: 60 }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6(Skeleton_default, { variant: "rounded", width: 210, height: 60 }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this);
}

// app/routes/sales.tsx
var sales_exports = {};
__export(sales_exports, {
  default: () => Index4,
  meta: () => meta4
});
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta4 = () => [
  { title: "ECCS POS - Sales" },
  { name: "description", content: "Welcome to eccs-pos!" }
];
function Index4() {
  return /* @__PURE__ */ jsxDEV7("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ jsxDEV7("p", { children: "This is Sales" }, void 0, !1, {
    fileName: "app/routes/sales.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/sales.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZWMP2WVX.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-FDLQP7LX.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-VEKSHEMC.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HLH3FUQM.js", imports: ["/build/_shared/chunk-IRNCX6L2.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-HKAZETI4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/products": { id: "routes/products", parentId: "root", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/products-5ME6AAWP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/report": { id: "routes/report", parentId: "root", path: "report", index: void 0, caseSensitive: void 0, module: "/build/routes/report-65RUPGNC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/sales": { id: "routes/sales", parentId: "root", path: "sales", index: void 0, caseSensitive: void 0, module: "/build/routes/sales-DUKG5IWP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "2b2644cc", hmr: { runtime: "/build/_shared\\chunk-VEKSHEMC.js", timestamp: 1702026284676 }, url: "/build/manifest-2B2644CC.js" };

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
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
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
  "routes/sales": {
    id: "routes/sales",
    parentId: "root",
    path: "sales",
    index: void 0,
    caseSensitive: void 0,
    module: sales_exports
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
