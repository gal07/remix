/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverDependenciesToBundle: [
    /^rehype.*/,
    /^remark.*/,
    /^unified.*/,
    "@mui/material/Button",
    "@mui/base/composeClasses",
    "@mui/material/ButtonGroup",
    "@mui/material/Alert",
    "@mui/material/Stack",
    "@mui/material/CssBaseline",
    "@mui/material/Box",
    "@mui/material/Container"
  ],
};
