import {Stack, Button, Typography} from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import IconButton from '@mui/material/IconButton';

export const MuiButton = () => {
  return (
    <Stack spacing={4}>

        <Stack spacing={2} direction={"row"}>
            {/*    When you want less attention in the UI, EX. Card Footer or Confirmation Pop-up
                We can use 'href' attribute in 'text' variant. 
                After that it will be converted into <a> tag.
            */}
            <Button variant="text" href="https://www.google.com" >Text</Button>

            {/*     for Primary action, Ex. Register & Login Button           */}
            <Button variant="contained">Contained</Button>

            {/*      for Secondary actions, Ex. Cancel & Go-back Button          */}
            <Button variant="outlined">Outlined</Button>


            {/* each of them are the HTMl button element. */}
        </Stack>


{/* ********     Colour    ********** */}

            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" color="primary" >Primary</Button>
                <Button variant="contained" color="secondary" >Secondary</Button>
                <Button variant="contained" color="error" >error</Button>
                <Button variant="contained" color="warning" >warning</Button>
                <Button variant="contained" color="info" >info</Button>
                <Button variant="contained" color="success" >success</Button>
            </Stack>

            <Stack spacing={2} direction={"row"}>
                <Button variant="text" color="primary" >Primary</Button>
                <Button variant="text" color="secondary" >Secondary</Button>
                <Button variant="text" color="error" >error</Button>
                <Button variant="text" color="warning" >warning</Button>
                <Button variant="text" color="info" >info</Button>
                <Button variant="text" color="success" >success</Button>
            </Stack>
            <br/>
            
            <Typography variant="body1" >
                [if we remove the direction="row" attribute from the below Stack-element] it will be structured, in the form of Up-to-down.
            </Typography>

            <Stack spacing={2}>
                <Button variant="outlined" color="primary" >Primary</Button>
                <Button variant="outlined" color="secondary" >Secondary</Button>
                <Button variant="outlined" color="error" >error</Button>
                <Button variant="outlined" color="warning" >warning</Button>
                <Button variant="outlined" color="info" >info</Button>
                <Button variant="outlined" color="success" >success</Button>
            </Stack>



            <br />
            <br />

            <Typography variant="body1" >
                <b>Size</b> : for smaller & larger Button we can use Size-prop. 
                Here `display='flex'` is the default value & Effects the size of the button. So we use 'block'.
            </Typography>

            <Stack display='block' spacing={2} direction={'row'}>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>

            </Stack>



            <br />
            <br />

            <Typography variant="body1" >
                <b>Icon</b> : we need to run `npm install @mui/icons-material` OR `yarn add @mui/icons-material`
            </Typography>

            {/* <Stack spacing={2} direction={'row'} >
                <Button variant="contained" startIcon={<SendIcon />} >Send </Button>prop: startIcon
                <Button variant="outlined" endIcon={<SendIcon />} >Send</Button>prop: endIcon



            </Stack> */}

            <Stack spacing={2} display={'block'} >
                <Button variant="contained" startIcon={<SendIcon />} disableRipple > Send </Button> prop: startIcon, <b><i>disableRipple</i></b>-prop: onclick-animation-effect
                <br />
                <Button variant="contained" endIcon={<SendIcon />} disableElevation>Send</Button> prop: endIcon, <b><i>disableElevation</i></b>-prop: shadow
                <br />
                <IconButton aria-label="send" color="success" size="small" onClick={() => alert("Clicked")} >
                    <SendIcon />     
                </IconButton>IconButton component is good for Navigation-Bar
            </Stack>



    </Stack>



    // <Stack  >

    // </Stack>



    
  )
}
