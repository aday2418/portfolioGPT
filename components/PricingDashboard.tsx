import getPaymentLink from "@/lib/getPaymentLink";
import Detail from "./Detail";
import TableDashboard from "./TableDashboard";

export default function PricingDashboard({ tier, stripeId, email, profileId }: { tier: any, stripeId: string | null, email: string | null, profileId: string}){
    const { name, monthly_cost } = tier;

    const proLink = getPaymentLink("pro", profileId, email);
    const enthusiastLink = getPaymentLink("enthusiast", profileId, email)

    console.log(proLink);

    return(
        <div className="relative flex justify-center gap-14">
          <TableDashboard color={1} title="Starter" price="Free" selected={name == "Starter"} upgrade={monthly_cost < 0} >
            <Detail bulletPoint="200 messages /mo"/>
            <Detail bulletPoint="Resume size 600 words"/>
          </TableDashboard>
          <TableDashboard color={2} title="Pro" price="$4.99" selected={name == "Pro"} upgrade={monthly_cost < 4.99} link={proLink} >
            <Detail bulletPoint="2,000 messages /mo"/>
            <Detail bulletPoint="Resume size 1,000 words"/>
            <Detail bulletPoint="Remove Chatfolio Branding"/>
            <Detail bulletPoint="Chatbot Personalities"/>
          </TableDashboard>
          <TableDashboard color={3} title="Enthusiast" price="$19.99" selected={name == "Enthusiast"} upgrade={monthly_cost < 19.99} link={enthusiastLink} >
            <Detail bulletPoint="10,000 messages /mo"/>
            <Detail bulletPoint="Resume size 2,000 words"/>
            <Detail bulletPoint="Remove Chatfolio Branding"/>
            <Detail bulletPoint="Chatbot Personalities"/>
            <Detail bulletPoint="Custom Themes"/>
          </TableDashboard>
        </div>
    )
}