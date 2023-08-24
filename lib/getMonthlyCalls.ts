import { SupabaseClient } from "@supabase/supabase-js";

export default async function getMonthlyCalls(supabase: SupabaseClient, userId: string) {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    try {
        const { data, count, error } = await supabase
            .from('api_calls')
            .select('*', { count: 'exact'})
            .eq('user_id', userId)
            .gte('created_at', oneMonthAgo.toISOString());
        
        if (error) {
            throw error;
        }
        
        return {data, count};
    } catch (err) {
        console.error('Error fetching logs count:', err);
        return {};
    }
}