// @ts-check
import { GraphQLEnumType } from "gatsby/graphql"

export const ImageFormatType = new GraphQLEnumType({
  name: `ContentfulImageFormat`,
  values: {
    NO_CHANGE: { value: `` },
    AUTO: { value: `` },
    JPG: { value: `jpg` },
    PNG: { value: `png` },
    WEBP: { value: `webp` },
  },
})

export const ImageLayoutType = new GraphQLEnumType({
  name: `ContentfulImageLayout`,
  values: {
    FIXED: { value: `fixed` },
    FULL_WIDTH: { value: `fullWidth` },
    CONSTRAINED: { value: `constrained` },
  },
})

export const ImagePlaceholderType = new GraphQLEnumType({
  name: `ContentfulImagePlaceholder`,
  values: {
    DOMINANT_COLOR: { value: `dominantColor` },
    TRACED_SVG: { value: `tracedSVG` },
    BLURRED: { value: `blurred` },
    NONE: { value: `none` },
  },
})

export const ImageResizingBehavior = new GraphQLEnumType({
  name: `ImageResizingBehavior`,
  values: {
    NO_CHANGE: {
      value: ``,
    },
    PAD: {
      value: `pad`,
      description: `Same as the default resizing, but adds padding so that the generated image has the specified dimensions.`,
    },

    CROP: {
      value: `crop`,
      description: `Crop a part of the original image to match the specified size.`,
    },
    FILL: {
      value: `fill`,
      description: `Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled.`,
    },
    THUMB: {
      value: `thumb`,
      description: `When used in association with the f parameter below, creates a thumbnail from the image based on a focus area.`,
    },
    SCALE: {
      value: `scale`,
      description: `Scale the image regardless of the original aspect ratio.`,
    },
  },
})

export const ImageCropFocusType = new GraphQLEnumType({
  name: `ContentfulImageCropFocus`,
  values: {
    TOP: { value: `top` },
    TOP_LEFT: { value: `top_left` },
    TOP_RIGHT: { value: `top_right` },
    BOTTOM: { value: `bottom` },
    BOTTOM_RIGHT: { value: `bottom_left` },
    BOTTOM_LEFT: { value: `bottom_right` },
    RIGHT: { value: `right` },
    LEFT: { value: `left` },
    FACE: { value: `face` },
    FACES: { value: `faces` },
    CENTER: { value: `center` },
  },
})
