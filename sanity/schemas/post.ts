import { defineField, defineType } from "sanity"

export const postSchema = defineType({
  name: "post",
  title: "Blog Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "(Optional) Leave blank to auto-generate from the blog post.",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Practice", value: "Practice" },
          { title: "Wellbeing", value: "Wellbeing" },
          { title: "Studio", value: "Studio" },
          { title: "Events & Workshops", value: "Events & Workshops" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Chan",
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
  orderings: [
    {
      title: "Newest first",
      name: "createdAtDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
})
