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
import * as React28 from "react";

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
      let key2;
      for (key2 in node) {
        let child = node[key2];
        if (stateClasses.indexOf(key2) !== -1 && Object.keys(child).length > 0) {
          {
            let stateClass = unstable_generateUtilityClass("", key2);
            console.error([`MUI: The \`${component}\` component increases the CSS specificity of the \`${key2}\` internal state.`, "You can not override it like this: ", JSON.stringify(node, null, 2), "", `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          node[key2] = {};
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
import * as React20 from "react";
import PropTypes18 from "prop-types";
import clsx14 from "clsx";
import { integerPropType as integerPropType2 } from "@mui/utils";

// node_modules/@mui/base/unstable_useModal/useModal.js
import _extends17 from "@babel/runtime/helpers/esm/extends";
import * as React11 from "react";
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
  } = parameters, modal = React11.useRef({}), mountNodeRef = React11.useRef(null), modalRef = React11.useRef(null), handleRef = useForkRef3(modalRef, rootRef), [exited, setExited] = React11.useState(!open), hasTransition = getHasTransition(children), ariaHiddenProp = !0;
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
import * as React16 from "react";
import PropTypes15 from "prop-types";
import clsx12 from "clsx";
import { elementAcceptingRef as elementAcceptingRef3, HTMLElementType as HTMLElementType2 } from "@mui/utils";
import { useSlotProps as useSlotProps2 } from "@mui/base";

// node_modules/@mui/base/FocusTrap/FocusTrap.js
import * as React12 from "react";
import PropTypes11 from "prop-types";
import { exactProp, elementAcceptingRef, unstable_useForkRef as useForkRef4, unstable_ownerDocument as ownerDocument3 } from "@mui/utils";
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
  } = props, ignoreNextEnforceFocus = React12.useRef(!1), sentinelStart = React12.useRef(null), sentinelEnd = React12.useRef(null), nodeToRestore = React12.useRef(null), reactFocusEventTarget = React12.useRef(null), activated = React12.useRef(!1), rootRef = React12.useRef(null), handleRef = useForkRef4(children.ref, rootRef), lastKeydown = React12.useRef(null);
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
import { exactProp as exactProp2, HTMLElementType, unstable_useEnhancedEffect as useEnhancedEffect, unstable_useForkRef as useForkRef5, unstable_setRef as setRef } from "@mui/utils";
import { jsx as _jsx11 } from "react/jsx-runtime";
function getContainer2(container) {
  return typeof container == "function" ? container() : container;
}
var Portal = /* @__PURE__ */ React13.forwardRef(function(props, forwardedRef) {
  let {
    children,
    container,
    disablePortal = !1
  } = props, [mountNode, setMountNode] = React13.useState(null), handleRef = useForkRef5(/* @__PURE__ */ React13.isValidElement(children) ? children.ref : null, forwardedRef);
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
import _objectWithoutPropertiesLoose15 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends19 from "@babel/runtime/helpers/esm/extends";
import * as React15 from "react";
import PropTypes14 from "prop-types";
import clsx11 from "clsx";

// node_modules/@mui/material/Fade/Fade.js
import _extends18 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose14 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
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
var _excluded14 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], styles = {
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
  } = props, other = _objectWithoutPropertiesLoose14(props, _excluded14), enableStrictModeCompat = !0, nodeRef = React14.useRef(null), handleRef = useForkRef_default(nodeRef, children.ref, ref), normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
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
  return /* @__PURE__ */ _jsx12(TransitionComponent, _extends18({
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
    children: (state, childProps) => /* @__PURE__ */ React14.cloneElement(children, _extends18({
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
import { jsx as _jsx13 } from "react/jsx-runtime";
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
  } = props, other = _objectWithoutPropertiesLoose15(props, _excluded15), ownerState = _extends19({}, props, {
    component,
    invisible
  }), classes = useUtilityClasses8(ownerState), rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return /* @__PURE__ */ _jsx13(TransitionComponent, _extends19({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /* @__PURE__ */ _jsx13(BackdropRoot, _extends19({
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
import { jsx as _jsx14 } from "react/jsx-runtime";
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
  return !keepMounted && !open && (!hasTransition || exited) ? null : /* @__PURE__ */ _jsx14(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: /* @__PURE__ */ _jsxs3(RootSlot, _extends20({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /* @__PURE__ */ _jsx14(BackdropSlot, _extends20({}, backdropProps)) : null, /* @__PURE__ */ _jsx14(FocusTrap, {
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
import _extends23 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose18 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React19 from "react";
import PropTypes17 from "prop-types";
import { Transition as Transition2 } from "react-transition-group";
import { elementAcceptingRef as elementAcceptingRef4, HTMLElementType as HTMLElementType3, chainPropTypes as chainPropTypes3 } from "@mui/utils";

// node_modules/@mui/material/utils/debounce.js
import { unstable_debounce as debounce } from "@mui/utils";
var debounce_default = debounce;

// node_modules/@mui/material/utils/createSvgIcon.js
import _extends22 from "@babel/runtime/helpers/esm/extends";
import * as React18 from "react";

// node_modules/@mui/material/SvgIcon/SvgIcon.js
import _extends21 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose17 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React17 from "react";
import PropTypes16 from "prop-types";
import clsx13 from "clsx";

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses12 } from "@mui/utils";
function getSvgIconUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses12("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/SvgIcon/SvgIcon.js
import { jsx as _jsx15 } from "react/jsx-runtime";
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
}), SvgIcon = /* @__PURE__ */ React17.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose17(props, _excluded17), hasSvgAsChild = /* @__PURE__ */ React17.isValidElement(children) && children.type === "svg", ownerState = _extends21({}, props, {
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
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ _jsx15("title", {
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
import { jsx as _jsx16 } from "react/jsx-runtime";
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /* @__PURE__ */ _jsx16(SvgIcon_default, _extends22({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  return Component.displayName = `${displayName}Icon`, Component.muiName = SvgIcon_default.muiName, /* @__PURE__ */ React18.memo(/* @__PURE__ */ React18.forwardRef(Component));
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

// node_modules/@mui/material/utils/useControlled.js
import { unstable_useControlled as useControlled } from "@mui/utils";
var useControlled_default = useControlled;

// node_modules/@mui/material/Slide/Slide.js
import { jsx as _jsx17 } from "react/jsx-runtime";
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
var Slide = /* @__PURE__ */ React19.forwardRef(function(props, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose18(props, _excluded18), childrenRef = React19.useRef(null), handleRef = useForkRef_default(children.ref, childrenRef, ref), normalizedTransitionCallback = (callback) => (isAppearing) => {
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
  }, updatePosition = React19.useCallback(() => {
    childrenRef.current && setTranslateValue(direction, childrenRef.current, containerProp);
  }, [direction, containerProp]);
  return React19.useEffect(() => {
    if (inProp || direction === "down" || direction === "right")
      return;
    let handleResize = debounce_default(() => {
      childrenRef.current && setTranslateValue(direction, childrenRef.current, containerProp);
    }), containerWindow = ownerWindow_default(childrenRef.current);
    return containerWindow.addEventListener("resize", handleResize), () => {
      handleResize.clear(), containerWindow.removeEventListener("resize", handleResize);
    };
  }, [direction, inProp, containerProp]), React19.useEffect(() => {
    inProp || updatePosition();
  }, [inProp, updatePosition]), /* @__PURE__ */ _jsx17(TransitionComponent, _extends23({
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
    children: (state, childProps) => /* @__PURE__ */ React19.cloneElement(children, _extends23({
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
import { jsx as _jsx18 } from "react/jsx-runtime";
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
var Drawer = /* @__PURE__ */ React20.forwardRef(function(inProps, ref) {
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
  } = props, ModalProps = _objectWithoutPropertiesLoose19(props.ModalProps, _excluded19), other = _objectWithoutPropertiesLoose19(props, _excluded22), mounted = React20.useRef(!1);
  React20.useEffect(() => {
    mounted.current = !0;
  }, []);
  let anchorInvariant = getAnchor(theme, anchorProp), ownerState = _extends24({}, props, {
    anchor: anchorProp,
    elevation,
    open,
    variant
  }, other), classes = useUtilityClasses11(ownerState), drawer = /* @__PURE__ */ _jsx18(DrawerPaper, _extends24({
    elevation: variant === "temporary" ? elevation : 0,
    square: !0
  }, PaperProps, {
    className: clsx14(classes.paper, PaperProps.className),
    ownerState,
    children
  }));
  if (variant === "permanent")
    return /* @__PURE__ */ _jsx18(DrawerDockedRoot, _extends24({
      className: clsx14(classes.root, classes.docked, className),
      ownerState,
      ref
    }, other, {
      children: drawer
    }));
  let slidingDrawer = /* @__PURE__ */ _jsx18(TransitionComponent, _extends24({
    in: open,
    direction: oppositeDirection[anchorInvariant],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps, {
    children: drawer
  }));
  return variant === "persistent" ? /* @__PURE__ */ _jsx18(DrawerDockedRoot, _extends24({
    className: clsx14(classes.root, classes.docked, className),
    ownerState,
    ref
  }, other, {
    children: slidingDrawer
  })) : /* @__PURE__ */ _jsx18(DrawerRoot, _extends24({
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
import * as React22 from "react";
import PropTypes19 from "prop-types";
import clsx15 from "clsx";

// node_modules/@mui/material/List/ListContext.js
import * as React21 from "react";
var ListContext = /* @__PURE__ */ React21.createContext({});
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
import { jsx as _jsx19 } from "react/jsx-runtime";
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
})), List = /* @__PURE__ */ React22.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose20(props, _excluded20), context = React22.useMemo(() => ({
    dense
  }), [dense]), ownerState = _extends25({}, props, {
    component,
    dense,
    disablePadding
  }), classes = useUtilityClasses12(ownerState);
  return /* @__PURE__ */ _jsx19(ListContext_default.Provider, {
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
import * as React25 from "react";
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
import * as React23 from "react";
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
import { jsx as _jsx20 } from "react/jsx-runtime";
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
})), ListItemButton = /* @__PURE__ */ React23.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose21(props, _excluded21), context = React23.useContext(ListContext_default), childContext = React23.useMemo(() => ({
    dense: dense || context.dense || !1,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]), listItemRef = React23.useRef(null);
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
  return /* @__PURE__ */ _jsx20(ListContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsx20(ListItemButtonRoot, _extends26({
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
import * as React24 from "react";
import PropTypes21 from "prop-types";
import clsx17 from "clsx";

// node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses17 } from "@mui/utils";
function getListItemSecondaryActionClassesUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItemSecondaryAction", slot);
}
var listItemSecondaryActionClasses = generateUtilityClasses17("MuiListItemSecondaryAction", ["root", "disableGutters"]);

// node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js
import { jsx as _jsx21 } from "react/jsx-runtime";
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
})), ListItemSecondaryAction = /* @__PURE__ */ React24.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiListItemSecondaryAction"
  }), {
    className
  } = props, other = _objectWithoutPropertiesLoose22(props, _excluded23), context = React24.useContext(ListContext_default), ownerState = _extends27({}, props, {
    disableGutters: context.disableGutters
  }), classes = useUtilityClasses14(ownerState);
  return /* @__PURE__ */ _jsx21(ListItemSecondaryActionRoot, _extends27({
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
import { jsx as _jsx22 } from "react/jsx-runtime";
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
}), ListItem = /* @__PURE__ */ React25.forwardRef(function(inProps, ref) {
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
  } = props, ContainerProps = _objectWithoutPropertiesLoose23(props.ContainerProps, _excluded24), other = _objectWithoutPropertiesLoose23(props, _excluded25), context = React25.useContext(ListContext_default), childContext = React25.useMemo(() => ({
    dense: dense || context.dense || !1,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]), listItemRef = React25.useRef(null);
  useEnhancedEffect_default(() => {
    autoFocus && (listItemRef.current ? listItemRef.current.focus() : console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [autoFocus]);
  let children = React25.Children.toArray(childrenProp), hasSecondaryAction = children.length && isMuiElement_default(children[children.length - 1], ["ListItemSecondaryAction"]), ownerState = _extends28({}, props, {
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
  return button && (componentProps.component = componentProp || "div", componentProps.focusVisibleClassName = clsx18(listItemClasses_default.focusVisible, focusVisibleClassName), Component = ButtonBase_default), hasSecondaryAction ? (Component = !componentProps.component && !componentProp ? "div" : Component, ContainerComponent === "li" && (Component === "li" ? Component = "div" : componentProps.component === "li" && (componentProps.component = "div")), /* @__PURE__ */ _jsx22(ListContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsxs6(ListItemContainer, _extends28({
      as: ContainerComponent,
      className: clsx18(classes.container, ContainerClassName),
      ref: handleRef,
      ownerState
    }, ContainerProps, {
      children: [/* @__PURE__ */ _jsx22(Root, _extends28({}, rootProps, !isHostComponent2(Root) && {
        as: Component,
        ownerState: _extends28({}, ownerState, rootProps.ownerState)
      }, componentProps, {
        children
      })), children.pop()]
    }))
  })) : /* @__PURE__ */ _jsx22(ListContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsxs6(Root, _extends28({}, rootProps, {
      as: Component,
      ref: handleRef
    }, !isHostComponent2(Root) && {
      ownerState: _extends28({}, ownerState, rootProps.ownerState)
    }, componentProps, {
      children: [children, secondaryAction && /* @__PURE__ */ _jsx22(ListItemSecondaryAction_default, {
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
    let children = React25.Children.toArray(props.children), secondaryActionIndex = -1;
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
import * as React26 from "react";
import PropTypes23 from "prop-types";
import clsx19 from "clsx";

// node_modules/@mui/material/ListItemIcon/listItemIconClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses18 } from "@mui/utils";
function getListItemIconUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItemIcon", slot);
}
var listItemIconClasses = generateUtilityClasses18("MuiListItemIcon", ["root", "alignItemsFlexStart"]), listItemIconClasses_default = listItemIconClasses;

// node_modules/@mui/material/ListItemIcon/ListItemIcon.js
import { jsx as _jsx23 } from "react/jsx-runtime";
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
})), ListItemIcon = /* @__PURE__ */ React26.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiListItemIcon"
  }), {
    className
  } = props, other = _objectWithoutPropertiesLoose24(props, _excluded26), context = React26.useContext(ListContext_default), ownerState = _extends29({}, props, {
    alignItems: context.alignItems
  }), classes = useUtilityClasses16(ownerState);
  return /* @__PURE__ */ _jsx23(ListItemIconRoot, _extends29({
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
import * as React27 from "react";
import PropTypes24 from "prop-types";
import clsx20 from "clsx";

// node_modules/@mui/material/ListItemText/listItemTextClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses19 } from "@mui/utils";
function getListItemTextUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiListItemText", slot);
}
var listItemTextClasses = generateUtilityClasses19("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), listItemTextClasses_default = listItemTextClasses;

// node_modules/@mui/material/ListItemText/ListItemText.js
import { jsx as _jsx24 } from "react/jsx-runtime";
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
})), ListItemText = /* @__PURE__ */ React27.forwardRef(function(inProps, ref) {
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
  } = React27.useContext(ListContext_default), primary = primaryProp ?? children, secondary = secondaryProp, ownerState = _extends30({}, props, {
    disableTypography,
    inset,
    primary: !!primary,
    secondary: !!secondary,
    dense
  }), classes = useUtilityClasses17(ownerState);
  return primary != null && primary.type !== Typography_default && !disableTypography && (primary = /* @__PURE__ */ _jsx24(Typography_default, _extends30({
    variant: dense ? "body2" : "body1",
    className: classes.primary,
    component: primaryTypographyProps != null && primaryTypographyProps.variant ? void 0 : "span",
    display: "block"
  }, primaryTypographyProps, {
    children: primary
  }))), secondary != null && secondary.type !== Typography_default && !disableTypography && (secondary = /* @__PURE__ */ _jsx24(Typography_default, _extends30({
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
import { NavLink } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Appbar() {
  let [state, setState] = React28.useState({
    top: !1,
    left: !1,
    bottom: !1,
    right: !1
  }), urls = [
    "/",
    "sales",
    "products",
    "users",
    "report"
  ], toggleDrawer = (anchor, open) => (event) => {
    event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") || setState({ ...state, [anchor]: open });
  }, list = (anchor) => /* @__PURE__ */ jsxDEV2(
    Box_default,
    {
      sx: { width: anchor === "top" || anchor === "bottom" ? "auto" : 250 },
      role: "presentation",
      onClick: toggleDrawer(anchor, !1),
      onKeyDown: toggleDrawer(anchor, !1),
      children: /* @__PURE__ */ jsxDEV2(List_default, { children: ["Dashboard", "Sales", "Products", "Users", "Report"].map((text, index) => /* @__PURE__ */ jsxDEV2(NavLink, { to: urls[index], children: /* @__PURE__ */ jsxDEV2(ListItem_default, { disablePadding: !0, children: /* @__PURE__ */ jsxDEV2(ListItemButton_default, { children: [
        /* @__PURE__ */ jsxDEV2(ListItemIcon_default, { children: index % 2 === 0 ? /* @__PURE__ */ jsxDEV2(Icon_default, { children: "dashboard" }, void 0, !1, {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 68,
          columnNumber: 38
        }, this) : /* @__PURE__ */ jsxDEV2(Icon_default, { children: "star" }, void 0, !1, {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 68,
          columnNumber: 63
        }, this) }, void 0, !1, {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV2(ListItemText_default, { primary: text }, void 0, !1, {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layout/Appbar.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this) }, text, !1, {
        fileName: "app/layout/Appbar.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/layout/Appbar.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)) }, void 0, !1, {
        fileName: "app/layout/Appbar.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/layout/Appbar.tsx",
      lineNumber: 56,
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
            lineNumber: 86,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/layout/Appbar.tsx",
          lineNumber: 83,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(Typography_default, { variant: "h6", color: "inherit", component: "div", children: "ECCS-POS" }, void 0, !1, {
        fileName: "app/layout/Appbar.tsx",
        lineNumber: 88,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layout/Appbar.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/layout/Appbar.tsx",
      lineNumber: 81,
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
        lineNumber: 94,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/layout/Appbar.tsx",
    lineNumber: 80,
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
import _extends32 from "@babel/runtime/helpers/esm/extends";
import * as React30 from "react";
import PropTypes26 from "prop-types";

// node_modules/@mui/material/GlobalStyles/GlobalStyles.js
import _extends31 from "@babel/runtime/helpers/esm/extends";
import "react";
import PropTypes25 from "prop-types";
import { GlobalStyles as SystemGlobalStyles } from "@mui/system";
import { jsx as _jsx25 } from "react/jsx-runtime";
function GlobalStyles(props) {
  return /* @__PURE__ */ _jsx25(SystemGlobalStyles, _extends31({}, props, {
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
import { jsx as _jsx26 } from "react/jsx-runtime";
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
  enableColorScheme && theme.colorSchemes && Object.entries(theme.colorSchemes).forEach(([key2, scheme]) => {
    var _scheme$palette;
    colorSchemeStyles[theme.getColorSchemeSelector(key2).replace(/\s*&/, "")] = {
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
  return /* @__PURE__ */ _jsxs8(React30.Fragment, {
    children: [/* @__PURE__ */ _jsx26(GlobalStyles_default, {
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
      /* @__PURE__ */ jsxDEV3("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
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
  loader: () => loader,
  meta: () => meta
});
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  useLoaderData
} from "@remix-run/react";

// app/data/sourceData.tsx
import { json } from "@remix-run/node";
var apiUrl = "http://localhost:4001/api/", key = { "x-api-key": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hX2RlcGFuIjoiYm9yYWgiLCJuYW1hX2JlbGFrYW5nIjoiYW1kYW4iLCJlbWFpbCI6ImJvcmFoQGdtLmNvbSIsInBob25lIjoiNjI4NzcxMjM2MTIzIiwic3RhdHVzIjoxLCJyZWdfc291cmNlIjoiZWNjcy1pZCIsImlhdCI6MTcwMTA3OTE1OH0.mSOQEQTel5RI8HpcCc_G3Vc-mrun12V9UN8knyv3ltG_wJp6xk6LXU_ILZ0uMFNN-1Fyy1jEq_scK3rAjzUl0_yPSFoSVUIp6sAYsvWputS7mA9prmnJSjiGOPiCySiIngazVkGSsgxeMK_aDm8fzqYAmbmNSgttTbx3QoLRWxpvJJMgMBxVk9mNWVwTEi-yj3Ox_z-GYf3-a1Wyk-5MX9QqolP-hVqTbtqeMP5U0T08P07nNUGcVqCuCNnJpCS-rhsPoIJJB2DBN1iNJGv1YOMqkIEeAIzTOjzCOc45NHygJ2ePXSzUT0JMFclaCobJ1aib5ovSKb68vcxJ8O0xK1thRjJUs5p3vBidcttv_uw7e5pU_sythN5RpOFV0YrTACfvu2lYUCAeE6h_Yq_fkT_Pj62D_WtvR9W1a_Vem6nkZcQzWR4T7PSAXPecr2-d5SAhQDIlWFcEAJZEdpNdACRR6kt79h5ucYZyU3Sx5GCqYUAeEL9chyHY_xA-6FSov4oJjWvv3ESlj7TLJaTonaUImEqOZhABnShGtSqUqsBm69c3WoHeUs-UHNODaY7gfDLvSkGKAm4_9UG4WTr91k3APpaFFcSxA7vIqcgYqnprF-zYqKhV8D8Ae5Q_tvISY5WUAA_4Gm77LkoXJ8KEWwIAExSca-_BHFvl-NozGiQ" };
async function getUsers() {
  let result = (await (await fetch(apiUrl + "customer?page=1&limit=1000", {
    headers: key
  })).json()).data.map((record) => ({
    id: record.id,
    alamat: record.alamat,
    nama_lengkap: record.nama_lengkap,
    phone: record.phone,
    email: record.email
  }));
  return json({ result });
}
async function getProduct() {
  let result = (await (await fetch(apiUrl + "product?page=1&limit=1000", {
    headers: key
  })).json()).data.map((record) => ({
    id: record.idproduk,
    image: record.imageList,
    barcode: record.barcode,
    product_name: record.nama_produk,
    category: record.nama_kategori,
    price: record.pidr,
    stock: record.qty,
    weight: record.berat
  }));
  return json({ result });
}

// app/routes/products.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "ECCS POS - Products" },
  { name: "description", content: "Welcome to eccs-pos!" }
], columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "image", headerName: "Image", flex: 1, renderCell: (params) => /* @__PURE__ */ jsxDEV4("img", { style: { width: "25%" }, src: params.value }, void 0, !1, {
    fileName: "app/routes/products.tsx",
    lineNumber: 22,
    columnNumber: 78
  }, this) },
  { field: "barcode", headerName: "SKU", flex: 1 },
  { field: "product_name", headerName: "Name", flex: 1 },
  { field: "category", headerName: "Category", flex: 1 },
  { field: "price", headerName: "Price", flex: 1 },
  { field: "stock", headerName: "Stock", flex: 1 },
  { field: "weight", headerName: "Weight", flex: 1 }
], loader = async (args) => await getProduct();
function Index() {
  let myusers = useLoaderData();
  return /* @__PURE__ */ jsxDEV4("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsxDEV4(Box_default, { sx: { marginTop: "1em", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV4(Typography_default, { gutterBottom: !0, variant: "h5", component: "h5", children: "List Product" }, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4(Box_default, { sx: { boxShadow: 1 }, children: /* @__PURE__ */ jsxDEV4("div", { style: { height: "100%", width: "100%" }, children: /* @__PURE__ */ jsxDEV4(
      DataGrid,
      {
        rows: myusers.result,
        columns,
        initialState: {
          pagination: {
            paginationModel: { page: 0, pageSize: 10 }
          },
          filter: {}
        },
        slots: { toolbar: GridToolbar },
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
        lineNumber: 55,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.tsx",
    lineNumber: 45,
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
import _objectWithoutPropertiesLoose26 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends33 from "@babel/runtime/helpers/esm/extends";
import * as React31 from "react";
import clsx21 from "clsx";
import PropTypes28 from "prop-types";
import { keyframes as keyframes3, css as css2 } from "@mui/system";

// node_modules/@mui/material/Skeleton/skeletonClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses20 } from "@mui/utils";
function getSkeletonUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiSkeleton", slot);
}
var skeletonClasses = generateUtilityClasses20("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);

// node_modules/@mui/material/Skeleton/Skeleton.js
import { jsx as _jsx27 } from "react/jsx-runtime";
var _excluded28 = ["animation", "className", "component", "height", "style", "variant", "width"], _2 = (t) => t, _t5, _t22, _t32, _t42, useUtilityClasses18 = (ownerState) => {
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
  overridesResolver: (props, styles4) => {
    let {
      ownerState
    } = props;
    return [styles4.root, styles4[ownerState.variant], ownerState.animation !== !1 && styles4[ownerState.animation], ownerState.hasChildren && styles4.withChildren, ownerState.hasChildren && !ownerState.width && styles4.fitContent, ownerState.hasChildren && !ownerState.height && styles4.heightAuto];
  }
})(({
  theme,
  ownerState
}) => {
  let radiusUnit = getUnit(theme.shape.borderRadius) || "px", radiusValue = toUnitless(theme.shape.borderRadius);
  return _extends33({
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
    `), waveKeyframe, (theme.vars || theme).palette.action.hover)), Skeleton = /* @__PURE__ */ React31.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose26(props, _excluded28), ownerState = _extends33({}, props, {
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  }), classes = useUtilityClasses18(ownerState);
  return /* @__PURE__ */ _jsx27(SkeletonRoot, _extends33({
    as: component,
    ref,
    className: clsx21(classes.root, className),
    ownerState
  }, other, {
    style: _extends33({
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
  animation: PropTypes28.oneOf(["pulse", "wave", !1]),
  /**
   * Optional children to infer width and height from.
   */
  children: PropTypes28.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes28.object,
  /**
   * @ignore
   */
  className: PropTypes28.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes28.elementType,
  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: PropTypes28.oneOfType([PropTypes28.number, PropTypes28.string]),
  /**
   * @ignore
   */
  style: PropTypes28.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes28.oneOfType([PropTypes28.arrayOf(PropTypes28.oneOfType([PropTypes28.func, PropTypes28.object, PropTypes28.bool])), PropTypes28.func, PropTypes28.object]),
  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant: PropTypes28.oneOfType([PropTypes28.oneOf(["circular", "rectangular", "rounded", "text"]), PropTypes28.string]),
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: PropTypes28.oneOfType([PropTypes28.number, PropTypes28.string])
};
var Skeleton_default = Skeleton;

// node_modules/@mui/material/Stack/Stack.js
import PropTypes29 from "prop-types";
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
  children: PropTypes29.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes29.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: PropTypes29.oneOfType([PropTypes29.oneOf(["column-reverse", "column", "row-reverse", "row"]), PropTypes29.arrayOf(PropTypes29.oneOf(["column-reverse", "column", "row-reverse", "row"])), PropTypes29.object]),
  /**
   * Add an element between each child.
   */
  divider: PropTypes29.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: PropTypes29.oneOfType([PropTypes29.arrayOf(PropTypes29.oneOfType([PropTypes29.number, PropTypes29.string])), PropTypes29.number, PropTypes29.object, PropTypes29.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes29.oneOfType([PropTypes29.arrayOf(PropTypes29.oneOfType([PropTypes29.func, PropTypes29.object, PropTypes29.bool])), PropTypes29.func, PropTypes29.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: PropTypes29.bool
};
var Stack_default = Stack;

// node_modules/@mui/material/Grid/Grid.js
import _objectWithoutPropertiesLoose27 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends34 from "@babel/runtime/helpers/esm/extends";
import * as React33 from "react";
import PropTypes30 from "prop-types";
import clsx22 from "clsx";
import { unstable_extendSxProp as extendSxProp2, handleBreakpoints, unstable_resolveBreakpointValues as resolveBreakpointValues } from "@mui/system";

// node_modules/@mui/material/Grid/GridContext.js
import * as React32 from "react";
var GridContext = /* @__PURE__ */ React32.createContext();
GridContext.displayName = "GridContext";
var GridContext_default = GridContext;

// node_modules/@mui/material/Grid/gridClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses21 } from "@mui/utils";
function getGridUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiGrid", slot);
}
var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"], WRAPS = ["nowrap", "wrap-reverse", "wrap"], GRID_SIZES = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], gridClasses = generateUtilityClasses21("MuiGrid", [
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
var _excluded29 = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
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
      styles4 = _extends34({
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
  Object.keys(values).forEach((key2) => {
    nonZeroKey === "" && values[key2] !== 0 && (nonZeroKey = key2);
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
}) => _extends34({
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
var useUtilityClasses19 = (ownerState) => {
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
}, Grid = /* @__PURE__ */ React33.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose27(props, _excluded29), rowSpacing = rowSpacingProp || spacing, columnSpacing = columnSpacingProp || spacing, columnsContext = React33.useContext(GridContext_default), columns3 = container ? columnsProp || 12 : columnsContext, breakpointsValues = {}, otherFiltered = _extends34({}, other);
  breakpoints.keys.forEach((breakpoint) => {
    other[breakpoint] != null && (breakpointsValues[breakpoint] = other[breakpoint], delete otherFiltered[breakpoint]);
  });
  let ownerState = _extends34({}, props, {
    columns: columns3,
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
  }), classes = useUtilityClasses19(ownerState);
  return /* @__PURE__ */ _jsx28(GridContext_default.Provider, {
    value: columns3,
    children: /* @__PURE__ */ _jsx28(GridRoot, _extends34({
      ownerState,
      className: clsx22(classes.root, className),
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
   * The number of columns.
   * @default 12
   */
  columns: PropTypes30.oneOfType([PropTypes30.arrayOf(PropTypes30.number), PropTypes30.number, PropTypes30.object]),
  /**
   * Defines the horizontal space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  columnSpacing: PropTypes30.oneOfType([PropTypes30.arrayOf(PropTypes30.oneOfType([PropTypes30.number, PropTypes30.string])), PropTypes30.number, PropTypes30.object, PropTypes30.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes30.elementType,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  container: PropTypes30.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'row'
   */
  direction: PropTypes30.oneOfType([PropTypes30.oneOf(["column-reverse", "column", "row-reverse", "row"]), PropTypes30.arrayOf(PropTypes30.oneOf(["column-reverse", "column", "row-reverse", "row"])), PropTypes30.object]),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   * @default false
   */
  item: PropTypes30.bool,
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `lg` breakpoint and wider screens if not overridden.
   * @default false
   */
  lg: PropTypes30.oneOfType([PropTypes30.oneOf(["auto"]), PropTypes30.number, PropTypes30.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `md` breakpoint and wider screens if not overridden.
   * @default false
   */
  md: PropTypes30.oneOfType([PropTypes30.oneOf(["auto"]), PropTypes30.number, PropTypes30.bool]),
  /**
   * Defines the vertical space between the type `item` components.
   * It overrides the value of the `spacing` prop.
   */
  rowSpacing: PropTypes30.oneOfType([PropTypes30.arrayOf(PropTypes30.oneOfType([PropTypes30.number, PropTypes30.string])), PropTypes30.number, PropTypes30.object, PropTypes30.string]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `sm` breakpoint and wider screens if not overridden.
   * @default false
   */
  sm: PropTypes30.oneOfType([PropTypes30.oneOf(["auto"]), PropTypes30.number, PropTypes30.bool]),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: PropTypes30.oneOfType([PropTypes30.arrayOf(PropTypes30.oneOfType([PropTypes30.number, PropTypes30.string])), PropTypes30.number, PropTypes30.object, PropTypes30.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes30.oneOfType([PropTypes30.arrayOf(PropTypes30.oneOfType([PropTypes30.func, PropTypes30.object, PropTypes30.bool])), PropTypes30.func, PropTypes30.object]),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   * @default 'wrap'
   */
  wrap: PropTypes30.oneOf(["nowrap", "wrap-reverse", "wrap"]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for the `xl` breakpoint and wider screens if not overridden.
   * @default false
   */
  xl: PropTypes30.oneOfType([PropTypes30.oneOf(["auto"]), PropTypes30.number, PropTypes30.bool]),
  /**
   * If a number, it sets the number of columns the grid item uses.
   * It can't be greater than the total number of columns of the container (12 by default).
   * If 'auto', the grid item's width matches its content.
   * If false, the prop is ignored.
   * If true, the grid item's width grows to use the space available in the grid container.
   * The value is applied for all the screen sizes with the lowest priority.
   * @default false
   */
  xs: PropTypes30.oneOfType([PropTypes30.oneOf(["auto"]), PropTypes30.number, PropTypes30.bool]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   * @default false
   */
  zeroMinWidth: PropTypes30.bool
};
{
  let requireProp = requirePropFactory_default("Grid", Grid);
  Grid["propTypes"] = _extends34({}, Grid.propTypes, {
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

// app/routes/_index.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta3 = () => [
  { title: "ECCS POS - Dashboard" },
  { name: "description", content: "Welcome to eccs-pos!" }
];
function Index3() {
  return /* @__PURE__ */ jsxDEV6("div", { children: /* @__PURE__ */ jsxDEV6(Box_default, { sx: { flexGrow: 1, marginTop: "1em" }, children: /* @__PURE__ */ jsxDEV6(Grid_default, { container: !0, spacing: 2, children: [0, 1, 2, 3, 4, 5, 6].map((ar2) => /* @__PURE__ */ jsxDEV6(Grid_default, { item: !0, xs: 12, md: 6, lg: 6, children: /* @__PURE__ */ jsxDEV6(Box_default, { sx: { bgcolor: "skyblue" }, children: /* @__PURE__ */ jsxDEV6(Stack_default, { sx: { margin: "0.6em" }, children: [
    /* @__PURE__ */ jsxDEV6(Skeleton_default, { variant: "text", sx: { fontSize: "1rem" } }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 31,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ jsxDEV6(Skeleton_default, { variant: "circular", width: 40, height: 40 }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 34,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ jsxDEV6(Skeleton_default, { variant: "rectangular", width: 210, height: 60 }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 35,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ jsxDEV6(Skeleton_default, { variant: "rounded", width: 500, height: 400 }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 25
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 29,
    columnNumber: 23
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 28,
    columnNumber: 19
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 27,
    columnNumber: 17
  }, this)) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/sales.tsx
var sales_exports = {};
__export(sales_exports, {
  default: () => Index4,
  meta: () => meta4
});
import * as React71 from "react";

// node_modules/@mui/material/Table/Table.js
import _objectWithoutPropertiesLoose28 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends35 from "@babel/runtime/helpers/esm/extends";
import * as React35 from "react";
import PropTypes31 from "prop-types";
import clsx23 from "clsx";

// node_modules/@mui/material/Table/TableContext.js
import * as React34 from "react";
var TableContext = /* @__PURE__ */ React34.createContext();
TableContext.displayName = "TableContext";
var TableContext_default = TableContext;

// node_modules/@mui/material/Table/tableClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses22 } from "@mui/utils";
function getTableUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTable", slot);
}
var tableClasses = generateUtilityClasses22("MuiTable", ["root", "stickyHeader"]);

// node_modules/@mui/material/Table/Table.js
import { jsx as _jsx29 } from "react/jsx-runtime";
var _excluded30 = ["className", "component", "padding", "size", "stickyHeader"], useUtilityClasses20 = (ownerState) => {
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
}) => _extends35({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  "& caption": _extends35({}, theme.typography.body2, {
    padding: theme.spacing(2),
    color: (theme.vars || theme).palette.text.secondary,
    textAlign: "left",
    captionSide: "bottom"
  })
}, ownerState.stickyHeader && {
  borderCollapse: "separate"
})), defaultComponent = "table", Table = /* @__PURE__ */ React35.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTable"
  }), {
    className,
    component = defaultComponent,
    padding = "normal",
    size = "medium",
    stickyHeader = !1
  } = props, other = _objectWithoutPropertiesLoose28(props, _excluded30), ownerState = _extends35({}, props, {
    component,
    padding,
    size,
    stickyHeader
  }), classes = useUtilityClasses20(ownerState), table = React35.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return /* @__PURE__ */ _jsx29(TableContext_default.Provider, {
    value: table,
    children: /* @__PURE__ */ _jsx29(TableRoot, _extends35({
      as: component,
      role: component === defaultComponent ? null : "table",
      ref,
      className: clsx23(classes.root, className),
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
   * Allows TableCells to inherit padding of the Table.
   * @default 'normal'
   */
  padding: PropTypes31.oneOf(["checkbox", "none", "normal"]),
  /**
   * Allows TableCells to inherit size of the Table.
   * @default 'medium'
   */
  size: PropTypes31.oneOfType([PropTypes31.oneOf(["medium", "small"]), PropTypes31.string]),
  /**
   * Set the header sticky.
   *
   * ⚠️ It doesn't work with IE11.
   * @default false
   */
  stickyHeader: PropTypes31.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes31.oneOfType([PropTypes31.arrayOf(PropTypes31.oneOfType([PropTypes31.func, PropTypes31.object, PropTypes31.bool])), PropTypes31.func, PropTypes31.object])
};
var Table_default = Table;

// node_modules/@mui/material/TableBody/TableBody.js
import _extends36 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose29 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React37 from "react";
import PropTypes32 from "prop-types";
import clsx24 from "clsx";

// node_modules/@mui/material/Table/Tablelvl2Context.js
import * as React36 from "react";
var Tablelvl2Context = /* @__PURE__ */ React36.createContext();
Tablelvl2Context.displayName = "Tablelvl2Context";
var Tablelvl2Context_default = Tablelvl2Context;

// node_modules/@mui/material/TableBody/tableBodyClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses23 } from "@mui/utils";
function getTableBodyUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTableBody", slot);
}
var tableBodyClasses = generateUtilityClasses23("MuiTableBody", ["root"]);

// node_modules/@mui/material/TableBody/TableBody.js
import { jsx as _jsx30 } from "react/jsx-runtime";
var _excluded31 = ["className", "component"], useUtilityClasses21 = (ownerState) => {
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
}, defaultComponent2 = "tbody", TableBody = /* @__PURE__ */ React37.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTableBody"
  }), {
    className,
    component = defaultComponent2
  } = props, other = _objectWithoutPropertiesLoose29(props, _excluded31), ownerState = _extends36({}, props, {
    component
  }), classes = useUtilityClasses21(ownerState);
  return /* @__PURE__ */ _jsx30(Tablelvl2Context_default.Provider, {
    value: tablelvl2,
    children: /* @__PURE__ */ _jsx30(TableBodyRoot, _extends36({
      className: clsx24(classes.root, className),
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes32.oneOfType([PropTypes32.arrayOf(PropTypes32.oneOfType([PropTypes32.func, PropTypes32.object, PropTypes32.bool])), PropTypes32.func, PropTypes32.object])
};
var TableBody_default = TableBody;

// node_modules/@mui/material/TableCell/TableCell.js
import _objectWithoutPropertiesLoose30 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends37 from "@babel/runtime/helpers/esm/extends";
import * as React38 from "react";
import PropTypes33 from "prop-types";
import clsx25 from "clsx";
import { darken as darken3, alpha as alpha6, lighten as lighten3 } from "@mui/system";

// node_modules/@mui/material/TableCell/tableCellClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses24 } from "@mui/utils";
function getTableCellUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTableCell", slot);
}
var tableCellClasses = generateUtilityClasses24("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), tableCellClasses_default = tableCellClasses;

// node_modules/@mui/material/TableCell/TableCell.js
import { jsx as _jsx31 } from "react/jsx-runtime";
var _excluded32 = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"], useUtilityClasses22 = (ownerState) => {
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
}) => _extends37({}, theme.typography.body2, {
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
})), TableCell = /* @__PURE__ */ React38.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose30(props, _excluded32), table = React38.useContext(TableContext_default), tablelvl23 = React38.useContext(Tablelvl2Context_default), isHeadCell = tablelvl23 && tablelvl23.variant === "head", component;
  componentProp ? component = componentProp : component = isHeadCell ? "th" : "td";
  let scope = scopeProp;
  component === "td" ? scope = void 0 : !scope && isHeadCell && (scope = "col");
  let variant = variantProp || tablelvl23 && tablelvl23.variant, ownerState = _extends37({}, props, {
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : "normal"),
    size: sizeProp || (table && table.size ? table.size : "medium"),
    sortDirection,
    stickyHeader: variant === "head" && table && table.stickyHeader,
    variant
  }), classes = useUtilityClasses22(ownerState), ariaSort = null;
  return sortDirection && (ariaSort = sortDirection === "asc" ? "ascending" : "descending"), /* @__PURE__ */ _jsx31(TableCellRoot, _extends37({
    as: component,
    ref,
    className: clsx25(classes.root, className),
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
  align: PropTypes33.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
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
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding: PropTypes33.oneOf(["checkbox", "none", "normal"]),
  /**
   * Set scope attribute.
   */
  scope: PropTypes33.string,
  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size: PropTypes33.oneOfType([PropTypes33.oneOf(["medium", "small"]), PropTypes33.string]),
  /**
   * Set aria-sort direction.
   */
  sortDirection: PropTypes33.oneOf(["asc", "desc", !1]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes33.oneOfType([PropTypes33.arrayOf(PropTypes33.oneOfType([PropTypes33.func, PropTypes33.object, PropTypes33.bool])), PropTypes33.func, PropTypes33.object]),
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: PropTypes33.oneOfType([PropTypes33.oneOf(["body", "footer", "head"]), PropTypes33.string])
};
var TableCell_default = TableCell;

// node_modules/@mui/material/TableContainer/TableContainer.js
import _extends38 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose31 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React39 from "react";
import PropTypes34 from "prop-types";
import clsx26 from "clsx";

// node_modules/@mui/material/TableContainer/tableContainerClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses25 } from "@mui/utils";
function getTableContainerUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTableContainer", slot);
}
var tableContainerClasses = generateUtilityClasses25("MuiTableContainer", ["root"]);

// node_modules/@mui/material/TableContainer/TableContainer.js
import { jsx as _jsx32 } from "react/jsx-runtime";
var _excluded33 = ["className", "component"], useUtilityClasses23 = (ownerState) => {
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
}), TableContainer = /* @__PURE__ */ React39.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTableContainer"
  }), {
    className,
    component = "div"
  } = props, other = _objectWithoutPropertiesLoose31(props, _excluded33), ownerState = _extends38({}, props, {
    component
  }), classes = useUtilityClasses23(ownerState);
  return /* @__PURE__ */ _jsx32(TableContainerRoot, _extends38({
    ref,
    as: component,
    className: clsx26(classes.root, className),
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
var TableContainer_default = TableContainer;

// node_modules/@mui/material/TableHead/TableHead.js
import _extends39 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose32 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React40 from "react";
import PropTypes35 from "prop-types";
import clsx27 from "clsx";

// node_modules/@mui/material/TableHead/tableHeadClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses26 } from "@mui/utils";
function getTableHeadUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTableHead", slot);
}
var tableHeadClasses = generateUtilityClasses26("MuiTableHead", ["root"]);

// node_modules/@mui/material/TableHead/TableHead.js
import { jsx as _jsx33 } from "react/jsx-runtime";
var _excluded34 = ["className", "component"], useUtilityClasses24 = (ownerState) => {
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
}, defaultComponent3 = "thead", TableHead = /* @__PURE__ */ React40.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTableHead"
  }), {
    className,
    component = defaultComponent3
  } = props, other = _objectWithoutPropertiesLoose32(props, _excluded34), ownerState = _extends39({}, props, {
    component
  }), classes = useUtilityClasses24(ownerState);
  return /* @__PURE__ */ _jsx33(Tablelvl2Context_default.Provider, {
    value: tablelvl22,
    children: /* @__PURE__ */ _jsx33(TableHeadRoot, _extends39({
      as: component,
      className: clsx27(classes.root, className),
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes35.oneOfType([PropTypes35.arrayOf(PropTypes35.oneOfType([PropTypes35.func, PropTypes35.object, PropTypes35.bool])), PropTypes35.func, PropTypes35.object])
};
var TableHead_default = TableHead;

// node_modules/@mui/material/TableRow/TableRow.js
import _extends40 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose33 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React41 from "react";
import PropTypes36 from "prop-types";
import clsx28 from "clsx";
import { alpha as alpha7 } from "@mui/system";

// node_modules/@mui/material/TableRow/tableRowClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses27 } from "@mui/utils";
function getTableRowUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTableRow", slot);
}
var tableRowClasses = generateUtilityClasses27("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), tableRowClasses_default = tableRowClasses;

// node_modules/@mui/material/TableRow/TableRow.js
import { jsx as _jsx34 } from "react/jsx-runtime";
var _excluded35 = ["className", "component", "hover", "selected"], useUtilityClasses25 = (ownerState) => {
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
})), defaultComponent4 = "tr", TableRow = /* @__PURE__ */ React41.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiTableRow"
  }), {
    className,
    component = defaultComponent4,
    hover = !1,
    selected = !1
  } = props, other = _objectWithoutPropertiesLoose33(props, _excluded35), tablelvl23 = React41.useContext(Tablelvl2Context_default), ownerState = _extends40({}, props, {
    component,
    hover,
    selected,
    head: tablelvl23 && tablelvl23.variant === "head",
    footer: tablelvl23 && tablelvl23.variant === "footer"
  }), classes = useUtilityClasses25(ownerState);
  return /* @__PURE__ */ _jsx34(TableRowRoot, _extends40({
    as: component,
    ref,
    className: clsx28(classes.root, className),
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
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hover: PropTypes36.bool,
  /**
   * If `true`, the table row will have the selected shading.
   * @default false
   */
  selected: PropTypes36.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes36.oneOfType([PropTypes36.arrayOf(PropTypes36.oneOfType([PropTypes36.func, PropTypes36.object, PropTypes36.bool])), PropTypes36.func, PropTypes36.object])
};
var TableRow_default = TableRow;

// node_modules/@mui/material/InputLabel/InputLabel.js
import _objectWithoutPropertiesLoose35 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends42 from "@babel/runtime/helpers/esm/extends";
import * as React45 from "react";
import PropTypes38 from "prop-types";
import clsx30 from "clsx";

// node_modules/@mui/material/FormControl/formControlState.js
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => (acc[state] = props[state], muiFormControl && typeof props[state] > "u" && (acc[state] = muiFormControl[state]), acc), {});
}

// node_modules/@mui/material/FormControl/useFormControl.js
import * as React43 from "react";

// node_modules/@mui/material/FormControl/FormControlContext.js
import * as React42 from "react";
var FormControlContext = /* @__PURE__ */ React42.createContext(void 0);
FormControlContext.displayName = "FormControlContext";
var FormControlContext_default = FormControlContext;

// node_modules/@mui/material/FormControl/useFormControl.js
function useFormControl() {
  return React43.useContext(FormControlContext_default);
}

// node_modules/@mui/material/FormLabel/FormLabel.js
import _objectWithoutPropertiesLoose34 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends41 from "@babel/runtime/helpers/esm/extends";
import * as React44 from "react";
import PropTypes37 from "prop-types";
import clsx29 from "clsx";

// node_modules/@mui/material/FormLabel/formLabelClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses28 } from "@mui/utils";
function getFormLabelUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiFormLabel", slot);
}
var formLabelClasses = generateUtilityClasses28("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), formLabelClasses_default = formLabelClasses;

// node_modules/@mui/material/FormLabel/FormLabel.js
import { jsxs as _jsxs9 } from "react/jsx-runtime";
var _excluded36 = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], useUtilityClasses26 = (ownerState) => {
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
  }, styles4) => _extends41({}, styles4.root, ownerState.color === "secondary" && styles4.colorSecondary, ownerState.filled && styles4.filled)
})(({
  theme,
  ownerState
}) => _extends41({
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
})), FormLabel = /* @__PURE__ */ React44.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiFormLabel"
  }), {
    children,
    className,
    component = "label"
  } = props, other = _objectWithoutPropertiesLoose34(props, _excluded36), muiFormControl = useFormControl(), fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), ownerState = _extends41({}, props, {
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  }), classes = useUtilityClasses26(ownerState);
  return /* @__PURE__ */ _jsxs9(FormLabelRoot, _extends41({
    as: component,
    ownerState,
    className: clsx29(classes.root, className),
    ref
  }, other, {
    children: [children, fcs.required && /* @__PURE__ */ _jsxs9(AsteriskComponent, {
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
   */
  color: PropTypes37.oneOfType([PropTypes37.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), PropTypes37.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes37.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: PropTypes37.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: PropTypes37.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: PropTypes37.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: PropTypes37.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: PropTypes37.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes37.oneOfType([PropTypes37.arrayOf(PropTypes37.oneOfType([PropTypes37.func, PropTypes37.object, PropTypes37.bool])), PropTypes37.func, PropTypes37.object])
};
var FormLabel_default = FormLabel;

// node_modules/@mui/material/InputLabel/inputLabelClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses29 } from "@mui/utils";
function getInputLabelUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiInputLabel", slot);
}
var inputLabelClasses = generateUtilityClasses29("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);

// node_modules/@mui/material/InputLabel/InputLabel.js
import { jsx as _jsx35 } from "react/jsx-runtime";
var _excluded37 = ["disableAnimation", "margin", "shrink", "variant", "className"], useUtilityClasses27 = (ownerState) => {
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
  return _extends42({}, classes, composedClasses);
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
}) => _extends42({
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
}, ownerState.variant === "filled" && _extends42({
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
}, ownerState.shrink && _extends42({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), ownerState.variant === "outlined" && _extends42({
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
})), InputLabel = /* @__PURE__ */ React45.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    name: "MuiInputLabel",
    props: inProps
  }), {
    disableAnimation = !1,
    shrink: shrinkProp,
    className
  } = props, other = _objectWithoutPropertiesLoose35(props, _excluded37), muiFormControl = useFormControl(), shrink = shrinkProp;
  typeof shrink > "u" && muiFormControl && (shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart);
  let fcs = formControlState({
    props,
    muiFormControl,
    states: ["size", "variant", "required", "focused"]
  }), ownerState = _extends42({}, props, {
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required,
    focused: fcs.focused
  }), classes = useUtilityClasses27(ownerState);
  return /* @__PURE__ */ _jsx35(InputLabelRoot, _extends42({
    "data-shrink": shrink,
    ownerState,
    ref,
    className: clsx30(classes.root, className)
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
  children: PropTypes38.node,
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
   */
  color: PropTypes38.oneOfType([PropTypes38.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), PropTypes38.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: PropTypes38.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: PropTypes38.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: PropTypes38.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: PropTypes38.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes38.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: PropTypes38.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: PropTypes38.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: PropTypes38.oneOfType([PropTypes38.oneOf(["normal", "small"]), PropTypes38.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes38.oneOfType([PropTypes38.arrayOf(PropTypes38.oneOfType([PropTypes38.func, PropTypes38.object, PropTypes38.bool])), PropTypes38.func, PropTypes38.object]),
  /**
   * The variant to use.
   */
  variant: PropTypes38.oneOf(["filled", "outlined", "standard"])
};
var InputLabel_default = InputLabel;

// node_modules/@mui/material/MenuItem/MenuItem.js
import _objectWithoutPropertiesLoose37 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends44 from "@babel/runtime/helpers/esm/extends";
import * as React47 from "react";
import PropTypes40 from "prop-types";
import clsx32 from "clsx";
import { alpha as alpha9 } from "@mui/system";

// node_modules/@mui/material/Divider/Divider.js
import _objectWithoutPropertiesLoose36 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends43 from "@babel/runtime/helpers/esm/extends";
import * as React46 from "react";
import PropTypes39 from "prop-types";
import clsx31 from "clsx";
import { alpha as alpha8 } from "@mui/system";

// node_modules/@mui/material/Divider/dividerClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses30 } from "@mui/utils";
function getDividerUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiDivider", slot);
}
var dividerClasses = generateUtilityClasses30("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), dividerClasses_default = dividerClasses;

// node_modules/@mui/material/Divider/Divider.js
import { jsx as _jsx36 } from "react/jsx-runtime";
var _excluded38 = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], useUtilityClasses28 = (ownerState) => {
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
}) => _extends43({
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
}) => _extends43({}, ownerState.children && {
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
}) => _extends43({}, ownerState.children && ownerState.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(theme.vars || theme).palette.divider}`
  }
}), ({
  theme,
  ownerState
}) => _extends43({}, ownerState.children && ownerState.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`
  }
}), ({
  ownerState
}) => _extends43({}, ownerState.textAlign === "right" && ownerState.orientation !== "vertical" && {
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
}) => _extends43({
  display: "inline-block",
  paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
  paddingRight: `calc(${theme.spacing(1)} * 1.2)`
}, ownerState.orientation === "vertical" && {
  paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
})), Divider = /* @__PURE__ */ React46.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose36(props, _excluded38), ownerState = _extends43({}, props, {
    absolute,
    component,
    flexItem,
    light: light2,
    orientation,
    role,
    textAlign,
    variant
  }), classes = useUtilityClasses28(ownerState);
  return /* @__PURE__ */ _jsx36(DividerRoot, _extends43({
    as: component,
    className: clsx31(classes.root, className),
    role,
    ref,
    ownerState
  }, other, {
    children: children ? /* @__PURE__ */ _jsx36(DividerWrapper, {
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
  absolute: PropTypes39.bool,
  /**
   * The content of the component.
   */
  children: PropTypes39.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes39.object,
  /**
   * @ignore
   */
  className: PropTypes39.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes39.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: PropTypes39.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   */
  light: PropTypes39.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: PropTypes39.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: PropTypes39.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes39.oneOfType([PropTypes39.arrayOf(PropTypes39.oneOfType([PropTypes39.func, PropTypes39.object, PropTypes39.bool])), PropTypes39.func, PropTypes39.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: PropTypes39.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: PropTypes39.oneOfType([PropTypes39.oneOf(["fullWidth", "inset", "middle"]), PropTypes39.string])
};
var Divider_default = Divider;

// node_modules/@mui/material/MenuItem/menuItemClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses31 } from "@mui/utils";
function getMenuItemUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiMenuItem", slot);
}
var menuItemClasses = generateUtilityClasses31("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), menuItemClasses_default = menuItemClasses;

// node_modules/@mui/material/MenuItem/MenuItem.js
import { jsx as _jsx37 } from "react/jsx-runtime";
var _excluded39 = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], overridesResolver4 = (props, styles4) => {
  let {
    ownerState
  } = props;
  return [styles4.root, ownerState.dense && styles4.dense, ownerState.divider && styles4.divider, !ownerState.disableGutters && styles4.gutters];
}, useUtilityClasses29 = (ownerState) => {
  let {
    disabled,
    dense,
    divider,
    disableGutters,
    selected,
    classes
  } = ownerState, composedClasses = unstable_composeClasses({
    root: ["root", dense && "dense", disabled && "disabled", !disableGutters && "gutters", divider && "divider", selected && "selected"]
  }, getMenuItemUtilityClass, classes);
  return _extends44({}, classes, composedClasses);
}, MenuItemRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: overridesResolver4
})(({
  theme,
  ownerState
}) => _extends44({}, theme.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${menuItemClasses_default.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha9(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${menuItemClasses_default.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha9(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${menuItemClasses_default.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha9(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha9(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${menuItemClasses_default.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${menuItemClasses_default.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  },
  [`& + .${dividerClasses_default.root}`]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  [`& + .${dividerClasses_default.inset}`]: {
    marginLeft: 52
  },
  [`& .${listItemTextClasses_default.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${listItemTextClasses_default.inset}`]: {
    paddingLeft: 36
  },
  [`& .${listItemIconClasses_default.root}`]: {
    minWidth: 36
  }
}, !ownerState.dense && {
  [theme.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, ownerState.dense && _extends44({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, theme.typography.body2, {
  [`& .${listItemIconClasses_default.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), MenuItem = /* @__PURE__ */ React47.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiMenuItem"
  }), {
    autoFocus = !1,
    component = "li",
    dense = !1,
    divider = !1,
    disableGutters = !1,
    focusVisibleClassName,
    role = "menuitem",
    tabIndex: tabIndexProp,
    className
  } = props, other = _objectWithoutPropertiesLoose37(props, _excluded39), context = React47.useContext(ListContext_default), childContext = React47.useMemo(() => ({
    dense: dense || context.dense || !1,
    disableGutters
  }), [context.dense, dense, disableGutters]), menuItemRef = React47.useRef(null);
  useEnhancedEffect_default(() => {
    autoFocus && (menuItemRef.current ? menuItemRef.current.focus() : console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [autoFocus]);
  let ownerState = _extends44({}, props, {
    dense: childContext.dense,
    divider,
    disableGutters
  }), classes = useUtilityClasses29(props), handleRef = useForkRef_default(menuItemRef, ref), tabIndex;
  return props.disabled || (tabIndex = tabIndexProp !== void 0 ? tabIndexProp : -1), /* @__PURE__ */ _jsx37(ListContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsx37(MenuItemRoot, _extends44({
      ref: handleRef,
      role,
      tabIndex,
      component,
      focusVisibleClassName: clsx32(classes.focusVisible, focusVisibleClassName),
      className: clsx32(classes.root, className)
    }, other, {
      ownerState,
      classes
    }))
  });
});
MenuItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: PropTypes40.bool,
  /**
   * The content of the component.
   */
  children: PropTypes40.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes40.object,
  /**
   * @ignore
   */
  className: PropTypes40.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes40.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: PropTypes40.bool,
  /**
   * @ignore
   */
  disabled: PropTypes40.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes40.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: PropTypes40.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: PropTypes40.string,
  /**
   * @ignore
   */
  role: PropTypes40.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: PropTypes40.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes40.oneOfType([PropTypes40.arrayOf(PropTypes40.oneOfType([PropTypes40.func, PropTypes40.object, PropTypes40.bool])), PropTypes40.func, PropTypes40.object]),
  /**
   * @default 0
   */
  tabIndex: PropTypes40.number
};
var MenuItem_default = MenuItem;

// node_modules/@mui/material/Select/Select.js
import _extends59 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose49 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React60 from "react";
import PropTypes52 from "prop-types";
import clsx38 from "clsx";
import { deepmerge as deepmerge6 } from "@mui/utils";

// node_modules/@mui/material/Select/SelectInput.js
import _extends50 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose43 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import "@mui/utils";
import * as React53 from "react";
import { isFragment as isFragment3 } from "react-is";
import PropTypes46 from "prop-types";
import clsx36 from "clsx";
import { refType as refType4, unstable_useId as useId } from "@mui/utils";

// node_modules/@mui/material/Menu/Menu.js
import _extends48 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose41 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React51 from "react";
import { isFragment as isFragment2 } from "react-is";
import PropTypes44 from "prop-types";
import clsx34 from "clsx";
import { HTMLElementType as HTMLElementType5 } from "@mui/utils";

// node_modules/@mui/material/MenuList/MenuList.js
import _extends45 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose38 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React48 from "react";
import { isFragment } from "react-is";
import PropTypes41 from "prop-types";

// node_modules/@mui/material/utils/getScrollbarSize.js
import { unstable_getScrollbarSize as getScrollbarSize2 } from "@mui/utils";
var getScrollbarSize_default = getScrollbarSize2;

// node_modules/@mui/material/MenuList/MenuList.js
import { jsx as _jsx38 } from "react/jsx-runtime";
var _excluded40 = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
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
var MenuList = /* @__PURE__ */ React48.forwardRef(function(props, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose38(props, _excluded40), listRef = React48.useRef(null), textCriteriaRef = React48.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  useEnhancedEffect_default(() => {
    autoFocus && listRef.current.focus();
  }, [autoFocus]), React48.useImperativeHandle(actions, () => ({
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
    let list = listRef.current, key2 = event.key, currentFocus = ownerDocument_default(list).activeElement;
    if (key2 === "ArrowDown")
      event.preventDefault(), moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    else if (key2 === "ArrowUp")
      event.preventDefault(), moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    else if (key2 === "Home")
      event.preventDefault(), moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    else if (key2 === "End")
      event.preventDefault(), moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    else if (key2.length === 1) {
      let criteria = textCriteriaRef.current, lowerKey = key2.toLowerCase(), currTime = performance.now();
      criteria.keys.length > 0 && (currTime - criteria.lastTime > 500 ? (criteria.keys = [], criteria.repeating = !0, criteria.previousKeyMatched = !0) : criteria.repeating && lowerKey !== criteria.keys[0] && (criteria.repeating = !1)), criteria.lastTime = currTime, criteria.keys.push(lowerKey);
      let keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, !1, disabledItemsFocusable, nextItem, criteria)) ? event.preventDefault() : criteria.previousKeyMatched = !1;
    }
    onKeyDown && onKeyDown(event);
  }, handleRef = useForkRef_default(listRef, ref), activeItemIndex = -1;
  React48.Children.forEach(children, (child, index) => {
    if (!/* @__PURE__ */ React48.isValidElement(child)) {
      activeItemIndex === index && (activeItemIndex += 1, activeItemIndex >= children.length && (activeItemIndex = -1));
      return;
    }
    isFragment(child) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), child.props.disabled || (variant === "selectedMenu" && child.props.selected || activeItemIndex === -1) && (activeItemIndex = index), activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight) && (activeItemIndex += 1, activeItemIndex >= children.length && (activeItemIndex = -1));
  });
  let items = React48.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      let newChildProps = {};
      return autoFocusItem && (newChildProps.autoFocus = !0), child.props.tabIndex === void 0 && variant === "selectedMenu" && (newChildProps.tabIndex = 0), /* @__PURE__ */ React48.cloneElement(child, newChildProps);
    }
    return child;
  });
  return /* @__PURE__ */ _jsx38(List_default, _extends45({
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
  autoFocus: PropTypes41.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: PropTypes41.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: PropTypes41.node,
  /**
   * @ignore
   */
  className: PropTypes41.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: PropTypes41.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: PropTypes41.bool,
  /**
   * @ignore
   */
  onKeyDown: PropTypes41.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: PropTypes41.oneOf(["menu", "selectedMenu"])
};
var MenuList_default = MenuList;

// node_modules/@mui/material/Popover/Popover.js
import _extends47 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose40 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React50 from "react";
import PropTypes43 from "prop-types";
import clsx33 from "clsx";
import { unstable_composeClasses as composeClasses2, useSlotProps as useSlotProps3, isHostComponent as isHostComponent3 } from "@mui/base";
import { chainPropTypes as chainPropTypes5, integerPropType as integerPropType3, elementTypeAcceptingRef as elementTypeAcceptingRef3, refType as refType2, HTMLElementType as HTMLElementType4 } from "@mui/utils";

// node_modules/@mui/material/Grow/Grow.js
import _extends46 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose39 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React49 from "react";
import PropTypes42 from "prop-types";
import { elementAcceptingRef as elementAcceptingRef5 } from "@mui/utils";
import { Transition as Transition3 } from "react-transition-group";
import { jsx as _jsx39 } from "react/jsx-runtime";
var _excluded41 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
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
}, isWebKit154 = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Grow = /* @__PURE__ */ React49.forwardRef(function(props, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose39(props, _excluded41), timer = React49.useRef(), autoTimeout = React49.useRef(), theme = useTheme(), nodeRef = React49.useRef(null), handleRef = useForkRef_default(nodeRef, children.ref, ref), normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
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
  return React49.useEffect(() => () => {
    clearTimeout(timer.current);
  }, []), /* @__PURE__ */ _jsx39(TransitionComponent, _extends46({
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
    children: (state, childProps) => /* @__PURE__ */ React49.cloneElement(children, _extends46({
      style: _extends46({
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
  addEndListener: PropTypes42.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes42.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef5.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: PropTypes42.oneOfType([PropTypes42.shape({
    enter: PropTypes42.string,
    exit: PropTypes42.string
  }), PropTypes42.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes42.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes42.func,
  /**
   * @ignore
   */
  onEntered: PropTypes42.func,
  /**
   * @ignore
   */
  onEntering: PropTypes42.func,
  /**
   * @ignore
   */
  onExit: PropTypes42.func,
  /**
   * @ignore
   */
  onExited: PropTypes42.func,
  /**
   * @ignore
   */
  onExiting: PropTypes42.func,
  /**
   * @ignore
   */
  style: PropTypes42.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: PropTypes42.oneOfType([PropTypes42.oneOf(["auto"]), PropTypes42.number, PropTypes42.shape({
    appear: PropTypes42.number,
    enter: PropTypes42.number,
    exit: PropTypes42.number
  })])
};
Grow.muiSupportAuto = !0;
var Grow_default = Grow;

// node_modules/@mui/material/Popover/popoverClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses32 } from "@mui/utils";
function getPopoverUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiPopover", slot);
}
var popoverClasses = generateUtilityClasses32("MuiPopover", ["root", "paper"]);

// node_modules/@mui/material/Popover/Popover.js
import { jsx as _jsx40 } from "react/jsx-runtime";
var _excluded42 = ["onEntering"], _excluded210 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], _excluded310 = ["slotProps"];
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
var useUtilityClasses30 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return composeClasses2({
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
}), Popover = /* @__PURE__ */ React50.forwardRef(function(inProps, ref) {
  var _slotProps$paper, _slots$root, _slots$paper;
  let props = useThemeProps({
    props: inProps,
    name: "MuiPopover"
  }), {
    action,
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
  } = props, TransitionProps = _objectWithoutPropertiesLoose40(props.TransitionProps, _excluded42), other = _objectWithoutPropertiesLoose40(props, _excluded210), externalPaperSlotProps = (_slotProps$paper = slotProps?.paper) != null ? _slotProps$paper : PaperPropsProp, paperRef = React50.useRef(), handlePaperRef = useForkRef_default(paperRef, externalPaperSlotProps.ref), ownerState = _extends47({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    externalPaperSlotProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  }), classes = useUtilityClasses30(ownerState), getAnchorOffset = React50.useCallback(() => {
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
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]), getTransformOrigin = React50.useCallback((elemRect) => ({
    vertical: getOffsetTop(elemRect, transformOrigin.vertical),
    horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
  }), [transformOrigin.horizontal, transformOrigin.vertical]), getPositioningStyle = React50.useCallback((element) => {
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
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]), [isPositioned, setIsPositioned] = React50.useState(open), setPositioningStyles = React50.useCallback(() => {
    let element = paperRef.current;
    if (!element)
      return;
    let positioning = getPositioningStyle(element);
    positioning.top !== null && (element.style.top = positioning.top), positioning.left !== null && (element.style.left = positioning.left), element.style.transformOrigin = positioning.transformOrigin, setIsPositioned(!0);
  }, [getPositioningStyle]);
  React50.useEffect(() => (disableScrollLock && window.addEventListener("scroll", setPositioningStyles), () => window.removeEventListener("scroll", setPositioningStyles)), [anchorEl, disableScrollLock, setPositioningStyles]);
  let handleEntering = (element, isAppearing) => {
    onEntering && onEntering(element, isAppearing), setPositioningStyles();
  }, handleExited = () => {
    setIsPositioned(!1);
  };
  React50.useEffect(() => {
    open && setPositioningStyles();
  }), React50.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]), React50.useEffect(() => {
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
    externalSlotProps: _extends47({}, externalPaperSlotProps, {
      style: isPositioned ? externalPaperSlotProps.style : _extends47({}, externalPaperSlotProps.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation,
      ref: handlePaperRef
    },
    ownerState,
    className: clsx33(classes.paper, externalPaperSlotProps?.className)
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
    className: clsx33(classes.root, className)
  }), {
    slotProps: rootSlotPropsProp
  } = _useSlotProps, rootProps = _objectWithoutPropertiesLoose40(_useSlotProps, _excluded310);
  return /* @__PURE__ */ _jsx40(RootSlot, _extends47({}, rootProps, !isHostComponent3(RootSlot) && {
    slotProps: rootSlotPropsProp,
    disableScrollLock
  }, {
    children: /* @__PURE__ */ _jsx40(TransitionComponent, _extends47({
      appear: !0,
      in: open,
      onEntering: handleEntering,
      onExited: handleExited,
      timeout: transitionDuration
    }, TransitionProps, {
      children: /* @__PURE__ */ _jsx40(PaperSlot, _extends47({}, paperProps, {
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
  action: refType2,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: chainPropTypes5(PropTypes43.oneOfType([HTMLElementType4, PropTypes43.func]), (props) => {
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
  anchorOrigin: PropTypes43.shape({
    horizontal: PropTypes43.oneOfType([PropTypes43.oneOf(["center", "left", "right"]), PropTypes43.number]).isRequired,
    vertical: PropTypes43.oneOfType([PropTypes43.oneOf(["bottom", "center", "top"]), PropTypes43.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: PropTypes43.shape({
    left: PropTypes43.number.isRequired,
    top: PropTypes43.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: PropTypes43.oneOf(["anchorEl", "anchorPosition", "none"]),
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
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes43.oneOfType([HTMLElementType4, PropTypes43.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: PropTypes43.bool,
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
  marginThreshold: PropTypes43.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: PropTypes43.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes43.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: PropTypes43.shape({
    component: elementTypeAcceptingRef3
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: PropTypes43.shape({
    paper: PropTypes43.oneOfType([PropTypes43.func, PropTypes43.object]),
    root: PropTypes43.oneOfType([PropTypes43.func, PropTypes43.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: PropTypes43.shape({
    paper: PropTypes43.elementType,
    root: PropTypes43.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes43.oneOfType([PropTypes43.arrayOf(PropTypes43.oneOfType([PropTypes43.func, PropTypes43.object, PropTypes43.bool])), PropTypes43.func, PropTypes43.object]),
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
  transformOrigin: PropTypes43.shape({
    horizontal: PropTypes43.oneOfType([PropTypes43.oneOf(["center", "left", "right"]), PropTypes43.number]).isRequired,
    vertical: PropTypes43.oneOfType([PropTypes43.oneOf(["bottom", "center", "top"]), PropTypes43.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: PropTypes43.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: PropTypes43.oneOfType([PropTypes43.oneOf(["auto"]), PropTypes43.number, PropTypes43.shape({
    appear: PropTypes43.number,
    enter: PropTypes43.number,
    exit: PropTypes43.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: PropTypes43.object
};
var Popover_default = Popover;

// node_modules/@mui/material/Menu/menuClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses33 } from "@mui/utils";
function getMenuUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiMenu", slot);
}
var menuClasses = generateUtilityClasses33("MuiMenu", ["root", "paper", "list"]);

// node_modules/@mui/material/Menu/Menu.js
import { jsx as _jsx41 } from "react/jsx-runtime";
var _excluded43 = ["onEntering"], _excluded211 = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
}, LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
}, useUtilityClasses31 = (ownerState) => {
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
}), Menu = /* @__PURE__ */ React51.forwardRef(function(inProps, ref) {
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
  } = props, TransitionProps = _objectWithoutPropertiesLoose41(props.TransitionProps, _excluded43), other = _objectWithoutPropertiesLoose41(props, _excluded211), theme = useTheme(), isRtl = theme.direction === "rtl", ownerState = _extends48({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  }), classes = useUtilityClasses31(ownerState), autoFocusItem = autoFocus && !disableAutoFocusItem && open, menuListActionsRef = React51.useRef(null), handleEntering = (element, isAppearing) => {
    menuListActionsRef.current && menuListActionsRef.current.adjustStyleForScrollbar(element, theme), onEntering && onEntering(element, isAppearing);
  }, handleListKeyDown = (event) => {
    event.key === "Tab" && (event.preventDefault(), onClose && onClose(event, "tabKeyDown"));
  }, activeItemIndex = -1;
  React51.Children.map(children, (child, index) => {
    /* @__PURE__ */ React51.isValidElement(child) && (isFragment2(child) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), child.props.disabled || (variant === "selectedMenu" && child.props.selected || activeItemIndex === -1) && (activeItemIndex = index));
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
  return /* @__PURE__ */ _jsx41(MenuRoot, _extends48({
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
    TransitionProps: _extends48({
      onEntering: handleEntering
    }, TransitionProps),
    ownerState
  }, other, {
    classes: PopoverClasses,
    children: /* @__PURE__ */ _jsx41(MenuMenuList, _extends48({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant
    }, MenuListProps, {
      className: clsx34(classes.list, MenuListProps.className),
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
  anchorEl: PropTypes44.oneOfType([HTMLElementType5, PropTypes44.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: PropTypes44.bool,
  /**
   * Menu contents, normally `MenuItem`s.
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
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: PropTypes44.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: PropTypes44.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: PropTypes44.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes44.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: PropTypes44.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: PropTypes44.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: PropTypes44.shape({
    paper: PropTypes44.oneOfType([PropTypes44.func, PropTypes44.object]),
    root: PropTypes44.oneOfType([PropTypes44.func, PropTypes44.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: PropTypes44.shape({
    paper: PropTypes44.elementType,
    root: PropTypes44.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes44.oneOfType([PropTypes44.arrayOf(PropTypes44.oneOfType([PropTypes44.func, PropTypes44.object, PropTypes44.bool])), PropTypes44.func, PropTypes44.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: PropTypes44.oneOfType([PropTypes44.oneOf(["auto"]), PropTypes44.number, PropTypes44.shape({
    appear: PropTypes44.number,
    enter: PropTypes44.number,
    exit: PropTypes44.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: PropTypes44.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: PropTypes44.oneOf(["menu", "selectedMenu"])
};
var Menu_default = Menu;

// node_modules/@mui/material/NativeSelect/NativeSelectInput.js
import _objectWithoutPropertiesLoose42 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends49 from "@babel/runtime/helpers/esm/extends";
import * as React52 from "react";
import PropTypes45 from "prop-types";
import clsx35 from "clsx";
import { refType as refType3 } from "@mui/utils";

// node_modules/@mui/material/NativeSelect/nativeSelectClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses34 } from "@mui/utils";
function getNativeSelectUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiNativeSelect", slot);
}
var nativeSelectClasses = generateUtilityClasses34("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), nativeSelectClasses_default = nativeSelectClasses;

// node_modules/@mui/material/NativeSelect/NativeSelectInput.js
import { jsx as _jsx42 } from "react/jsx-runtime";
import { jsxs as _jsxs10 } from "react/jsx-runtime";
var _excluded44 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], useUtilityClasses32 = (ownerState) => {
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
}) => _extends49({
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
  "&:focus": _extends49({}, theme.vars ? {
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
}) => _extends49({
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
})(nativeSelectIconStyles), NativeSelectInput = /* @__PURE__ */ React52.forwardRef(function(props, ref) {
  let {
    className,
    disabled,
    error,
    IconComponent,
    inputRef,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose42(props, _excluded44), ownerState = _extends49({}, props, {
    disabled,
    variant,
    error
  }), classes = useUtilityClasses32(ownerState);
  return /* @__PURE__ */ _jsxs10(React52.Fragment, {
    children: [/* @__PURE__ */ _jsx42(NativeSelectSelect, _extends49({
      ownerState,
      className: clsx35(classes.select, className),
      disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : /* @__PURE__ */ _jsx42(NativeSelectIcon, {
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
  children: PropTypes45.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes45.object,
  /**
   * The CSS class name of the select element.
   */
  className: PropTypes45.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: PropTypes45.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: PropTypes45.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes45.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: refType3,
  /**
   * @ignore
   */
  multiple: PropTypes45.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes45.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes45.func,
  /**
   * The input value.
   */
  value: PropTypes45.any,
  /**
   * The variant to use.
   */
  variant: PropTypes45.oneOf(["standard", "outlined", "filled"])
};
var NativeSelectInput_default = NativeSelectInput;

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

// node_modules/@mui/material/Select/selectClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses35 } from "@mui/utils";
function getSelectUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiSelect", slot);
}
var selectClasses = generateUtilityClasses35("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), selectClasses_default = selectClasses;

// node_modules/@mui/material/Select/SelectInput.js
import { jsx as _jsx43 } from "react/jsx-runtime";
import { jsxs as _jsxs11 } from "react/jsx-runtime";
var _span, _excluded45 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], SelectSelect = styled_default("div", {
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
var useUtilityClasses33 = (ownerState) => {
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
}, SelectInput = /* @__PURE__ */ React53.forwardRef(function(props, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose43(props, _excluded45), [value, setValueState] = useControlled_default({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  }), [openState, setOpenState] = useControlled_default({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  }), inputRef = React53.useRef(null), displayRef = React53.useRef(null), [displayNode, setDisplayNode] = React53.useState(null), {
    current: isOpenControlled
  } = React53.useRef(openProp != null), [menuMinWidthState, setMenuMinWidthState] = React53.useState(), handleRef = useForkRef_default(ref, inputRefProp), handleDisplayRef = React53.useCallback((node) => {
    displayRef.current = node, node && setDisplayNode(node);
  }, []), anchorElement = displayNode?.parentNode;
  React53.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]), React53.useEffect(() => {
    defaultOpen && openState && displayNode && !isOpenControlled && (setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth), displayRef.current.focus());
  }, [displayNode, autoWidth]), React53.useEffect(() => {
    autoFocus && displayRef.current.focus();
  }, [autoFocus]), React53.useEffect(() => {
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
  }, childrenArray = React53.Children.toArray(children), handleChange = (event) => {
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
    if (!/* @__PURE__ */ React53.isValidElement(child))
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
    return selected && (foundMatch = !0), /* @__PURE__ */ React53.cloneElement(child, {
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
  React53.useEffect(() => {
    if (!foundMatch && !multiple && value !== "") {
      let values = childrenArray.map((child) => child.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${value}\` for the select ${name ? `(name="${name}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${values.filter((x) => x != null).map((x) => `\`${x}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [foundMatch, childrenArray, multiple, name, value]), computeDisplay && (multiple ? displayMultiple.length === 0 ? display = null : display = displayMultiple.reduce((output, child, index) => (output.push(child), index < displayMultiple.length - 1 && output.push(", "), output), []) : display = displaySingle);
  let menuMinWidth = menuMinWidthState;
  !autoWidth && isOpenControlled && displayNode && (menuMinWidth = anchorElement.clientWidth);
  let tabIndex;
  typeof tabIndexProp < "u" ? tabIndex = tabIndexProp : tabIndex = disabled ? null : 0;
  let buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : void 0), ownerState = _extends50({}, props, {
    variant,
    value,
    open,
    error
  }), classes = useUtilityClasses33(ownerState), paperProps = _extends50({}, MenuProps.PaperProps, (_MenuProps$slotProps = MenuProps.slotProps) == null ? void 0 : _MenuProps$slotProps.paper), listboxId = useId(), hiddenInputId = useId();
  return /* @__PURE__ */ _jsxs11(React53.Fragment, {
    children: [/* @__PURE__ */ _jsx43(SelectSelect, _extends50({
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
      className: clsx36(SelectDisplayProps.className, classes.select, className),
      id: buttonId,
      children: isEmpty(display) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span || (_span = /* @__PURE__ */ _jsx43("span", {
          className: "notranslate",
          children: "\u200B"
        }))
      ) : display
    })), /* @__PURE__ */ _jsx43(SelectNativeInput, _extends50({
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
    }, other)), /* @__PURE__ */ _jsx43(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), /* @__PURE__ */ _jsx43(Menu_default, _extends50({
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
      MenuListProps: _extends50({
        "aria-labelledby": labelId,
        role: "listbox",
        "aria-multiselectable": multiple ? "true" : void 0,
        disableListWrap: !0,
        id: listboxId
      }, MenuProps.MenuListProps),
      slotProps: _extends50({}, MenuProps.slotProps, {
        paper: _extends50({}, paperProps, {
          style: _extends50({
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
  "aria-describedby": PropTypes46.string,
  /**
   * @ignore
   */
  "aria-label": PropTypes46.string,
  /**
   * @ignore
   */
  autoFocus: PropTypes46.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: PropTypes46.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: PropTypes46.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes46.object,
  /**
   * The CSS class name of the select element.
   */
  className: PropTypes46.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: PropTypes46.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes46.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: PropTypes46.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: PropTypes46.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: PropTypes46.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes46.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: refType4,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: PropTypes46.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: PropTypes46.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: PropTypes46.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: PropTypes46.string,
  /**
   * @ignore
   */
  onBlur: PropTypes46.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: PropTypes46.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes46.func,
  /**
   * @ignore
   */
  onFocus: PropTypes46.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: PropTypes46.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes46.bool,
  /**
   * @ignore
   */
  readOnly: PropTypes46.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: PropTypes46.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: PropTypes46.object,
  /**
   * @ignore
   */
  tabIndex: PropTypes46.oneOfType([PropTypes46.number, PropTypes46.string]),
  /**
   * @ignore
   */
  type: PropTypes46.any,
  /**
   * The input value.
   */
  value: PropTypes46.any,
  /**
   * The variant to use.
   */
  variant: PropTypes46.oneOf(["standard", "outlined", "filled"])
};
var SelectInput_default = SelectInput;

// node_modules/@mui/material/internal/svg-icons/ArrowDropDown.js
import "react";
import { jsx as _jsx44 } from "react/jsx-runtime";
var ArrowDropDown_default = createSvgIcon(/* @__PURE__ */ _jsx44("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");

// node_modules/@mui/material/Input/Input.js
import _objectWithoutPropertiesLoose45 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends53 from "@babel/runtime/helpers/esm/extends";
import * as React56 from "react";
import PropTypes48 from "prop-types";
import { refType as refType6, deepmerge as deepmerge4 } from "@mui/utils";

// node_modules/@mui/material/InputBase/InputBase.js
import _objectWithoutPropertiesLoose44 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends51 from "@babel/runtime/helpers/esm/extends";
import "@mui/utils";
import * as React55 from "react";
import PropTypes47 from "prop-types";
import clsx37 from "clsx";
import { refType as refType5, elementTypeAcceptingRef as elementTypeAcceptingRef4 } from "@mui/utils";
import { unstable_composeClasses as composeClasses3, isHostComponent as isHostComponent4, TextareaAutosize } from "@mui/base";

// node_modules/@mui/material/InputBase/inputBaseClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses36 } from "@mui/utils";
function getInputBaseUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiInputBase", slot);
}
var inputBaseClasses = generateUtilityClasses36("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), inputBaseClasses_default = inputBaseClasses;

// node_modules/@mui/material/InputBase/InputBase.js
import { jsx as _jsx45 } from "react/jsx-runtime";
import { jsxs as _jsxs12 } from "react/jsx-runtime";
var _excluded46 = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], rootOverridesResolver = (props, styles4) => {
  let {
    ownerState
  } = props;
  return [styles4.root, ownerState.formControl && styles4.formControl, ownerState.startAdornment && styles4.adornedStart, ownerState.endAdornment && styles4.adornedEnd, ownerState.error && styles4.error, ownerState.size === "small" && styles4.sizeSmall, ownerState.multiline && styles4.multiline, ownerState.color && styles4[`color${capitalize_default(ownerState.color)}`], ownerState.fullWidth && styles4.fullWidth, ownerState.hiddenLabel && styles4.hiddenLabel];
}, inputOverridesResolver = (props, styles4) => {
  let {
    ownerState
  } = props;
  return [styles4.input, ownerState.size === "small" && styles4.inputSizeSmall, ownerState.multiline && styles4.inputMultiline, ownerState.type === "search" && styles4.inputTypeSearch, ownerState.startAdornment && styles4.inputAdornedStart, ownerState.endAdornment && styles4.inputAdornedEnd, ownerState.hiddenLabel && styles4.inputHiddenLabel];
}, useUtilityClasses34 = (ownerState) => {
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
  return composeClasses3(slots, getInputBaseUtilityClass, classes);
}, InputBaseRoot = styled_default("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => _extends51({}, theme.typography.body1, {
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
}, ownerState.multiline && _extends51({
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
  let light2 = theme.palette.mode === "light", placeholder = _extends51({
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
  return _extends51({
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
}), inputGlobalStyles = /* @__PURE__ */ _jsx45(GlobalStyles_default, {
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
}), InputBase = /* @__PURE__ */ React55.forwardRef(function(inProps, ref) {
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
    rows: rows2,
    slotProps = {},
    slots = {},
    startAdornment,
    type = "text",
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose44(props, _excluded46), value = inputPropsProp.value != null ? inputPropsProp.value : valueProp, {
    current: isControlled
  } = React55.useRef(value != null), inputRef = React55.useRef(), handleInputRefWarning = React55.useCallback((instance) => {
    instance && instance.nodeName !== "INPUT" && !instance.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), handleInputRef = useForkRef_default(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning), [focused, setFocused] = React55.useState(!1), muiFormControl = useFormControl();
  React55.useEffect(() => {
    if (muiFormControl)
      return muiFormControl.registerEffect();
  }, [muiFormControl]);
  let fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused, React55.useEffect(() => {
    !muiFormControl && disabled && focused && (setFocused(!1), onBlur && onBlur());
  }, [muiFormControl, disabled, focused, onBlur]);
  let onFilled = muiFormControl && muiFormControl.onFilled, onEmpty = muiFormControl && muiFormControl.onEmpty, checkDirty = React55.useCallback((obj) => {
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
  React55.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  let handleClick = (event) => {
    inputRef.current && event.currentTarget === event.target && inputRef.current.focus(), onClick && onClick(event);
  }, InputComponent = inputComponent, inputProps = inputPropsProp;
  multiline && InputComponent === "input" && (rows2 ? ((minRows || maxRows) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), inputProps = _extends51({
    type: void 0,
    minRows: rows2,
    maxRows: rows2
  }, inputProps)) : inputProps = _extends51({
    type: void 0,
    maxRows,
    minRows
  }, inputProps), InputComponent = TextareaAutosize);
  let handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  React55.useEffect(() => {
    muiFormControl && muiFormControl.setAdornedStart(Boolean(startAdornment));
  }, [muiFormControl, startAdornment]);
  let ownerState = _extends51({}, props, {
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
  }), classes = useUtilityClasses34(ownerState), Root = slots.root || components.Root || InputBaseRoot, rootProps = slotProps.root || componentsProps.root || {}, Input3 = slots.input || components.Input || InputBaseComponent;
  return inputProps = _extends51({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input), /* @__PURE__ */ _jsxs12(React55.Fragment, {
    children: [!disableInjectingGlobalStyles && inputGlobalStyles, /* @__PURE__ */ _jsxs12(Root, _extends51({}, rootProps, !isHostComponent4(Root) && {
      ownerState: _extends51({}, ownerState, rootProps.ownerState)
    }, {
      ref,
      onClick: handleClick
    }, other, {
      className: clsx37(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
      children: [startAdornment, /* @__PURE__ */ _jsx45(FormControlContext_default.Provider, {
        value: null,
        children: /* @__PURE__ */ _jsx45(Input3, _extends51({
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
          rows: rows2,
          value,
          onKeyDown,
          onKeyUp,
          type
        }, inputProps, !isHostComponent4(Input3) && {
          as: InputComponent,
          ownerState: _extends51({}, ownerState, inputProps.ownerState)
        }, {
          ref: handleInputRef,
          className: clsx37(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        }))
      }), endAdornment, renderSuffix ? renderSuffix(_extends51({}, fcs, {
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
  "aria-describedby": PropTypes47.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: PropTypes47.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes47.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes47.object,
  /**
   * @ignore
   */
  className: PropTypes47.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes47.oneOfType([PropTypes47.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), PropTypes47.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes47.shape({
    Input: PropTypes47.elementType,
    Root: PropTypes47.elementType
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
  componentsProps: PropTypes47.shape({
    input: PropTypes47.object,
    root: PropTypes47.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes47.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes47.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: PropTypes47.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes47.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes47.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes47.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes47.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: elementTypeAcceptingRef4,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes47.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType5,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes47.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes47.oneOfType([PropTypes47.number, PropTypes47.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes47.oneOfType([PropTypes47.number, PropTypes47.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes47.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes47.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: PropTypes47.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes47.func,
  /**
   * @ignore
   */
  onClick: PropTypes47.func,
  /**
   * @ignore
   */
  onFocus: PropTypes47.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: PropTypes47.func,
  /**
   * @ignore
   */
  onKeyDown: PropTypes47.func,
  /**
   * @ignore
   */
  onKeyUp: PropTypes47.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes47.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes47.bool,
  /**
   * @ignore
   */
  renderSuffix: PropTypes47.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes47.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes47.oneOfType([PropTypes47.number, PropTypes47.string]),
  /**
   * The size of the component.
   */
  size: PropTypes47.oneOfType([PropTypes47.oneOf(["medium", "small"]), PropTypes47.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes47.shape({
    input: PropTypes47.object,
    root: PropTypes47.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes47.shape({
    input: PropTypes47.elementType,
    root: PropTypes47.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes47.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes47.oneOfType([PropTypes47.arrayOf(PropTypes47.oneOfType([PropTypes47.func, PropTypes47.object, PropTypes47.bool])), PropTypes47.func, PropTypes47.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: PropTypes47.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes47.any
};
var InputBase_default = InputBase;

// node_modules/@mui/material/Input/inputClasses.js
import _extends52 from "@babel/runtime/helpers/esm/extends";
import { unstable_generateUtilityClasses as generateUtilityClasses37 } from "@mui/utils";
function getInputUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiInput", slot);
}
var inputClasses = _extends52({}, inputBaseClasses_default, generateUtilityClasses37("MuiInput", ["root", "underline", "input"])), inputClasses_default = inputClasses;

// node_modules/@mui/material/Input/Input.js
import { jsx as _jsx46 } from "react/jsx-runtime";
var _excluded47 = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], useUtilityClasses35 = (ownerState) => {
  let {
    classes,
    disableUnderline
  } = ownerState, composedClasses = unstable_composeClasses({
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  }, getInputUtilityClass, classes);
  return _extends53({}, classes, composedClasses);
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
  return theme.vars && (bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`), _extends53({
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
})({}), Input = /* @__PURE__ */ React56.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose45(props, _excluded47), classes = useUtilityClasses35(props), inputComponentsProps = {
    root: {
      ownerState: {
        disableUnderline
      }
    }
  }, componentsProps = slotProps ?? componentsPropsProp ? deepmerge4(slotProps ?? componentsPropsProp, inputComponentsProps) : inputComponentsProps, RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot, InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
  return /* @__PURE__ */ _jsx46(InputBase_default, _extends53({
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
  autoComplete: PropTypes48.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes48.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes48.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes48.oneOfType([PropTypes48.oneOf(["primary", "secondary"]), PropTypes48.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes48.shape({
    Input: PropTypes48.elementType,
    Root: PropTypes48.elementType
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
  componentsProps: PropTypes48.shape({
    input: PropTypes48.object,
    root: PropTypes48.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes48.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes48.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: PropTypes48.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes48.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes48.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes48.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes48.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: PropTypes48.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes48.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType6,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes48.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes48.oneOfType([PropTypes48.number, PropTypes48.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes48.oneOfType([PropTypes48.number, PropTypes48.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes48.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes48.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes48.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes48.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes48.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes48.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes48.oneOfType([PropTypes48.number, PropTypes48.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes48.shape({
    input: PropTypes48.object,
    root: PropTypes48.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes48.shape({
    input: PropTypes48.elementType,
    root: PropTypes48.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes48.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes48.oneOfType([PropTypes48.arrayOf(PropTypes48.oneOfType([PropTypes48.func, PropTypes48.object, PropTypes48.bool])), PropTypes48.func, PropTypes48.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: PropTypes48.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes48.any
};
Input.muiName = "Input";
var Input_default = Input;

// node_modules/@mui/material/FilledInput/FilledInput.js
import _objectWithoutPropertiesLoose46 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends55 from "@babel/runtime/helpers/esm/extends";
import * as React57 from "react";
import { refType as refType7, deepmerge as deepmerge5 } from "@mui/utils";
import PropTypes49 from "prop-types";

// node_modules/@mui/material/FilledInput/filledInputClasses.js
import _extends54 from "@babel/runtime/helpers/esm/extends";
import { unstable_generateUtilityClasses as generateUtilityClasses38 } from "@mui/utils";
function getFilledInputUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiFilledInput", slot);
}
var filledInputClasses = _extends54({}, inputBaseClasses_default, generateUtilityClasses38("MuiFilledInput", ["root", "underline", "input"])), filledInputClasses_default = filledInputClasses;

// node_modules/@mui/material/FilledInput/FilledInput.js
import { jsx as _jsx47 } from "react/jsx-runtime";
var _excluded48 = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], useUtilityClasses36 = (ownerState) => {
  let {
    classes,
    disableUnderline
  } = ownerState, composedClasses = unstable_composeClasses({
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  }, getFilledInputUtilityClass, classes);
  return _extends55({}, classes, composedClasses);
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
  return _extends55({
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
  }, ownerState.multiline && _extends55({
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
}) => _extends55({
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
})), FilledInput = /* @__PURE__ */ React57.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose46(props, _excluded48), ownerState = _extends55({}, props, {
    fullWidth,
    inputComponent,
    multiline,
    type
  }), classes = useUtilityClasses36(props), filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  }, componentsProps = slotProps ?? componentsPropsProp ? deepmerge5(filledInputComponentsProps, slotProps ?? componentsPropsProp) : filledInputComponentsProps, RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot, InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
  return /* @__PURE__ */ _jsx47(InputBase_default, _extends55({
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
  autoComplete: PropTypes49.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes49.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes49.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes49.oneOfType([PropTypes49.oneOf(["primary", "secondary"]), PropTypes49.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes49.shape({
    Input: PropTypes49.elementType,
    Root: PropTypes49.elementType
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
  componentsProps: PropTypes49.shape({
    input: PropTypes49.object,
    root: PropTypes49.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes49.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes49.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: PropTypes49.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes49.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes49.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes49.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: PropTypes49.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes49.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: PropTypes49.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes49.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType7,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes49.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes49.oneOfType([PropTypes49.number, PropTypes49.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes49.oneOfType([PropTypes49.number, PropTypes49.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes49.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes49.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes49.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes49.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes49.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes49.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes49.oneOfType([PropTypes49.number, PropTypes49.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes49.shape({
    input: PropTypes49.object,
    root: PropTypes49.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes49.shape({
    input: PropTypes49.elementType,
    root: PropTypes49.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes49.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes49.oneOfType([PropTypes49.arrayOf(PropTypes49.oneOfType([PropTypes49.func, PropTypes49.object, PropTypes49.bool])), PropTypes49.func, PropTypes49.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: PropTypes49.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes49.any
};
FilledInput.muiName = "Input";
var FilledInput_default = FilledInput;

// node_modules/@mui/material/OutlinedInput/OutlinedInput.js
import _objectWithoutPropertiesLoose48 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends58 from "@babel/runtime/helpers/esm/extends";
import * as React59 from "react";
import PropTypes51 from "prop-types";
import { refType as refType8 } from "@mui/utils";

// node_modules/@mui/material/OutlinedInput/NotchedOutline.js
import _objectWithoutPropertiesLoose47 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends56 from "@babel/runtime/helpers/esm/extends";
import "react";
import PropTypes50 from "prop-types";
import { jsx as _jsx48 } from "react/jsx-runtime";
var _span2, _excluded49 = ["children", "classes", "className", "label", "notched"], NotchedOutlineRoot = styled_default("fieldset", {
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
}) => _extends56({
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
}, ownerState.withLabel && _extends56({
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
  } = props, other = _objectWithoutPropertiesLoose47(props, _excluded49), withLabel = label != null && label !== "", ownerState = _extends56({}, props, {
    notched,
    withLabel
  });
  return /* @__PURE__ */ _jsx48(NotchedOutlineRoot, _extends56({
    "aria-hidden": !0,
    className,
    ownerState
  }, other, {
    children: /* @__PURE__ */ _jsx48(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? /* @__PURE__ */ _jsx48("span", {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span2 || (_span2 = /* @__PURE__ */ _jsx48("span", {
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
  children: PropTypes50.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes50.object,
  /**
   * @ignore
   */
  className: PropTypes50.string,
  /**
   * The label.
   */
  label: PropTypes50.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: PropTypes50.bool.isRequired,
  /**
   * @ignore
   */
  style: PropTypes50.object
};

// node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js
import _extends57 from "@babel/runtime/helpers/esm/extends";
import { unstable_generateUtilityClasses as generateUtilityClasses39 } from "@mui/utils";
function getOutlinedInputUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiOutlinedInput", slot);
}
var outlinedInputClasses = _extends57({}, inputBaseClasses_default, generateUtilityClasses39("MuiOutlinedInput", ["root", "notchedOutline", "input"])), outlinedInputClasses_default = outlinedInputClasses;

// node_modules/@mui/material/OutlinedInput/OutlinedInput.js
import { jsxs as _jsxs13 } from "react/jsx-runtime";
import { jsx as _jsx49 } from "react/jsx-runtime";
var _excluded50 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], useUtilityClasses37 = (ownerState) => {
  let {
    classes
  } = ownerState, composedClasses = unstable_composeClasses({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, getOutlinedInputUtilityClass, classes);
  return _extends58({}, classes, composedClasses);
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
  return _extends58({
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
  }, ownerState.multiline && _extends58({
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
}) => _extends58({
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
})), OutlinedInput = /* @__PURE__ */ React59.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose48(props, _excluded50), classes = useUtilityClasses37(props), muiFormControl = useFormControl(), fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), ownerState = _extends58({}, props, {
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
  return /* @__PURE__ */ _jsx49(InputBase_default, _extends58({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    renderSuffix: (state) => /* @__PURE__ */ _jsx49(NotchedOutlineRoot2, {
      ownerState,
      className: classes.notchedOutline,
      label: label != null && label !== "" && fcs.required ? _React$Fragment || (_React$Fragment = /* @__PURE__ */ _jsxs13(React59.Fragment, {
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
    classes: _extends58({}, classes, {
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
  autoComplete: PropTypes51.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: PropTypes51.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes51.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: PropTypes51.oneOfType([PropTypes51.oneOf(["primary", "secondary"]), PropTypes51.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes51.shape({
    Input: PropTypes51.elementType,
    Root: PropTypes51.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes51.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: PropTypes51.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: PropTypes51.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: PropTypes51.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes51.bool,
  /**
   * The id of the `input` element.
   */
  id: PropTypes51.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: PropTypes51.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: PropTypes51.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType8,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: PropTypes51.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: PropTypes51.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes51.oneOfType([PropTypes51.number, PropTypes51.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes51.oneOfType([PropTypes51.number, PropTypes51.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: PropTypes51.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes51.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: PropTypes51.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes51.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes51.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: PropTypes51.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: PropTypes51.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes51.oneOfType([PropTypes51.number, PropTypes51.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes51.shape({
    input: PropTypes51.elementType,
    root: PropTypes51.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: PropTypes51.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes51.oneOfType([PropTypes51.arrayOf(PropTypes51.oneOfType([PropTypes51.func, PropTypes51.object, PropTypes51.bool])), PropTypes51.func, PropTypes51.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: PropTypes51.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes51.any
};
OutlinedInput.muiName = "Input";
var OutlinedInput_default = OutlinedInput;

// node_modules/@mui/material/Select/Select.js
import { jsx as _jsx50 } from "react/jsx-runtime";
var _excluded51 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], _excluded212 = ["root"], useUtilityClasses38 = (ownerState) => {
  let {
    classes
  } = ownerState;
  return classes;
}, styledRootConfig = {
  name: "MuiSelect",
  overridesResolver: (props, styles4) => styles4.root,
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant",
  slot: "Root"
}, StyledInput = styled_default(Input_default, styledRootConfig)(""), StyledOutlinedInput = styled_default(OutlinedInput_default, styledRootConfig)(""), StyledFilledInput = styled_default(FilledInput_default, styledRootConfig)(""), Select = /* @__PURE__ */ React60.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose49(props, _excluded51), inputComponent = native ? NativeSelectInput_default : SelectInput_default, muiFormControl = useFormControl(), fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "error"]
  }), variant = fcs.variant || variantProp, ownerState = _extends59({}, props, {
    variant,
    classes: classesProp
  }), classes = useUtilityClasses38(ownerState), restOfClasses = _objectWithoutPropertiesLoose49(classes, _excluded212), InputComponent = input || {
    standard: /* @__PURE__ */ _jsx50(StyledInput, {
      ownerState
    }),
    outlined: /* @__PURE__ */ _jsx50(StyledOutlinedInput, {
      label,
      ownerState
    }),
    filled: /* @__PURE__ */ _jsx50(StyledFilledInput, {
      ownerState
    })
  }[variant], inputComponentRef = useForkRef_default(ref, InputComponent.ref);
  return /* @__PURE__ */ _jsx50(React60.Fragment, {
    children: /* @__PURE__ */ React60.cloneElement(InputComponent, _extends59({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: _extends59({
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
        SelectDisplayProps: _extends59({
          id
        }, SelectDisplayProps)
      }, inputProps, {
        classes: inputProps ? deepmerge6(restOfClasses, inputProps.classes) : restOfClasses
      }, input ? input.props.inputProps : {})
    }, multiple && native && variant === "outlined" ? {
      notched: !0
    } : {}, {
      ref: inputComponentRef,
      className: clsx38(InputComponent.props.className, className, classes.root)
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
  autoWidth: PropTypes52.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: PropTypes52.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: PropTypes52.object,
  /**
   * @ignore
   */
  className: PropTypes52.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: PropTypes52.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes52.any,
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
  displayEmpty: PropTypes52.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: PropTypes52.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: PropTypes52.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: PropTypes52.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: PropTypes52.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: PropTypes52.node,
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
   * @default false
   */
  multiple: PropTypes52.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: PropTypes52.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: PropTypes52.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: PropTypes52.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: PropTypes52.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: PropTypes52.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes52.oneOfType([PropTypes52.arrayOf(PropTypes52.oneOfType([PropTypes52.func, PropTypes52.object, PropTypes52.bool])), PropTypes52.func, PropTypes52.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: PropTypes52.oneOfType([PropTypes52.oneOf([""]), PropTypes52.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes52.oneOf(["filled", "outlined", "standard"])
};
Select.muiName = "Select";
var Select_default = Select;

// node_modules/@mui/material/Button/Button.js
import _objectWithoutPropertiesLoose50 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends60 from "@babel/runtime/helpers/esm/extends";
import * as React63 from "react";
import PropTypes53 from "prop-types";
import clsx39 from "clsx";
import { internal_resolveProps as resolveProps } from "@mui/utils";
import { alpha as alpha10 } from "@mui/system";

// node_modules/@mui/material/Button/buttonClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses40 } from "@mui/utils";
function getButtonUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses40("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), buttonClasses_default = buttonClasses;

// node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js
import * as React61 from "react";
var ButtonGroupContext = /* @__PURE__ */ React61.createContext({});
ButtonGroupContext.displayName = "ButtonGroupContext";
var ButtonGroupContext_default = ButtonGroupContext;

// node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.js
import * as React62 from "react";
var ButtonGroupButtonContext = /* @__PURE__ */ React62.createContext(void 0);
ButtonGroupButtonContext.displayName = "ButtonGroupButtonContext";
var ButtonGroupButtonContext_default = ButtonGroupButtonContext;

// node_modules/@mui/material/Button/Button.js
import { jsx as _jsx51 } from "react/jsx-runtime";
import { jsxs as _jsxs14 } from "react/jsx-runtime";
var _excluded52 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], useUtilityClasses39 = (ownerState) => {
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
  return _extends60({}, classes, composedClasses);
}, commonIconStyles = (ownerState) => _extends60({}, ownerState.size === "small" && {
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
  return _extends60({}, theme.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": _extends60({
      textDecoration: "none",
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha10(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha10(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
      border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha10(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
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
    "&:active": _extends60({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[8]
    }),
    [`&.${buttonClasses_default.focusVisible}`]: _extends60({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[6]
    }),
    [`&.${buttonClasses_default.disabled}`]: _extends60({
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
    border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${alpha10(theme.palette[ownerState.color].main, 0.5)}`
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
}) => _extends60({
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
}) => _extends60({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === "small" && {
  marginRight: -2
}, commonIconStyles(ownerState))), Button = /* @__PURE__ */ React63.forwardRef(function(inProps, ref) {
  let contextProps = React63.useContext(ButtonGroupContext_default), buttonGroupButtonContextPositionClassName = React63.useContext(ButtonGroupButtonContext_default), resolvedProps = resolveProps(contextProps, inProps), props = useThemeProps({
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
  } = props, other = _objectWithoutPropertiesLoose50(props, _excluded52), ownerState = _extends60({}, props, {
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  }), classes = useUtilityClasses39(ownerState), startIcon = startIconProp && /* @__PURE__ */ _jsx51(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  }), endIcon = endIconProp && /* @__PURE__ */ _jsx51(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp
  }), positionClassName = buttonGroupButtonContextPositionClassName || "";
  return /* @__PURE__ */ _jsxs14(ButtonRoot, _extends60({
    ownerState,
    className: clsx39(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx39(classes.focusVisible, focusVisibleClassName),
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
  children: PropTypes53.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes53.object,
  /**
   * @ignore
   */
  className: PropTypes53.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes53.oneOfType([PropTypes53.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), PropTypes53.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes53.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes53.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: PropTypes53.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes53.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: PropTypes53.bool,
  /**
   * Element placed after the children.
   */
  endIcon: PropTypes53.node,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes53.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes53.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes53.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: PropTypes53.oneOfType([PropTypes53.oneOf(["small", "medium", "large"]), PropTypes53.string]),
  /**
   * Element placed before the children.
   */
  startIcon: PropTypes53.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes53.oneOfType([PropTypes53.arrayOf(PropTypes53.oneOfType([PropTypes53.func, PropTypes53.object, PropTypes53.bool])), PropTypes53.func, PropTypes53.object]),
  /**
   * @ignore
   */
  type: PropTypes53.oneOfType([PropTypes53.oneOf(["button", "reset", "submit"]), PropTypes53.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: PropTypes53.oneOfType([PropTypes53.oneOf(["contained", "outlined", "text"]), PropTypes53.string])
};
var Button_default = Button;

// node_modules/@mui/material/TextField/TextField.js
import _extends63 from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose53 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import * as React66 from "react";
import PropTypes56 from "prop-types";
import clsx42 from "clsx";
import { refType as refType9, unstable_useId as useId2 } from "@mui/utils";

// node_modules/@mui/material/FormControl/FormControl.js
import _objectWithoutPropertiesLoose51 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends61 from "@babel/runtime/helpers/esm/extends";
import * as React64 from "react";
import PropTypes54 from "prop-types";
import clsx40 from "clsx";

// node_modules/@mui/material/FormControl/formControlClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses41 } from "@mui/utils";
function getFormControlUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiFormControl", slot);
}
var formControlClasses = generateUtilityClasses41("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);

// node_modules/@mui/material/FormControl/FormControl.js
import { jsx as _jsx52 } from "react/jsx-runtime";
var _excluded53 = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], useUtilityClasses40 = (ownerState) => {
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
  }, styles4) => _extends61({}, styles4.root, styles4[`margin${capitalize_default(ownerState.margin)}`], ownerState.fullWidth && styles4.fullWidth)
})(({
  ownerState
}) => _extends61({
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
})), FormControl = /* @__PURE__ */ React64.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose51(props, _excluded53), ownerState = _extends61({}, props, {
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
  }), classes = useUtilityClasses40(ownerState), [adornedStart, setAdornedStart] = React64.useState(() => {
    let initialAdornedStart = !1;
    return children && React64.Children.forEach(children, (child) => {
      if (!isMuiElement_default(child, ["Input", "Select"]))
        return;
      let input = isMuiElement_default(child, ["Select"]) ? child.props.input : child;
      input && isAdornedStart(input.props) && (initialAdornedStart = !0);
    }), initialAdornedStart;
  }), [filled, setFilled] = React64.useState(() => {
    let initialFilled = !1;
    return children && React64.Children.forEach(children, (child) => {
      isMuiElement_default(child, ["Input", "Select"]) && (isFilled(child.props, !0) || isFilled(child.props.inputProps, !0)) && (initialFilled = !0);
    }), initialFilled;
  }), [focusedState, setFocused] = React64.useState(!1);
  disabled && focusedState && setFocused(!1);
  let focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState, registerEffect;
  {
    let registeredInput = React64.useRef(!1);
    registerEffect = () => (registeredInput.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), registeredInput.current = !0, () => {
      registeredInput.current = !1;
    });
  }
  let childContext = React64.useMemo(() => ({
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
  return /* @__PURE__ */ _jsx52(FormControlContext_default.Provider, {
    value: childContext,
    children: /* @__PURE__ */ _jsx52(FormControlRoot, _extends61({
      as: component,
      ownerState,
      className: clsx40(classes.root, className),
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes54.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: PropTypes54.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: PropTypes54.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: PropTypes54.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes54.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: PropTypes54.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: PropTypes54.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: PropTypes54.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: PropTypes54.oneOfType([PropTypes54.oneOf(["medium", "small"]), PropTypes54.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes54.oneOfType([PropTypes54.arrayOf(PropTypes54.oneOfType([PropTypes54.func, PropTypes54.object, PropTypes54.bool])), PropTypes54.func, PropTypes54.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes54.oneOf(["filled", "outlined", "standard"])
};
var FormControl_default = FormControl;

// node_modules/@mui/material/FormHelperText/FormHelperText.js
import _objectWithoutPropertiesLoose52 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends62 from "@babel/runtime/helpers/esm/extends";
import * as React65 from "react";
import PropTypes55 from "prop-types";
import clsx41 from "clsx";

// node_modules/@mui/material/FormHelperText/formHelperTextClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses42 } from "@mui/utils";
function getFormHelperTextUtilityClasses(slot) {
  return unstable_generateUtilityClass("MuiFormHelperText", slot);
}
var formHelperTextClasses = generateUtilityClasses42("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), formHelperTextClasses_default = formHelperTextClasses;

// node_modules/@mui/material/FormHelperText/FormHelperText.js
import { jsx as _jsx53 } from "react/jsx-runtime";
var _span3, _excluded54 = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], useUtilityClasses41 = (ownerState) => {
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
}) => _extends62({
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
})), FormHelperText = /* @__PURE__ */ React65.forwardRef(function(inProps, ref) {
  let props = useThemeProps({
    props: inProps,
    name: "MuiFormHelperText"
  }), {
    children,
    className,
    component = "p"
  } = props, other = _objectWithoutPropertiesLoose52(props, _excluded54), muiFormControl = useFormControl(), fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), ownerState = _extends62({}, props, {
    component,
    contained: fcs.variant === "filled" || fcs.variant === "outlined",
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  }), classes = useUtilityClasses41(ownerState);
  return /* @__PURE__ */ _jsx53(FormHelperTextRoot, _extends62({
    as: component,
    ownerState,
    className: clsx41(classes.root, className),
    ref
  }, other, {
    children: children === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      _span3 || (_span3 = /* @__PURE__ */ _jsx53("span", {
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
  children: PropTypes55.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes55.object,
  /**
   * @ignore
   */
  className: PropTypes55.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes55.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: PropTypes55.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: PropTypes55.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: PropTypes55.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: PropTypes55.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes55.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: PropTypes55.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes55.oneOfType([PropTypes55.arrayOf(PropTypes55.oneOfType([PropTypes55.func, PropTypes55.object, PropTypes55.bool])), PropTypes55.func, PropTypes55.object]),
  /**
   * The variant to use.
   */
  variant: PropTypes55.oneOfType([PropTypes55.oneOf(["filled", "outlined", "standard"]), PropTypes55.string])
};
var FormHelperText_default = FormHelperText;

// node_modules/@mui/material/TextField/textFieldClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses43 } from "@mui/utils";
function getTextFieldUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiTextField", slot);
}
var textFieldClasses = generateUtilityClasses43("MuiTextField", ["root"]);

// node_modules/@mui/material/TextField/TextField.js
import { jsx as _jsx54 } from "react/jsx-runtime";
import { jsxs as _jsxs15 } from "react/jsx-runtime";
var _excluded55 = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], variantComponent = {
  standard: Input_default,
  filled: FilledInput_default,
  outlined: OutlinedInput_default
}, useUtilityClasses42 = (ownerState) => {
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
    rows: rows2,
    select = !1,
    SelectProps,
    type,
    value,
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose53(props, _excluded55), ownerState = _extends63({}, props, {
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  }), classes = useUtilityClasses42(ownerState);
  select && !children && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  let InputMore = {};
  variant === "outlined" && (InputLabelProps && typeof InputLabelProps.shrink < "u" && (InputMore.notched = InputLabelProps.shrink), InputMore.label = label), select && ((!SelectProps || !SelectProps.native) && (InputMore.id = void 0), InputMore["aria-describedby"] = void 0);
  let id = useId2(idOverride), helperTextId = helperText && id ? `${id}-helper-text` : void 0, inputLabelId = label && id ? `${id}-label` : void 0, InputComponent = variantComponent[variant], InputElement = /* @__PURE__ */ _jsx54(InputComponent, _extends63({
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name,
    rows: rows2,
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
  return /* @__PURE__ */ _jsxs15(TextFieldRoot, _extends63({
    className: clsx42(classes.root, className),
    disabled,
    error,
    fullWidth,
    ref,
    required,
    color,
    variant,
    ownerState
  }, other, {
    children: [label != null && label !== "" && /* @__PURE__ */ _jsx54(InputLabel_default, _extends63({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? /* @__PURE__ */ _jsx54(Select_default, _extends63({
      "aria-describedby": helperTextId,
      id,
      labelId: inputLabelId,
      value,
      input: InputElement
    }, SelectProps, {
      children
    })) : InputElement, helperText && /* @__PURE__ */ _jsx54(FormHelperText_default, _extends63({
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
  autoComplete: PropTypes56.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: PropTypes56.bool,
  /**
   * @ignore
   */
  children: PropTypes56.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes56.object,
  /**
   * @ignore
   */
  className: PropTypes56.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: PropTypes56.oneOfType([PropTypes56.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), PropTypes56.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes56.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes56.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: PropTypes56.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: PropTypes56.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: PropTypes56.bool,
  /**
   * The helper text content.
   */
  helperText: PropTypes56.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: PropTypes56.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: PropTypes56.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: PropTypes56.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: PropTypes56.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType9,
  /**
   * The label content.
   */
  label: PropTypes56.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: PropTypes56.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes56.oneOfType([PropTypes56.number, PropTypes56.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes56.oneOfType([PropTypes56.number, PropTypes56.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: PropTypes56.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes56.string,
  /**
   * @ignore
   */
  onBlur: PropTypes56.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: PropTypes56.func,
  /**
   * @ignore
   */
  onFocus: PropTypes56.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: PropTypes56.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: PropTypes56.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes56.oneOfType([PropTypes56.number, PropTypes56.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: PropTypes56.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: PropTypes56.object,
  /**
   * The size of the component.
   */
  size: PropTypes56.oneOfType([PropTypes56.oneOf(["medium", "small"]), PropTypes56.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes56.oneOfType([PropTypes56.arrayOf(PropTypes56.oneOfType([PropTypes56.func, PropTypes56.object, PropTypes56.bool])), PropTypes56.func, PropTypes56.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: PropTypes56.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: PropTypes56.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: PropTypes56.oneOf(["filled", "outlined", "standard"])
};
var TextField_default = TextField;

// app/components/chooseProduct.tsx
import * as React70 from "react";

// node_modules/@mui/material/Dialog/Dialog.js
import _objectWithoutPropertiesLoose54 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends64 from "@babel/runtime/helpers/esm/extends";
import * as React68 from "react";
import PropTypes57 from "prop-types";
import clsx43 from "clsx";
import { unstable_useId as useId3 } from "@mui/utils";

// node_modules/@mui/material/Dialog/dialogClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses44 } from "@mui/utils";
function getDialogUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiDialog", slot);
}
var dialogClasses = generateUtilityClasses44("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), dialogClasses_default = dialogClasses;

// node_modules/@mui/material/Dialog/DialogContext.js
import * as React67 from "react";
var DialogContext = /* @__PURE__ */ React67.createContext({});
DialogContext.displayName = "DialogContext";
var DialogContext_default = DialogContext;

// node_modules/@mui/material/Dialog/Dialog.js
import { jsx as _jsx55 } from "react/jsx-runtime";
var _excluded56 = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], DialogBackdrop = styled_default(Backdrop_default, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (props, styles4) => styles4.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), useUtilityClasses43 = (ownerState) => {
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
}) => _extends64({
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
}) => _extends64({
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
})), Dialog = /* @__PURE__ */ React68.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose54(props, _excluded56), ownerState = _extends64({}, props, {
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  }), classes = useUtilityClasses43(ownerState), backdropClick = React68.useRef(), handleMouseDown = (event) => {
    backdropClick.current = event.target === event.currentTarget;
  }, handleBackdropClick = (event) => {
    backdropClick.current && (backdropClick.current = null, onBackdropClick && onBackdropClick(event), onClose && onClose(event, "backdropClick"));
  }, ariaLabelledby = useId3(ariaLabelledbyProp), dialogContextValue = React68.useMemo(() => ({
    titleId: ariaLabelledby
  }), [ariaLabelledby]);
  return /* @__PURE__ */ _jsx55(DialogRoot, _extends64({
    className: clsx43(classes.root, className),
    closeAfterTransition: !0,
    components: {
      Backdrop: DialogBackdrop
    },
    componentsProps: {
      backdrop: _extends64({
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
    children: /* @__PURE__ */ _jsx55(TransitionComponent, _extends64({
      appear: !0,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }, TransitionProps, {
      children: /* @__PURE__ */ _jsx55(DialogContainer, {
        className: clsx43(classes.container),
        onMouseDown: handleMouseDown,
        ownerState,
        children: /* @__PURE__ */ _jsx55(DialogPaper, _extends64({
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby
        }, PaperProps, {
          className: clsx43(classes.paper, PaperProps.className),
          ownerState,
          children: /* @__PURE__ */ _jsx55(DialogContext_default.Provider, {
            value: dialogContextValue,
            children
          })
        }))
      })
    }))
  }));
});
Dialog.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": PropTypes57.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": PropTypes57.string,
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
  BackdropComponent: PropTypes57.elementType,
  /**
   * @ignore
   */
  BackdropProps: PropTypes57.object,
  /**
   * Dialog children, usually the included sub-components.
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
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: PropTypes57.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: PropTypes57.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: PropTypes57.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: PropTypes57.oneOfType([PropTypes57.oneOf(["xs", "sm", "md", "lg", "xl", !1]), PropTypes57.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: PropTypes57.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes57.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes57.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: PropTypes57.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: PropTypes57.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: PropTypes57.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes57.oneOfType([PropTypes57.arrayOf(PropTypes57.oneOfType([PropTypes57.func, PropTypes57.object, PropTypes57.bool])), PropTypes57.func, PropTypes57.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: PropTypes57.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: PropTypes57.oneOfType([PropTypes57.number, PropTypes57.shape({
    appear: PropTypes57.number,
    enter: PropTypes57.number,
    exit: PropTypes57.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: PropTypes57.object
};
var Dialog_default = Dialog;

// node_modules/@mui/material/Fab/Fab.js
import _objectWithoutPropertiesLoose55 from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends65 from "@babel/runtime/helpers/esm/extends";
import * as React69 from "react";
import PropTypes58 from "prop-types";
import clsx44 from "clsx";

// node_modules/@mui/material/Fab/fabClasses.js
import { unstable_generateUtilityClasses as generateUtilityClasses45 } from "@mui/utils";
function getFabUtilityClass(slot) {
  return unstable_generateUtilityClass("MuiFab", slot);
}
var fabClasses = generateUtilityClasses45("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), fabClasses_default = fabClasses;

// node_modules/@mui/material/Fab/Fab.js
import { jsx as _jsx56 } from "react/jsx-runtime";
var _excluded57 = ["children", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"], useUtilityClasses44 = (ownerState) => {
  let {
    color,
    variant,
    classes,
    size
  } = ownerState, slots = {
    root: ["root", variant, `size${capitalize_default(size)}`, color === "inherit" ? "colorInherit" : color]
  }, composedClasses = unstable_composeClasses(slots, getFabUtilityClass, classes);
  return _extends65({}, classes, composedClasses);
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
  return _extends65({}, theme.typography.button, {
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
}) => _extends65({}, ownerState.color !== "inherit" && ownerState.color !== "default" && (theme.vars || theme).palette[ownerState.color] != null && {
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
})), Fab = /* @__PURE__ */ React69.forwardRef(function(inProps, ref) {
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
  } = props, other = _objectWithoutPropertiesLoose55(props, _excluded57), ownerState = _extends65({}, props, {
    color,
    component,
    disabled,
    disableFocusRipple,
    size,
    variant
  }), classes = useUtilityClasses44(ownerState);
  return /* @__PURE__ */ _jsx56(FabRoot, _extends65({
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
  children: PropTypes58.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes58.object,
  /**
   * @ignore
   */
  className: PropTypes58.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: PropTypes58.oneOfType([PropTypes58.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), PropTypes58.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes58.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: PropTypes58.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: PropTypes58.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: PropTypes58.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes58.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes58.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: PropTypes58.oneOfType([PropTypes58.oneOf(["small", "medium", "large"]), PropTypes58.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes58.oneOfType([PropTypes58.arrayOf(PropTypes58.oneOfType([PropTypes58.func, PropTypes58.object, PropTypes58.bool])), PropTypes58.func, PropTypes58.object]),
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: PropTypes58.oneOfType([PropTypes58.oneOf(["circular", "extended"]), PropTypes58.string])
};
var Fab_default = Fab;

// app/components/chooseProduct.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var Transition4 = React70.forwardRef(function(props, ref) {
  return /* @__PURE__ */ jsxDEV7(Slide_default, { direction: "up", ref, ...props }, void 0, !1, {
    fileName: "app/components/chooseProduct.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
});
function FullScreenDialog(_show) {
  let [open, setOpen] = React70.useState(!1), handleClickOpen = () => {
    setOpen(!0);
  }, handleClose = () => {
    setOpen(!1);
  };
  return /* @__PURE__ */ jsxDEV7(React70.Fragment, { children: [
    /* @__PURE__ */ jsxDEV7(Box_default, { sx: { "& > :not(style)": { m: 1 } }, children: /* @__PURE__ */ jsxDEV7(
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
          handleClickOpen();
        },
        children: /* @__PURE__ */ jsxDEV7(Icon_default, { children: "shopping_cart" }, void 0, !1, {
          fileName: "app/components/chooseProduct.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/chooseProduct.tsx",
        lineNumber: 43,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/chooseProduct.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7(
      Dialog_default,
      {
        fullScreen: !0,
        open,
        onClose: handleClose,
        TransitionComponent: Transition4,
        children: [
          /* @__PURE__ */ jsxDEV7(AppBar_default, { sx: { position: "relative" }, children: /* @__PURE__ */ jsxDEV7(Toolbar_default, { children: [
            /* @__PURE__ */ jsxDEV7(
              IconButton_default,
              {
                edge: "start",
                color: "inherit",
                onClick: handleClose,
                "aria-label": "close",
                children: /* @__PURE__ */ jsxDEV7(Icon_default, { children: "close" }, void 0, !1, {
                  fileName: "app/components/chooseProduct.tsx",
                  lineNumber: 71,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/chooseProduct.tsx",
                lineNumber: 65,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(Typography_default, { sx: { ml: 2, flex: 1 }, variant: "h6", component: "div", children: "Product List" }, void 0, !1, {
              fileName: "app/components/chooseProduct.tsx",
              lineNumber: 73,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV7(Button_default, { autoFocus: !0, color: "inherit", onClick: handleClose, children: "save" }, void 0, !1, {
              fileName: "app/components/chooseProduct.tsx",
              lineNumber: 76,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/chooseProduct.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/chooseProduct.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV7(List_default, { children: [
            /* @__PURE__ */ jsxDEV7(ListItem_default, { button: !0, children: /* @__PURE__ */ jsxDEV7(ListItemText_default, { primary: "Phone ringtone", secondary: "Titania" }, void 0, !1, {
              fileName: "app/components/chooseProduct.tsx",
              lineNumber: 83,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/chooseProduct.tsx",
              lineNumber: 82,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(Divider_default, {}, void 0, !1, {
              fileName: "app/components/chooseProduct.tsx",
              lineNumber: 85,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV7(ListItem_default, { button: !0, children: /* @__PURE__ */ jsxDEV7(
              ListItemText_default,
              {
                primary: "Default notification ringtone",
                secondary: "Tethys"
              },
              void 0,
              !1,
              {
                fileName: "app/components/chooseProduct.tsx",
                lineNumber: 87,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/chooseProduct.tsx",
              lineNumber: 86,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/chooseProduct.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/chooseProduct.tsx",
        lineNumber: 57,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/chooseProduct.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/sales.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
var rows = [
  createData("Frozen yoghurt", 159, 6, 24, 4),
  createData("Ice cream sandwich", 237, 9, 37, 4.3),
  createData("Eclair", 262, 16, 24, 6),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16, 49, 3.9)
], meta4 = () => [
  { title: "ECCS POS - Sales" },
  { name: "description", content: "Welcome to eccs-pos!" }
];
function Index4() {
  let [age, setAge] = React71.useState(""), [product, setProduct] = React71.useState(!1), handleChange = (event) => {
    setAge(event.target.value);
  }, triggerProductList = () => {
    product != !0 ? setProduct(!0) : setProduct(!1), console.log("sales product state : " + product);
  };
  return /* @__PURE__ */ jsxDEV8("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsxDEV8(Grid_default, { container: !0, spacing: 2, sx: { marginTop: "0.5em", width: "100%", height: "100%" }, children: [
      /* @__PURE__ */ jsxDEV8(Grid_default, { item: !0, xs: 12, md: 8, lg: 8, children: [
        /* @__PURE__ */ jsxDEV8(Box_default, { sx: { marginTop: "1em", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV8(Typography_default, { gutterBottom: !0, variant: "h4", component: "h4", children: "Checkout" }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8(Box_default, { children: [
          /* @__PURE__ */ jsxDEV8(TableContainer_default, { component: Paper_default, children: /* @__PURE__ */ jsxDEV8(Table_default, { sx: { minWidth: 650, width: "100%" }, "aria-label": "simple table", children: [
            /* @__PURE__ */ jsxDEV8(TableHead_default, { children: /* @__PURE__ */ jsxDEV8(TableRow_default, { children: [
              /* @__PURE__ */ jsxDEV8(TableCell_default, { children: "List Item" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 82,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV8(TableCell_default, { align: "right", children: "Price" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 83,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV8(TableCell_default, { align: "right", children: "Quantity" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 84,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV8(TableCell_default, { align: "right", children: "Total" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 85,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 81,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 80,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV8(TableBody_default, { children: rows.map((row) => /* @__PURE__ */ jsxDEV8(
              TableRow_default,
              {
                sx: { "&:last-child td, &:last-child th": { border: 0 } },
                children: [
                  /* @__PURE__ */ jsxDEV8(TableCell_default, { component: "th", scope: "row", children: row.name }, void 0, !1, {
                    fileName: "app/routes/sales.tsx",
                    lineNumber: 94,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV8(TableCell_default, { align: "right", children: row.calories }, void 0, !1, {
                    fileName: "app/routes/sales.tsx",
                    lineNumber: 97,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV8(TableCell_default, { align: "right", children: row.fat }, void 0, !1, {
                    fileName: "app/routes/sales.tsx",
                    lineNumber: 98,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV8(TableCell_default, { align: "right", children: row.carbs }, void 0, !1, {
                    fileName: "app/routes/sales.tsx",
                    lineNumber: 99,
                    columnNumber: 23
                  }, this)
                ]
              },
              row.name,
              !0,
              {
                fileName: "app/routes/sales.tsx",
                lineNumber: 90,
                columnNumber: 21
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 88,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 79,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV8(Stack_default, { useFlexGap: !0, flexWrap: "wrap", direction: "row", sx: { bgcolor: "#1976d2", color: "white" }, children: [
            /* @__PURE__ */ jsxDEV8(Grid_default, { xs: 6, md: 6, lg: 6, children: /* @__PURE__ */ jsxDEV8(Box_default, { children: [
              /* @__PURE__ */ jsxDEV8(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "caption", component: "h5", children: "Total Before Discount" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 110,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV8(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "caption", component: "h5", children: "Discount" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 113,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV8(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "h5", component: "h5", children: "Total" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 116,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 108,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV8(Grid_default, { xs: 6, md: 6, lg: 6, children: /* @__PURE__ */ jsxDEV8(Box_default, { children: [
              /* @__PURE__ */ jsxDEV8(Typography_default, { margin: "0.5em", textAlign: "right", gutterBottom: !0, variant: "caption", component: "h5", children: "$ 14" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 124,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV8(Typography_default, { margin: "0.5em", textAlign: "right", gutterBottom: !0, variant: "caption", component: "h5", children: "$ 4" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 127,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV8(Typography_default, { margin: "0.5em", textAlign: "right", gutterBottom: !0, variant: "h5", component: "h5", children: "$ 10" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 130,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 123,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 122,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/sales.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/sales.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(Grid_default, { item: !0, xs: 12, md: 4, lg: 4, children: /* @__PURE__ */ jsxDEV8(
        Stack_default,
        {
          direction: "column",
          justifyContent: "space-around",
          alignItems: "stretch",
          spacing: 0.5,
          sx: { marginTop: "4.5em" },
          children: /* @__PURE__ */ jsxDEV8(Box_default, { bgcolor: "#f7f7f7", children: /* @__PURE__ */ jsxDEV8(Stack_default, { useFlexGap: !0, flexWrap: "wrap", direction: "row", children: [
            /* @__PURE__ */ jsxDEV8(Grid_default, { xs: 6, md: 6, lg: 6, children: /* @__PURE__ */ jsxDEV8(Box_default, { children: /* @__PURE__ */ jsxDEV8(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "h5", component: "h5", children: "Total" }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 156,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 155,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 154,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV8(Grid_default, { xs: 6, md: 6, lg: 6, children: /* @__PURE__ */ jsxDEV8(Box_default, { children: /* @__PURE__ */ jsxDEV8(Typography_default, { margin: "0.5em", textAlign: "right", gutterBottom: !0, variant: "h5", component: "h5", children: "$ 10" }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 164,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 163,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 162,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV8(Grid_default, { xs: 12, md: 12, lg: 12, children: /* @__PURE__ */ jsxDEV8(Box_default, { children: /* @__PURE__ */ jsxDEV8(Typography_default, { margin: "0.5em", textAlign: "left", gutterBottom: !0, variant: "h5", component: "h5", children: [
              /* @__PURE__ */ jsxDEV8(InputLabel_default, { id: "demo-simple-select-label", children: "Customer *" }, void 0, !1, {
                fileName: "app/routes/sales.tsx",
                lineNumber: 173,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ jsxDEV8(
                Select_default,
                {
                  labelId: "demo-simple-select-label",
                  id: "demo-simple-select",
                  value: age,
                  label: "Age",
                  onChange: handleChange,
                  children: [
                    /* @__PURE__ */ jsxDEV8(MenuItem_default, { value: 10, children: "Abdul" }, void 0, !1, {
                      fileName: "app/routes/sales.tsx",
                      lineNumber: 181,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV8(MenuItem_default, { value: 20, children: "Ferry" }, void 0, !1, {
                      fileName: "app/routes/sales.tsx",
                      lineNumber: 182,
                      columnNumber: 27
                    }, this),
                    /* @__PURE__ */ jsxDEV8(MenuItem_default, { value: 30, children: "Manan" }, void 0, !1, {
                      fileName: "app/routes/sales.tsx",
                      lineNumber: 183,
                      columnNumber: 27
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/sales.tsx",
                  lineNumber: 174,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 172,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 170,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV8(Grid_default, { xs: 12, md: 12, lg: 12, children: /* @__PURE__ */ jsxDEV8(Box_default, { children: /* @__PURE__ */ jsxDEV8(
              TextField_default,
              {
                variant: "outlined",
                sx: { margin: "0.5em" },
                id: "outlined-required",
                label: "Voucher",
                defaultValue: "",
                style: {
                  color: "white"
                }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/sales.tsx",
                lineNumber: 191,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 190,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 189,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV8(Divider_default, { variant: "middle" }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 204,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV8(Grid_default, { xs: 12, md: 12, lg: 12, children: /* @__PURE__ */ jsxDEV8(Box_default, { sx: { margin: "0em", marginTop: "0.5em" }, children: /* @__PURE__ */ jsxDEV8(Button_default, { size: "large", fullWidth: !0, variant: "contained", color: "success", children: "Pay" }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 208,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 207,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/sales.tsx",
              lineNumber: 206,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 152,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/sales.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/sales.tsx",
          lineNumber: 144,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/sales.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sales.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    FullScreenDialog(product)
  ] }, void 0, !0, {
    fileName: "app/routes/sales.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this);
}

// app/routes/users.tsx
var users_exports = {};
__export(users_exports, {
  default: () => Index5,
  loader: () => loader2,
  meta: () => meta5
});
import { DataGrid as DataGrid2, GridToolbar as GridToolbar2 } from "@mui/x-data-grid";
import {
  useLoaderData as useLoaderData2
} from "@remix-run/react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var meta5 = () => [
  { title: "ECCS POS - Users" },
  { name: "description", content: "Welcome to eccs-pos!" }
], columns2 = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "nama_lengkap", headerName: "Full Name", flex: 1 },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    flex: 1
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1
  }
], loader2 = async (args) => await getUsers();
function Index5() {
  let myusers = useLoaderData2();
  return /* @__PURE__ */ jsxDEV9("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ jsxDEV9(Box_default, { sx: { marginTop: "1em", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV9(Typography_default, { gutterBottom: !0, variant: "h5", component: "h5", children: "List Users" }, void 0, !1, {
      fileName: "app/routes/users.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/users.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9(Box_default, { sx: { boxShadow: 1 }, children: /* @__PURE__ */ jsxDEV9("div", { style: { height: "100%", width: "100%" }, children: /* @__PURE__ */ jsxDEV9(
      DataGrid2,
      {
        rows: myusers.result,
        columns: columns2,
        initialState: {
          pagination: {
            paginationModel: { page: 0, pageSize: 10 }
          },
          filter: {}
        },
        slots: { toolbar: GridToolbar2 },
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
        lineNumber: 61,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/users.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/users.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/users.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PWLWKBYL.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-FDLQP7LX.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-VEKSHEMC.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5UBEMQGH.js", imports: ["/build/_shared/chunk-ZH6CLX2V.js", "/build/_shared/chunk-LYKHMM2F.js", "/build/_shared/chunk-5QHZVHBB.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-47SPXIMZ.js", imports: ["/build/_shared/chunk-HLAXTVOG.js", "/build/_shared/chunk-M66MLHNC.js", "/build/_shared/chunk-4WPMXPLR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/products": { id: "routes/products", parentId: "root", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/products-4FC3C27V.js", imports: ["/build/_shared/chunk-U6YZZEMC.js", "/build/_shared/chunk-M66MLHNC.js", "/build/_shared/chunk-SY37UZPN.js", "/build/_shared/chunk-4WPMXPLR.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/report": { id: "routes/report", parentId: "root", path: "report", index: void 0, caseSensitive: void 0, module: "/build/routes/report-DFHV4XCF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/sales": { id: "routes/sales", parentId: "root", path: "sales", index: void 0, caseSensitive: void 0, module: "/build/routes/sales-6ISWHVPW.js", imports: ["/build/_shared/chunk-HLAXTVOG.js", "/build/_shared/chunk-SY37UZPN.js", "/build/_shared/chunk-4WPMXPLR.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/users": { id: "routes/users", parentId: "root", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/users-TH7VY4ZS.js", imports: ["/build/_shared/chunk-U6YZZEMC.js", "/build/_shared/chunk-M66MLHNC.js", "/build/_shared/chunk-SY37UZPN.js", "/build/_shared/chunk-4WPMXPLR.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "83dc18f4", hmr: { runtime: "/build/_shared\\chunk-VEKSHEMC.js", timestamp: 1702287677654 }, url: "/build/manifest-83DC18F4.js" };

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
