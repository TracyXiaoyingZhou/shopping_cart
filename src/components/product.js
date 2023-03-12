import {Grid, Typography} from "@mui/material";

function Product({cart}) {
    const {name, price, amount} = cart
    return (
        < >
            <Grid container
                  alignItems='center'
                  justifyContent='space-between'
                  sx={{background:'#B323D25C'}}>
                <Grid item>
                    <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAQ4yRlP_auhIhl9whaKcSNeOkDUmpKhU5Cu1-q1m0g&usqp=CAU&ec=48600112"
                         alt="MacBook"/>
                </Grid>
                <Grid item>
                    <Grid container flexDirection='column'>
                        <Grid item>MacBook Pro</Grid>
                        <Grid item>{price}</Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <button>+</button>
                        <Typography variant={"h5"}>{amount}</Typography>
                        <button>-</button>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant={"h5"}>${price * amount}</Typography>
                </Grid>
                <Grid item>
                    <button>x</button>
                </Grid>
            </Grid>

            <Grid container
                  alignItems='center'
                  justifyContent='space-between'
                  sx={{background:'#B323D25C'}}>
                <Grid item>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfol3FOO0T5iPWS-qyiiVlDeXdQXOADJw-DLdtuLLgcC1TvRjOSlytUg31b-w5ngT0xVb4UoXRMs&usqp=CAU&ec=48600112"
                         alt="MacBook"/>
                </Grid>
                <Grid item>
                    <Grid container flexDirection='column'>
                        <Grid item>PlayStation®5</Grid>
                        <Grid item>{price}</Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <button>+</button>
                        <Typography variant={"h5"}>{amount}</Typography>
                        <button>-</button>
                    </Grid>
                </Grid>
                <Grid>
                    <Typography variant={"h5"}>${price * amount}</Typography>
                </Grid>
                <Grid item>
                    <button>x</button>
                </Grid>
            </Grid>
        </>
    );
}

export default Product