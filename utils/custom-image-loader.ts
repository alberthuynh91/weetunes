// Manipulate image src to use correct size and image format based on screen size and device
export const customLoader = (props): string => {
  const { src, width } = props;
  const newSrc = src.split('/');
  // TODO: Correctly set image format based on browser support.
  newSrc[newSrc.length - 1] = `${width}x${width}bb.webp`;
  return newSrc.join('/');
};