/**
 * Copyright (c) 2019-present Verum Technologies
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
// @ts-ignore
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

let isEnabled = false;

if (canUseDOM) {
  /**
   * Web browsers emulate mouse events (and hover states) after touch events.
   * This code infers when the currently-in-use modality supports hover
   * (including for multi-modality devices) and considers "hover" to be enabled
   * if a mouse movement occurs more than 1 second after the last touch event.
   * This threshold is long enough to account for longer delays between the
   * browser firing touch and mouse events on low-powered devices.
   */
  const HOVER_THRESHOLD_MS = 1000;
  let lastTouchTimestamp = 0;

  const enableHover = () => {
    if (isEnabled || Date.now() - lastTouchTimestamp < HOVER_THRESHOLD_MS) {
      return;
    }
    isEnabled = true;
  };

  const disableHover = () => {
    lastTouchTimestamp = Date.now();
    if (isEnabled) {
      isEnabled = false;
    }
  };

  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('touchmove', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);
}

interface Props {
  children: (hover: boolean) => any | any;
  onHoverIn?: Function;
  onHoverOut?: Function;
}

interface State {
  isHovered: boolean;
  showHover: boolean;
}

class Hoverable extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isHovered: false, showHover: true };
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleGrant = this._handleGrant.bind(this);
    this._handleRelease = this._handleRelease.bind(this);
  }

  _handleMouseEnter(_: any) {
    if (isEnabled && !this.state.isHovered) {
      const { onHoverIn } = this.props;
      if (onHoverIn) onHoverIn();
      this.setState(state => ({ ...state, isHovered: true }));
    }
  }

  _handleMouseLeave(_: any) {
    if (this.state.isHovered) {
      const { onHoverOut } = this.props;
      if (onHoverOut) onHoverOut();
      this.setState(state => ({ ...state, isHovered: false }));
    }
  }

  _handleGrant() {
    this.setState(state => ({ ...state, showHover: false }));
  }

  _handleRelease() {
    this.setState(state => ({ ...state, showHover: true }));
  }

  render() {
    const { children } = this.props;
    const child =
      typeof children === 'function'
        ? children(this.state.showHover && this.state.isHovered)
        : children;

    return React.cloneElement(React.Children.only(child), {
      onMouseEnter: this._handleMouseEnter,
      onMouseLeave: this._handleMouseLeave,
      // prevent hover showing while responder
      onResponderGrant: this._handleGrant,
      onResponderRelease: this._handleRelease,
      // if child is Touchable
      onPressIn: this._handleGrant,
      onPressOut: this._handleRelease,
    });
  }
}

export default Hoverable;
