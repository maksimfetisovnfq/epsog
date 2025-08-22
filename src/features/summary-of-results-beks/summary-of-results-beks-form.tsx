import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import {GlobalStyles, Tabs} from "@mui/material";
import Tab from '@mui/material/Tab';
import {type SyntheticEvent, useState} from "react";
import {NoHeaderTable, Table} from '../../ui/table/table';
import Divider from "@mui/material/Divider";
import {Button} from "../../ui/button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {VerticalBarChart} from "../../ui/charts/verticalBarChart";
import {StackedBarChart} from "../../ui/charts/stackedBarChart";
import {IncomeChart} from "../../ui/charts/incomeChart/income-chart.tsx";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const SummaryOfResultsBeksForm = () => {
    const [value, setValue] = useState(0);
    const [innerTabValue, setInnerTabValue] = useState(0);

    const dataSource = [
        {
            key: '1',
            name: 'Įrenginio galia ir talpa',
            technology: "Lorem",
        },
        {
            key: '2',
            name: 'Aukštyn',
            technology: "Lorem",
        },
        {
            key: '3',
            name: 'Žemyn',
            technology: "Lorem",
        },
        {
            key: '4',
            name: 'Į abi puses',
            technology: "Lorem",
        },
        {
            key: '5',
            name: 'Projekto investicijos CAPEX',
            technology: "Lorem",
        },
        {
            key: '6',
            name: 'Projekto sąnaudos OPEX',
            technology: "Lorem",
        },
        {
            key: '7',
            name: 'Pasirinktos minimalios siūlymų (bids) ribos  ',
            technology: "Lorem",
        },
    ];

    const columns = [
        {
            title: 'Vertinama technologija',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'BEKS technologija',
            dataIndex: 'technology',
            key: 'technology',
            render: (item) => `${item.technology}`,
        },
    ];

    const secondDataSource = [
        {
            key: '2',
            name: 'Potencialios sąnaudos per metus (vidurkis)',
            value: 50,
        },
        {
            key: '1',
            name: 'Potencialios pajamos per metus (vidurkis)',
            value: 20,
        },
        {
            key: '3',
            name: 'Potencialus pelnas/nuostolis per metus (vidurkis)',
            value: 70,
        },
    ];

    const secondBarChartLabels = secondDataSource.map(item => item.name);
    const secondBarChartDataset = [
        {
            label: 'Metiniai rezultatai',
            data: secondDataSource.map((item, idx, arr) => {
                if (idx === 1 && arr.length > 0) {
                    const firstNum = arr[0].value;
                    return [firstNum, firstNum + item.value] as [number, number];
                }
                return item.value;
            }),
            backgroundColor: [
                '#FF7070',
                '#87E6B9',
                '#B9D7E1'
            ],
        },
    ];

    const stackedBarDataSource = [
        {key: '0', name: '0', valueB: -1.9},
        {key: '1', name: '1', valueB: -1.8},
        {key: '2', name: '2', valueB: -1.7},
        {key: '3', name: '3', valueB: -2},
        {key: '4', name: '4', valueB: -0.4},
        {key: '5', name: '5', valueA: -0.2},
        {key: '6', name: '6', valueA: 1.2},
        {key: '7', name: '7', valueA: 1.7},
        {key: '8', name: '8', valueA: 2},
        {key: '9', name: '9', valueA: 1.4},
        {key: '10', name: '10', valueA: 1.7},
    ];

    const incomeDataSource = [
        {key: '0', name: 'perkama DA', valueB: -100},
        {key: '1', name: 'parduodama DA', valueA: 200},
        {key: '2', name: 'aFRRuCAP', valueA: 100},
        {key: '3', name: 'aFRRd CAP', valueA: 440},
        {key: '4', name: 'mFRRu CAP', valueA: 230},
        {key: '5', name: 'mFRRd CAP', valueB: -200},
        {key: '6', name: 'perkama ID', valueB: -50},
        {key: '7', name: 'parduodama ID', valueB: -500},
        {key: '8', name: 'aFRRu', valueA: 140},
        {key: '9', name: 'aFRRd', valueA: 240},
        {key: '10', name: 'mFRRu', valueB: -240},
        {key: '11', name: 'mFRRd', valueB: -50},
    ];

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleInnerTabChange = (_: SyntheticEvent, newValue: number) => {
        setInnerTabValue(newValue);
    };

    return (
        <div style={{fontFamily: 'Arial', width: '760px'}}>
            <GlobalStyles
                styles={{
                    '.MuiContainer-root': {
                        padding: '0px !important',
                    },
                    'body, *': {
                        fontWeight: 400,
                    },
                    '.MuiTableCell-root': {
                        border: '1px solid #CFD5DA',
                    },
                    '.MuiTabs-list': {
                        marginBottom: '56px',
                    },
                    '.MuiTable-root': {
                        marginBottom: '16px',
                    },


                }}
            />

            <div style={{
                fontSize: '32px',
                marginBottom: '24px',
            }}>
                Rezultatai
            </div>

            <div style={{
                backgroundColor: '#F5F7F8',
                display: 'flex',
                height: '122px',
                color: '#3F576B',
                width: '768px',
                marginBottom: '24px',
            }}>

                <div style={{margin: '16px 16px 0 16px',}}>
                    <InfoOutlineIcon/>
                </div>

                <div style={{marginTop: '20px', fontSize: '14px'}}>
                    <div style={{marginBottom: '12px'}}>
                        Skaičiavimas vykdomas dviem optimizaciniais etapais.
                    </div>

                    <div style={{marginBottom: '12.5px', width: '696px'}}>
                        Pirmuoju etapu, atsižvelgiant į techninius apribojimus, įvertinamas įrenginio dalyvavimas dienos
                        prieš rinkoje bei balansavimo pajėgumų aukcione.
                    </div>

                    <div>
                        Daugiau
                    </div>
                </div>
            </div>

            <div style={{
                borderRadius: '100px',
                border: '1px solid #CFD5DA',
                width: '467px',
                height: '56px',
                fontSize: '16px',
                paddingTop: '8px',
                marginBottom: '48px',
            }}>
                <Tabs value={value}
                      onChange={handleChange}
                      textColor="secondary"
                      indicatorColor="secondary"
                      sx={{
                          '& .MuiTab-root': {
                              textTransform: 'none',
                              marginLeft: '8px',
                              padding: '10px 20px',
                              color: '#0F2D46',
                              backgroundColor: 'white',
                              borderRadius: '100px',
                              transition: 'all 0.2s',
                          },
                          '& .Mui-selected': {
                              color: 'white !important',
                              backgroundColor: '#0F2D46',
                          },
                          '& .MuiTabs-indicator': {
                              backgroundColor: 'transparent',
                          },

                      }}
                >
                    <Tab label="Apžvalga" {...a11yProps(0)} />
                    <Tab label="Rinkų duomenys" {...a11yProps(1)} />
                    <Tab label="Ekonominis vertinimas" {...a11yProps(2)} />
                </Tabs>

                <CustomTabPanel value={value} index={0}>
                    <div style={{
                        fontSize: '24px',
                        marginBottom: '24px',
                    }}>
                        Summary
                    </div>

                    <Table columns={columns} dataSource={dataSource}/>

                    <div style={{
                        fontSize: '18px',
                        marginBottom: '16px',
                        marginTop: '32px',
                    }}>
                        Metiniai rezultatai
                    </div>

                    <NoHeaderTable dataSource={secondDataSource}/>

                    <div style={{width: '768px', border: '1px solid #CFD5DA'}}>
                        <VerticalBarChart labels={secondBarChartLabels} datasets={secondBarChartDataset}/>
                    </div>

                    <Divider style={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

                    <div style={{
                        fontSize: '18px',
                        marginBottom: '16px',
                        marginTop: '65px',
                    }}>
                        Supplemented with graphs
                    </div>

                    <div style={{border: '1px solid #CFD5DA', width: '768px', marginBottom: '16px'}}>
                        <div style={{
                            fontSize: '16px',
                            marginBottom: '16px',
                            marginTop: '16px',
                            fontWeight: 700,
                            textAlign: 'center',
                        }}>
                            Dabartinės grynosios vertės analizė rezultatai
                        </div>

                        <div style={{width: '768px'}}>
                            <StackedBarChart
                                labels={stackedBarDataSource.map(item => item.name)}
                                datasets={[
                                    {
                                        label: 'Bottom',
                                        data: stackedBarDataSource.map(item => item.valueB ?? 0),
                                    },
                                    {
                                        label: 'Top',
                                        data: stackedBarDataSource.map(item => item.valueA ?? 0),
                                    },
                                ]}
                            />

                            <div style={{
                                backgroundColor: '#F5F7F8',
                                display: 'flex',
                                color: '#3F576B',
                                width: '736px',
                                margin: '16px',
                            }}>

                                <div style={{margin: '16px 16px 0 16px',}}>
                                    <InfoOutlineIcon/>
                                </div>

                                <div style={{marginTop: '20px', fontSize: '14px'}}>
                                    <div style={{marginBottom: '12.5px', width: '668px'}}>
                                        <strong style={{fontWeight: '700'}}>
                                            Grynosios dabartinės vertės analizė 
                                        </strong>
                                        (angl. Net Present Value analysis, trump.
                                        <strong style={{fontWeight: '700'}}> NPV</strong>) - tai finansinis vertinimo
                                        metodas, kuris leidžia įvertinti investicijos
                                        vertę per visą jos gyvavimo laikotarpį, atsižvelgiant
                                        į pinigų vertės kitimą laikui bėgant.
                                    </div>

                                    <ul style={{paddingLeft: 0}}>
                                        Ką rodo analizė:
                                        <li style={{marginLeft: 27, marginTop: 8}}>
                                            <strong style={{fontWeight: '700'}}> Teigiama NPV reikšmė </strong> 
                                            - projektas turėtų būti finansiškai naudingas.
                                        </li>
                                        <li style={{marginLeft: 27, marginTop: 8}}>
                                            <strong style={{fontWeight: '700'}}>Neigiama NPV reikšmė </strong> 
                                            - projektas gali būti nuostolingas arba neefektyvus.
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{border: '1px solid #CFD5DA', width: '768px', marginBottom: '16px'}}>
                        <div style={{
                            fontSize: '16px',
                            marginBottom: '16px',
                            marginTop: '16px',
                            fontWeight: 700,
                            textAlign: 'center',
                        }}>
                            Rinkose sugeneruotų pajamų bei sąnaudų palyginimas per produktus
                        </div>

                        <div style={{width: '768px'}}>
                            <IncomeChart
                                labels={incomeDataSource.map(item => item.name)}
                                datasets={[
                                    {
                                        label: 'Bottom',
                                        data: incomeDataSource.map(item => item.valueB ?? 0),
                                    },
                                    {
                                        label: 'Top',
                                        data: incomeDataSource.map(item => item.valueA ?? 0),
                                    },
                                ]}
                            />
                        </div>
                    </div>

                    <div style={{border: '1px solid #CFD5DA', width: '768px', marginBottom: '16px'}}>
                        <div style={{
                            fontSize: '16px',
                            marginBottom: '16px',
                            marginTop: '16px',
                            fontWeight: 700,
                            textAlign: 'center',
                        }}>
                            Rinkų produktai
                        </div>

                        <div style={{width: '768px'}}>
                            <StackedBarChart
                                labels={stackedBarDataSource.map(item => item.name)}
                                datasets={[
                                    {
                                        label: 'Bottom',
                                        data: stackedBarDataSource.map(item => item.valueB ?? 0),
                                    },
                                    {
                                        label: 'Top',
                                        data: stackedBarDataSource.map(item => item.valueA ?? 0),
                                    },
                                ]}
                            />
                        </div>
                    </div>

                    <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

                    <div style={{
                        marginTop: '24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '768px',
                        height: '96px'
                    }}>
                        <Button type="submit" startIcon={<ArrowBackIcon/>} style={{width: '261px'}}>
                            Koreguoti duomenys


                        </Button>
                        <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>
                            Susisiekti
                        </Button>
                    </div>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>

                    <div style={{
                        fontSize: '24px',
                        marginBottom: '24px',
                    }}>
                        Rinkos duomenys
                    </div>

                    <Tabs
                        value={innerTabValue}
                        onChange={handleInnerTabChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        sx={{
                            marginBottom: '24px',
                            width: '768px',
                            height: '48px',
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                marginLeft: '8px',
                                padding: '10px 20px',
                                color: '#0F2D46',
                                backgroundColor: 'white',
                                borderRadius: '100px',
                                transition: 'all 0.2s',
                                border: '1px solid #CFD5DA',
                            },
                            '& .Mui-selected': {
                                color: 'white !important',
                                backgroundColor: '#0F2D46',
                                border: 'none',
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        <Tab label="Balansavimo pajėgumų rinka" {...a11yProps(0)} />
                        <Tab label="Balansavimo energijos rinka" {...a11yProps(1)} />
                        <Tab label="Elektros energijos prekyba" {...a11yProps(2)} />
                    </Tabs>

                    <CustomTabPanel value={innerTabValue} index={0}>
                        <div>
                            <Table columns={columns} dataSource={dataSource}/>

                            <div style={{
                                fontSize: '18px',
                                marginTop: '32px',
                            }}>
                                FCR
                            </div>

                            <div style={{
                                fontSize: '14px',
                                marginBottom: '24px',
                                color: '#6F8190',
                            }}>
                                Dažnio išlaikymo rezervas (angl. Frequency containment reserve)
                            </div>

                            <NoHeaderTable dataSource={secondDataSource}/>

                            <Divider sx={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

                            <div style={{
                                fontSize: '18px',
                                marginTop: '32px',
                            }}>
                                aFRR
                            </div>

                            <div style={{
                                fontSize: '14px',
                                marginBottom: '16px',
                                color: '#6F8190',
                                width: '768px',
                            }}>
                                Automatinis dažnio atkūrimo rezervas (angl. Automatic frequency restoration reserve)
                            </div>

                            <NoHeaderTable dataSource={secondDataSource}/>

                            <div style={{
                                fontSize: '18px',
                                marginTop: '32px',
                            }}>
                                mFRR
                            </div>

                            <div style={{
                                fontSize: '14px',
                                marginBottom: '16px',
                                color: '#6F8190',
                                width: '768px',
                            }}>
                                Rankinis dažnio atkūrimo rezervas (angl. Manual frequency restoration reserve)
                            </div>

                            <Divider sx={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

                            <NoHeaderTable dataSource={secondDataSource}/>

                            <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

                            <div style={{
                                marginTop: '24px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '768px',
                                height: '96px'
                            }}>
                                <Button type="submit" startIcon={<ArrowBackIcon/>} style={{width: '261px'}}>
                                    Koreguoti duomenys
                                </Button>

                                <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>
                                    Susisiekti
                                </Button>
                            </div>
                        </div>
                    </CustomTabPanel>

                    <CustomTabPanel value={innerTabValue} index={1}>
                        <div>
                            <Table columns={columns} dataSource={dataSource}/>

                            <div style={{
                                fontSize: '18px',
                                marginTop: '32px',
                            }}>
                                aFRR
                            </div>

                            <div style={{
                                fontSize: '14px',
                                marginBottom: '24px',
                                color: '#6F8190',
                                width: '768px',
                            }}>
                                Automatinis dažnio atkūrimo rezervas (angl. Automatic frequency restoration reserve)
                            </div>

                            <NoHeaderTable dataSource={secondDataSource}/>

                            <div style={{
                                fontSize: '18px',
                                marginTop: '32px',
                            }}>
                                mFRR
                            </div>

                            <div style={{
                                fontSize: '14px',
                                marginBottom: '16px',
                                color: '#6F8190',
                                width: '768px',
                            }}>
                                Rankinis dažnio atkūrimo rezervas (angl. Manual frequency restoration reserve)
                            </div>

                            <NoHeaderTable dataSource={secondDataSource}/>

                            <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

                            <div style={{
                                marginTop: '24px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '768px',
                                height: '96px'
                            }}>
                                <Button type="submit" startIcon={<ArrowBackIcon/>} style={{width: '261px'}}>
                                    Koreguoti duomenys
                                </Button>

                                <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>
                                    Susisiekti
                                </Button>
                            </div>
                        </div>
                    </CustomTabPanel>

                    <CustomTabPanel value={innerTabValue} index={2}>
                        <div>
                            <Table columns={columns} dataSource={dataSource}/>

                            <div style={{
                                fontSize: '18px',
                                marginTop: '32px',
                                marginBottom: '16px',
                            }}>
                                Diena prieš (angl. Day-Ahead) rinka
                            </div>

                            <NoHeaderTable dataSource={secondDataSource}/>

                            <Divider sx={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

                            <div style={{
                                fontSize: '18px',
                                marginTop: '32px',
                                marginBottom: '16px',
                            }}>
                                Dienos eigos (angl. Intraday) rinka
                            </div>

                            <NoHeaderTable dataSource={secondDataSource}/>

                            <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

                            <div style={{
                                marginTop: '24px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '768px',
                                height: '96px'
                            }}>
                                <Button type="submit" startIcon={<ArrowBackIcon/>} style={{width: '261px'}}>
                                    Koreguoti duomenys
                                </Button>

                                <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>
                                    Susisiekti
                                </Button>
                            </div>
                        </div>
                    </CustomTabPanel>

                </CustomTabPanel>

                <CustomTabPanel value={value} index={2}>
                    Item Three

                    <div style={{
                        fontSize: '24px',
                        marginBottom: '24px',
                    }}>
                        Rinkų produktų ekonominiai rezultatai
                    </div>

                    <div style={{
                        fontSize: '18px',
                        marginBottom: '16px',
                        marginTop: '32px',
                    }}>
                        Pajamos už produktus
                    </div>

                    <Table columns={columns} dataSource={dataSource}/>

                    <div style={{width: '768px'}}>
                        <VerticalBarChart
                            labels={secondBarChartLabels}
                            datasets={secondBarChartDataset}
                        />
                    </div>

                    <Divider style={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

                    <div style={{
                        fontSize: '18px',
                        marginBottom: '16px',
                        marginTop: '65px',
                    }}>
                        Pajamos / sąnaudos
                    </div>

                    <Table columns={columns} dataSource={dataSource}/>

                    <div style={{border: '1px solid #CFD5DA', width: '768px', marginBottom: '16px'}}>

                        <div style={{width: '768px'}}>
                            <NoHeaderTable dataSource={secondDataSource}/>
                        </div>
                    </div>

                    <Divider style={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

                    <div style={{marginBottom: '32px'}}>
                        <div style={{
                            fontSize: '16px',
                            color: '#6F8190',
                        }}>
                            Viso potencialaus pelno / nuostolių
                        </div>

                        <div style={{
                            fontSize: '32px',
                        }}>
                            32.20 tūkst. EUR
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '768px',
                        marginTop: '24px',
                        marginBottom: '16px'
                    }}>
                        <div>
                            <div style={{
                                fontSize: '18px',
                            }}>
                                Detalūs metiniai rezultatai
                            </div>
                            <div style={{
                                fontSize: '14px',
                                color: '#6F8190',
                            }}>
                                Viso potencialaus pelno / nuostolių
                            </div>
                        </div>

                        <div>
                            selector
                        </div>
                    </div>

                    <Table columns={columns} dataSource={dataSource}/>

                    <div style={{border: '1px solid #CFD5DA', width: '768px', marginBottom: '16px'}}>

                        <div style={{width: '768px'}}>
                            <NoHeaderTable dataSource={secondDataSource}/>
                        </div>
                    </div>

                    <Divider sx={{marginTop: '64px', marginBottom: '24px', width: '768px'}}/>

                    <div style={{
                        marginTop: '24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '768px',
                        height: '96px'
                    }}>
                        <Button type="submit" startIcon={<ArrowBackIcon/>} style={{width: '261px'}}>
                            Koreguoti duomenys


                        </Button>
                        <Button variant="contained" type="submit" endIcon={<ArrowForwardIcon/>}>
                            Susisiekti
                        </Button>
                    </div>
                </CustomTabPanel>
            </div>
        </div>
    )
}
