import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function createRouteSupabase() {
    return createRouteHandlerClient({ cookies })
}