'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Options({ stripeId }: {stripeId: string | null}) {
    const [confirm, setConfirm] = useState<boolean>(false);
    const router = useRouter();

    const handleConfirm = () => {
        setConfirm(true);
    }

    const handleNevermind = () => {
        setConfirm(false);
    }

    const cancelSubscription = async () => {
        await fetch("/api/cancelSubscription", {
            method: "POST"
        })

        router.refresh();
    }

    return (
        <div className="flex gap-6 py-[20px]">
            <Link href="/account/plans">
                <button className="bg-blue-500 rounded-lg py-[5px] px-[10px] text-white font-semibold smoothe hover:bg-blue-600">Change</button>
            </Link>
            {stripeId && (
                confirm ? (
                    <div className="flex gap-2">
                        <button onClick={handleNevermind} className="py-[5px] px-[10px] text-gray-200 smoothe underline">Nevermind</button>
                        <button onClick={cancelSubscription} className="bg-red-600 rounded-lg py-[5px] px-[10px] text-white font-semibold smoothe hover:bg-red-700">Confirm Cancellation</button>
                    </div>
                ) : (
                    <button onClick={handleConfirm} className="bg-red-500 rounded-lg py-[5px] px-[10px] text-white font-semibold smoothe hover:bg-red-600">Cancel Subscription</button>
                )
            )}
        </div>
    )
}