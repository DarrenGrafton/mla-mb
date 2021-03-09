import { BsCardText as icon } from "react-icons/bs"

export default {
  name: "Faq",
  title: "Faq",
  type: "object",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "overview",
      title: "overview",
      type: "blockContent",
    },
    {
      name: "image",
      type: "mainImage",
      title: "small icon/image",
      description: "a small image to go with the FAQ info",
    },
  ],
  preview: {
    select: { title: "title", media: "image", subtitle: "overview" },
  },
}
