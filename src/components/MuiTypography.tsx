// import React from 'react'
import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="subtitle1">
        <b>Typography</b> is an MUI component with a set of variant. Consent with appearance of text with the App. 
         There are 13 variant in Typography. Here are 10 most useful variants. 
         
      </Typography>

      <Typography variant="h1"> H1 heading </Typography>
      <Typography variant="h2"> H2 heading </Typography>
      <Typography variant="h3"> H3 heading </Typography>
      <Typography variant="h4"> H4 heading </Typography>
      <Typography variant="h5"> H5 heading </Typography>
      <Typography variant="h6"> H6 heading </Typography>

      <br></br>

      <Typography variant="subtitle1">
        {" "}
        Sub title 1 (it comes under h6) : it has bigger size compared to ST2 but
        lighter weight(thin font){" "}
      </Typography>
<br></br>

      <Typography variant="subtitle2">
        {" "}
        Sub title 2 (other variant of h6): it has smaller size compared to ST1
        but heavier volume(bit bolder){" "}
      </Typography>
      <br></br>

      <Typography variant="h3">
        {" "}
        Above all have h1 - h6 and last 2 long STs have h6 tag as the element as
        well{" "}
      </Typography>
<br></br>
      <Typography variant="body1">
        {" "}
        this is 'body1' which is default 16px & has the <b> 'p-tag' </b> as the
        element. It is the default value of the variant prop. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Iste, temporibus.{" "}
      </Typography>
<br></br>

      <Typography>
        {" "}
        Here we have used the default <b>Typography</b>. Without any{" "}
        <b>variant</b> prop. Just to confirm that <b>body1</b> is equivalent to
        default type in <b>Typography</b>{" "}
      </Typography>
<br></br>

      <Typography variant="body2">
        {" "}
        'body2' is the smaller version of 'body1'. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Accusamus, fugit?{" "}
      </Typography>
      <br></br>

      <Typography variant="h4" component="h1">
        we can change the semantic element using the component prop. as <b>h1  </b>    
        eg. : We can change the this line Top heading as <b>prioritized as <i>H1</i></b> but the physical appearance/style should be as <b><i>H4</i></b>
      </Typography>
      <br></br>

      <Typography variant="h4" component="h1" gutterBottom>
        all same as above. just added a gutterBottom prop. It helps in adding margin at the bottom. like we use a heading... so we'll need it
        </Typography>
    </div>
  );
};
