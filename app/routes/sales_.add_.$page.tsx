import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import { LoaderFunctionArgs, MetaFunction, json } from '@remix-run/node';
import { getProducts } from '~/data/sourceData';
import { useLoaderData, useNavigate, useRevalidator} from '@remix-run/react';
import Grid from '@mui/material/Grid';
import { Box, Fab, InputBase, alpha } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Search } from '@mui/icons-material';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const meta: MetaFunction = () => {

    return [
      { title: "ECCS POS - Choose Product" },
      { name: "description", content: "Welcome to eccs-pos!" },
    ];
  
  };

export async function loader({
    params,
  }: LoaderFunctionArgs) {
  
    const product = await getProducts(params.page);
    console.log("ke load");
    console.log(params);
    
    return product;
  
  }

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Productadd() {

  const revalidator = useRevalidator();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const product = useLoaderData < typeof loader > ();
  const [pagination, setPagination] = React.useState(product.result.pagination);

  const navigate = useNavigate();
  const navigates = () => {
    navigate("/sales");
  };
  

  const changePage = (page: number) => {
    console.log("changePage "+page);
      // revalidator.revalidate()
      navigate("/sales/add/"+page);
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <div style={{marginBottom:"4em"}}>

        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab sx={{
                position: "fixed",
                bottom: (theme) => theme.spacing(2),
                right: (theme) => theme.spacing(2)
                }} 
                color="primary"
                aria-label="add"
                onClick={navigates}
                >
            <Icon>shopping_basket</Icon>
            </Fab>
        </Box>

        <Grid container style={{marginTop:"1em"}}>
            <Grid item xs={12} style={{"textAlign":"center","marginBottom":"1em"}}>
                <Typography variant={"h4"}>
                    Choose Product
                </Typography>


                <Search>
                  <SearchIconWrapper>
                    <Icon>search</Icon>
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>

            </Grid>
        </Grid>

          {product.result.data.length ? (
              <Grid container xs={12} spacing={2}>
                {product.result.data.map((item: any) => (
                  <Grid item xs={12} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            action={
                            <IconButton aria-label="settings">
                                <Icon>more_vert</Icon>
                            </IconButton>
                            }
                            title={item.nama_produk}
                            subheader={item.barcode}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={item.imageList}
                            alt={item.nama_produk}
                        />
                        <CardContent>
                           
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <Icon>shopping_basket</Icon>
                            </IconButton>
                            <IconButton aria-label="share">
                            <Icon>visibility</Icon>
                            </IconButton>
                        </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <p>
                <i>No Product</i>
              </p>
            )}

        <Stack sx={{"alignItems":"center","margin":"2em"}} spacing={3}>
            <Pagination 
            count={pagination.total_page} 
            onChange={(e,value)=>{
                console.log(e);
                console.log(value);
                changePage(value);
            }}
            variant="outlined" 
            shape="rounded" />
        </Stack>

    </div>
    
  );
}