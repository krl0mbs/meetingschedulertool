import './table.css';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native-web';
import { render } from '@testing-library/react';

// Creates the table object. Mouse over a property to see what it does
const Table = (props) => (
  <div
    className={props.className}
    style={{
      display: props.container ? 'flex' : 'block',
      justifyContent: props.justifyContent || 'flex-start',
      flexDirection: props.flexDirection || 'row',
      flexGrow: props.flexGrow || 0,
      flexBasis: props.flexBasis || 'auto',
      flexShrink: props.flexShrink || 1,
      flexWrap: props.flexWrap || 'nowrap',
      flex: props.flex || '0 1 auto',
      alignItems: props.alignItems || 'stretch',
      margin: props.margin || '0',
      padding: props.padding || '0',
      width: props.width || 'auto',
      height: props.height || 'auto',
      maxWidth: props.maxWidth || 'none',
      backgroundColor: props.backgroundColor || 'none'
    }}
  >
    {props.children}
  </div>
)

export default Table;