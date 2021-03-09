import { TiSortNumerically as icon } from "react-icons/ti"

export default {
  name: "FAQOrder",
  title: "FAQ Order",
  type: "document",
  icon,
  fields: [
    {
      name: "faqorder",
      title: "FAQ Order",
      type: "array",
      of: [{ type: "Faq" }],
    },
  ],
}
