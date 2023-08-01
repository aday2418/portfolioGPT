import Detail from "./Detail";
import Table from "./Table";

export default function Pricing(){
    return(
        <div className="relative flex justify-center gap-14">
          <Table color={1} title="Starter" price="Free">
            <Detail bulletPoint="200 messages /mo"/>
            <Detail bulletPoint="Resume size 600 words"/>
          </Table>
          <Table color={2} title="Pro" price="$4.99">
            <Detail bulletPoint="2,000 messages /mo"/>
            <Detail bulletPoint="Resume size 1,000 words"/>
            <Detail bulletPoint="Remove Chatfolio Branding"/>
            <Detail bulletPoint="Chatbot Personalities"/>
          </Table>
          <Table color={3} title="Enthusiast" price="$19.99">
            <Detail bulletPoint="10,000 messages /mo"/>
            <Detail bulletPoint="Resume size 2,000 words"/>
            <Detail bulletPoint="Remove Chatfolio Branding"/>
            <Detail bulletPoint="Chatbot Personalities"/>
            <Detail bulletPoint="Custom Themes"/>
          </Table>
        </div>
    )
}