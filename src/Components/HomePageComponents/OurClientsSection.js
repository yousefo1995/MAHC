import { Stack, Typography } from "@mui/material";
import React from "react";
import alhakir from "../images/clientImages/client-alhakir.webp";
import almanaHospital from "../images/clientImages/client-almanaHospitals.png";
import amco from "../images/clientImages/client-AMCO.png";
import faisaliah from "../images/clientImages/client-faisaliah.jpg";
import panda from "../images/clientImages/client-Panda.png";
import petroMin from "../images/clientImages/client-petroMin.jpg";
import pureGym from "../images/clientImages/client-pureGym1.png";
import riyadhPharma from "../images/clientImages/client-RiyadhPharma.png";
import spl from "../images/clientImages/client-SPL.jpg";
import sporkys from "../images/clientImages/client-sporkys.png";
import unitedMotors from "../images/clientImages/client-unitedMotors1.jpg";
import alMamlakaHospital from "../images/clientImages/client-Al-mamlakHospital.jpeg";
import padelIn from "../images/clientImages/client-padel-In.png";
import tamimiMarkets from "../images/clientImages/client-tamimiMarkets.png";
import ministryOfEnergy from "../images/clientImages/client-ministryOfEnergy.jpg";

const clientsIcons = [
  { name: "Alhakir", url: alhakir },
  { name: "Almana Hospital", url: almanaHospital },
  { name: "AMCO", url: amco },
  { name: "Faisaliah", url: faisaliah },
  { name: "Panda", url: panda },
  { name: "Petro Min", url: petroMin },
  { name: "Pure Gym", url: pureGym },
  { name: "Riyadh Pharma", url: riyadhPharma },
  { name: "SPL", url: spl },
  { name: "Sporky", url: sporkys },
  { name: "United Motors", url: unitedMotors },
  { name: "Al-Mamlaka Hospital", url: alMamlakaHospital },
  { name: "Padel-In", url: padelIn },
  { name: "Tamimi Markets", url: tamimiMarkets },
  { name: "Ministry Of Energy", url: ministryOfEnergy },
];

const OurClientsSection = () => {
  return (
    <Stack width="100%" alignItems="center" mt={2} mb={6}>
      <Typography
        variant="h1"
        fontSize="36px"
        fontWeight="700"
        mb={3}
        color="primary.main"
      >
        <span style={{ borderBottom: "4px solid" }}>Our Clients</span>
      </Typography>
      <Typography
        width="60%"
        textAlign="center"
        variant="body1"
        mb={1}
        color="primary"
      >
        MAHC is proud to collaborate with a diverse range of clients from
        various industries. Our commitment to excellence has fostered strong,
        lasting partnerships with organizations across sectors.
      </Typography>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        maxWidth="77%"
        justifyContent="space-evenly"
        mt={2}
      >
        {clientsIcons.map((item, index) => (
          <Stack
            key={index}
            mt={1}
            px={{ xs: 1, xl: 5 }}
            justifyContent="center"
          >
            <img
              src={item.url}
              alt={item.name}
              loading="lazy"
              style={{ maxWidth: "100px" }}
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default OurClientsSection;
