import { BsCardText as icon } from "react-icons/bs";

export default {
  name: "client",
  title: "Client",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "overview",
      title: "Overview",
      type: "blockContent",
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
      name: "image",
      type: "mainImage",
      title: "logo",
      description: "an article header image",
    },
    {
      name: "closed",
      type: "boolean",
      title: "Closed",
      description: "Hidden from the front page",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "overview", media: "image" },
  },
};
