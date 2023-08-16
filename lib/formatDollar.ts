import numeral from "numeral"

export default function formatDollar(value: string) {
    return numeral(value).format("$0,0.00");
}