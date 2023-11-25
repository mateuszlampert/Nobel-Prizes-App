import { Button } from "@mui/material";

export default function SearchButton(props: { disabled: boolean, yearToShow: string, lang: string }) {
    return <Button variant='outlined' disabled={props.disabled} href={`/prizes/${props.lang}/${props.yearToShow}`}>SEARCH</Button>;
  }