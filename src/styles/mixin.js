export const mixins = {
  // width, height
  size: (width = 'auto', height = 'auto') => `
    width: ${width};
    height: ${height};
  `,

  // flexbox
  flexBox: (direction = 'row', align = 'stretch', justify = 'start') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // position
  position: (position, top, right, bottom, left) => `
    position: ${position};
    ${top !== undefined ? `top: ${top};` : ''}
    ${right !== undefined ? `right: ${right};` : ''}
    ${bottom !== undefined ? `bottom: ${bottom};` : ''}
    ${left !== undefined ? `left: ${left};` : ''}
 `,
};
