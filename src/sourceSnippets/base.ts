import { Placeholders } from '../types';

/**
 * React 导入语句
 */
export const react = ['import React from "react"'];

/**
 * react 导入语句 - 携带类型
 */
export const reactPropTypes = ["import React from 'react'", "import PropTypes from 'prop-types'"];

export const reactComponent = ["import React, { Component } from 'react'"];

export const reactPureComponent = ["import React, { PureComponent } from 'react'"];

export const reactWithMemo = ["import React, { memo } from 'react'"];

/**
 * react 内部组件
 */
export const innerComponent = ['  return (', `    <div>${Placeholders.FirstTab}</div>`, '  )'];

/**
 * react 内部组件
 */
export const innerComponentReturn = [
  '  render() {',
  '    return (',
  `      <div>${Placeholders.FirstTab}</div>`,
  '    )',
  '  }',
];

/**
 * export default
 */
export const exportDefault = ['', `export default ${Placeholders.FileName}`];
