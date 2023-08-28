import getPaymentLink from "@/lib/getPaymentLink";
import Detail from "./Detail";
import TableDashboard from "./TableDashboard";

export default function PricingDashboard({ tier, stripeId, email, profileId }: { tier: any, stripeId: string | null, email: string | null, profileId: string}){
    const { name, monthly_cost } = tier;

    const proLink = getPaymentLink("pro", profileId, email);
    const enthusiastLink = getPaymentLink("enthusiast", profileId, email)



    return(
        <div className="relative flex justify-center gap-14">
          <TableDashboard title="Starter" productId="bd894579-2c58-4064-9caa-a320db63295d" price="Free" selected={name == "Starter"} upgrade={monthly_cost < 0} stripeId={stripeId} >
            <Detail bulletPoint="200 messages /mo"/>
            <Detail bulletPoint="Resume size 600 words"/>
          </TableDashboard>
          <TableDashboard title="Pro" productId="eee02112-a196-442d-871c-3f98b7bdc603" price="$4.99" selected={name == "Pro"} upgrade={monthly_cost < 4.99} link={proLink} stripeId={stripeId} >
            <Detail bulletPoint="2,000 messages /mo"/>
            <Detail bulletPoint="Resume size 1,000 words"/>
            <Detail bulletPoint="Remove Chatfolio Branding"/>
            <Detail bulletPoint="Customize Chatbot"/>
          </TableDashboard>
          <TableDashboard title="Enthusiast" productId="1d1b458e-e00d-4b2a-b1d8-b7e2f71398dc" price="$19.99" selected={name == "Enthusiast"} upgrade={monthly_cost < 19.99} link={enthusiastLink} stripeId={stripeId} >
            <Detail bulletPoint="10,000 messages /mo"/>
            <Detail bulletPoint="Resume size 2,000 words"/>
            <Detail bulletPoint="Remove Chatfolio Branding"/>
            <Detail bulletPoint="Customize Chatbot"/>
          </TableDashboard>
        </div>
    )
}