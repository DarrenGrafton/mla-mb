import { BsCardText as icon } from "react-icons/bs";

export default {
  name: "article",
  title: "Article",
  type: "document",
  icon,
  fields: [
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "section" }],
    },

    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "overview",
      title: "overview",
      type: "blockContent",
    },
    {
      name: "image",
      type: "mainImage",
      title: "header image",
      description: "an article header image",
    },
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "overview" },
  },
};
