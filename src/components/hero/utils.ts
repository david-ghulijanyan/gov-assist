const mapAlignment = (align: HeroProps['align']) => {
  switch (align) {
    case 'start': return 'flex-start';
    case 'center': return 'center';
    case 'end': return 'flex-end';
    case 'stretch': return 'stretch';
    default: return 'center';
  }
}

const mapJustify = (justify: HeroProps['justify']) => {
  switch (justify) {
    case 'start': return 'flex-start';
    case 'center': return 'center';
    case 'end': return 'flex-end';
    case 'between': return 'space-between';
    case 'around': return 'space-around';
    default: return 'center';
  }
};

export {
	mapAlignment,
	mapJustify
};
