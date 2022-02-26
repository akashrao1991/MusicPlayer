import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Platform } from 'react-native';
import { colors } from '../../common/colors';

export const AppBar = () => (
  <Appbar.Header style = {styles.item}>
     <Appbar.Content title="Music Player" />
  </Appbar.Header>
);


const styles = StyleSheet.create ({
   item: {
      backgroundColor : colors.APP_BACKGROUND
   }
})