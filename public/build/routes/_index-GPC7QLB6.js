import {
  _extends,
  _objectWithoutPropertiesLoose,
  alpha,
  capitalize_default,
  chainPropTypes,
  clsx_default,
  composeClasses,
  createStack,
  darken,
  defaultTheme_default,
  elementTypeAcceptingRef_default,
  generateUtilityClass,
  generateUtilityClasses,
  getValidReactChildren,
  identifier_default,
  integerPropType_default,
  keyframes,
  lighten,
  refType_default,
  require_prop_types,
  resolveProps,
  rootShouldForwardProp,
  styled_default,
  useEventCallback_default,
  useForkRef,
  useIsFocusVisible,
  useThemeProps,
  useTheme_default
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@mui/material/Button/Button.js
var React8 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@mui/material/ButtonBase/ButtonBase.js
var React5 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/@mui/material/utils/useForkRef.js
"use client";
var useForkRef_default = useForkRef;

// node_modules/@mui/material/utils/useEventCallback.js
"use client";
var useEventCallback_default2 = useEventCallback_default;

// node_modules/@mui/material/utils/useIsFocusVisible.js
"use client";
var useIsFocusVisible_default = useIsFocusVisible;

// node_modules/@mui/material/ButtonBase/TouchRipple.js
var React4 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react = __toESM(require_react());
var TransitionGroupContext_default = import_react.default.createContext(null);

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types = __toESM(require_prop_types());
var import_react3 = __toESM(require_react());

// node_modules/react-transition-group/esm/utils/ChildMapping.js
var import_react2 = __toESM(require_react());
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && (0, import_react2.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children)
    import_react2.Children.map(children, function(c) {
      return c;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return (0, import_react2.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!(0, import_react2.isValidElement)(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, import_react2.isValidElement)(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = (0, import_react2.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = (0, import_react2.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, import_react2.isValidElement)(prevChild)) {
      children[key] = (0, import_react2.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return /* @__PURE__ */ import_react3.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ import_react3.default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, /* @__PURE__ */ import_react3.default.createElement(Component, props, children));
  };
  return TransitionGroup2;
}(import_react3.default.Component);
TransitionGroup.propTypes = true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// node_modules/@mui/material/ButtonBase/Ripple.js
var React3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
"use client";
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = React3.useState(false);
  const rippleClassName = clsx_default(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx_default(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  React3.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      className: childClassName
    })
  });
}
true ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types2.default.object.isRequired,
  className: import_prop_types2.default.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: import_prop_types2.default.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: import_prop_types2.default.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: import_prop_types2.default.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: import_prop_types2.default.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: import_prop_types2.default.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: import_prop_types2.default.number,
  /**
   * exit delay
   */
  timeout: import_prop_types2.default.number.isRequired
} : void 0;
var Ripple_default = Ripple;

// node_modules/@mui/material/ButtonBase/touchRippleClasses.js
var touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
var touchRippleClasses_default = touchRippleClasses;

// node_modules/@mui/material/ButtonBase/TouchRipple.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
"use client";
var _excluded = ["center", "classes", "className"];
var _ = (t) => t;
var _t;
var _t2;
var _t3;
var _t4;
var DURATION = 550;
var DELAY_RIPPLE = 80;
var enterKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
var exitKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
var pulsateKeyframe = keyframes(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
var TouchRippleRoot = styled_default("span", {
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
});
var TouchRippleRipple = styled_default(Ripple_default, {
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
}) => theme.transitions.easing.easeInOut);
var TouchRipple = /* @__PURE__ */ React4.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const [ripples, setRipples] = React4.useState([]);
  const nextKey = React4.useRef(0);
  const rippleCallback = React4.useRef(null);
  React4.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = React4.useRef(false);
  const startTimer = React4.useRef(0);
  const startTimerCommit = React4.useRef(null);
  const container = React4.useRef(null);
  React4.useEffect(() => {
    return () => {
      if (startTimer.current) {
        clearTimeout(startTimer.current);
      }
    };
  }, []);
  const startCommit = React4.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TouchRippleRipple, {
      classes: {
        ripple: clsx_default(classes.ripple, touchRippleClasses_default.ripple),
        rippleVisible: clsx_default(classes.rippleVisible, touchRippleClasses_default.rippleVisible),
        ripplePulsate: clsx_default(classes.ripplePulsate, touchRippleClasses_default.ripplePulsate),
        child: clsx_default(classes.child, touchRippleClasses_default.child),
        childLeaving: clsx_default(classes.childLeaving, touchRippleClasses_default.childLeaving),
        childPulsate: clsx_default(classes.childPulsate, touchRippleClasses_default.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = React4.useCallback((event = {}, options = {}, cb = () => {
  }) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
      // For test purposes
    } = options;
    if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if ((event == null ? void 0 : event.type) === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event != null && event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE);
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = React4.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = React4.useCallback((event, cb) => {
    clearTimeout(startTimer.current);
    if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  React4.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TouchRippleRoot, _extends({
    className: clsx_default(touchRippleClasses_default.root, classes.root, className),
    ref: container
  }, other, {
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TransitionGroup_default, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
true ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: import_prop_types3.default.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: import_prop_types3.default.object,
  /**
   * @ignore
   */
  className: import_prop_types3.default.string
} : void 0;
var TouchRipple_default = TouchRipple;

// node_modules/@mui/material/ButtonBase/buttonBaseClasses.js
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
var buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
var buttonBaseClasses_default = buttonBaseClasses;

// node_modules/@mui/material/ButtonBase/ButtonBase.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
"use client";
var _excluded2 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
var useUtilityClasses = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
var ButtonBaseRoot = styled_default("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
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
});
var ButtonBase = /* @__PURE__ */ React5.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action,
    centerRipple = false,
    children,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const buttonRef = React5.useRef(null);
  const rippleRef = React5.useRef(null);
  const handleRippleRef = useForkRef_default(rippleRef, touchRippleRef);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible_default();
  const [focusVisible, setFocusVisible] = React5.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  React5.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const [mountedState, setMountedState] = React5.useState(false);
  React5.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;
  React5.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple && mountedState) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, mountedState]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback_default2((event) => {
      if (eventCallback) {
        eventCallback(event);
      }
      const ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  const handleMouseDown = useRippleHandler("start", onMouseDown);
  const handleContextMenu = useRippleHandler("stop", onContextMenu);
  const handleDragLeave = useRippleHandler("stop", onDragLeave);
  const handleMouseUp = useRippleHandler("stop", onMouseUp);
  const handleMouseLeave = useRippleHandler("stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler("start", onTouchStart);
  const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  const handleTouchMove = useRippleHandler("stop", onTouchMove);
  const handleBlur = useRippleHandler("stop", (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback_default2((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  const keydownRef = React5.useRef(false);
  const handleKeyDown = useEventCallback_default2((event) => {
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback_default2((event) => {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type === void 0 ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleRef = useForkRef_default(ref, focusVisibleRef, buttonRef);
  if (true) {
    React5.useEffect(() => {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join("\n"));
      }
    }, [enableTouchRipple]);
  }
  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx_default(classes.root, className),
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
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TouchRipple_default, _extends({
        ref: handleRippleRef,
        center: centerRipple
      }, TouchRippleProps))
    ) : null]
  }));
});
true ? ButtonBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: refType_default,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: import_prop_types4.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types4.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types4.default.object,
  /**
   * @ignore
   */
  className: import_prop_types4.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: elementTypeAcceptingRef_default,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types4.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types4.default.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: import_prop_types4.default.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: import_prop_types4.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types4.default.string,
  /**
   * @ignore
   */
  href: import_prop_types4.default.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: import_prop_types4.default.elementType,
  /**
   * @ignore
   */
  onBlur: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onContextMenu: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onDragLeave: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types4.default.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onKeyUp: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onMouseLeave: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onMouseUp: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onTouchEnd: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onTouchMove: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onTouchStart: import_prop_types4.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types4.default.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: import_prop_types4.default.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.shape({
    current: import_prop_types4.default.shape({
      pulsate: import_prop_types4.default.func.isRequired,
      start: import_prop_types4.default.func.isRequired,
      stop: import_prop_types4.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["button", "reset", "submit"]), import_prop_types4.default.string])
} : void 0;
var ButtonBase_default = ButtonBase;

// node_modules/@mui/material/ButtonBase/index.js
"use client";

// node_modules/@mui/material/Button/buttonClasses.js
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
var buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
var buttonClasses_default = buttonClasses;

// node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js
var React6 = __toESM(require_react());
var ButtonGroupContext = /* @__PURE__ */ React6.createContext({});
if (true) {
  ButtonGroupContext.displayName = "ButtonGroupContext";
}
var ButtonGroupContext_default = ButtonGroupContext;

// node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.js
var React7 = __toESM(require_react());
var ButtonGroupButtonContext = /* @__PURE__ */ React7.createContext(void 0);
if (true) {
  ButtonGroupButtonContext.displayName = "ButtonGroupButtonContext";
}
var ButtonGroupButtonContext_default = ButtonGroupButtonContext;

// node_modules/@mui/material/Button/Button.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
"use client";
var _excluded3 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
var useUtilityClasses2 = (ownerState) => {
  const {
    color,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, `${variant}${capitalize_default(color)}`, `size${capitalize_default(size)}`, `${variant}Size${capitalize_default(size)}`, color === "inherit" && "colorInherit", disableElevation && "disableElevation", fullWidth && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${capitalize_default(size)}`],
    endIcon: ["endIcon", `iconSize${capitalize_default(size)}`]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
var commonIconStyles = (ownerState) => _extends({}, ownerState.size === "small" && {
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
});
var ButtonRoot = styled_default(ButtonBase_default, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize_default(ownerState.color)}`], styles[`size${capitalize_default(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize_default(ownerState.size)}`], ownerState.color === "inherit" && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;
  const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
  return _extends({}, theme.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": _extends({
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
    "&:active": _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[8]
    }),
    [`&.${buttonClasses_default.focusVisible}`]: _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[6]
    }),
    [`&.${buttonClasses_default.disabled}`]: _extends({
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
});
var ButtonStartIcon = styled_default("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.startIcon, styles[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === "small" && {
  marginLeft: -2
}, commonIconStyles(ownerState)));
var ButtonEndIcon = styled_default("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.endIcon, styles[`iconSize${capitalize_default(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === "small" && {
  marginRight: -2
}, commonIconStyles(ownerState)));
var Button = /* @__PURE__ */ React8.forwardRef(function Button2(inProps, ref) {
  const contextProps = React8.useContext(ButtonGroupContext_default);
  const buttonGroupButtonContextPositionClassName = React8.useContext(ButtonGroupButtonContext_default);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useThemeProps({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children,
    color = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const ownerState = _extends({}, props, {
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  });
  const classes = useUtilityClasses2(ownerState);
  const startIcon = startIconProp && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  });
  const endIcon = endIconProp && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || "";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ButtonRoot, _extends({
    ownerState,
    className: clsx_default(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx_default(classes.focusVisible, focusVisibleClassName),
    ref,
    type
  }, other, {
    classes,
    children: [startIcon, children, endIcon]
  }));
});
true ? Button.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types5.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types5.default.object,
  /**
   * @ignore
   */
  className: import_prop_types5.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), import_prop_types5.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types5.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types5.default.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: import_prop_types5.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types5.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types5.default.bool,
  /**
   * Element placed after the children.
   */
  endIcon: import_prop_types5.default.node,
  /**
   * @ignore
   */
  focusVisibleClassName: import_prop_types5.default.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types5.default.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: import_prop_types5.default.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["small", "medium", "large"]), import_prop_types5.default.string]),
  /**
   * Element placed before the children.
   */
  startIcon: import_prop_types5.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  /**
   * @ignore
   */
  type: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["button", "reset", "submit"]), import_prop_types5.default.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["contained", "outlined", "text"]), import_prop_types5.default.string])
} : void 0;
var Button_default = Button;

// node_modules/@mui/material/Button/index.js
"use client";

// node_modules/@mui/material/ButtonGroup/ButtonGroup.js
var React9 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@mui/material/ButtonGroup/buttonGroupClasses.js
function getButtonGroupUtilityClass(slot) {
  return generateUtilityClass("MuiButtonGroup", slot);
}
var buttonGroupClasses = generateUtilityClasses("MuiButtonGroup", ["root", "contained", "outlined", "text", "disableElevation", "disabled", "firstButton", "fullWidth", "vertical", "grouped", "groupedHorizontal", "groupedVertical", "groupedText", "groupedTextHorizontal", "groupedTextVertical", "groupedTextPrimary", "groupedTextSecondary", "groupedOutlined", "groupedOutlinedHorizontal", "groupedOutlinedVertical", "groupedOutlinedPrimary", "groupedOutlinedSecondary", "groupedContained", "groupedContainedHorizontal", "groupedContainedVertical", "groupedContainedPrimary", "groupedContainedSecondary", "lastButton", "middleButton"]);
var buttonGroupClasses_default = buttonGroupClasses;

// node_modules/@mui/material/ButtonGroup/ButtonGroup.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
"use client";
var _excluded4 = ["children", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "disableRipple", "fullWidth", "orientation", "size", "variant"];
var overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [{
    [`& .${buttonGroupClasses_default.grouped}`]: styles.grouped
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles[`grouped${capitalize_default(ownerState.orientation)}`]
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles[`grouped${capitalize_default(ownerState.variant)}`]
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles[`grouped${capitalize_default(ownerState.variant)}${capitalize_default(ownerState.orientation)}`]
  }, {
    [`& .${buttonGroupClasses_default.grouped}`]: styles[`grouped${capitalize_default(ownerState.variant)}${capitalize_default(ownerState.color)}`]
  }, {
    [`& .${buttonGroupClasses_default.firstButton}`]: styles.firstButton
  }, {
    [`& .${buttonGroupClasses_default.lastButton}`]: styles.lastButton
  }, {
    [`& .${buttonGroupClasses_default.middleButton}`]: styles.middleButton
  }, styles.root, styles[ownerState.variant], ownerState.disableElevation === true && styles.disableElevation, ownerState.fullWidth && styles.fullWidth, ownerState.orientation === "vertical" && styles.vertical];
};
var useUtilityClasses3 = (ownerState) => {
  const {
    classes,
    color,
    disabled,
    disableElevation,
    fullWidth,
    orientation,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant, orientation === "vertical" && "vertical", fullWidth && "fullWidth", disableElevation && "disableElevation"],
    grouped: ["grouped", `grouped${capitalize_default(orientation)}`, `grouped${capitalize_default(variant)}`, `grouped${capitalize_default(variant)}${capitalize_default(orientation)}`, `grouped${capitalize_default(variant)}${capitalize_default(color)}`, disabled && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return composeClasses(slots, getButtonGroupUtilityClass, classes);
};
var ButtonGroupRoot = styled_default("div", {
  name: "MuiButtonGroup",
  slot: "Root",
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({
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
  [`& .${buttonGroupClasses_default.grouped}`]: _extends({
    minWidth: 40,
    "&:hover": _extends({}, ownerState.variant === "contained" && {
      boxShadow: "none"
    })
  }, ownerState.variant === "contained" && {
    boxShadow: "none"
  }),
  [`& .${buttonGroupClasses_default.firstButton},& .${buttonGroupClasses_default.middleButton}`]: _extends({}, ownerState.orientation === "horizontal" && {
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
    borderColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : alpha(theme.palette[ownerState.color].main, 0.5)
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
    "&:hover": _extends({}, ownerState.variant === "outlined" && ownerState.orientation === "horizontal" && {
      borderRightColor: "currentColor"
    }, ownerState.variant === "outlined" && ownerState.orientation === "vertical" && {
      borderBottomColor: "currentColor"
    })
  }),
  [`& .${buttonGroupClasses_default.lastButton},& .${buttonGroupClasses_default.middleButton}`]: _extends({}, ownerState.orientation === "horizontal" && {
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
}));
var ButtonGroup = /* @__PURE__ */ React9.forwardRef(function ButtonGroup2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiButtonGroup"
  });
  const {
    children,
    className,
    color = "primary",
    component = "div",
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    disableRipple = false,
    fullWidth = false,
    orientation = "horizontal",
    size = "medium",
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const ownerState = _extends({}, props, {
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
  });
  const classes = useUtilityClasses3(ownerState);
  const context = React9.useMemo(() => ({
    className: classes.grouped,
    color,
    disabled,
    disableElevation,
    disableFocusRipple,
    disableRipple,
    fullWidth,
    size,
    variant
  }), [color, disabled, disableElevation, disableFocusRipple, disableRipple, fullWidth, size, variant, classes.grouped]);
  const validChildren = getValidReactChildren(children);
  const childrenCount = validChildren.length;
  const getButtonPositionClassName = (index) => {
    const isFirstButton = index === 0;
    const isLastButton = index === childrenCount - 1;
    if (isFirstButton && isLastButton) {
      return "";
    }
    if (isFirstButton) {
      return classes.firstButton;
    }
    if (isLastButton) {
      return classes.lastButton;
    }
    return classes.middleButton;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ButtonGroupRoot, _extends({
    as: component,
    role: "group",
    className: clsx_default(classes.root, className),
    ref,
    ownerState
  }, other, {
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ButtonGroupContext_default.Provider, {
      value: context,
      children: validChildren.map((child, index) => {
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ButtonGroupButtonContext_default.Provider, {
          value: getButtonPositionClassName(index),
          children: child
        }, index);
      })
    })
  }));
});
true ? ButtonGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types6.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types6.default.object,
  /**
   * @ignore
   */
  className: import_prop_types6.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types6.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types6.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types6.default.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: import_prop_types6.default.bool,
  /**
   * If `true`, the button keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types6.default.bool,
  /**
   * If `true`, the button ripple effect is disabled.
   * @default false
   */
  disableRipple: import_prop_types6.default.bool,
  /**
   * If `true`, the buttons will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types6.default.bool,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: import_prop_types6.default.oneOf(["horizontal", "vertical"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["small", "medium", "large"]), import_prop_types6.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["contained", "outlined", "text"]), import_prop_types6.default.string])
} : void 0;
var ButtonGroup_default = ButtonGroup;

// node_modules/@mui/material/ButtonGroup/index.js
"use client";

// node_modules/@mui/material/Alert/Alert.js
var React20 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// node_modules/@mui/material/Paper/Paper.js
var React11 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());

// node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
var getOverlayAlpha_default = getOverlayAlpha;

// node_modules/@mui/material/styles/useTheme.js
var React10 = __toESM(require_react());
"use client";
function useTheme() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React10.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
}

// node_modules/@mui/material/Paper/paperClasses.js
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
var paperClasses = generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);

// node_modules/@mui/material/Paper/Paper.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
"use client";
var _excluded5 = ["className", "component", "elevation", "square", "variant"];
var useUtilityClasses4 = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
var PaperRoot = styled_default("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === "elevation" && styles[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${(theme.vars || theme).palette.divider}`
  }, ownerState.variant === "elevation" && _extends({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha_default(ownerState.elevation))})`
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
});
var Paper = /* @__PURE__ */ React11.forwardRef(function Paper2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPaper"
  });
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses4(ownerState);
  if (true) {
    const theme = useTheme();
    if (theme.shadows[elevation] === void 0) {
      console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join("\n"));
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  }, other));
});
true ? Paper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types7.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types7.default.object,
  /**
   * @ignore
   */
  className: import_prop_types7.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types7.default.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: chainPropTypes(integerPropType_default, (props) => {
    const {
      elevation,
      variant
    } = props;
    if (elevation > 0 && variant === "outlined") {
      return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
    }
    return null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: import_prop_types7.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: import_prop_types7.default.oneOfType([import_prop_types7.default.oneOf(["elevation", "outlined"]), import_prop_types7.default.string])
} : void 0;
var Paper_default = Paper;

// node_modules/@mui/material/Paper/index.js
"use client";

// node_modules/@mui/material/Alert/alertClasses.js
function getAlertUtilityClass(slot) {
  return generateUtilityClass("MuiAlert", slot);
}
var alertClasses = generateUtilityClasses("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
var alertClasses_default = alertClasses;

// node_modules/@mui/material/IconButton/IconButton.js
var React12 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());

// node_modules/@mui/material/IconButton/iconButtonClasses.js
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
var iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]);
var iconButtonClasses_default = iconButtonClasses;

// node_modules/@mui/material/IconButton/IconButton.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
"use client";
var _excluded6 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];
var useUtilityClasses5 = (ownerState) => {
  const {
    classes,
    disabled,
    color,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", color !== "default" && `color${capitalize_default(color)}`, edge && `edge${capitalize_default(edge)}`, `size${capitalize_default(size)}`]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
var IconButtonRoot = styled_default(ButtonBase_default, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "default" && styles[`color${capitalize_default(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize_default(ownerState.edge)}`], styles[`size${capitalize_default(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
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
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
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
  const palette = (_palette = (theme.vars || theme).palette) == null ? void 0 : _palette[ownerState.color];
  return _extends({}, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && ownerState.color !== "default" && _extends({
    color: palette == null ? void 0 : palette.main
  }, !ownerState.disableRipple && {
    "&:hover": _extends({}, palette && {
      backgroundColor: theme.vars ? `rgba(${palette.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(palette.main, theme.palette.action.hoverOpacity)
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
});
var IconButton = /* @__PURE__ */ React12.forwardRef(function IconButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiIconButton"
  });
  const {
    edge = false,
    children,
    className,
    color = "default",
    disabled = false,
    disableFocusRipple = false,
    size = "medium"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const ownerState = _extends({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  });
  const classes = useUtilityClasses5(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(IconButtonRoot, _extends({
    className: clsx_default(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    ref,
    ownerState
  }, other, {
    children
  }));
});
true ? IconButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: chainPropTypes(import_prop_types8.default.node, (props) => {
    const found = React12.Children.toArray(props.children).some((child) => /* @__PURE__ */ React12.isValidElement(child) && child.props.onClick);
    if (found) {
      return new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join("\n"));
    }
    return null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types8.default.object,
  /**
   * @ignore
   */
  className: import_prop_types8.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types8.default.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types8.default.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: import_prop_types8.default.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: import_prop_types8.default.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: import_prop_types8.default.oneOf(["end", "start", false]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["small", "medium", "large"]), import_prop_types8.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object])
} : void 0;
var IconButton_default = IconButton;

// node_modules/@mui/material/IconButton/index.js
"use client";

// node_modules/@mui/material/internal/svg-icons/SuccessOutlined.js
var React15 = __toESM(require_react());

// node_modules/@mui/material/utils/createSvgIcon.js
var React14 = __toESM(require_react());

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var React13 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/@mui/material/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);

// node_modules/@mui/material/SvgIcon/SvgIcon.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
"use client";
var _excluded7 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
var useUtilityClasses6 = (ownerState) => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color !== "inherit" && `color${capitalize_default(color)}`, `fontSize${capitalize_default(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
var SvgIconRoot = styled_default("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== "inherit" && styles[`color${capitalize_default(ownerState.color)}`], styles[`fontSize${capitalize_default(ownerState.fontSize)}`]];
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
});
var SvgIcon = /* @__PURE__ */ React13.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children,
    className,
    color = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const hasSvgAsChild = /* @__PURE__ */ React13.isValidElement(children) && children.type === "svg";
  const ownerState = _extends({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses6(ownerState);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(SvgIconRoot, _extends({
    as: component,
    className: clsx_default(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
true ? SvgIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types9.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types9.default.object,
  /**
   * @ignore
   */
  className: import_prop_types9.default.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), import_prop_types9.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types9.default.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["inherit", "large", "medium", "small"]), import_prop_types9.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types9.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types9.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types9.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types9.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types9.default.string
} : void 0;
SvgIcon.muiName = "SvgIcon";
var SvgIcon_default = SvgIcon;

// node_modules/@mui/material/SvgIcon/index.js
"use client";

// node_modules/@mui/material/utils/createSvgIcon.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
"use client";
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SvgIcon_default, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return /* @__PURE__ */ React14.memo(/* @__PURE__ */ React14.forwardRef(Component));
}

// node_modules/@mui/material/internal/svg-icons/SuccessOutlined.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
"use client";
var SuccessOutlined_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined");

// node_modules/@mui/material/internal/svg-icons/ReportProblemOutlined.js
var React16 = __toESM(require_react());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
"use client";
var ReportProblemOutlined_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined");

// node_modules/@mui/material/internal/svg-icons/ErrorOutline.js
var React17 = __toESM(require_react());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
"use client";
var ErrorOutline_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline");

// node_modules/@mui/material/internal/svg-icons/InfoOutlined.js
var React18 = __toESM(require_react());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
"use client";
var InfoOutlined_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined");

// node_modules/@mui/material/internal/svg-icons/Close.js
var React19 = __toESM(require_react());
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
"use client";
var Close_default = createSvgIcon(/* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");

// node_modules/@mui/material/Alert/Alert.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
"use client";
var _excluded8 = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"];
var useUtilityClasses7 = (ownerState) => {
  const {
    variant,
    color,
    severity,
    classes
  } = ownerState;
  const slots = {
    root: ["root", `${variant}${capitalize_default(color || severity)}`, `${variant}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return composeClasses(slots, getAlertUtilityClass, classes);
};
var AlertRoot = styled_default(Paper_default, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize_default(ownerState.color || ownerState.severity)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const getColor = theme.palette.mode === "light" ? darken : lighten;
  const getBackgroundColor = theme.palette.mode === "light" ? lighten : darken;
  const color = ownerState.color || ownerState.severity;
  return _extends({}, theme.typography.body2, {
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
  }, color && ownerState.variant === "filled" && _extends({
    fontWeight: theme.typography.fontWeightMedium
  }, theme.vars ? {
    color: theme.vars.palette.Alert[`${color}FilledColor`],
    backgroundColor: theme.vars.palette.Alert[`${color}FilledBg`]
  } : {
    backgroundColor: theme.palette.mode === "dark" ? theme.palette[color].dark : theme.palette[color].main,
    color: theme.palette.getContrastText(theme.palette[color].main)
  }));
});
var AlertIcon = styled_default("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (props, styles) => styles.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
});
var AlertMessage = styled_default("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (props, styles) => styles.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
});
var AlertAction = styled_default("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
});
var defaultIconMapping = {
  success: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SuccessOutlined_default, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ReportProblemOutlined_default, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ErrorOutline_default, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(InfoOutlined_default, {
    fontSize: "inherit"
  })
};
var Alert = /* @__PURE__ */ React20.forwardRef(function Alert2(inProps, ref) {
  var _ref, _slots$closeButton, _ref2, _slots$closeIcon, _slotProps$closeButto, _slotProps$closeIcon;
  const props = useThemeProps({
    props: inProps,
    name: "MuiAlert"
  });
  const {
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
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const ownerState = _extends({}, props, {
    color,
    severity,
    variant
  });
  const classes = useUtilityClasses7(ownerState);
  const AlertCloseButton = (_ref = (_slots$closeButton = slots.closeButton) != null ? _slots$closeButton : components.CloseButton) != null ? _ref : IconButton_default;
  const AlertCloseIcon = (_ref2 = (_slots$closeIcon = slots.closeIcon) != null ? _slots$closeIcon : components.CloseIcon) != null ? _ref2 : Close_default;
  const closeButtonProps = (_slotProps$closeButto = slotProps.closeButton) != null ? _slotProps$closeButto : componentsProps.closeButton;
  const closeIconProps = (_slotProps$closeIcon = slotProps.closeIcon) != null ? _slotProps$closeIcon : componentsProps.closeIcon;
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(AlertRoot, _extends({
    role,
    elevation: 0,
    ownerState,
    className: clsx_default(classes.root, className),
    ref
  }, other, {
    children: [icon !== false ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AlertIcon, {
      ownerState,
      className: classes.icon,
      children: icon || iconMapping[severity] || defaultIconMapping[severity]
    }) : null, /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AlertMessage, {
      ownerState,
      className: classes.message,
      children
    }), action != null ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AlertAction, {
      ownerState,
      className: classes.action,
      children: action
    }) : null, action == null && onClose ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AlertAction, {
      ownerState,
      className: classes.action,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AlertCloseButton, _extends({
        size: "small",
        "aria-label": closeText,
        title: closeText,
        color: "inherit",
        onClick: onClose
      }, closeButtonProps, {
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AlertCloseIcon, _extends({
          fontSize: "small"
        }, closeIconProps))
      }))
    }) : null]
  }));
});
true ? Alert.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: import_prop_types10.default.node,
  /**
   * The content of the component.
   */
  children: import_prop_types10.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types10.default.object,
  /**
   * @ignore
   */
  className: import_prop_types10.default.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: import_prop_types10.default.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["error", "info", "success", "warning"]), import_prop_types10.default.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: import_prop_types10.default.shape({
    CloseButton: import_prop_types10.default.elementType,
    CloseIcon: import_prop_types10.default.elementType
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
  componentsProps: import_prop_types10.default.shape({
    closeButton: import_prop_types10.default.object,
    closeIcon: import_prop_types10.default.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: import_prop_types10.default.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: import_prop_types10.default.shape({
    error: import_prop_types10.default.node,
    info: import_prop_types10.default.node,
    success: import_prop_types10.default.node,
    warning: import_prop_types10.default.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: import_prop_types10.default.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: import_prop_types10.default.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: import_prop_types10.default.oneOf(["error", "info", "success", "warning"]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: import_prop_types10.default.shape({
    closeButton: import_prop_types10.default.object,
    closeIcon: import_prop_types10.default.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: import_prop_types10.default.shape({
    closeButton: import_prop_types10.default.elementType,
    closeIcon: import_prop_types10.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["filled", "outlined", "standard"]), import_prop_types10.default.string])
} : void 0;
var Alert_default = Alert;

// node_modules/@mui/material/Alert/index.js
"use client";

// node_modules/@mui/material/Stack/Stack.js
var import_prop_types11 = __toESM(require_prop_types());
"use client";
var Stack = createStack({
  createStyledComponent: styled_default("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  }),
  useThemeProps: (inProps) => useThemeProps({
    props: inProps,
    name: "MuiStack"
  })
});
true ? Stack.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types11.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types11.default.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types11.default.arrayOf(import_prop_types11.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types11.default.object]),
  /**
   * Add an element between each child.
   */
  divider: import_prop_types11.default.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.number, import_prop_types11.default.string])), import_prop_types11.default.number, import_prop_types11.default.object, import_prop_types11.default.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: import_prop_types11.default.bool
} : void 0;
var Stack_default = Stack;

// node_modules/@mui/material/Stack/index.js
"use client";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1701960380586.5266";
}
var meta = () => {
  return [{
    title: "New Remix App"
  }, {
    name: "description",
    content: "Welcome to Remix!"
  }];
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.8"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Welcome to Remix" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", children: "Hello world" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", href: "https://remix.run/tutorials/blog", rel: "noreferrer", children: "15m Quickstart Blog Tutorial" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", href: "https://remix.run/tutorials/jokes", rel: "noreferrer", children: "Deep Dive Jokes App Tutorial" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonGroup_default, { variant: "contained", "aria-label": "outlined primary button group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { children: "One" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { children: "Two" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { children: "Three" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack_default, { sx: {
      width: "100%"
    }, spacing: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { severity: "error", children: "This is an error alert \u2014 check it out!" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { severity: "warning", children: "This is a warning alert \u2014 check it out!" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { severity: "info", children: "This is an info alert \u2014 check it out!" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { severity: "success", children: "This is a success alert \u2014 check it out!" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-GPC7QLB6.js.map
