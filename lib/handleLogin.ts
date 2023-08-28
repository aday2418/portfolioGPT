import { useRouter } from "next/router";
import getClientSupabaseSession from "./getClientSupabaseSession";
import googleLogin from "./googleLogin";

export default function handleLogin() {
    const router = useRouter();

    return async () => {
        const { data } = await getClientSupabaseSession();

        if(data) {
            router.push('/account')
        } else {
            await googleLogin();
        }
    }
}