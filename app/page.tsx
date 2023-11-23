'use client';
import './globals.css'
import data from './data/prizes.json';
import { useState } from 'react';
import {FormControl, InputLabel, Select, MenuItem, Box, ButtonGroup, ToggleButtonGroup, ToggleButton} from '@mui/material'
import Button from '@mui/material-next/Button';
import '@fontsource/roboto';
import Flag from 'react-world-flags';

let years: Set<string> = new Set(data.nobelPrizes.map(el => el.awardYear));
let uniqueYears: string[] = [...years]

export default function Home() {
  const [yearToShow , setYearToShow] = useState('1900')
  const [language, setLanguage] = useState('en')
  const [disabled, setDisabled] = useState(true)

  return (
    <div style={{display: 'flex', width: '50%', alignItems: 'center', justifyContent: 'center', margin: '10% auto', flexDirection: 'column'}}>
    
      <FormControl fullWidth style={{padding:'20px'}}>
        <InputLabel id="year-select-label">Year</InputLabel>        
        <Select
          labelId="year-select"
          id="year-select"
          value={yearToShow}
          label="Year"
          onChange={e => {setYearToShow(e.target.value), setDisabled(false)}}
        >
          {uniqueYears.map((e, id) => <MenuItem key={id} value={e}>{e}</MenuItem>)}
        </Select>
      </FormControl>

      <div style={{padding:'20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'content'}}>
        <ToggleButtonGroup   color="primary"
        value={language}
        exclusive
        onChange={(e, newAlignment) => {if(newAlignment != null) setLanguage(newAlignment)}}
        aria-label="Platform" >
          <ToggleButton value='en'><Flag code='GB' height="16px" /></ToggleButton>
          <ToggleButton value='no'><Flag code='NO' height="16px" /></ToggleButton>
          <ToggleButton value='se'><Flag code='SE' height="16px" /></ToggleButton>
        </ToggleButtonGroup>
      </div>


      <SearchButton disabled={disabled} yearToShow={yearToShow} />
    </div>
  )
}

function SearchButton(props: {disabled : boolean, yearToShow: string}){
  return props.disabled ? <Button variant='outlined' color='primary' disabled>SEARCH</Button> : <Button variant='outlined' color='primary' href={`/prizes/${props.yearToShow}`}>SEARCH</Button>;
}