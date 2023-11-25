'use client';
import data from './data/prizes.json';
import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box, ButtonGroup, ToggleButtonGroup, ToggleButton, Button, Container, Stack, Typography } from '@mui/material';
import Flag from 'react-world-flags';
import styles from '@/app/styles.module.css';
import SearchButton from '@/app/components/SearchButton.tsx'


const years: Set<string> = new Set(data.nobelPrizes.map(el => el.awardYear));
const uniqueYears: string[] = [...years]


export default function Home() {
  const [yearToShow, setYearToShow] = useState('1900')
  const [language, setLanguage] = useState('en')
  const [disabled, setDisabled] = useState(true)

  return (
    <div className={styles.page}>
      <Container maxWidth='sm'>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Typography variant="subtitle1" display="block" gutterBottom align='center'>
            Select year and language you are interested in:
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="year-select-label">Year</InputLabel>
            <Select
              labelId="year-select"
              id="year-select"
              value={yearToShow}
              label="Year"
              onChange={e => { setYearToShow(e.target.value), setDisabled(false) }}
            >
              {uniqueYears.map((e, id) => <MenuItem key={id} value={e}>{e}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="year-select-label">Year</InputLabel>
            <Select
              labelId="language-select"
              id="language-select"
              value={language}
              label="Language"
              onChange={e => { setLanguage(e.target.value) }}
            >
              <MenuItem value={'en'}>English&nbsp;<Flag code='GB' height='16' /></MenuItem>
              <MenuItem value={'se'}>Swedish&nbsp;<Flag code='SE' height='16' /></MenuItem>
              <MenuItem value={'no'}>Norwegian&nbsp;<Flag code='NO' height='16' /></MenuItem>
            </Select>
          </FormControl>

          <SearchButton disabled={disabled} yearToShow={yearToShow} lang={language} />
        </Stack>
      </Container>
    </div>
  )
}