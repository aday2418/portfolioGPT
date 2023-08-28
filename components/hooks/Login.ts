import getClientSupabaseSession from "@/lib/getClientSupabaseSession";
import googleLogin from "@/lib/googleLogin";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    return async () => {
        const { data } = await getClientSupabaseSession();

        if(data.session) {
            router.push('/account')
        } else {
            await googleLogin();
        }
    }
}