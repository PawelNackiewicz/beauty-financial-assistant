import React, { FC } from 'react';
import { clsx } from 'clsx';
import './styles.css'

type ColorVariant = 'default' | 'primary' | 'secondary' | 'error' | 'success'

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body1: "p",
  body2: "p",
} as const satisfies Record<string, keyof HTMLElementTagNameMap>

interface TypographyProps {
  variant?: keyof typeof variantsMapping;
  color?: ColorVariant
  children?: React.ReactNode,
  className?: string
}

export const Typography: FC<TypographyProps> = ({ variant = 'body2', color = 'default', children, className }) => {
  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <Component
      className={clsx({
        [`typography--variant-${variant}`]: variant,
        [`text-${color}`]: color,
      }, className)}
    >
      {children}
    </Component>
  );
}
