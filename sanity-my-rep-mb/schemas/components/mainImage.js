export default {
  name: "mainImage",
  title: "Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessiblity.",
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
};
