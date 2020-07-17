import React from 'react';
import { Badge } from './Badge';
import { Icon } from './Icon';
export default {
  title: 'Design System|Badge',
  component: Badge
};
export var allBadges = function allBadges() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    status: "positive"
  }, "Positive"), /*#__PURE__*/React.createElement(Badge, {
    status: "negative"
  }, "Negative"), /*#__PURE__*/React.createElement(Badge, {
    status: "neutral"
  }, "Neutral"), /*#__PURE__*/React.createElement(Badge, {
    status: "error"
  }, "Error"), /*#__PURE__*/React.createElement(Badge, {
    status: "warning"
  }, "Warning"), /*#__PURE__*/React.createElement(Badge, {
    status: "positive"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "facehappy",
    inline: true
  }), "with icon"));
};
allBadges.story = {
  name: 'all badges'
};
export var positive = function positive() {
  return /*#__PURE__*/React.createElement(Badge, {
    status: "positive"
  }, "Positive");
};
export var negative = function negative() {
  return /*#__PURE__*/React.createElement(Badge, {
    status: "negative"
  }, "Negative");
};
export var warning = function warning() {
  return /*#__PURE__*/React.createElement(Badge, {
    status: "warning"
  }, "Warning");
};
export var neutral = function neutral() {
  return /*#__PURE__*/React.createElement(Badge, {
    status: "neutral"
  }, "Neutral");
};
export var error = function error() {
  return /*#__PURE__*/React.createElement(Badge, {
    status: "error"
  }, "Error");
};
export var withIcon = function withIcon() {
  return /*#__PURE__*/React.createElement(Badge, {
    status: "warning"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: "check",
    inline: true
  }), "with icon");
};
withIcon.story = {
  name: 'with icon'
};