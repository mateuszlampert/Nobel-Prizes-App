'use client';
import * as React from 'react';
import data from '../../../data/prizes.json';
import { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem, Grid, Button, Container, Stack } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PrizesTable from '@/app/components/PrizesTable';
import styles from '@/app/styles.module.css';


let years: Set<string> = new Set(data.nobelPrizes.map(el => el.awardYear));
let uniqueYears: string[] = [...years]


export default function Page({ params }: { params: { lang: 'en' | 'no' | 'se', year: string } }) {
    const [yearToShow, setYearToShow] = useState(params.year);

    return (
        <div className={styles.page}>
            <Container maxWidth='md' sx={{ mt: '10' }}>
                <Stack spacing={2}>
                <PrizesTable year={yearToShow} lang={params.lang} />
                <Button fullWidth className={styles.center} sx={{ m: 'auto' }} variant='outlined' href={`/`} endIcon={<HomeIcon />}>
                    Home
                </Button>
                </Stack>
            </Container>
        </div>
    )
}


