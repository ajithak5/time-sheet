import './App.css';
import { Box, Button, Stack, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tab, TextField } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
// import makeStyles from '@mui/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Export from '../src/assets/Export file.svg'
// import { DataGrid } from '@mui/x-data-grid';
// import { DataGrid, GridColDef, GridColumnGroupingModel } from '@mui/x-data-grid';
const columns = [

  { field: 'Date', headerName: 'Date', width: 90 },
  {
    field: 'Shift',
    headerName: 'Shift',
    width: 150,
  },
  {
    field: 'Clockin',
    headerName: 'Clock IN',
    width: 150,
  },
  {
    field: 'break duration',
    headerName: 'Break Duration',
    type: 'number',
    width: 110,
    editable: true
  },
  {
    field: 'break duration',
    headerName: 'Break Duration',
    type: 'number',
    width: 110,
    editable: true
  }, {
    field: 'break duration',
    headerName: 'Break Duration',
    type: 'number',
    width: 110,
    editable: true
  }, {
    field: 'break duration',
    headerName: 'Break Duration',
    type: 'number',
    width: 110,
    editable: true
  }, {
    field: 'break duration',
    headerName: 'Break Duration',
    type: 'number',
    width: 110,
    editable: true
  }, {
    field: 'break duration',
    headerName: 'Break Duration',
    type: 'number',
    width: 110,
    editable: true
  }, {
    field: 'break duration',
    headerName: 'Break Duration',
    type: 'number',
    width: 110,
    editable: true
  }, {
    field: 'break duration',
    headerName: 'Break Duration',
    type: 'number',
    width: 110,
    editable: true
  }, {
    field: 'break duration',
    headerName: 'Break Duration',
    type: 'number',
    width: 110,
    editable: true
  },
];
// const rows = [
//   { id: 1, Date: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];



function createData(
  date: string,
  shift: number,
  clockIn: string,
  breaktime: string,
  clockOut: string,
  overtime: string,
  totalhrs: String,
  dailytotal: string,
  timeedit: string,
  empnote: string,
  mgrnote: string,

) 
{
  return { date, shift, clockIn, breaktime, clockOut, overtime, totalhrs, dailytotal, timeedit, empnote, mgrnote };
}



function App() {

  const [rows,setRows] = React.useState([
    createData('Sun, 07/02', '09:00 AM - 05:00 PM', '09:45AM', '1hr 15 mins', '04.45 PM', '--', '7:40', '7:40', '--', '--', '--'),
    createData('Sat, 07/01', '09:00 AM - 05:00 PM', '07:10AM', '0:00', '10.30 AM', '--', '3:20', "", 'View', 'Came in for event prep'),
    createData('Fri, 06/30', '09:00 AM - 05:00 PM', '06:20AM', '55 mins', '03.20 AM', '1:00'),
    createData('Thu, 06/29', '--', '09:00 AM', '--', '--', '--', '--', '5:20', '5:20', '--', '--', '--'),
    createData('Wed, 06/28', 'Unavailable(4h)', '--', '--', '--'),
    createData('Tue, 06/27', '--', '--', '--', '--', '--', '0:00', '0:00', '--', '--', '--'),
    createData('Mon, 06/26', '--', '--', '--', '--', '--', '0:00', '0:00', '--', '--', '--'),
  
  ]);

  const [ editIndex,setEditIndex] = React.useState(null);
  const [ editedData,setEditedData ] = React.useState(null);
  console.log("editedIndex :::",editIndex);
      console.log("editedData :::",editedData)
       console.log("row values ::: => ", rows[editIndex])


  React.useEffect(()=>{
    if(editIndex && editedData){
      //perform edit Rows
      console.log("editedIndex :::",editIndex);
      console.log("editedData :::",editedData)
      console.log("row values ::: => ", rows[editIndex])
      const editedRows = { ...rows[editIndex], [editedData.name]: editedData.value};
      setRows( ...rows,editedRows);
    }
  },[rows])


  const[rowIndex,setRowIndex]=React.useState(-1);
  const[columnIndex,setcolumnIndex]=React.useState(-1);

  // const[hover,setHover]=React.useState(false)
  // function MouseOver(event) {
  //   event.target.style.visibility = 'visible';
  // }
  // function MouseOut(event){
  //   event.target.style.visibility="hidden";
  // }
  // const [rowsData, setRowsData] = useState([]);
 
  //   const addTableRows = ()=>{
  
  //       const rowsInput={
  //           fullName:'',
  //           emailAddress:'',
  //           salary:''  
  //       } 
  //       setRowsData([...rowsData, rowsInput])
      
  //   }
  //   const handleChange = (index, evnt)=>{
    
  //     const { name, value } = evnt.target;
  //     const rowsInput = [...rowsData];
  //     rowsInput[index][name] = value;
  //     setRowsData(rowsInput);
    
   
   
  // }
  // const [tableRows, setTableRows] = useState(["Row 1"]);
  // const [counter, setCounter] = useState(1);

  // function addRow() {
  //     setCounter(counter + 1);
  //     setTableRows([...tableRows, `Row ${counter + 1}`]);
  // }
  // state={
  //   rows:[{}]
  // };
  // addRow=()=>{
  //   const item={
  //     shift:'',
  //     clockIn:'',
  //     break:'',
  //     clockOut:'',
  //     overtime:'',
  //     totalhrs:'',
  //     dailytotal:'',
  //     timeedit:'',
  //     empnote:'',
  //     mgrnote:''
  //   };
  //   this.setState({
  //     rows: [...this.state.rows,item]
  //   });
  // }
  const[input,setInput]=React.useState(null);
  
  // const EditInput=(row,index)=>React.useCallback((e)=>{
  //   console.log("row ::",row)
  //   rows[index] = { ...row,clockIn: e.target.value }
  //   rows[index] = createData(`${row.date}`,`${row.shift}`,`${e.target.value}`,`${row.breaktime}`,`${}`)
  //   setRows(rows)
  // },[rows])

  return (
    <>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Box sx={{ m: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0 }}>
          <Typography sx={{ fontSize: '18px', display: 'flex', color: '#253858', fontWeight: 400 }}>
            <ArrowBackIosNewIcon />
            Timesheet -
            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>
              Krishten Chilcott
            </Typography>
            (151742) | Pay Period:
            <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>
              06/19/23 -07/02/23
            </Typography>
          </Typography>
          <Stack direction={'row'} spacing={2} >
            <Button sx={{ textTransform: 'capitalize', px: 2, border: '1px solid #E2E3E5', color: '#3880FF', borderRadius: '64px', bgcolor: 'white', fontWeight: 600, boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)' }} >View Requests</Button>
            <Button sx={{ textTransform: 'capitalize', px: 2, border: '1px solid #E2E3E5', color: '#3880FF', borderRadius: '64px', bgcolor: 'white', fontWeight: 600, boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.15)' }} >Add Shifts</Button>
            <Button sx={{ textTransform: 'capitalize', px: 2, color: 'white', borderRadius: '64px', bgcolor: '#007DFF', gap: 1, fontWeight: 600 }} ><img src={Export} />Export</Button>
          </Stack>
        </Box>
      </Box>
      {/* <Paper sx={{ width: '100%' }}> */}
      <Box position={'relative'} height={'100%'}>
      <TableContainer sx={{ width: '100%',height:650 }}>
        <Table stickyHeader sx={{ width: 'max-content' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell id='0'></TableCell>
              <TableCell id='1' sx={{ fontWeight: 600 }} width={100}>Date</TableCell>
              <TableCell id='2' sx={{ fontWeight: 600 }} width={190}>Shift</TableCell>
              <TableCell id='3' sx={{ fontWeight: 600 }} >Clock In</TableCell>
              <TableCell ></TableCell>
              <TableCell id='4' sx={{ fontWeight: 600 }} width={130}>Break Duration</TableCell>
              <TableCell id='5' sx={{ fontWeight: 600 }} width={130}>Clock Out</TableCell>
              <TableCell id='6' sx={{ fontWeight: 600 }} width={150}>Overtime Hours</TableCell>
              <TableCell id='7' sx={{ fontWeight: 600 }} >Total Hours</TableCell>
              <TableCell id='8' sx={{ fontWeight: 600 }} >Daily Total</TableCell>
              <TableCell id='9' sx={{ fontWeight: 600 }} >Time Edit History</TableCell>
              <TableCell id='10' sx={{ fontWeight: 600 }} width={200}>Emp Note</TableCell>
              <TableCell id='11' sx={{ fontWeight: 600 }} width={200}>Manager Note</TableCell>
            </TableRow>

          </TableHead>


          <TableRow>
            <TableCell colSpan={'100%'} sx={{
              background: 'rgba(232, 248, 255, 0.50)',
              boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15) inset, 0px 2px 2px 0px rgba(0, 0, 0, 0.15)'
            }}><Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={15} >
                <Typography>Jun 26 - Jul 02</Typography> <Typography>Week Total Hours : 19:00</Typography></Box></TableCell>
          </TableRow>


          <TableBody>
            {rows.map((row,index) => (
              <>
              <TableRow
                key={row.name}
              >
                <TableCell className='table'>
                  <Typography className='cell' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="32" viewBox="0 0 50 32" fill="none">
                    <rect width="50" height="32" fill="white" />
                    <path d="M26.8018 15.6268C26.9683 15.6268 27.128 15.5607 27.2458 15.4429C27.3635 15.3252 27.4297 15.1654 27.4297 14.9989C27.4297 14.8324 27.3635 14.6727 27.2458 14.5549C27.128 14.4372 26.9683 14.371 26.8018 14.371H24.9181V12.4873C24.9181 12.3208 24.8519 12.161 24.7341 12.0433C24.6164 11.9255 24.4567 11.8594 24.2902 11.8594C24.1236 11.8594 23.9639 11.9255 23.8462 12.0433C23.7284 12.161 23.6622 12.3208 23.6622 12.4873V14.371H21.7785C21.612 14.371 21.4523 14.4372 21.3345 14.5549C21.2168 14.6727 21.1506 14.8324 21.1506 14.9989C21.1506 15.1654 21.2168 15.3252 21.3345 15.4429C21.4523 15.5607 21.612 15.6268 21.7785 15.6268H23.6622V17.5105C23.6622 17.6771 23.7284 17.8368 23.8462 17.9545C23.9639 18.0723 24.1236 18.1384 24.2902 18.1384C24.4567 18.1384 24.6164 18.0723 24.7341 17.9545C24.8519 17.8368 24.9181 17.6771 24.9181 17.5105V15.6268H26.8018Z" fill="#007DFF" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.9648 15C34.9648 14.4073 34.7949 13.8689 34.5111 13.2837C34.2365 12.7194 33.8313 12.0664 33.3256 11.2518L32.2514 9.5213C31.7726 8.75107 31.3891 8.13237 31.0249 7.65684C30.6482 7.16372 30.2631 6.7853 29.7633 6.51153C29.2651 6.2386 28.7343 6.11637 28.1073 6.05693C27.5003 6 26.7568 6 25.825 6H24.4746C22.8806 6 21.6222 6 20.6385 6.12809C19.6297 6.2587 18.8151 6.53498 18.1713 7.15786C17.5241 7.78326 17.2344 8.5786 17.098 9.56484C16.9648 10.5193 16.9648 11.7399 16.9648 13.277V16.723C16.9648 18.2601 16.9648 19.4807 17.098 20.4352C17.2344 21.4206 17.5241 22.2167 18.1713 22.843C18.8151 23.465 19.6297 23.7413 20.6385 23.8727C21.6222 24 22.8806 24 24.4746 24H25.825C26.7568 24 27.4994 24 28.1073 23.9431C28.7352 23.8845 29.2651 23.7614 29.7633 23.4885C30.2631 23.2147 30.6474 22.8354 31.0249 22.3432C31.39 21.8676 31.7726 21.2498 32.2514 20.4787L33.3256 18.7482C33.8313 17.9336 34.2365 17.2806 34.5111 16.7154C34.7957 16.1319 34.9648 15.5936 34.9648 15ZM32.2406 11.8856C32.768 12.7353 33.1381 13.334 33.3817 13.8338C33.6186 14.3202 33.709 14.6651 33.709 15C33.709 15.3349 33.6186 15.6798 33.3817 16.1662C33.1389 16.6669 32.768 17.2647 32.2406 18.1144L31.2016 19.7888C30.7018 20.5934 30.351 21.1585 30.0278 21.5805C29.7139 21.9899 29.4552 22.2251 29.1605 22.3867C28.8649 22.5483 28.5192 22.6429 27.9901 22.6923C27.4475 22.7433 26.7635 22.7442 25.7941 22.7442H24.5207C22.8714 22.7442 21.6942 22.7425 20.8009 22.627C19.9235 22.5131 19.4145 22.298 19.0436 21.9405C18.6761 21.5847 18.4576 21.1007 18.3412 20.2627C18.2223 19.4037 18.2207 18.271 18.2207 16.6744V13.3256C18.2207 11.7282 18.2223 10.5963 18.3412 9.7373C18.4584 8.89926 18.6761 8.41535 19.0445 8.06037C19.4145 7.70205 19.9235 7.48688 20.8009 7.37386C21.6942 7.25665 22.8705 7.25581 24.5207 7.25581H25.7941C26.7635 7.25581 27.4475 7.25581 27.9901 7.30772C28.5192 7.35712 28.8649 7.45172 29.1605 7.6133C29.4552 7.77488 29.7139 8.01014 30.0278 8.42037C30.351 8.84149 30.7018 9.4066 31.2016 10.2112L32.2406 11.8856Z" fill="#5C6A82" />
                  </svg>
                  </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell >{row.shift}</TableCell>
              
              
                <TableCell className='input'>
               
                <TextField value={ !!editedData && editedData?.index === index  ? editedData.value : row.clockIn}  
                onChange={(e)=>{ 
                  //EditInput(row,index)
                  setEditIndex(index);
                  setEditedData({
                    name:'clockIn',
                    index,
                    value:e.target.value
                  })

                }}
                // onBlur={(e)=>{
                //   console.log("e:: ",e)
                //   const { value  } = e.target;
                //   console.log("rows ::::",row)
                //   if(value){
                //     rows[index] = createData(`${row.date}`, `${row.shift}`, ${value}, `${row.breaktime}`, `${row.clockOut}`, '--', '7:40', '7:40', '--', '--', '--')
                //     setRows(...rows,rows[index].)
                //   }
                 
                //  // console.log(row.clockIn)
                // }}
                />
                  
                  
                  </TableCell>
              
              
              
                <TableCell >
                  <Typography 
                  style={{ ...(row.clockIn === '--' && { visibility: 'hidden' }) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.9165 5L12.9165 10L7.9165 15" stroke="#5C6A82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></Typography>
                </TableCell>
                <TableCell className='input'>
                <TextField value={ !!editedData && editedData?.index === index  ? editedData.value : row.breaktime}  
                onChange={(e)=>{ 
                  //EditInput(row,index)
                  setEditIndex(index);
                  setEditedData({
                    name:'break',
                    index,
                    value:e.target.value
                  })

                }}/>
                
                  </TableCell>
                <TableCell className='input' ><TextField value={ !!editedData && editedData?.index === index  ? editedData.value : row.clockOut}  
                onChange={(e)=>{ 
                  //EditInput(row,index)
                  setEditIndex(index);
                  setEditedData({
                    name:'clockOut',
                    index,
                    value:e.target.value
                  })

                }}/></TableCell>
                <TableCell>{row.overtime}</TableCell>
                <TableCell>{row.totalhrs}</TableCell>
                <TableCell>{row.dailytotal}</TableCell>
                <TableCell style={{ ...(row.clockIn === '--' && { color: '#007DFF' }) }}>{row.timeedit}</TableCell>
                <TableCell>{row.empnote}</TableCell>
                <TableCell>{row.mgrnote}</TableCell>

              </TableRow>
             
             
              </>
            ))}
          </TableBody>
         
        </Table>
      </TableContainer>
      </Box>

      {/* </Paper> */}
      {/* <DataGrid
      editMode="row"
        columns={columns}
        experimentalFeatures={{ columnGrouping: true }}
        rows={rows}
        // columnGroupingModel={columnGroupingModel}
      /> */}
    </>
  );
}

export default App;





