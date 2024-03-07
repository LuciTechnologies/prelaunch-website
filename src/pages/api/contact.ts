import type { APIRoute } from "astro";

import { type ContactFormFields } from "@/schemas/contact";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = (await request.json()) as ContactFormFields;

  console.log({ data });

  /**
   *  call GCP with data
   */
  return new Response(
    JSON.stringify({
      message: "Thank you!",
    })
  );
};
