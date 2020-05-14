import { default as format } from "date-fns/format";

export default ({ date }: { date: any }) => {
    return format(new Date(date), "MMMM D, YYYY");
};
