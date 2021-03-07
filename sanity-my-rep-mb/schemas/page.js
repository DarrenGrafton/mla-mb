import { BsCardText as icon } from "react-icons/bs"

export default {
  name: "page",
  title: "Page",
  type: "document",
  icon,
  fields: [
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
      title: "Overview",
      type: "blockContent",
    },
    {
      name: "image",
      type: "mainImage",
      title: "page image",
      description: "The highest resolution",
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
}
