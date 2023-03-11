export const customLoader = (props): string => {
  const { src, width } = props;
  const newSrc = src.split('/');
  // TODO: Correctly set image format based on browser support.
  newSrc[newSrc.length - 1] = `${width}x${width}bb.webp`;
  return newSrc.join('/');
};