import { Link } from "react-router-dom"
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logoArt from "../../assets/images/logo.jpg";
import logoArt1 from "../../assets/images/logo-blue-art1.png";
import ReactPlayer from 'react-player'

const HeroSection = () => {
  return (
    <Container className="fadeInUp">
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box sx={{ maxWidth: "700px", py: 5, mb: 5, mx: 'auto' }}>
          <Typography
            color="primary.main"
            variant="h2"
            sx={{ fontWeight: 'bold', mb: 3 }}
            component="div"
          >
            X-Verse
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 8 }}>
            Web3, tokenomics, AR/VR, NFTs and cryptos bring a new way of building services and business models. In order for people to have incredible experiences in the Metaverse, interfaces have evolved, becoming more immersive, more human and more accessible. At X-Verse, we see Web3 and the Metaverse as an opportunity to connect people's lives even better.

            The latest Ethereum blockchain platform to be on the lookout for is X-Verse. This digital landscape is anchored in the gaming world but at its core, much like another platforms, it is a real estate metaverse. X-Versse allows players to reserve and purchase space for their own virtual experiences or games to exist. In addition, users can sell NFTs, and create games and assets to engage their virtual community. Companies are using this opportunity to expand their brands to allow their audience to have genuine experiences.
            <br />

          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ fontSize: 24, mb: 0 }}>
            <b>Enter the X-Verse</b>
            <Stack
              direction="row"
              spacing={6}
            >
              <Button
                // component={Link}
                // to="/pre-sale"
                // disableElevation
                variant="contained"
                size="large"
                endIcon={<DownloadIcon />}>
                <a
                  download
                  href="/X-Verse-1.0-Windows.zip"
                >
                  Windows
                </a>
                
              </Button>

              <Button
                variant="contained"
                size="large"
                endIcon={<DownloadIcon />}>
                  <a
                  download
                  href="/X-Verse-1.0-MacOS.zip"
                >
                  Mac OS
                </a>
                
              </Button>

              <Button
                variant="contained"
                size="large"
                endIcon={<DownloadIcon />}>
                Linux
              </Button>

            </Stack>
          </Typography>
          {/* <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            ...
          </Typography> */}

          
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <img
            src={logoArt}
            alt="Logo Alt"
            width="600px"
          // height="319"
          />
          <img
            src={logoArt1}
            alt="Logo Alt"
            width="600px"
          // height="319"
          />
        </Box>
      </Stack>
      <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, fontWeight: 700 }}
          >
            Let's get more and more $X token.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
          >
            <Button
              component={Link}
              to="/pre-sale"
              disableElevation
              variant="contained"
              endIcon={<ArrowForwardIcon />}>
              Get X
            </Button>
            <Button
              component="a"
              href={""} // elo whitepaper url
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ArrowDownwardIcon />}>
              X Whitepaper
            </Button>
          </Stack>
    </Container>
  );
}

export default HeroSection;
