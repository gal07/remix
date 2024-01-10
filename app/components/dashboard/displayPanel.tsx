import { Grid, Box, Typography, Stack, Icon } from "@mui/material";

export default function DisplayPanel(data_dashboard: any){
    return(
        <div>
            
            <Grid container spacing={2} >
          
          {/* Grid 1 */}

          <Grid item xs={12} lg={3}>
            <Box sx={{
              '& > :not(style)': { m: 1, width: '24ch' },
              padding:"0.5em",
              boxShadow: 2
            }}>
              <Typography variant='subtitle1'>Today Transaction</Typography>
              <Stack direction={"row"} spacing={3}>
              <Typography variant='h6'>{data_dashboard.today_transaction?.today}</Typography>
              <Typography variant='h6' color={(parseInt(data_dashboard.today_transaction?.percentage.replace('%','')) > 1 ? "green":"red")}> 
                 {data_dashboard.today_transaction?.percentage}
                 <Icon>{(parseInt(data_dashboard.today_transaction?.percentage.replace('%','')) > 1 ? "trending_up":"trending_down")}</Icon> 

              </Typography>
              </Stack>
              <Typography variant='body2'>Yesterday : {data_dashboard.today_transaction?.yesterday}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box sx={{
              '& > :not(style)': { m: 1, width: '24ch' },
              padding:"0.5em",
              boxShadow: 2
            }}>
              <Typography variant='subtitle1'>Today Repeat Customers</Typography>
              <Stack direction={"row"} spacing={3}>
                <Typography variant='h6'>{data_dashboard.today_repeat_customers}</Typography>
              </Stack>
              <Typography variant="body2">&nbsp;</Typography>
              
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box sx={{
              '& > :not(style)': { m: 1, width: '24ch' },
              padding:"0.5em",
              boxShadow: 2
            }}>
              <Typography variant='subtitle1'>Total Transaction</Typography>
              <Stack direction={"row"} spacing={3}>
                <Typography variant='h6'>{data_dashboard.total_transaction}</Typography>
              </Stack>
              <Typography variant="body2">&nbsp;</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={3}>
            <Box sx={{
              '& > :not(style)': { m: 1, width: '24ch' },
              padding:"0.5em",
              boxShadow: 2
            }}>
              <Typography variant='subtitle1'>Total Revenue(Rp)</Typography>
              <Stack direction={"row"} spacing={3}>
                <Typography variant='h6'>{data_dashboard.total_revenue}</Typography>
              </Stack>
              <Typography variant="body2">&nbsp;</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box sx={{
              '& > :not(style)': { m: 1, width: '15ch' },
              padding:"0.5em",
              boxShadow: 2
            }}>
              <Typography variant='subtitle1'>Total Members</Typography>
              <Stack direction={"row"} spacing={3}>
                <Typography variant='h6'>{data_dashboard.total_member}</Typography>
              </Stack>
              <Typography variant="body2">&nbsp;</Typography>
            </Box>
          </Grid>

          {/* Grid 2 */}

          <Grid item xs={12} lg={3}>
            <Box sx={{
              '& > :not(style)': { m: 1, width: '28ch' },
              padding:"0.5em",
              boxShadow: 2
            }}>
              <Typography variant='subtitle1'>Today Revenue(Rp)</Typography>
              <Stack direction={"row"} spacing={3}>
              <Typography variant='h6'>{data_dashboard.today_revenue.today}</Typography>
              <Typography variant='h6' color={(parseInt(data_dashboard.today_revenue.percentage.replace('%','')) > 1 ? "green":"red")}>
                {data_dashboard.today_revenue.percentage}
                <Icon>{(parseInt(data_dashboard.today_revenue.percentage.replace('%','')) > 1 ? "trending_up":"trending_down")}</Icon> 
              </Typography>
              </Stack>
              <Typography variant='body2'>Yesterday : {data_dashboard.today_revenue.yesterday}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box sx={{
              '& > :not(style)': { m: 1, width: '24ch' },
              padding:"0.5em",
              boxShadow: 2
            }}>
              <Typography variant='subtitle1'>Total Product Sold</Typography>
              <Stack direction={"row"} spacing={3}>
              <Typography variant='h6'>{data_dashboard.today_product.today}</Typography>
              <Typography variant='h6' color={(parseInt(data_dashboard.today_product.percentage.replace('%','')) > 1 ? "green":"red")}>
                {data_dashboard.today_product.percentage}
                <Icon>{(parseInt(data_dashboard.today_product.percentage.replace('%','')) > 1 ? "trending_up":"trending_down")}</Icon> 
              </Typography>
              </Stack>
              <Typography variant='body2'>Yesterday : {data_dashboard.today_product.yesterday}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box sx={{
              '& > :not(style)': { m: 1, width: '24ch' },
              padding:"0.5em",
              boxShadow: 2
            }}>
              <Typography variant='subtitle1'>This Month Transactions</Typography>
              <Stack direction={"row"} spacing={3}>
              <Typography variant='h6'>{data_dashboard.monthly_transacion.this_month}</Typography>
              <Typography variant='h6' color={(parseInt(data_dashboard.monthly_transacion.percentage.replace('%','')) > 1 ? "green":"red")}>
                {data_dashboard.monthly_transacion.percentage}
                <Icon>{(parseInt(data_dashboard.monthly_transacion.percentage.replace('%','')) > 1 ? "trending_up":"trending_down")}</Icon> 
              </Typography>
              </Stack>
              <Typography variant='body2'>Last Month : {data_dashboard.monthly_transacion.last_month}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={3}>
            <Box sx={{
              '& > :not(style)': { m: 1, width: '30ch' },
              padding:"0.5em",
              boxShadow: 2
            }}>
              <Typography variant='subtitle1'>This Month Revenue(Rp)</Typography>
              <Stack direction={"row"} spacing={3}>
              <Typography variant='h6'>{data_dashboard.monthly_revenue.this_month}</Typography>
              <Typography variant='h6' color={(parseInt(data_dashboard.monthly_revenue.percentage.replace('%','')) > 1 ? "green":"red")}>
                {data_dashboard.monthly_revenue.percentage}
                <Icon>{(parseInt(data_dashboard.monthly_revenue.percentage.replace('%','')) > 1 ? "trending_up":"trending_down")}</Icon> 
              </Typography>
              </Stack>
              <Typography variant='body2'>Last Month : {data_dashboard.monthly_revenue.last_month}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box sx={{
              '& > :not(style)': { m: 1, width: '24ch' },
              padding:"0.5em",
              boxShadow: 2
            }}>
              <Typography variant='subtitle1'>This Month Members</Typography>
              <Stack direction={"row"} spacing={3}>
              <Typography variant='h6'>{data_dashboard.monthly_member.this_month}</Typography>
              <Typography variant='h6' color={(parseInt(data_dashboard.monthly_member.percentage.replace('%','')) > 1 ? "green":"red")}>
                {data_dashboard.monthly_member.percentage}
                <Icon>{(parseInt(data_dashboard.monthly_member.percentage.replace('%','')) > 1 ? "trending_up":"trending_down")}</Icon> 
              </Typography>
              </Stack>
              <Typography variant='body2'>Last Month : {data_dashboard.monthly_member.last_month}</Typography>
            </Box>
          </Grid>
                
        </Grid>

        </div>
    );
}