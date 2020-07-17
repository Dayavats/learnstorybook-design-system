import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
export default {
  title: 'Welcome',
  component: Welcome
};
export var ToStorybook = function ToStorybook() {
  return /*#__PURE__*/React.createElement(Welcome, {
    showApp: linkTo('Button')
  });
};
ToStorybook.story = {
  name: 'to Storybook'
};