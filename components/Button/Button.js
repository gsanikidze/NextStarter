// @flow
import React, { type Node } from 'react';

type Props = {
  children: Node,
  id?: string
}

const Button = ({ children, id }: Props) => (
  <button id={id}>{children}</button>
);

Button.defaultProps = {
  id: '',
};

export default Button;
