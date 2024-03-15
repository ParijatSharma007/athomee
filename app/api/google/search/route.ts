import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (request: Request) : Promise<void | Response> => {
  const { input } = await request.json();
  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/autocomplete/json",
      {
        params: {
          input,
          key:
            process.env.NEXT_GOOGLE_API_KEY ||
            "AIzaSyCgvwEKTZN22ulQLF-epOmseyPaLj7J3tU",
        },
      }
    );
    return new Response(
      JSON.stringify({
        data: response.data.predictions,
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
