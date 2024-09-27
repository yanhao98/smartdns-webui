"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, CardActions, CardContent, CardHeader, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { type SvgIconComponent } from '@mui/icons-material';

interface MetricsCardProps {
    title: string;
    isloading?: boolean;
    value: number | string | boolean;
    dataIndex: number;
    bgcolor: string;
    cardata: unknown;
    icon?: SvgIconComponent;
    render?: (v: number | string | boolean, dataIdx: number, cardata: unknown) => React.ReactNode;
}


export function MetricsCard({ title, isloading, icon: Icon, value, bgcolor, render, dataIndex, cardata }: MetricsCardProps): React.JSX.Element {
    const { t } = useTranslation();
    return (
        <Card sx={{
            bgcolor,
            color: "var(--mui-palette-dashboard-color)",
            width: "100%",
        }}>
            <CardHeader title={t(title)} sx={{ padding: "10px", margin: "1px", marginBottom: '-10px' }}
                titleTypographyProps={{
                    fontSize: 14,
                }}
            />
            <CardContent className="metrics-card" sx={{ padding: "10px", paddingTop: "5px", margin: 0, height: "100px", width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                {Icon ? <Icon style={{ fontSize: 96, pointerEvents: "none" }} className="metrics-background-icon" /> : null}
                <Box sx={{
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    width: "100%",
                    color: "var(--mui-palette-dashboard-color)"
                }}>
                    {isloading ? (
                        <Box sx={{
                            color: "var(--mui-palette-dashboard-color)",
                            display: 'flex',
                            justifyContent: 'center',
                            margin: 'auto',
                            width: '100%',
                        }}>
                            <CircularProgress color="inherit" />
                        </Box>
                    ) : (
                        render ? render(value, dataIndex, cardata) : value
                    )}
                </Box>
            </CardContent>
            <CardActions
                sx={{
                    padding: "10px", paddingTop: "5px",
                    justifyContent: "end",
                    margin: 0, marginTop: '-10px', fontSize: "0.8rem"
                }} />
        </Card>
    );
}
