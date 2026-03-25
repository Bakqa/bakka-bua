import { BasketIcon } from "@sanity/icons";
import { defineType, defineArrayMember, defineField } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  groups: [
    {
      name: "orderDetails",
      title: "Order Details",
      default: true,
    },
    {
      name: "customerDetails",
      title: "Customer Details",
    },
    { name: "paymentDetails", title: "Payment Details" },
  ],
  fields: [
    defineField({
      name: "orderId",
      type: "string",
      group: "orderDetails",
      readOnly: true,
      validation: (Rule) => Rule.required().error("Order ID is required"),
    }),
    defineField({
      name: "customerName",
      type: "string",
      group: "customerDetails",
      validation: (Rule) => Rule.required().error("Customer name is required"),
    }),
    defineField({
      name: "items",
      type: "array",
      group: "orderDetails",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              type: "reference",
              to: [{ type: "product" }],
            }),
            defineField({
              name: "quantity",
              type: "number",
              validation: (Rule) =>
                Rule.min(1).error("Quantity must be at least 1"),
            }),
          ],
        }),
      ],
    }),
  ],
});
