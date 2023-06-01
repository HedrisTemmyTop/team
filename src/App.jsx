import {
  Button,
  ButtonGroup,
  Typography,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Container,
} from "@material-ui/core";
import "./App.css";
import {
  AirlineSeatFlat,
  DeleteOutline,
  KeyboardArrowLeft,
  SendSharp,
} from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles({
  btn: {
    fontSize: 25,
    backgroundColor: "green",

    cursor: "pointer !important",

    "&:hover": {
      fontSize: 20,
      backgroundColor: "yellow",
    },
  },
  field: {
    maxWidth: "200px",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgb(211,112, 112)",
      main: "rgb(222, 222, 222)",
    },
  },
});
const notes = [
  {
    title: "Yoshi's birthday bash",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "reminders",
    id: 1,
  },
  {
    title: "Complete my ninja training",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    category: "work",
    id: 2,
  },
  {
    title: "Order a pizza!",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "todos",
    id: 3,
  },
];

function App() {
  const classes = useStyles();
  const [val, setVal] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setError(false);
    setVal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!val) setError(true);
  };
  return (
    // // <div className="border-4 border-green-600 md:1">
    // //   {/* <h1 className="text-600">hello</h1>
    // //   <h1 className="text-#000  text-sm md:text-base lg:text-xl">hello</h1>
    // //   <p className="text-4xl italic  uppercase underline underline-offset-4 decoration-1  decoration-wavy  decoration-red-500">
    // //     A regular paragraph
    // //   </p>
    // //   <p className="text-lg">A regular paragraph</p>
    // //   <p className="text-base">A regular paragraph</p> */}
    // //   <p className="py-20 mx-20">
    // //     This is some Lorem ipsum dolor sit amet consectetur adipisicing elit.
    // //     Atque, molestiae.
    // //   </p>

    // // </div>
    // // <div className="flex min-h-screen space-y-4 bg-white flex-col">
    // //   <div className="min-w-min w-1/5 bg-red-500">side bar</div>
    // //   <div className="w-4/5 bg-green-500 ">main content</div>
    // // </div>
    // <div className="bg-white min-h-screen text-black">
    //   <div>Header</div>
    //   <div className="flex">
    //     <div className="">main content</div>
    //     {/* <div className="flex flex-col"> */}
    //     <div>side bar</div>
    //     <div>menu</div>
    //     {/* </div> */}
    //   </div>
    // </div>
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h1" color="primary" align="center">
          Create a page
        </Typography>
        <Typography color="error" noWrap>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
          aspernatur ut illo ab repellendus odit harum earum porro nulla quidem
          quae explicabo reiciendis? Modi odit saepe dolore nam vero excepturi?
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Create a new note
        </Typography>
        <ButtonGroup>
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Primary
          </Button>
          <Button
            variant="outlined"
            startIcon={<KeyboardArrowLeft />}
            endIcon={<SendSharp />}
            disabled
            className={classes.btn}
          >
            Primary
          </Button>
          <AirlineSeatFlat size="small" />
        </ButtonGroup>
        <form style={{ margin: "10rem" }} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            color="primary"
            label="outlined"
            autoComplete="off"
            fullWidth
            required
            className={classes.field}
            multiline
            rows={4}
            onChange={handleChange}
            value={val}
            error={error}
          />
          <Button variant="outlined" color="primary" type="submit">
            Submit
          </Button>
          <RadioGroup>
            {/* <Radio value="male" label="female" />
            <Radio value="female" label="female" /> */}
            <FormControlLabel control={<Radio />} value="male" label="male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="female"
            />
          </RadioGroup>
        </form>
      </div>
      <Container>
        <Grid container spacing={1}>
          {/* <Grid item xs={12} md={3} sm={6}>
            <Paper>1</Paper>
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <Paper>2</Paper>
          </Grid>{" "}
          <Grid item xs={12} md={3} sm={6}>
            <Paper>3</Paper>
          </Grid>{" "}
          <Grid item xs={12} md={3} sm={6}>
            <Paper>4</Paper>
          </Grid> */}
          {notes.map((note) => (
            <Grid key={note.id} xs={12} md={6} lg={4} item elevation={1}>
              <Card>
                <CardHeader
                  action={
                    <IconButton>
                      <DeleteOutline />
                    </IconButton>
                  }
                  title={note.title}
                  subheader={note.category}
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    {note.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
