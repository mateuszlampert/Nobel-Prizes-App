'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import data from '../../data/prizes.json';
import { useState } from 'react'
import '@fontsource/roboto'
import {FormControl, InputLabel, Select, MenuItem, Grid} from '@mui/material'
import Button from '@mui/material-next/Button';
import HomeIcon from '@mui/icons-material/Home';
import { numericFormatter } from 'react-number-format'

let years: Set<string> = new Set(data.nobelPrizes.map(el => el.awardYear));
let uniqueYears: string[] = [...years]


export default function Page({ params }: { params: { year: string}}) {
    const [yearToShow, setYearToShow] = useState(params.year);
    const [disabled, setDisabled] = useState(true);
    const [language, setLanguage] = useState('en')

    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10% auto', flexDirection: 'column'}}>
                <FormControl style={{width: '50%', textAlign: 'center', paddingBottom: '20px'}}>
                    <InputLabel id="year-select-label">Year</InputLabel>
                    <Select
                        labelId="year-select"
                        id="year-select"
                        value={yearToShow}
                        label="Year"
                        onChange={e => {setYearToShow(e.target.value); setDisabled(false)}}
                    >
                        {uniqueYears.map((e, id) => <MenuItem key={id} value={e}>{e}</MenuItem>)}
                    </Select>
                </FormControl>

                <Table year={yearToShow}/>

                <Button variant='outlined' color='primary' href={`/`} startIcon={<HomeIcon />}>
                    HOME
                </Button>
            </div>
        </>
    )}


let columns: GridColDef[] = [
{
    field: 'awardYear',
    headerName: 'Year',
    width: 150,
    editable: false,
    sortable: false
},
{
    field: 'category',
    headerName: 'Category',
    width: 200,
    editable: false
},
{
    field: 'categoryFullName',
    headerName: 'Category full name',
    width: 320,
},
{
    field: 'dateAwarded',
    headerName: 'Date',
    width: 150,
    sortable: true,
},
{
    field: 'prizeAmount',
    headerName: 'Prize amount',
    width: 150,
    sortable: true,
}
];

function Table(props: {year: string}) {
    return (
        <Box sx={{paddingBottom: '20px'}}>
            <DataGrid
                rows={data.nobelPrizes.
                    filter((e) => e.awardYear == props.year).
                    map((e, id) => {
                        return {id: id, awardYear: e.awardYear, category: e.category.en, categoryFullName: e.categoryFullName.en, dateAwarded: e.dateAwarded?.split('-').reverse().join('.'), prizeAmount: numericFormatter(String(e.prizeAmount), {thousandSeparator:' '})}
                })}
                columns={columns}
                disableRowSelectionOnClick
                hideFooterPagination
                disableColumnMenu
                hideFooter
            />
        </Box>
    );
}