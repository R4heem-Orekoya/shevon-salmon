import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { webhookSecret } from "@/sanity/env";

export async function POST(req: NextRequest) {
   try {
      const { body, isValidSignature } = await parseBody<{
         _type: string;
         slug?: string | undefined;
      }>(req, webhookSecret);

      if (!isValidSignature) {
         return new Response("Invalid Signature", { status: 401 });
      }

      if (!body?._type) {
         return new Response("Bad Request", { status: 400 });
      }

      revalidateTag(body._type)
      
      //revalidate the youtube videos displayed on th homePage
      if(body._type == "homePage") revalidateTag("yt-video")

      return NextResponse.json({
         status: 200,
         revalidated: true,
         now: Date.now(),
         body,
      });
   } catch (error: any) {
      console.error(error)
      return new Response(error.message, { status: 500 });
   }
}