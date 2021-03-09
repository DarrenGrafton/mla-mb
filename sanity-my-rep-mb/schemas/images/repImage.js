import { RiTreasureMapLine as icon } from "react-icons/ri"

export default {
  name: "repImage",
  title: "Rep Image",
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
      title: "headshot",
      description: "A picture of the Rep",
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
}
