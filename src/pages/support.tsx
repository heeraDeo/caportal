import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import _Button from "../components/common/_Button";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";
import SupportDetailCard from "../components/common/supprtdetailCard";
function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("1st of Apr to 31st of Mar", "9:00am - 6:00pm", "9:00am - 4:00pm"),
];
const rows2 = [
  createData("25th Mar 2022 to 29th Mar 2022", "8:00am - 10:00pm"),
  createData("30th Mar 2022 to 31st Mar 2022", "8:00am - 2:00am"),
  createData("22nd Jul 2022 to 29th Jul 2022", "8:00am - 10:00pm"),
  createData("30th Jul 2022 to 31st Jul 2022", "8:00am - 2:00am"),
];
const rows3 = [
  createData("Republic Day", "26th Jan 2022", "Wednesday"),
  createData("Holi", "18th Mar 2022", "Friday"),
  createData("Independence Day", "15th Aug 2022", "Monday"),
  createData("Mahatma Gandhi Jayanti", "2nd Oct 2022", "Sunday"),
  createData("Dussehra", "5th Oct 2022", "Wednesday"),
  createData("Diwali", "24th Oct 2022", "Monday"),
  createData("Diwali (+1)", "25th Oct 2022", "Tuesday"),
  createData("Chhat Puja (Eve. Surya Argh)", "30th Oct 2022", "Sunday"),
  createData("Chhat Puja (Mor. Surya Argh)", "31st Oct 2022", "Monday"),
];


const Support = () => {
  return (
    <div className="sm:px-24 px-2 bg-[#f8f9fd] pt-20">
      <div>
        <p className="text-4xl text-center font-semibold tracking-wider">
          Support Details
        </p>
        <p className="text-base text-center text-[#777373] mt-2">
          We are here to help.
        </p>

        <div className="mt-8 rounded-md">
          <div className="bg-[#dde3f0] text-center p-10 rounded-md">
            <EmojiObjectsIcon
              style={{ width: 50, height: 50, color: "#7fa3f2" }}
            />
            <p className="text-xl font-medium tracking-wide mt-2">
              Knowladge Base
            </p>
            <p className="text-base text-[#777373] tracking-wide py-1">
              Help Articles
            </p>
            <_Button
              title={"Visit Knowledge Center"}
              padding={"8px 25px"}
              fontSize={"16px"}
            />
          </div>
        </div>
      </div>
      <div className="sm:flex sm:justify-between py-5">
        <SupportDetailCard />
        <SupportDetailCard />
        <SupportDetailCard />
        <SupportDetailCard />
      </div>
      <div className="mb-20">
        <div className=" rounded-md ">
          <div className="bg-white text-center p-8 rounded-md ">
            <ChangeCircleIcon
              style={{ width: 50, height: 50, color: "#EB4C70" }}
            />
            <p className="text-lg font-semibold tracking-wide mt-2">
              Escalate a ticket
            </p>
            <p className="text-base text-[#777373] tracking-wide py-1 ">
              Only if your existing ticket is unsolved beyond 48 hours.
              <br /> You need to login to escalate a ticket.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:flex mt-5 justify-between pb-20">
        <div className="sm:w-[550px]">
          <p className="text-lg font-semibold text-center mb-3">
            Regular Working Hours
          </p>
          <div className="">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 40,border:1 }} aria-label="simple table">
                <TableHead sx={{borderBottom:2 ,color:"#999"}}>
                  <TableRow >
                    <TableCell sx={{fontWeight:600}}>Period</TableCell>
                    <TableCell align="left" sx={{fontWeight:600}}>Mon-Fri</TableCell>
                    <TableCell align="left" sx={{fontWeight:600}}>Sat-Sun</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{  border: 1.1 }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <p className="text-lg font-semibold text-center mb-3 mt-10">
            Extended Working Hours
          </p>
          <div className=" pb-10">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 40,border:1  }} aria-label="simple table">
                <TableHead sx={{borderBottom:2 ,color:"#999"}}>
                  <TableRow>
                    <TableCell sx={{fontWeight:600}}>Date</TableCell>
                    <TableCell align="left" sx={{fontWeight:600}}>Timing</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows2.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={ { border:1.1 }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <div className="sm:w-[550px]  ">
          <p className="text-lg font-semibold text-center mb-3">Holiday List</p>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 40,border:1  }} aria-label="simple table">
              <TableHead sx={{borderBottom:2 ,color:"#999"}}>
                <TableRow>
                  <TableCell sx={{fontWeight:600}}>Holidays</TableCell>
                  <TableCell align="left" sx={{fontWeight:600}}>Dates</TableCell>
                  <TableCell align="left" sx={{fontWeight:600}}>Day</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows3.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{border:1.1 }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
export default Support;
