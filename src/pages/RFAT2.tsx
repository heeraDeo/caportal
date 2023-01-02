import images from "../../public/images";
import Image from "next/image";
export default function RFAT2() {
  return (
    <div className="flex justify-center p-0 ">
      <div className="w-[790px] bg-[#f9fbfe] ">
        <div className="flex justify-between items-center  mt-8 ">
          <div className="absolute mb-12 ml-5">
            <Image
              src={images.RFlogo}
              alt="Picture of the author"
              width={70}
              height={70}
            />
          </div>
          <div className="ml-16 ">
            <p className="text-[#2f3f90] font-extrabold text-3xl tracking-wider text-center">
              RESCUE FIRST AID TRANING PVT. LTD.
            </p>
            <p className=" text-center tracking-wider text-xs font-bold ">
              DR ATUL B BAND, MBBS, DPH, DCH, AFIH,
              <br />
              CERTYING SURGEON, (GOVT OF MAHARSHTRA), MARINE MEDICAL EXAMINER
              (APPROVED BY GOVT INDIA)
              <br />
              <span className="text-[#2f3f90]">
                CERTIFYING SURGEON, FIRST AID TRAINING, HI TECH MEDICAL CHECK
                UPS, OHC MANAGEMENT
              </span>
            </p>
          </div>
        </div>
        <hr className="border-current mt-3"></hr>
        <p className="text-xs text-[#2f3f90] font-semibold text-center mt-2">
          Om Dwarkanath C.H.S., R. No. 9, Plot No. 11, Sector-19A, Nerul-East,
          Navi Mumbai-400 706.
          <br />
          Email :<span className="text-[#1a1aff]">
            {" "}
            mediglob13@gmail.com
          </span>{" "}
          Mob: +91 8956727718 / +91 9969789080
        </p>

        <div className="border border-current mt-2 p-2">
          <p className="text-xs font-bold text-center">
            Part 2 - Clinical Examination/ Lab test
          </p>

          <table className="table-auto mt-2 text-xs font-medium  ">
            <tbody className="">
              <tr className="border  h-5 ">
                <td className="w-32 border  border-current ">
                  <span className="ml-2">Patient Name :</span>{" "}
                </td>
                <td className="border border-current w-72 px-2">
                  Aniket Gurjar
                </td>
                <td className="border border-current w-32 px-2">
                  Joining Date :
                </td>
                <td className="border border-current w-44 px-2">NA </td>
                <td className="border border-current w-36 px-2">
                  Checkup Date :
                </td>
                <td className="border border-current w-32 px-2">21-NOV-22</td>
              </tr>

              <tr className="border  h-5 ">
                <td className="w-32 border  border-current ">
                  <span className="ml-2">Designation :</span>{" "}
                </td>
                <td className="border border-current w-72 px-2">Technician</td>
                <td className="border border-current w-32 px-2">D.O.B./AGE</td>
                <td className="border border-current w-44 px-2">11/10/2000 </td>
                <td className="border border-current w-36 px-2">
                  Valid Till :
                </td>
                <td className="border border-current w-32 px-2">21-NOV-22</td>
              </tr>

              <tr className="border  h-5 ">
                <td className="w-32 border  border-current ">
                  <span className="ml-2">Emp Code :</span>{" "}
                </td>
                <td className="border border-current w-72 px-2">SI-14004</td>
                <td className="border border-current w-32 px-2">Gender</td>
                <td className="border border-current w-44 px-2">Male </td>
                <td className="border border-current w-36 px-2"></td>
                <td className="border border-current w-32 px-2"></td>
              </tr>

              <tr className="border  h-5 ">
                <td className="w-32 border  border-current ">
                  <span className="ml-2">Address :</span>{" "}
                </td>
                <td className="border border-current w-72 px-2">Gwalior</td>
                <td className="border border-current w-32 px-2">
                  Blood Group :
                </td>
                <td className="border border-current w-44 px-2">B+ </td>
                <td className="border border-current w-36 px-2"></td>
                <td className="border border-current w-32 px-2"></td>
              </tr>

              <tr className="border  h-5 ">
                <td className="w-32 border  border-current ">
                  <span className="ml-2">Address :</span>{" "}
                </td>
                <td className="border border-current w-72 px-2">Gwalior</td>
                <td className="border border-current w-32 px-2">
                  Certificate No.
                </td>
                <td className="border border-current w-44 px-2">
                  SI-MED-002211122
                </td>
                <td className="border border-current w-36 px-2"></td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm font-medium mt-2">1. BMI</p>
          <table className="table-auto mt-1 text-xs font-medium  ">
            <tbody className="">
              <tr className="border  h-5 ">
                <td className="w-44 border  border-current ">
                  <span className="ml-2">Cardiovascular system</span>{" "}
                </td>
                <td className="border border-current w-24 px-2">20.2</td>
                <td className="border border-current w-44 px-2">Height</td>
                <td className="border border-current w-24 px-2">165cm.</td>
                <td className="border border-current w-44 px-2">Weight</td>
                <td className="border border-current w-24 px-2">55kg.</td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm font-medium mt-2">
            2. Blood pressure-(repeat if Necessary)
          </p>
          <table className="table-auto mt-1 text-xs font-medium  ">
            <tbody className="">
              <tr className="border  ">
                <td className="w-72 border  border-current  ">
                  {" "}
                  <span className="ml-3 text-sm">a.</span>
                  <span className="ml-2">Systolic</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">121</td>
                <td className="border border-current w-32 px-2">mmHg</td>
                <td className="border border-current w-32 px-2"></td>
                <td className="border border-current w-32 px-2">mmHg</td>
              </tr>

              <tr className="border   ">
                <td className="w-72 border  border-current ">
                  <span className="ml-3 text-sm">b.</span>
                  <span className="ml-2">Diastolic</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">80</td>
                <td className="border border-current w-32 px-2">mmHg</td>
                <td className="border border-current w-32 px-2"></td>
                <td className="border border-current w-32 px-2">mmHg</td>
              </tr>

              <tr className="border   ">
                <td className="w-72 border  border-current ">
                  <span className="ml-3 text-sm">c.</span>
                  <span className="ml-2">Pulse rate</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">Regular</td>
                <td className="border border-current w-32 px-2">REGULAR</td>
                <td className="border border-current w-32 px-2">Irregular</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
              <tr className="border   ">
                <td className="w-72 border  border-current ">
                  <span className="ml-3 text-sm">d.</span>
                  <span className="ml-2">Heart sounds</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
              <tr className="border   ">
                <td className="w-72 border  border-current ">
                  <span className="ml-3 text-sm">e.</span>
                  <span className="ml-2">Peripheral pulses</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
              <tr className="border   ">
                <td className="w-72 border  border-current ">
                  <span className="ml-3 text-sm">f.</span>
                  <span className="ml-2">Chest/Lungs</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
              <tr className="border   ">
                <td className="w-72 border  border-current ">
                  <span className="ml-3 text-sm">g.</span>
                  <span className="ml-2">Abdomen (Liver)</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm font-medium mt-2">
            3. Neurological / Locomotor
          </p>
          <table className="table-auto mt-1 text-xs font-medium">
            <tbody className="">
              <tr className="border">
                <td className="w-72 border  border-current ">
                  <span className="ml-3 text-sm">a.</span>
                  <span className="ml-2">Cervical sprine rotation</span>
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
              
              <tr className="border">
                <td className="w-72 border border-current">
                  <span className="ml-3 text-sm">b.</span>
                  <span className="ml-2"> Back movement </span>
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
               <tr className="">
              <td className="w-72 border border-current">
                <span className="ml-3 text-sm">c.</span>
                <span className="ml-2">Upper limbs</span>
              </td> 
              </tr>
              <tr className="border">
                <td className="w-72 border border-current">
                  <span className="ml-16">Appearance</span>
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
              <tr className="border">
                <td className="w-72 border border-current">
                  <span className="ml-16">Join movements</span>
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
<tr className="border">
               <td className="w-72 border  border-current">
                <span className="ml-3 text-sm">d.</span>
                <span className="ml-2">Lower limbs</span>
              </td> 
              </tr>
              <tr className="border">
                <td className="w-72 border  border-current ">
                  <span className="ml-16">Appearance</span>
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
              <tr className="border">
                <td className="w-72 border  border-current ">
                  <span className="ml-16">Join movements</span>
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
              <tr className="border">
                <td className="w-72 border border-current">
                  <span className="ml-3 text-sm">e.</span>
                  <span className="ml-2">Reflexes</span>
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
              <tr className="border">
                <td className="w-72 border border-current">
                  <span className="ml-3 text-sm">f.</span>
                  <span className="ml-2">Romberg's sign</span>
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs">
            A pass requires the ability to maintain balance while standing with
            shoes off, <br />
            feet together side by side, eyes closed and arms by sides, for 30
            seconds
          </p>
          <table className="table-auto mt-2 text-xs font-medium  ">
            <tbody className="">
              <tr className="border   ">
                <td className="w-72 border  border-current ">
                  <span className="ml-3 text-sm">6.</span>
                  <span className="ml-2">
                    Hearing (Doctor's judgement)
                  </span>{" "}
                </td>
                <td className="border border-current w-32 px-2">Normal</td>
                <td className="border border-current w-32 px-2">NORMAL</td>
                <td className="border border-current w-32 px-2">Abnormal</td>
                <td className="border border-current w-32 px-2"></td>
              </tr>
              <tr className="  h-2">
                <td className=" ">
                  <span className="ml-3 text-sm">7.</span>
                  <span className="ml-2">
                    Vision Test (Doctors judgement) : 6/6
                  </span>{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody className=" text-xs font-medium">
              <tr className="">
                <td className=" w-64 ">
                  <span className="ml-3 text-sm">8.</span>
                  <span className="ml-2">RoutineUrine Examination</span>{" "}
                </td>
                <td className="px-2">ALBUMIN</td>
                <td className="border-b border-current   px-2">NIL</td>
                <td className=" px-2">SUGER</td>
                <td className="border-b border-current  px-2">NIL</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm font-medium mt-1">
            9. Routine Blood examination HAEMOGRAM
          </p>
          <table className="table-auto mt-1 text-xs font-medium  ">
            <tbody className="">
              <tr className="   ">
                <td className="w-72 border  border-current  ">
                  {" "}
                  <span className="ml-2">Blood Group:</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">B+</td>
              </tr>
              <tr className="border   ">
                <td className="w-72 border  border-current  ">
                  {" "}
                  <span className="ml-2">Rh factor:</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">POSITIVE(+)</td>
                <td className="border border-current w-16 px-2">DLC</td>
                <td className="border border-current w-44 px-2"></td>
                <td className="border border-current w-44 px-2">
                  Serum cholestrol:
                </td>
                <td className="border border-current w-32 px-2">142.1</td>
                <td className="border border-current w-16 px-2">mg/dl</td>
              </tr>
              <tr className="border   ">
                <td className="w-72 border  border-current  ">
                  {" "}
                  <span className="ml-2">Hb:</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">14.8gm/dl</td>
                <td className="border border-current w-16 px-2">P</td>
                <td className="border border-current w-44 px-2">
                  53.5per cu.Mm
                </td>
                <td className="border border-current w-44 px-2">
                  S/Triglycerides:
                </td>
                <td className="border border-current w-32 px-2">97.33</td>
                <td className="border border-current w-16 px-2">mg/dl</td>
              </tr>
              <tr className="border">
                <td className="w-72 border  border-current">
                  {" "}
                  <span className="ml-2">TLC:</span>{" "}
                </td>
                <td className="border border-current w-44 px-2">
                  7600per microliter
                </td>
                <td className="border border-current w-16 px-2">L</td>
                <td className="border border-current w-44 px-2">
                  38.8per cu.Mm
                </td>
                <td className="border border-current w-44 px-2">HDL :</td>
                <td className="border border-current w-32 px-2">60.28</td>
                <td className="border border-current w-16 px-2">mg/dl</td>
              </tr>
              <tr className="border   ">
                <td className="w-72 border  border-current  ">
                  {" "}
                  <span className="ml-2">RBC:</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">5cells/mcL</td>
                <td className="border border-current w-16 px-2">E</td>
                <td className="border border-current w-44 px-2">4%</td>
                <td className="border border-current w-44 px-2">LDL:</td>
                <td className="border border-current w-32 px-2">62.35</td>
                <td className="border border-current w-16 px-2">mg/dl</td>
              </tr>
              <tr className="border   ">
                <td className="w-72 border  border-current  ">
                  {" "}
                  <span className="ml-2">Platelets Count</span>{" "}
                </td>
                <td className="border border-current w-32 px-2">3.24/mcL</td>
                <td className="border border-current w-16 px-2">M</td>
                <td className="border border-current w-44 px-2">3.5%</td>
                <td className="border border-current w-44 px-2"></td>
                <td className="border border-current w-32 px-2"></td>
                <td className="border border-current w-16 px-2"></td>
              </tr>
              <tr className="border   ">
                <td className="w-72 border  border-current  ">
                  {" "}
                  <span className="ml-2"></span>{" "}
                </td>
                <td className="border border-current w-32 px-2"></td>
                <td className="border border-current w-16 px-2">B</td>
                <td className="border border-current w-44 px-2">0.2%</td>
                <td className="border border-current w-44 px-2"></td>
                <td className="border border-current w-32 px-2"></td>
                <td className="border border-current w-16 px-2"></td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end items-center mt-2 ">
            <div>
              <Image
                className=""
                src={images.RFlogo}
                alt="Picture of the author"
                width={70}
                height={70}
              />
            </div>

            <div className="text-[#2f3f90] font-semibold text-center">
              <Image
                src={images.sigimg}
                alt="Picture of the author"
                width={100}
                height={30}
              />

              <p className="text-lg  ">DR. ATUL B. BAND</p>
              <p className="text-xs">MBBS, DPH, DCH, AFIH</p>
              <p className="text-[10px]">
                Indrustrial Health Thysician and Certifying Surgeon <br /> Regn.
                MMC48470
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
