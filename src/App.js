import {Container, Grid, Typography} from "@mui/material";
import Product from "./components/product";
import {useSelector} from "react-redux";

function App() {
    const cart = useSelector((state)=>state.cart)
    console.log(cart)


  return (


    <Container>
        <Grid item sx={{mt: 6, mb: 6}} spacing={1}>
            <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2F1qs4Ts1-bHyJ8iQ9WXXHa-bR7DOvSu9rfsAyBAjew&usqp=CAU&ec=48600112'
                 alt='Welcome to CharlieBrown Shopping Center' width='100%' height='300px'/>
        </Grid>

        <Grid container
              // alignItems='center'
              justifyContent='space-evenly'
              flexDirection='column'
              sx={{ml: '20px', mr: '10px'}}>

            <Grid item>
                <Typography variant = 'h4'>Your Shopping Cart</Typography>
            </Grid>
            <Grid item mt= '5px'>
                <Typography variant = 'subtitle1'>Thank you for shopping with us</Typography>
            </Grid>

        </Grid>

        <Grid sx={{mt: 10, border: '1px solid black', borderRadius:'5px' }}>
            {
                cart.map((cart)=>{
                    return  <Product cart = {cart}/>
                })
            }
        </Grid>

    </Container>
  );
}

export default App;
