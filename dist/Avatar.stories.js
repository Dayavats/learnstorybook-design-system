import React from 'react';
import { Avatar } from './Avatar';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
export var knobs = function knobs() {
  return /*#__PURE__*/React.createElement(Avatar, {
    loading: boolean('Loading'),
    size: select('Size', ['tiny', 'small', 'medium', 'large']),
    username: "Dominic Nguyen",
    src: "https://avatars2.githubusercontent.com/u/263385"
  });
};
knobs.story = {
  decorators: [withKnobs]
};
export var standard = function standard() {
  return /*#__PURE__*/React.createElement(Avatar, {
    size: "large",
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554"
  });
};
export var sizes = function sizes() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Avatar, {
    size: "large",
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554"
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "medium",
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554"
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "small",
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554"
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "tiny",
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554"
  }));
};
sizes.story = {
  parameters: {
    docs: {
      storyDescription: '4 sizes are supported.'
    }
  }
};
export var initials = function initials() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Avatar, {
    username: "Tom Coleman"
  }), /*#__PURE__*/React.createElement(Avatar, {
    username: "Dominic Nguyen"
  }), /*#__PURE__*/React.createElement(Avatar, {
    username: "Kyle Suss"
  }), /*#__PURE__*/React.createElement(Avatar, {
    username: "Michael Shilman"
  }));
};
export var loading = function loading() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Avatar, {
    size: "large",
    loading: true
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "medium",
    loading: true
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "small",
    loading: true
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "tiny",
    loading: true
  }));
};
export var large = function large() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Avatar, {
    loading: true,
    size: "large"
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "large",
    username: "Tom Coleman"
  }), /*#__PURE__*/React.createElement(Avatar, {
    size: "large",
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554"
  }));
};
export default {
  title: 'Design System|Avatar',
  parameters: {
    component: Avatar,
    componentSubtitle: 'Displays an image that represents a user or organization'
  }
};