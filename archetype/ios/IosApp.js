import React, { Component } from 'react';
import Reactant from '@reactant/base/Reactant';
import { NativeRouter } from 'react-router-native';
import { Root, StyleProvider } from 'native-base';
import getTheme from '../src/theme/components';
import { material } from '../src/theme/variables';

export default class IosApp extends Component {
  render() {
    return (
      <NativeRouter {...this.props}>
        <StyleProvider style={getTheme(material)}>
          <Root>
            <Reactant {...this.props} />
          </Root>
        </StyleProvider>
      </NativeRouter>
    );
  }
}