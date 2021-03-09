import { FiImage as icon } from "react-icons/fi"

export default {
  name: "backgroundImage",
  title: "Background Image",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      type: "mainImage",
      title: "Background image",
      description: "a background image",
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
}
