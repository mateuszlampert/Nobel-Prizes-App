'use client';
import { Box } from '@mui/material';
import data from '../data/prizes.json';
import { numericFormatter } from 'react-number-format';
import { DataGrid, GridColDef, GridValueFormatterParams } from '@mui/x-data-grid';

export default function PrizesTable( props : { year: string, lang: 'en' | 'se' | 'no' } ) {
    return (
        <Box>
            <DataGrid
                rows={data.nobelPrizes.
                    filter((e) => e.awardYear == props.year).
                    map((e, id) => {
                        const tmp = {
                            id: id,
                            awardYear: e.awardYear,
                            category: e.category[props.lang],
                            dateAwarded: e.dateAwarded,
                            prizeAmount: e.prizeAmount
                        };
                        return tmp;
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

let columns: GridColDef[] = [
    { field: 'awardYear', headerName: 'Year', editable: false, flex: 1},
    { field: 'category', headerName: 'Category', editable: false, flex: 1 },
    { field: 'dateAwarded', headerName: 'Date', sortable: true, flex: 1, valueFormatter: ({ value }: GridValueFormatterParams<string>) => value.split('-').reverse().join('.')},
    { field: 'prizeAmount', headerName: 'Prize amount', sortable: true, flex: 1, valueFormatter: ({ value }: GridValueFormatterParams<string>) => numericFormatter(String(value), {thousandSeparator: ' '})}
];

