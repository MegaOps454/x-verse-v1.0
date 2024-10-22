import { Fragment, useState } from "react";
import Button from '@mui/material/Button';
import WalletProviders from "./NetworkWalletProviders";
import WalletIcon from '../ui/icons/Wallet'
import Toast from '../Toast';
import { ethers } from "ethers"; // Optional, if you want to use ethers.js
import { Snackbar, Alert } from "@mui/material";


const Unauthenticated = () => {

  const [hasMetaMask, setHasMetaMask] = useState(false);
  const [open, setOpen] = useState(false);

  const checkMetaMask = async () => {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&", window.ethereum);
    if (typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask === true) {
      console.log("MetaMask is installed!");
      setHasMetaMask(true);
      // Optionally, connect to MetaMask and get the current accounts
      try {
        // await window.ethereum.request({ method: 'eth_requestAccounts' });
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // const signer = provider.getSigner();
        // console.log("Connected account:", await signer.getAddress());
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.log("MetaMask is not installed.");
      setOpen(true);
      setHasMetaMask(false);
    }
  };


  return (
    <Fragment>
      <Button
        variant="contained"
        disableElevation
        fullWidth
        onClick={() => checkMetaMask()}
        startIcon={<WalletIcon />}
        sx={{ boxShadow: 'rgb(0 0 0 / 8%) 0px 8px 28px' }}
      >
        Sign up with MetaMask
      </Button>
      <Toast
        isOpen={hasMetaMask}
        setIsOpen={setHasMetaMask}></Toast>

      <Snackbar
        open={open}
        autoHideDuration={6000} // Toast will automatically hide after 6 seconds
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Adjust toast position
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="warning"
          sx={{ width: "100%" }}
          action={
            <Button
              color="inherit"
              size="small"
              href="https://metamask.io/download.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Install MetaMask
            </Button>
          }
        >
          <b>MetaMask</b> is not installed. Please install it to use this DApp.
        </Alert>
      </Snackbar>
    </Fragment>
  );
}

export default Unauthenticated;