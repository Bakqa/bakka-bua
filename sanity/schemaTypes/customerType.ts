import { defineType, defineField } from "sanity";
import { UserIcon } from "@sanity/icons";
import { emit } from "process";

export const customerType = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  icon: UserIcon,
  groups: [
    {
      name: "customer",
      title: "Customer Details",
      default: true,
    },
    { name: "stripe", title: "Stripe Details" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "details",
      description: "Full name of the customer",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "details",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      group: "details",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clerkUserId",
      title: "Clerk User ID",
      type: "string",
      group: "details",
      description: "The ID of the user in Clerk",
    }),
    defineField({
      name: "stripeCustomerId",
      type: "string",
      group: "stripe",
      readOnly: true,
      description: "The ID of the customer in Stripe",
      validation: (Rule) =>
        Rule.required().error("Stripe Customer ID is required"),
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      group: "details",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: "name",
      email: "email",
      stripeCustomerId: "stripeCustomerId",
    },
    prepare(selection) {
      const { title, email, stripeCustomerId } = selection;
      return {
        title: title || email || "Unnamed Customer",
        subtitle: stripeCustomerId
          ? `Stripe ID: ${stripeCustomerId}`
          : undefined,
      };
    },
  },
  orderings: [
    {
      name: "createdAtDesc",
      title: "Created At (Descending)",
      by: [{ field: "createdAt", direction: "desc" }],
    },
    {
      title: "email (A-Z)",
      name: "emailAsc",
      by: [{ field: "email", direction: "asc" }],
    },
  ],
});
