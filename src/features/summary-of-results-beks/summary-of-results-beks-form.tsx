import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import {GlobalStyles, Tabs} from "@mui/material";
import Tab from '@mui/material/Tab';
import {type SyntheticEvent, useState} from "react";
import {Table} from '../../ui/table/table';
import {VerticalBarChart} from "../../ui/chart/chart.tsx";
import Divider from "@mui/material/Divider";
import {StackedBarChart} from "../../ui/chart/chart";
import {Button} from "../../ui/button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
            name: 'firstProduct',
            cost: 32,
        },
        {
            key: '2',
            name: 'secondProduct',
            cost: 42,
        },
        {
            key: '3',
            name: 'thirdProduct',
            cost: 32,
        },
        {
            key: '4',
            name: 'fourthProduct',
            cost: 32,
        },
        {
            key: '5',
            name: 'fifthProduct',
            cost: 32,
        },
        {
            key: '6',
            name: 'sixthProduct',
            cost: 32,
        },
        {
            key: '7',
            name: 'seventhProduct',
            cost: 32,
        },
        {
            key: '8',
            name: 'eighthProduct',
            cost: 32,
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Cost',
            dataIndex: 'cost',
            key: 'cost',
        },
    ];

    const secondDataSource = [
        {
            key: '1',
            lorem: 'Lorem ipsum',
            ipsum: 'dolor sit amet',
        },
        {
            key: '2',
            lorem: 'Consectetur',
            ipsum: 'adipiscing elit',
        },
        {
            key: '3',
            lorem: 'Sed do',
            ipsum: 'eiusmod tempor',
        },
    ];
    const secondColumns = [
        {
            title: 'Lorem',
            dataIndex: 'lorem',
            key: 'lorem',
        },
        {
            title: 'Ipsum',
            dataIndex: 'ipsum',
            key: 'ipsum',
        },
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

                    <Table columns={columns} dataSource={dataSource} nameColumnKey="name"/>

                    <div style={{
                        fontSize: '18px',
                        marginBottom: '16px',
                        marginTop: '32px',
                    }}>
                        Metiniai rezultatai
                    </div>

                    <Table columns={secondColumns} dataSource={secondDataSource} nameColumnKey="lorem"/>

                    <div style={{width: '768px'}}>
                        <VerticalBarChart
                            labels={secondDataSource.map(item => item.lorem)}
                            datasets={[
                                {
                                    label: 'Ipsum',
                                    data: secondDataSource.map(item => {
                                        const num = Number(item.ipsum);
                                        return isNaN(num) ? 0 : num;
                                    }),
                                    backgroundColor: '#4F81BD',
                                },
                            ]}
                        />
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
                                labels={secondDataSource.map(item => item.lorem)}
                                datasets={[
                                    {
                                        label: 'Ipsum',
                                        data: secondDataSource.map(item => {
                                            const num = Number(item.ipsum);
                                            return isNaN(num) ? 0 : num;
                                        }),
                                        backgroundColor: '#C0504D',
                                    },
                                    {
                                        label: 'Cost',
                                        data: dataSource.map(item => item.cost),
                                        backgroundColor: '#4F81BD',
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
                                    <div style={{marginBottom: '12px'}}>
                                        Skaičiavimas vykdomas dviem optimizaciniais etapais.
                                    </div>

                                    <div style={{marginBottom: '12.5px', width: '668px'}}>
                                        Grynosios dabartinės vertės analizė (angl. Net Present Value analysis, trump.
                                        NPV) - tai finansinis vertinimo metodas, kuris leidžia įvertinti investicijos
                                        vertę per visą jos gyvavimo laikotarpį, atsižvelgiant
                                        į pinigų vertės kitimą laikui bėgant.
                                    </div>

                                    <div>
                                        Ką rodo analizė:
                                    </div>
                                    <div>
                                        Teigiama NPV reikšmė - projektas turėtų būti finansiškai naudingas.
                                    </div>
                                    <div>
                                        Neigiama NPV reikšmė - projektas gali būti nuostolingas arba neefektyvus.
                                    </div>
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
                            <StackedBarChart
                                labels={secondDataSource.map(item => item.lorem)}
                                datasets={[
                                    {
                                        label: 'Ipsum',
                                        data: secondDataSource.map(item => {
                                            const num = Number(item.ipsum);
                                            return isNaN(num) ? 0 : num;
                                        }),
                                        backgroundColor: '#C0504D',
                                    },
                                    {
                                        label: 'Cost',
                                        data: dataSource.map(item => item.cost),
                                        backgroundColor: '#4F81BD',
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
                                labels={secondDataSource.map(item => item.lorem)}
                                datasets={[
                                    {
                                        label: 'Ipsum',
                                        data: secondDataSource.map(item => {
                                            const num = Number(item.ipsum);
                                            return isNaN(num) ? 0 : num;
                                        }),
                                        backgroundColor: '#C0504D',
                                    },
                                    {
                                        label: 'Cost',
                                        data: dataSource.map(item => item.cost),
                                        backgroundColor: '#4F81BD',
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
                            <Table columns={columns} dataSource={dataSource} nameColumnKey="name"/>

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

                            <Table columns={secondColumns} dataSource={secondDataSource} nameColumnKey="lorem"/>

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

                            <Table columns={secondColumns} dataSource={secondDataSource} nameColumnKey="lorem"/>

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

                            <Table columns={secondColumns} dataSource={secondDataSource} nameColumnKey="lorem"/>

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
                            <Table columns={columns} dataSource={dataSource} nameColumnKey="name"/>

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

                            <Table columns={secondColumns} dataSource={secondDataSource} nameColumnKey="lorem"/>

                            <Divider sx={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

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

                            <Table columns={secondColumns} dataSource={secondDataSource} nameColumnKey="lorem"/>

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
                            <Table columns={columns} dataSource={dataSource} nameColumnKey="name"/>

                            <div style={{
                                fontSize: '18px',
                                marginTop: '32px',
                                marginBottom: '16px',   
                            }}>
                                Diena prieš (angl. Day-Ahead) rinka
                            </div>
                            
                            <Table columns={secondColumns} dataSource={secondDataSource} nameColumnKey="lorem"/>

                            <Divider sx={{marginTop: '32px', marginBottom: '32px', width: '768px'}}/>

                            <div style={{
                                fontSize: '18px',
                                marginTop: '32px',
                                marginBottom: '16px',
                            }}>
                                Dienos eigos (angl. Intraday) rinka
                            </div>
                            
                            <Table columns={secondColumns} dataSource={secondDataSource} nameColumnKey="lorem"/>

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

                    <Table columns={columns} dataSource={dataSource} nameColumnKey="name"/>
                    
                    <div style={{width: '768px'}}>
                        <VerticalBarChart
                            labels={secondDataSource.map(item => item.lorem)}
                            datasets={[
                                {
                                    label: 'Ipsum',
                                    data: secondDataSource.map(item => {
                                        const num = Number(item.ipsum);
                                        return isNaN(num) ? 0 : num;
                                    }),
                                    backgroundColor: '#4F81BD',
                                },
                            ]}
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

                    <Table columns={columns} dataSource={dataSource} nameColumnKey="name"/>

                    <div style={{border: '1px solid #CFD5DA', width: '768px', marginBottom: '16px'}}>

                        <div style={{width: '768px'}}>
                            <StackedBarChart
                                labels={secondDataSource.map(item => item.lorem)}
                                datasets={[
                                    {
                                        label: 'Ipsum',
                                        data: secondDataSource.map(item => {
                                            const num = Number(item.ipsum);
                                            return isNaN(num) ? 0 : num;
                                        }),
                                        backgroundColor: '#C0504D',
                                    },
                                    {
                                        label: 'Cost',
                                        data: dataSource.map(item => item.cost),
                                        backgroundColor: '#4F81BD',
                                    },
                                ]}
                            />
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
                    
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '768px', marginTop: '24px', marginBottom: '16px'}}>
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

                    <Table columns={columns} dataSource={dataSource} nameColumnKey="name"/>

                    <div style={{border: '1px solid #CFD5DA', width: '768px', marginBottom: '16px'}}>

                        <div style={{width: '768px'}}>
                            <StackedBarChart
                                labels={secondDataSource.map(item => item.lorem)}
                                datasets={[
                                    {
                                        label: 'Ipsum',
                                        data: secondDataSource.map(item => {
                                            const num = Number(item.ipsum);
                                            return isNaN(num) ? 0 : num;
                                        }),
                                        backgroundColor: '#C0504D',
                                    },
                                    {
                                        label: 'Cost',
                                        data: dataSource.map(item => item.cost),
                                        backgroundColor: '#4F81BD',
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
            </div>


        </div>

    )
}