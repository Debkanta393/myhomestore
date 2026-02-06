import React, { useState } from "react";
import { ChevronRight, CreditCard } from "lucide-react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AnimatePresence, motion } from "framer-motion";

export default function Payment() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [continuePayment, setContinuePayment] = useState(false);
  return (
    <div className="w-full">
      <div className="flex items-start justify-between w-10/12 mx-auto gap-20 divide-indigo-600 mt-20">
        {/* Left section */}
        <AnimatePresence>
          {continuePayment ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 2, ease: "easeInOut" }}
            >
                <div className="flex items-center gap-5">
                <p className="text-lg">Address</p>
                <ChevronRight />
                <p className="text-lg">Payment</p>
              </div>
              <div className="flex items-center justify-between mt-10 w-[600px]">
                <p className="text-lg">Address</p>
                <p className="text-lg">
                  3891 Ranchview Dr. Richardson, <br />
                  California 62639
                </p>
                <p className="text-lg underline">Continue</p> 
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-semibold">Payment Methods</h3>
                {/* Card */}
                <div className="flex items-center gap-5 mt-6">
                  <input type="radio" name="payment" id="payment" className="accent-[#8A6A5B]"/>
                  <CreditCard />
                  <p>Credit Card</p>
                </div>
                {/* Card details */}
                <div className="flex items-center justify-between gap-10 mt-6 w-[600px]">
                  <div>
                    <p>Card Number</p>
                    <p>1234 1234 1234 1234</p>
                  </div>
                  <div>
                    <p>Expiration Date</p>
                    <p>12/12</p>
                  </div>
                  <div>
                    <p>CVC Code</p>
                    <p>456</p>
                  </div>
                </div>
                {/* Paypal */}
                <div className="flex mt-6 items-center gap-5">
                  <input type="radio" name="payment" id="payment" className="accent-[#8A6A5B]"/>
                  <img src="./images/PayPal.svg.png" alt="" className="h-5 w-16"/>
                  <p>Paypal</p>
                </div>
                <div className="flex items-center gap-3 mt-10">
                  <input type="checkbox" className="w-4 h-4 accent-[#8A6A5B] rounded border-2 border-[#8A6A5B] text-[#8A6A5B] focus:ring-2 focus:ring-[#8A6A5B] cursor-pointer"/>
                  <p>Billing Address same as Shipping Address</p>
                </div>
              </div>
              <button className="p-3 text-white bg-[#998E8A] mt-10 w-full">Pay Now</button>
            </motion.div>
          ) : (
            <div
              className={`w-7/12 pr-20 ${continuePayment ? "hidden" : "block"}`}
            >
              <div className="flex items-center gap-5">
                <p className="text-lg">Address</p>
                <ChevronRight />
                <p className="text-lg">Payment</p>
              </div>
              <h2 className="text-3xl font-semibold mt-5">Shipping Address</h2>

              {/* Form input */}
              <form action="" className="mt-10">
                <div className="flex flex-col gap-2">
                  <Box
                    component="form"
                    sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Enter Your Email*"
                      variant="outlined"
                    />
                  </Box>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col gap-2">
                    <Box
                      component="form"
                      sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="First Name*"
                        variant="outlined"
                      />
                    </Box>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Box
                      component="form"
                      sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Last Name*"
                        variant="outlined"
                      />
                    </Box>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Box
                    component="form"
                    sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Address*"
                      variant="outlined"
                    />
                  </Box>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Box
                    component="form"
                    sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Apt, Line, Suite etc.*"
                      variant="outlined"
                    />
                  </Box>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Box sx={{ minWidth: "100%" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Country
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Australia"}>Australia</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        City
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Sydney"}>Sydney</MenuItem>
                        <MenuItem value={"Melbourne"}>Melbourne</MenuItem>
                        <MenuItem value={"Canbera"}>Canbera</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        State
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Sydney"}>Sydney</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Box
                    component="form"
                    sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Zipcode"
                      variant="outlined"
                    />
                  </Box>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Box
                    component="form"
                    sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                    />
                  </Box>
                </div>
                <button
                  className="p-3 bg-[#998E8A] text-white mt-6 w-full cursor-pointer"
                  onClick={() => setContinuePayment(true)}
                >
                  Continue
                </button>
              </form>
            </div>
          )}
        </AnimatePresence>

        {/* Right section */}
        <div className="w-5/12">
          <img
            src="./images/bathroom.webp"
            alt=""
            className="w-full h-[400px]"
          />
          <div className="space-y-5 mt-10">
            <h3 className="text-3xl font-semibold">Premium Luxury Flooring</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Cras pulvinar in non sit
              massa aenean. Nisl ornare pharetra quis non aliquet.
            </p>
            <p className="text-[#297140] font-semibold">In Stock</p>
          </div>
          <div className="mt-20 space-y-3">
            <h3 className="text-2xl font-semibold">Payment Summery</h3>
            <div className="flex items-center justify-between">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg">$30.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg">Shipping</p>
              <p className="text-lg">FREE</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">Estimated Total</p>
              <p className="text-lg">$27.00</p>
            </div>
            <p className="text-lg">
              Customs duties and taxes may apply to international purchases.
              Learn more in our support center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
