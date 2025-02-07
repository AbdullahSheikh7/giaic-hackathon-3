import { Rule } from "sanity";

const productSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "priceWithoutDiscount",
      title: "Price Without Discount",
      type: "number",
      initialValue: null,
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
      initialValue: null,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "inventory",
      title: "Inventory",
      type: "number",
      validation: (Rule: Rule) => Rule.required().min(0),
    },
  ],
};

export default productSchema;
