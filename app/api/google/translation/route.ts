import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (request: Request) : Promise<void | Response> => {
  const { input } = await request.json();
  try {
    const response = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {
        ...input
      },
      {
        headers : {
            Authorization : `Bearer ${process.env.T}`,
            "x-goog-user-project" : process.env.googleProject
        }
      }
    );
    return new Response(
      JSON.stringify({
        data: response.data.translations,
      })
    );
  } catch (error) {
    // console.log("error", error);
    return new Response(
        JSON.stringify({
          data: null,
        })
      );
  }
};
